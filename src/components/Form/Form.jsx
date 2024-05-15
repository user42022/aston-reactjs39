import React from "react";
import './Form.css'


export default class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
    this.updateName = this.updateName.bind(this)
    this.addName = this.addName.bind(this)

    console.log('Form constructed')
  }

  submitRef = React.createRef()

  addName() {
    this.props.addName({ ...this.state, id: +new Date() })
  }

  updateName(event) {
    if (event.target.value === 'реакт') {
      this.submitRef.current.disabled = true
    } else {
      this.submitRef.current.removeAttribute('disabled')
    }

    this.setState(() => {
        return { name: event.target.value }
    });
  }

  static getDerivedStateFromProps() {
    console.log('Form getDerivedStateFromProps')
    return null
  }

  static getDerivedStateFromError() {
    console.log('Form getDerivedStateFromError')
  }

  getSnapshotBeforeUpdate() {
    console.log('Form getSnapshotBeforeUpdate')
    return null
  }

  componentDidMount() {
    console.log('Form mounted')
  }

  componentDidUpdate() {
    console.log('Form updated')
  }

  componentWillUnmount() {
    console.log('Form will remove')
  }

  componentDidCatch() {
    console.log('Form catched error')
  }


  // UNSAFE methods --- start
  UNSAFE_componentWillMount() {
    console.log('Form will mount')

  }

  UNSAFE_componentWillReceiveProps() {
    console.log('Form will recieve props')

  }

  UNSAFE_componentWillUpdate() {
    console.log('Form will update')

  }
  // UNSAFE methods --- end

  shouldComponentUpdate(_nextProps, nextState) {
    console.log('Form shouldUpdate?')
    if (this.state.name !== nextState.name) {
      return true
    }
    return false
  }


  render() {
    console.log('Form rendered')

    return (
      <div className="form">
        <label htmlFor="name">name</label>
        <input type="text" id="name" onInput={this.updateName} />
        <input ref={this.submitRef} type="button" value="Add" onClick={this.addName} />
      </div>
    )
  }

}