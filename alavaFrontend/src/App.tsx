import './App.css';
import NavBar from './NavBar/NavBar';
import Offers from './Offers/Offers';

function App() {

  return (
    <>
    <NavBar />
    <div className='content'>
      <div className="title">Alava</div>
      <div className="subtitle">
        Vo mir für die mit Liebi & Pflanze
      </div>
      {/* ABOUT */}
      <div className='section'>
        <div className='title'>About</div>
        <p>Alava is a modern platform designed to help users discover and explore amazing opportunities. Our mission is to connect people with experiences that matter and inspire growth.</p>
        <div className='imageCard'>
        </div>
      </div>
      {/* OFFERS */}
      <div className='section'>
        <div className='title'>Offers</div>
        <Offers />
      </div>
      {/* IMPRESSIONS */}
      <div className='section'>
        <div className='title'>Impressions</div>
        <p>Place holder impressions.</p>
      </div>
      {/* CONTACT */}
      <div className='section'>
        <div className='title'>Contact</div>
        <p>Place holder contact information.</p>
      </div>
    </div>
    </>
  )
}

export default App
