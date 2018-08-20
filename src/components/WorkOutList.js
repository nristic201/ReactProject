import React from 'react'
import { List, Menu } from 'semantic-ui-react';

export const WorkOutList = ({ list }) => {
    if (list.length > 0)
        return <div>
            <Menu vertical>
                {list.map(el => (
                    <Menu.Item >
                        {el.name}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    else
        return <h2>empty list</h2>
}
