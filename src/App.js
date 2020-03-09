import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

export default class App extends Component {

  id = 0

  state = {
    informaion: [],

  }

  handleCreate = (data) => {
    let { informaion } = this.state
    this.setState({
      informaion: informaion.concat(Object.assign({},data, {id:this.id++}))
    })
    console.log(data)

  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.informaion)} */}
        <PhoneInfoList data={this.state.informaion}></PhoneInfoList>
      </div>
    )
  }
}
