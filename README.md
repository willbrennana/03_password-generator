# Password Generator
This was my first time writing in JavaScript and second debugging challenge. 

Debugging typically requires more thinking than doing—as often times the actual writing takes far less to complete than expected.

Writing the meat and potatoes of the function felt a lot like examining fractals. Accounting for all the conditions in which a random password could be generated led me to a pattern that eventually made completing the function relatively quickly. 

My biggest "aha" moments were realizing I had to convert the input from a string into a number—then back to a string—and add an init at the top of the function to reset the password field every time.

Implementing a "for" loop and incorporating into the function was also revelatory, as the majority of my final debugging stage involved displaying the password within the box.

As specified in the Challenge Acceptance Criteria, the generator includes the following:

✨ A series of prompts for password criteria.

✨ Criteria presented for selection to include in the password.

✨ Criteria for length to be at least 8 characters and no more than 128 characters.

✨ Criteria for whether or not to include lowercase, uppercase, numeric, and/or special characters.

✨ Validated input for at least one character type to be selected.

✨ Generated password that matches the selected criteria.

✨ Password displayed to the page.

Below is a screenshot of my latest and greatest:

![](assets/images/pagescreenshot.png)

To generate your next secure password, visit https://willbrennana.github.io/password-generator 
