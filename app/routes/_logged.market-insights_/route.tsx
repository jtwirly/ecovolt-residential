import React, { useState, useEffect } from 'react'
import { Typography, Card, Row, Col, Alert, List, Spin } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergyMarketInsightsPage() {
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const { data: energyMarketData, isLoading: isLoadingMarketData } =
    Api.energyMarket.findMany.useQuery({})
  const { data: historicalData, isLoading: isLoadingHistoricalData } =
    Api.energyMarket.findMany.useQuery({
      orderBy: { lastUpdated: 'desc' },
      take: 10,
    })

  useEffect(() => {
    const checkForPriceSpikes = () => {
      if (energyMarketData && energyMarketData.length > 0) {
        const latestPrice = parseFloat(energyMarketData[0].currentPrice || '0')
        const threshold = 0.5 // 50% increase
        const previousPrice = parseFloat(
          energyMarketData[1]?.currentPrice || '0',
        )

        if (latestPrice > previousPrice * (1 + threshold)) {
          setAlertMessage('Alert: Significant price spike detected!')
          setAlertVisible(true)
        }
      }
    }

    checkForPriceSpikes()
    const interval = setInterval(checkForPriceSpikes, 300000) // Check every 5 minutes

    return () => clearInterval(interval)
  }, [energyMarketData])

  if (isLoadingMarketData || isLoadingHistoricalData) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Energy Market Insights</Title>
      <Text>
        Stay informed about real-time energy prices and grid demand information.
      </Text>

      {alertVisible && (
        <Alert
          message={alertMessage}
          type="warning"
          showIcon
          closable
          onClose={() => setAlertVisible(false)}
          style={{ marginTop: 16, marginBottom: 16 }}
        />
      )}

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-bolt"></i> Current Energy Prices
              </>
            }
          >
            {energyMarketData && energyMarketData[0] && (
              <>
                <Text strong>Price: </Text>
                <Text>
                  {energyMarketData[0].currentPrice}{' '}
                  {energyMarketData[0].currency}/kWh
                </Text>
                <br />
                <Text strong>Last Updated: </Text>
                <Text>
                  {dayjs(energyMarketData[0].lastUpdated).format(
                    'YYYY-MM-DD HH:mm:ss',
                  )}
                </Text>
              </>
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-chart-line"></i> Grid Demand
              </>
            }
          >
            <Text>Grid demand information is currently not available.</Text>
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <>
            <i className="las la-history"></i> Historical Energy Market Data
          </>
        }
        style={{ marginTop: 24 }}
      >
        <List
          dataSource={historicalData}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={`Price: ${item.currentPrice} ${item.currency}/kWh`}
                description={`Date: ${dayjs(item.lastUpdated).format(
                  'YYYY-MM-DD HH:mm:ss',
                )}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
