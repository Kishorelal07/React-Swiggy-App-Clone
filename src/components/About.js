import React from 'react'
import UserClass from './User'


class About extends React.Component{

  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent componentDidMount")
  }
  render(){
    console.log("Parent render")
    return (
      <div>
          <h1>Hi, This is the about Pagee!!</h1>
          <h2><UserClass name={"firstClass"} email={"firstClassLocation"}/></h2>

          <h2><UserClass name={"secondClass"} email={"secondClassLocation"}/></h2>
      </div>
    )
  }
}


export default About