import React from 'react'
import { Typography, Card, Button, List, Spin, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SubscriptionManagementPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { data: subscriptions, isLoading: isLoadingSubscriptions } =
    Api.subscription.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { createdAt: 'desc' },
    })

  const { data: products, isLoading: isLoadingProducts } =
    Api.billing.findManyProducts.useQuery({})

  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation()

  const handleUpgrade = async (productId: string) => {
    try {
      const paymentLink = await createPaymentLink({ productId })
      window.location.href = paymentLink
    } catch (error) {
      message.error('Failed to create payment link. Please try again.')
    }
  }

  if (isLoadingSubscriptions || isLoadingProducts) {
    return (
      <PageLayout layout="narrow">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  const currentSubscription = subscriptions?.[0]

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-cog"></i> Subscription Management
        </Title>
        <Paragraph>
          Manage your subscription plan and access advanced features.
        </Paragraph>

        <Card title="Current Subscription" style={{ marginBottom: '20px' }}>
          {currentSubscription ? (
            <>
              <Text strong>Plan: </Text>
              <Text>{currentSubscription.planName}</Text>
              <br />
              <Text strong>Status: </Text>
              <Text>{currentSubscription.status}</Text>
              <br />
              <Text strong>Start Date: </Text>
              <Text>{currentSubscription.startDate}</Text>
              <br />
              <Text strong>End Date: </Text>
              <Text>{currentSubscription.endDate}</Text>
            </>
          ) : (
            <Text>You don't have an active subscription.</Text>
          )}
        </Card>

        <Card title="Available Plans">
          <List
            dataSource={products}
            renderItem={(product: any) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    onClick={() => handleUpgrade(product.id)}
                    disabled={currentSubscription?.planName === product.name}
                  >
                    {currentSubscription?.planName === product.name
                      ? 'Current Plan'
                      : 'Upgrade'}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={product.name}
                  description={
                    <>
                      <Text>{product.description}</Text>
                      <br />
                      <Text strong>Price: ${product.price.toString()}</Text>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        <Button
          type="link"
          onClick={() => navigate('/dashboard')}
          style={{ marginTop: '20px' }}
        >
          <i className="las la-arrow-left"></i> Back to Dashboard
        </Button>
      </div>
    </PageLayout>
  )
}
