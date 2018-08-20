import React from 'react'
import {  Menu, Button } from 'semantic-ui-react';

export default class WorkOutList extends React.Component{
    render() {
        if (this.props.list.length > 0)
            return <div>
                <Menu vertical>
                    {this.props.list.map(el => (
                        <Menu.Item >
                            {el.name}
                            <Button size='tiny' onClick={()=>this.props.onClick(el.name)}/>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        else
            return <h2>empty list</h2>
    }
}
