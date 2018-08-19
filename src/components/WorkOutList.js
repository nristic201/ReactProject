import React from 'react'
import {List } from 'semantic-ui-react';

import Exercise from '../components/exercise'

export const WorkOutList = ({ list }) => {
    if (list.length > 0)
        return <div>
            <List divided relaxed>
                {list.map(el => (
                    <Exercise data={el} type='workoutList' />
                ))}
            </List>
        </div>
    else
        return <h2>empty list</h2>
}
