import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Table,
  Button,
  Modal,
  Form,
  DatePicker,
  InputNumber,
  Input,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EVChargingPlannerPage() {
  const { user } = useUserContext()
  const [optimalChargingTimes, setOptimalChargingTimes] = useState([])
  const [chargingSessions, setChargingSessions] = useState([])
  const [energyConsumption, setEnergyConsumption] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    data: evChargings,
    isLoading: isLoadingChargings,
    refetch: refetchChargings,
  } = Api.evCharging.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { chargingStart: 'desc' },
  })

  const { data: energyMarket, isLoading: isLoadingMarket } =
    Api.energyMarket.findMany.useQuery({})

  const { mutateAsync: createChargingSession } =
    Api.evCharging.create.useMutation()

  useEffect(() => {
    if (evChargings) {
      setChargingSessions(evChargings)
      calculateEnergyConsumption(evChargings)
    }
  }, [evChargings])

  useEffect(() => {
    if (energyMarket) {
      calculateOptimalChargingTimes(energyMarket)
    }
  }, [energyMarket])

  const calculateOptimalChargingTimes = marketData => {
    const sortedTimes = marketData.sort(
      (a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice),
    )
    setOptimalChargingTimes(sortedTimes.slice(0, 5))
  }

  const calculateEnergyConsumption = chargings => {
    const consumptionData = chargings.map(charging => ({
      date: dayjs(charging.chargingStart).format('YYYY-MM-DD'),
      consumption: parseFloat(charging.energyConsumed || 0),
    }))
    setEnergyConsumption(consumptionData)
  }

  const handleScheduleCharging = async values => {
    try {
      await createChargingSession({
        data: {
          userId: user?.id,
          vehicleModel: values.vehicleModel,
          chargingStart: values.chargingStart.toISOString(),
          chargingEnd: values.chargingEnd.toISOString(),
          energyConsumed: values.energyConsumed.toString(),
        },
      })
      message.success('Charging session scheduled successfully')
      setIsModalVisible(false)
      refetchChargings()
    } catch (error) {
      message.error('Failed to schedule charging session')
    }
  }

  const optimalTimesColumns = [
    {
      title: 'Time',
      dataIndex: 'lastUpdated',
      key: 'time',
      render: text => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Price',
      dataIndex: 'currentPrice',
      key: 'price',
      render: text => `${text} ${energyMarket?.[0]?.currency}`,
    },
  ]

  const chargingSessionsColumns = [
    {
      title: 'Start Time',
      dataIndex: 'chargingStart',
      key: 'start',
      render: text => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'End Time',
      dataIndex: 'chargingEnd',
      key: 'end',
      render: text => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Energy Consumed',
      dataIndex: 'energyConsumed',
      key: 'energy',
      render: text => `${text} kWh`,
    },
    { title: 'Vehicle Model', dataIndex: 'vehicleModel', key: 'model' },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>EV Charging Planner</Title>
      <Text>
        Optimize your EV charging schedule and track your energy consumption.
      </Text>

      <Card title="Optimal Charging Times" style={{ marginTop: 20 }}>
        <Table
          dataSource={optimalChargingTimes}
          columns={optimalTimesColumns}
          loading={isLoadingMarket}
          rowKey="id"
          pagination={false}
        />
      </Card>

      <Card title="Charging Sessions" style={{ marginTop: 20 }}>
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          icon={<i className="las la-calendar-plus"></i>}
          style={{ marginBottom: 16 }}
        >
          Schedule Charging
        </Button>
        <Table
          dataSource={chargingSessions}
          columns={chargingSessionsColumns}
          loading={isLoadingChargings}
          rowKey="id"
        />
      </Card>

      <Card title="Energy Consumption History" style={{ marginTop: 20 }}>
        <Table
          dataSource={energyConsumption}
          columns={[
            { title: 'Date', dataIndex: 'date', key: 'date' },
            {
              title: 'Consumption (kWh)',
              dataIndex: 'consumption',
              key: 'consumption',
            },
          ]}
          rowKey="date"
        />
      </Card>

      <Modal
        title="Schedule Charging Session"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleScheduleCharging} layout="vertical">
          <Form.Item
            name="vehicleModel"
            label="Vehicle Model"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="chargingStart"
            label="Charging Start Time"
            rules={[{ required: true }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name="chargingEnd"
            label="Charging End Time"
            rules={[{ required: true }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name="energyConsumed"
            label="Estimated Energy Consumption (kWh)"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} step={0.1} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Schedule
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
