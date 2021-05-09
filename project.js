function compute() //function to calculte interest and total amount
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value; //getting the amount value
    var rate = document.getElementById("rate").value; //getting the rate of interest
    var years = document.getElementById("years").value; //getting the number of years
    if(principal < 1) //if condition to check wheteher the input is validor not
    {
        alert("Enter a positive number"); //prompt message if input is not valid
        principal.focus();
        return false; //return
    }
    var interest = principal * years * rate /100; //calculating the interest using the formula
    var year = new Date().getFullYear()+parseInt(years); //calculating the year in which the amount will be matured with interest
    var amount = parseInt(principal) + parseInt(interest); //calculating the total amount (principal+interest)
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+" as interest,\<br\>in the year "+year+"\<br\>Total amount="+amount+"<br\>" //display statement
}
function updateRate() //function to update rate value based on user input
{
    var rateval = document.getElementById("rate").value; //getting the user input
    document.getElementById("rate_val").innerText=rateval; //displaying the user input
}