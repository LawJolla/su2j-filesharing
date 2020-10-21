import React, {useState} from 'react'
import '../Auth.css'


const Auth=()=>{

const [email, setEmail]=useState('')
const [passWord, setPassword]=useState('')

return(
    <form>
        <div id='top'>
            <h1 id='big'>La Jolla</h1>
            <span>Secure File Sharing</span>
            <div id='Login_parent'>
            <div id='Login_child' >

            <input 
                className="Login_input"
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className="Login_input"
                type='text'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='Login_btn'>Login</button>
            </div>

            </div>
        </div>
    </form>
)

}
export default Auth;