# AWS-Sheet-Logger
Instructions for use

Download AWS_Logger_Google_Sheets directory.

Open index.js and enter the Sheet ID for the Google Sheet you wish to log to.  This can be found in the sheet's URL.  The URL will be something like this:
https://docs.google.com/spreadsheets/d/KEY_HERE/edit#gid=0
The Key should be right in the middle where I depicted Key_Here above.  Copy that key and post it on line 5 of index.js where it says Enter your sheet key here.

If your Google Sheet does not have column headers Time_Stamp and Temperature then modify line 12 of index.js as well to fit your needs.

You should have downloaded a JSON credential file for the Google Service account linked to the Google Project.  Change the name of that JSON file to client_secret.json and put it in the AWS_Logger_Google_Sheets directory.
