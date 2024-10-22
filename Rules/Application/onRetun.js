/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function onRetun(clientAPI) {
    clientAPI.executeAction({
        'Name': "/quickbid/Actions/capoff/Service/UploadOffline.action"
}).then(() => {
    // alert("done");
}).catch((error) => {
    console.error("Error during the UploadOffline action: ", error);
    // alert(`Error during the UploadOffline action: ${error.message}`);
    // if (error.message && error.message.includes("Failed to establish a socket connection to the server")) {
    //     alert("Currently Offline: Any changes you make will be saved locally and synced once you reconnect to the internet.");
    // } else {
    //     alert(`Error during the UploadOffline action: ${error.message}`);
    // }
});
}







