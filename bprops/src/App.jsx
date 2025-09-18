import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
if(props.isloggedin==true){
  return (
    <div className='student'>
    <h2>Name : {props.name}</h2>
    <h2>Age : {props.age}</h2>
    <h2>Student : {props.isstudent ? "Yes":"No"}</h2>
    </div>
  )
}
else{
  return(
    <div className='student'>
    <h2>Welcome Guest</h2>
    <h2>Please Login to see your profile</h2>
    </div>
  )
}
}

// App.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isstudent: PropTypes.bool,
// }

App.defaultProps = {
  isloggedin: false,
  name: 'Unknown',
  age: 0,
  isstudent: false,
}

export default App

  
//must use prop types to validate the props
// import PropTypes from 'prop-types'
//it will issue a warning in the console if the props are not of the correct type