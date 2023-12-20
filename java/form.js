function form()
{
    var name_val=document.getElementById("name").value;
    var lname_val=document.getElementById("lname").value;
    var age_val=document.getElementById("age").value;
    var email_val=document.getElementById("email").value;
    var eaddress_val=document.getElementById("eaddress").value;

    if(name_val==null||name_val=="")
    {
        alert("Please Enter your name");
        return false;
    }
    else if(isAlpha(name_val)==false){
        alert("Must be a character string");  
        return false;   
    }
    else if(name_val.length>50){
        alert("Exceeded Character Limit");  
        return false;   
    }
    else if(name_val.length<1){
        alert("Name is too short");  
        return false;   
    }
    else if(lname_val==null||lname_val=="")
    {
        alert("Please Enter your last name");
        return false;
    }
    else if(isAlpha(lname_val)==false){
        alert("Must be a character string");  
        return false;   
    }
    else if(name_val.length>50){
        alert("Exceeded Character Limit");  
        return false;   
    }
    else if(name_val.length<1){
        alert("Name is too short");  
        return false;   
    }
    else if(age_val==null||age_val=="")
    {
        alert("Please Enter your age");
        return false;
    }
    else if(parseInt(age_val)<12){
        alert("Unfortunately you do not reach the age limit");  
        return false;   
    }
    else if(email_val==null||email_val=="")
    {
        alert("Please Enter your email");
        return false;
    }
    else if(!validateEmail(email_val)){
        alert("Invalid Email")
        return false;
    }
    else if(eaddress_val!=email_val){
    alert("email does not match")  
    return false;   
    }
    else{
        return true;
    }
    
    

    
}
function validateEmail(eaddress)
{
    var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(eaddress);
}
function isNumeric(numericValue)
{
    var numberPattern= /^[0-9]+$/;
    return numberPattern.test(numericValue);
}
function isAlpha(alphabet)
{
    var alphaPattern= /^[a-zA-Z]+$/;
    return alphaPattern.test(alphabet);
}