import React from 'react'
import {List, Menu } from 'semantic-ui-react';

import Exercise from '../components/exercise'

export const WorkOutList = ({ list }) => {
    if (list.length > 0)
        return <div>
            <Menu vertical>
                {list.map(el => (
                    <Exercise data={el} type='workoutList' />
                ))}
            </Menu>
        </div>
    else
        return <h2>empty list</h2>
}
