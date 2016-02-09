function checkinput(pass) {
  
   if(!document.login.inputEmail.value || !document.login.inputPassword.value) {
      alert("Please fill in all the required fields!");
      return false;
   }
    //if(document.login.inputPassword.value != hexMD5("\x74\x72\x79\x68\x61\x72\x64\x65\x72"+pass)) {
    if(document.login.inputPassword.value != hexMD5("\x43\x4f\x4d\x50\x37\x33\x32\x37"+pass)) {
      alert("Try Harder! ");
      return false;
    } else {
                alert("Congratulations, you have completed the level 2.");
                window.location.href = "../index.html";
    }
   
}
