import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WorkOutList } from '../components/WorkOutList';
import { removeFromFavoritesReq } from '../actions/Favorites.actions';
import { Popup, Button, Label, Menu } from 'semantic-ui-react';
import { ShowList } from '../components/ShowList';
class FavoritesContainer extends Component {
    handleClick = (name) => {
        const { removeFromFavoritesReq,user } = this.props
        removeFromFavoritesReq(user.id,name)
    }
    renderList = () => {
        if (this.props.favorites.length > 0) {
            return this.props.favorites.map(el => {
                return (

                    <Popup trigger={
                        <Label>
                            {el.name}
                            <Button content='remove' onClick={() => this.handleClick(el.name)} />
                        </Label>
                        }
                        flowing
                        hoverable
                    >
                        <Menu vertical>
                            <ShowList list={el.list} />
                        </Menu>
                    </Popup>
                )
            })
        }
    }
    render() {
        return (
            <div className='favorites-container'>
                <h2>FavoritesContainer </h2>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        favorites: state.favorites,
        user:state.user
    }
)

export default connect(mapStateToProps, { removeFromFavoritesReq })(FavoritesContainer)


