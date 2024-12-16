<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form input data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create the email message
    $to = "ariseh584@gmail.com"; // Change this to the recipient's email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
?>
