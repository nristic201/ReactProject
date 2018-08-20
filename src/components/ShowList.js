import { Menu } from "semantic-ui-react";
import React from 'react'
export const ShowList = ({ list }) => {
    return list.map(el => (
        <Menu.Item >
            {el.name}
        </Menu.Item>
    ))
}