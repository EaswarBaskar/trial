<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];
    $city = $_POST['subject'];
    $message = $_POST['comment'];
    
    // Your email address where you want to receive the form submissions
    $to = "eanexsolution@gmail.com";
    
    // Email subject
    $subject = "New Contact Form Submission from $name";
    
    // Email message
    $email_message = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>City:</strong> $city</p>
        <p><strong>Message:</strong><br>$message</p>
    </body>
    </html>
    ";
    
    // Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Success - redirect to thank you page
        header('Location: thank-you.html');
    } else {
        // Failed
        echo "Error: Unable to send email.";
    }
} else {
    // Not a POST request
    header('Location: index.html');
}
?>
