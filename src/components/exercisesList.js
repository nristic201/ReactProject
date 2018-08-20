import React from 'react'
import { Grid, Container } from 'semantic-ui-react';
import Exercise from '../containers/exercise';

export const ExercisesList = ({ list }) => {
    if (list.length === 0)
        return <Container fluid text textAlign='center' content='No Results'/>
    else
        return (
            <Grid doubling columns='4'>
                <Grid.Row columns={4}>
                    {list.map(el => (
                        <Exercise data={el} />
                    ))}
                </Grid.Row>
            </Grid>
        )
}
