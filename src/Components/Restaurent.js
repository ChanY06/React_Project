import React from "react";
import bookpage from "../Pages/book";
import 'tachyons';
const Restaurent = (props) => {
const {restaurent}  =props;
    return (
        <div className="card-columns">
            {
                restaurent.map(rest => (
                <ul key={rest.id}>            
                    <div class="card special border-dark mb-1 ">
                    <img class="card-img-top" 
                    src= {rest.img}
                    alt="Card image cap"/>
                    <div class="card-header text-light cardhead txt">
                      <h4 ><span class="material-icons">
                            location_on
                            </span> {rest.location}</h4>
                    </div>
                    <div class="card-body .cardbg text-center">
                      <h1 class="card-title text-light">{rest.name}</h1>
                      <p class="card-text txt text-danger">
                      <h5 >Locality</h5> <h5 className="text-info">{rest.area}</h5><br/>
                      <h5>Eminities Available</h5> <h5 className="text-info">{rest.foodtype}</h5><br/>
                      <h5>Price</h5> <h5 className="text-info">{rest.cost}/-</h5><br/>
                      <h5>Payment Currency</h5> <h5 className="text-info">{rest.currency}</h5><br/>
                      <h5>Hotel Rating</h5> <h5 className="text-info">{rest.rating}</h5><br/>
                      <h5>Customers Feedback</h5> <h5 className="text-info">{rest.feed}</h5><br/>
                      <h5>No of Customers voted</h5> <h5 className="text-info">{rest.votes}</h5>
                      </p>
                      <a href={'/bookpage/'+rest.name} class="btn btn-light">Book Now</a>
                    </div>
                  </div>
                  <br></br><br></br>
</ul>
                ))
                
            }

        </div>
      
      
    );
};
export default Restaurent;