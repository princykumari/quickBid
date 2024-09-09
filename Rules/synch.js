export default function synch(clientAPI) {
   // Original error message
   const mesg = clientAPI._context._clientData.actionResults.sync.error;

   const mesgString = String(mesg);

   // Define a regular expression to extract the desired part of the error message
   const regex = /Failed to establish a socket connection to the server./;

   // Use the regular expression to match and extract the relevant part
   const match = mesgString.match(regex);

   // If there's a match, assign it to a new variable
   const extractedError = match ? match[0] : '';

   // Log the extracted error message (optional)
   // console.log(extractedError);

   if (extractedError === "Failed to establish a socket connection to the server.") {
       return "Currently Offline: Any changes you make will be saved locally and synced once you reconnect to the internet.";
   } else {
       return mesg;
   }
}
