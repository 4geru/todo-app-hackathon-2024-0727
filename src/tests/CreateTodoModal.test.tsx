import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as Stories from '../stories/CreateTodoModal.stories'
import "@testing-library/jest-dom/vitest";

const { Default } = composeStories(Stories)

describe('Default', () => {
  test('dispay message', () => {
    render(<Default />)

    expect(
      screen.getByText('Add New')
    ).toBeInTheDocument()
  })
})
