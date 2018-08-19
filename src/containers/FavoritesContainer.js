import React, { Component } from 'react'
import {connect} from 'react-redux'
import { WorkOutList } from '../components/WorkOutList';
class FavoritesContainer extends Component {
    render() {
        return (
            <div className='favorites-container'>
            <h2>FavoritesContainer </h2>
            <WorkOutList list={this.props.favorites}/>
            </div>
        )
    }
}
// }
const mapStateToProps=(state)=>(
    {
        favorites: state.lists.favorites
    }
)

export default connect(mapStateToProps)(FavoritesContainer)


