function validate(){
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let phoneno = document.getElementById('phoneno').value;

    //    to validate and change the color of the text boxes when empty
    if(name == '' || email == '' || phoneno == ''){
        document.getElementById("error").innerHTML ='Please fill all the fields';
        document.getElementById('name').style.border = '1px solid red';
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('phoneno').style.border = '1px solid red';
 
     } else {
         document.getElementById("error").innerHTML ='';
         document.getElementById("stage1").style.display = "none";
         document.getElementById("stage2").style.display = "block";
     }
}

function stage2(){
  validate();
}
