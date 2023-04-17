import React from 'react';
import Todo from '../components/Todo/Todo';
import { fakeData } from '../tasks';

const Planner = () => {
    return (
        <div className='container'>
            <Todo data={fakeData} />
        </div>
    );
}

export default Planner