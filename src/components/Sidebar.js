import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Image, Sidebar } from 'semantic-ui-react'

const SidebarMenu = () => (
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
        <Menu.Item>
            <Image circular size='tiny' centered src='https://www.chrisrommel.com/img/Chris_Rommel.png'>
            </Image>
            Name
        </Menu.Item>
        <Menu.Item >
            <Icon name='home' />
            Home
        </Menu.Item>
        <Link to='/calendar' >
            <Menu.Item>
                <Icon name='calendar alternate outline' />
                Calendar
            </Menu.Item>
        </Link>
        <Link to='/workout'>
            <Menu.Item>
                <Icon name='bicycle' />
                Workout
            </Menu.Item>
        </Link>
        <Menu.Item>
            <Icon name='log out' />
            Log Out
            </Menu.Item>
    </Sidebar>
)

export default SidebarMenu