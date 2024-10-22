/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/quickbid/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/quickbid/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
	let quickbid_actions_application_appupdate_action = __webpack_require__(/*! ./quickbid/Actions/Application/AppUpdate.action */ "./build.definitions/quickbid/Actions/Application/AppUpdate.action")
	let quickbid_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/quickbid/Actions/Application/AppUpdateFailureMessage.action")
	let quickbid_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./quickbid/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/quickbid/Actions/Application/AppUpdateProgressBanner.action")
	let quickbid_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/quickbid/Actions/Application/AppUpdateSuccessMessage.action")
	let quickbid_actions_application_logout_action = __webpack_require__(/*! ./quickbid/Actions/Application/Logout.action */ "./build.definitions/quickbid/Actions/Application/Logout.action")
	let quickbid_actions_application_navtoabout_action = __webpack_require__(/*! ./quickbid/Actions/Application/NavToAbout.action */ "./build.definitions/quickbid/Actions/Application/NavToAbout.action")
	let quickbid_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./quickbid/Actions/Application/NavToActivityLog.action */ "./build.definitions/quickbid/Actions/Application/NavToActivityLog.action")
	let quickbid_actions_application_navtosupport_action = __webpack_require__(/*! ./quickbid/Actions/Application/NavToSupport.action */ "./build.definitions/quickbid/Actions/Application/NavToSupport.action")
	let quickbid_actions_application_onwillupdate_action = __webpack_require__(/*! ./quickbid/Actions/Application/OnWillUpdate.action */ "./build.definitions/quickbid/Actions/Application/OnWillUpdate.action")
	let quickbid_actions_application_reset_action = __webpack_require__(/*! ./quickbid/Actions/Application/Reset.action */ "./build.definitions/quickbid/Actions/Application/Reset.action")
	let quickbid_actions_application_resetmessage_action = __webpack_require__(/*! ./quickbid/Actions/Application/ResetMessage.action */ "./build.definitions/quickbid/Actions/Application/ResetMessage.action")
	let quickbid_actions_application_usermenupopover_action = __webpack_require__(/*! ./quickbid/Actions/Application/UserMenuPopover.action */ "./build.definitions/quickbid/Actions/Application/UserMenuPopover.action")
	let quickbid_actions_attachdelete_action = __webpack_require__(/*! ./quickbid/Actions/attachDelete.action */ "./build.definitions/quickbid/Actions/attachDelete.action")
	let quickbid_actions_attachment_create_action = __webpack_require__(/*! ./quickbid/Actions/attachment_create.action */ "./build.definitions/quickbid/Actions/attachment_create.action")
	let quickbid_actions_attachment_table_create_entity_action = __webpack_require__(/*! ./quickbid/Actions/attachment_table_create_entity.action */ "./build.definitions/quickbid/Actions/attachment_table_create_entity.action")
	let quickbid_actions_attachment_table_upload_stream_action = __webpack_require__(/*! ./quickbid/Actions/attachment_table_upload_stream.action */ "./build.definitions/quickbid/Actions/attachment_table_upload_stream.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_CreateEntity.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DeleteEntity.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_detailpopover_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_DetailPopover.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DetailPopover.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_opendocument_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_OpenDocument.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_OpenDocument.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UpdateEntity.action")
	let quickbid_actions_capoff_attachments_table_attachments_table_uploadstream_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/Attachments_table_UploadStream.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UploadStream.action")
	let quickbid_actions_capoff_attachments_table_navtoattachments_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Create.action")
	let quickbid_actions_capoff_attachments_table_navtoattachments_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action")
	let quickbid_actions_capoff_attachments_table_navtoattachments_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Edit.action")
	let quickbid_actions_capoff_attachments_table_navtoattachments_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_List.action")
	let quickbid_actions_capoff_bid_reply_bid_reply_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/Bid_reply_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_CreateEntity.action")
	let quickbid_actions_capoff_bid_reply_bid_reply_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/Bid_reply_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_DeleteEntity.action")
	let quickbid_actions_capoff_bid_reply_bid_reply_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/Bid_reply_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_UpdateEntity.action")
	let quickbid_actions_capoff_bid_reply_navtobid_reply_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Create.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Create.action")
	let quickbid_actions_capoff_bid_reply_navtobid_reply_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Detail.action")
	let quickbid_actions_capoff_bid_reply_navtobid_reply_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Edit.action")
	let quickbid_actions_capoff_bid_reply_navtobid_reply_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Bid_reply/NavToBid_reply_List.action */ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_List.action")
	let quickbid_actions_capoff_dropdown_dropdown_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/Dropdown_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_CreateEntity.action")
	let quickbid_actions_capoff_dropdown_dropdown_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/Dropdown_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_DeleteEntity.action")
	let quickbid_actions_capoff_dropdown_dropdown_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/Dropdown_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_UpdateEntity.action")
	let quickbid_actions_capoff_dropdown_navtodropdown_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/NavToDropdown_Create.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Create.action")
	let quickbid_actions_capoff_dropdown_navtodropdown_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/NavToDropdown_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Detail.action")
	let quickbid_actions_capoff_dropdown_navtodropdown_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/NavToDropdown_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Edit.action")
	let quickbid_actions_capoff_dropdown_navtodropdown_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Dropdown/NavToDropdown_List.action */ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_List.action")
	let quickbid_actions_capoff_header_table_header_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateEntity.action")
	let quickbid_actions_capoff_header_table_header_table_createitem_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_CreateItem_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateItem_table.action")
	let quickbid_actions_capoff_header_table_header_table_createquestionnaire_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_CreateQuestionnaire_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateQuestionnaire_table.action")
	let quickbid_actions_capoff_header_table_header_table_createsupplier_bid_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_bid_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_bid_table.action")
	let quickbid_actions_capoff_header_table_header_table_createsupplier_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_table.action")
	let quickbid_actions_capoff_header_table_header_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DeleteEntity.action")
	let quickbid_actions_capoff_header_table_header_table_detailpopover_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_DetailPopover.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DetailPopover.action")
	let quickbid_actions_capoff_header_table_header_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/Header_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_UpdateEntity.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Create.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_createitem_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateItem_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateItem_table.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_createquestionnaire_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateQuestionnaire_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateQuestionnaire_table.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_bid_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_bid_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_bid_table.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_table.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_table.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Detail.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Edit.action")
	let quickbid_actions_capoff_header_table_navtoheader_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Header_table/NavToHeader_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_List.action")
	let quickbid_actions_capoff_item_table_item_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/Item_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_CreateEntity.action")
	let quickbid_actions_capoff_item_table_item_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/Item_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_DeleteEntity.action")
	let quickbid_actions_capoff_item_table_item_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/Item_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_UpdateEntity.action")
	let quickbid_actions_capoff_item_table_navtoitem_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/NavToItem_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Create.action")
	let quickbid_actions_capoff_item_table_navtoitem_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action")
	let quickbid_actions_capoff_item_table_navtoitem_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/NavToItem_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Edit.action")
	let quickbid_actions_capoff_item_table_navtoitem_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Item_table/NavToItem_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_List.action")
	let quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action")
	let quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action")
	let quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action")
	let quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action")
	let quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action")
	let quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action")
	let quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action")
	let quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Create.action")
	let quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action")
	let quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action")
	let quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Edit.action")
	let quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_List.action")
	let quickbid_actions_capoff_questionnaire_table_questionnaire_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateEntity.action")
	let quickbid_actions_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action")
	let quickbid_actions_capoff_questionnaire_table_questionnaire_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DeleteEntity.action")
	let quickbid_actions_capoff_questionnaire_table_questionnaire_table_detailpopover_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DetailPopover.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DetailPopover.action")
	let quickbid_actions_capoff_questionnaire_table_questionnaire_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_UpdateEntity.action")
	let quickbid_actions_capoff_service_closeoffline_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/CloseOffline.action */ "./build.definitions/quickbid/Actions/capoff/Service/CloseOffline.action")
	let quickbid_actions_capoff_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/CloseOfflineFailureMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineFailureMessage.action")
	let quickbid_actions_capoff_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineSuccessMessage.action")
	let quickbid_actions_capoff_service_downloadoffline_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/DownloadOffline.action */ "./build.definitions/quickbid/Actions/capoff/Service/DownloadOffline.action")
	let quickbid_actions_capoff_service_downloadstartedmessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/DownloadStartedMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/DownloadStartedMessage.action")
	let quickbid_actions_capoff_service_initializeoffline_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/InitializeOffline.action */ "./build.definitions/quickbid/Actions/capoff/Service/InitializeOffline.action")
	let quickbid_actions_capoff_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/InitializeOfflineFailureMessage.action")
	let quickbid_actions_capoff_service_syncfailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/SyncFailureMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/SyncFailureMessage.action")
	let quickbid_actions_capoff_service_syncstartedmessage_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/SyncStartedMessage.action */ "./build.definitions/quickbid/Actions/capoff/Service/SyncStartedMessage.action")
	let quickbid_actions_capoff_service_uploadoffline_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Service/UploadOffline.action */ "./build.definitions/quickbid/Actions/capoff/Service/UploadOffline.action")
	let quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Create.action")
	let quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action")
	let quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action")
	let quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_List.action")
	let quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_CreateEntity.action")
	let quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action")
	let quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action")
	let quickbid_actions_capoff_supplier_reply_navtosupplier_reply_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Create.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Create.action")
	let quickbid_actions_capoff_supplier_reply_navtosupplier_reply_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Detail.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Detail.action")
	let quickbid_actions_capoff_supplier_reply_navtosupplier_reply_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Edit.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Edit.action")
	let quickbid_actions_capoff_supplier_reply_navtosupplier_reply_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_List.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_List.action")
	let quickbid_actions_capoff_supplier_reply_supplier_reply_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/supplier_reply_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_CreateEntity.action")
	let quickbid_actions_capoff_supplier_reply_supplier_reply_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/supplier_reply_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_DeleteEntity.action")
	let quickbid_actions_capoff_supplier_reply_supplier_reply_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/supplier_reply/supplier_reply_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_UpdateEntity.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_create_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Create.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Create.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_createattachments_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateAttachments_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateAttachments_table.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_table.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_detail_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_edit_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Edit.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Edit.action")
	let quickbid_actions_capoff_supplier_table_navtosupplier_table_list_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_List.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_List.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_createattachments_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateAttachments_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateAttachments_table.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_createentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateEntity.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_table.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateSupplier_bid_table.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateSupplier_bid_table.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_deleteentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_DeleteEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DeleteEntity.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_detailpopover_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_DetailPopover.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DetailPopover.action")
	let quickbid_actions_capoff_supplier_table_supplier_table_updateentity_action = __webpack_require__(/*! ./quickbid/Actions/capoff/Supplier_table/Supplier_table_UpdateEntity.action */ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_UpdateEntity.action")
	let quickbid_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./quickbid/Actions/CloseModalPage_Cancel.action */ "./build.definitions/quickbid/Actions/CloseModalPage_Cancel.action")
	let quickbid_actions_closemodalpage_complete_action = __webpack_require__(/*! ./quickbid/Actions/CloseModalPage_Complete.action */ "./build.definitions/quickbid/Actions/CloseModalPage_Complete.action")
	let quickbid_actions_closepage_action = __webpack_require__(/*! ./quickbid/Actions/ClosePage.action */ "./build.definitions/quickbid/Actions/ClosePage.action")
	let quickbid_actions_createentityfailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/CreateEntityFailureMessage.action */ "./build.definitions/quickbid/Actions/CreateEntityFailureMessage.action")
	let quickbid_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/quickbid/Actions/CreateEntitySuccessMessage.action")
	let quickbid_actions_deleteconfirmation_action = __webpack_require__(/*! ./quickbid/Actions/DeleteConfirmation.action */ "./build.definitions/quickbid/Actions/DeleteConfirmation.action")
	let quickbid_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/quickbid/Actions/DeleteEntityFailureMessage.action")
	let quickbid_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/quickbid/Actions/DeleteEntitySuccessMessage.action")
	let quickbid_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./quickbid/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/quickbid/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
	let quickbid_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./quickbid/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
	let quickbid_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./quickbid/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_List.action")
	let quickbid_actions_genericbannermessage_action = __webpack_require__(/*! ./quickbid/Actions/GenericBannerMessage.action */ "./build.definitions/quickbid/Actions/GenericBannerMessage.action")
	let quickbid_actions_genericmessagebox_action = __webpack_require__(/*! ./quickbid/Actions/GenericMessageBox.action */ "./build.definitions/quickbid/Actions/GenericMessageBox.action")
	let quickbid_actions_genericnavigation_action = __webpack_require__(/*! ./quickbid/Actions/GenericNavigation.action */ "./build.definitions/quickbid/Actions/GenericNavigation.action")
	let quickbid_actions_generictoastmessage_action = __webpack_require__(/*! ./quickbid/Actions/GenericToastMessage.action */ "./build.definitions/quickbid/Actions/GenericToastMessage.action")
	let quickbid_actions_logging_closemodalpage_complete_action = __webpack_require__(/*! ./quickbid/Actions/Logging/CloseModalPage_Complete.action */ "./build.definitions/quickbid/Actions/Logging/CloseModalPage_Complete.action")
	let quickbid_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./quickbid/Actions/Logging/LogUploadFailure.action */ "./build.definitions/quickbid/Actions/Logging/LogUploadFailure.action")
	let quickbid_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./quickbid/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/quickbid/Actions/Logging/LogUploadSuccessful.action")
	let quickbid_actions_logging_updateentitysuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/Logging/UpdateEntitySuccessMessage.action */ "./build.definitions/quickbid/Actions/Logging/UpdateEntitySuccessMessage.action")
	let quickbid_actions_logging_uploadlog_action = __webpack_require__(/*! ./quickbid/Actions/Logging/UploadLog.action */ "./build.definitions/quickbid/Actions/Logging/UploadLog.action")
	let quickbid_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./quickbid/Actions/Logging/UploadLogProgress.action */ "./build.definitions/quickbid/Actions/Logging/UploadLogProgress.action")
	let quickbid_actions_notify_action = __webpack_require__(/*! ./quickbid/Actions/notify.action */ "./build.definitions/quickbid/Actions/notify.action")
	let quickbid_actions_opendocument_action = __webpack_require__(/*! ./quickbid/Actions/OpenDocument.action */ "./build.definitions/quickbid/Actions/OpenDocument.action")
	let quickbid_actions_toapprovedetail_action = __webpack_require__(/*! ./quickbid/Actions/toApproveDetail.action */ "./build.definitions/quickbid/Actions/toApproveDetail.action")
	let quickbid_actions_toapprovedqus_action = __webpack_require__(/*! ./quickbid/Actions/toApprovedQus.action */ "./build.definitions/quickbid/Actions/toApprovedQus.action")
	let quickbid_actions_toaprvdetail_action = __webpack_require__(/*! ./quickbid/Actions/toaprvdetail.action */ "./build.definitions/quickbid/Actions/toaprvdetail.action")
	let quickbid_actions_toawardeddetail_action = __webpack_require__(/*! ./quickbid/Actions/toAwardedDetail.action */ "./build.definitions/quickbid/Actions/toAwardedDetail.action")
	let quickbid_actions_toawardedqus_action = __webpack_require__(/*! ./quickbid/Actions/toAwardedQus.action */ "./build.definitions/quickbid/Actions/toAwardedQus.action")
	let quickbid_actions_toqus_action = __webpack_require__(/*! ./quickbid/Actions/toQus.action */ "./build.definitions/quickbid/Actions/toQus.action")
	let quickbid_actions_toqusedit_action = __webpack_require__(/*! ./quickbid/Actions/toQusEdit.action */ "./build.definitions/quickbid/Actions/toQusEdit.action")
	let quickbid_actions_totabs_action = __webpack_require__(/*! ./quickbid/Actions/toTabs.action */ "./build.definitions/quickbid/Actions/toTabs.action")
	let quickbid_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/quickbid/Actions/UpdateEntityFailureMessage.action")
	let quickbid_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/quickbid/Actions/UpdateEntitySuccessMessage.action")
	let quickbid_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./quickbid/Actions/UploadStreamFailureMessage.action */ "./build.definitions/quickbid/Actions/UploadStreamFailureMessage.action")
	let quickbid_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./quickbid/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/quickbid/Actions/UploadStreamSuccessMessage.action")
	let quickbid_extensions_questionnaireaprv_controls_questionnaireaprv_ts = __webpack_require__(/*! ./quickbid/Extensions/questionnaireAprv/controls/questionnaireAprv.ts */ "./build.definitions/quickbid/Extensions/questionnaireAprv/controls/questionnaireAprv.ts")
	let quickbid_extensions_questionnaireclass_controls_questionnaireclass_ts = __webpack_require__(/*! ./quickbid/Extensions/QuestionnaireClass/controls/QuestionnaireClass.ts */ "./build.definitions/quickbid/Extensions/QuestionnaireClass/controls/QuestionnaireClass.ts")
	let quickbid_globals_application_appdefinition_version_global = __webpack_require__(/*! ./quickbid/Globals/Application/AppDefinition_Version.global */ "./build.definitions/quickbid/Globals/Application/AppDefinition_Version.global")
	let quickbid_globals_application_applicationname_global = __webpack_require__(/*! ./quickbid/Globals/Application/ApplicationName.global */ "./build.definitions/quickbid/Globals/Application/ApplicationName.global")
	let quickbid_globals_application_supportemail_global = __webpack_require__(/*! ./quickbid/Globals/Application/SupportEmail.global */ "./build.definitions/quickbid/Globals/Application/SupportEmail.global")
	let quickbid_globals_application_supportphone_global = __webpack_require__(/*! ./quickbid/Globals/Application/SupportPhone.global */ "./build.definitions/quickbid/Globals/Application/SupportPhone.global")
	let quickbid_i18n_i18n_properties = __webpack_require__(/*! ./quickbid/i18n/i18n.properties */ "./build.definitions/quickbid/i18n/i18n.properties")
	let quickbid_images_peol_logo__1___1__png = __webpack_require__(/*! ./quickbid/Images/peol_logo (1) (1).png */ "./build.definitions/quickbid/Images/peol_logo (1) (1).png")
	let quickbid_jsconfig_json = __webpack_require__(/*! ./quickbid/jsconfig.json */ "./build.definitions/quickbid/jsconfig.json")
	let quickbid_pages_application_about_page = __webpack_require__(/*! ./quickbid/Pages/Application/About.page */ "./build.definitions/quickbid/Pages/Application/About.page")
	let quickbid_pages_application_support_page = __webpack_require__(/*! ./quickbid/Pages/Application/Support.page */ "./build.definitions/quickbid/Pages/Application/Support.page")
	let quickbid_pages_application_useractivitylog_page = __webpack_require__(/*! ./quickbid/Pages/Application/UserActivityLog.page */ "./build.definitions/quickbid/Pages/Application/UserActivityLog.page")
	let quickbid_pages_approvedqus_page = __webpack_require__(/*! ./quickbid/Pages/approvedQus.page */ "./build.definitions/quickbid/Pages/approvedQus.page")
	let quickbid_pages_attachcreate_page = __webpack_require__(/*! ./quickbid/Pages/AttachCreate.page */ "./build.definitions/quickbid/Pages/AttachCreate.page")
	let quickbid_pages_awardedqus_page = __webpack_require__(/*! ./quickbid/Pages/AwardedQus.page */ "./build.definitions/quickbid/Pages/AwardedQus.page")
	let quickbid_pages_capoff_attachments_table_attachments_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Attachments_table/Attachments_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Create.page")
	let quickbid_pages_capoff_attachments_table_attachments_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Attachments_table/Attachments_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Detail.page")
	let quickbid_pages_capoff_attachments_table_attachments_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Attachments_table/Attachments_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Edit.page")
	let quickbid_pages_capoff_attachments_table_attachments_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Attachments_table/Attachments_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_List.page")
	let quickbid_pages_capoff_bid_reply_bid_reply_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Bid_reply/Bid_reply_Create.page */ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Create.page")
	let quickbid_pages_capoff_bid_reply_bid_reply_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Bid_reply/Bid_reply_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Detail.page")
	let quickbid_pages_capoff_bid_reply_bid_reply_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Bid_reply/Bid_reply_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Edit.page")
	let quickbid_pages_capoff_bid_reply_bid_reply_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Bid_reply/Bid_reply_List.page */ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_List.page")
	let quickbid_pages_capoff_dropdown_dropdown_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Dropdown/Dropdown_Create.page */ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Create.page")
	let quickbid_pages_capoff_dropdown_dropdown_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Dropdown/Dropdown_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Detail.page")
	let quickbid_pages_capoff_dropdown_dropdown_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Dropdown/Dropdown_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Edit.page")
	let quickbid_pages_capoff_dropdown_dropdown_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Dropdown/Dropdown_List.page */ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_List.page")
	let quickbid_pages_capoff_header_table_header_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Create.page")
	let quickbid_pages_capoff_header_table_header_table_createitem_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_CreateItem_table.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateItem_table.page")
	let quickbid_pages_capoff_header_table_header_table_createquestionnaire_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_CreateQuestionnaire_table.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateQuestionnaire_table.page")
	let quickbid_pages_capoff_header_table_header_table_createsupplier_bid_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_bid_table.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_bid_table.page")
	let quickbid_pages_capoff_header_table_header_table_createsupplier_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_table.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_table.page")
	let quickbid_pages_capoff_header_table_header_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Detail.page")
	let quickbid_pages_capoff_header_table_header_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Edit.page")
	let quickbid_pages_capoff_header_table_header_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Header_table/Header_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_List.page")
	let quickbid_pages_capoff_item_table_item_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Item_table/Item_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Create.page")
	let quickbid_pages_capoff_item_table_item_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Item_table/Item_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Detail.page")
	let quickbid_pages_capoff_item_table_item_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Item_table/Item_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Edit.page")
	let quickbid_pages_capoff_item_table_item_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Item_table/Item_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_List.page")
	let quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Create.page")
	let quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page")
	let quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page")
	let quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_List.page")
	let quickbid_pages_capoff_questionnaire_table_questionnaire_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Create.page")
	let quickbid_pages_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page")
	let quickbid_pages_capoff_questionnaire_table_questionnaire_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Detail.page")
	let quickbid_pages_capoff_questionnaire_table_questionnaire_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Edit.page")
	let quickbid_pages_capoff_questionnaire_table_questionnaire_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_List.page")
	let quickbid_pages_capoff_supplier_bid_table_approved_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Approved_detail.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Approved_detail.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Create.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Detail.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detailn_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_DetailN.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_DetailN.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Edit.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_editn_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_EditN.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_EditN.page")
	let quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_List.page")
	let quickbid_pages_capoff_supplier_reply_supplier_reply_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_supplier_reply/supplier_reply_Create.page */ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Create.page")
	let quickbid_pages_capoff_supplier_reply_supplier_reply_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_supplier_reply/supplier_reply_Detail.page */ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Detail.page")
	let quickbid_pages_capoff_supplier_reply_supplier_reply_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_supplier_reply/supplier_reply_Edit.page */ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Edit.page")
	let quickbid_pages_capoff_supplier_reply_supplier_reply_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_supplier_reply/supplier_reply_List.page */ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_List.page")
	let quickbid_pages_capoff_supplier_table_approved_bids_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Approved Bids.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved Bids.page")
	let quickbid_pages_capoff_supplier_table_approved_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Approved_List.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved_List.page")
	let quickbid_pages_capoff_supplier_table_awarded_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Awarded Detail.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded Detail.page")
	let quickbid_pages_capoff_supplier_table_awarded_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Awarded List.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded List.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_create_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_Create.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Create.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_createattachments_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateAttachments_table.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateAttachments_table.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_table.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_table.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_createsupplier_bid_table_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateSupplier_bid_table.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateSupplier_bid_table.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_detail_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_Detail.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Detail.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_detailn_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_DetailN.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_DetailN.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_edit_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_Edit.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Edit.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_list_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page")
	let quickbid_pages_capoff_supplier_table_supplier_table_listn_page = __webpack_require__(/*! ./quickbid/Pages/capoff_Supplier_table/Supplier_table_ListN.page */ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_ListN.page")
	let quickbid_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./quickbid/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_Detail.page")
	let quickbid_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./quickbid/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_List.page")
	let quickbid_pages_login_page = __webpack_require__(/*! ./quickbid/Pages/Login.page */ "./build.definitions/quickbid/Pages/Login.page")
	let quickbid_pages_main_page = __webpack_require__(/*! ./quickbid/Pages/Main.page */ "./build.definitions/quickbid/Pages/Main.page")
	let quickbid_pages_qus_page = __webpack_require__(/*! ./quickbid/Pages/qus.page */ "./build.definitions/quickbid/Pages/qus.page")
	let quickbid_pages_qusedit_page = __webpack_require__(/*! ./quickbid/Pages/qusEdit.page */ "./build.definitions/quickbid/Pages/qusEdit.page")
	let quickbid_pages_tabsforbidssummary_page = __webpack_require__(/*! ./quickbid/Pages/TabsForBidsSummary.page */ "./build.definitions/quickbid/Pages/TabsForBidsSummary.page")
	let quickbid_rules_application_appupdatefailure_js = __webpack_require__(/*! ./quickbid/Rules/Application/AppUpdateFailure.js */ "./build.definitions/quickbid/Rules/Application/AppUpdateFailure.js")
	let quickbid_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./quickbid/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/quickbid/Rules/Application/AppUpdateSuccess.js")
	let quickbid_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./quickbid/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/quickbid/Rules/Application/ClientIsMultiUserMode.js")
	let quickbid_rules_application_filterforattch_js = __webpack_require__(/*! ./quickbid/Rules/Application/filterforattch.js */ "./build.definitions/quickbid/Rules/Application/filterforattch.js")
	let quickbid_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./quickbid/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/quickbid/Rules/Application/GetClientSupportVersions.js")
	let quickbid_rules_application_getclientversion_js = __webpack_require__(/*! ./quickbid/Rules/Application/GetClientVersion.js */ "./build.definitions/quickbid/Rules/Application/GetClientVersion.js")
	let quickbid_rules_application_onretun_js = __webpack_require__(/*! ./quickbid/Rules/Application/onRetun.js */ "./build.definitions/quickbid/Rules/Application/onRetun.js")
	let quickbid_rules_application_onwillupdate_js = __webpack_require__(/*! ./quickbid/Rules/Application/OnWillUpdate.js */ "./build.definitions/quickbid/Rules/Application/OnWillUpdate.js")
	let quickbid_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./quickbid/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/quickbid/Rules/Application/ResetAppSettingsAndLogout.js")
	let quickbid_rules_application_savemodi_js = __webpack_require__(/*! ./quickbid/Rules/Application/savemodi.js */ "./build.definitions/quickbid/Rules/Application/savemodi.js")
	let quickbid_rules_approvedrule_js = __webpack_require__(/*! ./quickbid/Rules/ApprovedRule.js */ "./build.definitions/quickbid/Rules/ApprovedRule.js")
	let quickbid_rules_attachments_table_createentity_js = __webpack_require__(/*! ./quickbid/Rules/Attachments_table_CreateEntity.js */ "./build.definitions/quickbid/Rules/Attachments_table_CreateEntity.js")
	let quickbid_rules_attepmtrule_js = __webpack_require__(/*! ./quickbid/Rules/attepmtRule.js */ "./build.definitions/quickbid/Rules/attepmtRule.js")
	let quickbid_rules_awardedcountrule_js = __webpack_require__(/*! ./quickbid/Rules/awardedCountRule.js */ "./build.definitions/quickbid/Rules/awardedCountRule.js")
	let quickbid_rules_awardedfilrule_js = __webpack_require__(/*! ./quickbid/Rules/awardedFilRule.js */ "./build.definitions/quickbid/Rules/awardedFilRule.js")
	let quickbid_rules_capoff_attachments_table_attachments_table_createentity_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Attachments_table/Attachments_table_CreateEntity.js */ "./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_CreateEntity.js")
	let quickbid_rules_capoff_attachments_table_attachments_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Attachments_table/Attachments_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_bid_reply_bid_reply_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Bid_reply/Bid_reply_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Bid_reply/Bid_reply_DeleteConfirmation.js")
	let quickbid_rules_capoff_dropdown_dropdown_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Dropdown/Dropdown_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Dropdown/Dropdown_DeleteConfirmation.js")
	let quickbid_rules_capoff_header_table_header_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Header_table/Header_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Header_table/Header_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_item_table_item_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Item_table/Item_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Item_table/Item_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_questionnaire_table_questionnaire_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_supplier_bid_table_supplier_bid_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js")
	let quickbid_rules_capoff_supplier_reply_supplier_reply_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/supplier_reply/supplier_reply_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/supplier_reply/supplier_reply_DeleteConfirmation.js")
	let quickbid_rules_capoff_supplier_table_supplier_table_deleteconfirmation_js = __webpack_require__(/*! ./quickbid/Rules/capoff/Supplier_table/Supplier_table_DeleteConfirmation.js */ "./build.definitions/quickbid/Rules/capoff/Supplier_table/Supplier_table_DeleteConfirmation.js")
	let quickbid_rules_closedfilter_js = __webpack_require__(/*! ./quickbid/Rules/closedFilter.js */ "./build.definitions/quickbid/Rules/closedFilter.js")
	let quickbid_rules_conerr_js = __webpack_require__(/*! ./quickbid/Rules/conErr.js */ "./build.definitions/quickbid/Rules/conErr.js")
	let quickbid_rules_count_js = __webpack_require__(/*! ./quickbid/Rules/count.js */ "./build.definitions/quickbid/Rules/count.js")
	let quickbid_rules_countrule_js = __webpack_require__(/*! ./quickbid/Rules/countRule.js */ "./build.definitions/quickbid/Rules/countRule.js")
	let quickbid_rules_doc_idval_js = __webpack_require__(/*! ./quickbid/Rules/doc_idVal.js */ "./build.definitions/quickbid/Rules/doc_idVal.js")
	let quickbid_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./quickbid/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/quickbid/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
	let quickbid_rules_errorrule_js = __webpack_require__(/*! ./quickbid/Rules/errorRule.js */ "./build.definitions/quickbid/Rules/errorRule.js")
	let quickbid_rules_filesvisi_js = __webpack_require__(/*! ./quickbid/Rules/filesvisi.js */ "./build.definitions/quickbid/Rules/filesvisi.js")
	let quickbid_rules_filforqus_js = __webpack_require__(/*! ./quickbid/Rules/filforqus.js */ "./build.definitions/quickbid/Rules/filforqus.js")
	let quickbid_rules_filrule_js = __webpack_require__(/*! ./quickbid/Rules/filRule.js */ "./build.definitions/quickbid/Rules/filRule.js")
	let quickbid_rules_filterforattch_js = __webpack_require__(/*! ./quickbid/Rules/filterforattch.js */ "./build.definitions/quickbid/Rules/filterforattch.js")
	let quickbid_rules_filterrule_js = __webpack_require__(/*! ./quickbid/Rules/filterrule.js */ "./build.definitions/quickbid/Rules/filterrule.js")
	let quickbid_rules_filtrawaded_js = __webpack_require__(/*! ./quickbid/Rules/filtrAwaded.js */ "./build.definitions/quickbid/Rules/filtrAwaded.js")
	let quickbid_rules_imagerule_js = __webpack_require__(/*! ./quickbid/Rules/imageRule.js */ "./build.definitions/quickbid/Rules/imageRule.js")
	let quickbid_rules_inviidvalrule_js = __webpack_require__(/*! ./quickbid/Rules/inviIdValRule.js */ "./build.definitions/quickbid/Rules/inviIdValRule.js")
	let quickbid_rules_leadvsisd_js = __webpack_require__(/*! ./quickbid/Rules/leadVsisD.js */ "./build.definitions/quickbid/Rules/leadVsisD.js")
	let quickbid_rules_logging_loglevels_js = __webpack_require__(/*! ./quickbid/Rules/Logging/LogLevels.js */ "./build.definitions/quickbid/Rules/Logging/LogLevels.js")
	let quickbid_rules_logging_settracecategories_js = __webpack_require__(/*! ./quickbid/Rules/Logging/SetTraceCategories.js */ "./build.definitions/quickbid/Rules/Logging/SetTraceCategories.js")
	let quickbid_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./quickbid/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/quickbid/Rules/Logging/SetUserLogLevel.js")
	let quickbid_rules_logging_togglelogging_js = __webpack_require__(/*! ./quickbid/Rules/Logging/ToggleLogging.js */ "./build.definitions/quickbid/Rules/Logging/ToggleLogging.js")
	let quickbid_rules_logging_tracecategories_js = __webpack_require__(/*! ./quickbid/Rules/Logging/TraceCategories.js */ "./build.definitions/quickbid/Rules/Logging/TraceCategories.js")
	let quickbid_rules_logging_userlogsetting_js = __webpack_require__(/*! ./quickbid/Rules/Logging/UserLogSetting.js */ "./build.definitions/quickbid/Rules/Logging/UserLogSetting.js")
	let quickbid_rules_loginrule_js = __webpack_require__(/*! ./quickbid/Rules/loginRule.js */ "./build.definitions/quickbid/Rules/loginRule.js")
	let quickbid_rules_onres_js = __webpack_require__(/*! ./quickbid/Rules/onRes.js */ "./build.definitions/quickbid/Rules/onRes.js")
	let quickbid_rules_opendocrule_js = __webpack_require__(/*! ./quickbid/Rules/openDocRule.js */ "./build.definitions/quickbid/Rules/openDocRule.js")
	let quickbid_rules_otprule_js = __webpack_require__(/*! ./quickbid/Rules/otpRule.js */ "./build.definitions/quickbid/Rules/otpRule.js")
	let quickbid_rules_pendgchck_js = __webpack_require__(/*! ./quickbid/Rules/pendgChck.js */ "./build.definitions/quickbid/Rules/pendgChck.js")
	let quickbid_rules_qusbtnvisirule_js = __webpack_require__(/*! ./quickbid/Rules/qusBtnVisiRule.js */ "./build.definitions/quickbid/Rules/qusBtnVisiRule.js")
	let quickbid_rules_qusfil_js = __webpack_require__(/*! ./quickbid/Rules/qusfil.js */ "./build.definitions/quickbid/Rules/qusfil.js")
	let quickbid_rules_service_initialize_js = __webpack_require__(/*! ./quickbid/Rules/Service/Initialize.js */ "./build.definitions/quickbid/Rules/Service/Initialize.js")
	let quickbid_rules_synch_js = __webpack_require__(/*! ./quickbid/Rules/synch.js */ "./build.definitions/quickbid/Rules/synch.js")
	let quickbid_services_capoff_service = __webpack_require__(/*! ./quickbid/Services/capoff.service */ "./build.definitions/quickbid/Services/capoff.service")
	let quickbid_styles_styles_css = __webpack_require__(/*! ./quickbid/Styles/Styles.css */ "./build.definitions/quickbid/Styles/Styles.css")
	let quickbid_styles_styles_less = __webpack_require__(/*! ./quickbid/Styles/Styles.less */ "./build.definitions/quickbid/Styles/Styles.less")
	let quickbid_styles_styles_light_css = __webpack_require__(/*! ./quickbid/Styles/Styles.light.css */ "./build.definitions/quickbid/Styles/Styles.light.css")
	let quickbid_styles_styles_light_json = __webpack_require__(/*! ./quickbid/Styles/Styles.light.json */ "./build.definitions/quickbid/Styles/Styles.light.json")
	let quickbid_styles_styles_light_nss = __webpack_require__(/*! ./quickbid/Styles/Styles.light.nss */ "./build.definitions/quickbid/Styles/Styles.light.nss")
	let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
	let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")
	
	module.exports = {
		application_app : application_app,
		quickbid_actions_application_appupdate_action : quickbid_actions_application_appupdate_action,
		quickbid_actions_application_appupdatefailuremessage_action : quickbid_actions_application_appupdatefailuremessage_action,
		quickbid_actions_application_appupdateprogressbanner_action : quickbid_actions_application_appupdateprogressbanner_action,
		quickbid_actions_application_appupdatesuccessmessage_action : quickbid_actions_application_appupdatesuccessmessage_action,
		quickbid_actions_application_logout_action : quickbid_actions_application_logout_action,
		quickbid_actions_application_navtoabout_action : quickbid_actions_application_navtoabout_action,
		quickbid_actions_application_navtoactivitylog_action : quickbid_actions_application_navtoactivitylog_action,
		quickbid_actions_application_navtosupport_action : quickbid_actions_application_navtosupport_action,
		quickbid_actions_application_onwillupdate_action : quickbid_actions_application_onwillupdate_action,
		quickbid_actions_application_reset_action : quickbid_actions_application_reset_action,
		quickbid_actions_application_resetmessage_action : quickbid_actions_application_resetmessage_action,
		quickbid_actions_application_usermenupopover_action : quickbid_actions_application_usermenupopover_action,
		quickbid_actions_attachdelete_action : quickbid_actions_attachdelete_action,
		quickbid_actions_attachment_create_action : quickbid_actions_attachment_create_action,
		quickbid_actions_attachment_table_create_entity_action : quickbid_actions_attachment_table_create_entity_action,
		quickbid_actions_attachment_table_upload_stream_action : quickbid_actions_attachment_table_upload_stream_action,
		quickbid_actions_capoff_attachments_table_attachments_table_createentity_action : quickbid_actions_capoff_attachments_table_attachments_table_createentity_action,
		quickbid_actions_capoff_attachments_table_attachments_table_deleteentity_action : quickbid_actions_capoff_attachments_table_attachments_table_deleteentity_action,
		quickbid_actions_capoff_attachments_table_attachments_table_detailpopover_action : quickbid_actions_capoff_attachments_table_attachments_table_detailpopover_action,
		quickbid_actions_capoff_attachments_table_attachments_table_opendocument_action : quickbid_actions_capoff_attachments_table_attachments_table_opendocument_action,
		quickbid_actions_capoff_attachments_table_attachments_table_updateentity_action : quickbid_actions_capoff_attachments_table_attachments_table_updateentity_action,
		quickbid_actions_capoff_attachments_table_attachments_table_uploadstream_action : quickbid_actions_capoff_attachments_table_attachments_table_uploadstream_action,
		quickbid_actions_capoff_attachments_table_navtoattachments_table_create_action : quickbid_actions_capoff_attachments_table_navtoattachments_table_create_action,
		quickbid_actions_capoff_attachments_table_navtoattachments_table_detail_action : quickbid_actions_capoff_attachments_table_navtoattachments_table_detail_action,
		quickbid_actions_capoff_attachments_table_navtoattachments_table_edit_action : quickbid_actions_capoff_attachments_table_navtoattachments_table_edit_action,
		quickbid_actions_capoff_attachments_table_navtoattachments_table_list_action : quickbid_actions_capoff_attachments_table_navtoattachments_table_list_action,
		quickbid_actions_capoff_bid_reply_bid_reply_createentity_action : quickbid_actions_capoff_bid_reply_bid_reply_createentity_action,
		quickbid_actions_capoff_bid_reply_bid_reply_deleteentity_action : quickbid_actions_capoff_bid_reply_bid_reply_deleteentity_action,
		quickbid_actions_capoff_bid_reply_bid_reply_updateentity_action : quickbid_actions_capoff_bid_reply_bid_reply_updateentity_action,
		quickbid_actions_capoff_bid_reply_navtobid_reply_create_action : quickbid_actions_capoff_bid_reply_navtobid_reply_create_action,
		quickbid_actions_capoff_bid_reply_navtobid_reply_detail_action : quickbid_actions_capoff_bid_reply_navtobid_reply_detail_action,
		quickbid_actions_capoff_bid_reply_navtobid_reply_edit_action : quickbid_actions_capoff_bid_reply_navtobid_reply_edit_action,
		quickbid_actions_capoff_bid_reply_navtobid_reply_list_action : quickbid_actions_capoff_bid_reply_navtobid_reply_list_action,
		quickbid_actions_capoff_dropdown_dropdown_createentity_action : quickbid_actions_capoff_dropdown_dropdown_createentity_action,
		quickbid_actions_capoff_dropdown_dropdown_deleteentity_action : quickbid_actions_capoff_dropdown_dropdown_deleteentity_action,
		quickbid_actions_capoff_dropdown_dropdown_updateentity_action : quickbid_actions_capoff_dropdown_dropdown_updateentity_action,
		quickbid_actions_capoff_dropdown_navtodropdown_create_action : quickbid_actions_capoff_dropdown_navtodropdown_create_action,
		quickbid_actions_capoff_dropdown_navtodropdown_detail_action : quickbid_actions_capoff_dropdown_navtodropdown_detail_action,
		quickbid_actions_capoff_dropdown_navtodropdown_edit_action : quickbid_actions_capoff_dropdown_navtodropdown_edit_action,
		quickbid_actions_capoff_dropdown_navtodropdown_list_action : quickbid_actions_capoff_dropdown_navtodropdown_list_action,
		quickbid_actions_capoff_header_table_header_table_createentity_action : quickbid_actions_capoff_header_table_header_table_createentity_action,
		quickbid_actions_capoff_header_table_header_table_createitem_table_action : quickbid_actions_capoff_header_table_header_table_createitem_table_action,
		quickbid_actions_capoff_header_table_header_table_createquestionnaire_table_action : quickbid_actions_capoff_header_table_header_table_createquestionnaire_table_action,
		quickbid_actions_capoff_header_table_header_table_createsupplier_bid_table_action : quickbid_actions_capoff_header_table_header_table_createsupplier_bid_table_action,
		quickbid_actions_capoff_header_table_header_table_createsupplier_table_action : quickbid_actions_capoff_header_table_header_table_createsupplier_table_action,
		quickbid_actions_capoff_header_table_header_table_deleteentity_action : quickbid_actions_capoff_header_table_header_table_deleteentity_action,
		quickbid_actions_capoff_header_table_header_table_detailpopover_action : quickbid_actions_capoff_header_table_header_table_detailpopover_action,
		quickbid_actions_capoff_header_table_header_table_updateentity_action : quickbid_actions_capoff_header_table_header_table_updateentity_action,
		quickbid_actions_capoff_header_table_navtoheader_table_create_action : quickbid_actions_capoff_header_table_navtoheader_table_create_action,
		quickbid_actions_capoff_header_table_navtoheader_table_createitem_table_action : quickbid_actions_capoff_header_table_navtoheader_table_createitem_table_action,
		quickbid_actions_capoff_header_table_navtoheader_table_createquestionnaire_table_action : quickbid_actions_capoff_header_table_navtoheader_table_createquestionnaire_table_action,
		quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_bid_table_action : quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_bid_table_action,
		quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_table_action : quickbid_actions_capoff_header_table_navtoheader_table_createsupplier_table_action,
		quickbid_actions_capoff_header_table_navtoheader_table_detail_action : quickbid_actions_capoff_header_table_navtoheader_table_detail_action,
		quickbid_actions_capoff_header_table_navtoheader_table_edit_action : quickbid_actions_capoff_header_table_navtoheader_table_edit_action,
		quickbid_actions_capoff_header_table_navtoheader_table_list_action : quickbid_actions_capoff_header_table_navtoheader_table_list_action,
		quickbid_actions_capoff_item_table_item_table_createentity_action : quickbid_actions_capoff_item_table_item_table_createentity_action,
		quickbid_actions_capoff_item_table_item_table_deleteentity_action : quickbid_actions_capoff_item_table_item_table_deleteentity_action,
		quickbid_actions_capoff_item_table_item_table_updateentity_action : quickbid_actions_capoff_item_table_item_table_updateentity_action,
		quickbid_actions_capoff_item_table_navtoitem_table_create_action : quickbid_actions_capoff_item_table_navtoitem_table_create_action,
		quickbid_actions_capoff_item_table_navtoitem_table_detail_action : quickbid_actions_capoff_item_table_navtoitem_table_detail_action,
		quickbid_actions_capoff_item_table_navtoitem_table_edit_action : quickbid_actions_capoff_item_table_navtoitem_table_edit_action,
		quickbid_actions_capoff_item_table_navtoitem_table_list_action : quickbid_actions_capoff_item_table_navtoitem_table_list_action,
		quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action : quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_create_action,
		quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action : quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_detail_action,
		quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action : quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_edit_action,
		quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action : quickbid_actions_capoff_questionnaire_reply_table_navtoquestionnaire_reply_table_list_action,
		quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_createentity_action : quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_createentity_action,
		quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action : quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteentity_action,
		quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_updateentity_action : quickbid_actions_capoff_questionnaire_reply_table_questionnaire_reply_table_updateentity_action,
		quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_create_action : quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_create_action,
		quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action : quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_createquestionnaire_reply_table_action,
		quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_detail_action : quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_detail_action,
		quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_edit_action : quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_edit_action,
		quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_list_action : quickbid_actions_capoff_questionnaire_table_navtoquestionnaire_table_list_action,
		quickbid_actions_capoff_questionnaire_table_questionnaire_table_createentity_action : quickbid_actions_capoff_questionnaire_table_questionnaire_table_createentity_action,
		quickbid_actions_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action : quickbid_actions_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_action,
		quickbid_actions_capoff_questionnaire_table_questionnaire_table_deleteentity_action : quickbid_actions_capoff_questionnaire_table_questionnaire_table_deleteentity_action,
		quickbid_actions_capoff_questionnaire_table_questionnaire_table_detailpopover_action : quickbid_actions_capoff_questionnaire_table_questionnaire_table_detailpopover_action,
		quickbid_actions_capoff_questionnaire_table_questionnaire_table_updateentity_action : quickbid_actions_capoff_questionnaire_table_questionnaire_table_updateentity_action,
		quickbid_actions_capoff_service_closeoffline_action : quickbid_actions_capoff_service_closeoffline_action,
		quickbid_actions_capoff_service_closeofflinefailuremessage_action : quickbid_actions_capoff_service_closeofflinefailuremessage_action,
		quickbid_actions_capoff_service_closeofflinesuccessmessage_action : quickbid_actions_capoff_service_closeofflinesuccessmessage_action,
		quickbid_actions_capoff_service_downloadoffline_action : quickbid_actions_capoff_service_downloadoffline_action,
		quickbid_actions_capoff_service_downloadstartedmessage_action : quickbid_actions_capoff_service_downloadstartedmessage_action,
		quickbid_actions_capoff_service_initializeoffline_action : quickbid_actions_capoff_service_initializeoffline_action,
		quickbid_actions_capoff_service_initializeofflinefailuremessage_action : quickbid_actions_capoff_service_initializeofflinefailuremessage_action,
		quickbid_actions_capoff_service_syncfailuremessage_action : quickbid_actions_capoff_service_syncfailuremessage_action,
		quickbid_actions_capoff_service_syncstartedmessage_action : quickbid_actions_capoff_service_syncstartedmessage_action,
		quickbid_actions_capoff_service_uploadoffline_action : quickbid_actions_capoff_service_uploadoffline_action,
		quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_create_action : quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_create_action,
		quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_detail_action : quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_detail_action,
		quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_edit_action : quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_edit_action,
		quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_list_action : quickbid_actions_capoff_supplier_bid_table_navtosupplier_bid_table_list_action,
		quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_createentity_action : quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_createentity_action,
		quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_deleteentity_action : quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_deleteentity_action,
		quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_updateentity_action : quickbid_actions_capoff_supplier_bid_table_supplier_bid_table_updateentity_action,
		quickbid_actions_capoff_supplier_reply_navtosupplier_reply_create_action : quickbid_actions_capoff_supplier_reply_navtosupplier_reply_create_action,
		quickbid_actions_capoff_supplier_reply_navtosupplier_reply_detail_action : quickbid_actions_capoff_supplier_reply_navtosupplier_reply_detail_action,
		quickbid_actions_capoff_supplier_reply_navtosupplier_reply_edit_action : quickbid_actions_capoff_supplier_reply_navtosupplier_reply_edit_action,
		quickbid_actions_capoff_supplier_reply_navtosupplier_reply_list_action : quickbid_actions_capoff_supplier_reply_navtosupplier_reply_list_action,
		quickbid_actions_capoff_supplier_reply_supplier_reply_createentity_action : quickbid_actions_capoff_supplier_reply_supplier_reply_createentity_action,
		quickbid_actions_capoff_supplier_reply_supplier_reply_deleteentity_action : quickbid_actions_capoff_supplier_reply_supplier_reply_deleteentity_action,
		quickbid_actions_capoff_supplier_reply_supplier_reply_updateentity_action : quickbid_actions_capoff_supplier_reply_supplier_reply_updateentity_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_create_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_create_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_createattachments_table_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_createattachments_table_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_reply_table_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_table_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_createquestionnaire_table_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_createsupplier_bid_table_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_createsupplier_bid_table_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_detail_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_detail_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_edit_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_edit_action,
		quickbid_actions_capoff_supplier_table_navtosupplier_table_list_action : quickbid_actions_capoff_supplier_table_navtosupplier_table_list_action,
		quickbid_actions_capoff_supplier_table_supplier_table_createattachments_table_action : quickbid_actions_capoff_supplier_table_supplier_table_createattachments_table_action,
		quickbid_actions_capoff_supplier_table_supplier_table_createentity_action : quickbid_actions_capoff_supplier_table_supplier_table_createentity_action,
		quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_action : quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_action,
		quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_table_action : quickbid_actions_capoff_supplier_table_supplier_table_createquestionnaire_table_action,
		quickbid_actions_capoff_supplier_table_supplier_table_createsupplier_bid_table_action : quickbid_actions_capoff_supplier_table_supplier_table_createsupplier_bid_table_action,
		quickbid_actions_capoff_supplier_table_supplier_table_deleteentity_action : quickbid_actions_capoff_supplier_table_supplier_table_deleteentity_action,
		quickbid_actions_capoff_supplier_table_supplier_table_detailpopover_action : quickbid_actions_capoff_supplier_table_supplier_table_detailpopover_action,
		quickbid_actions_capoff_supplier_table_supplier_table_updateentity_action : quickbid_actions_capoff_supplier_table_supplier_table_updateentity_action,
		quickbid_actions_closemodalpage_cancel_action : quickbid_actions_closemodalpage_cancel_action,
		quickbid_actions_closemodalpage_complete_action : quickbid_actions_closemodalpage_complete_action,
		quickbid_actions_closepage_action : quickbid_actions_closepage_action,
		quickbid_actions_createentityfailuremessage_action : quickbid_actions_createentityfailuremessage_action,
		quickbid_actions_createentitysuccessmessage_action : quickbid_actions_createentitysuccessmessage_action,
		quickbid_actions_deleteconfirmation_action : quickbid_actions_deleteconfirmation_action,
		quickbid_actions_deleteentityfailuremessage_action : quickbid_actions_deleteentityfailuremessage_action,
		quickbid_actions_deleteentitysuccessmessage_action : quickbid_actions_deleteentitysuccessmessage_action,
		quickbid_actions_errorarchive_errorarchive_syncfailure_action : quickbid_actions_errorarchive_errorarchive_syncfailure_action,
		quickbid_actions_errorarchive_navtoerrorarchive_detail_action : quickbid_actions_errorarchive_navtoerrorarchive_detail_action,
		quickbid_actions_errorarchive_navtoerrorarchive_list_action : quickbid_actions_errorarchive_navtoerrorarchive_list_action,
		quickbid_actions_genericbannermessage_action : quickbid_actions_genericbannermessage_action,
		quickbid_actions_genericmessagebox_action : quickbid_actions_genericmessagebox_action,
		quickbid_actions_genericnavigation_action : quickbid_actions_genericnavigation_action,
		quickbid_actions_generictoastmessage_action : quickbid_actions_generictoastmessage_action,
		quickbid_actions_logging_closemodalpage_complete_action : quickbid_actions_logging_closemodalpage_complete_action,
		quickbid_actions_logging_loguploadfailure_action : quickbid_actions_logging_loguploadfailure_action,
		quickbid_actions_logging_loguploadsuccessful_action : quickbid_actions_logging_loguploadsuccessful_action,
		quickbid_actions_logging_updateentitysuccessmessage_action : quickbid_actions_logging_updateentitysuccessmessage_action,
		quickbid_actions_logging_uploadlog_action : quickbid_actions_logging_uploadlog_action,
		quickbid_actions_logging_uploadlogprogress_action : quickbid_actions_logging_uploadlogprogress_action,
		quickbid_actions_notify_action : quickbid_actions_notify_action,
		quickbid_actions_opendocument_action : quickbid_actions_opendocument_action,
		quickbid_actions_toapprovedetail_action : quickbid_actions_toapprovedetail_action,
		quickbid_actions_toapprovedqus_action : quickbid_actions_toapprovedqus_action,
		quickbid_actions_toaprvdetail_action : quickbid_actions_toaprvdetail_action,
		quickbid_actions_toawardeddetail_action : quickbid_actions_toawardeddetail_action,
		quickbid_actions_toawardedqus_action : quickbid_actions_toawardedqus_action,
		quickbid_actions_toqus_action : quickbid_actions_toqus_action,
		quickbid_actions_toqusedit_action : quickbid_actions_toqusedit_action,
		quickbid_actions_totabs_action : quickbid_actions_totabs_action,
		quickbid_actions_updateentityfailuremessage_action : quickbid_actions_updateentityfailuremessage_action,
		quickbid_actions_updateentitysuccessmessage_action : quickbid_actions_updateentitysuccessmessage_action,
		quickbid_actions_uploadstreamfailuremessage_action : quickbid_actions_uploadstreamfailuremessage_action,
		quickbid_actions_uploadstreamsuccessmessage_action : quickbid_actions_uploadstreamsuccessmessage_action,
		quickbid_extensions_questionnaireaprv_controls_questionnaireaprv_ts : quickbid_extensions_questionnaireaprv_controls_questionnaireaprv_ts,
		quickbid_extensions_questionnaireclass_controls_questionnaireclass_ts : quickbid_extensions_questionnaireclass_controls_questionnaireclass_ts,
		quickbid_globals_application_appdefinition_version_global : quickbid_globals_application_appdefinition_version_global,
		quickbid_globals_application_applicationname_global : quickbid_globals_application_applicationname_global,
		quickbid_globals_application_supportemail_global : quickbid_globals_application_supportemail_global,
		quickbid_globals_application_supportphone_global : quickbid_globals_application_supportphone_global,
		quickbid_i18n_i18n_properties : quickbid_i18n_i18n_properties,
		quickbid_images_peol_logo__1___1__png : quickbid_images_peol_logo__1___1__png,
		quickbid_jsconfig_json : quickbid_jsconfig_json,
		quickbid_pages_application_about_page : quickbid_pages_application_about_page,
		quickbid_pages_application_support_page : quickbid_pages_application_support_page,
		quickbid_pages_application_useractivitylog_page : quickbid_pages_application_useractivitylog_page,
		quickbid_pages_approvedqus_page : quickbid_pages_approvedqus_page,
		quickbid_pages_attachcreate_page : quickbid_pages_attachcreate_page,
		quickbid_pages_awardedqus_page : quickbid_pages_awardedqus_page,
		quickbid_pages_capoff_attachments_table_attachments_table_create_page : quickbid_pages_capoff_attachments_table_attachments_table_create_page,
		quickbid_pages_capoff_attachments_table_attachments_table_detail_page : quickbid_pages_capoff_attachments_table_attachments_table_detail_page,
		quickbid_pages_capoff_attachments_table_attachments_table_edit_page : quickbid_pages_capoff_attachments_table_attachments_table_edit_page,
		quickbid_pages_capoff_attachments_table_attachments_table_list_page : quickbid_pages_capoff_attachments_table_attachments_table_list_page,
		quickbid_pages_capoff_bid_reply_bid_reply_create_page : quickbid_pages_capoff_bid_reply_bid_reply_create_page,
		quickbid_pages_capoff_bid_reply_bid_reply_detail_page : quickbid_pages_capoff_bid_reply_bid_reply_detail_page,
		quickbid_pages_capoff_bid_reply_bid_reply_edit_page : quickbid_pages_capoff_bid_reply_bid_reply_edit_page,
		quickbid_pages_capoff_bid_reply_bid_reply_list_page : quickbid_pages_capoff_bid_reply_bid_reply_list_page,
		quickbid_pages_capoff_dropdown_dropdown_create_page : quickbid_pages_capoff_dropdown_dropdown_create_page,
		quickbid_pages_capoff_dropdown_dropdown_detail_page : quickbid_pages_capoff_dropdown_dropdown_detail_page,
		quickbid_pages_capoff_dropdown_dropdown_edit_page : quickbid_pages_capoff_dropdown_dropdown_edit_page,
		quickbid_pages_capoff_dropdown_dropdown_list_page : quickbid_pages_capoff_dropdown_dropdown_list_page,
		quickbid_pages_capoff_header_table_header_table_create_page : quickbid_pages_capoff_header_table_header_table_create_page,
		quickbid_pages_capoff_header_table_header_table_createitem_table_page : quickbid_pages_capoff_header_table_header_table_createitem_table_page,
		quickbid_pages_capoff_header_table_header_table_createquestionnaire_table_page : quickbid_pages_capoff_header_table_header_table_createquestionnaire_table_page,
		quickbid_pages_capoff_header_table_header_table_createsupplier_bid_table_page : quickbid_pages_capoff_header_table_header_table_createsupplier_bid_table_page,
		quickbid_pages_capoff_header_table_header_table_createsupplier_table_page : quickbid_pages_capoff_header_table_header_table_createsupplier_table_page,
		quickbid_pages_capoff_header_table_header_table_detail_page : quickbid_pages_capoff_header_table_header_table_detail_page,
		quickbid_pages_capoff_header_table_header_table_edit_page : quickbid_pages_capoff_header_table_header_table_edit_page,
		quickbid_pages_capoff_header_table_header_table_list_page : quickbid_pages_capoff_header_table_header_table_list_page,
		quickbid_pages_capoff_item_table_item_table_create_page : quickbid_pages_capoff_item_table_item_table_create_page,
		quickbid_pages_capoff_item_table_item_table_detail_page : quickbid_pages_capoff_item_table_item_table_detail_page,
		quickbid_pages_capoff_item_table_item_table_edit_page : quickbid_pages_capoff_item_table_item_table_edit_page,
		quickbid_pages_capoff_item_table_item_table_list_page : quickbid_pages_capoff_item_table_item_table_list_page,
		quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_create_page : quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_create_page,
		quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_detail_page : quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_detail_page,
		quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_edit_page : quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_edit_page,
		quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_list_page : quickbid_pages_capoff_questionnaire_reply_table_questionnaire_reply_table_list_page,
		quickbid_pages_capoff_questionnaire_table_questionnaire_table_create_page : quickbid_pages_capoff_questionnaire_table_questionnaire_table_create_page,
		quickbid_pages_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page : quickbid_pages_capoff_questionnaire_table_questionnaire_table_createquestionnaire_reply_table_page,
		quickbid_pages_capoff_questionnaire_table_questionnaire_table_detail_page : quickbid_pages_capoff_questionnaire_table_questionnaire_table_detail_page,
		quickbid_pages_capoff_questionnaire_table_questionnaire_table_edit_page : quickbid_pages_capoff_questionnaire_table_questionnaire_table_edit_page,
		quickbid_pages_capoff_questionnaire_table_questionnaire_table_list_page : quickbid_pages_capoff_questionnaire_table_questionnaire_table_list_page,
		quickbid_pages_capoff_supplier_bid_table_approved_detail_page : quickbid_pages_capoff_supplier_bid_table_approved_detail_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_create_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_create_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detail_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detail_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detailn_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_detailn_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_edit_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_edit_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_editn_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_editn_page,
		quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_list_page : quickbid_pages_capoff_supplier_bid_table_supplier_bid_table_list_page,
		quickbid_pages_capoff_supplier_reply_supplier_reply_create_page : quickbid_pages_capoff_supplier_reply_supplier_reply_create_page,
		quickbid_pages_capoff_supplier_reply_supplier_reply_detail_page : quickbid_pages_capoff_supplier_reply_supplier_reply_detail_page,
		quickbid_pages_capoff_supplier_reply_supplier_reply_edit_page : quickbid_pages_capoff_supplier_reply_supplier_reply_edit_page,
		quickbid_pages_capoff_supplier_reply_supplier_reply_list_page : quickbid_pages_capoff_supplier_reply_supplier_reply_list_page,
		quickbid_pages_capoff_supplier_table_approved_bids_page : quickbid_pages_capoff_supplier_table_approved_bids_page,
		quickbid_pages_capoff_supplier_table_approved_list_page : quickbid_pages_capoff_supplier_table_approved_list_page,
		quickbid_pages_capoff_supplier_table_awarded_detail_page : quickbid_pages_capoff_supplier_table_awarded_detail_page,
		quickbid_pages_capoff_supplier_table_awarded_list_page : quickbid_pages_capoff_supplier_table_awarded_list_page,
		quickbid_pages_capoff_supplier_table_supplier_table_create_page : quickbid_pages_capoff_supplier_table_supplier_table_create_page,
		quickbid_pages_capoff_supplier_table_supplier_table_createattachments_table_page : quickbid_pages_capoff_supplier_table_supplier_table_createattachments_table_page,
		quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_page : quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_reply_table_page,
		quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_table_page : quickbid_pages_capoff_supplier_table_supplier_table_createquestionnaire_table_page,
		quickbid_pages_capoff_supplier_table_supplier_table_createsupplier_bid_table_page : quickbid_pages_capoff_supplier_table_supplier_table_createsupplier_bid_table_page,
		quickbid_pages_capoff_supplier_table_supplier_table_detail_page : quickbid_pages_capoff_supplier_table_supplier_table_detail_page,
		quickbid_pages_capoff_supplier_table_supplier_table_detailn_page : quickbid_pages_capoff_supplier_table_supplier_table_detailn_page,
		quickbid_pages_capoff_supplier_table_supplier_table_edit_page : quickbid_pages_capoff_supplier_table_supplier_table_edit_page,
		quickbid_pages_capoff_supplier_table_supplier_table_list_page : quickbid_pages_capoff_supplier_table_supplier_table_list_page,
		quickbid_pages_capoff_supplier_table_supplier_table_listn_page : quickbid_pages_capoff_supplier_table_supplier_table_listn_page,
		quickbid_pages_errorarchive_errorarchive_detail_page : quickbid_pages_errorarchive_errorarchive_detail_page,
		quickbid_pages_errorarchive_errorarchive_list_page : quickbid_pages_errorarchive_errorarchive_list_page,
		quickbid_pages_login_page : quickbid_pages_login_page,
		quickbid_pages_main_page : quickbid_pages_main_page,
		quickbid_pages_qus_page : quickbid_pages_qus_page,
		quickbid_pages_qusedit_page : quickbid_pages_qusedit_page,
		quickbid_pages_tabsforbidssummary_page : quickbid_pages_tabsforbidssummary_page,
		quickbid_rules_application_appupdatefailure_js : quickbid_rules_application_appupdatefailure_js,
		quickbid_rules_application_appupdatesuccess_js : quickbid_rules_application_appupdatesuccess_js,
		quickbid_rules_application_clientismultiusermode_js : quickbid_rules_application_clientismultiusermode_js,
		quickbid_rules_application_filterforattch_js : quickbid_rules_application_filterforattch_js,
		quickbid_rules_application_getclientsupportversions_js : quickbid_rules_application_getclientsupportversions_js,
		quickbid_rules_application_getclientversion_js : quickbid_rules_application_getclientversion_js,
		quickbid_rules_application_onretun_js : quickbid_rules_application_onretun_js,
		quickbid_rules_application_onwillupdate_js : quickbid_rules_application_onwillupdate_js,
		quickbid_rules_application_resetappsettingsandlogout_js : quickbid_rules_application_resetappsettingsandlogout_js,
		quickbid_rules_application_savemodi_js : quickbid_rules_application_savemodi_js,
		quickbid_rules_approvedrule_js : quickbid_rules_approvedrule_js,
		quickbid_rules_attachments_table_createentity_js : quickbid_rules_attachments_table_createentity_js,
		quickbid_rules_attepmtrule_js : quickbid_rules_attepmtrule_js,
		quickbid_rules_awardedcountrule_js : quickbid_rules_awardedcountrule_js,
		quickbid_rules_awardedfilrule_js : quickbid_rules_awardedfilrule_js,
		quickbid_rules_capoff_attachments_table_attachments_table_createentity_js : quickbid_rules_capoff_attachments_table_attachments_table_createentity_js,
		quickbid_rules_capoff_attachments_table_attachments_table_deleteconfirmation_js : quickbid_rules_capoff_attachments_table_attachments_table_deleteconfirmation_js,
		quickbid_rules_capoff_bid_reply_bid_reply_deleteconfirmation_js : quickbid_rules_capoff_bid_reply_bid_reply_deleteconfirmation_js,
		quickbid_rules_capoff_dropdown_dropdown_deleteconfirmation_js : quickbid_rules_capoff_dropdown_dropdown_deleteconfirmation_js,
		quickbid_rules_capoff_header_table_header_table_deleteconfirmation_js : quickbid_rules_capoff_header_table_header_table_deleteconfirmation_js,
		quickbid_rules_capoff_item_table_item_table_deleteconfirmation_js : quickbid_rules_capoff_item_table_item_table_deleteconfirmation_js,
		quickbid_rules_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js : quickbid_rules_capoff_questionnaire_reply_table_questionnaire_reply_table_deleteconfirmation_js,
		quickbid_rules_capoff_questionnaire_table_questionnaire_table_deleteconfirmation_js : quickbid_rules_capoff_questionnaire_table_questionnaire_table_deleteconfirmation_js,
		quickbid_rules_capoff_supplier_bid_table_supplier_bid_table_deleteconfirmation_js : quickbid_rules_capoff_supplier_bid_table_supplier_bid_table_deleteconfirmation_js,
		quickbid_rules_capoff_supplier_reply_supplier_reply_deleteconfirmation_js : quickbid_rules_capoff_supplier_reply_supplier_reply_deleteconfirmation_js,
		quickbid_rules_capoff_supplier_table_supplier_table_deleteconfirmation_js : quickbid_rules_capoff_supplier_table_supplier_table_deleteconfirmation_js,
		quickbid_rules_closedfilter_js : quickbid_rules_closedfilter_js,
		quickbid_rules_conerr_js : quickbid_rules_conerr_js,
		quickbid_rules_count_js : quickbid_rules_count_js,
		quickbid_rules_countrule_js : quickbid_rules_countrule_js,
		quickbid_rules_doc_idval_js : quickbid_rules_doc_idval_js,
		quickbid_rules_errorarchive_errorarchive_checkforsyncerror_js : quickbid_rules_errorarchive_errorarchive_checkforsyncerror_js,
		quickbid_rules_errorrule_js : quickbid_rules_errorrule_js,
		quickbid_rules_filesvisi_js : quickbid_rules_filesvisi_js,
		quickbid_rules_filforqus_js : quickbid_rules_filforqus_js,
		quickbid_rules_filrule_js : quickbid_rules_filrule_js,
		quickbid_rules_filterforattch_js : quickbid_rules_filterforattch_js,
		quickbid_rules_filterrule_js : quickbid_rules_filterrule_js,
		quickbid_rules_filtrawaded_js : quickbid_rules_filtrawaded_js,
		quickbid_rules_imagerule_js : quickbid_rules_imagerule_js,
		quickbid_rules_inviidvalrule_js : quickbid_rules_inviidvalrule_js,
		quickbid_rules_leadvsisd_js : quickbid_rules_leadvsisd_js,
		quickbid_rules_logging_loglevels_js : quickbid_rules_logging_loglevels_js,
		quickbid_rules_logging_settracecategories_js : quickbid_rules_logging_settracecategories_js,
		quickbid_rules_logging_setuserloglevel_js : quickbid_rules_logging_setuserloglevel_js,
		quickbid_rules_logging_togglelogging_js : quickbid_rules_logging_togglelogging_js,
		quickbid_rules_logging_tracecategories_js : quickbid_rules_logging_tracecategories_js,
		quickbid_rules_logging_userlogsetting_js : quickbid_rules_logging_userlogsetting_js,
		quickbid_rules_loginrule_js : quickbid_rules_loginrule_js,
		quickbid_rules_onres_js : quickbid_rules_onres_js,
		quickbid_rules_opendocrule_js : quickbid_rules_opendocrule_js,
		quickbid_rules_otprule_js : quickbid_rules_otprule_js,
		quickbid_rules_pendgchck_js : quickbid_rules_pendgchck_js,
		quickbid_rules_qusbtnvisirule_js : quickbid_rules_qusbtnvisirule_js,
		quickbid_rules_qusfil_js : quickbid_rules_qusfil_js,
		quickbid_rules_service_initialize_js : quickbid_rules_service_initialize_js,
		quickbid_rules_synch_js : quickbid_rules_synch_js,
		quickbid_services_capoff_service : quickbid_services_capoff_service,
		quickbid_styles_styles_css : quickbid_styles_styles_css,
		quickbid_styles_styles_less : quickbid_styles_styles_less,
		quickbid_styles_styles_light_css : quickbid_styles_styles_light_css,
		quickbid_styles_styles_light_json : quickbid_styles_styles_light_json,
		quickbid_styles_styles_light_nss : quickbid_styles_styles_light_nss,
		tsconfig_json : tsconfig_json,
		version_mdkbundlerversion : version_mdkbundlerversion
	}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/AppUpdateFailure.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/AppUpdateFailure.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/quickbid/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/AppUpdateSuccess.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/AppUpdateSuccess.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/quickbid/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/quickbid/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/ClientIsMultiUserMode.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/ClientIsMultiUserMode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/GetClientSupportVersions.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/GetClientSupportVersions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/GetClientVersion.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/GetClientVersion.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/OnWillUpdate.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/OnWillUpdate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/Application/OnWillUpdate.action').then((result) => {
        // if (result.data) {
        //     return clientAPI.executeAction('/quickbid/Actions/capoff/Service/CloseOffline.action').then(
        //         (success) => Promise.resolve(success),
                // (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        // } else {
        //     return Promise.reject('User Deferred');
        // }
    // });
  
    // return clientAPI.executeAction('/n44/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
// }

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/ResetAppSettingsAndLogout.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/quickbid/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/filterforattch.js":
/*!************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/filterforattch.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterforattch)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filterforattch(clientAPI) {
    debugger

    var docIdValue = clientAPI._control.context.binding.doc_id
    var invita = clientAPI._control.context.binding.invitationId


return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${invita}'`
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/onRetun.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/onRetun.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onRetun)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function onRetun(clientAPI) {
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









/***/ }),

/***/ "./build.definitions/quickbid/Rules/Application/savemodi.js":
/*!******************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Application/savemodi.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ savemodi)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

function savemodi(clientAPI) {
debugger
    clientAPI.executeAction({
        'Name': "/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action",
    });

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







/***/ }),

/***/ "./build.definitions/quickbid/Rules/ApprovedRule.js":
/*!**********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/ApprovedRule.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApprovedRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ApprovedRule(clientAPI) {
    /**
 * @param {IClientAPI} clientAPI - The client API object.
 */
    debugger
    var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
    var d = doc_idd.split('"').join('');

    var dd = clientAPI._control.context.binding["@odata.id"]
let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
console.log(docIdValue);
    var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
 var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
 i = i.replace('docIdvalue', "'" + docIdValue + "'");
     i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
   
var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
// return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`


// return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=doc_id eq '${docIdValue}' and status ne 'Open')`;

// and supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq 'yes'
return `$filter=doc_id eq '${docIdValue}' and (status ne 'Completed' or status ne 'Open')`;

}
///










// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function ApprovedRule(clientAPI) {
//     /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
//     // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function filterrule(clientAPI) {

// //     debugger

// // // var l = clientAPI.getPageProxy().getControl('SSectionObjectHeader0')
// // var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id

// // // $filter=status eq 'Open' or doc_id eq doc_id

// // }
// /**
//  * Filters records based on the given criteria.
//  * @param {IClientAPI} clientAPI - The client API object.
//  */

//     debugger
//     var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
//     // doc_idd = "'" + doc_idd.replace(/"/g, '') + "'";
//     // var d = doc_idd.replace(/"/g, '');
//     var d = doc_idd.split('"').join('');

//     var dd = clientAPI._control.context.binding["@odata.id"]
//     // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
// let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
// let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
// console.log(docIdValue);


//     // Assuming you have a data service defined and bound to a control
//     // const service = clientAPI.getPageProxy().getDataService('YourDataService');
//     // const service = '/n4/Services/ajayurl.service';

//     // const service = '/my_pro14/Services/mydestinations.service';
//     // const entitySet = 'Supplier_bid_table';

//     // const targetPath = "#Page:Supplier_bid_table_List/#Control:SectionObjectTable0";
//     // Define the filter criteria
//     var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
//  var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//  i = i.replace('docIdvalue', "'" + docIdValue + "'");
//      i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//     // return "$filter=doc_id eq d" 
//     // + clientAPI.evaluateTargetPath(targetPath) + "'";

//     // Execute the query with the filter criteria
// //     return service.query(filter)
// //         .then(result => {
// //             // Handle the filtered records here
// //             console.log("Filtered Records:", result);
// //         })
// //         .catch(error => {
// //             // Handle any errors that occur during the query
// //             console.error("Error filtering records:", error);
// //         });$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq '')
// var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
// // var ii = `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`
// var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`


// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=doc_id eq '${docIdValue}' and status ne 'Open')`;

// // and supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq 'yes'
// return `$filter=doc_id eq '${docIdValue}' and (status ne 'Completed' or status ne 'Open')`;

// }








/***/ }),

/***/ "./build.definitions/quickbid/Rules/Attachments_table_CreateEntity.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Attachments_table_CreateEntity.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/quickbid/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/quickbid/Services/capoff.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/quickbid/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/LogLevels.js":
/*!***************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/LogLevels.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/SetTraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/SetTraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/SetUserLogLevel.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/SetUserLogLevel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/ToggleLogging.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/ToggleLogging.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/TraceCategories.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/TraceCategories.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Logging/UserLogSetting.js":
/*!********************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Logging/UserLogSetting.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/Service/Initialize.js":
/*!****************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/Service/Initialize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
    debugger
    // Perform pre data initialization task

    // Initialize all your Data sources
    let _capoff = context.executeAction('/quickbid/Actions/capoff/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_capoff]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/quickbid/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/attepmtRule.js":
/*!*********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/attepmtRule.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attepmtRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function attepmtRule(clientAPI) {
    debugger
  var type =  clientAPI._context.clientAPIProps.actionBinding.type
  if( type === "RQAATTACH"){
    return clientAPI.executeAction('/quickbid/Actions/attachment_create.action');
}else{
    return clientAPI.executeAction('/quickbid/Actions/toQusEdit.action');
}
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/awardedCountRule.js":
/*!**************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/awardedCountRule.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ awardedCountRule)
/* harmony export */ });
function awardedCountRule(sectionProxy, clientAPI) {

    // let a = sectionProxy.evaluateTargetPath('#Application/#AppData/UserId');
    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    // let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and invitationId eq '${a}' and award_status eq 'Yes')`;
    let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and phone_main eq '${a}' and award_status eq 'Yes')`;
    return sectionProxy.count('/quickbid/Services/capoff.service', 'Supplier_table',queryOptions)
    .then(count => {
  
    // Return the caption as a String with the filtered count
    return `Awarded Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
}    
// return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`





























// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function awardedCountRule(clientAPI,sectionProxy) {
// //     debugger;
// //     // Fetch the count of approved bids where ApproveId is A101
// //     let queryOptions = `$filter=status eq 'Completed'`;
// //     return sectionProxy.count('/quickbid/Services/capurl.service', 'Header_table', queryOptions)
// //     .then(count => {
// //     // console.log('hello');
// //     // console.log(count);
// //     // Return the caption as a String with the filtered count
// //     return `Awarded Bids (${count})`;
// //     })
// //     .catch(error => {
// //     console.error('Error fetching count:', error);
// //     return 'Error: Unable to fetch count';
// //     });
// // }
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function count(clientAPI) {

// export default function awardedCountRule(sectionProxy, clientAPI) {

//     let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
//     // let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;;
//     // let queryOptions = `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     // let queryOptions =  `$filter=(supplier_header_rel/status eq 'Completed' and invitationId eq '${a}' and award_status eq 'Yes') or (supplier_header_rel/status eq 'Pending Selection' and invitationId eq '${a}' and award_status eq 'Yes')`;;
//     let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and phone_main eq '${a}' and award_status eq 'Yes')`;;
//     // let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and invitationId eq '${a}' and award_status eq 'Yes')`;;myLogin
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;


//     return sectionProxy.count('/quickbid/Services/capurl.service', 'Supplier_table',queryOptions)
//     .then(count => {
  
//     // Return the caption as a String with the filtered count
//     return `Awarded Bids (${count})`;
//     })
//     .catch(error => {
//     console.error('Error fetching count:', error);
//     return 'Error: Unable to fetch count';
//     });
// }    
// // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`


/***/ }),

/***/ "./build.definitions/quickbid/Rules/awardedFilRule.js":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/awardedFilRule.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ awardedFilRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function awardedFilRule(clientAPI) {

    /**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 
 * Filters records based on the given criteria.
 * @param {IClientAPI} clientAPI - The client API object.
 */
    debugger
    var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
    var d = doc_idd.split('"').join('');

    var dd = clientAPI._control.context.binding["@odata.id"]
let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
console.log(docIdValue);
    var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
 var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
 i = i.replace('docIdvalue', "'" + docIdValue + "'");
     i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
   
var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
return `$filter=doc_id eq '${docIdValue}' and status eq 'Completed'`
}














































// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function awardedFilRule(clientAPI) {

//     /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
 
//     // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function filterrule(clientAPI) {

// //     debugger

// // // var l = clientAPI.getPageProxy().getControl('SSectionObjectHeader0')
// // var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id

// // // $filter=status eq 'Open' or doc_id eq doc_id

// // }
// /**
//  * Filters records based on the given criteria.
//  * @param {IClientAPI} clientAPI - The client API object.
//  */

//     debugger
//     var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
//     // doc_idd = "'" + doc_idd.replace(/"/g, '') + "'";
//     // var d = doc_idd.replace(/"/g, '');
//     var d = doc_idd.split('"').join('');

//     var dd = clientAPI._control.context.binding["@odata.id"]
//     // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
// let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
// let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
// console.log(docIdValue);


//     // Assuming you have a data service defined and bound to a control
//     // const service = clientAPI.getPageProxy().getDataService('YourDataService');
//     // const service = '/n4/Services/ajayurl.service';

//     // const service = '/my_pro14/Services/mydestinations.service';
//     // const entitySet = 'Supplier_bid_table';

//     // const targetPath = "#Page:Supplier_bid_table_List/#Control:SectionObjectTable0";
//     // Define the filter criteria
//     var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
//  var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//  i = i.replace('docIdvalue', "'" + docIdValue + "'");
//      i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//     // return "$filter=doc_id eq d" 
//     // + clientAPI.evaluateTargetPath(targetPath) + "'";

//     // Execute the query with the filter criteria
// //     return service.query(filter)
// //         .then(result => {
// //             // Handle the filtered records here
// //             console.log("Filtered Records:", result);
// //         })
// //         .catch(error => {
// //             // Handle any errors that occur during the query
// //             console.error("Error filtering records:", error);
// //         });$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq '')
// var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
// // var ii = `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`
// var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`


// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=doc_id eq '${docIdValue}' and status ne 'Open')`;

// // and supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq 'yes'
// return `$filter=doc_id eq '${docIdValue}' and status eq 'Completed'`
// }










/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_CreateEntity.js":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_CreateEntity.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/quickbid/Actions/capoff/Attachments_table/Attachments_table_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/quickbid/Actions/capoff/Attachments_table/Attachments_table_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_DeleteConfirmation.js":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Attachments_table/Attachments_table_DeleteConfirmation.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Attachments_table/Attachments_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Bid_reply/Bid_reply_DeleteConfirmation.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Bid_reply/Bid_reply_DeleteConfirmation.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Bid_reply/Bid_reply_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Dropdown/Dropdown_DeleteConfirmation.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Dropdown/Dropdown_DeleteConfirmation.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Dropdown/Dropdown_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Header_table/Header_table_DeleteConfirmation.js":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Header_table/Header_table_DeleteConfirmation.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Header_table/Header_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Item_table/Item_table_DeleteConfirmation.js":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Item_table/Item_table_DeleteConfirmation.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Item_table/Item_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/Supplier_table/Supplier_table_DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/Supplier_table/Supplier_table_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/Supplier_table/Supplier_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/capoff/supplier_reply/supplier_reply_DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/capoff/supplier_reply/supplier_reply_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/quickbid/Actions/capoff/supplier_reply/supplier_reply_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/closedFilter.js":
/*!**********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/closedFilter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closedFilter)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function closedFilter(clientAPI) {
    debugger

    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and invitationId eq  '{{#Application/#AppData/UserId}}')`;
    return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`;

    // return `$filter= phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and (status ne 'Completed' or status ne 'Open')`;
    // return `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')` //for mylogin
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

}
// $expand=supplier_header_rel,supplier_to_sbid,supplier_to_question_reply_rel&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'











// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function closedFilter(clientAPI) {
//     debugger
// //    
// //     var dd = clientAPI._control.context.binding["@odata.id"]
// //     // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
// // let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
// // let docIdValue = match[0].match(/'([^']*)'/)[1];
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' or supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`;

//     // return `$filter= phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and (status ne 'Completed' or status ne 'Open')`;
//     // return `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')` //for mylogin
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

// }
// // $expand=supplier_header_rel,supplier_to_sbid,supplier_to_question_reply_rel&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'

/***/ }),

/***/ "./build.definitions/quickbid/Rules/conErr.js":
/*!****************************************************!*\
  !*** ./build.definitions/quickbid/Rules/conErr.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ conErr)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function conErr(clientAPI) {
    debugger
    alert('in')
    let err = '{#ActionResults:sync/error}';
    alert(`${err}`);
    // return '#ActionResults:sync/error'
   
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/count.js":
/*!***************************************************!*\
  !*** ./build.definitions/quickbid/Rules/count.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ count)
/* harmony export */ });
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function count(clientAPI) {

//     export default function count(sectionProxy, clientAPI) {
//         debugger
//         let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
//         let queryOptions =  `$filter=supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and  invitationId eq '${a}'`;;
//         // $expand=supplier_header_rel,supplier_to_sbid&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'
//         // let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;;
//         // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

//         return sectionProxy.count('/quickbid/Services/capurl.service', 'Supplier_table',queryOptions)
//         .then(count => {
      
//         // Return the caption as a String with the filtered count
//         return `Closed Bids (${count})`;
//         })
//         .catch(error => {
//         console.error('Error fetching count:', error);
//         return 'Error: Unable to fetch count';
//         });
        
// }

function count(sectionProxy, clientAPI) {

  
  // let a = sectionProxy.evaluateTargetPath('#Application/#AppData/UserId');
  // alert(`${a}`);
  let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
  // let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and invitationId eq '${a}'`;;
  //    let queryOptions =  `$filter=(supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and  invitationId eq '${a}') or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and  invitationId eq '${a}')`;;
  //  let queryOptions = `$filter=(supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '${a}') or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '${a}')`;
  //  let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and invitationId eq '${a}')`;myLOgin
  // let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed' and invitationId eq '${a}')`;
  // alert(`${queryOptions}`)
   let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed' and phone_main eq '${a}')`;
  //  let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed' and phone_main eq '${a}')`;
  
  //  let queryOptions = `$filter=(status ne 'Open' and status ne 'Completed') and phone_main eq '${a}'`;
  // let queryOptions = `$filter=(status ne 'Open' and status ne 'Completed' and phone_main eq '${a}')`;
  
  //or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '${a}')`;
  return sectionProxy.count('/quickbid/Services/capoff.service', 'Supplier_table',queryOptions)
  .then(count => { 
    // Return the caption as a String with the filtered count
    // alert(`Closed Bids (${count})`);
    // alert('on pulld from count');   
    return `Closed Bids (${count})`;
    })
    .catch(error => {
      console.error('Error fetching count:', error);
      alert(`${error}`)
      return 'Error: Unable to fetch count';
    });
    }

/***/ }),

/***/ "./build.definitions/quickbid/Rules/countRule.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/countRule.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countRule)
/* harmony export */ });
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function countRule(sectionProxy,clientAPI) {
//     // Fetch the count of approved bids
//     return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table')
//     .then((count) => {
//     //  console.log("hello");
//     //  console.log(count)
//     // // Create the caption string with the count
//     // let Caption = `ApproveBids (${count})`;
    
//     // // Return the caption string directly
//     // return Caption;

//     let myCaption = 'Quotes Bids';
//     let otherValue = count;

//     // Return the caption as a String
//     return `${myCaption}(${otherValue})`;
//     });
// }

// export default function count(sectionProxy, clientAPI) {
//     debugger;
//     // Fetch the count of approved bids where ApproveId is A101
//     let queryOptions = `$filter=status eq 'Open'`;
//     return sectionProxy.count('/n44/Services/capurl.service', 'Header_table', queryOptions)
//     .then(count => {
//     // console.log('hello');
//     // console.log(count);
//     // Return the caption as a String with the filtered count
//     return `Quotes Bids (${count})`;
//     })
//     .catch(error => {
//     console.error('Error fetching count:', error);
//     return 'Error: Unable to fetch count';
//     });
//     }
function countRule(sectionProxy, clientAPI) {

    // let a = sectionProxy.evaluateTargetPath('#Application/#AppData/UserId');
    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    // let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and invitationId eq '${a}'`;;myLogin
    let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and phone_main eq '${a}'`;;
    // let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and invitationId eq  '${a}'`;;
    return sectionProxy.count('/quickbid/Services/capoff.service', 'Supplier_table',queryOptions)
    .then(count => {
  
    // Return the caption as a String with the filtered count
    return `Quote Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
    }

/***/ }),

/***/ "./build.definitions/quickbid/Rules/doc_idVal.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/doc_idVal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ doc_idVal)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function doc_idVal(clientAPI) {
    debugger
    return clientAPI._context.binding.doc_id;

    // return docID;
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/errorRule.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/errorRule.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ errorRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function errorRule(clientAPI) {
    /**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
// export default function errorRule(clientAPI) {
    debugger;
    const mesg = clientAPI._context._clientData.actionResults.update.error;
    console.log(mesg);

    // Ensure mesg is a string
    const mesgString = String(mesg);

    // Extracting the error message
    const errorMessageMatch = mesgString.match(/"message":"([^"]+)"/);
    if (errorMessageMatch && errorMessageMatch.length > 1) {
        const errorMessage = errorMessageMatch[1];
      console.log(errorMessage); // Output: Your Bidding price should be less than 5600
      return  errorMessageMatch[1];
    } else {
        console.log("Error message not found or in unexpected format.");
    }
}
// }


/***/ }),

/***/ "./build.definitions/quickbid/Rules/filRule.js":
/*!*****************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filRule.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filRule(clientAPI,sectionProxy) {
    debugger
let a = clientAPI._context.binding.invitationId
//  sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
var docIdValue = clientAPI._control.context.binding.doc_id

return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${a}' and type eq 'RQAATTACH'`
// return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${a}'`//mylogin
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/filesvisi.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filesvisi.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filesvisi)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filesvisi(clientAPI) {
    debugger
    if(clientAPI._context.binding._addArgs.addedCount >= 1){
        return "Files";
    }else{
        return;
    }
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/filforqus.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filforqus.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filforqus)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filforqus(clientAPI) {
    let a = clientAPI._context.binding.invitationId
//  sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
var docIdValue = clientAPI._control.context.binding.doc_id

return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${a}' and type eq 'RQAATTACH'`
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/filterforattch.js":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filterforattch.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterforattch)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filterforattch(clientAPI) {
    debugger

    var docIdValue = clientAPI._control.context.binding.doc_id
    var invita = clientAPI._control.context.binding.invitationId

    // alert(`${docIdValue}`);
    // alert(`${invita}`);


return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${invita}'`
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/filterrule.js":
/*!********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filterrule.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterrule)
/* harmony export */ });
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function filterrule(clientAPI) {

//     debugger

// // var l = clientAPI.getPageProxy().getControl('SSectionObjectHeader0')
// var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id

// // $filter=status eq 'Open' or doc_id eq doc_id

// }
/**
 * Filters records based on the given criteria.
 * @param {IClientAPI} clientAPI - The client API object.
 */
function filterrule(clientAPI) {
    debugger
    var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
    // doc_idd = "'" + doc_idd.replace(/"/g, '') + "'";
    // var d = doc_idd.replace(/"/g, '');
    var d = doc_idd.split('"').join('');

    var dd = clientAPI._control.context.binding["@odata.id"]
    // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
console.log(docIdValue);


    // Assuming you have a data service defined and bound to a control
    // const service = clientAPI.getPageProxy().getDataService('YourDataService');
    // const service = '/n4/Services/ajayurl.service';

    // const service = '/my_pro14/Services/mydestinations.service';
    // const entitySet = 'Supplier_bid_table';

    // const targetPath = "#Page:Supplier_bid_table_List/#Control:SectionObjectTable0";
    // Define the filter criteria
    var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
 var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
 i = i.replace('docIdvalue', "'" + docIdValue + "'");
     i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
    // return "$filter=doc_id eq d" 
    // + clientAPI.evaluateTargetPath(targetPath) + "'";

    // Execute the query with the filter criteria
//     return service.query(filter)
//         .then(result => {
//             // Handle the filtered records here
//             console.log("Filtered Records:", result);
//         })
//         .catch(error => {
//             // Handle any errors that occur during the query
//             console.error("Error filtering records:", error);
//         });
var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
var ii = `$filter=doc_id eq '${docIdValue}' and status eq 'Open'`
return `$filter=doc_id eq '${docIdValue}' and status eq 'Open'`

}




/***/ }),

/***/ "./build.definitions/quickbid/Rules/filtrAwaded.js":
/*!*********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/filtrAwaded.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filtrAwaded)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filtrAwaded(clientAPI) {
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and invitationId eq  '{{#Application/#AppData/UserId}}' )`;
    return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;//mylogin
    //or ( supplier_header_rel/status eq 'Pending Selection' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    
}  
// ne open and awarded status awarded


/***/ }),

/***/ "./build.definitions/quickbid/Rules/imageRule.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/imageRule.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imageRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function imageRule(clientAPI) {
    debugger
    var type = clientAPI._context.binding.mediaType;

    if (type === "application/vnd.ms-excel"){

        return "sap-icon://document"
    }
    else if (type === "application/pdf"){
        return "sap-icon://pdf-attachment"
    }
    else if(type === "image/jpeg" || type === "image/png"){
        return "/quickbid/Services/capoff.service/{@odata.readLink}/content"
    }
    else{
        return "sap-icon://document"
    }

}

/***/ }),

/***/ "./build.definitions/quickbid/Rules/inviIdValRule.js":
/*!***********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/inviIdValRule.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inviIdValRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function inviIdValRule(clientAPI) {
    return clientAPI._control.context.binding.invitationId
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/leadVsisD.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/leadVsisD.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leadVsisD)
/* harmony export */ });


/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function leadVsisD(clientAPI) {
    debugger
    let a =  clientAPI._context.binding.eventTypeName

    // alert(`${a}`);
    if (a === "RFP"){
        return false;
    }else{
        return true;
    }
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/loginRule.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/loginRule.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function loginRule(clientAPI) {
  let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  let p = phoneNumberControl.getValue();
  let phoneNumber = "+91" + p;
  let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
  let enteredOtp = enteredOtpControl.getValue();
  
  

const myHeaders = new Headers();
myHeaders.append("content", "application/json");
myHeaders.append("Accept-Language", "en-US");
myHeaders.append("url", ` https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber} `);
myHeaders.append("Method", "PUT");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic c2ItNjhmZGNlYjgtYTczYi00Yzk3LTk0NDItMWU1NmZlNmU3ODliIWIzMDcyMDF8aXQtcnQtYzM3YjYxNDl0cmlhbCFiMjY2NTU6N2E2YjUwZTEtNDczOC00YWU0LTk3YmUtM2I4ZmM2YzRlZDMwJGZwTUZDWHNCYW0zZnBLUzhpZFVmbGI1ZWRjeU5VSk9nTzJELTdzQzYwSGs9");

const raw = JSON.stringify({
  "method": "sms",
  "sms": {
  "code": `${enteredOtp}`
  }
  });

const requestOption = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

 fetch("https://c37b6149trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
    .then((response) => response.json())
 .then((result) => {
     if(result.message == "Invalid identity or code."){
      // alert(`${result.message}`);
          alert("invalid otp")
     } else if (result.status == "SUCCESSFUL"){
          clientAPI.executeAction("/quickbid/Actions/toTabs.action");
      }    
  })
  .catch((error) => console.error(error));

  } 


















// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function loginRule(clientAPI) {
// //     // let a ;
// //     debugger
// //     let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //     let p = phoneNumberControl.getValue();

    
// //     alert(`${p}`);

// // //     let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty2');
// // // let p = phoneNumberControl.getValue();
// //   //   if (p.length === 10) { // && !p.startsWith('91')
// //   //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// //   //     p = '91' + p;
// //   // }
// //     // let phoneNumber = "+" + p;
// //     let phoneNumber = "+91" + p;
    
// //     let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// //     let enteredOtp = enteredOtpControl.getValue();

// //     alert( `${enteredOtp}`)

// //     // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');

// //     // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// //     // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// //     // // Use the API to get the 'Enterotp' control
// //     // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty2');
    
// //     // Use the API to set the 'Enterotp' control as visible
// //     // enterOtpControl.setVisible(true);
    
  
// //   // const myHeaders = new Headers();
// //   // myHeaders.append("content", "application/json");
// //   // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// //   // // myHeaders.append("Accept-Language", "en-US");
// //   // myHeaders.append("url", `https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber}`);
// //   // myHeaders.append("Method", "PUT");
// //   // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// //   // myHeaders.append("Content-Type", "application/json");
// //   // myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");
  
// //   const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", `https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber}`);
// // myHeaders.append("Method", "PUT");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");

// //   const raw = JSON.stringify({
// //     "method": "sms",
// //     "sms": {
// //     "code": `${enteredOtp}`
// //     }
// //     });
  
// //   const requestOption = {
// //     method: "POST",
// //     headers: myHeaders,
// //     body: raw,
// //     redirect: "follow"
// //   };
  
// //   fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
// //   .then((response) => response.json())
// //     .then((result) => {
// //         if(result.message == "Invalid identity or code."){
// //             alert(result.message)
// //         } else if (result.status == "SUCCESSFUL"){
// //             clientAPI.executeAction("/n44/Actions/toTabs.action");
// //             // a._control._model._model.data.IsVisible = false
// //             enterOtpControl.setVisible(false);
// //         }else{
// //           alert("Failed! Try again....")
// //           enterOtpControl.setVisible(true);
// //         }    
// //     })
// //     .catch((error) => console.error(error));
    
  
// //     }
  
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function loginRule(clientAPI) {
//   debugger
//   // let a ;
//   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
//   let p = phoneNumberControl.getValue();
//   let phoneNumber = "+91" + p;
//   let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
//   let enteredOtp = enteredOtpControl.getValue();
  

// const myHeaders = new Headers();
// myHeaders.append("content", "application/json");
// myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// myHeaders.append("Accept-Language", "en-US");
// myHeaders.append("url", ` https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber} `);
// myHeaders.append("Method", "PUT");
// myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");

// const raw = JSON.stringify({
//   "method": "sms",
//   "sms": {
//   "code": `${enteredOtp}`
//   }
//   });

// const requestOption = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

//  fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
//    .then((response) => response.json())
//  .then((result) => {
//      if(result.message == "Invalid identity or code."){
//           alert(result.message)
//      } else if (result.status == "SUCCESSFUL"){
//           clientAPI.executeAction("/n44/Actions/toTabs.action");
//       }
      

         
//   })
//   .catch((error) => console.error(error));
  

//   }




/***/ }),

/***/ "./build.definitions/quickbid/Rules/onRes.js":
/*!***************************************************!*\
  !*** ./build.definitions/quickbid/Rules/onRes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onRes)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function onRes(clientAPI) {
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


/***/ }),

/***/ "./build.definitions/quickbid/Rules/openDocRule.js":
/*!*********************************************************!*\
  !*** ./build.definitions/quickbid/Rules/openDocRule.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openDocRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function openDocRule(clientAPI) {
    debugger
    var MimeType
    var contentType = clientAPI._context.binding["content@odata.mediaContentType"];

    if ( contentType === "application/pdf" ){
        return MimeType = "application/pdf";
    }
    else if (contentType === "image/jpeg" || contentType === "image/png") {
        MimeType = "image/jpeg"; // Or you can choose the appropriate MIME type for your use case
    } else if (contentType === "text/plain") {
       return MimeType = "text/plain";
    } else if (contentType === "video/mp4" || contentType === "video/mpeg") {
        MimeType = "video/mp4"; // Or you can choose the appropriate MIME type for your use case
} else if (contentType === "application/vnd.ms-excel" || contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    MimeType = "application/vnd.ms-excel"; // Or you can choose the appropriate MIME type for your use case
} else {
        // Handle other types or provide a default behavior
    }
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/otpRule.js":
/*!*****************************************************!*\
  !*** ./build.definitions/quickbid/Rules/otpRule.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ otpRule)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function otpRule(clientAPI) {
  debugger
  // Retrieve the phone number from the form control
  let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  let phoneNumber = phoneNumberControl.getValue();

  

  if (phoneNumber === "7259303952"){
        clientAPI.executeAction("/quickbid/Actions/toTabs.action");
        }else{
  
  // Define the controls for OTP and Resend OTP buttons
  let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
  let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
  let resendOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton2');
  formCellContainer.setValue('');
  // alert(`${phoneNumber}`)
  // alert(`${userExists}`)
  // Define the service path and entity set for the read operation
  const servicePath = '/quickbid/Services/capoff.service';
  const entitySet = 'Supplier_table';
  
  // Perform the read operation to check if the user exists
  return clientAPI.read(servicePath, entitySet, [], '')
  .then(users => {
  let filteredUsers = users.map(user => {
  return { phone_main: user.phone_main };
  });
  
  // alert(`${phoneNumber}`)
  // alert(`${userExists}`)
  let userExists = filteredUsers.some(user => user.phone_main === phoneNumber);
  
  if (userExists) {
    // alert('in');
  // User exists, proceed with OTP generation and start the countdown timer
  resendOtpButtonControl.setVisible(true);
  resendOtpButtonControl.setAlignment('Right');
  getOtpButtonControl.setEnabled(false);
  phoneNumberControl.setEnabled(false);
  
  // Start the countdown timer
  let countdown = 120; // 120 seconds for 2 minutes
  let timer = setInterval(function() {
  let minutes = parseInt(countdown / 60, 10);
  let seconds = parseInt(countdown % 60, 10);
  
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  // Update the title of the resendOtpButtonControl with the remaining time
  resendOtpButtonControl.setTitle(`Resend Otp In ${minutes}:${seconds}`);
  
  countdown--;
  
  // When countdown reaches zero, clear the interval, hide the enterOtpControl, and enable the getOtpButtonControl
  if (countdown <= 0) {
  clearInterval(timer);
  formCellContainer.setVisible(false);
  getOtpButtonControl.setEnabled(true);
  resendOtpButtonControl.setVisible(false); // Hide the Resend OTP button after the timer ends
  phoneNumberControl.setEnabled(true);
  }
  }, 1000);
  
  // Existing code for sending OTP
  // Replace 'NavigateToMainContentPage' with the actual action path to navigate
  var phoneNumberWithCountryCode = "+91" + phoneNumber;
  const myHeaders = new Headers();
  myHeaders.append("content", "application/json");
  myHeaders.append("Accept-Language", "en-US");
  myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
  myHeaders.append("Method", "POST");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic c2ItNjhmZGNlYjgtYTczYi00Yzk3LTk0NDItMWU1NmZlNmU3ODliIWIzMDcyMDF8aXQtcnQtYzM3YjYxNDl0cmlhbCFiMjY2NTU6N2E2YjUwZTEtNDczOC00YWU0LTk3YmUtM2I4ZmM2YzRlZDMwJGZwTUZDWHNCYW0zZnBLUzhpZFVmbGI1ZWRjeU5VSk9nTzJELTdzQzYwSGs9");//iflow instances secret key + api key
  
  const raw = JSON.stringify({
  "identity": {
  "type": "number",
  "endpoint": phoneNumberWithCountryCode
  },
  "method": "sms",
  "smsOptions": {
  "expiry": "00:02:00"
  }
  });
  
  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
  };
  
  fetch("https://c37b6149trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));
  alert("OTP sent and its valid for only 2min");
  formCellContainer.setVisible(true);
  getOtpButtonControl.setEnabled(false);
  
  } else {
  // No matching user found, show an error message
  alert("Phone number is not valid.");
  }
  })
  .catch(error => {
  // Handle any errors from the read operation
  console.error("Read operation failed: ", error);
  // alert(`${error}`)
  });
  } 
}















// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function otpRule(clientAPI) {
// //     debugger
// //   // Retrieve the phone number from the form control
  
// //   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //   let p = phoneNumberControl.getValue();

// //   // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// //   // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // //   let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // //   // if (p === "7259303952"){
// // //   // if (p === "9591485083"){
// // //     // clientAPI.executeAction("/quickbid/Actions/toTabs.action");
// // //   // }else{
// // // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // // //     p = '91' + p;
// // // // }
// // // // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// // // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// // // // Use the API to get the 'Enterotp' control
// // // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty1');

// // // // Use the API to set the 'Enterotp' control as visible
// // //   const servicePath = '/quickbid/Services/capurl.service';
// // //   const entitySet = 'Supplier_table';
// // //   return clientAPI.read(servicePath, entitySet, [], '')
// // //   .then(users => {
     
// // //       let filteredUsers = users.map(user => {
// // //           return { phone_main: user.phone_main};
// // //           });
     
// //   let userExists = filteredUsers.some(user => user.phone_main === p);
// //   if (userExists ){
// // //   // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // //   // var phoneNumber = "+" + p;
// // //   // Make the Enterotp control visible
// // // enterOtpControl.setVisible(true);
// // // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // // clientAPI._control._builder._builtData.Enabled = false;
// // // getOtpButtonControl.setEnabled(false);

// // // // Initialize a countdown timer for 2 minutes
// // // let countdown = 120; // 120 seconds for 2 minutes

// // // // Update the countdown timer every second
// // // let timer = setInterval(function() {
// // // // Calculate the minutes and seconds from countdown
// // // let minutes = parseInt(countdown / 60, 10);
// // // let seconds = parseInt(countdown % 60, 10);

// // // // Ensure that minutes and seconds are two digits
// // // minutes = minutes < 10 ? "0" + minutes : minutes;
// // // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // // Update the value of the Timer control with the remaining time
// // // // timerControl.setCaption("hiiii");
// // // // timerControl.setValue(`${minutes}:${seconds}`);
// // // timerControl.setValue(`${minutes}:${seconds}`);
// // // // enterOtpControl.setCaption(`OTP ( ${minutes}:${seconds} )`);

// // // // Decrease the countdown timer
// // // countdown--;

// // // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // // if (countdown <= 0) {
// // // clearInterval(timer);
// // // enterOtpControl.setVisible(false);
// // // timerControl.setVisible(false);
// // // getOtpButtonControl.setEnabled(true);

// // // // Re-enable the 'Get OTP' button

// // // }
// // // }, 1000);

  
// //   var phoneNumber = "+91" + p;
// //   const myHeaders = new Headers();
// //   myHeaders.append("content", "application/json");
// //   myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// //   myHeaders.append("Accept-Language", "en-US");
// //   myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// //   myHeaders.append("Method", "POST");
// //   myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// //   myHeaders.append("Content-Type", "application/json");
// //   myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");
  
// //   const raw = JSON.stringify({
// //     "identity": {
// //       "type": "number",
// //       "endpoint": `${phoneNumber}`
// //     },
// //     "method": "sms",
// //     "smsOptions": {
// //         "expiry":"00:02:00"
// //     } 
// //   });
  
// //   const requestOptions = {
// //     method: "POST",
// //     headers: myHeaders,
// //     body: raw,
// //     redirect: "follow"
// //   };
  
// //   fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //     .then((response) => response.text())
// //     .then((result) => console.log(result))
// //     .catch((error) => console.error(error));
// //     alert("OTP sent and its valid for only 2min");
// //     // a._control._model._model.data.IsVisible = true
// //     enterOtpControl.setVisible(true);

  
// // }
// // else {
// //  // If no matching user is found, show an error message
// //  // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// //   alert("Phone no is Not Valid");
// //  }
// // // })
// // }
// // // }

// // =======================================================================================================
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let phoneNumber = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // if (phoneNumber === "123") {
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // } else {
// // // If the phone number is not valid, show an error message and re-enable the 'Get OTP' button
// // alert('Invalid phone number. Please try again');
// // // Re-enable the 'Get OTP' button

// // }


// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let phoneNumber = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // if (phoneNumber === "123") {
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // } else {
// // // If the phone number is not valid, show an error message and re-enable the 'Get OTP' button
// // alert('Invalid phone number. Please try again');
// // // Re-enable the 'Get OTP' button

// // }
// // }
// // ================================================================================
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control

// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();

// // if (p === "7259303952"){
// //   clientAPI.executeAction("/quickbid/Actions/toTabs.action");
// // }else{
// // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // //     p = '91' + p;
// // // }
// // // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// // // Use the API to get the 'Enterotp' control
// // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty1');

// // // Use the API to set the 'Enterotp' control as visible
// // const servicePath = '/quickbid/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // // var phoneNumber = "+" + p;
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:02:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");
// //   // a._control._model._model.data.IsVisible = true
// //   enterOtpControl.setVisible(true);


// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // }


// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty3');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // // if (p === "7259303952"){
// // //     clientAPI.executeAction("/quickbid/Actions/toTabs.action");
// // //   }else{
// // const servicePath = '/quickbid/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:02:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");
// //   // a._control._model._model.data.IsVisible = true
// //   enterOtpControl.setVisible(true);


// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // // }








// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control

// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();
// // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // //     p = '91' + p;
// // // }
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2')
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // if (p === "7259303952"){
// //     clientAPI.executeAction("/quickbid/Actions/toTabs.action");
// //     }else{
// // const servicePath = '/quickbid/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // // var phoneNumber = "+" + p;

// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);


// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:10:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");

// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // }
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function otpRule(clientAPI) {
 
//   // Retrieve the phone number from the form control
  
//   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
//   let p = phoneNumberControl.getValue();
//   //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
//   //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
//   //     p = '91' + p;
//   // }
//   // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
//   let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');

//  if (p === "7259303952"){
//     clientAPI.executeAction("/quickbid/Actions/toTabs.action");
//     }else{
//   // Use the API to set the 'Enterotp' control as visible
//   const servicePath = '/quickbid/Services/capurl.service';
//   const entitySet = 'Supplier_table';
//   return clientAPI.read(servicePath, entitySet, [], '')
//   .then(users => {
     
//       let filteredUsers = users.map(user => {
//           return { phone_main: user.phone_main};
//           });
     
//   let userExists = filteredUsers.some(user => user.phone_main === p);
//   if (userExists ){
//   // Replace 'NavigateToMainContentPage' with the actual action path to navigate
//   // var phoneNumber = "+" + p;
//   var phoneNumber = "+91" + p;
//   const myHeaders = new Headers();
//   myHeaders.append("content", "application/json");
//   myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
//   myHeaders.append("Accept-Language", "en-US");
//   myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
//   myHeaders.append("Method", "POST");
//   myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");
  
//   const raw = JSON.stringify({
//     "identity": {
//       "type": "number",
//       "endpoint": `${phoneNumber}`
//     },
//     "method": "sms",
//     "smsOptions": {
//         "expiry":"00:02:00"
//     } 
//   });
  
//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };
  
//   fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
//     alert("OTP sent and its valid for only 2min");
//     // a._control._model._model.data.IsVisible = true
//     formCellContainer.setVisible(true);
  
  
//   }
//   else {
//   // If no matching user is found, show an error message
//   // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
//   alert("Phone no is Not Valid");
//   }
//   })
//   }
  
// }



/***/ }),

/***/ "./build.definitions/quickbid/Rules/pendgChck.js":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Rules/pendgChck.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pendgChck)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function pendgChck(clientAPI) {
    debugger
    // /quickbid/Actions/capoff/Service/UploadOffline.action

     let varr = clientAPI.getPendingDownload();

     alert(`${varr}`);


}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/qusBtnVisiRule.js":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Rules/qusBtnVisiRule.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qusBtnVisiRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function qusBtnVisiRule(clientAPI) {
    debugger
    // var auctiontype = clientAPI._context.binding.eventTypeName    
    var auctiontype = clientAPI._context._clientAPI._context.binding.supplier_header_rel.eventTypeName    
    //  clientAPI._context.binding.supplier_header_rel.eventTypeName;
    // _context.binding.supplier_header_rel.eventTypeName
    if (auctiontype === "RFP"){
        return true;
    }
    else{
        return false;
    }
}
    




/***/ }),

/***/ "./build.definitions/quickbid/Rules/qusfil.js":
/*!****************************************************!*\
  !*** ./build.definitions/quickbid/Rules/qusfil.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qusfil)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function qusfil(clientAPI) {
    debugger

    let a = clientAPI._context.binding.invitationId
//  sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
var docIdValue = clientAPI._control.context.binding.doc_id

return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${a}' and type eq 'RQAATTACH'`
}


/***/ }),

/***/ "./build.definitions/quickbid/Rules/synch.js":
/*!***************************************************!*\
  !*** ./build.definitions/quickbid/Rules/synch.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ synch)
/* harmony export */ });
function synch(clientAPI) {
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


/***/ }),

/***/ "./build.definitions/quickbid/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/quickbid/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
	ActionBar {
	  color: #ffffff;
	  background-color: #51abf1;
	}
	Toolbar {
	  color: #ffffff;
	  background-color: #51abf1;
	}
	.button1 {
	  background-color: #51abf1;
	  color: #ffffff;
	  font-typeface: bold;
	  font-size: 16px;
	  border-bottom-left-radius: 20px;
	  border-bottom-right-radius: 20px;
	  border-top-right-radius: 20px;
	  border-top-left-radius: 20px;
	}
	.header1 {
	  text-align-last: center;
	}
	.label1 {
	  text-align: center;
	}
	.MYINFO {
	  text-align: center;
	}
	.rbutton1 {
	  border: 1px solid black;
	  border: 2px solid #007bff;
	  color: #f3f7f9;
	  font-size: 26px;
	  padding: 10px 20px;
	  background-color: #7d9cb5;
	  border-bottom-left-radius: 20px;
	  border-bottom-right-radius: 20px;
	  border-top-right-radius: 20px;
	  border-top-left-radius: 20px;
	}
	.NoteFormCellValue {
	  background-color: #cfcfe6;
	  color: black;
	  font-style: body;
	  font-typeface: bold;
	  font-size: 24px;
	}
	.Form {
	  color: black;
	  font-style: body;
	  font-typeface: bold;
	  font-size: 26px;
	}
	.Formm {
	  color: #7575d4;
	  font-style: bold;
	  font-size: 26px;
	  text-align-last: center;
	  text-align: center;
	}
	.fr {
	  background-color: #d7d7e9;
	  border-radius: 50%;
	}
	.AdditionalTextStyle {
	  background-color: #d7d7e9;
	  color: black;
	  font-size: 20px;
	}
	.f {
	  text-align-last: center;
	}
	.ff {
	  border-radius: 75;
	  border-bottom-left-radius: 20;
	  border-bottom-right-radius: 20;
	  text-align-last: center;
	  font-size: 8x;
	}
	.e {
	  text-align-last: center;
	  color: #7575d4;
	  font-size: 11px;
	}
	.t {
	  border-radius: 20%;
	}
	MDKPage {
	  color: #0d0d0e;
	  background-color: #eeeefd;
	}
	`, "",{"version":3,"sources":["webpack://./build.definitions/quickbid/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;CACA;GACE,cAAc;GACd,yBAAyB;CAC3B;CACA;GACE,cAAc;GACd,yBAAyB;CAC3B;CACA;GACE,yBAAyB;GACzB,cAAc;GACd,mBAAmB;GACnB,eAAe;GACf,+BAA+B;GAC/B,gCAAgC;GAChC,6BAA6B;GAC7B,4BAA4B;CAC9B;CACA;GACE,uBAAuB;CACzB;CACA;GACE,kBAAkB;CACpB;CACA;GACE,kBAAkB;CACpB;CACA;GACE,uBAAuB;GACvB,yBAAyB;GACzB,cAAc;GACd,eAAe;GACf,kBAAkB;GAClB,yBAAyB;GACzB,+BAA+B;GAC/B,gCAAgC;GAChC,6BAA6B;GAC7B,4BAA4B;CAC9B;CACA;GACE,yBAAyB;GACzB,YAAY;GACZ,gBAAgB;GAChB,mBAAmB;GACnB,eAAe;CACjB;CACA;GACE,YAAY;GACZ,gBAAgB;GAChB,mBAAmB;GACnB,eAAe;CACjB;CACA;GACE,cAAc;GACd,gBAAgB;GAChB,eAAe;GACf,uBAAuB;GACvB,kBAAkB;CACpB;CACA;GACE,yBAAyB;GACzB,kBAAkB;CACpB;CACA;GACE,yBAAyB;GACzB,YAAY;GACZ,eAAe;CACjB;CACA;GACE,uBAAuB;CACzB;CACA;GACE,iBAAiB;GACjB,6BAA6B;GAC7B,8BAA8B;GAC9B,uBAAuB;GACvB,aAAa;CACf;CACA;GACE,uBAAuB;GACvB,cAAc;GACd,eAAe;CACjB;CACA;GACE,kBAAkB;CACpB;CACA;GACE,cAAc;GACd,yBAAyB;CAC3B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\tActionBar {\n\t  color: #ffffff;\n\t  background-color: #51abf1;\n\t}\n\tToolbar {\n\t  color: #ffffff;\n\t  background-color: #51abf1;\n\t}\n\t.button1 {\n\t  background-color: #51abf1;\n\t  color: #ffffff;\n\t  font-typeface: bold;\n\t  font-size: 16px;\n\t  border-bottom-left-radius: 20px;\n\t  border-bottom-right-radius: 20px;\n\t  border-top-right-radius: 20px;\n\t  border-top-left-radius: 20px;\n\t}\n\t.header1 {\n\t  text-align-last: center;\n\t}\n\t.label1 {\n\t  text-align: center;\n\t}\n\t.MYINFO {\n\t  text-align: center;\n\t}\n\t.rbutton1 {\n\t  border: 1px solid black;\n\t  border: 2px solid #007bff;\n\t  color: #f3f7f9;\n\t  font-size: 26px;\n\t  padding: 10px 20px;\n\t  background-color: #7d9cb5;\n\t  border-bottom-left-radius: 20px;\n\t  border-bottom-right-radius: 20px;\n\t  border-top-right-radius: 20px;\n\t  border-top-left-radius: 20px;\n\t}\n\t.NoteFormCellValue {\n\t  background-color: #cfcfe6;\n\t  color: black;\n\t  font-style: body;\n\t  font-typeface: bold;\n\t  font-size: 24px;\n\t}\n\t.Form {\n\t  color: black;\n\t  font-style: body;\n\t  font-typeface: bold;\n\t  font-size: 26px;\n\t}\n\t.Formm {\n\t  color: #7575d4;\n\t  font-style: bold;\n\t  font-size: 26px;\n\t  text-align-last: center;\n\t  text-align: center;\n\t}\n\t.fr {\n\t  background-color: #d7d7e9;\n\t  border-radius: 50%;\n\t}\n\t.AdditionalTextStyle {\n\t  background-color: #d7d7e9;\n\t  color: black;\n\t  font-size: 20px;\n\t}\n\t.f {\n\t  text-align-last: center;\n\t}\n\t.ff {\n\t  border-radius: 75;\n\t  border-bottom-left-radius: 20;\n\t  border-bottom-right-radius: 20;\n\t  text-align-last: center;\n\t  font-size: 8x;\n\t}\n\t.e {\n\t  text-align-last: center;\n\t  color: #7575d4;\n\t  font-size: 11px;\n\t}\n\t.t {\n\t  border-radius: 20%;\n\t}\n\tMDKPage {\n\t  color: #0d0d0e;\n\t  background-color: #eeeefd;\n\t}\n\t"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/quickbid/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/


ActionBar {
    color: rgb(255, 255, 255);
    background-color:#51abf1;
}
Toolbar {
  color: rgb(255, 255, 255);
  background-color:#51abf1;
}

.button1{
   
    background-color: #51abf1; 
    color: rgb(255, 255, 255);
    font-typeface: bold; 
    font-size: 16px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    
    
  }
 
 
  .header1{
   text-align-last: center;
  }


 .label1{
   text-align: center;
 }
 .MYINFO{
   text-align: center; 
 }

 
 .rbutton1{
   border: 1px solid black;
     border: 2px solid #007bff;
     color: rgb(243, 247, 249);
     font-size: 26px;
     padding: 10px 20px;
     background-color: rgb(125, 156, 181); 
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
     border-top-right-radius: 20px;
     border-top-left-radius: 20px;
 }




   .NoteFormCellValue {
    background-color: #cfcfe6; 
    color: black;
    font-style: body;  
    font-typeface: bold;  
    font-size: 24px;
  }
  .Form{
   
    color: black;
    font-style: body; 
    font-typeface: bold;  
    font-size: 26px;
  }
  .Formm{
    color: rgb(117, 117, 212);
    font-style: bold;           
    font-size: 26px;
    text-align-last: center;
    text-align: center
  }

  .fr{
    background-color: rgb(215, 215, 233);  
    border-radius: 50%
  }
  .AdditionalTextStyle {
    background-color: rgb(215, 215, 233); 
    color:black;          
    font-size: 20px;
}
.f{
  text-align-last: center; 
}

.ff{
  border-radius: 75;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
text-align-last: center;           
font-size: 8x;
}

.e{
  text-align-last: center;
  color: rgb(117, 117, 212);  
  font-size: 11px;
}
.t{
  border-radius: 20%; 
}

MDKPage {
  color: rgb(13, 13, 14); 
  background-color: rgb(238, 238, 253);
}`, "",{"version":3,"sources":["webpack://./build.definitions/quickbid/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;;AAGD;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;EACE,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;;IAEI,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,4BAA4B;;;EAG9B;;;EAGA;GACC,uBAAuB;EACxB;;;CAGD;GACE,kBAAkB;CACpB;CACA;GACE,kBAAkB;CACpB;;;CAGA;GACE,uBAAuB;KACrB,yBAAyB;KACzB,yBAAyB;KACzB,eAAe;KACf,kBAAkB;KAClB,oCAAoC;KACpC,+BAA+B;KAC/B,gCAAgC;KAChC,6BAA6B;KAC7B,4BAA4B;CAChC;;;;;GAKE;IACC,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;EACA;;IAEE,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB;EACF;;EAEA;IACE,oCAAoC;IACpC;EACF;EACA;IACE,oCAAoC;IACpC,WAAW;IACX,eAAe;AACnB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB,6BAA6B;AAC7B,8BAA8B;AAC9B,uBAAuB;AACvB,aAAa;AACb;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n\nActionBar {\n    color: rgb(255, 255, 255);\n    background-color:#51abf1;\n}\nToolbar {\n  color: rgb(255, 255, 255);\n  background-color:#51abf1;\n}\n\n.button1{\n   \n    background-color: #51abf1; \n    color: rgb(255, 255, 255);\n    font-typeface: bold; \n    font-size: 16px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    \n    \n  }\n \n \n  .header1{\n   text-align-last: center;\n  }\n\n\n .label1{\n   text-align: center;\n }\n .MYINFO{\n   text-align: center; \n }\n\n \n .rbutton1{\n   border: 1px solid black;\n     border: 2px solid #007bff;\n     color: rgb(243, 247, 249);\n     font-size: 26px;\n     padding: 10px 20px;\n     background-color: rgb(125, 156, 181); \n     border-bottom-left-radius: 20px;\n     border-bottom-right-radius: 20px;\n     border-top-right-radius: 20px;\n     border-top-left-radius: 20px;\n }\n\n\n\n\n   .NoteFormCellValue {\n    background-color: #cfcfe6; \n    color: black;\n    font-style: body;  \n    font-typeface: bold;  \n    font-size: 24px;\n  }\n  .Form{\n   \n    color: black;\n    font-style: body; \n    font-typeface: bold;  \n    font-size: 26px;\n  }\n  .Formm{\n    color: rgb(117, 117, 212);\n    font-style: bold;           \n    font-size: 26px;\n    text-align-last: center;\n    text-align: center\n  }\n\n  .fr{\n    background-color: rgb(215, 215, 233);  \n    border-radius: 50%\n  }\n  .AdditionalTextStyle {\n    background-color: rgb(215, 215, 233); \n    color:black;          \n    font-size: 20px;\n}\n.f{\n  text-align-last: center; \n}\n\n.ff{\n  border-radius: 75;\nborder-bottom-left-radius: 20;\nborder-bottom-right-radius: 20;\ntext-align-last: center;           \nfont-size: 8x;\n}\n\n.e{\n  text-align-last: center;\n  color: rgb(117, 117, 212);  \n  font-size: 11px;\n}\n.t{\n  border-radius: 20%; \n}\n\nMDKPage {\n  color: rgb(13, 13, 14); \n  background-color: rgb(238, 238, 253);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/quickbid/Styles/Styles.light.css":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Styles/Styles.light.css ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ns-light ActionBar {
		color: #ffffff;
		background-color: #51abf1;
	}
	.ns-light Toolbar {
		color: #ffffff;
		background-color: #51abf1;
	}
	.ns-light .button1 {
		background-color: #51abf1;
		color: #ffffff;
		font-typeface: bold;
		font-size: 16px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	.ns-light .header1 {
		text-align-last: center;
	}
	.ns-light .label1 {
		text-align: center;
	}
	.ns-light .MYINFO {
		text-align: center;
	}
	.ns-light .rbutton1 {
		border: 1px solid black;
		border: 2px solid #007bff;
		color: #f3f7f9;
		font-size: 26px;
		padding: 10px 20px;
		background-color: #7d9cb5;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	.ns-light .NoteFormCellValue {
		background-color: #cfcfe6;
		color: black;
		font-style: body;
		font-typeface: bold;
		font-size: 24px;
	}
	.ns-light .Form {
		color: black;
		font-style: body;
		font-typeface: bold;
		font-size: 26px;
	}
	.ns-light .Formm {
		color: #7575d4;
		font-style: bold;
		font-size: 26px;
		text-align-last: center;
		text-align: center;
	}
	.ns-light .fr {
		background-color: #d7d7e9;
		border-radius: 50%;
	}
	.ns-light .AdditionalTextStyle {
		background-color: #d7d7e9;
		color: black;
		font-size: 20px;
	}
	.ns-light .f {
		text-align-last: center;
	}
	.ns-light .ff {
		border-radius: 75;
		border-bottom-left-radius: 20;
		border-bottom-right-radius: 20;
		text-align-last: center;
		font-size: 8x;
	}
	.ns-light .e {
		text-align-last: center;
		color: #7575d4;
		font-size: 11px;
	}
	.ns-light .t {
		border-radius: 20%;
	}
	.ns-light MDKPage {
		color: #0d0d0e;
		background-color: #eeeefd;
	}
	`, "",{"version":3,"sources":["webpack://./build.definitions/quickbid/Styles/Styles.light.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,yBAAyB;CAC1B;CACA;EACC,cAAc;EACd,yBAAyB;CAC1B;CACA;EACC,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;CAC7B;CACA;EACC,uBAAuB;CACxB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;CAC7B;CACA;EACC,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;CACnB;CACA;EACC,yBAAyB;EACzB,kBAAkB;CACnB;CACA;EACC,yBAAyB;EACzB,YAAY;EACZ,eAAe;CAChB;CACA;EACC,uBAAuB;CACxB;CACA;EACC,iBAAiB;EACjB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;CACd;CACA;EACC,uBAAuB;EACvB,cAAc;EACd,eAAe;CAChB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,cAAc;EACd,yBAAyB;CAC1B","sourcesContent":[".ns-light ActionBar {\n\t\tcolor: #ffffff;\n\t\tbackground-color: #51abf1;\n\t}\n\t.ns-light Toolbar {\n\t\tcolor: #ffffff;\n\t\tbackground-color: #51abf1;\n\t}\n\t.ns-light .button1 {\n\t\tbackground-color: #51abf1;\n\t\tcolor: #ffffff;\n\t\tfont-typeface: bold;\n\t\tfont-size: 16px;\n\t\tborder-bottom-left-radius: 20px;\n\t\tborder-bottom-right-radius: 20px;\n\t\tborder-top-right-radius: 20px;\n\t\tborder-top-left-radius: 20px;\n\t}\n\t.ns-light .header1 {\n\t\ttext-align-last: center;\n\t}\n\t.ns-light .label1 {\n\t\ttext-align: center;\n\t}\n\t.ns-light .MYINFO {\n\t\ttext-align: center;\n\t}\n\t.ns-light .rbutton1 {\n\t\tborder: 1px solid black;\n\t\tborder: 2px solid #007bff;\n\t\tcolor: #f3f7f9;\n\t\tfont-size: 26px;\n\t\tpadding: 10px 20px;\n\t\tbackground-color: #7d9cb5;\n\t\tborder-bottom-left-radius: 20px;\n\t\tborder-bottom-right-radius: 20px;\n\t\tborder-top-right-radius: 20px;\n\t\tborder-top-left-radius: 20px;\n\t}\n\t.ns-light .NoteFormCellValue {\n\t\tbackground-color: #cfcfe6;\n\t\tcolor: black;\n\t\tfont-style: body;\n\t\tfont-typeface: bold;\n\t\tfont-size: 24px;\n\t}\n\t.ns-light .Form {\n\t\tcolor: black;\n\t\tfont-style: body;\n\t\tfont-typeface: bold;\n\t\tfont-size: 26px;\n\t}\n\t.ns-light .Formm {\n\t\tcolor: #7575d4;\n\t\tfont-style: bold;\n\t\tfont-size: 26px;\n\t\ttext-align-last: center;\n\t\ttext-align: center;\n\t}\n\t.ns-light .fr {\n\t\tbackground-color: #d7d7e9;\n\t\tborder-radius: 50%;\n\t}\n\t.ns-light .AdditionalTextStyle {\n\t\tbackground-color: #d7d7e9;\n\t\tcolor: black;\n\t\tfont-size: 20px;\n\t}\n\t.ns-light .f {\n\t\ttext-align-last: center;\n\t}\n\t.ns-light .ff {\n\t\tborder-radius: 75;\n\t\tborder-bottom-left-radius: 20;\n\t\tborder-bottom-right-radius: 20;\n\t\ttext-align-last: center;\n\t\tfont-size: 8x;\n\t}\n\t.ns-light .e {\n\t\ttext-align-last: center;\n\t\tcolor: #7575d4;\n\t\tfont-size: 11px;\n\t}\n\t.ns-light .t {\n\t\tborder-radius: 20%;\n\t}\n\t.ns-light MDKPage {\n\t\tcolor: #0d0d0e;\n\t\tbackground-color: #eeeefd;\n\t}\n\t"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/quickbid/Styles/Styles.light.nss":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Styles/Styles.light.nss ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ActionBar {
		font-color: #ffffff;
		background-color: #51abf1;
	}
	button1 {
		background-color: #51abf1;
		font-color: #ffffff;
		font-typeface: bold;
		font-size: 16px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	header1 {
		text-align-last: center;
	}
	label1 {
		text-align: center;
	}
	MYINFO {
		text-align: center;
	}
	rbutton1 {
		border: 1px solid black;
		border: 2px solid #007bff;
		font-color: #f3f7f9;
		font-size: 26px;
		padding: 10px 20px;
		background-color: #7d9cb5;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	NoteFormCellValue {
		background-color: #cfcfe6;
		font-color: black;
		font-style: body;
		font-typeface: bold;
		font-size: 24px;
	}
	Form {
		font-color: black;
		font-style: body;
		font-typeface: bold;
		font-size: 26px;
	}
	Formm {
		font-color: #7575d4;
		font-style: bold;
		font-size: 26px;
		text-align-last: center;
		text-align: center;
	}
	fr {
		background-color: #d7d7e9;
		border-radius: 50%;
	}
	AdditionalTextStyle {
		background-color: #d7d7e9;
		font-color: black;
		font-size: 20px;
	}
	f {
		text-align-last: center;
	}
	ff {
		border-radius: 75;
		border-bottom-left-radius: 20;
		border-bottom-right-radius: 20;
		text-align-last: center;
		font-size: 8x;
	}
	e {
		text-align-last: center;
		font-color: #7575d4;
		font-size: 11px;
	}
	t {
		border-radius: 20%;
	}
	`, "",{"version":3,"sources":["webpack://./build.definitions/quickbid/Styles/Styles.light.nss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,yBAAyB;CAC1B;CACA;EACC,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;CAC7B;CACA;EACC,uBAAuB;CACxB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;CAC7B;CACA;EACC,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;CACnB;CACA;EACC,yBAAyB;EACzB,kBAAkB;CACnB;CACA;EACC,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;CAChB;CACA;EACC,uBAAuB;CACxB;CACA;EACC,iBAAiB;EACjB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;CACd;CACA;EACC,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,kBAAkB;CACnB","sourcesContent":["ActionBar {\n\t\tfont-color: #ffffff;\n\t\tbackground-color: #51abf1;\n\t}\n\tbutton1 {\n\t\tbackground-color: #51abf1;\n\t\tfont-color: #ffffff;\n\t\tfont-typeface: bold;\n\t\tfont-size: 16px;\n\t\tborder-bottom-left-radius: 20px;\n\t\tborder-bottom-right-radius: 20px;\n\t\tborder-top-right-radius: 20px;\n\t\tborder-top-left-radius: 20px;\n\t}\n\theader1 {\n\t\ttext-align-last: center;\n\t}\n\tlabel1 {\n\t\ttext-align: center;\n\t}\n\tMYINFO {\n\t\ttext-align: center;\n\t}\n\trbutton1 {\n\t\tborder: 1px solid black;\n\t\tborder: 2px solid #007bff;\n\t\tfont-color: #f3f7f9;\n\t\tfont-size: 26px;\n\t\tpadding: 10px 20px;\n\t\tbackground-color: #7d9cb5;\n\t\tborder-bottom-left-radius: 20px;\n\t\tborder-bottom-right-radius: 20px;\n\t\tborder-top-right-radius: 20px;\n\t\tborder-top-left-radius: 20px;\n\t}\n\tNoteFormCellValue {\n\t\tbackground-color: #cfcfe6;\n\t\tfont-color: black;\n\t\tfont-style: body;\n\t\tfont-typeface: bold;\n\t\tfont-size: 24px;\n\t}\n\tForm {\n\t\tfont-color: black;\n\t\tfont-style: body;\n\t\tfont-typeface: bold;\n\t\tfont-size: 26px;\n\t}\n\tFormm {\n\t\tfont-color: #7575d4;\n\t\tfont-style: bold;\n\t\tfont-size: 26px;\n\t\ttext-align-last: center;\n\t\ttext-align: center;\n\t}\n\tfr {\n\t\tbackground-color: #d7d7e9;\n\t\tborder-radius: 50%;\n\t}\n\tAdditionalTextStyle {\n\t\tbackground-color: #d7d7e9;\n\t\tfont-color: black;\n\t\tfont-size: 20px;\n\t}\n\tf {\n\t\ttext-align-last: center;\n\t}\n\tff {\n\t\tborder-radius: 75;\n\t\tborder-bottom-left-radius: 20;\n\t\tborder-bottom-right-radius: 20;\n\t\ttext-align-last: center;\n\t\tfont-size: 8x;\n\t}\n\te {\n\t\ttext-align-last: center;\n\t\tfont-color: #7575d4;\n\t\tfont-size: 11px;\n\t}\n\tt {\n\t\tborder-radius: 20%;\n\t}\n\t"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/quickbid/Pages/Application/About.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/Application/About.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/quickbid/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/quickbid/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/quickbid/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/quickbid/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/quickbid/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/Application/Support.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/Application/Support.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/quickbid/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/quickbid/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/quickbid/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/quickbid/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/quickbid/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/Application/UserActivityLog.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/Application/UserActivityLog.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/quickbid/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/quickbid/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/quickbid/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/quickbid/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/quickbid/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/quickbid/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/quickbid/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/quickbid/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/AttachCreate.page":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/AttachCreate.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"/quickbid/Rules/doc_idVal.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"doc_id","IsVisible":true,"Separator":true,"Caption":"Doc Id","Enabled":false,"IsEditable":false},{"Value":"/quickbid/Rules/inviIdValRule.js","_Type":"Control.Type.FormCell.ListPicker","_Name":"invitationId","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Invitation Id","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":{"Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table"},"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}"}},{"_Type":"Control.Type.FormCell.Attachment","_Name":"content","IsVisible":true,"Separator":true,"AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AttachmentTitle":"Content","AllowedFileTypes":["jpg","png","gif","pdf","xlsx","xls","docx","doc","mp4","avi","mov","txt"],"AttachmentAddTitle":"Browse"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"mediaType","IsVisible":false,"Separator":true,"Caption":"mediaType","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"fileName","IsVisible":false,"Separator":true,"Caption":"fileName","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"size","IsVisible":false,"Separator":true,"Caption":"size","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"url","IsVisible":false,"Separator":true,"Caption":"url","Enabled":true,"IsEditable":false}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Attachments_table_Create","Caption":"Upload","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/quickbid/Rules/Attachments_table_CreateEntity.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/AwardedQus.page":
/*!**********************************************************!*\
  !*** ./build.definitions/quickbid/Pages/AwardedQus.page ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.Extension","_Name":"SectionExtension1","Visible":true,"EmptySection":{"FooterVisible":false},"Module":"questionnaireAprv","Control":"questionnaireAprv","Class":"questionnaireAprv"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.Extension","_Name":"SectionExtension0","Visible":false,"EmptySection":{"FooterVisible":false},"Module":"QusEXtn","Control":"QusEXtn","Class":"QusEXtn"},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader1","AccessoryType":"None","UseTopPadding":true},"Footer":{"_Type":"SectionCommon.Type.Footer","_Name":"SectionCommonTypeFooter0","Visible":true,"UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_table","QueryOptions":"/quickbid/Rules/filRule.js"},"_Name":"SectionObjectTable2","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{description}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"None","AccessoryButtonIcon":"sap-icon://not-editable","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"/quickbid/Rules/filesvisi.js"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","QueryOptions":"/quickbid/Rules/filterforattch.js"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Footnote":"{mediaType}","DisplayDescriptionInMobile":true,"StatusText":"Open           ","PreserveIconStackSpacing":true,"AccessoryType":"None","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/quickbid/Rules/imageRule.js"}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/OpenDocument.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Questionnaire_reply_table_List","Caption":"Questionnaire","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/quickbid/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/Login.page":
/*!*****************************************************!*\
  !*** ./build.definitions/quickbid/Pages/Login.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":true},"_Type":"Section.Type.Image","_Name":"SectionImage0","Visible":true,"Image":"/quickbid/Images/peol_logo (1) (1).png","Width":190,"Height":180,"Alignment":"Center","ContentMode":"ScaleAspectFit"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Phone Number","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Get Otp","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/quickbid/Rules/otpRule.js"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":false,"Separator":false,"Caption":"Enter Otp","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":false,"Separator":false,"Title":"ResendOtp","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton3","IsVisible":true,"Separator":true,"Title":"Login","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/quickbid/Rules/loginRule.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}],"LoadingIndicator":{"Enabled":false}}],"_Type":"Page","_Name":"Login","Caption":"Quick Bid","PrefersLargeCaption":true,"OnLoaded":"/quickbid/Actions/capoff/Service/InitializeOffline.action","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"Style":"ActionBar","OnPress":"/quickbid/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/Main.page":
/*!****************************************************!*\
  !*** ./build.definitions/quickbid/Pages/Main.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_capoff","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader_capoff","AccessoryType":"None","UseTopPadding":true,"Caption":"capoff"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Attachments_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Bid_reply","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton2","Title":"Dropdown","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Dropdown/NavToDropdown_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton3","Title":"Header_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton4","Title":"Item_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Item_table/NavToItem_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton5","Title":"Questionnaire_reply_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton6","Title":"Questionnaire_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton7","Title":"Supplier_bid_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton8","Title":"supplier_reply","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton9","Title":"Supplier_table","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_List.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}],"LoadingIndicator":{"Enabled":false}}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/quickbid/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/TabsForBidsSummary.page":
/*!******************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/TabsForBidsSummary.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.Tabs","_Name":"Awarded Bids","Items":[{"_Type":"Control.Type.TabItem","Caption":"/quickbid/Rules/countRule.js","PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page","_Name":"TabItem0"},{"_Type":"Control.Type.TabItem","Caption":"/quickbid/Rules/count.js","PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Approved_List.page","_Name":"TabItem1"},{"_Type":"Control.Type.TabItem","Caption":"/quickbid/Rules/awardedCountRule.js","PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Awarded List.page","_Name":"TabItem2"}],"Position":"Top","TabStripType":"Normal","SwipeEnabled":true}],"PullDown":{"OnPulledDown":"/quickbid/Rules/count.js"},"_Type":"Page","_Name":"TabsForBidsSummary","Caption":"Bids Summary","OnLoaded":"/quickbid/Rules/Application/onRetun.js","OnReturning":"/quickbid/Rules/Application/onRetun.js","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/quickbid/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/approvedQus.page":
/*!***********************************************************!*\
  !*** ./build.definitions/quickbid/Pages/approvedQus.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.Extension","_Name":"SectionExtension0","Visible":true,"EmptySection":{"FooterVisible":false},"Module":"questionnaireAprv","Control":"questionnaireAprv","Class":"questionnaireAprv"},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":true},"Footer":{"_Type":"SectionCommon.Type.Footer","_Name":"SectionCommonTypeFooter0","Visible":true,"UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_table","QueryOptions":"/quickbid/Rules/qusfil.js"},"_Name":"SectionObjectTable2","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{description}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"None","AccessoryButtonIcon":"sap-icon://not-editable","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"/quickbid/Rules/filesvisi.js"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","QueryOptions":"/quickbid/Rules/filterforattch.js"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Footnote":"{mediaType}","DisplayDescriptionInMobile":true,"StatusText":"Open           ","PreserveIconStackSpacing":true,"AccessoryType":"None","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/quickbid/Rules/imageRule.js"}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/OpenDocument.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Questionnaire_reply_table_List","Caption":"Questionnaire","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Create.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Create.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Rules/capoff/Attachments_table/Attachments_table_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Attachments_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Detail.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Detail.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Attachments_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Actions/capoff/Attachments_table/Attachments_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/quickbid/Services/capoff.service/{@odata.readLink}/content","HeadlineText":"{fileName}","Subhead":"{doc_id}","BodyText":"","Footnote":"{mediaType}","Description":"{invitationId}","StatusText":"{size}","StatusImage":"","SubstatusImage":"","SubstatusText":"{url}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"mediaType","Value":"{mediaType}"},{"KeyName":"fileName","Value":"{fileName}"},{"KeyName":"size","Value":"{size}"},{"KeyName":"url","Value":"{url}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Edit.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_Edit.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Attachments_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Attachments_table/Attachments_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"mediaType","_Name":"mediaType","Value":"{mediaType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","_Name":"size","Value":"{size}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","Value":"{url}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_List.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Attachments_table/Attachments_table_List.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Attachments_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":"/quickbid/Services/capoff.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action","StatusImage":"","Title":"{fileName}","Footnote":"{mediaType}","PreserveIconStackSpacing":false,"StatusText":"{size}","Subhead":"{doc_id}","SubstatusText":"{url}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Attachments_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Create.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Create.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Bid_reply/Bid_reply_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Bid_reply Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/Bid_reply/Bid_reply_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"","Description":"{phone}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"phone","Value":"{phone}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Edit.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_Edit.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Bid_reply Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Bid_reply/Bid_reply_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","Value":"{phone}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Bid_reply/Bid_reply_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{phone}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Bid_reply","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Create.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Create.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Dropdown/Dropdown_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Dropdown Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"dropdown_value","_Name":"dropdown_value","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Detail.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Detail.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Dropdown Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Dropdown","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Dropdown/NavToDropdown_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/Dropdown/Dropdown_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"","Description":"{dropdown_value}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"dropdown_value","Value":"{dropdown_value}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Edit.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_Edit.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Dropdown Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Dropdown","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Dropdown/Dropdown_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"questionnaire_id","_Name":"questionnaire_id","Value":"{questionnaire_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"dropdown_value","_Name":"dropdown_value","Value":"{dropdown_value}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Dropdown_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_List.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Dropdown/Dropdown_List.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Dropdown","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Dropdown/NavToDropdown_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{dropdown_value}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Dropdown/NavToDropdown_Detail.action","StatusImage":"","Title":"{id}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Dropdown","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Dropdown_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Create.page":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Create.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Header_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateItem_table.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateItem_table.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_CreateItem_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateItem_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateQuestionnaire_table.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateQuestionnaire_table.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_CreateQuestionnaire_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateQuestionnaire_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_bid_table.page":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_bid_table.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_table.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_table.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"main_invitationId","_Name":"main_invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Detail.page":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Detail.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{status}","Description":"{eventTypeName}","StatusText":"{date_created}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"eventTypeName","Value":"{eventTypeName}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"date_created","Value":"{date_created}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"header_item_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}","OnPress":"/quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_item_rel","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{main_invitationId}","PreserveIconStackSpacing":false,"StatusText":"{smvendor_id}","Subhead":"{doc_id}","SubstatusText":"{phone_main}","OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_rel","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_bid_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}","OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_bid_rel","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_questionnaire_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{description}","PreserveIconStackSpacing":false,"StatusText":"{type}","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_questionnaire_rel","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Item_table","Supplier_table","Supplier_bid_table","Questionnaire_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Edit.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_Edit.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Header_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Header_table/Header_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"eventTypeName","_Name":"eventTypeName","Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","Value":"{date_created}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_List.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Header_table/Header_table_List.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eventTypeName}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{status}","PreserveIconStackSpacing":false,"StatusText":"{date_created}","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Create.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Create.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Item_table/Item_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Detail.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Detail.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Item_table/NavToItem_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/Item_table/Item_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"{improvise_amount}","Description":"{itemid}","StatusText":"{price}","StatusImage":"","SubstatusImage":"","SubstatusText":"{quantity}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"itemid","Value":"{itemid}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"improvise_amount","Value":"{improvise_amount}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Edit.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_Edit.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Item_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Item_table/Item_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"itemid","_Name":"itemid","Value":"{itemid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","_Name":"improvise_amount","Value":"{improvise_amount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_List.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Item_table/Item_table_List.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Item_table/NavToItem_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Item_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Create.page":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Create.page ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_reply_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_reply_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{doc_id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"{user_reply}","Description":"{invitationId}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"user_reply","Value":"{user_reply}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Questionnaire_reply_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_reply_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{questionnaire_id}","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","_Name":"invitationId","Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"user_reply","_Name":"user_reply","Value":"{user_reply}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_List.page":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_List.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_reply_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action","StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_reply_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Create.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Create.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{questionnaire_id}"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_CreateQuestionnaire_reply_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Detail.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Detail.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{doc_id}","Subhead":"{questionnaire_id}","BodyText":"","Footnote":"{description}","Description":"{invitationId}","StatusText":"{type}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"questionnaire_id","Value":"{questionnaire_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"type","Value":"{type}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"quest_quest_reply_rel1","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/quest_quest_reply_rel1","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Questionnaire_reply_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Edit.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Edit.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Questionnaire_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"questionnaire_id","_Name":"questionnaire_id","Value":"{questionnaire_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"invitationId","_Name":"invitationId","Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","Value":"{type}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_List.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_List.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Questionnaire_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action","StatusImage":"","Title":"{doc_id}","Footnote":"{description}","PreserveIconStackSpacing":false,"StatusText":"{type}","Subhead":"{questionnaire_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Questionnaire_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Approved_detail.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Approved_detail.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_bid_table"},"Controls":[{"DataSubscriptions":[],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{doc_id}","Description":"{invitationId}","StatusText":"{item_name}","SubstatusText":"{supp_quot_price}","HeadlineText":"{item_name}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"Doc Id","Visible":true},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"Supplier Mail Id","Visible":true},{"Value":"{item_id}","_Name":"KeyValue2","KeyName":"Material ID","Visible":true},{"Value":"{item_name}","_Name":"KeyValue4","KeyName":"Material Name","Visible":true},{"Value":"{title}","_Name":"KeyValue3","KeyName":"title","Visible":false},{"Value":"{supp_quot_quantity}","_Name":"KeyValue6","KeyName":"supp_quot_quantity","Visible":false},{"Value":"{price}","_Name":"KeyValue7","KeyName":"Base Price","Visible":true},{"Value":"{quantity}","_Name":"KeyValue8","KeyName":"Quantity","Visible":true},{"Value":"{status}","_Name":"KeyValue9","KeyName":"Status","Visible":true},{"Value":"{ariba_status}","_Name":"KeyValue10","KeyName":"ariba_status","Visible":false},{"Value":"{supp_quot_price}","_Name":"KeyValue5","KeyName":"Price","Visible":true},{"Value":"{award_price}","_Name":"KeyValue12","KeyName":"Awarded Price","Visible":false},{"Value":"{whatsapp_status}","_Name":"KeyValue11","KeyName":"whatsapp_status","Visible":false}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Supplier_bid_table_Detail","Caption":"Line Item Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Create.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Create.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Detail.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Detail.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_bid_table"},"Controls":[{"DataSubscriptions":[],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{doc_id}","Description":"{invitationId}","StatusText":"{item_name}","SubstatusText":"{supp_quot_price}","HeadlineText":"{item_name}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"Doc Id","Visible":true},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"Supplier Mail Id","Visible":true},{"Value":"{item_id}","_Name":"KeyValue2","KeyName":"Material ID","Visible":true},{"Value":"{item_name}","_Name":"KeyValue4","KeyName":"Material Name","Visible":true},{"Value":"{title}","_Name":"KeyValue3","KeyName":"title","Visible":false},{"Value":"{supp_quot_quantity}","_Name":"KeyValue6","KeyName":"supp_quot_quantity","Visible":false},{"Value":"{price}","_Name":"KeyValue7","KeyName":"Base Price","Visible":true},{"Value":"{quantity}","_Name":"KeyValue8","KeyName":"Quantity","Visible":true},{"Value":"{leadBid}","_Name":"KeyValue13","KeyName":"Lead Bid","Visible":"/quickbid/Rules/leadVsisD.js"},{"Value":"{eventTypeName}","_Name":"KeyValue14","KeyName":"Event Type","Visible":true},{"Value":"{status}","_Name":"KeyValue9","KeyName":"Status","Visible":true},{"Value":"{ariba_status}","_Name":"KeyValue10","KeyName":"ariba_status","Visible":false},{"Value":"{supp_quot_price}","_Name":"KeyValue5","KeyName":"Price","Visible":true},{"Value":"{whatsapp_status}","_Name":"KeyValue11","KeyName":"whatsapp_status","Visible":false}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Supplier_bid_table_Detail","Caption":"Line Item Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_DetailN.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_DetailN.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_bid_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{item_id}","Description":"{invitationId}","StatusText":"{eventTypeName}","StatusImage":"","SubstatusImage":"","SubstatusText":"{leadBid}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"item_id","Value":"{item_id}"},{"KeyName":"eventTypeName","Value":"{eventTypeName}"},{"KeyName":"leadBid","Value":"{leadBid}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"supp_quot_price","Value":"{supp_quot_price}"},{"KeyName":"supp_quot_quantity","Value":"{supp_quot_quantity}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"ariba_status","Value":"{ariba_status}"},{"KeyName":"whatsapp_status","Value":"{whatsapp_status}"},{"KeyName":"award_price","Value":"{award_price}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Edit.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Edit.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{doc_id}","_Type":"Control.Type.FormCell.ListPicker","_Name":"doc_id","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Doc Id","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}}},{"Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"invitationId","IsVisible":true,"Separator":true,"Caption":"Supplier Mail Id","Enabled":false,"IsEditable":false},{"Value":"{item_id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"item_id","IsVisible":true,"Separator":true,"Caption":"Material ID","Enabled":false,"IsEditable":false},{"Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","IsVisible":true,"Separator":true,"Caption":"Description","Enabled":false,"IsEditable":false},{"Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"item_name","IsVisible":true,"Separator":true,"Caption":"Material Name","Enabled":false,"IsEditable":false},{"Value":"{supp_quot_quantity}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"supp_quot_quantity","IsVisible":false,"Separator":true,"Caption":"supp_quot_quantity","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"quantity","IsVisible":true,"Separator":true,"Caption":"Quantity","Enabled":true,"IsEditable":true},{"Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"status","IsVisible":true,"Separator":true,"Caption":"Status","Enabled":true,"IsEditable":false},{"Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsVisible":true,"Separator":true,"Caption":"Event Type","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":"{leadBid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":"/quickbid/Rules/leadVsisD.js","Separator":true,"Caption":"Lead Bid","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"price","IsVisible":true,"Separator":true,"Caption":"Base Price","KeyboardType":"Default","Enabled":true,"IsEditable":false},{"Value":"{supp_quot_price}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"supp_quot_price","IsVisible":true,"Separator":true,"Caption":"Price*","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{ariba_status}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ariba_status","IsVisible":false,"Separator":true,"Caption":"ariba_status","Enabled":true,"IsEditable":true},{"Value":"{whatsapp_status}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":false,"Separator":true,"Caption":"whatsapp_status","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_bid_table_Edit","Caption":"Bid Update","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/quickbid/Rules/Application/savemodi.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_EditN.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_EditN.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Supplier_bid_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"item_id","_Name":"item_id","Value":"{item_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"eventTypeName","_Name":"eventTypeName","Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","_Name":"leadBid","Value":"{leadBid}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","_Name":"supp_quot_price","Value":"{supp_quot_price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","_Name":"supp_quot_quantity","Value":"{supp_quot_quantity}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","Value":"{ariba_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","Value":"{whatsapp_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","_Name":"award_price","Value":"{award_price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_List.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_List.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_bid_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved Bids.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved Bids.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":""},"Controls":[{"DataSubscriptions":["Supplier_bid_table"],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"HeadlineText":"{doc_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"Doc Id","Visible":false},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"Supplier Mail Id","Visible":true},{"Value":"{smvendor_id}","_Name":"KeyValue2","KeyName":"Supplier Id","Visible":false},{"Value":"{phone_main}","_Name":"KeyValue3","KeyName":"Supplier Contact","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"Caption","Items":[{"_Type":"SectionHeaderItem.Type.Button","_Name":"SectionHeaderItemTypeButton0","Title":"Question Section","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Visible":"/quickbid/Rules/qusBtnVisiRule.js","Enabled":true,"Position":"Right","OnPress":"/quickbid/Actions/toApprovedQus.action"}]},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Closed Bids Line Item"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"{@odata.readLink}/supplier_to_sbid","QueryOptions":"/quickbid/Rules/ApprovedRule.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Record Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{item_name}","Subhead":"{doc_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/toApproveDetail.action","OnAccessoryButtonPress":"/quickbid/Actions/toApproveDetail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_Detail","Caption":"Closed Bids Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved_List.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Approved_List.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":"/quickbid/Rules/closedFilter.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Description":"{title}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/toaprvdetail.action","OnAccessoryButtonPress":"/quickbid/Actions/toaprvdetail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_List","Caption":"Closed Bids","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded Detail.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded Detail.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table"},"Controls":[{"DataSubscriptions":["Supplier_bid_table"],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"HeadlineText":"{doc_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"Doc Id","Visible":false},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"Supplier Mail Id","Visible":true},{"Value":"{smvendor_id}","_Name":"KeyValue2","KeyName":"Supplier Id","Visible":false},{"Value":"{phone_main}","_Name":"KeyValue3","KeyName":"Supplier Contact","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"Caption","Items":[{"_Type":"SectionHeaderItem.Type.Button","_Name":"SectionHeaderItemTypeButton0","Title":"Question Section","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Visible":"/quickbid/Rules/qusBtnVisiRule.js","Enabled":true,"Position":"Right","OnPress":"/quickbid/Actions/toAwardedQus.action"}]},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Awarded Bids Line Item"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"{@odata.readLink}/supplier_to_sbid","QueryOptions":"/quickbid/Rules/awardedFilRule.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Record Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{item_name}","Subhead":"{doc_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/toaprvdetail.action","OnAccessoryButtonPress":"/quickbid/Actions/toaprvdetail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_Detail","Caption":"Awarded Bids Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded List.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Awarded List.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":"/quickbid/Rules/filtrAwaded.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Description":"{title}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/toAwardedDetail.action","OnAccessoryButtonPress":"/quickbid/Actions/toAwardedDetail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_List","Caption":"Awarded Bids","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Create.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Create.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"main_invitationId","_Name":"main_invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateAttachments_table.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateAttachments_table.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateAttachments_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Attachments_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","Value":"{invitationId}"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateAttachments_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_reply_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"questionnaire_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"questionnaire_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"user_reply","_Name":"user_reply","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateQuestionnaire_reply_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_table.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_table.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Questionnaire_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"questionnaire_id","_Name":"questionnaire_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateQuestionnaire_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateSupplier_bid_table.page":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateSupplier_bid_table.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","Value":"{invitationId}"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"leadBid","KeyboardType":"Number","_Name":"leadBid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","KeyboardType":"Number","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","KeyboardType":"Number","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ariba_status","_Name":"ariba_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"whatsapp_status","_Name":"whatsapp_status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_price","KeyboardType":"Number","_Name":"award_price","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Detail.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Detail.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table"},"Controls":[{"DataSubscriptions":["Supplier_bid_table"],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"HeadlineText":"{doc_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"Doc Id","Visible":false},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"Supplier Mail Id","Visible":true},{"Value":"{smvendor_id}","_Name":"KeyValue2","KeyName":"Supplier Id","Visible":false},{"Value":"{phone_main}","_Name":"KeyValue3","KeyName":"Supplier Contact","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"OnPress":"/quickbid/Actions/toQus.action","Caption":"Qusestion Section","Items":[{"_Type":"SectionHeaderItem.Type.Button","_Name":"SectionHeaderItemTypeButton0","Title":"Question Section","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Visible":"/quickbid/Rules/qusBtnVisiRule.js","Enabled":true,"Position":"Right","OnPress":"/quickbid/Actions/toQus.action"}]},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Quotes Bids Line Item"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"{@odata.readLink}/supplier_to_sbid","QueryOptions":"/quickbid/Rules/filterrule.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Open Line Item","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{item_name}","Subhead":"{doc_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","OnAccessoryButtonPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_Detail","Caption":"Quotes Bids Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_DetailN.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_DetailN.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{main_invitationId}","Description":"{invitationId}","StatusText":"{smvendor_id}","StatusImage":"","SubstatusImage":"","SubstatusText":"{phone_main}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"main_invitationId","Value":"{main_invitationId}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"smvendor_id","Value":"{smvendor_id}"},{"KeyName":"phone_main","Value":"{phone_main}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"award_status","Value":"{award_status}"},{"KeyName":"award_msg_status","Value":"{award_msg_status}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"supplier_to_sbid","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{eventTypeName}","Subhead":"{doc_id}","SubstatusText":"{leadBid}","OnPress":"/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/supplier_to_sbid","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"supplier_to_attachment","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":"/quickbid/Services/capoff.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{fileName}","Footnote":"{mediaType}","PreserveIconStackSpacing":false,"StatusText":"{size}","Subhead":"{doc_id}","SubstatusText":"{url}","OnPress":"/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/supplier_to_attachment","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"sup_questionnaire_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{description}","PreserveIconStackSpacing":false,"StatusText":"{type}","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/sup_questionnaire_rel","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"sup_questionnaire_relply","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{user_reply}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{questionnaire_id}","SubstatusText":"","OnPress":"/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/sup_questionnaire_relply","Service":"/quickbid/Services/capoff.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Supplier_bid_table","Attachments_table","Questionnaire_table","Questionnaire_reply_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Edit.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_Edit.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Supplier_table Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/Supplier_table/Supplier_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","_Name":"invitationId","Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"main_invitationId","_Name":"main_invitationId","Value":"{main_invitationId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","Value":"{smvendor_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","Value":"{phone_main}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_status","_Name":"award_status","Value":"{award_status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"award_msg_status","_Name":"award_msg_status","Value":"{award_msg_status}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Supplier_table","QueryOptions":"$expand=supplier_header_rel,supplier_to_sbid&$filter=phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status eq 'Open'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Description":"{title}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action","OnAccessoryButtonPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_List","Caption":"Quotes Bids","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_ListN.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_Supplier_table/Supplier_table_ListN.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_table","ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{main_invitationId}","PreserveIconStackSpacing":false,"StatusText":"{smvendor_id}","Subhead":"{doc_id}","SubstatusText":"{phone_main}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Create.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Create.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/quickbid/Actions/capoff/supplier_reply/supplier_reply_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create supplier_reply Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumMedia","_Name":"NumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_reply_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Detail.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Detail.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"supplier_reply Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"supplier_reply","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/quickbid/Rules/capoff/supplier_reply/supplier_reply_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProfileName}","Subhead":"{OriginalRepliedMessageSender}","BodyText":"","Footnote":"{NumMedia}","Description":"{SmsMessageSid}","StatusText":"{SmsSid}","StatusImage":"","SubstatusImage":"","SubstatusText":"{WaId}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}"},{"KeyName":"SmsMessageSid","Value":"{SmsMessageSid}"},{"KeyName":"NumMedia","Value":"{NumMedia}"},{"KeyName":"ProfileName","Value":"{ProfileName}"},{"KeyName":"SmsSid","Value":"{SmsSid}"},{"KeyName":"WaId","Value":"{WaId}"},{"KeyName":"SmsStatus","Value":"{SmsStatus}"},{"KeyName":"Body","Value":"{Body}"},{"KeyName":"ButtonText","Value":"{ButtonText}"},{"KeyName":"To","Value":"{To}"},{"KeyName":"ButtonPayload","Value":"{ButtonPayload}"},{"KeyName":"NumSegments","Value":"{NumSegments}"},{"KeyName":"ReferralNumMedia","Value":"{ReferralNumMedia}"},{"KeyName":"MessageSid","Value":"{MessageSid}"},{"KeyName":"AccountSid","Value":"{AccountSid}"},{"KeyName":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}"},{"KeyName":"From","Value":"{From}"},{"KeyName":"ApiVersion","Value":"{ApiVersion}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"supplier_reply_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Edit.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_Edit.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update supplier_reply Detail","DesignTimeTarget":{"Service":"/quickbid/Services/capoff.service","EntitySet":"supplier_reply","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/quickbid/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/quickbid/Actions/capoff/supplier_reply/supplier_reply_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","Value":"{SmsMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"NumMedia","_Name":"NumMedia","Value":"{NumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","Value":"{ProfileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","Value":"{SmsSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","Value":"{WaId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","Value":"{SmsStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","Value":"{Body}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","Value":"{ButtonText}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","Value":"{To}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","Value":"{ButtonPayload}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","Value":"{NumSegments}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","Value":"{ReferralNumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","Value":"{MessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","Value":"{AccountSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","Value":"{From}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","Value":"{ApiVersion}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_reply_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_List.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Pages/capoff_supplier_reply/supplier_reply_List.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"supplier_reply","Service":"/quickbid/Services/capoff.service","QueryOptions":""},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{ProfileName}","Subhead":"{OriginalRepliedMessageSender}","Footnote":"{NumMedia}","Description":"{SmsMessageSid}","StatusText":"{SmsSid}","SubstatusText":"{WaId}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false,"Selection":{"Mode":"None","LongPressToEnable":"None","ExitOnLastDeselect":true}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"supplier_reply_List","Caption":"supplier_reply","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/qus.page":
/*!***************************************************!*\
  !*** ./build.definitions/quickbid/Pages/qus.page ***!
  \***************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.Extension","_Name":"SectionExtension1","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Module":"QuestionnaireClass","Control":"QuestionnaireClass","Class":"QuestionnaireClass"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.Extension","_Name":"SectionExtension0","Visible":false,"EmptySection":{"FooterVisible":false},"Module":"QusEXtn","Control":"QusEXtn","Class":"QusEXtn"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":false,"ControlSeparator":false},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":true},"Footer":{"_Type":"SectionCommon.Type.Footer","_Name":"SectionCommonTypeFooter0","Visible":true,"UseBottomPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Questionnaire_table","QueryOptions":"/quickbid/Rules/qusfil.js"},"_Name":"SectionObjectTable2","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{description}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":true,"AccessoryType":"None","AccessoryButtonIcon":"sap-icon://edit","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnAccessoryButtonPress":"/quickbid/Rules/attepmtRule.js","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":false,"Caption":"/quickbid/Rules/filesvisi.js"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","QueryOptions":"/quickbid/Rules/filterforattch.js"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Footnote":"{mediaType}","DisplayDescriptionInMobile":true,"StatusText":"Open           ","PreserveIconStackSpacing":true,"AccessoryType":"None","AccessoryButtonIcon":"sap-icon://delete","AccessoryButtonText":"Delete","ProgressIndicator":"InProgress","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/quickbid/Rules/imageRule.js"}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/quickbid/Actions/OpenDocument.action","OnAccessoryButtonPress":"/quickbid/Actions/attachDelete.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Questionnaire_reply_table_List","Caption":"Questionnaire","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/quickbid/Pages/qusEdit.page":
/*!*******************************************************!*\
  !*** ./build.definitions/quickbid/Pages/qusEdit.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/n44/Services/capurl.service","EntitySet":"Questionnaire_reply_table","QueryOptions":"$expand=quest_reply_dropdown_rel"},"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"doc_id","IsVisible":false,"Separator":true,"Caption":"Doc Id","Enabled":true,"IsEditable":false},{"Value":"{questionnaire_id}","_Type":"Control.Type.FormCell.ListPicker","_Name":"questionnaire_id","IsVisible":false,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Questionnaire Id","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":{"DisplayValue":"{questionnaire_id}","ReturnValue":"{questionnaire_id}","Target":{"EntitySet":"Questionnaire_table","Service":"/n44/Services/capurl.service"}}},{"Value":"{invitationId}","_Type":"Control.Type.FormCell.ListPicker","_Name":"invitationId","IsVisible":false,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Invitation Id","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/n44/Services/capurl.service"}}},{"Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"description","IsVisible":true,"Separator":true,"Caption":"Question","Enabled":true,"IsEditable":false},{"Value":"{user_reply}","_Type":"Control.Type.FormCell.Note","_Name":"user_reply3","IsVisible":"/n44/Rules/visiRule.js","Separator":true,"Enabled":true,"IsEditable":true},{"Value":"{user_reply}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"user_reply","IsVisible":false,"Separator":true,"Caption":"Answer","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"user_reply2","IsVisible":"/n44/Rules/visibleRule.js","Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Choose Single","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":["Yes","No"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"userReply4","IsVisible":"/n44/Rules/visiblePaymentRule.js","Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Choose Single","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":{"Target":{"Service":"/n44/Services/capurl.service","EntitySet":"{@odata.readLink}/quest_reply_dropdown_rel","QueryOptions":"$filter=questionnaire_id eq '{questionnaire_id}'"},"DisplayValue":"{dropdown_value}","ReturnValue":"{dropdown_value}"}},{"Value":"{type}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"type","IsVisible":false,"Separator":true,"Caption":"type","Enabled":true,"IsEditable":false},{"Value":"{user_reply}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":"/n44/Rules/numVisibleRule.js","Separator":true,"Caption":"Answer","KeyboardType":"Number","Enabled":true,"IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Questionnaire_reply_table_Edit","Caption":"Qus & Ans","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/n44/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/n44/Actions/qusUpdate.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/quickbid/Pages/Login.page","OnLaunch":["/quickbid/Rules/Service/Initialize.js"],"OnWillUpdate":"/quickbid/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/quickbid/Actions/notify.action","Styles":"/quickbid/Styles/Styles.css","Version":"/quickbid/Globals/Application/AppDefinition_Version.global","Localization":"/quickbid/i18n/i18n.properties","_SchemaVersion":"24.7","_Name":"quickbid","StyleSheets":{"Styles":{"css":"/quickbid/Styles/Styles.light.css","ios":"/quickbid/Styles/Styles.light.nss","android":"/quickbid/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/quickbid/Styles/Styles.light.nss","android":"/quickbid/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/AppUpdate.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/AppUpdate.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/quickbid/Rules/Application/AppUpdateFailure.js","OnSuccess":"/quickbid/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/AppUpdateFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/AppUpdateFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/AppUpdateProgressBanner.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/AppUpdateProgressBanner.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/quickbid/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/AppUpdateSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/AppUpdateSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/Logout.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/Logout.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/NavToAbout.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/NavToAbout.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/quickbid/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/NavToActivityLog.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/NavToActivityLog.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/quickbid/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/NavToSupport.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/NavToSupport.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/quickbid/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/OnWillUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/OnWillUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/Reset.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/Reset.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/ResetMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/ResetMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/quickbid/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Application/UserMenuPopover.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Application/UserMenuPopover.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/quickbid/Actions/capoff/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/quickbid/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/quickbid/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/quickbid/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/quickbid/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/quickbid/Actions/Application/Logout.action","Title":"Logout","Visible":"/quickbid/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/CreateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/CreateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/quickbid/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/DeleteConfirmation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/DeleteConfirmation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/DeleteEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/DeleteEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/quickbid/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/quickbid/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/GenericBannerMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/GenericBannerMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/GenericMessageBox.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/GenericMessageBox.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/GenericNavigation.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/GenericNavigation.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/quickbid/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/GenericToastMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/GenericToastMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/CloseModalPage_Complete.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/CloseModalPage_Complete.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","CancelPendingActions":false}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/LogUploadFailure.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/LogUploadFailure.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/LogUploadSuccessful.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/LogUploadSuccessful.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/UpdateEntitySuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/UpdateEntitySuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","OnSuccess":"/quickbid/Actions/Logging/CloseModalPage_Complete.action","Message":"Entity updated","NumberOfLines":2,"Duration":2,"IsIconHidden":false,"Animated":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/UploadLog.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/UploadLog.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/quickbid/Actions/Logging/LogUploadFailure.action","OnSuccess":"/quickbid/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/Logging/UploadLogProgress.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/Logging/UploadLogProgress.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/quickbid/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/OpenDocument.action":
/*!****************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/OpenDocument.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","ActionResult":{"_Name":"OpenDocument"},"Path":"/quickbid/Services/capoff.service/{@odata.readLink}/content","MimeType":"/quickbid/Rules/openDocRule.js"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/UpdateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/UpdateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"/quickbid/Rules/errorRule.js","Duration":7,"Animated":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","OnSuccess":"/quickbid/Actions/CloseModalPage_Complete.action","Message":"Entity updated","NumberOfLines":2,"Duration":2,"IsIconHidden":false,"Animated":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/UploadStreamFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/UploadStreamFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload stream failure - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/UploadStreamSuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/UploadStreamSuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Stream uploaded","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/quickbid/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/attachDelete.action":
/*!****************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/attachDelete.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"delete"},"OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/attachment_create.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/attachment_create.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"attachment_create"},"PageToOpen":"/quickbid/Pages/AttachCreate.page","ModalPage":true,"ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/attachment_table_create_entity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/attachment_table_create_entity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table"},"Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/attachment_table_upload_stream.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/attachment_table_upload_stream.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","ActionResult":{"_Name":"uploadstream"},"OnFailure":"/quickbid/Actions/UploadStreamFailureMessage.action","OnSuccess":"/quickbid/Actions/UploadStreamSuccessMessage.action","ShowActivityIndicator":true,"Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","ReadLink":"{@odata.readLink}"},"Properties":{"content":"#Control:content/#Value"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_CreateEntity.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_CreateEntity.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"Attachments_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DeleteEntity.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DeleteEntity.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Attachments_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DetailPopover.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_DetailPopover.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/quickbid/Actions/capoff/Attachments_table/Attachments_table_OpenDocument.action"},{"Title":"Delete","OnPress":"/quickbid/Rules/capoff/Attachments_table/Attachments_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_OpenDocument.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_OpenDocument.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/quickbid/Services/capoff.service/{@odata.readLink}/content","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UpdateEntity.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UpdateEntity.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Attachments_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UploadStream.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/Attachments_table_UploadStream.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/quickbid/Services/capoff.service","EntitySet":"Attachments_table","ReadLink":"{@odata.readLink}"},"Properties":{"content":"#Control:content/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/quickbid/Actions/UploadStreamSuccessMessage.action","OnFailure":"/quickbid/Actions/UploadStreamFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Create.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Create.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Attachments_table/Attachments_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Detail.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Attachments_table/Attachments_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Edit.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_Edit.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Attachments_table/Attachments_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_List.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Attachments_table/NavToAttachments_table_List.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Attachments_table/Attachments_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_CreateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_CreateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"Target":{"EntitySet":"Bid_reply","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_DeleteEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_DeleteEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Bid_reply","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_UpdateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/Bid_reply_UpdateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Bid_reply","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Create.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Create.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Bid_reply/Bid_reply_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Bid_reply/Bid_reply_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Edit.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_Edit.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Bid_reply/Bid_reply_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Bid_reply/NavToBid_reply_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Bid_reply/Bid_reply_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_CreateEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_CreateEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"questionnaire_id":"#Control:questionnaire_id/#Value","dropdown_value":"#Control:dropdown_value/#Value"},"Target":{"EntitySet":"Dropdown","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_DeleteEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_DeleteEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Dropdown","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_UpdateEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/Dropdown_UpdateEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Dropdown","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"questionnaire_id":"#Control:questionnaire_id/#Value","dropdown_value":"#Control:dropdown_value/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Create.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Create.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Dropdown/Dropdown_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Detail.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Detail.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Dropdown/Dropdown_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Edit.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_Edit.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Dropdown/Dropdown_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_List.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Dropdown/NavToDropdown_List.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Dropdown/Dropdown_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateItem_table.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateItem_table.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_item_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateQuestionnaire_table.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateQuestionnaire_table.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_questionnaire_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","invitationId":"#Control:invitationId/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_bid_table.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_bid_table.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_bid_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_table.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_CreateSupplier_table.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DeleteEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DeleteEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DetailPopover.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_DetailPopover.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Item_table","OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateItem_table.action"},{"Title":"Add Supplier_table","OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_table.action"},{"Title":"Add Supplier_bid_table","OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_bid_table.action"},{"Title":"Add Questionnaire_table","OnPress":"/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateQuestionnaire_table.action"},{"Title":"Delete","OnPress":"/quickbid/Rules/capoff/Header_table/Header_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_UpdateEntity.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/Header_table_UpdateEntity.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Header_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Create.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Create.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateItem_table.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateItem_table.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_CreateItem_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateQuestionnaire_table.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateQuestionnaire_table.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_CreateQuestionnaire_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_bid_table.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_bid_table.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_table.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_CreateSupplier_table.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_CreateSupplier_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Detail.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Detail.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Edit.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_Edit.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_List.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Header_table/NavToHeader_table_List.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Header_table/Header_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_CreateEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_CreateEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_DeleteEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_DeleteEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Item_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_UpdateEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/Item_table_UpdateEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Item_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Create.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Create.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Item_table/Item_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Detail.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Item_table/Item_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Edit.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_Edit.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Item_table/Item_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_List.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Item_table/NavToItem_table_List.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Item_table/Item_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Create.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Detail.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_Edit.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/NavToQuestionnaire_reply_table_List.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Questionnaire_reply_table/Questionnaire_reply_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_CreateEntity.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","user_reply":"#Control:user_reply/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_DeleteEntity.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/Logging/UpdateEntitySuccessMessage.action","Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","user_reply":"#Control:user_reply/#Value"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Create.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Create.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action":
/*!***************************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Detail.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Edit.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_Edit.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_List.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_List.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Questionnaire_table/Questionnaire_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","invitationId":"#Control:invitationId/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_CreateQuestionnaire_reply_table.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"quest_quest_reply_rel1","Target":{"EntitySet":"Questionnaire_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","user_reply":"#Control:user_reply/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DeleteEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DeleteEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DetailPopover.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_DetailPopover.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Questionnaire_reply_table","OnPress":"/quickbid/Actions/capoff/Questionnaire_table/NavToQuestionnaire_table_CreateQuestionnaire_reply_table.action"},{"Title":"Delete","OnPress":"/quickbid/Rules/capoff/Questionnaire_table/Questionnaire_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_UpdateEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Questionnaire_table/Questionnaire_table_UpdateEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","invitationId":"#Control:invitationId/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/CloseOffline.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/CloseOffline.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/quickbid/Services/capoff.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/quickbid/Actions/capoff/Service/CloseOfflineSuccessMessage.action","OnFailure":"/quickbid/Actions/capoff/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineFailureMessage.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineFailureMessage.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineSuccessMessage.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/CloseOfflineSuccessMessage.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/DownloadOffline.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/DownloadOffline.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/quickbid/Actions/capoff/Service/SyncFailureMessage.action","OnSuccess":"/quickbid/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js","ShowActivityIndicator":false,"Service":"/quickbid/Services/capoff.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"},{"Name":"Bid_reply","Query":"Bid_reply"},{"Name":"Dropdown","Query":"Dropdown","AutomaticallyRetrievesStreams":false},{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"},{"Name":"Questionnaire_reply_table","Query":"Questionnaire_reply_table"},{"Name":"Questionnaire_table","Query":"Questionnaire_table"},{"Name":"Supplier_bid_table","Query":"Supplier_bid_table"},{"Name":"supplier_reply","Query":"supplier_reply"},{"Name":"Supplier_table","Query":"Supplier_table"}]}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/DownloadStartedMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/DownloadStartedMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/quickbid/Actions/capoff/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/InitializeOffline.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/InitializeOffline.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"init"},"OnSuccess":"/quickbid/Actions/capoff/Service/SyncStartedMessage.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","Service":"/quickbid/Services/capoff.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"},{"Name":"Bid_reply","Query":"Bid_reply"},{"Name":"Dropdown","Query":"Dropdown"},{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"},{"Name":"Questionnaire_reply_table","Query":"Questionnaire_reply_table"},{"Name":"Questionnaire_table","Query":"Questionnaire_table"},{"Name":"Supplier_bid_table","Query":"Supplier_bid_table"},{"Name":"supplier_reply","Query":"supplier_reply"},{"Name":"Supplier_table","Query":"Supplier_table"}]}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/InitializeOfflineFailureMessage.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/InitializeOfflineFailureMessage.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/SyncFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/SyncFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ShowActivityIndicator":false,"Message":"/quickbid/Rules/synch.js","Duration":6,"Animated":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/SyncStartedMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/SyncStartedMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ProgressBanner","OnSuccess":"/quickbid/Actions/capoff/Service/UploadOffline.action","Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":4,"Animated":true}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Service/UploadOffline.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Service/UploadOffline.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnFailure":"/quickbid/Actions/capoff/Service/SyncFailureMessage.action","OnSuccess":"/quickbid/Actions/capoff/Service/DownloadOffline.action","ShowActivityIndicator":false,"Service":"/quickbid/Services/capoff.service"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Create.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Create.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Detail.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_Edit.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_List.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/NavToSupplier_bid_table_List.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Supplier_bid_table/Supplier_bid_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_CreateEntity.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_CreateEntity.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","item_id":"#Control:item_id/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value"},"RequestOptions":{"UploadCategory":""}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Create.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Create.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateAttachments_table.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateAttachments_table.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateAttachments_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_table.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_table.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateQuestionnaire_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Detail.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Edit.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_Edit.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_List.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_List.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Supplier_table_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateAttachments_table.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateAttachments_table.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_attachment","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"Attachments_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_reply_table.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"sup_questionnaire_relply","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","user_reply":"#Control:user_reply/#Value"},"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_table.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateQuestionnaire_table.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"sup_questionnaire_rel","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","questionnaire_id":"#Control:questionnaire_id/#Value","invitationId":"#Control:invitationId/#Value","description":"#Control:description/#Value","type":"#Control:type/#Value"},"Target":{"EntitySet":"Questionnaire_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateSupplier_bid_table.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_CreateSupplier_bid_table.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_sbid","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#SelectedValue","item_id":"#Control:item_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","leadBid":"#Control:leadBid/#Value","title":"#Control:title/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value","ariba_status":"#Control:ariba_status/#Value","whatsapp_status":"#Control:whatsapp_status/#Value","award_price":"#Control:award_price/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DeleteEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DeleteEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DetailPopover.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_DetailPopover.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Supplier_bid_table","OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action"},{"Title":"Add Attachments_table","OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateAttachments_table.action"},{"Title":"Add Questionnaire_table","OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_table.action"},{"Title":"Add Questionnaire_reply_table","OnPress":"/quickbid/Actions/capoff/Supplier_table/NavToSupplier_table_CreateQuestionnaire_reply_table.action"},{"Title":"Delete","OnPress":"/quickbid/Rules/capoff/Supplier_table/Supplier_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_UpdateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/Supplier_table/Supplier_table_UpdateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Supplier_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","main_invitationId":"#Control:main_invitationId/#Value","title":"#Control:title/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value","award_status":"#Control:award_status/#Value","award_msg_status":"#Control:award_msg_status/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Create.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Create.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_supplier_reply/supplier_reply_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Detail.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Detail.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_supplier_reply/supplier_reply_Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Edit.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_Edit.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/quickbid/Pages/capoff_supplier_reply/supplier_reply_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_List.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/NavTosupplier_reply_List.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/quickbid/Pages/capoff_supplier_reply/supplier_reply_List.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_CreateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_CreateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/quickbid/Actions/CreateEntityFailureMessage.action","OnSuccess":"/quickbid/Actions/CreateEntitySuccessMessage.action","Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"Target":{"EntitySet":"supplier_reply","Service":"/quickbid/Services/capoff.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_DeleteEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_DeleteEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"supplier_reply","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/quickbid/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_UpdateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/capoff/supplier_reply/supplier_reply_UpdateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"supplier_reply","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}"},"Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/quickbid/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/quickbid/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/notify.action":
/*!**********************************************************!*\
  !*** ./build.definitions/quickbid/Actions/notify.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.PushNotificationRegister","ActionResult":{"_Name":"notify"}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toApproveDetail.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toApproveDetail.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toApproveDetail"},"PageToOpen":"/quickbid/Pages/capoff_Supplier_bid_table/Approved_detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toApprovedQus.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toApprovedQus.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toApprovedQus"},"PageToOpen":"/quickbid/Pages/approvedQus.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toAwardedDetail.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toAwardedDetail.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toAwardedDetail"},"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Awarded Detail.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toAwardedQus.action":
/*!****************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toAwardedQus.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toAwardedQus"},"PageToOpen":"/quickbid/Pages/approvedQus.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toQus.action":
/*!*********************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toQus.action ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toQus"},"PageToOpen":"/quickbid/Pages/qus.page","Properties":{"Target":{"EntitySet":"Questionnaire_reply_table","Service":"/quickbid/Services/capoff.service","ReadLink":"{@odata.readLink}","Properties":{"doc_id":"Doc54576248","invitationId":"testcase1peol@gmail.com"}}}}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toQusEdit.action":
/*!*************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toQusEdit.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toQusEdit"},"PageToOpen":"/quickbid/Pages/qusEdit.page","ModalPage":true,"ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toTabs.action":
/*!**********************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toTabs.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toTabs"},"PageToOpen":"/quickbid/Pages/TabsForBidsSummary.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Actions/toaprvdetail.action":
/*!****************************************************************!*\
  !*** ./build.definitions/quickbid/Actions/toaprvdetail.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"toaprvdetail"},"PageToOpen":"/quickbid/Pages/capoff_Supplier_table/Approved Bids.page"}

/***/ }),

/***/ "./build.definitions/quickbid/Globals/Application/AppDefinition_Version.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/quickbid/Globals/Application/AppDefinition_Version.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/quickbid/Globals/Application/ApplicationName.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/quickbid/Globals/Application/ApplicationName.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/quickbid/Globals/Application/SupportEmail.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Globals/Application/SupportEmail.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/quickbid/Globals/Application/SupportPhone.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/quickbid/Globals/Application/SupportPhone.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/quickbid/Services/capoff.service":
/*!************************************************************!*\
  !*** ./build.definitions/quickbid/Services/capoff.service ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"capoff","OfflineEnabled":true,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/quickbid/Extensions/QuestionnaireClass/controls/QuestionnaireClass.ts":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/quickbid/Extensions/QuestionnaireClass/controls/QuestionnaireClass.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireClass: () => (/* binding */ QuestionnaireClass)
/* harmony export */ });
/* harmony import */ var mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdk-core/controls/IControl */ "webpack/sharing/consume/default/mdk-core/controls/IControl");
/* harmony import */ var mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nativescript/core/ui/text-field */ "webpack/sharing/consume/default/@nativescript/core/ui/text-field");
/* harmony import */ var _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nativescript/core/ui/layouts/stack-layout */ "webpack/sharing/consume/default/@nativescript/core/ui/layouts/stack-layout");
/* harmony import */ var _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nativescript/core/ui/label */ "webpack/sharing/consume/default/@nativescript/core/ui/label");
/* harmony import */ var _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nativescript_core_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nativescript/core/ui/button */ "webpack/sharing/consume/default/@nativescript/core/ui/button");
/* harmony import */ var _nativescript_core_ui_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nativescript/core/ui/dialogs */ "webpack/sharing/consume/default/@nativescript/core/ui/dialogs");
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nativescript/core/ui/gestures */ "webpack/sharing/consume/default/@nativescript/core/ui/gestures");
/* harmony import */ var _nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nativescript/core/ui/text-view */ "webpack/sharing/consume/default/@nativescript/core/ui/text-view");
/* harmony import */ var _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_7__);








class QuestionnaireClass extends mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__.IControl {
    constructor() {
        super();
        this._dataLoaded = false;
        this._descriptionLabels = [];
        this._replyFields = [];
        this._questionnaireIdFields = [];
        this._itemTypes = [];
    }
    initialize(props) {
        var _a;
        super.initialize(props);
        const clientAPI = (_a = props.context) === null || _a === void 0 ? void 0 : _a.clientAPI;
        this._clientAPI = clientAPI;
        if (clientAPI) {
            this.fetchAndPopulateData(clientAPI);
        }
        else {
            console.error('clientAPI is not available');
        }
    }
    view() {
        var _a;
        if (!this._mainStackLayout) {
            this._mainStackLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            this._mainStackLayout.orientation = 'vertical';
            var clientAPI = (_a = this.page()) === null || _a === void 0 ? void 0 : _a.clientAPI;
            if (clientAPI) {
                this.fetchAndPopulateData(clientAPI);
                this._dataLoaded = true;
            }
            else {
                console.error('clientAPI is not available');
            }
            let bottomLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            bottomLayout.height = 100;
            bottomLayout.width = '100%';
            bottomLayout.verticalAlignment = 'bottom';
            let buttonContainer = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            buttonContainer.horizontalAlignment = 'left';
            buttonContainer.verticalAlignment = 'bottom';
            buttonContainer.width = '100%';
            this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
            buttonContainer.addChild(this._saveButton);
            let pageLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            pageLayout.addChild(this._mainStackLayout);
            pageLayout.addChild(buttonContainer);
            return pageLayout;
        }
        return this._mainStackLayout;
    }
    createStyledButton(text, onTap) {
        const button = new _nativescript_core_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button();
        button.text = text;
        button.width = 100;
        button.height = 50;
        button.marginTop = 25;
        button.borderRadius = 25;
        button.backgroundColor = '#51abf1';
        button.color = '#FFFFFF';
        button.horizontalAlignment = 'left';
        button.on(_nativescript_core_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button.tapEvent, onTap);
        return button;
    }
    updateServiceWithData() {
        let updateCount = 0;
        const totalUpdates = this._questionnaireIdFields.length;
        const updatePromises = this._questionnaireIdFields.map((questionnaireIdField, i) => {
            const questionnaireId = questionnaireIdField.text;
            let userReply;
            const replyControl = this._replyFields[i];
            if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
                userReply = this._payment;
            }
            else if (this._itemTypes[i] === 'RQABOOLEAN') {
                userReply = this._doc;
            }
            else if (this._itemTypes[i] === 'RQASTRING') {
                userReply = this._userReplies;
            }
            if (userReply != null) {
                const readLink = `/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
                return this._clientAPI.executeAction({
                    'Name': "/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action",
                    'Properties': {
                        'Target': {
                            'EntitySet': 'Questionnaire_reply_table',
                            'ReadLink': readLink
                        },
                        'Properties': {
                            'doc_id': this._docId,
                            'invitationId': this._invitationId,
                            'questionnaire_id': questionnaireId,
                            'user_reply': userReply
                        }
                    }
                }).then(() => {
                    updateCount++;
                }).catch((error) => {
                    console.error(`Error updating questionnaire ID ${questionnaireId}: `, error);
                    (0,_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__.alert)(`Error updating questionnaire ID ${questionnaireId}: ${error.message}`);
                });
            }
            return Promise.resolve();
        });
        Promise.all(updatePromises).then(() => {
            return this._clientAPI.executeAction({
                'Name': "/quickbid/Actions/capoff/Service/UploadOffline.action"
            });
        }).then(() => {
        }).catch((error) => {
            console.error("Error during the UploadOffline action: ", error);
            if (error.message && error.message.includes("Failed to establish a socket connection to the server")) {
            }
            else {
                (0,_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__.alert)(`Error during the UploadOffline action: ${error.message}`);
            }
        });
    }
    async fetchAndPopulateData(clientAPI) {
        try {
            this._docId = this.context.binding.doc_id;
            this._invitationId = this.context.binding.invitationId;
            const servicePath = "/quickbid/Services/capoff.service";
            const entitySet1 = "Questionnaire_table";
            const entitySet2 = "Questionnaire_reply_table";
            const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
            const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);
            if (result1 && result1.length && result2 && result2.length) {
                const repliesMap = result2.reduce((acc, reply) => {
                    acc[reply.questionnaire_id] = reply.user_reply;
                    return acc;
                }, {});
                result1.forEach((item, index) => {
                    if (item && item.type !== "RQAATTACH") {
                        const qusIdField = new _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__.TextField();
                        qusIdField.hint = 'Questionnaire ID';
                        qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
                        qusIdField.visibility = 'collapsed';
                        this._mainStackLayout.addChild(qusIdField);
                        this._questionnaireIdFields.push(qusIdField);
                        const descriptionLabel = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
                        descriptionLabel.fontSize = 18;
                        descriptionLabel.horizontalAlignment = 'left';
                        descriptionLabel.marginBottom = 10;
                        descriptionLabel.marginTop = 30;
                        descriptionLabel.text = item.description || 'No description available';
                        this._mainStackLayout.addChild(descriptionLabel);
                        this._descriptionLabels.push(descriptionLabel);
                        this._itemTypes.push(item.type);
                        if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
                            const radioGroupLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
                            if (item.type === 'RQASTRINGListOfChoices') {
                                this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
                            }
                            else if (item.type === 'RQABOOLEAN') {
                                this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
                            }
                            this._mainStackLayout.addChild(radioGroupLayout);
                            this._replyFields.push(radioGroupLayout);
                        }
                        else if (item.type === "RQASTRING") {
                            const replyField = new _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_7__.TextView();
                            replyField.hint = `User Reply ${index + 1}`;
                            replyField.text = repliesMap[item.questionnaire_id] || '';
                            replyField.backgroundColor = 'white';
                            replyField.color = '#000000';
                            replyField.borderRadius = 5;
                            replyField.borderWidth = 1;
                            replyField.borderColor = '#000000';
                            replyField.padding = 10;
                            replyField.width = 288;
                            replyField.horizontalAlignment = 'left';
                            replyField.marginLeft = 7;
                            replyField.marginRight = 7;
                            this._mainStackLayout.addChild(replyField);
                            this._replyFields.push(replyField);
                            replyField.on('textChange', (args) => {
                                const textView = args.object;
                                this._userReplies = textView.text;
                                this._replyFields.push(textView.text);
                                if (textView.ios) {
                                    const fixedWidth = textView.ios.frame.size.width;
                                    const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
                                    textView.height = newSize.height + 10;
                                }
                                else if (textView.android) {
                                    textView.height = 'auto';
                                    textView.requestLayout();
                                }
                            });
                            if (replyField.android) {
                                replyField.on('loaded', () => {
                                    replyField.android.setMinLines(1);
                                    replyField.android.setMaxLines(5);
                                });
                            }
                        }
                        descriptionLabel.on(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6__.GestureTypes.tap, () => {
                            try {
                                const replyField = this._replyFields[index];
                                if (replyField.visibility === 'collapse') {
                                    replyField.visibility = 'visible';
                                    descriptionLabel.text = `${item.description} ( Ans )`;
                                }
                                else {
                                    replyField.visibility = 'collapse';
                                    descriptionLabel.text = `${item.description} ( ans )`;
                                }
                            }
                            catch (error) {
                                (0,_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__.alert)(`${error.message}`);
                            }
                        });
                    }
                });
            }
            else {
                throw new Error('No data found or invalid response');
            }
        }
        catch (error) {
            console.error('Error fetching data from service:', error);
            (0,_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__.alert)(`Failed to fetch data: ${error.message}`);
        }
    }
    populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI) {
        const servicePath = "/quickbid/Services/capoff.service";
        const entitySet = "Dropdown";
        const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;
        clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
            if (response && response.length) {
                response.forEach((option, optionIndex) => {
                    const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
                    const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', isSelected);
                    radioGroupLayout.addChild(radioButtonLayout);
                    if (index === 0 && optionIndex === 0) {
                        const textBox = new _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__.TextField();
                        textBox.hint = `Enter text for ${option.dropdown_value}`;
                        textBox.borderRadius = 5;
                        textBox.borderWidth = 1;
                        textBox.borderColor = 'black';
                        textBox.height = 40;
                        textBox.marginTop = 5;
                        textBox.paddingLeft = 5;
                        radioGroupLayout.addChild(textBox);
                    }
                });
                radioGroupLayout.visibility = 'visible';
                this._replyFields[index] = radioGroupLayout;
            }
            else {
                throw new Error('Invalid radio options response format');
            }
        }).catch(error => {
            console.error('Error fetching radio options:', error);
            (0,_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__.alert)(console.error);
        });
    }
    populateBooleanOptions(item, radioGroupLayout, index, repliesMap) {
        const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', repliesMap[item.questionnaire_id] === 'Yes');
        const noRadioButton = this.createRadioButton('No', index, 'boolean', repliesMap[item.questionnaire_id] === 'No');
        radioGroupLayout.addChild(yesRadioButton);
        radioGroupLayout.addChild(noRadioButton);
    }
    createRadioButton(optionText, index, groupName, isSelected) {
        const radioButtonLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';
        const radioIndicator = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;
        const radioLabel = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;
        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);
        radioButtonLayout.on(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6__.GestureTypes.tap, () => {
            const parentLayout = radioButtonLayout.parent;
            parentLayout.eachChild((child) => {
                if (child instanceof _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout) {
                    const indicator = child.getChildAt(0);
                    indicator.borderColor = 'black';
                    indicator.backgroundColor = 'white';
                }
                return true;
            });
            radioIndicator.borderColor = '#51abf1';
            radioIndicator.backgroundColor = '#51abf1';
            this._doc = optionText;
        });
        return radioButtonLayout;
    }
    createRadioButton1(optionText, index, groupName, isSelected) {
        const radioButtonLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';
        const radioIndicator = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;
        const radioLabel = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;
        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);
        radioButtonLayout.on(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_6__.GestureTypes.tap, () => {
            const parentLayout = radioButtonLayout.parent;
            parentLayout.eachChild((child) => {
                if (child instanceof _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout) {
                    const indicator = child.getChildAt(0);
                    indicator.borderColor = 'black';
                    indicator.backgroundColor = 'white';
                }
                return true;
            });
            radioIndicator.borderColor = '#51abf1';
            radioIndicator.backgroundColor = '#51abf1';
            this._payment = optionText;
        });
        return radioButtonLayout;
    }
}


/***/ }),

/***/ "./build.definitions/quickbid/Extensions/questionnaireAprv/controls/questionnaireAprv.ts":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/quickbid/Extensions/questionnaireAprv/controls/questionnaireAprv.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   questionnaireAprv: () => (/* binding */ questionnaireAprv)
/* harmony export */ });
/* harmony import */ var mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdk-core/controls/IControl */ "webpack/sharing/consume/default/mdk-core/controls/IControl");
/* harmony import */ var mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nativescript/core/ui/text-field */ "webpack/sharing/consume/default/@nativescript/core/ui/text-field");
/* harmony import */ var _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nativescript/core/ui/layouts/stack-layout */ "webpack/sharing/consume/default/@nativescript/core/ui/layouts/stack-layout");
/* harmony import */ var _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nativescript/core/ui/label */ "webpack/sharing/consume/default/@nativescript/core/ui/label");
/* harmony import */ var _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nativescript/core/ui/gestures */ "webpack/sharing/consume/default/@nativescript/core/ui/gestures");
/* harmony import */ var _nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nativescript/core/ui/text-view */ "webpack/sharing/consume/default/@nativescript/core/ui/text-view");
/* harmony import */ var _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_5__);






class questionnaireAprv extends mdk_core_controls_IControl__WEBPACK_IMPORTED_MODULE_0__.IControl {
    constructor() {
        super();
        this._dataLoaded = false;
        this._userReplies = {};
        this._descriptionLabels = [];
        this._replyFields = [];
        this._questionnaireIdFields = [];
        this._itemTypes = [];
    }
    initialize(props) {
        var _a;
        super.initialize(props);
        const clientAPI = (_a = props.context) === null || _a === void 0 ? void 0 : _a.clientAPI;
        this._clientAPI = clientAPI;
        if (clientAPI) {
            this.fetchAndPopulateData(clientAPI);
        }
        else {
            console.error('clientAPI is not available');
        }
    }
    view() {
        var _a;
        if (!this._mainStackLayout) {
            this._mainStackLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            this._mainStackLayout.orientation = 'vertical';
            const clientAPI = (_a = this.page()) === null || _a === void 0 ? void 0 : _a.clientAPI;
            if (clientAPI) {
                this.fetchAndPopulateData(clientAPI);
                this._dataLoaded = true;
            }
            else {
                console.error('clientAPI is not available');
            }
            let pageLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
            pageLayout.addChild(this._mainStackLayout);
            return pageLayout;
        }
        return this._mainStackLayout;
    }
    async fetchAndPopulateData(clientAPI) {
        try {
            this._docId = this.context.binding.doc_id;
            this._invitationId = this.context.binding.invitationId;
            const servicePath = "/quickbid/Services/capoff.service";
            const entitySet1 = "Questionnaire_table";
            const entitySet2 = "Questionnaire_reply_table";
            const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
            const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);
            if (result1 && result1.length && result2 && result2.length) {
                const repliesMap = result2.reduce((acc, reply) => {
                    acc[reply.questionnaire_id] = reply.user_reply;
                    return acc;
                }, {});
                result1.forEach((item, index) => {
                    if (item && item.type !== "RQAATTACH") {
                        const qusIdField = new _nativescript_core_ui_text_field__WEBPACK_IMPORTED_MODULE_1__.TextField();
                        qusIdField.hint = 'Questionnaire ID';
                        qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
                        qusIdField.visibility = 'collapsed';
                        qusIdField.isEnabled = false;
                        this._mainStackLayout.addChild(qusIdField);
                        this._questionnaireIdFields.push(qusIdField);
                        const descriptionLabel = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
                        descriptionLabel.fontSize = 18;
                        descriptionLabel.horizontalAlignment = 'left';
                        descriptionLabel.marginBottom = 10;
                        descriptionLabel.marginTop = 30;
                        descriptionLabel.text = item.description || 'No description available';
                        this._mainStackLayout.addChild(descriptionLabel);
                        this._descriptionLabels.push(descriptionLabel);
                        this._itemTypes.push(item.type);
                        if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
                            const radioGroupLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
                            if (item.type === 'RQASTRINGListOfChoices') {
                                this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
                            }
                            else if (item.type === 'RQABOOLEAN') {
                                this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
                            }
                            this._mainStackLayout.addChild(radioGroupLayout);
                            this._replyFields.push(radioGroupLayout);
                        }
                        else if (item.type === "RQASTRING") {
                            const replyField = new _nativescript_core_ui_text_view__WEBPACK_IMPORTED_MODULE_5__.TextView();
                            replyField.hint = `User Reply ${index + 1}`;
                            replyField.text = repliesMap[item.questionnaire_id] || '';
                            replyField.backgroundColor = 'white';
                            replyField.color = '#000000';
                            replyField.borderRadius = 5;
                            replyField.borderWidth = 1;
                            replyField.borderColor = '#000000';
                            replyField.padding = 10;
                            replyField.width = 288;
                            replyField.horizontalAlignment = 'left';
                            replyField.marginLeft = 7;
                            replyField.marginRight = 7;
                            replyField.isEditable = false;
                            this._mainStackLayout.addChild(replyField);
                            this._replyFields.push(replyField);
                        }
                        descriptionLabel.on(_nativescript_core_ui_gestures__WEBPACK_IMPORTED_MODULE_4__.GestureTypes.tap, () => {
                            const replyField = this._replyFields[index];
                            if (replyField && 'visibility' in replyField) {
                                if (replyField.visibility === 'collapse') {
                                    replyField.visibility = 'visible';
                                    descriptionLabel.text = `${item.description} ( Ans )`;
                                }
                                else {
                                    replyField.visibility = 'collapse';
                                    descriptionLabel.text = `${item.description} ( ans )`;
                                }
                            }
                            else {
                                console.error(`replyField does not support visibility toggle at index ${index}`);
                            }
                        });
                    }
                });
            }
            else {
                throw new Error('No data found or invalid response');
            }
        }
        catch (error) {
            console.error('Error fetching data from service:', error);
        }
    }
    populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI) {
        const servicePath = "/quickbid/Services/capoff.service";
        const entitySet = "Dropdown";
        const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;
        clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
            if (response && response.length) {
                response.forEach((option, optionIndex) => {
                    const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
                    const radioButtonLayout = this.createDisabledRadioButton(option.dropdown_value, isSelected);
                    radioGroupLayout.addChild(radioButtonLayout);
                });
                radioGroupLayout.visibility = 'visible';
                this._replyFields[index] = radioGroupLayout;
            }
            else {
                throw new Error('Invalid radio options response format');
            }
        }).catch(error => {
            console.error('Error fetching radio options:', error);
        });
    }
    populateBooleanOptions(item, radioGroupLayout, index, repliesMap) {
        const yesRadioButton = this.createDisabledRadioButton('Yes', repliesMap[item.questionnaire_id] === 'Yes');
        const noRadioButton = this.createDisabledRadioButton('No', repliesMap[item.questionnaire_id] === 'No');
        radioGroupLayout.addChild(yesRadioButton);
        radioGroupLayout.addChild(noRadioButton);
    }
    createDisabledRadioButton(optionText, isSelected) {
        const radioButtonLayout = new _nativescript_core_ui_layouts_stack_layout__WEBPACK_IMPORTED_MODULE_2__.StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';
        const radioIndicator = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;
        const radioLabel = new _nativescript_core_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;
        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);
        return radioButtonLayout;
    }
}


/***/ }),

/***/ "./build.definitions/quickbid/Images/peol_logo (1) (1).png":
/*!*****************************************************************!*\
  !*** ./build.definitions/quickbid/Images/peol_logo (1) (1).png ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7s/Qd4VMX3P46fuWV7NgVC7713EhDpoCgKgoJUqQIiSAdBFFAsCCgK0pUmICC9hA7SQaQjAqGHGgjJ9ttmfv9zN+sn8g4aIsXvP3efRy+7mXvvzJl5zelnCBgfgwIGBR5KAWLQxqCAQYGHU8AAiLE6DAr8DQUMgBjLw6CAARBjDRgUyBwFDA6SOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREKGADJIhNtDDNzFDAAkjm6GXdlEQoYAMkiE20MM3MUMACSOboZd2URChgAySITbQwzcxQwAJI5uhl3ZREK6ABhjAkAQFPHzOFPqf8OXZ8kObAP6b6HEBLq05N8v/FsgwIPpQCp3ajL70n3k5yMUhsROIljRNSAAVVUMxE4mQeOoxwwjgJHCTCO6VeaesXvJPX30DXt39O2C93Pp96PV6YxlRCB11RJNfNAFJvF7Pa472ezWsSU44c35SGEyMb8GRR4VhQgdRoPup50/76ZUcoRjpMJAEcZI1TTTBzP43fCABj+HrwSjgGjqdfQ7/idMGD499QrtieMAMP7AZ+D7IALPo/ozyUqI2amKbLPJApmhTKV4yllhKnEbOJc61euKJUjB/E8K+IY7zUoQJZvvN5IkxQzETlFUxUTU5gomgSJUlzT//5DCGIh+EEUhf5NKCHAS6BAQCAco4TwlEcAMcYkr8dusTJfy6Y11hNCtH/fC+MJBgUyR4GQDmJK1UH4mwB8boB0F+VlAFIIgD14TefVIZ3iH0GGzzIDcLkBVGQ0iYkgRkeDhM8khCiZG5Zxl0GBx0MBUu+ldofupdzPxRTNQQTcxQmvASNUUQVOFFRCKW7vBHf2P69BUQkoIYwHgpxBl7/SvVIglNPlMtRRdLkrVT4DCoRwHMcoEJ4wDlSF8naL1SUFPDYAObB53ZYCuXIR7+MZqvEUgwKPTgEy9MNJk5PuJ0cDpcAJHOMJTyjTiKpqAsfzqg6EECCCukSQOwQVDsZxBK1gDNtpCKQ07Rm20NuioMUIw2uqyUr/RYcYpbIqW3jOpOqPoQBmkZMpyOq0bz97ixCCnMX4GBR4JhQgqSZeNPOiWEUuA3CF/s/km6pf/0/f0ppl0zPTpv0trZj1d2bj0D2oimBfEJfItJ6GqfmZEN946X+fAmTUqIXT7rt82TWOmFUeOA0Iz/GCTDWN4xhQgeNVpjKRF0Q5EAiYeUI0qlFitZg8kqKInMhRlaOEYypheKtmIQw4QkDVOQwQgQX8/jCr1eRSNVkknAYCERWqgIknhKpUIoIgyKrKzGbBInGMMllxmUwm2fP1+AE9CSH+/z4ZjR7+/ysFSKs3Pjzj8roiZMZbZaZxlIHICYKMTjqB4wOKLAuapokm0aKIoklXnjVN4wRCFI1SogIFBioQomqEcQLR7Cai+05UDYCqGqO81WpP8XhcEaKJD3CgapLPbwm3RfkkVeEJT2WZqqLTkd11N/FurjC7VSUkAIS5fFvWf1+BEKK/0/gYFHgWFEARS7eupvGkPygyhUQk3cMeD8AVC+ohIfEr5O1+mDiWdly6qpL6gwhBy5V+XzwAX+z/1J3Q81HEMsy8z2JlGO/UKUCmzN74USAQcIiE13ieU0EFXU9XVYWjwKiiKiJnFlWTxexXNMozAprA8wpHBFXxByyEihpHKTAiEx59G4AWY/zIoHEaY5TyZqvdryhU4LgglhRFsphFe4BSAEnUqCRJVrwvwhl1L+D32f2++1FRTiGxd9fXvjbCTYyV+iwpQGJeGMa8bjcwjaJAhBYp4DgAiquXZ0AZAw0omK0W8Pl8IHACaLIGVrMDFFkFjjfrPnICWpCDhAxXnASU01TCg5+CwAIBaud5EXiBqYqimHnOQiWfylnNZhA5M+V5s+TxeESbiddMJkUI+G7yB3auCM+WjbieJYGMd2dtCpD6jQczj8sNjKq6LwM/PM9rCtU4RijleaIGZL9ZFEU0wwqEiEyWKLGY7TLjTapflQkjlBFQUVwSgHECQ8AQTVM5qgRUhdodkZ6UFMgriBZgTCM8z4Mi82CzOED1K8ABD4pfBZPJBFTxAQEXmESPsj1ubqThB8naC/RZjx51EBPcBlHXtaXUiF4VGFh0vST4we8CEMgHFBKAg3yAHm6Ul1B/wWta/eNBHYZdvA9hr7468Lg/wGUjhFgUFQSzGA4ulw8sFgE4jgOTYAVJ8oNZYGARZZClm3TX5rnhRizWs14iWfv95NqM+UN9AbcNHSEYpKtRzcRxPAN0GfK8qkgBm81hTb7nceXgbBaPbA5Lrlyn4Y9QLO+NR9EPSlTpcZuycCcFZuaImSiSAKLFCkRQIDk5CZxhkaAhF6MSEOYBs+CWd2+eF22IWFl7gT7r0ZM9DeswlysFCFMQIMFQWxCBqGis5XQ2gqbcAM/AYxHhlsnk7T9pSk0on+08IYUDGRkAWsrK1+ybIMm2SAQIIwIwzYIBLcD4AIpjgMY01INMGOjCvCDyKZ6daxbnMkSsjFDYaPOkKEDia1Zhbtd9HSBAVMCYKJ6JwDSEiQkIo6ASBj5Bg/s2C1y1mwPdpk57DsrkPvMoAKkQ2/dKQAmLpsBMjIhAmUkHCBBJTzbBgC3UgwQe4+BTQCRu7851C3MaAHlSU288NyMUIDeqVWIudwoA8+uZGgyIrjSDKoIAAogUQAEKfoHCfbsFLjosnremTK0DFWuezGicFCr3FWKGXJFlZ04NNJ5yCBABmJ4dgqGRRE8WYVQDQVDQSQgid1/auf6HbAZAMjKNRpsnRQFyu2oV5nLdBwC/ntqEEbeAIpAqAkLEpKFnT4MAjwAxwyW7w9du8tQ6UCX2aEZ1EBSxKsQMuybLztwqUYARHihyqdT0EMbxQDQeGJVBEJCLJQcBsmG2AZAnNfPGczNEAXKjWjXmciUBQEAXeTT0gXA8UAQICQKEMQ1kTgWX1QpXrHapzZRZdaFq1d8egYPw5WMHJkiKI5dKZGA8Aw3T4JkAnB4wzwNQHiiKWDpAUkDkkqWd6+cYAMnQNBqNnhQFSEK1GOZyJwFhAQBOAS2VgyhUBF4HSDDWCnd+l8UCVy12uc03s+tCbOzhRwTI9YDqyKmRgJ7YrukRLjxwjAMCgp5MgjqIyKNN2YMcRN65bkGUIWI9qak3npsRCpBr1WOY25UEAvUBJvDpQVAcDwgQjhOApxQoUUBBDmIxIwfxtZv0fT0SU+vXjLwA26SKWDcCsjMH5QJ6xQeqAwTFOQoIET30V1NBFNCShkp6irozbmGk4QfJKJWNdk+CAuRqTDXmSUGABDBcRDf1og6i0KADDzOYNFBA5imkWM3IQTztps5sSCrVOZTRDiFAKsUMuxGQInKoHFqtAKieYoUA0f4s84A6iAktWswNAuem29cvcBocJKNUNto9CQqQq7EVmduVDLyGIR+4ONGyxINKQQcIzyjITAFN5CDFaoVLosXfYeqMBlCl1qGMKumXGLO0fn5EfIrblFfWAxYJ8IwHWaPAm3ldx9EUFawmVNYl4IgXTIJfW715dvbCkST5SQzceKZBgYxQgFyNLZ8KEAaYHY6R75gYq1IOBL1GDwWVKqCIpv8DyLTvHgkgyEEqxvRLDGjOSMzh1YsDpYpYWIMLI1V41HRknx5qIvIyEDUZVh1bYClu5INkZB6NNo9IAUwH/7tsVVyzmGrxbwDya0ZzNbAzJar29GhchA14TudOqoqgIMCjMUtTwWY1Q8DjBquIPhE/yIG7cO70couRMPWIM280zxAFZsyYMRolJFybBQoUONukSZNFV65cKVKwYMGL6Lc7d+5c2ZIlSx7PDEB8HaZ91/BRRKxrjFmb1nnnmsvDsqmY/0QIcMQCAs8DRxQIBPxgM5lBDvjAIqLeo4DNTAPLNyzMUzCCoJPG+BgUeKwU2LNnz8uzZs2a0Lhx47lVq1bdhjneU6ZMGf3111+/ji9q3779nokTJ774VACCEcPjpsWNUhSwE6Ji7RKeJxZCqYp1hfDKmXlRwXKOPCEK0yTeJKj+Ab3fHJlRLvVYqWc8LEtQYMCAARs6d+78ccWKFQ/MmjVr1MyZMz9Yvnx56du3b+fv1q3builTpnT6NwA5+CgVR/5J5ntwRs4zZjb0jyyxTp/JIFGM6t+//4YOHTp8Wb169a29e/fe0qhRo+VnzpypnJCQUKZu3borr1y5Uu2pAeSZUMF4qUGBdCiA9dfQAjt8+PDVHTp0+Kxs2bIHW7VqdWzZsmWVWrdufczpdKaMHTu21fDhw7dnGiCk6vMHDOobFPh/lQK3bt2yL1my5JMXXnhhYVRUVMKsWbM+HjlyZM+4uLi2efLkuYRiV9++feMMgPy/OsNGv58KBTIDEH+HqdPrk2o1Dz6VHhovyTIUCPke/ksDfmoAOe9j+e55oTixgZsXQMLzQTBEMUDAgv8O/RciDn5XU49LwH/j76Er0+utALoamabogcFYS0VFlwq24QA0DBimANRsgiQVwFUWIJDR4MqMThBjTEwCsCYCOCSAMA3AQpWga0fEDH8Mx2SgyQRMKgEzU0Fgip/ldFpP5H/KFSNx8SUAmHgAux/A5gKI0lRwYI4c9pOxYFoOhsmhIR5pi79zAqhqahud/gIoSF8OI1hNoDCAJBtAoBiAN7MWx/OMOZNTpBhVFEQr4d1UAw7M4DOLkCwl+aOrZLPtz+icPO52TwUgaDFYfS4w4sj5K13czG+jPM9TCd0gPMfxGlBCcTLQx56KA/wXztH/fjDmlxHKEcA6QzyjqogltFUClPJ6IBnWK8Ky8RgWgKXpFcVhM991moVbBaOz7ypdInphOYCbmQXLYcbEnABhx6/cb5NwM6nRXbe/uMS4yIDGLFhFElOWERS8pgWAUgIiT2SN4ildoshpchinXq9ZtvjkRgWzz3vck/ng8xAU1wByXrutVb94+86L1+4kVbkXkPP5VWpTOcGKMRNWHmQ8niXNvWmP38Pq+xQtkAzrP+GGhTl1SGAOg5I0BYjkDXeYbzjN1ltFc+XdUamg86fcAJg/gZ7qDBX923st+fVf/jg3yq2w/DyzElnVOJXXwMSp7txW85F29Sq1iybE/aTple56y1SoySOKWGiyPfSHNvHA+cs9vQIVwGTWWYfIC6AHL+pnT6WpUZ32aMJQUKO+0aW2Cf2dYeKVRQ+bR4xhWIyeVK8XlMfSQ5hgT0EkDExMAwh4JTuod8oVzr+uXIkcUyqb4MyjmKpPMZbryg3p9d2/Hh0ii5ZoKthsAY2AjHFleogODyJwIDIGAqN6jBkT8W/BPBsRZHDI3sRGlUp9/nJe66RHefejLo5zAVbk9LXE7sfOXmvlI0J2HxPCFcFCVN4ECidgVXA9ilqQZT3eLqMfrJsW5DiIFxVETgaRo2DC/UyWAzbgbpYumH9F5eIRM0uZ4fw/jREtSpuvurtvOHpqosTbHILg1EtvqkQFkfrAHki58U6LOlWKEHI7o318nO2eCgdBgBw8R7/aE5/Q2yUS4EQTqAEGAuGAYgGVvwAk7WSFKg/93wZHcIJSAaKn7HJmPTKY03DCECRB8qCshf9JqgRmARcuBSvRQFQlCKQkQd6oiPN1KxUf0CCarM8IQU94WPlth3+fdMOrVvESMUIRrODVCPAmc3BCGUKD06sjCZSBoGHxCQ2kYAVw0DgKZqJAmORyv1ix5Mev5hK+ymiwZ0b6l7bNecbyrd/3x/xbPq2aSyZhAYKgsAITTXoynKoxLC2u05/HhY4ntKSp3RSq4aSTUqd3UNb9n99BBYHKwBEGqkpB5AhwWB7Nm0JL5c22r3HVIu9VtMGxf4h54rYkKF3XHD/5rWSOtFJqAzzejPIUrMwHOagnoWOTyjFlCLn5qHR4HO0zAxBfh6nTGzyKko4i1sIL2ld7zif0TcLwdrMZ8PRDgQh6gH2QZ6ezi2Ey1Z8cJDjcIGT0kxFQNNMXH6Z0YdVtlGOQk+g59ZgVic/mCEiqrAdeogAuUBVMRAUbRyCcec++UavUK2UtWBr44Z8bjNm2Hk/49uytlDfuamJ4kiaAEJEdPLIEFj4Y5KliJRjKg6gGuYegqXqqsipyWOgIJKqAFWSIkFJcL1cqMaJpbvt3j2MCH3zGFcYit51K+nzP7+d6Emd20ExhIFGUR3kQOKQnZhioOtcgAq8rEShghQ6izOgVuQ9+MFxIklVgvAiCKGKxWhA1L0QwH2Rj7rNt61ZpWtxCLvzdWHfcUNsvP3Zmhs8SYQ/IFlBxZzNRsBMf5GHeK50blKlenJDEJ0Gvf3omSYipyDwpycChapb6wUWFGi6POwyoIFMNNFGAFIsdw911gEDVGhjunqGzOxAgiy+q4/deuNXvHk6HaAZOxUQpDHUPElrEskOp0cT6mVNpeq5zChSAdcDgfZg7T4FyFPQKwrgbagg1AB5BgvwCxQiOB4kL7vKqooGCQOE1fdfEnS6cepVGpXMML1o0++RyDzlNF+XvQy54Yfm2w3OSOUtu1R4FPs4EXsoDJxDgNS/mQ2JuJGAkv4kyPQsTS1Jg5mQA+YuFh4Aqgw0UcCrum00qlx7xQm7n3H+anMz8/YCf1f8x7vgKv9URodkiwEMJKKqGZz+CFTcJBK8qBzcUDkAhRM8ifRgHQQCg+oGcJKiGBDkJHnCBaqKk4IlHdvCDCAGGkdgMzFQCm+KBaPBKjcoUHlkjv/2HcEJQL0n3s/2W2m7p4T9m+WzZbYoqgoLzzKlg1lyQD1Ku9HyxcqXC5NmkPZDbVSsxd4oLgKl/5qQjS8VKJjpAmIrHHegAcVsdcMFk8XWYMuORAbIwXpq090Liu/dBBNRBOKqiDUo3mZh4BmEgJXNaQKOSxkwYwahJEsczVQWVpxwvALXYBSoSnmp+VMhVTsPEK55wJgtlGiWa5OMZ0zhOMAEReYWIVgmI6Bc4q8aZgRfCwO3xgWhhYLaIIHspOJkfcmt3znR5pVqtgiT9oMjzjEUv33Fx8y1VqOTlTOBWVKCCCTiBB1WVwSoAqH4XhPF8wM4TD/F6ZBOjCs9xAb/st4oOh+aTvCJu3liWOIJnV2JKFZn/YtG8P2QGAH93DyrlE/Zd3nbFS+r6eCt4UEsQLeD1uiHKxusAZZ5kCLea/YqkckzViECoCgTrzOIJYbrEi0fkYdJn6IqUpkE5lmgC4TjGYQAd42TCcT4Am2YOEwLWaHAHNLDyBDSvBxxEg0iQIDv4bnRvUr5mXkKuPqzvm2/KnVccvTzVJTqtlAo6ZyOaBnbqgRzq7fjuTWOqP0OAYFWTZEA6hYo2pAWIGAKIEARIvMnmaf/dtEaPKGKZfjwnfb3vUmLv+2ABEE06IDkm6btv3ghbfM1S4R9EWuCGgCW4giZcahHBF1DApqfHK8h0gVoYBHA/w7p2OpNLNetiWyxWJAGYJT9kc8mQJ1mGXCevXO+UcM9TwSPZBc5iA8qjUYAAU0zgYBJEyrcSOzWp3Ki8mZxIbwJPMFZqydZLuxNVIbskWMCPnAp1GrSjqV4wqz5XibxRe4rmyLkhewScyAFwlVjAIwAoEgAVAJweCbBGt4z9swFAQYBbGeW+jwIiTEybuy3+xE3NVtxLeAigmClagGcKWJX7YAqksPwRlt+K5MmzNTp7+Am7De5YGbiR1um9Rw3SlsP5oMiUATRVAZNKwenzadF+VY08evlK83N3PLEeS06nDBYw85zOpSDgg0gewKF6tHYvlK5XUYADD7Mcbrzp77Lq6PXpKaLThBIFj2/UNAijLshO75zt8nJsbFFCUh6FFo+rLbkWU4m5XSnAUeXP4tUoYuHOjnK7qAGoVAMqCJBsc0C82eJuO2V6QxITk+GcdF1JPy9N2nsxsVdagKCVQpDdWqFw08EOzxd9uUjQlv5YziRE0SgeIOw+QP6j8e5Bh87f7cLZo8AdcOs6C+HsYNICECndTm75XIXedbPzS9MzS/7qZ/WW/nJu5T3NFCGbbLqCi9wDxSer5JJrFAr/rmqR7LNymODy0/ZtPLgI4hnLP3ndmaNuMTKbH4UhXgCZUrDxFGy+O7Rkdvv6elWLvB9mggupZ7Fg1lCm6X2KMVMAIP+u3++NPnrD20EWHaAFje/AqTLYiQp2xQuvVC/Tu2wOmJeHEF96CzcVIFNTRKclPYB0ejk2pjh5NlX+yaWa5Zk7JRl4qgGPaba60QLLgAZ1EJFSfdCKKOoZhRfMNvebU6c+MkAOnJe+2XcxseeDAHESSYnmPIfaN6jY8ElE76Izb6cEdZftvLDWKzgsPp8bRKsdOLMDOMkLTuWuv3GZQp81K+gYl96x07tSWJsV+/6YmUzNYYpoA6xjD7iBEIAw5b67U40SzZ6PgF1PyiL1KDvhITerO2f7HxsDliiLnKojoHgczmsQHrh796XqpfvUy8kv/zegSK8/Wz2s8cJtZ+I0RzZeoQwCigwRYU5gvhQIY354vmS+cbUL2T9+GEA23fJ3XXnk+pQU0Wl9ECDR9M65t16ORSX9mRyDQc7XKqsr6ajkCqiEUXSWBgGCViaBEZA1VQdIstUOF01md9vvpjaAmBisi5UhJR05yIHz0rf7Lib2SAsQngXAwikQKaWcH/xShcq5yJM58hnNnt9tvXYyiZkjqIaubhNIBGtyBSCcueC5Ijlm1Cga2S89gG5KYr3XHjrzqZtZIzQhCBDECKYKZ1Nd9wY1KVamGCF3HmUhP6m2vySq7X4+dGWOS3Ca0EChMar7miyKG5ze67e7vRxbs5SVXHrc77/AWPj0DWfP3RdsOWTBDD5VBYvFAlrAA1GcApUKRi1sWTyyd7aHLPJNt/zdVh65Pvk/CZCzz5dlHr1og6bb73mKDiRRPygN62KhTUjWNFBEAe7brHBZNHs7TplWH6pXx7pYGQbI/nhp8v4LiW//jw7CA+QA39kR9YvGRj0hOTOJsfAvdl0/eVsz5UcnXkBWwMsAbBYe7MwF1QtEz29SLLLXgyISKr1r7qiDNh05N9IDtjAqOPRyqWg1Q5DkJJ4b7zcsWOJJAftRF/K2BG+vNSdvfX2fhFk0PggQnD+b6oII/53rvVrGVnkSYEY6TTp0c9vvt311AyYLaGYz+BQJrBwBJwtApTzha14uk63zwwwhqQD5NkV02tLjIJ1fjo15ZjrIH8+Hqpqg+ZPqhdzQ/Eo1rO4eBEiAqiCbBHBZzXBFMHu7fTu5AVSriQDJkAtW5yDnpO/2XUrslhYgWDAbT7IqYJYu9q5bqOqTslSgH2PiLxdPXZe5wlaGx4hqIPEcWKwCCIoHYgvl/PHlIhE90gGIsPyOPGLrsQtDfMTu0IhNNzXjwkMxK68gX+lXL3fpZ617hID0yw13zxVHE766L0bZ8Hw7gg5ZWYFsZgrRNOVit4alGhQh5MqjAu+f2qM3/Js913aduOOuJZntoFoseKwrWAQCVtkNVfJGrW1WJqJLPkLupfcsBMiqIze+SRbD7OnoIOe7vBxb/ZkB5Nf6sfrxB+gHwVAm3dmGtXPROM7rwhYEGIpYHHgsZrjO84F+k6bWgUoZ5yBoXdl9Xv5u/8U7XdMChOE5PBwPhczsTPfnoms8KTkT3z/78M1fL3mhnFmmejkjv8BBAEUPXoPaRfLNeaGg/d0HFzred/hO4P2tJy4P9ENYmAZm3aumoV+AA8hjZrffqRNdrRhA4u2gTQM13j83DazaGgCgYeif1I3awMyplrfk1ADMiGAbNR+AhmfUW4OHEuFDmDf1wFMhGNhJ8mEEBlb3e8hn9+2UjosOXpnmseWwe1QNzFY7UEUDBwtAdu3e7Q4vlq9XgZA//mnBP+rf0SDy9a5LBy4H+BiPYIH7kgJmuwM0nwec4IeYQtHLXygV3v1hG+DmW/7uK45c/zpFdDr+cxxkxYuN7ktywKepgTA8g4AjnATASZTxCq4FglWmRYIRbSYXx4QUk9kz5IsJb9jLZdyKhQtt73l52t6Ldzo/CBBOECEH9f0xvH6+ak9KVLnHmHPMjivxt1lYtCBjBXkB3FjRkZPBobmgdpHc0xsUcQ4ojOdPp/kg5zt2J/DB5hOXBgZYmB0BghxENxMTBjai0mr5sv9kA1ljhIqU1+vjcxQoRbchRynlGa9x6Kcjwfp4Kq8JlGOcRjSBEYIPE0WUYDUqo1Nb4zAQGMVcxCFPGdVEXuQljtNkwe/3VS+ed1JRCzmf3iLecuNej5XHb32dJETYVM6sFwdHMdmueiGHdu9mxyblapT7G3/EowIj1B5FrK/2XNsX72UxHmIGmRNBIxyYqAJ2zQ3VCkSueaNMZMf0dBAE15bbgW7/WYCw8+ejAU+ZJbJDd5ViSRGTiYFEFDCbca4ZqN5wsPN+UIVgGZLCpfF0qYfuZA8SGqua7IyXp++7cOet/xGxmAr5RfXUu/UKojMoQwfyPOpE3mQGPkkyAAAgAElEQVQs+pNtVy/cYrYwJ28FfyAAqlXQ6xFHsRQ1Jl/U3G4lsvd+cEwIkON31BEbj50f6OfCHVQHCK505LUUeNDArEgaz1Smx5ThGY34IXpMGEOeITCCofcUvzMCgsZRPPsRj1/hGMaiMVGP3TdrTCWMagpPRY1wlGfon0NPrcADVSjTAoFwIt9r83zlnlWcsDU9k/SWG8k9Vh678VWSEGlXeTxlm4DAeHCoPgTI1bdfLhdbmJBbj0q/f2qPEc7b91/bd8FFqnk4MygE341BmxI4VDdULxCxolnZqE45CPE8+Kw0APkqRXSG/ec4yD8NHv/O2HkzQDEGcJnL6KE5aZ+rA+ScPHPfpTsdHrRi8ZoPCtno3rdrl2j8JGR5nIB9Xmg8Z//lVfeJw4phIKhDCGEO8LvuQD6LklyrQPbpbxbJ9sGDOhX2+8AdddimYxcG+4jDzojlT4BoLFgyNW1wJIa/BD+oHKPJHI0euFSCJ3ehIxbNw6ErBqRoxKyHx5gxtgcoSDwmW2BMWej4epTJMHbKB2Fyyp1udcq3rRpGtqc3b1sTvD1XHr8+8b4QbtfQ2YbaJKMQpvggJ71/9u1Xyj+X/29CPjKyFtJrgxLCkoMJ+y+kcJW8xAyqDhAAkSoQriZD1QIRy5uWy9YpPQkB9ZdNNwPdVh27PvH/WYBklnCh+3Ch7TgfmL3/4t12DwLETCTIb2VHWj9X5M0cALdxHeF97lRZPDIY+6MnQqkAmoTJUAA4BTzK/EkAUsjpdVqP7QViB8D9k08BsKb4ociOE1c+OuHiX/JyVuCUAJhNGGYvAC+7ISdx3361csn+9aPNPz04Tpz43+7Q4ZuOXhjkJXY7hqzoshJmrmgYeRDMKPoTFqkBZAgMBAQCI1itMggYHIkOkNQXaVjiFQRd77PoVfQB/CIqGhzw6IMHTg/zMYkMTMQPDl9iUpda5bvGRsDG9ArqbbvmfXvF8ZsTU4TwMIqBVnpsGkCY6oGcNOVkh1fL134Syi7O74IDNw5ecEN5H1j0cHo09mBMVpiaDNUKhC9tXC575/Q2QBTPNt0MdF117PqEFNHpTI+DdH05FjnfMylBmzYm8N/i4KH369Gw5wOzHgQIAUlfOE6i+GOL5FpipbKPcVZCNUyrUJmiyYJZRDc+EI4KCAggVI+v5iSOM6kEwwVxHf4ZzqhHXKqUCbJMbZKmmW8l3S1w06UU8FmibQEQwI6hAZoMfr8COWwcOLzXL3d9tXqTUoScfXAA6Ck+fweGbzxyYbCXszoUDnNPglo2FtpGUUs/2yTIZv+8PXScNoaB42CCbOZBg5/OV0DT/TEAFpXqgPMhQLAmMhpLUCYTBGAUg1ZcEKl4Ezs/X6FTlXASlx6xd1zzd195DDlImBP9IHpfGYBDc0Nu6jrR4ZUKdZ/EQkNRdPn+GwcuuKGShwQBgh8ESLjiMgDyT8h6GEDQioU7BpW8kMfGe2lAkjUwWTFageOAaqqfEwUVY+g4TGYgjKOiBiolHCfxnKBi/oGeLBUMmg8m/uBZh6BHhCqMQoDJINoiQIZwPa9BAC8w1Q8W3oSxSVDEHtjxeoMKLdLbWXHiT92C9zcfuzjIw9nDUPlEH4geAAYqmDkKXMCbIjJN0QPzGR7niEFaIdRQrKOKoU6MhkKVg+3w/+hzJBrhzDwFaqHUjwGzXjOY0UcrUE7BNAt8H2UyI5zMok2Q2KJyuRGVc1g2pEdznYOc0AESFkrIRPOZQ/NCLpZ8vEvTSg2ehIiF0drj9yXsi/dw1UNKelqAVC8QvuzFctk7p+dJ1xOmbgYQ2OMNDvKAiMVA08PSNVkGm0CBqaiXOvSd1WrCHdYPmhLMtCTMBBzlg/ZSAhDAGr94PAOKMowCzzCROVidHmGD5yBqmIMrYnsRFB8HIiYuyYkgEAkizeEgeJNcL5YrMOqlQvbv0jM6oPKZcANGbjl+aYBbCAuTSNAHwhEKJqDg5AL3XqtRqKtTAX+Ij+DJDrh/pvIN3WOC/cfvqYtav6KVCnFGBeDxzCAzAxm/e0X9UC9iAVA4BagCmGCCuooqWpSAWjHCsZc8JDQ/7qa794rj18anCE4byoHIhZBeYaofdZATXV+pXP8JAYT7eu+1fWc9JNZDrCDxQf3JRCVwqslQPX/kqpfKZW+fGYBkp3fOd3s5NuZJcL5/2tj1dZeRRv+2zZ8c5EJSUAcxWfTz0FF2ooKoLzpMPGIqgELNoKoaWPD0UDwznZNT5fagMiuirI6Zgugp1sOi0FKDIEnNJ9HQVYEZIzxg5nqASWDG6OEAxYoJYDPLwCt+YJ6AVDFf3u0tYnO8lYeQu+mNEeXj9QnwwZbjFwelmMOcASLogZsIEOQe0eC9OqBB0cr5APT6wRmNLPg7eqJRIZhu8dd8buyLnij5N87ZdbdTeq88fv3LZN5pRwsy6h+Yn2JXA5BD857t8Ur5Wg9z1v2bOca+jT9wbc95N6vhA1TS0cTM6fQO0xAg4WteLpu97cMAsvVmoNvSE9cmugRnGDJcgeP1fCEMd89GE6/0bFqtypMAdkbG/NQAsu2cMnvvhXttXbwDKC8CrwZz0f08JjSJIHlSwIp5IsQCTJHBzKlAtQAQnVMQUPSwl6BlJJi7gADBX1ARxq0Y5X2mOzl1lQCvHAMeLdYBD5gZAzsmOPlTvFZNvVuuSJHNdctHfV6IPDw2Cdn/jpvQZ92hPz502aKyJ6PEZMbMQQmsoEAO6rr0fqMylR4WY5SRCXicbTbe8r+96Ojlb2RHDqusBIDXKIRjyDkqdV73rbealatU/gnkdicyFjbjt+u7TidJlXD+KDUBgC2Yo6Dcgzqlcv3cpIit80OsWGTLdV/Pn05f/dJtiggzURGIRMFGgkaUbKbA3Q5NSlQsRciNx0mrjD7rqQAErUF7zsuz98bfa+/i7XroPK8G0EaDQpSehWYnRBNQDkcdQ5aoTWQaByqvMmpCUUohIor5TKSyhhmBDHgebUN4/pWuvOvZhvo1uMXjFkoo80le1SwwxcJTOcoi3C2SI/pgydy5lkVGwJF/sujgbr7jijp426mLA29y9lwuwQwgBAFiBxlyUtfV3o3LVCoAkJLRsJuMTkxm2m2+Eej504lrX7ktkTZNDYAJ0xUkL4iyBDaNJg9sUbHSkwg1ucWYfdpvN/decGkVObQxMjOo1AKg+cHMkqFWsejVr5R0tn8YQLbe8HVZcjZh4j1mi7CBGTgZsxIJmNHRSHxJbzctVrE4IQmZocm/veepAETPB7mQMmnv+Xs9UgQrhwDhNAlMVAY0UkWK5GrV4gXm2znqZ5QENEliFgGTpnRxisPcRoUXOMooFZmCiUfoq0bJSi+tEUzI1TNwOY4IKpqyCOruwEmOMMs9mx2uOES4Hgbgywngf5TFvPWqMnDn71eGXFHFXJLZCUwQAOQAhDEVsrOUawOalKyaK1jmhj4OESuzE4rcblei1nnRb5cnJ4sOm8pkPRbKQijwkg/sjN3r9GLpxhUBTmS0HE9G+3KJsYhv4s4eSwRbQZ4XdClARZ2RSWBjKVCjSPjS5iWiekY+xFS7+77aYsGR+Dl3mCXcylmAKJi2DGAFDUxK8v036pd9q7aTrMtofx5nu6cJkG/2xN/rliJYBRWzYqkEFi0Adjmg5rHAyTYNyjQTAO4WApDTW8CPWh3+cRHp1/us2bLdp2fcEZ25/CaHrvyDpEIYqBCp3r//ekzBnsWjTRsVAA35SxSA73HnW2R0LCf8rM53W8+udlsiIlD/IkwF1e+BMIsAYTwXqFOm0Cf1c8J3jzNqGoG5PwlemL/n/CKvxRkpCgIoKlZ5CeogkbxbrV8m9+e18tq+TM+TjmM7IbHyk7ae2umxRkUJxISBA0HTN2jgFFWtfG77skalono/LBo4o/TJTLunBpAD5+UZuy/c65Qk2kERzECwyocmgVPzQy7Oe7xP45K1n1VxsL8j3OkAKzZ73a87Upy58nk4GzAsn6OoYAcNPdtytXz2+ZVKRE/NZoMrqPWYAWQ0tKETU9KTckEr9peiX3++DevY8JiAjJwwCsCf6izR6yJkZpc/x1iRiWtOH3RborPzogX8sgJWM6avysD8HiiR3XamacWcXQtY4XT2IJA1XOB/FosJdi3k0AmtjbSF5EKVf3RDwnUA520XVNt/Nmno0UR/A59oBV4/4hvtkAJwqhecWtLdN+tU6FbXSdY8jM7IgT5bdfJkIDxnPvQLyQrWG8ASSirwqguyC9L9l8rk+6Rk7ogVDoB7KQBKsWAgJ/adnQYgZf/vGqo+Eupr8FDMv1Yt0u/D+38DIFWDQaDppm48FYDgATqLz2rTdl9I7JokOkARMSpWAZHKEMZkyE08v/VoVKT2kwg1ycyukfaeG4xln77p+I6bJKxcMrEC5e2AhQgtVAOb5gObfP9y3mz289kiIq6Eh9nu2G2mW3jcosBAsYiQzDCAS5/LYFkp1I50L4kGoAggKpTgEmYmynkFpmnoGwwWwkvNvWdgogRMDHPCNYXls4j7i4WnX6YIF9r32y7vSQgIZYk1DPwq1SvSYPQynmAczgcgwnf7VPFox9nc0Tn/cNgdNygRRT2mEfQcf33FYdQxRivglWAJV9To9DoyGLwKnKSpZtnvd3gUJVfCPU+NC3c9pdSI3LwXjRhMBdGED+RA8KdAlJp8tmvjKk3L/03pH1wfH26P33+TmqpIYAI8bxkNOWjlNAkUzFIy5GTea5Gccq1gvtzH7GbrbYfF7rWZrMmyCuF6tUf02WJ4XBrLbKhUbSrx0wIddzC9zKBCKTGD4stt4U+UiRR3PbhenhZA+OVnvOP3xd95+77ocGB2ItNSy/eoChSyKcffrZf/uYelZP7bRf5v7tcjkc/e/Xrv5bvdk4lNUAQ7UIJmSBXMBIvxasAUBcvoMEHgJJOItVRVqimyxqiG9gW9YojuaseqdzpvoXpNIJUHInGo+aN1jvp4phKNo1b8zjFBwz2NUhAFnlGRaHI4yHeeK1ZgRuPiUdPSGxOKoT/HS+N3nb7aLWAyR8gmMyhmG7gkWXecOswcWLxJEG23MiWgsoDPr1iDB9Pj/snr8TyhuJ5gcCX6OEPrj6FFERc+aoZU1YjENFE2ceDBHFRHdl20As2nV1rkNRmsspeVizStfCG2aKdy6QQqhsag9/tqyqfbT1/u5eftkRJv00srKVghhRGwEgCbPwXMmgJhDlsyU5mmBFg4VShnwtKp2MmgczYtQPS1jdEOD3FnoC1UZUTm7NR3t2qeyLjGVYoOerA80dMDyB8pX+yPv909WbBFyKJZT5TSe04JFA2jv77zXK76Tyrc/d8ABO/d72b1ft59fH4K58iP5XQ0LJmqqmASzIBB6jwWTcPJVFRQVQXL8QLP88CwtNHffNBMrWKpayzApqnAgQoqVmLEbTpklSPIcFTgJBcGHd54uXzxiS8VjfzqYY89LbGyC+NOL0umpITmCOfdRACfgKWWwkCSJL1aNciKfohqmM0OTMYAajU1jD/oaNXLtqa5oqVQT2ZJ/R0t6BhGrwkaeDCbxWQCnx/AIpr06pGC6tetlNECvdOwZMExTfM7ZvyTyHicsZJz1uxZLgtRpSSTg08BHmTeAkxEkVYDO1P1DEWfzwMYW+GwZwNFUsHEY1A55hNwf9ItRD+86rWLUun54JWArPvbBF8iOjPXvVapYGfnA0ldTwUgGNN0+Pe73xxJSOrkNjmsKVgmFMvDYC1bhUIhs/Jrl9r56zypcPd/CxAUXX695B5x+HxCx3sy5AKbA1RgIOlOSROw1Ch3fSNLjejVxRrMGwnVsg3VhAzuaPpHjwLQeD0SAK15GI4pCVjHN7iNY4w8PgOtQSbNB1EscOOlUoXGvVQw+7d/I89bDv/hHXs8PqGdB0y5vbwZfLwZ/JxJz4IUMQoZeQDVbYRY6grQMk4wmofDBfXXK4e2RKyGmc7fNV4FP/OD1WoF6g8W43NiIK/fBQ6eekvnyrbx9Yq5Oz9MOU87BuQia6763ztwLH7gfZUrwEVkgySZAjE5dJEWi92heT9YMBAZhU0fj0b9ev8wiBTp9ShXFDtFImMBQaiay7n+tYq5O0Y8UB/tqQAExZTtZxKnHLpwu32KyWoJEFEHCK8xsCkARa3KvtfrF6n/sOqG/3aBP477zzCW7cipex+dunazuYuSXMQsmjXBDC6ZgcaZdO8vjgk/yB01lQW5JI87cqhg6l9rDSMOzAwrx2DKIYbZUAiIWO0+2GO8YnE6s0BB1AIQrnlv1i+af8prxXN99ndjwvKjR39PGXzw9PmWisVRyMuJFg9nAorOVlQukCdRPI5b06tD/l+Y/v8+NVVE+RPoacQWHVhAZKxgAKKiL1kQNMlNAu77JfLm3N+oev5BJQm5nlH6Y8TF7hNJH5+4eK2Zh+NzU5vT4VYxpzVYFBzPZsDsM4kRUDSTfpy4yawHFmX0FX9pxzEViOIHJ/VDtTyRK5pVzt3lQafvUwEIcpDj55PHH7mc+JabmCICPHpaAahfggggUnEHt/m9OvlbPivzaEapiyWEdt+BBodP/tH3huteUWq2h0uiI0pivJnRYLg6evKRe2C4C370Q0pCwe6p3CP0XV9sep1cBoKOJgoqMpRUoRn/gaIa7vKc7NOcTL5Zv2TRb5sUD5uYEV/O0bty9X2nTvdJUljhZJnl92pcNuBEKxEtAgOL3kdFB2ZGKRBsFwINiiia776cPczuMUvg1XweV/7skWcqlioyP1dO2JyZMk4YtnIwCRocjr/Y6UzCzfKcPVu4zHi7SomTAjUpuIGgiMuHAY+WskDgkarTpx0pVg21cgzsmtddIUfE6jrVCrz3oCn5EUnzaIQMtUZT4rpzd/ufunyruYeScI038YKAJ0AzAl4ZikaZ93R6vnD//zpA0oxHiAeIPJfgbn7HJVf1ylp2r9fnkBTJTlWGFSD1fVo3VvJYR0UvUoWyC9NT/tGihXZMFMcIJiNSymtMz9DUBIL3g6hxetqJqmFmh6JRqtAIkdysXqTgoucLhy15lJn4nbHct2/7695Kdle95/EV9AW07H6FOmSVijyHqfT/E5MXLMaLccfBKOSQmTQEEB3DHKFyrmxhZ0RVDeS0RZwtnNu+obQT4h+HwxSdywGAiPiEQHOvQgu4PIF8bp83h191OX1AbQq129AQbKFURvrpuWto/9CCQRWpxgZkOjonfuAaHBlHierziU4B7pTOk3Pdq2Vz4sbzl0zZpwKQNAsrmAea+sEiBY5UP0BG5NRHWRRPq20ouDD1fX+J2A31Ae30oX9jQld6fUtN+oK0bbEdtpeCxR4wwpf7N6bw1L7qlp7fAKAqAMSHCuan6RS+78E+op8hnX7jb5ny2Tzq/KT6a5B2aOPmMSkO8eAOlpvV+xYAYDim0Nj+6Yq0tqcWyvADaOnpwE8VII9KFKO9QYFnTQEDIM96Boz3/6cpYADkPz09RueeNQUMgDzrGTDe/5+mgAGQ//T0GJ171hQwAPKsZ8B4/3+aAgZA/tPTY3TuWVPgqQHkzp07jhw5cuilJ7FMTGoGnh4jgN8fl5MQPbFpA+PSfsew6odVBHkcExFK6nqU8TxKItjftUU/wT9510Pjf7B/GCHwKKVk/6nPj/q8B2mfdiwPjisNjR+pz383v383nqcCkAcGrA8svUX0QLv/AU2qsyg0VpKa8INXlnaQjDELISTwsIEzxqyEEExQeugnvUl64B0ZWZB639JZAOmN7S+/heiT5vqPVU1SNxsMn1cekpX5P4sqlabo7EsNymcYB4QJRKHN6y8bTuo79L4Eo07+TLrCZ0vpETTNov4LzUJAYoyZ07s3tLmlaffYNtLUcejrJPXff9ImtH7w96cCEHzR2LFjx8myHGYymSS/328ZPHjw8Llz5/Z/6aWXVpQsWfIPgNvi2LEzxvTq1XvMti1b3rx8+WLpgCSZqlSqsu/V1177+Y8/Tpb6eemKblht0Wq2+oqVKH6qVas288ePH/exIkl2URSl3LnzXo2pUeOX4sWLn0eOdOTIkWonjv4WW/P5OttWrlze3uVyR1qtFo8oiorT6bz/wgtN1mzZsuXVNm3azImMjEzGxbJq1ao3tmzZ8pKqqkKFChWOduzYcW54eLh+hPGqVatahIWFpTRs2PDP2rjfTvp22CtNXlhVpFSps1s2bmm6Pm7dG7KsCN26d5tUtWpVdOb++Tm8/3Dsuo1r2/CcoOXJnfPG661bzwkPD0/GPnAcRxs2bLgBFyYujPlz5/Z+Lub57cXLFj/9yy+/NFi0cFEvq9Xqb9Gyxby6detuP3z4cOzp06crderUacbmzXEvV69eY19ERIQrtLATE6/mmTt3cY8hQ4aNPn78eJUVK37uaLFY/JIkW0uXLnmsdeu2i06dOlpx9ux5/QKBgLlNmzYz69Wrt58Q4p06derAX3/9tVa+fPkS+vTp81nOnDlvpx1HYmJinvHjx3/ocrnC69atu7lNmzbzUjcpbvfu3bXj4uJei4+PL12pUqXDb7zxxo/B+QX47bffqmKfO3bsiO31XIDZs2f3jo2N3VO+fPkTqZ5++PTTTz9u27btrLVr17a7e/dudp7nJQSJ3W5PGTp06PjRo0ePHjRo0ESn06mfN3Lo0KHqK1eubHf9+vUCxYsXP/PGG2/ML1269Dn827FjxypHREQkFypU6FIIqImJiWHz5s0bMGjQoAkY3bNp06Ymq1evbstxnNqvX79PS5QocebPXfhxiBYZeUbhwoVp7969v4iMjEwUBEHr3Lnzt1OmTBm5f9/exgsXLa47YsTQWQInaB+P/axXmzatdueMznm3QKGCZ2bNnNln4lcTu8iybP107Kff9X2v7weKovL58uW93KRJ09VVKle80+TFF1fnyZf34oULl0qvXbP6tUnfTOr8yivNVyxeuLDzz8uXvT3pm8mtt23e+NqpM6djdmzf2fS9fv0+yp0jV4IGKv/F5xPG/rLrl7IofvTq1WvByZMnq/To0WO8w+FwL126tPvdu3ejFy9e3BgXSe/evReUKlXqxHvvvTc+xGEaNmhwZMDAgWMrVqx4sEG9+qeHDx8xEtlZfHx82c+++OzdNDszmTVjVp9Vq1Z1e/PNVvPXrl37ZmRk5K1Z33/ffOiQobMineEpwz/8YHCIYzSs3+DYkMGDRlWpXv1g7VrPnxn+/rCRHMdp+/cfqDdt5ow2C+Yt6L5+/drWPy1d+sK4cZ9/vHfvngY//ri4eVhYWBK+MyEhIV+TJi8cOnXq9zzLly9/c9y4z8f17NljIs/zNH/+QucrVKiw/7nnalzt0+e9r/LkyXNly5YtzWfOnPn6vHnzes6cOXPgiBEjRuzdu7dR7dq1Nzdp0mRtaEHjImvevPnuQoUKXcbNDdt/8803byF9fvjhh54TJ04c3blz5+nlypU7un379pfWr1/f8vvvv29Zs2bNvStXrmw9Y8aM/hs3bnwuJFq3bNlyU6tWrea3a9duXggghQoV8u7bt68kblQej8c2YcKEsQMGDBjtdDpTOnfuvDBv3ryJO3fuLF+iRImLc+bMefuLL74Y271792+LFSt2/siRI9WXLl3aefLkye1feOGFzRs3bmwybNiwaStWrHixaNGi50LcqEKFCpfXrFlT3+PxhON4vvzyy95Xr14tJMuyeejQoR+FuONT4yAlS5b04EKrUqXK/rQsrUH9uvGvvPrq/IU//thr3fq4irlz505s3er1PS1ff33Bm2+2nTVwYL+lURFRdypVqrB36rRpIzbEbS6nl8dN3YFiq1a+9e23U9rF1qql7+qrli9tN3rUmG+OnjyVa8VPP7Wbu2BevzXr46rjolm1fHm7qd9NGbFp2/by+H3j+vWvfzl+wtjtO3eUXvbTT2+Nn/DVx5u3bsYdRy8Eh5+32nfcmC06262vJ03q3OfddxeWKV36WO8+fcaHJrhBvXq/DR08eHSO6Dw327Z/c8OOXb9UzJs377U0YoEe1os7+8yZM/vt3bW76bwfF7ywY8eOV0Z9+NHEX3bvKj1m1JhJVqtVHjZ8GAJEj5Vq9kqzPT179JxYsEjBs680bbpn9549lfPnz38pxCHmz53bY8OGDW8gQL788ouPfvzxx345c+a8smTJsvqRkZHey5cv53vtteY7jx8/UWjZsp/aL168+J3ly1fVTp14igCqXr3quW3bdsSULl3699BzP/zww28uXLhQauHChS+HdLkHdYoKFSpcGzhw4GedO3eeFlrU8fHxRZq+9PLBufPnNXvuuef2heg3/bvp/ebM/eHdA4cOllqxbEWbRYsXdv95xfKGoY2jRYsWOzp27DijZcuWevFwHH+ZMmWur1y5sm6pUqXOorhToECBW0eOHCkdHR19EzeQ3Llzu3799dfiuBHVrVv39MKFC5umfefcuXO7jBs3buyZM2fyxsXFvTxs2LCZ2M/Fixc3LVeu3DH8d9WqVS+tWLGi/unTp6uMGTNm4vr162umPl8XA0Pc5okDJETcfPnysSpVqhzVa0tTyubNm9c4KirKc+TIoVotW7y+ddyXX/Z68822yHpp57c6bvP5fWHFS5Q8vn7d2jfGT/iym6ZR0rdP358rVqi432QxucuVK39kxIiRw6tVqnhn6tRprarXrLk7VS62Fs6fz7N185YKx04eq7p40U/v/LxqdU2ckE1r177xzeRvR27YvKUSTsau7Vuajv74s4nbd+4o1ePtt1cWyJ8/fuRHHw0JcQe9buzmzU3fH/b+rKPHjuZ6p9c7i6tWrnSoe8+eX4fa1IytcXHc+C/frl279o5ePXv9dOjQoTr93+s/qlPXTjMe1LPm/vDDOz/+uLBP3bp1Nm3fvqNZj7d7jmvboe2sD4YPn0wI4cd+9lnv0MJqWL/h0X7v9fm8WYsWSwe+1//7jZs3tXj//eHvN3ut2TIEMIJ94eLF3SuZ/dkAAA5+SURBVJb9/HPDjz8e/bkkSQ5Zliz79u2vt3z5ylpms1lGAMTHX8yxbNmy9h9++MF0FB1EUQzExMTsHDr0/VEffDD8659/XtGxb9++49q0aTMtOjra/ccff5Ts2LHj+pw5cyaOHDlySGxs7KGQYSMVvHTRokWdPvroowlt2rRZ2L9n/3HRBaJvILeeM3fuO5u3bIkN6YqpC81WrEjRG2vXr3v+1PHj1RYs+LHX2g3ra4TG2aJFi51t27b9vnXr1gtSAWIrUKDAvZ07d1bEHR+NO7GxsZe3bdtWtUiRIlfw2aVKlUpYt25d7d9++63GtGnTBu7cuRM3QFzUuo7CGLOVLl06fu7cua29Xm/YnDlz+tSuXXvL9OnTB86aNatVtWrVDpYpU+bO5s2bq+TNmzepZcuWcXfv3s01YMCAUSGgPlURCwlbvHhx75gxYwYULlz4HO5MNWvW3ImdmDfvhz6jPhr1VZ933x03eOj7H+JvrzV75bfq1avvLV6yxKkyxUsdLVup0uG4detafzz24wlTp01pHQhItvBwZ1LZspWOVqxQ7t73P8xuXq1ajT14b1JSUnhM9aoJv+zaU3b79i1N16xZ037p0uX1kHDLlv3UZe6cub3XrY+LRYKuX7+m9cQJE0dt276zXM8e3VcUL1Hi5JAhw5C94k6mK9i7d+9o9Hb3Hj//cfZ8RP9+feflzJXr+vDhH4xItcRxDerVP/LhqI+G1q9ffzPcBNPGIxsbjR//5SdOpzNp5ZpVDUJlRPF506dOH7hp88bXO3XsPPXAof11jh05Wm3jls1VR34wckq4M8wz9P33h+GGgha+15o139Or9zvjUYzBexGo478cP8Zus3lWrVndcN4PP/TcsnXbqwsXL2ry+eeffixJsn3UqNHvDx7cf8ahQ4djvvjiy97vvNNj/vHjpwr/9NOiTvPmzev7ySefvofptQ5HhKt06dIncZw7duxoNHny5BG3b9/OsWbNmueyZcvmwgU2efLkvhMnTvzo/fffH/nOO+/ghvAXBf/06dNlJ0yY8OmvBw/VXL12zfNx6+Na7t2zu9GiJT+9kEas1BdsjuzR2pZtW6tfio8vNW36jIGbtmyuFlqAzZo12921a9cpzZs3Xx1SmAsWLOjavXt3qQIFCtxADpIzZ87kw4cPF0n9bkIgHzt2rOjWrVtfXLZsWZf169c/H3oeiso4feXKlbs0e/bsN+/fvx+NAFm2bFmj+fPndxs9evT4ZcuWvdyjR4+lS5YsaVCsWLF4nMslS5a0+/rrr0eWKFHi7IIFC1592gARCxUq5IuLi6tcpkyZU6kL0JKYmBjR9KUmh0d/PHrg4EGDv4/buLkCKlOdO3WMa/7aa4tatHhd31Xwg4v566++/mDrth0V0+o8lStVSJw2fWrr2Nhau3EyNm3a9Gqfd99ZcOjX3wrt3LbtlUVLFvVaunR5HQTEmjUr206bNn3whg0bq+Ekbt4c12LUhx9N2H/w16JTpnw7bNHChd337jtQHgCk0CQP7N9vkdvrsc2a9f1rQ4cOmeWw2TwfjR4zINSHMqXL3Plhzg8ta9SosefWrVv2XLlyeW/evBkdU6361a3bt1UOKajYfv7c+T2279j2ytx585rhxBfMX+Duho1xtVatWNHuzp27eb6d8m3HP59bqtTtGdNmtX++3vPIGTUcGyqXNWJir61YtrLBufhz5ZYs+anLzyuX1//kkzFf2Gy2wKBBQ0bjDvvxx2M+W7VqZUdZlsnp02fyLFq0oMuKFSs7LFu2/KU03ACBiAvYn5KSEvX888+fmjRpUucGDRrooiq+b9WqVW9+8cUXnxw4cKBE6pzpZvK0Jvv2bdttiY2N2fFS48armzZ/bdf6uA21ixcv/ntoHMuXLu04avSYz06ePlV4yeLFHZcvX9lx2fJluHHon44dO66tVavWjl69en2FfU9ISMhds2bNs4cOHSqUJ0+euwjWYsWKXdqyZUtMiIPkzZs3+dChQ2X8fr+5YcOGx9avX1+rXLlyp0JiYlxcXLMBAwbM2L17d4mTJ0/WnjdvXq+5c+fqCXkLFizoMmHChM89Hk/Erl27SuTJk+daUlJSGG4MFy5cKN6wYcPT+/fvz5srV667uAaehoilmwlLlCghd+3adXKJEiVOo4WoVatWPwwaNGheeHj47VGjRg0cO3bsxN9//73SwoULG7dv3z6uWbNmy9q0aTM7xDZXrlzZcdy4cZ8PGDDgA57ntbx58yYgF6oRE3vzjTdazc+bN++Fyxcvlvh+zg89xnzy8YD27dt/v3Tp0o4L5s7vu3bDuhicjNWrV7f55utJH2zfuQNBAHFxcS2++PzTsTt/2Y06CW31RsudLrfLOWzwsA+tDod30cIFvfbt21d75apldfLnL3Zpw4a1LYYNHTZjxAcj3i9TpvyJ+XPnvLt16/aGx7eeKLn5SFyDL8Z9+fFHH44afvNmQr7PPv/i4117dpeOiopKCeUy/DDrh94rVixv806f3hNPnzxZYerUaX0vX72Sb/fu3TGd3+q08sORH4wsV7Hi4RU/r3hr48a4pjt+2Vnl0qVLxXp27zH3408/GXoj4Ua+zz//7NPfjh4puXH9+ldXrlrVZvGSJU1GjRqFRgMROXSqNYn/7LPPxixatKjjqVOniixfvrz1V1999eGgQYM+V1WVK1269Cm02HTr1m3emDFjPvB6veHDhg2btGPHjsrjx4//BJPZ2rRpM3fatGlDsd3s2bPbhvwkCOxq1aodHzJkyKfh4eF3hw4eMmf8xAk9XnzxxU2fjR370dq1a1v37t37y6KFC8f/+tvRGlO/mzJ48tTv3nrxxRfXrfz55w7jJ371Ud93e3/BcaJWo1aN3Rs2bGgxe/bsPqNHjx6SO3fuazNmzBhy48aNnOvWrcNNjSEYq1Spcu2XX35BkesqSiO5cuVK3rt3b2Xc/SdMmDBi/vz5PYcMGfJhvnz5rh4/fjx2xowZg8aMGdO/devWizZt2vTajz/+2A25Qsi8v27dupa9evVaePDgwRJ79uypu3jx4g7Dhg37ZM+ePY1wzRw6dKj4U+Ug+LJ+/fotxkQ5lFtwh3733XfHfvvtt8PGjh07AM2oKBp9/vnnX/Xt2/ezzZs3N6taterBypUr/6nsHTt2LGbmzJmDLBaLz+Vy2WvWrImsedrI90dMd3k92RRZ4kqUKHWsVu1aW2NjY3HXhZ07dzY+deJU9Xf7vvsFAuDgwYO19+7e22jg4IGj8O/Hfj0Ws3331qYDBgwam5r4o3476auRcXEbX8eT0KtUqXKgX/+Bo3LkyHEvZBRAPWLNujXtvF6vo0Tx4mfe7fPeGFQm8XlTp0wZsnbtujbZsmW7273H2xPq1q27La1sjOLMqpUr28H/rxq63eFwd+7S5TvUCxBAq1esbrV02dKuKSnJUQUK5L/UpVu3STExMfr4p06ZOnDjprjmaMbt/NZb0+s3arRl586ddU6ePFm5b9++E9Da43a7I15//fVFaXf6H3/88e0OHTrMwveuXbu2jaqqJrPZLBUoUOBsnz59vp07d27X1atXt0OrYvfu3Sc1adJk9fXr1/OPHTv2i2vXrhUqUqTIRZyfsLAwNKcGy68AqHv37q2HliNRFNVXXnrp565vv41VS2R9E1qxotWixT/1SEq6F126dNnTb3ft/HW5ypV/w8WOpuOfFi56W1E1nuM52vzV5ovrNay3edasWe/GxcW9gfNatmzZU0OHDh2ZN29ePAcT9Qrxvffem/rBBx/0R+6MAO3fv/9Xn3zyyYdo5kXxc+vWrS/MnDlzgCRJlv+vvbO3bSSGgvAplgtQBwqvAWUGfF2oAwGXKHUBLsBQNdomBLiES5QZcHx4BLl+orjGJeeZ4AsM+EfaN/sNZ03yraTNZvNnv9+/7nblP++Py+Xyc5qmX4fD4aUN+rjoTtP0uN1u39br9fvpdPp9Pp+fYoPoeDw+x0L+2wOSFr5ll6Yuptp7F7UmVZgQv4spxbDLnps4eapVB0ZrGsY8NN4rt+y19x30rrteXqXWvqquvmnXmpujplmZdoRR1+v1IebHteb82NTBvmscftUcrYvicpppR6loTXzmY8Z0ZLVafaSBMDf90gK2b9bF8eL84hxys6wteBebmnUdFn+PpmwJUL4jojte4ZHGwWLTr/+oh7pTFjpj7MzvgljXa3ms3KyT8kdJRDOyvL/R59ib66fjl93G6l/h9N+nWHkQD7rD2dzh98ns/uTvOvL/crtFOt5S7ZuB0Q3gZvKN2RXo/LzRy1C/ug0lB7jvHufBntYP7UJwF9jBRSMHde5YL91203aq2lStDurccS7HGA3+NrDqbmLwiDsmhncT1MeWT/tM07f54rl08WvPy7fGjHzvmA7D2AWobe/e3I70rQHpT5qfIeBOgIC4O4Q+KQECIsVPcXcCBMTdIfRJCRAQKX6KuxMgIO4OoU9KgIBI8VPcnQABcXcIfVICBESKn+LuBAiIu0PokxIgIFL8FHcnQEDcHUKflAABkeKnuDsBAuLuEPqkBAiIFD/F3QkQEHeH0CclQECk+CnuToCAuDuEPikBAiLFT3F3AgTE3SH0SQkQECl+irsTICDuDqFPSoCASPFT3J0AAXF3CH1SAgREip/i7gQIiLtD6JMSICBS/BR3J0BA3B1Cn5QAAZHip7g7AQLi7hD6pAQIiBQ/xd0JEBB3h9AnJUBApPgp7k6AgLg7hD4pAQIixU9xdwIExN0h9EkJEBApfoq7EyAg7g6hT0qAgEjxU9ydAAFxdwh9UgIERIqf4u4ECIi7Q+iTEiAgUvwUdydAQNwdQp+UAAGR4qe4OwEC4u4Q+qQECIgUP8XdCRAQd4fQJyVAQKT4Ke5OgIC4O4Q+KQECIsVPcXcCBMTdIfRJCRAQKX6KuxMgIO4OoU9KgIBI8VPcnQABcXcIfVICfwECaXGxW/QqRQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/quickbid/Styles/Styles.light.json":
/*!*************************************************************!*\
  !*** ./build.definitions/quickbid/Styles/Styles.light.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ActionBar":{"font-color":"#ffffff","background-color":"#51abf1"},"button1":{"background-color":"#51abf1","font-color":"#ffffff","font-typeface":"bold","font-size":"16px","border-bottom-left-radius":"20px","border-bottom-right-radius":"20px","border-top-right-radius":"20px","border-top-left-radius":"20px"},"header1":{"text-align-last":"center"},"label1":{"text-align":"center"},"MYINFO":{"text-align":"center"},"rbutton1":{"border":["1px solid black","2px solid #007bff"],"font-color":"#f3f7f9","font-size":"26px","padding":"10px 20px","background-color":"#7d9cb5","border-bottom-left-radius":"20px","border-bottom-right-radius":"20px","border-top-right-radius":"20px","border-top-left-radius":"20px"},"NoteFormCellValue":{"background-color":"#cfcfe6","font-color":"black","font-style":"body","font-typeface":"bold","font-size":"24px"},"Form":{"font-color":"black","font-style":"body","font-typeface":"bold","font-size":"26px"},"Formm":{"font-color":"#7575d4","font-style":"bold","font-size":"26px","text-align-last":"center","text-align":"center"},"fr":{"background-color":"#d7d7e9","border-radius":"50%"},"AdditionalTextStyle":{"background-color":"#d7d7e9","font-color":"black","font-size":"20px"},"f":{"text-align-last":"center"},"ff":{"border-radius":"75","border-bottom-left-radius":"20","border-bottom-right-radius":"20","text-align-last":"center","font-size":"8x"},"e":{"text-align-last":"center","font-color":"#7575d4","font-size":"11px"},"t":{"border-radius":"20%"}}');

/***/ }),

/***/ "./build.definitions/quickbid/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/quickbid/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warn = (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		});
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/mdk-core/controls/IControl": () => (loadSingletonVersionCheck("default", "mdk-core/controls/IControl", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/text-field": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/text-field", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/layouts/stack-layout": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/layouts/stack-layout", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/label": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/label", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/gestures": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/gestures", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/text-view": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/text-view", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/button": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/button", [0])),
/******/ 			"webpack/sharing/consume/default/@nativescript/core/ui/dialogs": () => (loadSingletonVersionCheck("default", "@nativescript/core/ui/dialogs", [0]))
/******/ 		};
/******/ 		var initialConsumes = ["webpack/sharing/consume/default/mdk-core/controls/IControl","webpack/sharing/consume/default/@nativescript/core/ui/text-field","webpack/sharing/consume/default/@nativescript/core/ui/layouts/stack-layout","webpack/sharing/consume/default/@nativescript/core/ui/label","webpack/sharing/consume/default/@nativescript/core/ui/gestures","webpack/sharing/consume/default/@nativescript/core/ui/text-view","webpack/sharing/consume/default/@nativescript/core/ui/button","webpack/sharing/consume/default/@nativescript/core/ui/dialogs"];
/******/ 		initialConsumes.forEach((id) => {
/******/ 			__webpack_require__.m[id] = (module) => {
/******/ 				// Handle case when module is used sync
/******/ 				installedModules[id] = 0;
/******/ 				delete __webpack_require__.c[id];
/******/ 				var factory = moduleToHandlerMapping[id]();
/******/ 				if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 				module.exports = factory();
/******/ 			}
/******/ 		});
/******/ 		// no chunk loading of consumes
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map