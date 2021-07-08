import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'
import Cats from './components/products/Cats.js'
import Dogs from './components/products/Dogs.js'
import Profile from './components/Profile.js'
import Footer from './components/Footer.js'
import Overview from './components/products/Overview.js'
// import useLocalStorage from './components/hooks/useLocalStorage.js'


const App = () => {
 


  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/products" component={Overview}/>
        <Route path="/cats"component={Cats}/>
        <Route path="/dogs"component={Dogs}/>
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

