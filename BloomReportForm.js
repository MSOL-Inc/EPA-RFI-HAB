/**
This function will have the code to send email
toemail: address to send the email to
fromemail: senders email address
msgBody: JSON message with information from the form fields
*/
function sendEmail(tomail, frommail, sub, msg) {
    alert("Sending Email to " + tomail + " from " + frommail + " with subject " 
        + sub + " and message " + msg);


}



$(document).ready(function () {
    $("#submit_btn").click(function () {

        //create JSON string from all the fields on the form
        formJSON = "Test bloom report message";

        toaddr = "dpadam@macrosolutions.com";
        fromaddr = "damanpadam@gmail.com";
        msg = formJSON;
        d = new Date();
        sub = "Bloom Report on " + d.toUTCString();

        //send email
        sendEmail(toaddr, fromaddr, sub, msg);
    });



});

