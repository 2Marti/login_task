**Given** user is signed in in gmail inbox

**When** user clicks on `Compose` button  
**Then** message's modal is opened  
**And** user fills in email address  
**And** user fills in subject  
**And** user fills in message  
**When** user clicks on the `Send` button  
**Then** count of the emails should be correct

**When** user clicks on the `Google account` button  
**And** clicks on the `Sign out` button  
**Then** user is redirected to the account page  
**And** heading `Choose an account` is visible.
