import React from "react"
import { connect } from "react-redux"
import { addFlashMessage } from "../actions/flashMessages"
import { withRouter } from "react-router-dom"

export default function (ComposedComponent){
    class Authenticate extends React.Component{

        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type:"danger",
                    text:'请先登录'
                });
                this.props.history.push("/login")
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push("/login")
            }
        }

        render(){
            return(
                <ComposedComponent { ...this.props }></ComposedComponent>
            )
        }
    }

    const mapStateToProps = (state) =>{
        return{
            isAuthenticated:state.auth.isAuthenticated
        }
    }

    return withRouter(connect(mapStateToProps,{ addFlashMessage })(Authenticate))
}