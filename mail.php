<?php
    extract($_POST);
    function IsInjected($str)
    {
        $injections = array('(\n+)',
               '(\r+)',
               '(\t+)',
               '(%0A+)',
               '(%0D+)',
               '(%08+)',
               '(%09+)'
               );

        $inject = join('|', $injections);
        $inject = "/$inject/i";

        if(preg_match($inject,$str))
        {
          return true;
        }
        else
        {
          return false;
        }
    }
 
    if(IsInjected($email))
    {
    echo "Bad email value!";
    exit;
    }
    email_from = 'yourname@yourwebsite.com';
 
    $email_subject = "Contact Submission: $subject";
 
    $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message";

    $to = "yourname@yourwebsite.com";
 
    $headers = "From: $email_from \r\n";
 
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);
?>