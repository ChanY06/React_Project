import React, {Component} from 'react';


class bookpage extends Component {

    constructor(props){
        super(props)
        this.state ={
            id:0,
            name: null,
            mobile: null,
            email: null,
            persons:null,
            indate:null,
            intime:null,
            outdate:null,
            outtime:null,
            resname:(this.props.match.params.res),
            bid:null
        }
    }

   async postData(name,mobile,email,persons,indate,intime,outdate,outtime,resname){
    const response = await fetch('http://localhost:3001/booking',{
        method: "POST",
        mode: "cors",
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify({
            id : 0,
            name: name,
            mobile:mobile,
            email:email,
            persons:persons  ,    
            indate:indate,
            intime:intime,
            outdate:outdate,
            outtime:outtime,
            resname:resname,
        })
    })
  
const data= await response.json();
        this.setState({bid:`Booking Successful!!!...Your Booking ID    :  ${data.ID} `});
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
      console.log(this.props);
      //const resname=(this.props.match.params.res);
        const {id,name,mobile,email,persons,indate,intime,outdate,outtime,resname,bid}=this.state
    console.log(`render${resname}`);

    return (
        <div className="container">
            <div className="py-4">
              <strong>
            <form onSubmit={this.handleSubmit}>
            <div class="form-group row">
              
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"><strong>Name</strong></label>
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
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Check IN Time</label>
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
  <button onClick={ ()=> this.postData(name,mobile,email,persons,indate,intime,outdate,outtime,resname)}
  type="submit" class="btn btn-primary">Submit</button>
</form>     
</strong>
<br></br>       
<h6 className="text-danger"><strong>YOUR BOOKING ID WILL APPEAR HERE AFTER BOOKING</strong></h6>
<img id="chrome_download_tip" src="https://www.gifs.cc/arrows/arrow-down-chrome.gif" 
alt="Download Tip" ></img>

<br></br>
<br></br>
<div class="d-inline p-2 bg-success text-white py-1">{bid}</div>
<a href="/updatebooking" class="badge badge-info ml-5">Update Booking Information</a>
<a href="/cancelbooking" class="badge badge-danger ml-5">Cancel your Booking</a>
</div>
        </div>
    );
    }
};

export default bookpage;