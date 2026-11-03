Assignment 15: Promises and async/await with Local Data

Name: Daniyal Malik
Roll Number: 2510303175
Assignment Number: 15

Aim

To create Promises that resolve or reject, use async/await with try and catch, and load local data using a Promise.

Task 1: Promise Resolve

Created a function named checkMarks(marks) that returns a Promise.

If marks are between 0 and 100, the Promise resolves with the marks. Otherwise, it rejects with an Error saying Marks out of range.

Called checkMarks(80) and printed the resolved value using the then method.

Output

Screenshot: task1-output.png

Task 2: Promise Reject

Created a function named checkMarks(marks) that returns a Promise.

Called checkMarks(120). Since 120 is outside the valid range, the Promise rejects with an error.

Used the catch method to print the error message.

Output

Screenshot: task2-output.png

Task 3: Using async/await with try and catch

Created a function named checkMarks(marks) that returns a Promise.

Created an asynchronous function named run() that uses try and catch.

Used await checkMarks(65) to print the valid marks and await checkMarks(-5) to generate an error.

Used the catch block to print Caught: followed by the error message.

Output

Screenshot: task3-output.png

Task 4: Promise with Local Data

Created a function named getUsers() that returns a Promise.

Used setTimeout() to resolve the Promise after 100 milliseconds with three local user objects containing id and name.

Created an asynchronous function that awaits getUsers() and uses forEach() to print each user's name.

Output

Screenshot: task4-output.png

Result

Successfully created and executed JavaScript programs using Promises, resolve, reject, async/await, try-catch and local data loading.