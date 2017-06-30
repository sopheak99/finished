import React from 'react';
import TopBarSocial from './TopBarSocial';
import TopListBar from './TopListBar';
export default class TopNavigation extends React.Component{
        // constructor(){
        //     super()
        //     this.state ={

        //     }
        // }
    render(){
        return(
            <div className="Top-Navbar">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 hidden-xs">
                        <TopBarSocial/>
                        </div>

                        <div className="col-sm-8 text-right">
                        <TopListBar/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}