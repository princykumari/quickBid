/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filesvisi(clientAPI) {
    debugger
    if(clientAPI._context.binding._addArgs.addedCount >= 1){
        return "Files";
    }else{
        return;
    }
}
