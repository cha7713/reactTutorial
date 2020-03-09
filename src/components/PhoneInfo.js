import React, { Component, Fragment } from 'react'

export default class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState || this.props.info !== nextProps.info){
            return true
        }else return false
    }
    
    handleRemove = () => {
        let { info, onRemove } = this.props
        onRemove(info.id)
    }
    handleToggleEdit = () => {
        let { onUpdate, info } = this.props
        
        if (!this.state.editing) {
            this.setState({
                editing:!this.state.editing,
                name: info.name,
                phone: info.phone
            })
        } else {
            onUpdate(info.id, { name: this.state.name, phone: this.state.phone },
                this.setState({
                    editing:!this.state.editing
                }))
            }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUpdate = () => {
        let { onUpdate, info } = this.props

        onUpdate(info.id, { name: this.state.name, phone: this.state.phone })
        this.setState({
            editing: !this.state.editing
        })

    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        let { name, phone } = this.props.info
        console.log(name)
        return (
            
            <div style={style}>
                {this.state.editing ?
                    (<Fragment><input onChange={this.handleChange} name='name' value={this.state.name}></input>
                        <br></br>
                        <input name='phone' onChange={this.handleChange} value={this.state.phone}></input>
                    </Fragment>)
                    :

                    (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div><b>{phone}</b></div>
                        </Fragment>)

                }

                <button onClick={this.handleRemove}>삭제</button>
                {
                    this.state.editing ?
                        (<button onClick={this.handleToggleEdit}>적용</button>)
                        : (<button onClick={this.handleToggleEdit}>수정</button>)
                }

            </div>
        )
    }
}
