import React from 'react'
import { Segment, Container, Header, Button, Menu } from 'semantic-ui-react';
export const StartPage = () => {
    return (
        <Segment vertical inverted textAlign='center' className='start-page'>
            <Menu inverted textAlign='center'>
                <Container content='GYM PLANNER' />
            </Menu>
            <Container text textAlign='center'>
                <Container as='h1'>
                    Imagine-a-Company
                </Container>
                <Container as='h2'>
                    Do whatever you want when you want to.
                </Container>
                <Button color='blue' content='login' />
                <Button color='blue' content='register' />
            </Container>
        </Segment>
        
    )
}