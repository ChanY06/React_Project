import React from "react";

const Header = props => {
    const{search,onInputChange,onSearchClick}=props;

    return ( 
    <div className="jumbotron text-dark">
  <h1 className="display-2 ">
  <span class="material-icons brand-icon">restaurant</span>
Restaurant Booking
<span class="material-icons brand-icon">
fastfood
</span>
</h1>
<br></br>
<div class="input-group mb-3 w-50 mx-auto">
  <input type="text" class="form-control" 
  placeholder="Ex:Bangalore"
   value={search}
   onChange={onInputChange}/>
  <div class="input-group-append">
<button className="btn btn-dark" onClick={onSearchClick}>search</button>
  </div>
</div>
    </div>
    );
};

export default Header;
