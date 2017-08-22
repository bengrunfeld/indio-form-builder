import React from 'react'
import ReactDOM from 'react-dom'
import Entry from './components/Entry/Entry'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Entry />, document.getElementById('root'))
registerServiceWorker();
