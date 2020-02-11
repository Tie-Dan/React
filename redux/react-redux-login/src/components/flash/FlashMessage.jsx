import React from "react"
import classnames from "classnames"

/**
 * 成功
 * 失败
 */

export default class FlashMessage extends React.Component{

    onClick = () =>{
        this.props.deleteFlashMessage(this.props.message.id)
    }

    render(){
        /**
         * type：提示的类型
         */
        const { type,text } = this.props.message;
        return(
            <div className={ classnames('alert',{
                'alert-success' : type ==='success',
                'alert-danger' :type === 'danger'
            })}>
                <button onClick={ this.onClick } className="close">&times;</button>
                { text }
            </div>
        )
    }
}