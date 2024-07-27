import type { Meta, StoryObj } from '@storybook/react'
// ./src/components/landing/user-menu.tsx
import NavMenu from '../components/landing/user-menu'

const meta: Meta<typeof NavMenu> = {
  component: NavMenu,
  title: 'components/NavMenu'
}

export default meta

type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
}