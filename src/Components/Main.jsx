import { useEffect, useState } from 'react';
import a from '../image/login_page.png'
import  '../style/Style.css'


const initials = {email:'',
pass:''};
const Main = () => {
 const [user,setUser]=useState(initials);
 const{email,password}=user;

  const onValueChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value});
    // console.log(user);
    // console.log(password);
  }

   const emailValidate= (value)=>{
   var apos=value.indexOf("@");
    var dotpos=value.lastIndexOf(".");
    if (apos<1||dotpos-apos<2){
        return false;
    }
    else {
        return true;
    }
   }
   const passValidate = (fld)=>{
    var error = "";
    var illegalChars = "dummytext";
 
    if (fld == "") {
        return false;
 
    }
     else if ((fld.length < 7) || (fld.length > 15)) {
        return false;
 
    } else if (illegalChars.test(fld)) {

        return false;
 
    }
   else if ( (fld.search(/[a-zA-Z]+/)==-1) || (fld.search(/[0-9]+/)==-1) ) 
   {
     return false;
 
    }
   return true;
   }
  const myFunction = () =>{
     var email=user.email;
     var password = user.password;
     console.log(email);
     console.log(password);


     var flag= emailValidate(email);
     var flag2= passValidate(password);
     if(!flag)
     {
       alert('invalid email');
     }
     else if(!flag2)
     {
       alert('invalid password');
     }
     else 
     {
       alert("aise he chl rha")
     }

  }



  return (
    <div>
       <div className="all">


       <div className="icon">
          <img src={a} width={440} />
         </div>


         <div className="form">
              
                <form action="#0">

                  <label className="emailBox">
                    <input onChange={(e) => onValueChange(e)} name='email' type="email" id="email" placeholder="Email" />
                    <span className="emailText"></span>
                  </label>

                  <label className="passBox">
                    <input onChange={(e) => onValueChange(e)} name='password' type="password" id="password" placeholder="password" />
                    <span className="passText"></span>
                  </label>
                  <button type="button" class="loginbtn" id="lgbtn"  onClick={()=> myFunction()}>Login</button>
                  </form>
         </div>
         <a href="/">forgot your password?</a>
       
       </div>
    </div>
  );
}

export default Main;