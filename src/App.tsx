import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';

function App() {

  return (
    <>
    <div className='flex flex-col bg-zinc-950 '>
      <header className='header'>
        <Navbar/>
      </header>
      <main className='flex-1 bg-zinc-950 py-15 flex flex-col gap-15 animate-fadeUp'>
          <Home/>
      </main>
      <footer className='footer'>
          <Footer/>
      </footer>
    </div>
    </>
  )
}

export default App
