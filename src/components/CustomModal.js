import React from 'react'
import { Modal, Button } from 'semantic-ui-react';

export class CustomModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleClick=()=>{
        this.props.confirm()
        this.close()
    }
    render() {
        const { open } = this.state
        return (
            <Modal open={open} trigger={<Button onClick={this.open}>Attach to Calendar</Button>}>
                <Modal.Content image>
                    <Modal.Header>Confirm Today's Workout</Modal.Header>
                    <Modal.Description>
                        {this.props.list.map(el => (
                            <li>{el.name}</li>
                        ))}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.close}>
                        Nope
            </Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Yep"
                        onClick={this.handleClick}
                    />
                </Modal.Actions>
            </Modal>)
    }
}
