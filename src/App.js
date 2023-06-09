import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <div className='hero-section'>
        <div className='landing'>
          <section>
            <h4>WELCOME TO THE BEST</h4>
            <h1>WORLD CLASS TRAINING</h1>
            <a>JOIN TODAY</a>  
          </section>        
        </div>
      </div>
      <div className='text-line'>
        <ul>          
          <li>NEW VIDEOS DAILY</li>
          <li>BEGINNERS FRIENDLY</li>
          <li>LIVE CONSULTANCY</li>
          <li>20+ TRAINERS</li>
          <li>TRAIN ANYTIME</li>
        </ul>
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
