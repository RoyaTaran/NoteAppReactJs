import React, { Component } from 'react'

export default class ColorBox extends Component {

    setColor(color){
       this.props.onSetColor(color) 
    }

    render() {
        
        return (
            <div onClick={this.setColor.bind(this,this.props.colorName)} className='color-box' style={{backgroundColor: this.props.colorName}}>
                
            </div>
        )
    }
}
