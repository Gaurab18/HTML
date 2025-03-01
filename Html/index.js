function validate(){
    var name=document.forms.name.value;
    var email=document.form.email.value;
    var password=document.form.password.value;

    if(name==null || name=="")
    {
        console.log("Blank")
        alert("Name can't be balnk");
        return false;
    }
    else if(password.length<6){
        console.log("password must be atleast 6 characters");
        alert("password must be atleast 6 characters");
        return false;
    }
}