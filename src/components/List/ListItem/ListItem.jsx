import React from "react";
import './ListItem.css'

export default class ListItem extends React.Component{
    constructor(props) {
        super(props);
        this.removeName = this.removeName.bind(this)

        console.log('ListItem constructed')
    }

    removeName(){
        this.props.removeName(this.props.id)
    }

    componentDidMount() {
        console.log('ListItem mounted')
    }

    componentDidUpdate() {
        console.log('ListItem updated')
    }

    componentWillUnmount() {
        console.log('ListItem will remove')
    }

    shouldComponentUpdate() {
        console.log('ListItem should update?')
        return false
    }


    render() {
        console.log('ListItem rendered')


        return (
            <li className="list-item">
                <span>{this.props.name}</span><input type="button" value="remove" onClick={this.removeName} />
            </li>
        )
    }
}