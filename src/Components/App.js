import React ,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Weather from './Weather';

class  App extends Component {

  constructor(){
    super();
    this.state = {

    }
  }
  
  render(){
    return(
      <>
        <div>
          <Router>
          <Header></Header>
            <Routes>
              <Route path='/weather' element={<Weather></Weather>}></Route>
              <Route path='/' element={<Home></Home>}></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
