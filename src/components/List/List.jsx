import React from "react";
import Form from '../Form/Form'
import ListItem from "./ListItem/ListItem";
import './List.css'


export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      names: []
    };
    this.addName = this.addName.bind(this);
    this.removeName = this.removeName.bind(this);

    console.log('List constructed')
  }

  addName(name) {
    this.setState((state) => {
      return { names: state.names.concat(name) }
    })
  }

  removeName(idToRemove) {
    this.setState((state) => {
      return { names: state.names.filter(({ id }) => id !== idToRemove) }
    })
  }

  static getDerivedStateFromProps() {
    console.log('List getDerivedStateFromProps')
    return null
  }

  static getDerivedStateFromError() {
    console.log('List getDerivedStateFromError')
  }

  getSnapshotBeforeUpdate() {
    console.log('List getSnapshotBeforeUpdate')
    return null
  }

  componentDidMount() {
    console.log('List mounted')
  }

  componentDidUpdate() {
    console.log('List updated')
  }

  componentWillUnmount() {
    console.log('List will remove')
  }

  componentDidCatch() {
    console.log('List catched error')
  }

  shouldComponentUpdate() {
    console.log('List should update?')
    return true
  }

  // UNSAFE methods --- start
  UNSAFE_componentWillMount() {
    console.log('List will mount')
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('List will recieve props')
  }

  UNSAFE_componentWillUpdate() {
    console.log('List will update')
  }
  // UNSAFE methods --- end


  render() {
    console.log('List rendered')

    return (
      <div className="list">
        <Form addName={this.addName} />
        <ul>
          {this.state.names.map((name) => <ListItem {...name} key={name.id} removeName={this.removeName} />)}
        </ul>
      </div>
    )
  }


}