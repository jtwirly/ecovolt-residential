import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Button,
  Table,
} from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergyUsageDashboardPage() {
  const { user } = useUserContext()
  const [selectedPeriod, setSelectedPeriod] = useState('week')
  const [energyGoal, setEnergyGoal] = useState(null)

  const { data: energyUsages, isLoading: isLoadingUsage } =
    Api.energyUsage.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { timestamp: 'asc' },
    })

  const { data: goals, isLoading: isLoadingGoals } =
    Api.energySavingGoal.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { endDate: 'desc' },
      take: 1,
    })

  useEffect(() => {
    if (goals && goals.length > 0) {
      setEnergyGoal(goals[0])
    }
  }, [goals])

  const chartData =
    energyUsages?.map(usage => ({
      date: dayjs(usage.timestamp).format('YYYY-MM-DD'),
      consumption: parseFloat(usage.consumption),
    })) || []

  const totalConsumption = chartData.reduce(
    (sum, item) => sum + item.consumption,
    0,
  )
  const averageConsumption = totalConsumption / chartData.length || 0
  const peakUsage = Math.max(...chartData.map(item => item.consumption))

  const goalProgress = energyGoal
    ? (totalConsumption / parseFloat(energyGoal.targetConsumption)) * 100
    : 0

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Consumption (kWh)',
      dataIndex: 'consumption',
      key: 'consumption',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Energy Usage Dashboard</Title>
      <Paragraph>
        Monitor your energy consumption, identify usage patterns, and track your
        energy-saving goals.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Consumption"
              value={totalConsumption.toFixed(2)}
              suffix="kWh"
              prefix={<i className="las la-bolt" />}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Average Consumption"
              value={averageConsumption.toFixed(2)}
              suffix="kWh"
              prefix={<i className="las la-chart-line" />}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Peak Usage"
              value={peakUsage.toFixed(2)}
              suffix="kWh"
              prefix={<i className="las la-tachometer-alt" />}
            />
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: 16 }}>
        <Title level={4}>Energy Consumption Over Time</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={18}>
            <Table
              dataSource={chartData}
              columns={columns}
              pagination={{ pageSize: 7 }}
            />
          </Col>
          <Col xs={24} md={6}>
            <Button.Group style={{ marginBottom: 16 }}>
              <Button
                type={selectedPeriod === 'week' ? 'primary' : 'default'}
                onClick={() => setSelectedPeriod('week')}
              >
                Week
              </Button>
              <Button
                type={selectedPeriod === 'month' ? 'primary' : 'default'}
                onClick={() => setSelectedPeriod('month')}
              >
                Month
              </Button>
              <Button
                type={selectedPeriod === 'year' ? 'primary' : 'default'}
                onClick={() => setSelectedPeriod('year')}
              >
                Year
              </Button>
            </Button.Group>
            <Paragraph>
              <strong>Peak Usage Times:</strong>
              <br />
              Weekdays: 6 PM - 9 PM
              <br />
              Weekends: 2 PM - 5 PM
            </Paragraph>
          </Col>
        </Row>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Title level={4}>Energy Saving Goal</Title>
        {energyGoal ? (
          <>
            <Paragraph>
              Target: {energyGoal.targetConsumption} kWh
              <br />
              Period: {dayjs(energyGoal.startDate).format('MMM D, YYYY')} -{' '}
              {dayjs(energyGoal.endDate).format('MMM D, YYYY')}
            </Paragraph>
            <Progress
              percent={goalProgress}
              status={goalProgress > 100 ? 'exception' : 'active'}
              format={percent => `${percent.toFixed(2)}%`}
            />
          </>
        ) : (
          <Paragraph>
            No energy saving goal set. Set a goal to track your progress!
          </Paragraph>
        )}
      </Card>
    </PageLayout>
  )
}
