# Solution to Puzzle

The HTML file is a blank page with a game of snake on it with a high score of 1000.

Playing the game doesn't do anything but by taking a look at the code, everytime the game is reset with the space bar the high score with be halved.

By continually reseting the high score it will eventually get low enough to be beaten.
When beaten a button will appear with the encrypted flag as an alert.

That code can be decrypted using base64 on cyberchef to reveal the flag.

### OR

The original encrypted flag is in the code if you analyze it and realize that what the decryption function is using to alert the user after the high score is beaten is a double base64 encryption.
