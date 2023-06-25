
function getVal(){

    document.getElementById("alert_info").classList.add("invisible");

    let userString=document.getElementById("inputString").value;

    let chkdString=Palindrome(userString);

     display(chkdString);
}


function Palindrome(userString){
       // Lowercased
    userString= userString.toLowerCase();

    //Regex
    let regex =/[^a-z0-0]/gi;
    userString= userString.replace(regex,"");

    let rvrsdString=[];
    let chkdString={};// Objects in JS dYNAMIC AND tYPE sAFE
   
    for (let index = userString.length-1; index>=0; index--) {
       rvrsdString += userString[index];
        
    }

    if (rvrsdString==userString)
    {
        chkdString.msg="Palindrome!"
    }

    else{
        chkdString.msg="Nah Not A Palindrome"
    }
    chkdString.reversed=rvrsdString;

    return chkdString;
}





function display(chkdString){

    document.getElementById("alert_info").innerHTML= chkdString.msg;
    document.getElementById("msg").innerHTML = `Your Reversed Phase is ${chkdString.reversed}`;
   
    //revome invisibility
    document.getElementById("alert_info").classList.remove("invisible");

}