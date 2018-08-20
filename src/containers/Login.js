import React from 'react'
import { connect } from 'react-redux'
import { Grid, GridColumn, Header, Form, Segment, Button, Message } from 'semantic-ui-react';
import { loginUser } from '../actions/users.action';
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        this.props.loginUser(this.state)
    }

    render() {
        const { user } = this.props
        console.log(user)
        if (user && !user['msg'])
            return <Redirect push to='/home/workout'></Redirect>
        else
            return (
                <div className='start-container'>
                    <div className='form-login'>
                        <Grid>
                            <GridColumn >
                                <Form error size='large'>
                                    <Segment stacked>
                                        <Header as='h2' color='teal' textAlign='center' >
                                            Log-in to you account
                                        </Header>
                                        <Form.Input
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Email'
                                            name='email'
                                            onChange={this.handleChange}
                                        />
                                        <Form.Input
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            name='password'
                                            type='password'
                                            onChange={this.handleChange}
                                        />

                                        <Button
                                            color='teal'
                                            fluid size='large'
                                            type='submit'
                                            onClick={this.handleSubmit}
                                        >
                                            Login
                                </Button>
                                        {user && user.hasOwnProperty('msg') &&
                                            <Message
                                                error
                                                header='Error'
                                                content={user.msg}
                                            />}
                                    </Segment>

                                </Form>
                            </GridColumn>
                        </Grid >
                    </div>
                </div>
            )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { loginUser })(Login)