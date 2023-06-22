
function getVal(){


    document.getElementById("alert_info").classList.add("invisible");

    let userString=document.getElementById("inputString").value;

    let rvrsdString=reverse(userString);

     display(rvrsdString);
}


function reverse(userString){
    let rvrsdString=[];

    for (let i=userString.length-1 ;i>=0 ;i--) {
     
        

        // ** Most Important Line //
        rvrsdString += userString[i];
    }
  
     return rvrsdString;
}


function display(rvrsdString){

    document.getElementById("msg").innerHTML=`The string reversed is ${rvrsdString}`;


    //revome invisibility
    document.getElementById("alert_info").classList.remove("invisible");

}