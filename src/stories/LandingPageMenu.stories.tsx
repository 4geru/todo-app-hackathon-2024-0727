import type { Meta, StoryObj } from '@storybook/react'
// ./src/components/landing/landingpage-menu.tsx
import LandingPageMenu from '../components/landing/landingpage-menu'

const meta: Meta<typeof LandingPageMenu> = {
  component: LandingPageMenu,
  title: 'components/LandingPageMenu'
}

export default meta

type Story = StoryObj<typeof LandingPageMenu>

export const Default: Story = {
}