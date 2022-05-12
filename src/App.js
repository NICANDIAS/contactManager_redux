import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/contact/add" element={<AddContact />} />
              <Route exact path="/contact/edit/:id" element={<EditContact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/test" element={<Test />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </div>    
      </div>
      </BrowserRouter>
  );
}

export default App;
