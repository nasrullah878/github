
function setError(id , error) {
     document.getElementById("email") = id;
    document.getElementsByClassName("error") = error;
}

function validData() {
 let returnVal = true;
 let email = document.forms["myform"]["femail"].value;
 if(email.lenght  > 15) {
   returnVal = false; 
   setError(email , "*");
 }
 return returnVal;

}