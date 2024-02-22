# Login task

This project comprises two main components: login setup and email sending.

Tests cases written in BDD structure you can find in test-cases folder.

To run the tests in this project, follow these steps:

1. I recommend to create playwright/.auth directory and add it to your .gitignore. Your authentication routine will produce authenticated browser state and save it to a file in this playwright/.auth directory. Later on, tests will reuse this state and start already authenticated.  
   You can add it to the .gitignore thanks these commands:  
   `mkdir -p playwright/.auth`  
   `echo "\nplaywright/.auth"`

2. Install the necessary dependencies:  
   `npm install`
3. Set up your environment variables by creating a `.env` file in the root directory of the project.  
    The `.env` file should contain sensitive information such as usernames and passwords.  
   USERNAME=your_username  
   PASSWORD=your_password

Note: Make sure not to commit the `.env` file to version control by adding it to the `.gitignore` file.

4. First run auth.setup.ts (so your authentication routine will produce authenticated browser state and save it to a file in this playwright/.auth directory. )  
   Then run email.spec.ts (You should be already authenticated)

## Important Note

Please note that certain files containing sensitive information, such as credentials or authentication files, are excluded from version control using the `.gitignore` file. This ensures that your sensitive information is not inadvertently committed to the repository.

If you encounter issues with tests related to login functionality, make sure that you have set up the necessary environment variables correctly in the `.env` file as described above.
