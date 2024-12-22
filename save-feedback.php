<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['feedback-message'];
    
    // Prepare data to save in file
    $feedback = "Name: $name\nEmail: $email\nFeedback: $message\n\n";
    
    // Append feedback to a file
    file_put_contents('feedback.txt', $feedback, FILE_APPEND);
    
    echo "Thank you for your feedback!";
}
?>