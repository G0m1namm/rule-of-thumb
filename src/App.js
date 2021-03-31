import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TopContentBanner from './components/TopContentBanner';
import BottomContentBanner from './components/BottomContentBanner';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="max-centered">
        <TopContentBanner />
        <MainContent />
        <BottomContentBanner />
      </div>
    </>
  );
}

export default App
