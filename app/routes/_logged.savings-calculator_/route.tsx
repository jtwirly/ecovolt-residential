import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  List,
  Spin,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergySavingsCalculatorPage() {
  const { user } = useUserContext()
  const [currentUsage, setCurrentUsage] = useState<number | null>(null)
  const [currentCost, setCurrentCost] = useState<number | null>(null)
  const [savings, setSavings] = useState<number | null>(null)
  const [scenarios, setScenarios] = useState<string[]>([])

  const { data: recommendations, isLoading } =
    Api.energySavingRecommendation.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: createRecommendation } =
    Api.energySavingRecommendation.create.useMutation()

  const calculateSavings = () => {
    if (currentUsage && currentCost) {
      const potentialSavings = currentCost * 0.2 // Assume 20% savings
      setSavings(potentialSavings)
      setScenarios([
        `Reduce usage by 10%: $${(potentialSavings * 0.5).toFixed(2)} savings`,
        `Switch to energy-efficient appliances: $${(
          potentialSavings * 0.7
        ).toFixed(2)} savings`,
        `Install solar panels: $${(potentialSavings * 1.2).toFixed(2)} savings`,
      ])

      // Create a new recommendation
      createRecommendation({
        data: {
          recommendationText:
            'Based on your current usage, we recommend reducing consumption by 10% and switching to energy-efficient appliances.',
          potentialSavings: potentialSavings.toString(),
          userId: user?.id || '',
        },
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Energy Savings Calculator</Title>
      <Paragraph>
        Calculate your potential energy savings and explore different scenarios
        to maximize your efficiency.
      </Paragraph>

      <Card>
        <Form layout="vertical">
          <Form.Item label="Current Monthly Energy Usage (kWh)">
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              onChange={value => setCurrentUsage(value)}
            />
          </Form.Item>
          <Form.Item label="Current Monthly Energy Cost ($)">
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              onChange={value => setCurrentCost(value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={calculateSavings}>
              Calculate Savings
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {savings !== null && (
        <Card style={{ marginTop: '20px' }}>
          <Title level={4}>Potential Savings</Title>
          <Paragraph>
            Based on your current usage, you could potentially save up to $
            {savings.toFixed(2)} per month.
          </Paragraph>
          <Title level={4}>Energy-Saving Scenarios</Title>
          <List
            dataSource={scenarios}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
      )}

      <Card style={{ marginTop: '20px' }}>
        <Title level={4}>Personalized Recommendations</Title>
        {isLoading ? (
          <Spin />
        ) : (
          <List
            dataSource={recommendations}
            renderItem={item => (
              <List.Item>
                <Text>{item.recommendationText}</Text>
                <Text type="secondary">
                  {' '}
                  Potential savings: ${item.potentialSavings}
                </Text>
              </List.Item>
            )}
            locale={{ emptyText: 'No recommendations available' }}
          />
        )}
      </Card>
    </PageLayout>
  )
}
