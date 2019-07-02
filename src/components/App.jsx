import React from 'react';
import ContactForm from './ContactForm';
import About from './about';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import ProjectList from './ProjectList';



function App() {
  return(
    <div>
       <style jsx global>{`
            div {
                background-color: purple;
                color: white;
                text-align: center;
            }
            a {
              color: white;
            }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={ProjectList} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={ContactForm} />
      </Switch>
    </div>
  );
}

export default App;
