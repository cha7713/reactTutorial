import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    

    render() {
        console.log('rendering list')
        let { data, onRemove, onUpdate } = this.props
        // if(data == null) return null;
        let list = data.map(info =>
            (<PhoneInfo
                onUpdate = {onUpdate}
                onRemove={onRemove} 
                info={info}
                key={info.id} />))
        return (
            <div>
                {list}   
            </div>
        )
    }
}
