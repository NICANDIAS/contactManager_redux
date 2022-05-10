import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import About from './components/pages/About';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Contacts />}/>
              <Route exact path="/contact/add" element={<AddContact />}/>
              <Route exact path="/about" element={<About />}/>
            </Routes>
        </div>    
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
