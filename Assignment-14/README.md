Assignment 14: Timers and Intervals

Name: Daniyal Malik
Roll Number: 2510303175
Assignment Number: 14

Aim

To execute code after a delay using setTimeout, cancel a scheduled timer using clearTimeout, and repeat code using setInterval.

Task 1: Using setTimeout()

Created a JavaScript program that prints Start, schedules the message Timer done using setTimeout() with a delay of 0 milliseconds, and then prints End.

Observed the execution order of the three messages.

The output shows that Start and End are printed first, followed by Timer done because the callback executes after the synchronous code.

Output

Screenshot: task1-output.png

Task 2: Using clearTimeout()

Created a JavaScript program that schedules the message Not shown using setTimeout() with a delay of 1000 milliseconds.

Stored the timer ID in a variable and cancelled the timer using clearTimeout().

Printed Cancelled to confirm that the timer was cancelled.

Output

Screenshot: task2-output.png

Task 3: Using setInterval() and clearInterval()

Created a JavaScript program using setInterval() to print Tick followed by a count every 200 milliseconds.

Used clearInterval() to stop the interval when the count reaches 3.

Output

Screenshot: task3-output.png

Result

Successfully created and executed JavaScript programs using setTimeout, clearTimeout, setInterval and clearInterval. Understood delayed execution, timer cancellation and repeated execution of code.