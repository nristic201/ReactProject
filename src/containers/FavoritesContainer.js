import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WorkOutList } from '../components/WorkOutList';
import { removeFromFavorites } from '../actions/Favorites.actions';
import { Popup, Button, Label, Menu } from 'semantic-ui-react';
import { ShowList } from '../components/ShowList';
class FavoritesContainer extends Component {
    handleClick = (name) => {
        const { removeFromFavorites, favoritesSaveRequest, favorites } = this.props
        removeFromFavorites(name)
    }
    renderList = () => {
        if (this.props.favorites.length > 0) {
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
                        <Button content='remove' onClick={() => this.handleClick(el.name)} />
                    </Label>)
            })
        }
    }
    render() {
        return (
            <div className='favorites-container'>
                <h2>FavoritesContainer </h2>
                {this.renderList()}
                {/* <WorkOutList list={this.props.favorites} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        favorites: state.lists.favorites
    }
)

export default connect(mapStateToProps, {removeFromFavorites })(FavoritesContainer)


