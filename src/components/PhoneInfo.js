import React, { Component } from 'react'

export default class PhoneInfo extends Component {

    render() {
        const style = {
            border: '1px solid black',
            padding:'8px',
            margin:'8px'
        }

        let {name, phone, id} = this.props.info
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
                
            </div>
        )
    }
}
