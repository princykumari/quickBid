/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function attepmtRule(clientAPI) {
    debugger
  var type =  clientAPI._context.clientAPIProps.actionBinding.type
  if( type === "RQAATTACH"){
    return clientAPI.executeAction('/quickbid/Actions/attachment_create.action');
}else{
    return clientAPI.executeAction('/quickbid/Actions/toQusEdit.action');
}
}
