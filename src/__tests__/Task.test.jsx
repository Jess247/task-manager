import { fireEvent, getByAltText, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../components/Header'
import Task from '../components/Task';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import TaskList from '../components/TaskList';

describe('Render Header component', () => {
    test('renders navigationlinks in header', () => {
        const navLinks = ['Tasks', 'Completed']
        render(<Header navLinks={navLinks}/>)
    })
})

describe('Render Task component', () => {
    const task = {id:1, title:'Learn node.js', completed:true}

    test('renders a new task component with a title', () => {
        render(<Task task={task}/>)
        expect(screen.getByText('Learn node.js')).toBeInTheDocument()
    })
})

describe('Render checkbox', () => {
    test('checkbox reflects on completion status', () => {
        render(<Checkbox type="checkbox" name="checkbox" completed={true}/>)
        
        expect(screen.getByRole('checkbox', {name:"checkbox"})).toBeChecked()
    })
})

describe('render all components of taskList', () => {
    test('render tasks in tasklist', () => {
        const tasks = [
            {id:1, title:'Learn node.js', completed:true},
            {id:2, title:'Learn Express', completed:false},
            {id:3, title:'Learn TypeScript', completed:true}
        ]
        render(<TaskList tasks={tasks}/>)

        const listItem = screen.getAllByRole('listitem') 

        expect(listItem).toHaveLength(tasks.length)

        tasks.forEach((task, index) => {
            expect(listItem[index]).toHaveTextContent(task.title)
        });
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
