import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }

    render() {
        let { data } = this.props
        // if(data == null) return null;
        let list = data.map(info =>
            (<PhoneInfo 
                info={info}
                key={info.id} />))
        return (
            <div>
                {list}
            </div>
        )
    }
}
