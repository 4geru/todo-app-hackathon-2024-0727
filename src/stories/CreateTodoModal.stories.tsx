import type { Meta, StoryObj } from '@storybook/react'
// ./src/components/dashboard/create-todo-modal.tsx -> DOING
import CreateTodoModal from '../components/dashboard/create-todo-modal'
import { Button } from "@nextui-org/react"
import { PlusIcon } from "lucide-react"
const meta: Meta<typeof CreateTodoModal> = {
  component: CreateTodoModal,
  title: 'components/CreateTodoModal'
}

export default meta

type Story = StoryObj<typeof CreateTodoModal>

export const Default: Story = {
  args: {
    user: {
      userId: '1',
      role: 'USER',
      name: 'John Doe',
      email: 'test@example.com',
    },
    updateOptimisticTodos:
      (newTodo) => {
        console.log('newTodo', newTodo)
      },
  },
  render: ({ user, updateOptimisticTodos }) => (
    <Button
      className="bg-foreground text-background"
      endContent={<PlusIcon />}
      onPress={() => {}}
      size="sm"
    >
      Add New
    </Button>
  )
}
