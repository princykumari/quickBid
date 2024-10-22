/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function onRes(clientAPI) {
    // alert("trigerred");
    // setInterval(function() { clientAPI.executeAction("/quickbid/Actions/capoff/Service/UploadOffline.action"); }, 600000);
    // setInterval();
    clientAPI.executeAction({
        'Name': "/quickbid/Actions/capoff/Service/UploadOffline.action"
}).then(() => {
    // alert("All updates are done, and the UploadOffline action has been executed.");
}).catch((error) => {
    console.error("Error during the UploadOffline action: ", error);
    // alert(`Error during the UploadOffline action: ${error.message}`);
    if (error.message && error.message.includes("Failed to establish a socket connection to the server")) {
        // alert("Currently Offline: Any changes you make will be saved locally and synced once you reconnect to the internet.");
    } else {
        // alert(`Error during the UploadOffline action: ${error.message}`);
    }
});
}
