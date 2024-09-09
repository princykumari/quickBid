/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function pendgChck(clientAPI) {
    debugger
    // /quickbid/Actions/capoff/Service/UploadOffline.action

     let varr = clientAPI.getPendingDownload();

     alert(`${varr}`);


}
