import React,{useState} from 'react'

function ShowHide() {
  let[message, setMessage] = useState('')

  // function messageShow() {
  //   if (message === '') {
  //     setMessage('Hello! React')
  //   }else{
  //     setMessage('')
  //   }
    
  // }
  return (
    <div>
      <button onClick={()=> message=== ''? setMessage('hello react'): setMessage('')}>Show Message</button>

      <h1 style={{margin: '50px'}}>{message}</h1>

    </div>
  )
}

export default ShowHide