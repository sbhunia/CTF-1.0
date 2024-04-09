var correctAnswer = "1nDCpa";
document.getElementById("checkAnswersForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var userInput = document.getElementById("checkInput").value;
    if (userInput === correctAnswer) {
        window.location.href = 'flag.php?access=allowed';
    } else {
        alert("Incorrect answer. Please try again.");
    }
});



function XOR(word1, word2) {
    let mes1 = stringToBinary(word1);
    let mes2 = stringToBinary(word2);
    let ans = '';
    for (let i = 0; i < mes1.length; i++) {
        if (mes1[i] === mes2[i]) {
            ans += '0';
        }
        else {
            ans += '1';
        }
    }
    return ans;
}

function stringToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        binary += str[i].charCodeAt(0).toString(2).padStart(8, '0');
    }
    return binary;
}


let answers = [];
document.getElementById("stringForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    var msg1 = document.getElementById("message1").value;
    var msg2 = document.getElementById("message2").value;
    let message = Math.round(Math.random());
    if (message == 0) {
        answers.push(XOR(msg1, correctAnswer));
    }
    else {
        answers.push(XOR(msg2, correctAnswer));
    }
    let resultHTML = ""; // Initialize an empty string to store the HTML content

    for (let i = 0; i < answers.length; i++) {
        resultHTML += "Answer  " + i + ": " + answers[i] + '<br>'; // Concatenate each array element with a <br> tag
    }

    // Set the innerHTML property after the loop has finished
    document.getElementById("result").innerHTML = resultHTML;
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearAnswers);
function clearAnswers() {
    event.preventDefault();
    answers = [];
    document.getElementById("result").innerHTML = answers;
}
