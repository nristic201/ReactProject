import React from 'react'
import { Grid, Image, Card, Container } from 'semantic-ui-react';
export default class ExerciseDisplay extends React.Component {
    render() {
        const {data} =this.props
        return (
            <Grid.Column>
                <Card>
                    <Image src={data.img} onClick={this.props.onClick}
                        label={{ as: 'a', color: 'blue', corner: 'right', icon: 'add' }}
                    />
                    <Card.Content>
                        <Card.Header content={data.name} />
                        <Card.Meta content={data.type} />
                        <Container content={data.description} />
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}