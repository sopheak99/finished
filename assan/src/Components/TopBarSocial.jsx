import React from 'react'

export default class TopBarSocial extends React.Component {
    constructor() {
        super()
        this.state = {
            Social_Icon: []
        }
    }
    componentWillMount() {
        this.state.Social_Icon = [
            {
                Icon: 'fa fa-facebook social-icon-sm si-dark si-gray-round si-colored-facebook',
                url: '/',
            },
            {
                Icon: 'fa fa-twitter social-icon-sm si-dark si-gray-round si-colored-twitter',
                url: '/',
            },
            {
                Icon: 'fa fa-google-plus social-icon-sm si-dark si-gray-round si-colored-google-plus',
                url: '/',
            },
            {
                Icon: 'fa fa-linkedin social-icon-sm si-dark si-gray-round si-colored-linkedin',
                url: '/',
            },
            {
                Icon: 'fa fa-youtube social-icon-sm si-dark si-gray-round si-colored-google-plus',
                url: '/',
            },
            {
                Icon: 'fa fa-dribbble social-icon-sm si-dark si-gray-round si-colored-dribbble',
                url: '/',
            }
        ]
    }
    render() {
        var Social_Icon = this.state.Social_Icon.map(socialIcon => {
            return (
                <a href={socialIcon.url}>
                    <i className={socialIcon.Icon}></i>
                </a>
            )
        })
        return (
            <div className="top-bar-socials">
                {Social_Icon}
            </div>
        )
    }
}