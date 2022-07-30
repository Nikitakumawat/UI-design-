import './App.css';
import MainContent from './component/MainContent';
import Navbar from './component/Navbar/index';
import TopHeader from './component/TopHeader';
import Footer from './component/Footer';
import CardContainer from './component/CardContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopHeader/>
      <MainContent/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
