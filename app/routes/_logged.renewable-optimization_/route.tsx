import React, { useState, useEffect } from 'react'
import { Typography, Card, Row, Col, Switch, Button, Spin, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RenewableEnergyOptimizationPage() {
  const { user } = useUserContext()
  const [forecast, setForecast] = useState<any>(null)
  const [useStoredEnergy, setUseStoredEnergy] = useState(false)
  const [energyStats, setEnergyStats] = useState<any>(null)

  const { data: renewableEnergy, isLoading: isLoadingRenewable } =
    Api.renewableEnergy.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { data: energyUsage, isLoading: isLoadingUsage } =
    Api.energyUsage.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: updateEnergyUsage } =
    Api.energyUsage.update.useMutation()

  useEffect(() => {
    // Simulating forecast data (replace with actual API call if available)
    setForecast({
      today: Math.floor(Math.random() * 50) + 20,
      tomorrow: Math.floor(Math.random() * 50) + 20,
    })

    if (energyUsage && renewableEnergy) {
      const totalGeneration = renewableEnergy.reduce(
        (sum, item) => sum + parseFloat(item.capacity || '0'),
        0,
      )
      const totalConsumption = energyUsage.reduce(
        (sum, item) => sum + parseFloat(item.consumption || '0'),
        0,
      )
      setEnergyStats({ totalGeneration, totalConsumption })
    }
  }, [energyUsage, renewableEnergy])

  const handleEnergySourceToggle = async (checked: boolean) => {
    setUseStoredEnergy(checked)
    try {
      await updateEnergyUsage({
        where: { id: energyUsage?.[0]?.id },
        data: { consumption: checked ? '0' : '10' }, // Example values
      })
      message.success(
        `Now ${
          checked ? 'using stored energy' : 'feeding excess power to the grid'
        }`,
      )
    } catch (error) {
      message.error('Failed to update energy usage')
    }
  }

  if (isLoadingRenewable || isLoadingUsage) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Renewable Energy Optimization</Title>
      <Paragraph>
        Manage your solar energy production, usage, and optimize your renewable
        energy strategy.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-sun"></i> Solar Energy Forecast
              </>
            }
          >
            {forecast ? (
              <>
                <Paragraph>
                  Today's forecast: {forecast.today.toString()} kWh
                </Paragraph>
                <Paragraph>
                  Tomorrow's forecast: {forecast.tomorrow.toString()} kWh
                </Paragraph>
              </>
            ) : (
              <Spin />
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-battery-three-quarters"></i> Energy Source
                Control
              </>
            }
          >
            <Paragraph>
              Use stored energy:
              <Switch
                checked={useStoredEnergy}
                onChange={handleEnergySourceToggle}
                style={{ marginLeft: '10px' }}
              />
            </Paragraph>
            <Text type="secondary">
              {useStoredEnergy
                ? 'Using stored energy'
                : 'Feeding excess power to the grid'}
            </Text>
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <>
            <i className="las la-chart-line"></i> Energy Generation and Usage
          </>
        }
        style={{ marginTop: '16px' }}
      >
        {energyStats ? (
          <>
            <Paragraph>
              Total Energy Generated: {energyStats.totalGeneration.toFixed(2)}{' '}
              kWh
            </Paragraph>
            <Paragraph>
              Total Energy Consumed: {energyStats.totalConsumption.toFixed(2)}{' '}
              kWh
            </Paragraph>
            <Paragraph>
              Net Energy:{' '}
              {(
                energyStats.totalGeneration - energyStats.totalConsumption
              ).toFixed(2)}{' '}
              kWh
            </Paragraph>
          </>
        ) : (
          <Spin />
        )}
      </Card>

      <Card
        title={
          <>
            <i className="las la-solar-panel"></i> Your Solar Panels
          </>
        }
        style={{ marginTop: '16px' }}
      >
        {renewableEnergy?.map((panel, index) => (
          <Card
            key={panel.id}
            type="inner"
            title={`Solar Panel ${index + 1}`}
            style={{ marginBottom: '10px' }}
          >
            <Paragraph>Capacity: {panel.capacity} kW</Paragraph>
            <Paragraph>
              Installation Date:{' '}
              {dayjs(panel.installationDate).format('MMMM D, YYYY')}
            </Paragraph>
          </Card>
        ))}
      </Card>

      <Button type="primary" style={{ marginTop: '16px' }}>
        <i className="las la-plus"></i> Add New Solar Panel
      </Button>
    </PageLayout>
  )
}
