import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card'; // Importing your Card component

function About() {
  // Define an array of card data
  const cardsData = [
    { title: 'Mission', content: 'Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.' },
    { title: 'Vision', content: 'To sow the seeds of par-excellence services with a customer-centric approach and reap the trust of worldwide clients.' },
  ];

  // State for handling user comments
  const [comment, setComment] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the comment submission here, e.g., send it to backend
    console.log('Submitted comment:', comment);
    // Reset the comment state
    setComment('');
  };

  return (
    <div style={{ backgroundColor: '#ffc0cb', minHeight: '100vh' }}> {/* Set background color to pink */}
        <Navbar />
        <h1 style={{textAlign: 'center', margin: '50px 0', fontSize: '70px'}}>About</h1> {/* Reduced top margin */}
        
        {/* Add some information */}
        <div style={{ margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
          <p>Maharashtra Forts Explore offers full-throttle trekking experiences within a limited budget. We promote trekking (mountain sport) to every individual. Our aim is to explore each and every fort and trekking spot in Maharashtra.</p>
        </div>

        {/* Render multiple Card components using map */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {/* Leave a Comment section */}
        <div style={{ margin: '50px auto', maxWidth: '600px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ marginBottom: '20px' }}>Leave a Comment</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              style={{ width: '100%', height: '150px', marginBottom: '10px', borderRadius: '5px', padding: '10px', resize: 'none' }}
            ></textarea>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
        
        <Footer />
    </div>
  );
}

export default About;