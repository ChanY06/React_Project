import React, {Component} from 'react';


class updatebooking extends Component {

    constructor(props){
        super(props)
        this.state ={
            id:null,
            name: null,
            mobile: null,
            email: null,
            persons:null,
            indate:null,
            intime:null,
            outdate:null,
            outtime:null,
            bid:null

        }
    }

   async updateData(id,name,mobile,email,persons,indate,intime,outdate,outtime){
    const response = await fetch('http://localhost:3001/booking',{
        method: "PUT",
        mode: "cors",
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify({
            id : id,
            name: name,
            mobile:mobile,
            email:email,
            persons:persons  , 
            indate:indate,
            intime:intime, 
            outdate:outdate,
            outtime:outtime         
        })
    })
  
const data= await response.text();
this.setState({bid:`Data in ${id} ${data}`});
}
    handleSubmit=(event)=>{
        event.preventDefault()
        const data=this.state
        const res=data
        console.log(data)

    }
    handleInputChange=(event)=>{
        event.preventDefault()
        //console.log(event)
        //console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {id,name,mobile,email,persons,indate,intime,outdate,outtime,bid}=this.state
    return (
        <div className="container">
            <div className="py-4">
            <form onSubmit={this.handleSubmit}>
            <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Booking ID</label>
    <div class="col-sm-10">
      <input  type="text"class="form-control form-control-lg" id="colFormLabelLg"
       placeholder="Your Booking ID" name="id" onChange={this.handleInputChange}/>
    </div>
  </div>
            <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Name</label>
    <div class="col-sm-10">
      <input  type="text"class="form-control form-control-lg" id="colFormLabelLg"
       placeholder="Ex:Jhon" name="name" onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Mobile</label>
    <div class="col-sm-10">
      <input type="text"class="form-control form-control-lg" id="colFormLabelLg"
       placeholder="Ex:9917004183" name="mobile"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="ex@example.com" name="email"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">No Of persons</label>
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="Ex:2" name="persons"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Check IN Date</label>
    <div class="col-sm-10">
      <input type="date" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="Pick a Date" name="indate"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Check INT ime</label>
    <div class="col-sm-10">
      <input type="time" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="Time" name="intime"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Check OUT Date</label>
    <div class="col-sm-10">
      <input type="date" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="Pick a Date" name="outdate"onChange={this.handleInputChange}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Check OUT Time</label>
    <div class="col-sm-10">
      <input type="time" class="form-control form-control-lg" id="colFormLabelLg"
      placeholder="Time" name="outtime"onChange={this.handleInputChange}/>
    </div>
  </div>
  <br></br>
  <button onClick={ ()=> this.updateData(id,name,mobile,email,persons,indate,intime,outdate,outtime)}
  type="submit" class="btn btn-primary">Submit</button>
</form>     
<br></br>       

<div class="d-inline p-2 bg-success text-white py-1">{bid}</div>
<a href="viewbooking" class="badge badge-info ml-5">View your Booking</a>
<a href="/cancelbooking" class="badge badge-danger ml-5">Cancel your Booking</a>
</div>
      </div>
    );
    }
};

export default updatebooking;