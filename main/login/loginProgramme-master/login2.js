function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="group"&& password=="1234")
{
    alert("login succesfully");
    open("../html/index.html")
    return false;
}
else
{
    alert("login failed");
}


}