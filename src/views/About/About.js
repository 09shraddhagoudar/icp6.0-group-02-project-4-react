import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '130px',fontSize: '70px'}}> About 🏡 </h1>
        <Footer />
    </div>
  )
}

export default Home