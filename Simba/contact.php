<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $conn = new mysqli('localhost', 'root', '', 'test1');
    if ($conn) {
        $stmt = "INSERT INTO `messages` (name, email, message) VALUES ('$name', '$email', '$message')";
        $result = mysqli_query($conn, $stmt);

        if ($result) {
            echo "Hooray!";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        $conn->close();
    } else {
        die("Error: Connection failed. " . mysqli_connect_error());
    }
}
?>

