import React from 'react'
import { Link } from 'react-router-dom'
// import  './css files/Login.css';
function Login() {
  return (
    <><div className='body-1'>
       <div class="main-div">
      <form action="">
        <div><h1 className='h1-1'>Login in</h1></div>
        <div class="create-account">
          <p className='para-1'>Need a Account?</p>
          <a className='a-1' href=""> 
          <Link to="./Signup">Signup</Link>
          </a>
        </div>

        <div class="input-box">
          <div>
            <label className='lable-1' for=""> username or Email</label><br />
            <input className='input-1'  type="text" placeholder="enter full name" />
          </div>
          <div>
            <label className='lable-1'  for="">password</label> <a class="show" href="">	&#xf06e; show</a><br />
            <input className='input-1'  type="text" placeholder="enter full name" />
          </div>
          <div>
            <input className='input-1'  class="check-box" type="checkbox" name="" id="login" />
            <label className='lable-1'  class="checkbox-label" for="login">keep me logged in</label>
          <button class="btn">log in</button>
          </div>
          <div class="forget-password">
            <a className='a-1'  href="" > forget username?</a> <a className='a-1' href="">forget password</a>
          </div>
          <div><a className='a-1'  href="">can't login? </a></div>
         
        </div>
      </form>
    </div>
    </div>
      
    </>
  )
}

export default Login
