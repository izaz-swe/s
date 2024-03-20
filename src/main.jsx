import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuspenseContent from './containers/SuspenseContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Suspense fallback={<SuspenseContent/>}>
    <App />
   </Suspense>
  </React.StrictMode>,
)
