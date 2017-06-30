import React from 'react'

export default class TopListBar extends React.Component {
    constructor() {
        super()
        this.state = {
            ContactBar: [],
            Users: [],
            SearchICon:[]
        }
    }
    componentWillMount() {
        this.state.ContactBar = [
            {
                Icon: 'fa fa-envelope',
                Name: 'Support@mail.com',
            },
            {
                Icon: 'fa fa-phone',
                Name: '+01 1800 453 7678',
            },
        ]

        this.state.Users = [
            {
                Icon: 'fa fa-lock',
                Name: 'Login',
                url:'/'
            },
            {
                Icon: 'fa fa-user',
                Name: 'Sign Up',
                url:'/'
            },
        ]
        this.state.SearchICon = [
            {
                Icon: 'fa fa-search',
                url:'/'
            }
        ]
    }
    render() {
        var ContactBar = this.state.ContactBar.map(contact => {
            return (
                <li className="hidden-sm hidden-xs"><i className={contact.Icon}></i> {contact.Name}</li>
            )
        })

        var Users = this.state.Users.map(user => {
            return (
                 <li><a href={user.url}><i className={user.Icon}></i> {user.Name}</a></li>
            )
        })

        var SearchICon = this.state.SearchICon.map(search => {
            return (
                <li><a className="topbar-icons" href={search.url}><span><i className={search.Icon}></i></span></a></li>
            )
        })
        return (
            <ul className="list-inline top-dark-right">
                {ContactBar}
                {Users}
                {SearchICon}
            </ul>
        )
    }
}