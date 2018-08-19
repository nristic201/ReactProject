import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WorkOutList } from '../components/WorkOutList';
import { favoritesSaveRequest,removeFromFavorites } from '../actions/Favorites.actions';
import { Popup, Button, Label, Menu } from 'semantic-ui-react';
class FavoritesContainer extends Component {
    handleClick = (name) => {
        const {removeFromFavorites,favoritesSaveRequest,favorites} = this.props
        removeFromFavorites(name)
        favoritesSaveRequest(1,favorites)
    }
    renderList = () => {
        if (this.props.favorites.length > 0)
            return this.props.favorites.map(el => {
                return (
                    <Label>
                        {el.name}
                        <Popup trigger={<Button content='View' />}
                            flowing
                            hoverable
                        >
                            <Menu vertical>
                                <ShowList list={el.list} />
                            </Menu>
                        </Popup>
                        <Button content='remove' onClick={()=>this.handleClick(el.name)} />
                    </Label>)
            })
    }
    render() {
        console.log(this.props.favorites)
        if (this.props.favorites.length > 0) {
            this.props.favoritesSaveRequest(1, this.props.favorites)
        }
        return (
            <div className='favorites-container'>
                <h2>FavoritesContainer </h2>
                {this.renderList()}
                {/* <WorkOutList list={this.props.favorites} /> */}
            </div>
        )
    }
}
const ShowList = ({ list }) => {
    console.log(list)
    return list.map(el => (
        <Menu.Item >
            {el.name}
        </Menu.Item>
    ))
}
const mapStateToProps = (state) => (
    {
        favorites: state.lists.favorites
    }
)

export default connect(mapStateToProps, { favoritesSaveRequest, removeFromFavorites })(FavoritesContainer)


