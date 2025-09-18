import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App isloggedin={true} name="vansh khurana" age={18} isstudent={true}/>
    <App name="yug bhatia" age={18} isstudent={false}/>
    <App name="harsh manocha" age={18} isstudent={true}/>
  </StrictMode>,
)
