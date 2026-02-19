<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data
    $name = htmlspecialchars($_POST['name']);
    $visitor_email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email address (your email)
    $to = "theoauge0@gmail.com"; 
	
	if (filter_var($visitor_email, FILTER_VALIDATE_EMAIL)) {
		echo "The email address '$visitor_email' is considered valid.";
	} else {
		echo "The email address '$visitor_email' is considered invalid.";
}

    // Email headers
    $headers = "From: $name <$visitor_email>" . "\r\n";
    $headers .= "Reply-To: $visitor_email" . "\r\n";

    // Email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $visitor_email\n";
    $email_body .= "Message:\n$message";

    // Send the email
    if (mail($to, $email_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
} else {
    // Redirect if accessed directly
    header("Location: index.html");
    exit;
}
?>