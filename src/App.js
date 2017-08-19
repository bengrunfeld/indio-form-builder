import React, { Component } from 'react'
import { Map } from 'immutable'
import './App.css'

class App extends Component {
  render() {
    const obj = {a: 1, b: 2, c: 3, d: 4}
    const map1 = Map(obj)
    
    return (
      <div className="App">
        <h1>Maps</h1>
        <ul>
          <li>{map1.get('a')}</li>
          <li>{map1.get('b')}</li>
          <li>{map1.get('c')}</li>
          <li>{map1.get('d')}</li>
        </ul>
      </div>
    )
  }
}

export default App
