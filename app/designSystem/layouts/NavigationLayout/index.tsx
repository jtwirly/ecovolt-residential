// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home Page',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/dashboard',
      label: 'Energy Usage Dashboard',
      position: 'topbar',

      onClick: () => goTo('/dashboard'),
    },

    {
      key: '/renewable-optimization',
      label: 'Renewable Energy Optimization',
      position: 'topbar',

      onClick: () => goTo('/renewable-optimization'),
    },

    {
      key: '/smart-devices',
      label: 'Smart Device Management',
      position: 'topbar',

      onClick: () => goTo('/smart-devices'),
    },

    {
      key: '/savings-calculator',
      label: 'Energy Savings Calculator',
      position: 'topbar',

      onClick: () => goTo('/savings-calculator'),
    },

    {
      key: '/ev-charging',
      label: 'EV Charging Planner',
      position: 'topbar',

      onClick: () => goTo('/ev-charging'),
    },

    {
      key: '/subscription',
      label: 'Subscription Management',
      position: 'topbar',

      onClick: () => goTo('/subscription'),
    },

    {
      key: '/market-insights',
      label: 'Energy Market Insights',
      position: 'topbar',

      onClick: () => goTo('/market-insights'),
    },

    {
      key: '/pricing',
      label: 'Pricing',

      position: 'topbar',

      onClick: () => goTo('/pricing'),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}