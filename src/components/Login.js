import React from 'react'
import { connect } from 'react-redux'
import { Grid, GridColumn, Header, Form, Segment, Button, Message } from 'semantic-ui-react';
import { loginUser } from '../actions/users.action';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit() {
        console.log('ez')
        this.props.loginUser(this.state)
    }

    render() {
        const { user } = this.props
        return (
            <div className='form-login'>
                <Grid>
                    <GridColumn >
                        <Header as='h2' color='teal' textAlign='center' >
                            Log-in to you account
                </Header>
                        <Form  error size='large'>
                            <Segment stacked>
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
                                { user && user.hasOwnProperty('msg') &&
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
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { loginUser })(Login)