/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filterforattch(clientAPI) {
    debugger

    var docIdValue = clientAPI._control.context.binding.doc_id
    var invita = clientAPI._control.context.binding.invitationId

    // alert(`${docIdValue}`);
    // alert(`${invita}`);


return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${invita}'`
}
