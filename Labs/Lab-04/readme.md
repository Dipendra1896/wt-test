







































                                                                                                                                                              

<h1>Lab-04(Q.No.4)<h1> 

<h2>OBJECT: <h2><h3>Write JS code to find the factorial of a number requesting a number from user using Promt.Display result onbutton click.<h3>
                                                                                                                  
   This WAP takes input from the user using the JavaScript prompt function and calculates the factorial of the given number. The result is then displayed on the page using the innerHTML property of the "result" div element.

   The findFactorial function is called when the "Find Factorial" button is clicked. This function first prompts the user to enter a number and assigns the value to the "num" variable. Next, it initializes a "result" variable with a value of 1.

   A for loop is used to iterate from the value of "num" to 1, decrementing by 1 each time. Within the loop, the result is multiplied by the current value of the loop variable (i). Once the loop completes, the final value of "result" is the factorial of the given number.

   The result is then displayed on the page using the innerHTML property of the "result" div element. The text disp   layed includes the original number and the calculated factorial. The CSS is used to style the "result" div element with a larger font size and bold font weight.

<h2>CONCLUSION:<h2> hence we learn how to find factorial using promt and dispaly the result.      
   
<h1>Lab-04(Q.No.5)<h1> 

<h2>OBJECT:<h2><h3>Create a HTML form that takes user's email address and password.Validate the form using JS when the submit button is clicked.Make sure that the fields are not empty and the email address is a valid email address.</h3>

<h2>THOERY:</h2>
   This HTML form takes the user's email address and password as input. When the user clicks the "Submit" button, the validateForm function is called. This function first assigns the values of the email and password fields to the email and password variables, respectively.
   Next, it checks if either the email or password field is empty. If either one is, it displays an alert message asking the user to fill in all fields and returns false to prevent the form from being submitted.

   It then uses a regular expression to check if the email address is in a valid format. If the email address is invalid, it displays an alert  message asking the user to enter a valid email address and returns false to prevent the form from being submitted.

   If all the validation checks are successful, it displays an alert message indicating that the form has been submitted successfully and retu rns true to submit the form.

   The form's onsubmit attribute is set to call the validateForm function when the form is submitted. This allows the form to be validated before it is sent to the server.

<h2>CONCLUSION:<h2> hence we learn how to create form in html and validate using js.

<h1>LAB-04(Q.No.6)</h1>

<h2>OBJECT:<h2><h3></h3> Writea JS program which validates the user data(name,email,contact no,country) and display the success message if validated successfully.Also create the HTML form for entering the data.

<h2>THEORY:</h2>
  This HTML form takes the user's name, email, contact number, and country as input. When the user clicks the "Submit" button, the validateForm function is called. This function first assigns the values of the input fields to the name, email, contact, and country variables, respectively.

  Next, it checks if any of the fields are empty. If any one is, it displays an alert message asking the user to fill in all fields and returns false to prevent the form from being submitted.

  It then uses regular expressions to check if the email address is in a valid format and the contact number is a 10-digit number. If either one is invalid, it displays an appropriate alert message and returns false to prevent the form from being submitted.

  If all the validation checks are successful, it displays an alert message indicating that the user data has been validated successfully and returns true to submit the form.

  The form's onsubmit attribute is set to call the validateForm function when the form is submitted. This allows the form to be validated before it is sent to the server.

<h2>CONCLUSION:</h2> hence we learn to create forn for user data and how to validate the entered data using js.       