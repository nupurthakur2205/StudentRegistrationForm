/* function to validate first name on onblur event*/ 
function validateFirstName()
{
    /*intialising variable firstname with Element object representing the element whose id property 
    matches firstName*/
    var firstname = document.getElementById("firstName").value;
    //regular expression which excepts only characters of length 2 to 30
    var re1 =  /^[a-zA-Z\s\'\-]{2,30}$/;
    /* if firstname matches the regular expression then the input is valid and the function returns 
    true other wise returns false.*/
    if(re1.test(firstname))
    {
        document.getElementById("first_name_prompt").style.color="Green";
        document.getElementById("first_name_prompt").innerHTML="Valid.";
        return true;
    }
    else
    {
        document.getElementById("first_name_prompt").style.color="red";
        document.getElementById("first_name_prompt").innerHTML="Enter characters only.";
        return false;
    }
}
/* function to validate last name on onblur event*/
function validateLastName()
{
    /*intialising variable lastname with Element object representing the element whose id property 
    matches lastName*/
    var lastname = document.getElementById("lastName").value;
    //regular expression which excepts only characters of length 2 to 40
    var re2 =  /^[a-zA-Z\s\'\-]{2,40}$/;
    /* if lastname matches the regular expression then the input is valid and the function returns 
    true other wise returns false.*/
    if(re2.test(lastname))
    {
        document.getElementById("last_name_prompt").style.color="Green";
        document.getElementById("last_name_prompt").innerHTML="Valid.";
        return true;
    }
    else
    {
        document.getElementById("last_name_prompt").style.color="red";
        document.getElementById("last_name_prompt").innerHTML="Enter characters only.";
        return false;
    }
}
/* function to validate email on onblur event*/
function validateEmail()
{
    /*intialising variable email with Element object representing the element whose id property 
    matches email*/
    var email = document.getElementById("email").value;
    //regular expression which excepts a valid email with @ symbol 
    var re3 =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* if email matches the regular expression then the input is valid and the function returns 
    true other wise returns false.*/
    if(re3.test(email))
    {
        document.getElementById("email_prompt").style.color="Green";
        document.getElementById("email_prompt").innerHTML="Valid.";
        return true;
    }
    else
    {
        document.getElementById("email_prompt").style.color="red";
        document.getElementById("email_prompt").innerHTML="Invalid.";
        return false;
    }
}
/* function to validate password on onblur event*/
function validatePassword()
{
    /*intialising variable password with Element object representing the element whose id property 
    matches password*/
    var password = document.getElementById("password").value;
    /* if the length of the password is atleast 3 characters then the function returns true other wise 
    returns false.*/
    if(password.length>=3)
    {
        document.getElementById("password_prompt").style.color="Green";
        document.getElementById("password_prompt").innerHTML="Valid.";
        return true;
    }
    else
    {
        document.getElementById("password_prompt").style.color="red";
        document.getElementById("password_prompt").innerHTML="Password should be atleast 3 charaters long.";
        return false;
    }
}

