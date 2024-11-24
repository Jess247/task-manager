import { fireEvent, getByAltText, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Task from '../components/Task';
import Button from '../components/Button';

describe('Render Task component', () => {
    const task = {id:1, title:'Learn node.js', completed:true}

    test('renders a new task component with a title', () => {
        render(<Task task={task}/>)
        expect(screen.getByText('Learn node.js')).toBeInTheDocument()
    })

    test('checkbox reflects on completion status', () => {
        render(<Task task={task}/>)
        const checkbox = screen.getByRole('checkbox', {name:'completed'})
        expect(checkbox).toBeChecked()
    })

})

describe('Render Button component', () => {
    test('renders a button with text and event', () => {
        const btnText = 'Click Me'

        render(<Button text={btnText} />)
        expect(screen.getByText('Click Me')).toBeInTheDocument()
    })

    test('calls the onClick handler when clicked', () => {
        const handleClick = vi.fn()

        render(<Button handleClick={handleClick} text='Click Me'/>)

        const button = screen.getByText('Click Me')

        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
