import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

export default class App extends Component {

  id = 3

  state = {
    informaion: [
      { name: '브라보', phone: '02-434-6536', id: 0 },
      { name: '옥수수', phone: '033-544-3224', id: 1 },
      { name: '메이플', phone: '066-3242-3552', id: 2 }],

  }

  handleCreate = (data) => {
    let { informaion } = this.state
    this.setState({
      informaion: informaion.concat(Object.assign({}, data, { id: this.id++ }))
    })
    console.log(data)

  }
  handleRemove = (id) => {
    let { informaion } = this.state
    let filteringInformaion = informaion.filter(data => data.id != id)
    this.setState({
      informaion: filteringInformaion
    })
  }

  handleUpdate = (id, data) => {
    const { informaion } = this.state
    this.setState({
      informaion: informaion.map(
        info => {
          if (info.id === id) {
            return { id, ...data }
          } else {
            return info
          }
        }
      )
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.informaion)} */}
        <PhoneInfoList
          onUpdate={this.handleUpdate}
          data={this.state.informaion}
          onRemove={this.handleRemove}

        ></PhoneInfoList>
      </div>
    )
  }
}
