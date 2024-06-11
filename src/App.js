import './App.css';
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Webdev from "./Components//Webdev";
import AI from "./Components/AI";
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path='/webdev' element={<Webdev/>}/>
          <Route path='/ai' element={<AI/>}/>
          <Route path='/form' element={<Form/>}/>
         </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
