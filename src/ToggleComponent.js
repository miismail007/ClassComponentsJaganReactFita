import React, { Component } from 'react'

export class ToggleComponent extends Component {
    state={
        counter : 0
    }
    
    componentWillMount() {
        console.log('before component mount into tree')
    }
    componentDidMount() {
        console.log('after component mount into tree')
    }
    componentWillUnmount() {
        console.log('component gone outside of tree')
    }
    
    
    
    componentWillReceiveProps(newProps) {    
        // this.setState({counter: this.state.counter + 1})
        console.log('Component WILL RECIEVE PROPS!',newProps)
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('Component before UPDATE!',nextProps,nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component after UPDATE!',prevProps,prevState)
    }
    
    render() {
        return (
            <div>
                <h1>React</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={()=>{
                    this.setState({counter : this.state.counter + 1})
                }}>Count</button>
            </div>
        )
    }
}

export default ToggleComponent





