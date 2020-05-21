# Mr. Roboger's Neighborhood

#### This is a Behavior Driven Development (BDD) Exercise involving loops and arrays for Epicodus, 05.14.2020

#### By Brittany Lindgren

## Description

Use BDD to write specifications for a program that will take in a number from the user and return a range of numbers from 0 up to the user's number, replacing certain digits with 'beeb', 'boop', or 'Won't you be my neighbor?". Based on these specifications, implement the program. Additional features include incorporating the user's name if the number is divisible by 3 and reversing the order of the range of numbers.

## Setup/Installation Requirements

* Clone this repository.
* To view the code itself, open in a text editor such as VS Code or Atom, etc.
* To view in your browser, double click on index.html.
* You do not need to run a server to view this document.

## Known Bugs

No known bugs at this time.

## Mr. Roboger's Neighborhood Rules
1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

* Rule 3 takes precedence over rule 2, and rule 2 over rule 1, so:
* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"

## Specifications

#### Spec 1
* Behavior: Program gathers user input and returns it as a number.
* Input Example: 5
* Output Example: 5

#### Spec 2
* Behavior: The program returns false / does not run if the number is less than 0.
* Input Example: -9
* Output Example: false / program does not run

#### Spec 3
* Behavior: The program returns a range of numbers from 0 to the user's inputted number.
* Input Example: 4
* Output Example: 0, 1, 2, 3, 4

#### Spec 4
* Behavior: The program will replace the number 1 with 'Beep!'.
* Input Example: 1
* Output Example: 'Beep!'

#### Spec 5
* Behavior: The program will replace the number 2 with 'Boop!'.
* Input Example: 2
* Output Example: 'Boop!'

#### Spec 6
* Behavior: The program will replace the number 3 with 'Won't you be my neighbor?'.
* Input Example: 3
* Output Example: 'Won't you be my neighbor?'

#### Spec 7
* Behavior: The program replaces all digits with 'Beep!' if the number contains a 1.
* Input Example: 10
* Output Example: 'Beep!'

#### Spec 8
* Behavior: The program replaces all digits with 'Boop!' if the number contains a 2.
* Input Example: 21
* Output Example: 'Boop!'

#### Spec 9
* Behavior: The program replaces all digits with 'Won't you be my neighbor?' if the number contains a 3.
* Input Example: 23
* Output Example: 'Won't you be my neighbor?'

#### Spec 10
* Behavior: If username is entered, program will return 'Won't you be my neighbor, user name?'.
* Input Example: Zoidberg
* Output Example: 'Won't you be my neighbor, Zoidberg?'

#### Spec 11
* Behavior: If username is entered, program will return 'Won't you be my neighbor, user name?' if number is divisible by 3.
* Input Example: 3
* Output Example: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, user name?'
* Input Example: 32
* Output Example: 0 ... 'Won't you be my neighbor?'

#### Spec 12
* Behavior: If user clicks on reverse button, print 'true' to console.
* Input Example: user clicks reverse button
* Output Example: true

#### Spec 13
* Behavior: If user clicks on reverse button, display reversed range of numbers to the user.
* Input Example: 3
* Output Example: 'Won't you be my neighbor?', 'Boop!', 'Beep!', 0

## Support and contact details

Please feel free to contact me through GitHub with any questions, ideas or concerns.

## Technologies Used

* HTML
* CSS
* git
* GitHub
* Unsplash.com
* Bootstrap 3.3.7
* javascript and jQuery 3.5.0

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**