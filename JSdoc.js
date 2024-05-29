function validateform()
        {
            var username=document.myform.name.value;
            var password=document.myform.password.value;

            if (username="BSIT-1D" && password=="asscat"){
            //alert("Name can't be blank");
            alert("Login successful");
            window.location="activity4.html";
            return false;
            }
            else if(password!="asscat"){
            alert("Password is incorrect.");
            return false;
            }
        }
