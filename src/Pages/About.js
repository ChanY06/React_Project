import React from 'react';


const About = () =>{
    return (
        <div className="container">
            <div className="py-4" >
                <h1 className=" text-center py-4 text-info ">About/Help</h1>
                <div>
                    <p className="text-justify help">Online restaurant reservation platforms primarily provide a platform that allows people to make online table reservations at their favorite restaurants in a seamless & hassle-free manner. Users can choose a restaurant based on location, timing, cuisine, and number of guests. Apart from this core marketplace feature, these restaurant booking websites maintain restaurant listing with ratings to help out diners in deciding the right dining outing as per their specific taste.
  <br></br>
                     
                      </p>
                </div>  
                <div>
                <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item text-info" aria-current="page"><strong>Restaurant Search</strong></li>
  <p className="help">
  The restaurant search tool box should be right there in the first fold area of the homepage so that the visitors can begin with the search right away.
  </p>
  </ol>
</nav>
                </div>
<div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item text-info" aria-current="page"><strong>Search Results</strong></li>
  <p className="help">
  As a user does a custom restaurant search, a comprehensive search result page should appear. Make sure to add following details & options on the restaurant search result:
<br></br>
•	Name 
<br></br>
•	Phone number
<br></br>
•	E-mail
<br></br>
•	Date
<br></br>
•	Timings
<br></br>
After this you may get Id in which you can use that Id for updation, cancel booking.
  </p>
  </ol>
</nav>
</div>
<div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item text-info" aria-current="page"><strong>Update Booking</strong></li>
  <p className="help">
  Here the user can update their booking by giving Id. Make sure to add following details & options on the updation page.
  <br></br>
•	ID<br></br>
•	Name <br></br>
•	Phone number<br></br>
•	E-mail<br></br>
•	Date<br></br>
•	Timings
  </p>
  </ol>
</nav>
</div>
<div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item text-info" aria-current="page"><strong>Cancel Booking</strong></li>
  <p className="help">
  User can cancel the booking by using booking-Id. In cancel booking page user can know the cancelled booking status after cancelled the booking.
  </p>
  </ol>
</nav>

</div>
            </div>
        </div>
    );
};

export default About;