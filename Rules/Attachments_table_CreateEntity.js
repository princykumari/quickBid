export default function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/quickbid/Actions/attachment_table_create_entity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/quickbid/Actions/attachment_table_upload_stream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}