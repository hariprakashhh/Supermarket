import React,{ Component} from 'react'
export default class ComponentLieCycle extends Component {
constructor(props)
    super(props);
    this.state={favColor:"yellow"}
}

ComponentDidMount()
{
    setTimeout(()=>{this.setState({favColor:"blue"})},5000)
}
shouldComponentUpdate()
{
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState)
{
    document.getElementById("idi").innerHTML="Previous value "+prevState.favColor;
}

componentDidUpdate()
{
        document.getElementById("id2").innerHTML="Current value "+this.state.favColor;
}

render(){
    
}