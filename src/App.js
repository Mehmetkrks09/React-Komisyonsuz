import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignedIn from './layouts/SignedIn';
import SignedOut from './layouts/SignedOut';
import { useState } from 'react';


function App() {

  

  return (
    <div className="App">
      
      {/* <SignedIn signOut={isAuthenticated}/>
      <SignedOut signIn={isAuthenticated}/> */}
      <Navi/>
      <Container  className="main">
      <Dashboard/>
      </Container>
      <ToastContainer position="bottom-right"/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
