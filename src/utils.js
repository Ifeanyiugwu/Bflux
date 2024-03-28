// REGISTER A USER HERE

const getStarted = async (e)=>{
    try{
        e.preventDefault();
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let dob = document.querySelector("#dob").value;
    let origin = document.querySelector("#origin").value;
    let address = document.querySelector("#address").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    if(!fname || fname === "" || fname.length<=2){
      throw new Error("firstname is invalid");
    }else if(!lname || lname === "" || lname.length<=2){
      throw new Error("lastname is invalid");
    }else if(!username || username === " " || username.length<=2){
      throw new Error("username is invalid");
    }else if(!number || number === "" || number.length<=9){
      throw new Error("phone number is inavlid");
    } else if(!dob || dob === ""){
      throw new Error("date of birth is invalid")
    }else if(!origin || origin === ""){
      throw new Error("origin is invalid");
    }else if(!address || address === ""){
      throw new Error("address is invalid");
    }else if(!password || password === "" || password.length<=2){
      throw new Error("password is invalid");
    }else if(password !== confirmPassword){
      throw new Error("password mismatched")
    }
      const reg = {
        firstname:fname,
        lastname: lname,
        username,
        email,
        number,
        birthDate:dob,
        origin,
        address,
        password,
      };
    //   const users = localStorage.getItem("user")


// set url
const url = `${baseUrl}${routes.register}`;
console.log(url);
 const res = await fetch(url, {
    method: "POST",  // or `PUT`
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(reg),
 });
 const result = await res.json();
 if(!res.ok){
    throw new Error(result.error);
 }
 console.log("success",result);
 window.location.href ="./logins.html"
//  res.status(201).json({ success:true, msg:"account created normally"})
} catch (error){
    // throw new Error(error)
    alert(error);
}
}



// REGISTER A USER HERE

const regAdmin = async (e)=>{
  try{
      e.preventDefault();
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let dob = document.querySelector("#dob").value;
  let origin = document.querySelector("#origin").value;
  let address = document.querySelector("#address").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;

  if(!fname || fname === "" || fname.length<=2){
    throw new Error("firstname is invalid");
  }else if(!lname || lname === "" || lname.length<=2){
    throw new Error("lastname is invalid");
  }else if(!username || username === " " || username.length<=2){
    throw new Error("username is invalid");
  }else if(!number || number === "" || number.length<=9){
    throw new Error("phone number is inavlid");
  } else if(!dob || dob === ""){
    throw new Error("date of birth is invalid")
  }else if(!origin || origin === ""){
    throw new Error("origin is invalid");
  }else if(!address || address === ""){
    throw new Error("address is invalid");
  }else if(!password || password === "" || password.length<=2){
    throw new Error("password is invalid");
  }else if(password !== confirmPassword){
    throw new Error("password mismatched")
  }
    const reg = {
      firstname:fname,
      lastname: lname,
      username,
      email,
      number,
      birthDate:dob,
      origin,
      address,
      password,
    };
  //   const users = localStorage.getItem("user")


// set url
const url = `${baseUrl}${routes.regAdmin}`;
console.log(url);
const res = await fetch(url, {
  method: "POST",  // or `PUT`
  headers: {
      "Content-type": "application/json",
  },
  body: JSON.stringify(reg),
});
const result = await res.json();
if(!res.ok){
  throw new Error(result.error);
}
console.log("success",result);
window.location.href ="./logins.html"
//  res.status(201).json({ success:true, msg:"account created normally"})
} catch (error){
  // throw new Error(error)
  alert(error);
}
}



// Logins

const loginUser = async (e)=>{
  try{
    // console.log(new);
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if(!username || username === " " || username.length<=5){
      throw new Error("username is invalid");
    } 
    if(!password || password === "" || password.length<=2){
      throw new Error("password is required");
    }

    const info = {
      username,
      password,
    };
console.log(info);
    // set url
const url = `${baseUrl}${routes.login}`;
// console.log(url);
 const res = await fetch(url,{
    method: "POST",  // or `PUT`
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(info),
 });
 const result = await res.json();
 if(!res.ok){
    throw new Error(result.error);
 }
 console.log("success",result);
 //  res.status(201).json({ success:true, msg:"account created normally"})
  // window.location.href ="./index.html"
const user = result.user;
user.refreshToken = result.refreshToken;
localStorage.setItem("user",JSON.stringify(user));
  window.location.href ="./Dboard.html"
} catch (error){
  // throw new Error(error)
  alert(error);
}
}


// dashboard  

const Dboard = ()=>{
  try{ 
    const details = JSON.parse(localStorage.getItem("user"));
    return details;
  }catch{error}{
    alert(error)
  }
}

