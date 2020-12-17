import React, {Component} from 'react';
import 'tachyons';

class viewbooking extends Component {

    constructor(props){
        super(props)
        this.state ={
            id:null,
            bid: []
        }
    }

     async viewData(id){
        const response = await fetch('http://localhost:3001/booking/'+id,{
            method: "get",
            mode: "cors",
            headers:{'Content-type': 'application/json'},
        })
        const data= await response.json();
        this.setState({bid:data});

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
    const {id,bid}=this.state
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
  <button type="submit" onClick={()=> this.viewData(id)}
  class="btn btn-success mb-2">View Booking</button>
</form>
<br></br>
<br></br>
<div className="card  text-center bg-success text-light grow">
            {
                bid.map(b => (
                <ul key={b.id}>            
                
                    <div class="card-body text-center ">
                      <h4 class="card-title">Booking ID:{b.id}</h4>
                      <p class="card-text ">
                      <br></br><h5 >Restaurent Name:{b.resname}</h5>
                      <br></br><h5 >Name:{b.name}</h5>
                      <br></br> <h5 >Mobile:{b.mobile}</h5>
                      <br></br> <h5 >Email ID:{b.email}</h5>
                      <br></br> <h5 >No of Persons:{b.persons}</h5>
                      <br></br> <h5 >Date:{b.date}</h5>
                      <br></br> <h5 >Time:{b.time}</h5>
                      </p>
                    </div>

</ul>
                ))
                
            }

        </div>
            </div>
        </div>
    );
}
}
export default viewbooking;