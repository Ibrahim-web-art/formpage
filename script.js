function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneno = document.getElementById("phoneno").value;
  
    //    to validate and change the color of the text boxes when empty
    if (name == "" || email == "" || phoneno == "") {
      document.getElementById("error").innerHTML = "Please fill all the fields";
      document.getElementById("name").style.border = "1px solid red";
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("phoneno").style.border = "1px solid red";
    } else {
      document.getElementById("error").innerHTML = "";
      document.getElementById("stage1").style.display = "none";
      document.getElementById("stage2").style.display = "block";
    }
  }
  
  function stage2() {
    validate();
  }

    let x = 0;
  function change_pix_price(){
    x+=1;
    let image = document.getElementById("change_image");
if (x % 2 == 0)
        {
          image.src = "images/off.PNG";
          document.getElementById("price1").innerHTML = "$9";
        document.getElementById("price2").innerHTML = "$12";
        document.getElementById("price3").innerHTML = "$15";
        }
        else{
          image.src = "images/on.PNG";
          document.getElementById("price1").innerHTML = "$100";
        document.getElementById("price2").innerHTML = "$200";
        document.getElementById("price3").innerHTML = "$300";
        }
    }
  function stage3(){
    document.getElementById("stage2").style.display = "none";
    document.getElementById("stage3").style.display = "block";
  }


