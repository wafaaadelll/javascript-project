var sub = document.getElementById("press");
sub.addEventListener("click", function validate() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var error_name = document.getElementById("error_name");
  var error_email = document.getElementById("error_email");
  var error_number = document.getElementById("error_number");
  var text, text1, text2;
  if (name.value.length < 3 || !isNaN(name.value) || name.value.length > 50) {
    text = "*Please Enter Valid Name*";
    error_name.innerHTML = text;
    name.style.boxShadow = '0px 0px 5px red';
    return false;
  } else {
    text = "";
    error_name.innerHTML = text;
    name.style.boxShadow = '0px 0px 5px green';
  }
    if (!email.value.match(/\S+@\S+\.\S+/)) {
      text1 = "*Please Enter valid Email*";
      error_email.innerHTML = text1;
      email.style.boxShadow = '0px 0px 5px red';
      return false;
    } else {
      text1 = "";
      error_email.innerHTML = text1;
      email.style.boxShadow = '0px 0px 5px green';
    }
  if (password.value.length < 8) {
      text2 = "*Please Enter valid password* must be 8 or more character";
      error_number.innerHTML = text2;
      password.style.boxShadow = '0px 0px 5px red';
      return false;
    } else {
      text2 = "";
      error_number.innerHTML = text2;
      password.style.boxShadow = '0px 0px 5px green';
    }
  document.getElementById("myform").innerHTML=("Data Send Successfully!");
  return true;
})
  function reset(){  
    document.getElementById("myform").reset();  
}
//---------------------------