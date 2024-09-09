

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function leadVsisD(clientAPI) {
    debugger
    let a =  clientAPI._context.binding.eventTypeName

    // alert(`${a}`);
    if (a === "RFP"){
        return false;
    }else{
        return true;
    }
}
