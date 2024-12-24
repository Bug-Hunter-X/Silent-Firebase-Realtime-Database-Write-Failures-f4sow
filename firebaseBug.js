In a Firebase project, I'm encountering an issue where data isn't consistently written to the Realtime Database.  Sometimes writes succeed, and other times they fail silently, with no error messages in the console. This is intermittent and not easily reproducible. The code uses the standard Firebase Admin SDK for Node.js.  I've checked the database rules, and they allow the write operations.  The application is deployed to Google Cloud Functions, and I've confirmed that the function is executing correctly, but data is missing in the database.