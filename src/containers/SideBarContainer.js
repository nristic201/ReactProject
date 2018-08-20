import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import { connect } from 'react-redux'
import { LogOut } from '../actions/users.action'
import { Redirect } from 'react-router-dom'
class SideBarContainer extends React.Component {
    handleClick = () => {
        const {
            user,
            LogOut,
        } = this.props
        LogOut()
    }
    render() {
        if (this.props.user === null)
            return <Redirect to='/' push />
        return <SidebarMenu user={this.props.user} onClick={this.handleClick} />
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps, { LogOut })(SideBarContainer)