import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Image, Sidebar } from 'semantic-ui-react'


class SidebarMenu extends React.Component {
    render() {
        return (
            <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                <Menu.Item>
                    <Image circular size='tiny' centered src='https://www.chrisrommel.com/img/Chris_Rommel.png'>
                    </Image>
                    {this.props.user ? this.props.user.email : 'name'}
                </Menu.Item>
                <Link to='/home/calendar' >
                    <Menu.Item>
                        <Icon name='calendar alternate outline' />
                        Calendar
            </Menu.Item>
                </Link>
                <Link to='/home/workout'>
                    <Menu.Item>
                        <Icon name='bicycle' />
                        Workout
            </Menu.Item>
                </Link>
                <Menu.Item onClick={this.props.onClick}>
                    <Icon name='logout' />
                    Log Out
            </Menu.Item>

            </Sidebar>)
    }
}

export default SidebarMenu