import React from "react"


class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props.name + " constructor called");

        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log(this.props.name + " componentDidMount called");
    }
    render(){

        const {name,age,email} = this.props;

        console.log(name + " render called");      
        return(
            <div>
                <h5>
                    {/* Name : {name} */}
                </h5>

                <h4>Count : {this.state.count}</h4>
                <button onClick={() => {
                    this.setState({count : this.state.count+1})
                }}>Click me</button>
                <h5>
                    {/* Email : {email}  */}
                </h5>
            </div>
        )
    }
}

export default UserClass;   