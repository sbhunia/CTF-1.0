<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emergency Page</title>

    <!-- Add a style block for CSS -->
    <style>
        body {
            background-color: #ffcccc; /* Light red background */
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 50px;
        }

        h1 {
            color: #990000; /* Dark red text */
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            background-color: #ffffff; /* White form background */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #990000; /* Dark red text */
        }

        input[type="tel"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #990000; /* Dark red button */
            color: #ffffff; /* White text */
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #770000; /* Darker red on hover */
        }
    </style>
</head>
<body>

<?php
    function isValidPhoneNumber($number) {
        return preg_match('/^[0-9]{10}$/', $number);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['emergency']) && $_POST['emergency'] === 'true' && isset($_POST['phone']) && isValidPhoneNumber($_POST['phone'])) {
            echo "<h1 style='color: #cc0000;'>Emergency Situation!</h1>"; /* Darker red h1 text */
            echo "<p style='color: #cc0000;'>Here is the flag: FLAG{HaHaNoFlagForYou}</p>";
        } else {
            echo "<h1>No Emergency Detected or Invalid Phone Number!</h1>";
        }
    }
?>

<form method="post" action="">
    <label for="emergency">You will only get a flag if there is an emergency!!</label>
    <input type="hidden" name="emergency" value="false">
    <label for="phone">Who you gonna Call?</label>
    <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="Enter a 10-digit phone number" required />
    <button type="submit">Submit</button>
</form>

<p style="color: #666; font-style: italic; margin-top: 20px;">
    Disclaimer: This emergency page is brought to you by the Department of Extremely Important Matters, where emergencies are our specialty.
</p>
</body>
</html>
