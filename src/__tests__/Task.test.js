import { render, screen } from '@testing-library/react';
import Task from './Task';

test('renders a new task component with a title', () => {
    const task = {id:1, title:'Learn node.js', completed: false}

    render(<Task task={task}/>)
})
