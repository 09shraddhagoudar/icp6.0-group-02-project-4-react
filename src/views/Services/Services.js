import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Services.css";
import Image1 from "./../Services/taxii.jpg";
import Image2 from "./../Services/hey.jpg";
import Image3 from "./../Services/hotel.jpg";
import Image4 from "./../Services/phone.jpg";
import Image5 from "./../Services/help.jpg";
import Image6 from "./../Services/travel.jpg";


function Services() {
  return (

    <div>
      <Navbar />
      <div className="home-page">


        <h1 className='subheading'>OUR SERVICES..</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="Car & Bus Rentals" />
            <h2>Car & Bus Rentals</h2>
            <p>We provide AC/Non-AC Taxi, Ritz, Etios, Innova, Tempo Traveller, Mini Bus, Luxury Bus or Air tickets for local or out station trips</p>

          </div>

          <div className="card">
            <img src={Image2} alt=" Custom Packages" />
            <h2> Custom Packages</h2>
            <p>We create packages based on customer need. Picnics, Celebrations, Corporate Events and eductional events .</p>

          </div>

          <div className="card">
            <img src={Image3} alt="Hotel & Resort Booking" />
            <h2>Hotel & Resort Booking</h2>
            <p>We will help you get best deals in Hotel, Resort, Houseboat, Homestay, Fresh-Up Rooms, Dormitory & Jungle Camps..   </p>

          </div>
          <div className="card">
            <img src={Image4} alt="Contact - Us" />
            <h2>Contact - Us</h2>
            <p>Superior customer service, 24x7 Call booking and dedicated helpline to resolve an of your questions or issues during the trips.</p>

          </div>

          <div className="card">
            <img src={Image6} alt=" Guide Services" />
            <h2>Guide Services</h2>
            <p>India is a great service to experience the contrasting country in an essentially new way. The Guides are professionally well versed individuals with a tourist destination..</p>

          </div>

          <div className="card">
            <img src={Image5} alt=" Mobile App Booking" />
            <h2>Mobile App Booking</h2>
            <p>Award winning mobile app to see upcoming or past rides, track rides, driver details, cost details and more. Superior customer service. .</p>

          </div>
        </div>
        <hr />
        <h2 className='subheading2'>"Our Aim is to provide most attractive and leisure experiences to the tourists!"</h2>
        <hr />


      </div>
      <Footer />
    </div>

  )
}

export default Services
