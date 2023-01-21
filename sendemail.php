<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $from = $email;
  $to = "salir100sol@gmail.com"; // your email address
  $subject = "New message from $name";
  $headers = "From:" . $from;
  mail($to,$subject,$message,$headers);
  echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
}
?>
