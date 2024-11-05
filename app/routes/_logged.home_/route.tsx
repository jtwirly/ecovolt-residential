import React from 'react'
import { Typography, Card, Row, Col, List } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: energyUsage, isLoading: isLoadingUsage } =
    Api.energyUsage.findFirst.useQuery({
      where: { userId: user?.id },
      orderBy: { timestamp: 'desc' },
    })

  const { data: recommendations, isLoading: isLoadingRecommendations } =
    Api.energySavingRecommendation.findMany.useQuery({
      where: { userId: user?.id },
      take: 3,
    })

  const quickLinks = [
    {
      title: 'Energy Usage Dashboard',
      icon: 'las la-tachometer-alt',
      path: '/dashboard',
    },
    {
      title: 'Renewable Energy Optimization',
      icon: 'las la-solar-panel',
      path: '/renewable-optimization',
    },
    {
      title: 'Smart Device Management',
      icon: 'las la-plug',
      path: '/smart-devices',
    },
    {
      title: 'Energy Savings Calculator',
      icon: 'las la-calculator',
      path: '/savings-calculator',
    },
    {
      title: 'EV Charging Planner',
      icon: 'las la-charging-station',
      path: '/ev-charging',
    },
    {
      title: 'Subscription Management',
      icon: 'las la-credit-card',
      path: '/subscription',
    },
    {
      title: 'Energy Market Insights',
      icon: 'las la-chart-line',
      path: '/market-insights',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to Your Energy Dashboard</Title>
      <Paragraph>
        Get an overview of your energy usage, personalized recommendations, and
        quick access to key features.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Current Energy Usage" loading={isLoadingUsage}>
            {energyUsage && (
              <>
                <Paragraph>
                  <Text strong>Consumption: </Text>
                  {energyUsage.consumption} {energyUsage.unit}
                </Paragraph>
                <Paragraph>
                  <Text strong>Last Updated: </Text>
                  {energyUsage.timestamp}
                </Paragraph>
              </>
            )}
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title="Energy-Saving Recommendations"
            loading={isLoadingRecommendations}
          >
            <List
              dataSource={recommendations}
              renderItem={item => (
                <List.Item>
                  <Text>{item.recommendationText}</Text>
                  <br />
                  <Text type="secondary">
                    Potential Savings: {item.potentialSavings}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: '24px' }}>
        Quick Links
      </Title>
      <Row gutter={[16, 16]}>
        {quickLinks.map((link, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              onClick={() => navigate(link.path)}
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <i
                className={link.icon}
                style={{ fontSize: '24px', marginBottom: '8px' }}
              ></i>
              <Paragraph>{link.title}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
