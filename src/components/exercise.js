import React from 'react'
import { Card,Image, Grid, Container, List } from 'semantic-ui-react';
import { addExercise } from '../actions/Lists.actions'
import { connect } from 'react-redux'

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: 0,
            repeats: 0
        }
    }
    handleClick = () => {
        const obj = {
            ...this.state,
            ...this.props.data
        }
        this.props.addExercise(obj)
    }
    Increment = (ev) => {
        this.setState({
            ...this.state,
            sets: this.state.sets + 1
        })
    }
    Decrement = (ev) => {
        this.setState({
            ...this.state,
            sets: this.state.sets + 1
        })
    }
    render() {
        const { data, type } = this.props
        if (type === 'workoutList')
            return (
                <List.Item>
                    {/* <List.Header as='h2' content={data.name} /> */}
                    <h5>{data.name}
                        {/* <List.Description>
                        <Label >
                            Sets
                            <Button circular size='mini' color='blue' icon='plus' />
                            <Button circular size='mini'color='red' icon='minus' />
                        </Label>
                        <Label color='yellow'>
                            Repeats
                            <Label.Detail >{data.repeats}
                                <Icon name='plus square' onClick={this.Increment} />
                                <Icon name='minus square' onClick={this.Decrement} />
                            </Label.Detail>
                        </Label> */}
                    </h5>
                    {/* </List.Description> */}
                </List.Item>
            )
        else
            return (
                <Grid.Column >
                    <Card>
                        <Image src={data.img} onClick={this.handleClick}
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
export default connect(null, { addExercise })(Exercise)
