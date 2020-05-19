# Mr. Roboger's Neighborhood

#### This is a Behavior Driven Development (BDD) Exercise involving loops and arrays for Epicodus, 05.14.2020

#### By Brittany Lindgren

## Description

Use BDD to write specifications for a program that will take in a number from the user and return a range of numbers from 0 up to the user's number, replacing certain digits with 'beeb', 'boop', or 'Won't you be my neighbor?". Based on these specifications, implement the program.

## Setup/Installation Requirements

* Clone this repository.
* To view the code itself, open in a text editor such as VS Code or Atom, etc.
* To view in your browser, double click on index.html.
* You do not need to run a server to view this document.

## Known Bugs

There are no known bugs at this time.

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
* Behavior: Program gathers user input and returns as a number.
* Input Example: 5
* Output Example: 5

#### Spec 2
* Behavior: The program returns false / does not run if the number is less than 0.
* Input Example: -9
* Output Example: false / program does not run

#### Spec 3
* Behavior: The program returns false / does not run if the user enters a character other than a number
* Input Example: 'hello', %, ...
* Output Example: false / program does not run

#### Spec 4
* Behavior: The program returns all numbers from 0 to the user input.
* Input Example: 5
* Output Example: 0, 1, 2, 3, 4, 5

#### Spec 5
* Behavior: The program replaces all digits with 'Beep!' if the number contains a 1.
* Input Example: 11
* Output Example: 'Beep!'

#### Spec 6
* Behavior: The program replaces all digits with 'Boop!' if the number contains a 2.
* Input Example: 12
* Output Example: 'Boop!'

#### Spec 7
* Behavior: The program replaces all digits with 'Won't you be my neighbor?' if the number contains a 3
* Input Example: 23
* Output Example: 'Won't you be my neighbor?'

## Support and contact details

Please feel free to contact me through GitHub with any questions, ideas or concerns.

## Technologies Used

* HTML
* CSS
* git
* GitHub
* Bootstrap 3.3.7
* javascript and jQuery 3.5.0

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**