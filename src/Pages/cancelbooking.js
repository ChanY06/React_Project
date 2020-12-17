import React, {Component} from 'react';


class cancelbooking extends Component {

    constructor(props){
        super(props)
        this.state ={
            id:0,
            msg:""
        }
    }

     async deleteData(id){
        const response = await fetch('http://localhost:3001/booking/'+id,{
            method: "delete",
            mode: "cors",
            headers:{'Content-type': 'application/json'},
        })
        const data= await response.text();
        this.setState({msg:data});

     }   
    handleSubmit=(event)=>{
        event.preventDefault()
        const data=this.state
        const res=data
        console.log(data)

    }
    handleInputChange=(event)=>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
render(){
    const {id,msg}=this.state
    return (
        <div className="container">
            <div className="py-4">
            <form class="form-inline" onSubmit={this.handleSubmit}>
  <div class="form-group mb-2">
    <input type="text" readonly class="form-control-plaintext" 
    id="staticEmail2" value="Enter your Booking ID:"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Booking ID</label>
    <input type="text" class="form-control" 
    name="id"  placeholder="Your Booking ID" onChange={this.handleInputChange}/>
  </div>
  <button type="submit" onClick={()=> this.deleteData(id)}
  class="btn btn-danger mb-2">Cancel Booking</button>
</form>
<br></br>
<br></br>
<h5 className="text-center text-success">{msg}</h5>
            </div>
        </div>
    );
}
}
export default cancelbooking;