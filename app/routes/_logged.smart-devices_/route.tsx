import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  List,
  Switch,
  Button,
  Modal,
  Form,
  Input,
  TimePicker,
  notification,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SmartDeviceManagementPage() {
  const { user } = useUserContext()
  const [devices, setDevices] = useState<any[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: smartDevices,
    isLoading,
    refetch,
  } = Api.smartDevice.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: updateDevice } = Api.smartDevice.update.useMutation()
  const { mutateAsync: createDevice } = Api.smartDevice.create.useMutation()

  useEffect(() => {
    if (smartDevices) {
      setDevices(smartDevices)
    }
  }, [smartDevices])

  const handleToggleDevice = async (id: string, newStatus: string) => {
    try {
      await updateDevice({
        where: { id },
        data: { status: newStatus },
      })
      notification.success({ message: 'Device status updated successfully' })
      refetch()
    } catch (error) {
      notification.error({ message: 'Failed to update device status' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleAddDevice = async (values: any) => {
    try {
      await createDevice({
        data: {
          ...values,
          userId: user?.id,
          status: 'OFF',
          lastUpdated: dayjs().format(),
        },
      })
      notification.success({ message: 'Device added successfully' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      notification.error({ message: 'Failed to add device' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Smart Device Management</Title>
        <Text>Control and manage your connected smart home devices</Text>
      </div>

      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <Title level={4}>Your Devices</Title>
          <Button
            type="primary"
            onClick={showModal}
            icon={<i className="las la-plus"></i>}
          >
            Add Device
          </Button>
        </div>

        <List
          loading={isLoading}
          dataSource={devices}
          renderItem={device => (
            <List.Item
              actions={[
                <Switch
                  checked={device.status === 'ON'}
                  onChange={checked =>
                    handleToggleDevice(device.id, checked ? 'ON' : 'OFF')
                  }
                />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <i
                    className={`las la-${device.deviceType.toLowerCase()}`}
                    style={{ fontSize: '24px' }}
                  ></i>
                }
                title={device.deviceName}
                description={`Type: ${
                  device.deviceType
                } | Last Updated: ${dayjs(device.lastUpdated).format(
                  'YYYY-MM-DD HH:mm',
                )}`}
              />
            </List.Item>
          )}
        />
      </Card>

      <Modal
        title="Add New Device"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddDevice} layout="vertical">
          <Form.Item
            name="deviceName"
            label="Device Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="deviceType"
            label="Device Type"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Device
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
