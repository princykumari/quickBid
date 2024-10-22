// import { IControl } from 'mdk-core/controls/IControl';
// 	import { Label } from '@nativescript/core/ui/label';
// 	import { Color } from '@nativescript/core/color';
// 	import { BaseObservable } from 'mdk-core/observables/BaseObservable';
	
// 	export class QuestionnaireClass extends IControl {
	
// 	  protected _label: Label = new Label();
// 	  private _observable: BaseObservable;
	
// 	  public view(): any {
// 		if (!this._label) {
// 		  this._label = new Label();
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		} else {
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		}
// 		return this._label;
// 	  }
	
// 	  public observable() {
// 		if (!this._observable) {
// 		  this._observable = new BaseObservable(this, this.definition(), this.page());
// 		}
// 		return this._observable;
// 	  }
	
// 	  public setContainer(container: IControl) {
// 		// do nothing
// 	  }
	
// 	  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
// 		// do nothing
// 		return Promise.resolve();
// 	  }
// 	}


// import { IControl } from 'mdk-core/controls/IControl';
// import { TextField } from '@nativescript/core/ui/text-field';
// import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
// import { Label } from '@nativescript/core/ui/label';
// import { Button } from '@nativescript/core/ui/button';
// import { Http } from '@nativescript/core';
// import { alert } from '@nativescript/core/ui/dialogs';
// import { GestureTypes } from '@nativescript/core/ui/gestures';
// import { TextView } from '@nativescript/core/ui/text-view';

// export class QuestionnaireClass extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | StackLayout>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _saveButton: Button;
//     private _mainStackLayout: StackLayout;
//     private _itemTypes: string[];
//     private _payment: string;
//     private _doc: string;
//     private _vall: string;

//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//         this._itemTypes = [];
//     }

//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';
//             this.fetchAndPopulateData();

//             let bottomLayout = new StackLayout();
//             bottomLayout.height = 100;
//             bottomLayout.width = '100%';
//             bottomLayout.verticalAlignment = 'bottom';

//             let buttonContainer = new StackLayout();
//             buttonContainer.horizontalAlignment = 'left';
//             buttonContainer.verticalAlignment = 'bottom';
//             buttonContainer.width = '100%';

//             this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
//             buttonContainer.addChild(this._saveButton);

//             let pageLayout = new StackLayout();
//             pageLayout.addChild(this._mainStackLayout);
//             pageLayout.addChild(buttonContainer);

//             return pageLayout;
//         }
//         return this._mainStackLayout;
//     }
//     private createStyledButton(text: string, onTap: () => void): Button {
//         const button = new Button();
//         button.text = text;
//         button.width = 100;
//         button.height = 50;
//         button.marginTop = 25;
//         button.borderRadius = 25;
//         button.backgroundColor = '#51abf1';
//         button.color = '#FFFFFF';
//         button.horizontalAlignment = 'left';
//         button.on(Button.tapEvent, onTap);
//         return button;
//     }
//     private updateServiceWithData(): void {
//         let result: string;
//         let updateCount = 0;
//         const totalUpdates = this._questionnaireIdFields.length;
//         for (let i = 0; i < this._questionnaireIdFields.length; i++) {
//             const questionnaireId = this._questionnaireIdFields[i].text;
//             let userReply;
//             const replyControl = this._replyFields[i];
//             if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//                 userReply = this._payment;
//             } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//                 userReply = this._doc;
//             } else if (this._itemTypes[i] === 'RQASTRING') {
//                 userReply = replyControl.text; 
//             }
//             const updateServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//             const dataPayload = { user_reply: userReply };
//             Http.request({
//                 url: updateServiceUrl,
//                 method: 'PATCH',
//                 headers: { 'Content-Type': 'application/json' },
//                 content: JSON.stringify(dataPayload)
//             }).then(response => {
//                 result = response.statusCode;
//                 updateCount++;
//                 if (updateCount === totalUpdates && result === 200) {
//                     alert(`Data updated`);
//                 }
//             }).catch(error => {
//                 alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//             });
//         }
//     }
//     private fetchAndPopulateData(): void {
//                const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq 'Doc54043991' and invitationId eq 'mailto:babita.sharam@peolsolutions.com'`;

//         // const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//         Http.getJSON(serviceUrl).then(response => {
//             if (response && response.value && Array.isArray(response.value)) {
//                 response.value.forEach((item, index) => {
//                     if (item) {
//                          if (item.type === "RQAATTACH")
//                             {
//                                 return false;
//                             }
//                         const qusIdField = new TextField();
//                         qusIdField.hint = 'Questionnaire ID';
//                         qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                         qusIdField.visibility = 'collapsed';
//                         this._mainStackLayout.addChild(qusIdField);
//                         this._questionnaireIdFields.push(qusIdField);
//                         const descriptionLabel = new Label();
//                         descriptionLabel.fontSize = 20;
//                         descriptionLabel.marginBottom = 10;
//                         descriptionLabel.marginTop = 30;
//                         descriptionLabel.text = item.description || 'No description available';
//                         this._mainStackLayout.addChild(descriptionLabel);
//                         this._descriptionLabels.push(descriptionLabel);
//                         this._itemTypes[index] = item.type;
//                         if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//                             if (item.type === 'RQASTRINGListOfChoices') {
//                                 const radioGroupLayout = new StackLayout();
//                                 this.populateRadioOptions(item, radioGroupLayout, index);
//                                 this._mainStackLayout.addChild(radioGroupLayout);
//                                 this._replyFields[index] = radioGroupLayout;
//                             } else if (item.type === 'RQABOOLEAN') {
//                                 const radioGroupLayout = new StackLayout();
//                                 this.populateBooleanOptions(item, radioGroupLayout, index);
//                                 this._mainStackLayout.addChild(radioGroupLayout);
//                                 this._replyFields[index] = radioGroupLayout;
//                             }
                          
//                         }
//                         else if (item.type === "RQAATTACH")
//                             {
//                                 return false;
//                             } 

//                         else {
//                             const replyField = new TextView();
//                             replyField.hint = `User Reply ${index + 1}`;
//                             replyField.text = item.user_reply || '';
//                             replyField.backgroundColor = 'white';
//                             replyField.color = '#000000';
//                             replyField.borderRadius = 5;
//                             replyField.borderWidth = 1;
//                             replyField.borderColor = '#000000';
//                             replyField.padding = 10;
//                             replyField.width = 288;
//                             replyField.horizontalAlignment = 'left';
//                             replyField.marginLeft = 7;
//                             replyField.marginRight = 7;
//                             replyField.style.cssText = `
//                                     display: flex;
//                                     box-sizing: border-box;
//                                     flex-direction: column;
//                                     width: 100%;
//                                     overflow: auto;
//                                     word-wrap: break-word;
//                                     white-space: pre-wrap;
//                                 `;

//                             this._mainStackLayout.addChild(replyField);
//                             this._replyFields[index] = replyField;

//                             replyField.on('textChange', (args) => {
//                                 const textView = args.object as TextView;

//                                 if (textView.ios) {
//                                     const fixedWidth = textView.ios.frame.size.width;
//                                     const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//                                     textView.height = newSize.height + 10; 
//                                 } else if (textView.android) {
//                                     textView.height = 'auto';
//                                     textView.requestLayout();
//                                 }
//                             });

//                             if (replyField.android) {
//                                 replyField.on('loaded', () => {
//                                     replyField.android.setMinLines(1);
//                                     replyField.android.setMaxLines(5); 
//                                 });
//                             }
//                         }
//                         descriptionLabel.on(GestureTypes.tap, () => {
//                             const replyField = this._replyFields[index];
//                             if (replyField.visibility === 'collapse') {
//                                 replyField.visibility = 'visible';
//                                 descriptionLabel.text = `${item.description} ( Ans )`;
//                             } else {
//                                 replyField.visibility = 'collapse';
//                                 descriptionLabel.text = `${item.description} ( ans )`;
//                             }
//                         });
//                     }
                    
//                 });
//             } else {
//                 throw new Error('Invalid response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching data from service:', error);
//             alert(`Failed to fetch data: ${error.message}`);
//         });
//     }
//     private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number): void {
//         const radioOptionsUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;
//         Http.getJSON(radioOptionsUrl).then(response => {
//             if (response && response.value && Array.isArray(response.value)) {
//                 response.value.forEach((option, optionIndex) => {
//                     const radioButtonLayout = this.createRadioButton1(option.dropdown_value, 'groupName', false);
//                     radioGroupLayout.addChild(radioButtonLayout);

//                     if (index === 0 && optionIndex === 0) {
//                         const textBox = new TextField();
//                         textBox.hint = `Enter text for ${option.dropdown_value}`;
//                         textBox.borderRadius = 5;
//                         textBox.borderWidth = 1;
//                         textBox.borderColor = 'black';
//                         textBox.height = 40;
//                         textBox.marginTop = 5;
//                         textBox.paddingLeft = 5;
//                         radioGroupLayout.addChild(textBox);
//                     }
//                 });
//                 radioGroupLayout.visibility = 'visible';
//                 this._replyFields[index] = radioGroupLayout;
//             } else {
//                 throw new Error('Invalid radio options response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching radio options:', error);
//             alert('Failed to fetch radio options.');
//         });
//     }
//     private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number): void {
//         const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', item.user_reply === 'Yes');
//         const noRadioButton = this.createRadioButton('No', index, 'boolean', item.user_reply === 'No');

//         radioGroupLayout.addChild(yesRadioButton);
//         radioGroupLayout.addChild(noRadioButton);
//     }
//     private createRadioButton(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';

//             this._doc = optionText
//         });
//         return radioButtonLayout;
//     }
//     private createRadioButton1(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';
//             this._payment = optionText;
//         });
//         return radioButtonLayout;
//     }
// }


import { IControl } from 'mdk-core/controls/IControl';
import { TextField } from '@nativescript/core/ui/text-field';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Label } from '@nativescript/core/ui/label';
import { Button } from '@nativescript/core/ui/button';
import { Http } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';
import { GestureTypes } from '@nativescript/core/ui/gestures';
import { TextView } from '@nativescript/core/ui/text-view';


// export class QuestionnaireClass extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | StackLayout>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _saveButton: Button;
//     private _mainStackLayout: StackLayout;
//     private _itemTypes: string[];
//     private _payment: string;
//     private _doc: string;
//     private _vall: string;
//     // private _docId: string;
//     // private _invitationId: string;


//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//         this._itemTypes = [];
//     }

//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';
//             this.fetchAndPopulateData();


//             let bottomLayout = new StackLayout();
//             bottomLayout.height = 100;
//             bottomLayout.width = '100%';
//             bottomLayout.verticalAlignment = 'bottom';

//             let buttonContainer = new StackLayout();
//             buttonContainer.horizontalAlignment = 'left';
//             buttonContainer.verticalAlignment = 'bottom';
//             buttonContainer.width = '100%';

//             this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
//             buttonContainer.addChild(this._saveButton);

//             let pageLayout = new StackLayout();
//             pageLayout.addChild(this._mainStackLayout);
//             pageLayout.addChild(buttonContainer);

//             return pageLayout;
//         }
//         return this._mainStackLayout;
//     }
//     private createStyledButton(text: string, onTap: () => void): Button {
//         const button = new Button();
//         button.text = text;
//         button.width = 100;
//         button.height = 50;
//         button.marginTop = 25;
//         button.borderRadius = 25;
//         button.backgroundColor = '#51abf1';
//         button.color = '#FFFFFF';
//         button.horizontalAlignment = 'left';
//         button.on(Button.tapEvent, onTap);
//         return button;
//     }
//     private updateServiceWithData(): void {
      
//         let result: string;
//         let updateCount = 0;
//         const totalUpdates = this._questionnaireIdFields.length;
//         for (let i = 0; i < this._questionnaireIdFields.length; i++) {
//             const questionnaireId = this._questionnaireIdFields[i].text;
//             let userReply;
//             const replyControl = this._replyFields[i];
//             if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//                 userReply = this._payment;
//             } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//                 userReply = this._doc;
//             } else if (this._itemTypes[i] === 'RQASTRING') {
//                 userReply = replyControl.text; 
//             }
//             const updateServiceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//             // const updateServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//             const dataPayload = { user_reply: userReply };
//             Http.request({
//                 url: updateServiceUrl,
//                 method: 'PATCH',
//                 headers: { 'Content-Type': 'application/json' },
//                 content: JSON.stringify(dataPayload)
//             }).then(response => {
//                 result = response.statusCode;
//                 updateCount++;
//                 if (updateCount === totalUpdates && result === 200) {
//                     alert(`Data updated`);
//                 }
//             }).catch(error => {
//                 alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//             });
//         }
//     }
//     // private fetchAndPopulateData(): void {
//     //     this._docId = this.context.binding.doc_id;
//     //     this._invitationId = this.context.binding.invitationId ;

//     //     // alert(`${this._docId}`)
//     //     // alert(`${this._invitationId}`)

     
//     //     const serviceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId} and invitationId eq '${this._invitationId}'`;
//     //     // const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//     //     // const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq 'Doc54043991' and invitationId eq 'mailto:babita.sharam@peolsolutions.com'`;
       

      
//     //     Http.getJSON(serviceUrl).then(response => {
//     //         if (response && response.value && Array.isArray(response.value)) {
//     //             response.value.forEach((item, index) => {
//     //                 if (item) {
//     //                      if (item.type === "RQAATTACH")
//     //                         {
//     //                             return false;
//     //                         }
//     //                     const qusIdField = new TextField();
//     //                     qusIdField.hint = 'Questionnaire ID';
//     //                     qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                     qusIdField.visibility = 'collapsed';
//     //                     this._mainStackLayout.addChild(qusIdField);
//     //                     this._questionnaireIdFields.push(qusIdField);
//     //                     const descriptionLabel = new Label();
//     //                     descriptionLabel.fontSize = 18;
//     //                     // descriptionLabel.style.color = 'white'
//     //                     descriptionLabel.horizontalAlignment = 'left';
//     //                     descriptionLabel.marginBottom = 10;
//     //                     descriptionLabel.marginTop = 30;
//     //                     descriptionLabel.text = item.description || 'No description available';
//     //                     this._mainStackLayout.addChild(descriptionLabel);
//     //                     this._descriptionLabels.push(descriptionLabel);
//     //                     this._itemTypes[index] = item.type;
//     //                     if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                         if (item.type === 'RQASTRINGListOfChoices') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateRadioOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         } else if (item.type === 'RQABOOLEAN') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateBooleanOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         }
                          
//     //                     }
//     //                     else if (item.type === "RQAATTACH")
//     //                         {
//     //                             return;
//     //                         } 

//     //                     else {
//     //                         const replyField = new TextView();
//     //                         replyField.hint = `User Reply ${index + 1}`;
//     //                         replyField.text = item.user_reply || '';
//     //                         replyField.backgroundColor = 'white';
//     //                         replyField.color = '#000000';
//     //                         replyField.borderRadius = 5;
//     //                         replyField.borderWidth = 1;
//     //                         replyField.borderColor = '#000000';
//     //                         replyField.padding = 10;
//     //                         replyField.width = 288;
//     //                         replyField.horizontalAlignment = 'left';
//     //                         replyField.marginLeft = 7;
//     //                         replyField.marginRight = 7;
//     //                         replyField.style.cssText = `
//     //                                 display: flex;
//     //                                 box-sizing: border-box;
//     //                                 flex-direction: column;
//     //                                 width: 100%;
//     //                                 overflow: auto;
//     //                                 word-wrap: break-word;
//     //                                 white-space: pre-wrap;
//     //                             `;

//     //                         this._mainStackLayout.addChild(replyField);
//     //                         this._replyFields[index] = replyField;

//     //                         replyField.on('textChange', (args) => {
//     //                             const textView = args.object as TextView;

//     //                             if (textView.ios) {
//     //                                 const fixedWidth = textView.ios.frame.size.width;
//     //                                 const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                 textView.height = newSize.height + 10; 
//     //                             } else if (textView.android) {
//     //                                 textView.height = 'auto';
//     //                                 textView.requestLayout();
//     //                             }
//     //                         });

//     //                         if (replyField.android) {
//     //                             replyField.on('loaded', () => {
//     //                                 replyField.android.setMinLines(1);
//     //                                 replyField.android.setMaxLines(5); 
//     //                             });
//     //                         }
//     //                     }
//     //                     descriptionLabel.on(GestureTypes.tap, () => {
//     //                         const replyField = this._replyFields[index];
//     //                         if (replyField.visibility === 'collapse') {
//     //                             replyField.visibility = 'visible';
//     //                             descriptionLabel.text = `${item.description} ( Ans )`;
//     //                         } else {
//     //                             replyField.visibility = 'collapse';
//     //                             descriptionLabel.text = `${item.description} ( ans )`;
//     //                         }
//     //                     });
//     //                 }
                    
//     //             });
//     //         } else {
//     //             throw new Error('Invalid response format');
//     //         }
//     //     }).catch(error => {
//     //         console.error('Error fetching data from service:', error);
//     //         alert(`Failed to fetch data: ${error.message}`);
//     //     });
       
//     // }
//     private fetchAndPopulateData(): void {
        
//         this._docId = this.context.binding.doc_id;
//         this._invitationId = this.context.binding.invitationId;
// 		// alert(`${this._docId}`);
// 		// alert(`${this._invitationId}`);
    
//         const serviceUrl1 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//         const serviceUrl2 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//         // Fetch data from both services concurrently
//         Promise.all([Http.getJSON(serviceUrl1), Http.getJSON(serviceUrl2)])
//             .then(([response1, response2]) => {
//                 if (response1 && response1.value && Array.isArray(response1.value) &&
//                     response2 && response2.value && Array.isArray(response2.value)) {
                        
//                     // Create a map of replies by questionnaire_id
//                     const repliesMap = response2.value.reduce((acc, reply) => {
//                         acc[reply.questionnaire_id] = reply.user_reply;
//                         // ur = reply.user_reply;
//                         // alert(`${reply.user_reply}`)
//                         // alert(`${reply.questionnaire_id}`)
//                         return acc;
//                     }, {} as { [key: string]: string });
    
//                     response1.value.forEach((item, index) => {
//                         if (item && item.type !== "RQAATTACH") {
//                             const qusIdField = new TextField();
//                             qusIdField.hint = 'Questionnaire ID';
//                             qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                             qusIdField.visibility = 'collapsed';
//                             this._mainStackLayout.addChild(qusIdField);
//                             this._questionnaireIdFields.push(qusIdField);
    
//                             const descriptionLabel = new Label();
//                             descriptionLabel.fontSize = 18;
//                             descriptionLabel.horizontalAlignment = 'left';
//                             descriptionLabel.marginBottom = 10;
//                             descriptionLabel.marginTop = 30;
//                             descriptionLabel.text = item.description || 'No description available';
//                             this._mainStackLayout.addChild(descriptionLabel);
//                             this._descriptionLabels.push(descriptionLabel);
    
//                             this._itemTypes[index] = item.type;
    
//                             if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//                                 const radioGroupLayout = new StackLayout();
//                                 if (item.type === 'RQASTRINGListOfChoices') {
//                                     this.populateRadioOptions(item, radioGroupLayout, index, repliesMap);
//                                 } else if (item.type === 'RQABOOLEAN') {
//                                     this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//                                 }
//                                 this._mainStackLayout.addChild(radioGroupLayout);
//                                 this._replyFields[index] = radioGroupLayout;
//                             } else if (item.type === "RQASTRING") {
//                                 const replyField = new TextView();
//                                 replyField.hint = `User Reply ${index + 1}`;
//                                 replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply from serviceUrl2
//                                 replyField.backgroundColor = 'white';
//                                 replyField.color = '#000000';
//                                 replyField.borderRadius = 5;
//                                 replyField.borderWidth = 1;
//                                 replyField.borderColor = '#000000';
//                                 replyField.padding = 10;
//                                 replyField.width = 288;
//                                 replyField.horizontalAlignment = 'left';
//                                 replyField.marginLeft = 7;
//                                 replyField.marginRight = 7;
//                                 replyField.style.cssText = `
//                                     display: flex;
//                                     box-sizing: border-box;
//                                     flex-direction: column;
//                                     width: 100%;
//                                     overflow: auto;
//                                     word-wrap: break-word;
//                                     white-space: pre-wrap;
//                                 `;
    
//                                 this._mainStackLayout.addChild(replyField);
//                                 this._replyFields[index] = replyField;
    
//                                 replyField.on('textChange', (args) => {
//                                     const textView = args.object as TextView;
//                                     if (textView.ios) {
//                                         const fixedWidth = textView.ios.frame.size.width;
//                                         const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//                                         textView.height = newSize.height + 10;
//                                     } else if (textView.android) {
//                                         textView.height = 'auto';
//                                         textView.requestLayout();
//                                     }
//                                 });
    
//                                 if (replyField.android) {
//                                     replyField.on('loaded', () => {
//                                         replyField.android.setMinLines(1);
//                                         replyField.android.setMaxLines(5);
//                                     });
//                                 }
//                             }
    
//                             descriptionLabel.on(GestureTypes.tap, () => {
//                                 const replyField = this._replyFields[index];
//                                 if (replyField.visibility === 'collapse') {
//                                     replyField.visibility = 'visible';
//                                     descriptionLabel.text = `${item.description} ( Ans )`;
//                                 } else {
//                                     replyField.visibility = 'collapse';
//                                     descriptionLabel.text = `${item.description} ( ans )`;
//                                 }
//                             });
//                         }
//                     });
//                 } else {
//                     throw new Error('Invalid response format');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data from service:', error);
//                 alert(`Failed to fetch data: ${error.message}`);
//             });
//     }
//     private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//         const radioOptionsUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;
//         Http.getJSON(radioOptionsUrl).then(response => {
//             if (response && response.value && Array.isArray(response.value)) {
//                 response.value.forEach((option, optionIndex) => {
//                     // const radioButtonLayout = this.createRadioButton1(option.dropdown_value, 'groupName', false);
//                     const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', repliesMap[item.questionnaire_id] === option.dropdown_value);

//                     radioGroupLayout.addChild(radioButtonLayout);

//                     if (index === 0 && optionIndex === 0) {
//                         const textBox = new TextField();
//                         textBox.hint = `Enter text for ${option.dropdown_value}`;
//                         textBox.borderRadius = 5;
//                         textBox.borderWidth = 1;
//                         textBox.borderColor = 'black';
//                         textBox.height = 40;
//                         textBox.marginTop = 5;
//                         textBox.paddingLeft = 5;
//                         radioGroupLayout.addChild(textBox);
//                     }
//                 });
//                 radioGroupLayout.visibility = 'visible';
//                 this._replyFields[index] = radioGroupLayout;
//             } else {
//                 throw new Error('Invalid radio options response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching radio options:', error);
//             alert('Failed to fetch radio options.');
//         });
//     }
//     private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//         const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', repliesMap[item.questionnaire_id] === 'Yes');
//         const noRadioButton = this.createRadioButton('No', index, 'boolean', repliesMap[item.questionnaire_id] === 'No');

//         radioGroupLayout.addChild(yesRadioButton);
//         radioGroupLayout.addChild(noRadioButton);
//     }
//     private createRadioButton(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';

//             this._doc = optionText
//         });
//         return radioButtonLayout;
//     }
//     private createRadioButton1(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';
//             this._payment = optionText;
//         });
//         return radioButtonLayout;
//     }
// }
// full working code
// export class QuestionnaireClass extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | StackLayout>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _saveButton: Button;
//     private _mainStackLayout: StackLayout;
//     private _itemTypes: string[];
//     private _payment: string;
//     private _doc: string;
//     private _vall: string;
//     private _dataLoaded: boolean = false;
//     private _userReplies = {};
//     private userReply
//     // private _docId: string;
//     // private _invitationId: string;
//     private _clientAPI: any;


//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//         this._itemTypes = [];
//     }
    
//     public initialize(props) {
//         super.initialize(props);
//         // Check if clientAPI is available in the context
//         const clientAPI = props.context?.clientAPI;
//         this._clientAPI = clientAPI
//         if (clientAPI) {
//           this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
//         } else {
//           console.error('clientAPI is not available');
//         }
//       }


//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';
//             // this.fetchAndPopulateData();
//             var clientAPI = this.page()?.clientAPI;
//             // var clientapi = clientAPI
//             if (clientAPI) {
//                 this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
//                 this._dataLoaded = true;
//               } else {
//                 console.error('clientAPI is not available');
//               }


//             let bottomLayout = new StackLayout();
//             bottomLayout.height = 100;
//             bottomLayout.width = '100%';
//             bottomLayout.verticalAlignment = 'bottom';

//             let buttonContainer = new StackLayout();
//             buttonContainer.horizontalAlignment = 'left';
//             buttonContainer.verticalAlignment = 'bottom';
//             buttonContainer.width = '100%';

//             this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
//             buttonContainer.addChild(this._saveButton);

//             let pageLayout = new StackLayout();
//             pageLayout.addChild(this._mainStackLayout);
//             pageLayout.addChild(buttonContainer);

//             return pageLayout;
//         }
//         return this._mainStackLayout;
//     }
//     private createStyledButton(text: string, onTap: () => void): Button {
//         const button = new Button();
//         button.text = text;
//         button.width = 100;
//         button.height = 50;
//         button.marginTop = 25;
//         button.borderRadius = 25;
//         button.backgroundColor = '#51abf1';
//         button.color = '#FFFFFF';
//         button.horizontalAlignment = 'left';
//         button.on(Button.tapEvent, onTap);
//         return button;
//     }
//     // private updateServiceWithData(): void {
      
//     //     let result: string;
//     //     let updateCount = 0;
//     //     const totalUpdates = this._questionnaireIdFields.length;
//     //     for (let i = 0; i < this._questionnaireIdFields.length; i++) {
//     //         const questionnaireId = this._questionnaireIdFields[i].text;
//     //         const itemType = this._itemTypes[i]; // Make sure the index is correct
//     //         alert(`Questionnaire ID: ${questionnaireId}, Type: ${itemType}`);
//     //         let userReply;
//     //         const replyControl = this._replyFields[i];
//     //         alert(`${this._replyFields[i]}`)

//     //        if (this._itemTypes[i] === 'RQABOOLEAN') {
//     //             userReply = this._doc;
//     //             alert(`boolean${this._doc}${questionnaireId} ${this._itemTypes[i]}`)
//     //         } else if (this._itemTypes[i] === 'RQASTRING') {
//     //             userReply = replyControl.text; 
//     //             alert(`text${userReply} ${questionnaireId} ${this._itemTypes[i]}`)
//     //         } else if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//     //             userReply = this._payment;
//     //             alert(`list of choice ${this._payment} ${questionnaireId} ${this._itemTypes[i]}`)
//     //         } 
//     //         const updateServiceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//     //         // const updateServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//     //         const dataPayload = { user_reply: userReply };
//     //         Http.request({
//     //             url: updateServiceUrl,
//     //             method: 'PATCH',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             content: JSON.stringify(dataPayload)
//     //         }).then(response => {
//     //             result = response.statusCode;
//     //             updateCount++;
//     //             if (updateCount === totalUpdates && result === 200) {
//     //                 alert(`Data updated: ${JSON.stringify(dataPayload)}`);

//     //             }
//     //         }).catch(error => {
//     //             alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//     //         });
//     //     }
//     // }
//     // private fetchAndPopulateData(): void {
//     //     this._docId = this.context.binding.doc_id;
//     //     this._invitationId = this.context.binding.invitationId ;

//     //     // alert(`${this._docId}`)
//     //     // alert(`${this._invitationId}`)

     
//     //     const serviceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId} and invitationId eq '${this._invitationId}'`;
//     //     // const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//     //     // const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq 'Doc54043991' and invitationId eq 'mailto:babita.sharam@peolsolutions.com'`;
       

      
//     //     Http.getJSON(serviceUrl).then(response => {
//     //         if (response && response.value && Array.isArray(response.value)) {
//     //             response.value.forEach((item, index) => {
//     //                 if (item) {
//     //                      if (item.type === "RQAATTACH")
//     //                         {
//     //                             return false;
//     //                         }
//     //                     const qusIdField = new TextField();
//     //                     qusIdField.hint = 'Questionnaire ID';
//     //                     qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                     qusIdField.visibility = 'collapsed';
//     //                     this._mainStackLayout.addChild(qusIdField);
//     //                     this._questionnaireIdFields.push(qusIdField);
//     //                     const descriptionLabel = new Label();
//     //                     descriptionLabel.fontSize = 18;
//     //                     // descriptionLabel.style.color = 'white'
//     //                     descriptionLabel.horizontalAlignment = 'left';
//     //                     descriptionLabel.marginBottom = 10;
//     //                     descriptionLabel.marginTop = 30;
//     //                     descriptionLabel.text = item.description || 'No description available';
//     //                     this._mainStackLayout.addChild(descriptionLabel);
//     //                     this._descriptionLabels.push(descriptionLabel);
//     //                     this._itemTypes[index] = item.type;
//     //                     if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                         if (item.type === 'RQASTRINGListOfChoices') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateRadioOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         } else if (item.type === 'RQABOOLEAN') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateBooleanOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         }
                          
//     //                     }
//     //                     else if (item.type === "RQAATTACH")
//     //                         {
//     //                             return;
//     //                         } 

//     //                     else {
//     //                         const replyField = new TextView();
//     //                         replyField.hint = `User Reply ${index + 1}`;
//     //                         replyField.text = item.user_reply || '';
//     //                         replyField.backgroundColor = 'white';
//     //                         replyField.color = '#000000';
//     //                         replyField.borderRadius = 5;
//     //                         replyField.borderWidth = 1;
//     //                         replyField.borderColor = '#000000';
//     //                         replyField.padding = 10;
//     //                         replyField.width = 288;
//     //                         replyField.horizontalAlignment = 'left';
//     //                         replyField.marginLeft = 7;
//     //                         replyField.marginRight = 7;
//     //                         replyField.style.cssText = `
//     //                                 display: flex;
//     //                                 box-sizing: border-box;
//     //                                 flex-direction: column;
//     //                                 width: 100%;
//     //                                 overflow: auto;
//     //                                 word-wrap: break-word;
//     //                                 white-space: pre-wrap;
//     //                             `;

//     //                         this._mainStackLayout.addChild(replyField);
//     //                         this._replyFields[index] = replyField;

//     //                         replyField.on('textChange', (args) => {
//     //                             const textView = args.object as TextView;

//     //                             if (textView.ios) {
//     //                                 const fixedWidth = textView.ios.frame.size.width;
//     //                                 const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                 textView.height = newSize.height + 10; 
//     //                             } else if (textView.android) {
//     //                                 textView.height = 'auto';
//     //                                 textView.requestLayout();
//     //                             }
//     //                         });

//     //                         if (replyField.android) {
//     //                             replyField.on('loaded', () => {
//     //                                 replyField.android.setMinLines(1);
//     //                                 replyField.android.setMaxLines(5); 
//     //                             });
//     //                         }
//     //                     }
//     //                     descriptionLabel.on(GestureTypes.tap, () => {
//     //                         const replyField = this._replyFields[index];
//     //                         if (replyField.visibility === 'collapse') {
//     //                             replyField.visibility = 'visible';
//     //                             descriptionLabel.text = `${item.description} ( Ans )`;
//     //                         } else {
//     //                             replyField.visibility = 'collapse';
//     //                             descriptionLabel.text = `${item.description} ( ans )`;
//     //                         }
//     //                     });
//     //                 }
                    
//     //             });
//     //         } else {
//     //             throw new Error('Invalid response format');
//     //         }
//     //     }).catch(error => {
//     //         console.error('Error fetching data from service:', error);
//     //         alert(`Failed to fetch data: ${error.message}`);
//     //     });
       
//     // }
//     // private fetchAndPopulateData(): void {
        
//     //     this._docId = this.context.binding.doc_id;
//     //     this._invitationId = this.context.binding.invitationId;
// 	// 	// alert(`${this._docId}`);
// 	// 	// alert(`${this._invitationId}`);
    
//     //     const serviceUrl1 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//     //     const serviceUrl2 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//     //     // Fetch data from both services concurrently
//     //     Promise.all([Http.getJSON(serviceUrl1), Http.getJSON(serviceUrl2)])
//     //         .then(([response1, response2]) => {
//     //             if (response1 && response1.value && Array.isArray(response1.value) &&
//     //                 response2 && response2.value && Array.isArray(response2.value)) {
                        
//     //                 // Create a map of replies by questionnaire_id
//     //                 const repliesMap = response2.value.reduce((acc, reply) => {
//     //                     acc[reply.questionnaire_id] = reply.user_reply;
//     //                     // ur = reply.user_reply;
//     //                     // alert(`${reply.user_reply}`)
//     //                     // alert(`${reply.questionnaire_id}`)
//     //                     return acc;
//     //                 }, {} as { [key: string]: string });
    
//     //                 response1.value.forEach((item, index) => {
//     //                     if (item && item.type !== "RQAATTACH") {
//     //                         const qusIdField = new TextField();
//     //                         qusIdField.hint = 'Questionnaire ID';
//     //                         qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                         qusIdField.visibility = 'collapsed';
//     //                         this._mainStackLayout.addChild(qusIdField);
//     //                         this._questionnaireIdFields.push(qusIdField);
    
//     //                         const descriptionLabel = new Label();
//     //                         descriptionLabel.fontSize = 18;
//     //                         descriptionLabel.horizontalAlignment = 'left';
//     //                         descriptionLabel.marginBottom = 10;
//     //                         descriptionLabel.marginTop = 30;
//     //                         descriptionLabel.text = item.description || 'No description available';
//     //                         this._mainStackLayout.addChild(descriptionLabel);
//     //                         this._descriptionLabels.push(descriptionLabel);
    
//     //                         this._itemTypes[index] = item.type;
    
//     //                         if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             if (item.type === 'RQASTRINGListOfChoices') {
//     //                                 this.populateRadioOptions(item, radioGroupLayout, index, repliesMap);
//     //                             } else if (item.type === 'RQABOOLEAN') {
//     //                                 this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//     //                             }
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         } else if (item.type === "RQASTRING") {
//     //                             const replyField = new TextView();
//     //                             replyField.hint = `User Reply ${index + 1}`;
//     //                             replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply from serviceUrl2
//     //                             replyField.backgroundColor = 'white';
//     //                             replyField.color = '#000000';
//     //                             replyField.borderRadius = 5;
//     //                             replyField.borderWidth = 1;
//     //                             replyField.borderColor = '#000000';
//     //                             replyField.padding = 10;
//     //                             replyField.width = 288;
//     //                             replyField.horizontalAlignment = 'left';
//     //                             replyField.marginLeft = 7;
//     //                             replyField.marginRight = 7;
//     //                             replyField.style.cssText = `
//     //                                 display: flex;
//     //                                 box-sizing: border-box;
//     //                                 flex-direction: column;
//     //                                 width: 100%;
//     //                                 overflow: auto;
//     //                                 word-wrap: break-word;
//     //                                 white-space: pre-wrap;
//     //                             `;
    
//     //                             this._mainStackLayout.addChild(replyField);
//     //                             this._replyFields[index] = replyField;
    
//     //                             replyField.on('textChange', (args) => {
//     //                                 const textView = args.object as TextView;
//     //                                 if (textView.ios) {
//     //                                     const fixedWidth = textView.ios.frame.size.width;
//     //                                     const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                     textView.height = newSize.height + 10;
//     //                                 } else if (textView.android) {
//     //                                     textView.height = 'auto';
//     //                                     textView.requestLayout();
//     //                                 }
//     //                             });
    
//     //                             if (replyField.android) {
//     //                                 replyField.on('loaded', () => {
//     //                                     replyField.android.setMinLines(1);
//     //                                     replyField.android.setMaxLines(5);
//     //                                 });
//     //                             }
//     //                         }
    
//     //                         descriptionLabel.on(GestureTypes.tap, () => {
//     //                             const replyField = this._replyFields[index];
//     //                             if (replyField.visibility === 'collapse') {
//     //                                 replyField.visibility = 'visible';
//     //                                 descriptionLabel.text = `${item.description} ( Ans )`;
//     //                             } else {
//     //                                 replyField.visibility = 'collapse';
//     //                                 descriptionLabel.text = `${item.description} ( ans )`;
//     //                             }
//     //                         });
//     //                     }
//     //                 });
//     //             } else {
//     //                 throw new Error('Invalid response format');
//     //             }
//     //         })
//     //         .catch(error => {
//     //             console.error('Error fetching data from service:', error);
//     //             alert(`Failed to fetch data: ${error.message}`);
//     //         });
//     // }


 
//     // private async fetchAndPopulateData(clientAPI): Promise<void> {
//     //     try {
//     //         this._docId = this.context.binding.doc_id;
//     //         this._invitationId = this.context.binding.invitationId;
    
//     //         const servicePath = "/quickbid/Services/capoff.service";
//     //         const entitySet1 = "Questionnaire_table";
//     //         const entitySet2 = "Questionnaire_reply_table";
    
//     //         // Define query options
//     //         const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//     //         const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//     //         // Fetch data using clientAPI.read method for both entity sets
//     //         const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
//     //         const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);
    
//     //         // Check if results are valid
//     //         if (result1 && result1.length && result2 && result2.length) {
//     //             // Create a map of replies by questionnaire_id
//     //             const repliesMap = result2.reduce((acc, reply) => {
//     //                 acc[reply.questionnaire_id] = reply.user_reply;
//     //                 return acc;
//     //             }, {} as { [key: string]: string });
    
//     //             // Iterate over result1 to populate UI components
//     //             result1.forEach((item, index) => {
//     //                 if (item && item.type !== "RQAATTACH") {
//     //                     // Add Questionnaire ID Field
//     //                     const qusIdField = new TextField();
//     //                     qusIdField.hint = 'Questionnaire ID';
//     //                     qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                     qusIdField.visibility = 'collapsed';
//     //                     this._mainStackLayout.addChild(qusIdField);
//     //                     this._questionnaireIdFields.push(qusIdField);
    
//     //                     // Add Description Label
//     //                     const descriptionLabel = new Label();
//     //                     descriptionLabel.fontSize = 18;
//     //                     descriptionLabel.horizontalAlignment = 'left';
//     //                     descriptionLabel.marginBottom = 10;
//     //                     descriptionLabel.marginTop = 30;
//     //                     descriptionLabel.text = item.description || 'No description available';
//     //                     this._mainStackLayout.addChild(descriptionLabel);
//     //                     this._descriptionLabels.push(descriptionLabel);
    
//     //                     this._itemTypes[index] = item.type;
    
//     //                     // Populate reply field based on item type
//     //                     if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                         const radioGroupLayout = new StackLayout();
//     //                         if (item.type === 'RQASTRINGListOfChoices') {
//     //                             this.populateRadioOptions(item, radioGroupLayout, index, repliesMap,clientAPI);
//     //                         } else if (item.type === 'RQABOOLEAN') {
//     //                             this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//     //                         }
//     //                         this._mainStackLayout.addChild(radioGroupLayout);
//     //                         this._replyFields[index] = radioGroupLayout;
//     //                     } else if (item.type === "RQASTRING") {
//     //                         const replyField = new TextView();
//     //                         replyField.hint = `User Reply ${index + 1}`;
//     //                         replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply
//     //                         replyField.backgroundColor = 'white';
//     //                         replyField.color = '#000000';
//     //                         replyField.borderRadius = 5;
//     //                         replyField.borderWidth = 1;
//     //                         replyField.borderColor = '#000000';
//     //                         replyField.padding = 10;
//     //                         replyField.width = 288;
//     //                         replyField.horizontalAlignment = 'left';
//     //                         replyField.marginLeft = 7;
//     //                         replyField.marginRight = 7;
    
//     //                         this._mainStackLayout.addChild(replyField);
//     //                         this._replyFields[index] = replyField;
    
//     //                         // Handle text change event
//     //                         replyField.on('textChange', (args) => {
//     //                             const textView = args.object as TextView;
//     //                             if (textView.ios) {
//     //                                 const fixedWidth = textView.ios.frame.size.width;
//     //                                 const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                 textView.height = newSize.height + 10;
//     //                             } else if (textView.android) {
//     //                                 textView.height = 'auto';
//     //                                 textView.requestLayout();
//     //                             }
//     //                         });
    
//     //                         // Configure Android-specific behavior
//     //                         if (replyField.android) {
//     //                             replyField.on('loaded', () => {
//     //                                 replyField.android.setMinLines(1);
//     //                                 replyField.android.setMaxLines(5);
//     //                             });
//     //                         }
//     //                     }
    
//     //                     // Toggle visibility on description label tap
//     //                     descriptionLabel.on(GestureTypes.tap, () => {
//     //                         const replyField = this._replyFields[index];
//     //                         if (replyField.visibility === 'collapse') {
//     //                             replyField.visibility = 'visible';
//     //                             descriptionLabel.text = `${item.description} ( Ans )`;
//     //                         } else {
//     //                             replyField.visibility = 'collapse';
//     //                             descriptionLabel.text = `${item.description} ( ans )`;
//     //                         }
//     //                     });
//     //                 }
//     //             });
//     //         } else {
//     //             throw new Error('No data found or invalid response');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error fetching data from service:', error);
//     //         alert(`Failed to fetch data: ${error.message}`);
//     //     }
//     // }
//     // private updateServiceWithData(): void {
//     //     let updateCount = 0;
//     //     const totalUpdates = this._questionnaireIdFields.length;
    
//     //     for (let i = 0; i < totalUpdates; i++) {
//     //         const questionnaireId = this._questionnaireIdFields[i].text; // Questionnaire ID
//     //         let userReply = '';
    
//     //         // Access the reply control and fetch user input based on the type
//     //         const replyControl = this._replyFields[i];
//     //         alert(`${this._itemTypes[i]}`)

            
//     //         if (this._itemTypes[i] === 'RQASTRING') {
//     //             userReply = (replyControl as TextView).text;
//     //         } else if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//     //             userReply = this._payment; // for dropdown or radio button selection
//     //         // } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//     //         //     userReply = this._doc; // for boolean selection (Yes/No)
//     //         // } else if (this._itemTypes[i] === 'RQASTRING') {
//     //         //     userReply = (replyControl as TextView).text; // for text-based reply
//     //         } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//     //             userReply = this._doc; // for boolean selection (Yes/No)
//     //         }
//     //         const updateServiceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
            
//     //         // Prepare the data payload
//     //         const dataPayload = { user_reply: userReply };
    
//     //         // Log the request details for debugging
//     //         console.log(`Updating Questionnaire ID: ${questionnaireId}, User Reply: ${userReply}`);
    
//     //         // Make the HTTP PATCH request to update the service
//     //         Http.request({
//     //             url: updateServiceUrl,
//     //             method: 'PATCH',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             content: JSON.stringify(dataPayload)
//     //         })
//     //         .then(response => {
//     //             if (response.statusCode === 200 || response.statusCode === 204) {
//     //                 updateCount++;
//     //                 if (updateCount === totalUpdates) {
//     //                     alert(`All data updated successfully!`);
//     //                 }
//     //             } else {
//     //                 alert(`Error: Received status code ${response.statusCode} for Questionnaire ID: ${questionnaireId}`);
//     //             }
//     //         })
//     //         .catch(error => {
//     //             alert(`Failed to update Questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//     //         });
//     //     }
//     // }
    


   
    
    
    
    
//     // private async fetchAndPopulateData(clientAPI): Promise<void> {
//     //     try {
//     //         this._docId = this.context.binding.doc_id;
//     //         this._invitationId = this.context.binding.invitationId;
    
//     //         const servicePath = "/quickbid/Services/capoff.service";
//     //         const entitySet1 = "Questionnaire_table";
//     //         const entitySet2 = "Questionnaire_reply_table";
    
//     //         // Define query options
//     //         const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//     //         const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//     //         // Fetch data using clientAPI.read method for both entity sets
//     //         const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
//     //         const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);

//     //         alert(`Result1: ${JSON.stringify(result1)}`);

    
//     //         // Check if results are valid
//     //         if (result1 && result1.length && result2 && result2.length) {
//     //             // Create a map of replies by questionnaire_id
//     //             const repliesMap = result2.reduce((acc, reply) => {
//     //                 acc[reply.questionnaire_id] = reply.user_reply;
//     //                 return acc;
//     //             }, {} as { [key: string]: string });
    
//     //             // Iterate over result1 to populate UI components
//     //             result1.forEach((item, index) => {
//     //                 alert(`Questionnaire ID: ${item.questionnaire_id}, Type: ${item.type}`);
//     //                 if (item && item.type !== "RQAATTACH") {
//     //                     // Add Questionnaire ID Field
//     //                     const qusIdField = new TextField();
//     //                     qusIdField.hint = 'Questionnaire ID';
//     //                     qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                     qusIdField.visibility = 'collapsed';
//     //                     this._mainStackLayout.addChild(qusIdField);
//     //                     this._questionnaireIdFields.push(qusIdField);
    
//     //                     // Add Description Label
//     //                     const descriptionLabel = new Label();
//     //                     descriptionLabel.fontSize = 18;
//     //                     descriptionLabel.horizontalAlignment = 'left';
//     //                     descriptionLabel.marginBottom = 10;
//     //                     descriptionLabel.marginTop = 30;
//     //                     descriptionLabel.text = item.description || 'No description available';
//     //                     this._mainStackLayout.addChild(descriptionLabel);
//     //                     this._descriptionLabels.push(descriptionLabel);
    
//     //                     this._itemTypes[index] = item.type;
    
//     //                     // Populate reply field based on item type
//     //                     if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                         const radioGroupLayout = new StackLayout();
//     //                         if (item.type === 'RQASTRINGListOfChoices') {
//     //                             this.populateRadioOptions(item, radioGroupLayout, index, repliesMap,clientAPI);
//     //                         } else if (item.type === 'RQABOOLEAN') {
//     //                             this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//     //                         }
//     //                         this._mainStackLayout.addChild(radioGroupLayout);
//     //                         this._replyFields[index] = radioGroupLayout;
//     //                     } else if (item.type === "RQASTRING") {
//     //                         alert(`${this._itemTypes}`)
//     //                         const replyField = new TextView();
//     //                         replyField.hint = `User Reply ${index + 1}`;
//     //                         replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply
//     //                         replyField.backgroundColor = 'white';
//     //                         replyField.color = '#000000';
//     //                         replyField.borderRadius = 5;
//     //                         replyField.borderWidth = 1;
//     //                         replyField.borderColor = '#000000';
//     //                         replyField.padding = 10;
//     //                         replyField.width = 288;
//     //                         replyField.horizontalAlignment = 'left';
//     //                         replyField.marginLeft = 7;
//     //                         replyField.marginRight = 7;
//     //                         alert(`${replyField}`)
//     //                         this._mainStackLayout.addChild(replyField);
//     //                         this._replyFields[index] = replyField;
    
//     //                         // Handle text change event
//     //                         replyField.on('textChange', (args) => {
//     //                             const textView = args.object as TextView;
//     //                             if (textView.ios) {
//     //                                 const fixedWidth = textView.ios.frame.size.width;
//     //                                 const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                 textView.height = newSize.height + 10;
//     //                             } else if (textView.android) {
//     //                                 textView.height = 'auto';
//     //                                 textView.requestLayout();
//     //                             }
//     //                         });
    
//     //                         // Configure Android-specific behavior
//     //                         if (replyField.android) {
//     //                             replyField.on('loaded', () => {
//     //                                 replyField.android.setMinLines(1);
//     //                                 replyField.android.setMaxLines(5);
//     //                             });
//     //                         }
//     //                     }
    
//     //                     // Toggle visibility on description label tap
//     //                     descriptionLabel.on(GestureTypes.tap, () => {
//     //                         const replyField = this._replyFields[index];
//     //                         if (replyField.visibility === 'collapse') {
//     //                             replyField.visibility = 'visible';
//     //                             descriptionLabel.text = `${item.description} ( Ans )`;
//     //                         } else {
//     //                             replyField.visibility = 'collapse';
//     //                             descriptionLabel.text = `${item.description} ( ans )`;
//     //                         }
//     //                     });
//     //                 }
//     //             });
//     //         } else {
//     //             throw new Error('No data found or invalid response');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error fetching data from service:', error);
//     //         alert(`Failed to fetch data: ${error.message}`);
//     //     }
//     // }
//     // why the fuction is displaying the description of pastring in the last on the ui before it was showing first
    
//     // private updateServiceWithData(): void {
//     //     let result: string;
//     //     let updateCount = 0;
//     //     const totalUpdates = this._questionnaireIdFields.length;
//     //     // alert(`${JSON.stringify(this._replyFields)}`)
//     //     // alert(`${JSON.stringify(this._userReplies)}`)

//     //     for (let i = 0; i < totalUpdates; i++) {
//     //         const questionnaireId = this._questionnaireIdFields[i].text;
//     //         var userReply 
//     //         const replyControl = this._replyFields[i]; // Ensure we're using the correct reply field
//     //         // alert(`pay${this._payment}`)
//     //         // alert(`ur${this._userReplies}`)
//     //         alert(`it${this._itemTypes}`)
//     //         alert(`it${this._itemTypes[i]}`)
//     //         // Determine the reply based on the item type
//     //         if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//     //             alert("loc")
//     //             this.userReply = this._payment; // Assuming this is set when a choice is selected
//     //         } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//     //             alert("paymt")
//     //             this.userReply = this._doc; // Assuming this is set when a boolean is selected
//     //         } else if (this._itemTypes[i] === 'RQASTRING') {
//     //             // alert(`in${this._itemTypes[i]}`);
//     //             // userReply = (replyControl as TextView).text;
//     //             userReply = this._userReplies
//     //             alert(`in${this.userReply}`)
//     //             // alert(`Accessing replyControl at index ${i}: ${userReply}`);

//     //         //     if (replyControl) {
//     //         //         if (replyControl instanceof TextField || replyControl instanceof TextView) {
//     //         //             // Cast and fetch the text
//     //         //             alert(`Accessing replyControl at index ${i}: ${userReply}`);

//     //         //             alert(`User reply: ${userReply}`);
//     //         //         } else {
//     //         //             alert('ReplyControl is not a valid TextField or TextView');
//     //         //         }
//     //         // }
//     //     }
    
//     //         // if (!userReply) {
//     //         //     alert(`No reply for questionnaire ID: ${questionnaireId}`);
//     //         //     continue;
//     //         // }
    
//     //         // const updateServiceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
            
//     //         // const dataPayload = { user_reply: userReply };
//     //         // alert(`payload ${JSON.stringify(dataPayload)}`)
    
//     //         // Http.request({
//     //         //     url: updateServiceUrl,
//     //         //     method: 'PATCH',
//     //         //     headers: { 'Content-Type': 'application/json' },
//     //         //     content: JSON.stringify(dataPayload)
//     //         // }).then(response => {
//     //         //     result = response.statusCode;
//     //         //     updateCount++;
//     //         //     if (updateCount === totalUpdates && result === 200) {
//     //         //         alert(`Data updated ${JSON.stringify(dataPayload)}`);
//     //         //     }
//     //         // }).catch(error => {
//     //         //     alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//     //         // });

//     //         try {
//     //             // const readLink = `/Questionnaire_reply_table(doc_id='Doc54043991',invitationId='babita.sharam@peolsolutions.com',questionnaire_id='26734968')`;
//     //             const readLink = `/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//     //             // alert(`${readLink}`)

//     //                     // alert(`${this._docId}`);     
//     //                     // alert(`${this._invitationId}`);     
//     //                     // alert(`${questionnaireId}`);     
//     //                     alert(`i${this.userReply}`)     
//     //                     return this._clientAPI.executeAction({
//     //                         'Name': "/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action",
//     //                         'Properties': {
//     //                             'Target': {
//     //                                 'EntitySet': 'Questionnaire_reply_table',
//     //                                 'ReadLink': readLink
//     //                             },
//     //                             'Properties': {
//     //                 //                 'doc_id': "Doc54043991", // Hardcoded document ID
//     //                 // 'invitationId': "babita.sharam@peolsolutions.com", // Hardcoded invitation ID
//     //                 // 'questionnaire_id': "26734968",
//     //                 // 'user_reply': "kkkk"
//     //                 //             }
//     //                     // const readLink = `/Questionnaire_reply_table(doc_id='Doc54043991',invitationId='babita.sharam@peolsolutions.com',questionnaire_id='26734968')`;
//     //                     'doc_id':this._docId,
//     //                     'invitationId':  this._invitationId,
//     //                     'questionnaire_id': questionnaireId,
//     //                     'user_reply':this.userReply
//     //                         }
//     //                     }
//     //                     })
//     //                     .then(() => {
//     //                         alert("Entity updated successfully.");
//     //                     })
//     //                     .catch((error) => {
//     //                         console.error("Error during update: ", error);
//     //                         alert(`Error updating entity: ${JSON.stringify(error.message)}`);
//     //                     });
                    
//     //                 } catch (error) {
//     //                     console.error("Exception in updateServiceWithData: ", error);
//     //                     alert(`Unexpected error: ${error.message}`);
//     //                 }
//     //     }
//     // }
//     private updateServiceWithData(): void {
//         let result: string;
//         let updateCount = 0;
//         const totalUpdates = this._questionnaireIdFields.length;
    
//         for (let i = 0; i < totalUpdates; i++) {
//             const questionnaireId = this._questionnaireIdFields[i].text;
//             const replyControl = this._replyFields[i]; // Ensure we're using the correct reply field
    
//             let userReply = '';
    
//             // Determine the reply based on the item type
//             switch (this._itemTypes[i]) {
//                 case "RQASTRINGListOfChoices":
//                     alert("ListOfChoices");
//                     userReply = this._payment; // Value assigned when choice is selected
//                     break;
    
//                 case 'RQABOOLEAN':
//                     alert("Boolean");
//                     userReply = this._doc; // Value from boolean selection
//                     break;
    
//                 case 'RQASTRING':
//                     alert("String");
//                     userReply = (replyControl as TextView).text; // Get text from TextView
//                     break;
    
//                 default:
//                     alert("Unknown item type");
//                     break;
//             }
    
//             // Log the collected reply
//             alert(`Collected reply for item ${i}: ${userReply}`);
    
//             // Proceed to update the service with the collected reply
//             try {
//                 const readLink = `/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
    
//                 return this._clientAPI.executeAction({
//                     'Name': "/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action",
//                     'Properties': {
//                         'Target': {
//                             'EntitySet': 'Questionnaire_reply_table',
//                             'ReadLink': readLink
//                         },
//                         'Properties': {
//                             'doc_id': this._docId,
//                             'invitationId': this._invitationId,
//                             'questionnaire_id': questionnaireId,
//                             'user_reply': userReply
//                         }
//                     }
//                 })
//                 .then(() => {
//                     alert("Entity updated successfully.");
//                 })
//                 .catch((error) => {
//                     console.error("Error during update: ", error);
//                     alert(`Error updating entity: ${JSON.stringify(error.message)}`);
//                 });
//             } catch (error) {
//                 console.error("Exception in updateServiceWithData: ", error);
//                 alert(`Unexpected error: ${error.message}`);
//             }
//         }
//     }
    
//     // private updateServiceWithData(clientAPI) {
//     //     // Manually constructing the ReadLink for the entity
//     //     const readLink = `/Questionnaire_reply_table(doc_id='Doc54043991',invitationId='babita.sharam@peolsolutions.com',questionnaire_id='26734968')`;
    
//     //     // Save the updated entity back to the context
//     //     return clientAPI.executeAction({
//     //         'Name': "/update/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action", // Your action path
//     //         'Properties': {
//     //             'Target': {
//     //                 'EntitySet': 'Questionnaire_reply_table',
//     //                 'ReadLink': readLink, // Use the manually constructed ReadLink directly
//     //             },
//     //             'Properties': {
//     //                 'doc_id': "Doc54043991", // Hardcoded document ID
//     //                 'invitationId': "babita.sharam@peolsolutions.com", // Hardcoded invitation ID
//     //                 'questionnaire_id': "26734968", // Hardcoded questionnaire ID
//     //                 'user_reply': 'kkkk' // New value for user_reply
//     //             }
//     //         }
//     //     }).then(() => {
//     //         // Success callback
//     //         clientAPI.nativescript.alert("Entity updated successfully.");
//     //     }).catch((error) => {
//     //         // Error callback
//     //         clientAPI.nativescript.alert(`Error updating entity: ${error.message}`);
//     //     });
//     // }

//     // private updateServiceWithData() {
//     //     try {
//     //         const readLink = `/Questionnaire_reply_table(doc_id=,invitationId='babita.sharam@peolsolutions.com',questionnaire_id='26734968')`;
//     //         alert(this._userReplies);     
//     //         return this._clientAPI.executeAction({
//     //             'Name': "/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action",
//     //             'Properties': {
//     //                 'Target': {
//     //                     'EntitySet': 'Questionnaire_reply_table',
//     //                     'ReadLink': readLink
//     //                 },
//     //                 'Properties': {
//     //                     'doc_id': "Doc54043991",
//     //                     'invitationId': "babita.sharam@peolsolutions.com",
//     //                     'questionnaire_id': "26734968",
//     //                     'user_reply': this._userReplies // Ensure _userReplies contains valid data
//     //                 }
//     //             }
//     //         })
//     //         .then(() => {
//     //             alert("Entity updated successfully.");
//     //         })
//     //         .catch((error) => {
//     //             console.error("Error during update: ", error);
//     //             alert(`Error updating entity: ${JSON.stringify(error.message)}`);
//     //         });
        
//     //     } catch (error) {
//     //         console.error("Exception in updateServiceWithData: ", error);
//     //         alert(`Unexpected error: ${error.message}`);
//     //     }
//     // }        

    
//     private async fetchAndPopulateData(clientAPI): Promise<void> {
//         try {
//             this._docId = this.context.binding.doc_id;
//             this._invitationId = this.context.binding.invitationId;
    
//             const servicePath = "/quickbid/Services/capoff.service";
//             const entitySet1 = "Questionnaire_table";
//             const entitySet2 = "Questionnaire_reply_table";
    
//             // Define query options
//             const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//             const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//             // Fetch data using clientAPI.read method for both entity sets
//             const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
//             const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);
    
//             // Check if results are valid
//             if (result1 && result1.length && result2 && result2.length) {
//                 // Create a map of replies by questionnaire_id
//                 const repliesMap = result2.reduce((acc, reply) => {
//                     acc[reply.questionnaire_id] = reply.user_reply;
//                     return acc;
//                 }, {} as { [key: string]: string });
    
//                 // Iterate over result1 to populate UI components
//                 result1.forEach((item, index) => {
//                     if (item && item.type !== "RQAATTACH") {
//                         // Add Questionnaire ID Field
//                         const qusIdField = new TextField();
//                         qusIdField.hint = 'Questionnaire ID';
//                         qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                         qusIdField.visibility = 'collapsed';
//                         this._mainStackLayout.addChild(qusIdField);
//                         this._questionnaireIdFields.push(qusIdField); // Correctly add to array
    
//                         // Add Description Label
//                         const descriptionLabel = new Label();
//                         descriptionLabel.fontSize = 18;
//                         descriptionLabel.horizontalAlignment = 'left';
//                         descriptionLabel.marginBottom = 10;
//                         descriptionLabel.marginTop = 30;
//                         descriptionLabel.text = item.description || 'No description available';
//                         this._mainStackLayout.addChild(descriptionLabel);
//                         this._descriptionLabels.push(descriptionLabel);
    
//                         this._itemTypes.push(item.type); // Ensure the item type is pushed in order
    
//                         // Populate reply field based on item type
//                         if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//                             const radioGroupLayout = new StackLayout();
//                             if (item.type === 'RQASTRINGListOfChoices') {
//                                 this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
//                             } else if (item.type === 'RQABOOLEAN') {
//                                 this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//                             }
//                             this._mainStackLayout.addChild(radioGroupLayout);
//                             this._replyFields.push(radioGroupLayout); // Ensure reply fields are added in the correct order
//                         } else if (item.type === "RQASTRING") {
//                             const replyField = new TextView();
//                             replyField.hint = `User Reply ${index + 1}`;
//                             replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply
//                             replyField.backgroundColor = 'white';
//                             replyField.color = '#000000';
//                             replyField.borderRadius = 5;
//                             replyField.borderWidth = 1;
//                             replyField.borderColor = '#000000';
//                             replyField.padding = 10;
//                             replyField.width = 288;
//                             replyField.horizontalAlignment = 'left';
//                             replyField.marginLeft = 7;
//                             replyField.marginRight = 7;


//                             this._mainStackLayout.addChild(replyField);
//                             this._replyFields.push(replyField); // Add to reply fields

    

//                             // Handle text change event
//                             replyField.on('textChange', (args) => {
//                                 const textView = args.object as TextView;
//                                 this._userReplies = textView.text;
//                                 alert(`tc${ this._userReplies}`)
//                                 if (textView.ios) {
//                                     const fixedWidth = textView.ios.frame.size.width;
//                                     const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//                                     textView.height = newSize.height + 10;
//                                 } else if (textView.android) {
//                                     textView.height = 'auto';
//                                     textView.requestLayout();
//                                 }
//                             });
    
//                             // Configure Android-specific behavior
//                             if (replyField.android) {
//                                 replyField.on('loaded', () => {
//                                     replyField.android.setMinLines(1);
//                                     replyField.android.setMaxLines(5);
//                                 });
//                             }
//                         }
    
//                         // Toggle visibility on description label tap
//                         descriptionLabel.on(GestureTypes.tap, () => {
//                             const replyField = this._replyFields[index];
//                             if (replyField.visibility === 'collapse') {
//                                 replyField.visibility = 'visible';
//                                 descriptionLabel.text = `${item.description} ( Ans )`;
//                             } else {
//                                 replyField.visibility = 'collapse';
//                                 descriptionLabel.text = `${item.description} ( ans )`;
//                             }
//                         });
//                     }
//                 });
//             } else {
//                 throw new Error('No data found or invalid response');
//             }
//         } catch (error) {
//             console.error('Error fetching data from service:', error);
//             alert(`Failed to fetch data: ${error.message}`);
//         }
//     }
    


//     // private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//     //     const radioOptionsUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;
//     //     Http.getJSON(radioOptionsUrl).then(response => {
//     //         if (response && response.value && Array.isArray(response.value)) {
//     //             response.value.forEach((option, optionIndex) => {
//     //                 // const radioButtonLayout = this.createRadioButton1(option.dropdown_value, 'groupName', false);
//     //                 const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', repliesMap[item.questionnaire_id] === option.dropdown_value);

//     //                 radioGroupLayout.addChild(radioButtonLayout);

//     //                 if (index === 0 && optionIndex === 0) {
//     //                     const textBox = new TextField();
//     //                     textBox.hint = `Enter text for ${option.dropdown_value}`;
//     //                     textBox.borderRadius = 5;
//     //                     textBox.borderWidth = 1;
//     //                     textBox.borderColor = 'black';
//     //                     textBox.height = 40;
//     //                     textBox.marginTop = 5;
//     //                     textBox.paddingLeft = 5;
//     //                     radioGroupLayout.addChild(textBox);
//     //                 }
//     //             });
//     //             radioGroupLayout.visibility = 'visible';
//     //             this._replyFields[index] = radioGroupLayout;
//     //         } else {
//     //             throw new Error('Invalid radio options response format');
//     //         }
//     //     }).catch(error => {
//     //         console.error('Error fetching radio options:', error);
//     //         alert('Failed to fetch radio options.');
//     //     });
//     // }
//     private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any, clientAPI): void {
//         const servicePath = "/quickbid/Services/capoff.service";
//         const entitySet = "Dropdown";
//         const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;
    
//         // Using clientAPI to fetch radio options
//         clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
//             // alert(JSON.stringify(response))
//             if (response && response.length) {
//                 response.forEach((option, optionIndex) => {
//                     const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
//                     const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', isSelected);
    
//                     radioGroupLayout.addChild(radioButtonLayout);
    
//                     // If it's the first radio button, add a corresponding text field
//                     if (index === 0 && optionIndex === 0) {
//                         const textBox = new TextField();
//                         textBox.hint = `Enter text for ${option.dropdown_value}`;
//                         textBox.borderRadius = 5;
//                         textBox.borderWidth = 1;
//                         textBox.borderColor = 'black';
//                         textBox.height = 40;
//                         textBox.marginTop = 5;
//                         textBox.paddingLeft = 5;
//                         radioGroupLayout.addChild(textBox);
//                     }
//                 });
//                 radioGroupLayout.visibility = 'visible';
//                 this._replyFields[index] = radioGroupLayout;
//             } else {
//                 throw new Error('Invalid radio options response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching radio options:', error);
//             alert(console.error)
//             // this.displayError(`Failed to fetch radio options: ${error.message}`);
//         });
//     }
    
//     private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//         const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', repliesMap[item.questionnaire_id] === 'Yes');
//         const noRadioButton = this.createRadioButton('No', index, 'boolean', repliesMap[item.questionnaire_id] === 'No');

//         radioGroupLayout.addChild(yesRadioButton);
//         radioGroupLayout.addChild(noRadioButton);
//     }
//     private createRadioButton(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';

//             this._doc = optionText
//         });
//         return radioButtonLayout;
//     }
//     private createRadioButton1(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';
//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;
//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;
//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);
//         radioButtonLayout.on(GestureTypes.tap, () => {
//             const parentLayout = radioButtonLayout.parent as StackLayout;
//             parentLayout.eachChild((child) => {
//                 if (child instanceof StackLayout) {
//                     const indicator = child.getChildAt(0) as Label;
//                     indicator.borderColor = 'black';
//                     indicator.backgroundColor = 'white';
//                 }
//                 return true;
//             });
//             radioIndicator.borderColor = '#51abf1';
//             radioIndicator.backgroundColor = '#51abf1';
//             this._payment = optionText;
//         });
//         return radioButtonLayout;
//     }
// }


export class QuestionnaireClass extends IControl {
    private _descriptionLabels: Label[];
    private _replyFields: Array<TextField | StackLayout>;
    private _questionnaireIdFields: TextField[];
    private _docId: string;
    private _invitationId: string;
    private _saveButton: Button;
    private _mainStackLayout: StackLayout;
    private _itemTypes: string[];
    private _payment: string;
    private _doc: string;
    private _vall: string;
    private _dataLoaded: boolean = false;
    private _userReplies : string;
    private userReply
    // private _docId: string;
    // private _invitationId: string;
    private _clientAPI: any;

    public constructor() {
        super();
        this._descriptionLabels = [];
        this._replyFields = [];
        this._questionnaireIdFields = [];
        this._itemTypes = [];
    }
    public initialize(props) {
        super.initialize(props);
        // Check if clientAPI is available in the context
        const clientAPI = props.context?.clientAPI;
        this._clientAPI = clientAPI
        if (clientAPI) {
          this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
        } else {
          console.error('clientAPI is not available');
        }
      }
    public view(): any {
        if (!this._mainStackLayout) {
            this._mainStackLayout = new StackLayout();
            this._mainStackLayout.orientation = 'vertical';
            // this.fetchAndPopulateData();
            var clientAPI = this.page()?.clientAPI;
            // var clientapi = clientAPI
            if (clientAPI) {
                this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
                this._dataLoaded = true;
              } else {
                console.error('clientAPI is not available');
              }
            let bottomLayout = new StackLayout();
            bottomLayout.height = 100;
            bottomLayout.width = '100%';
            bottomLayout.verticalAlignment = 'bottom';

            let buttonContainer = new StackLayout();
            buttonContainer.horizontalAlignment = 'left';
            buttonContainer.verticalAlignment = 'bottom';
            buttonContainer.width = '100%';

            this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
            buttonContainer.addChild(this._saveButton);

            let pageLayout = new StackLayout();
            pageLayout.addChild(this._mainStackLayout);
            pageLayout.addChild(buttonContainer);

            return pageLayout;
        }
        return this._mainStackLayout;
    }
    private createStyledButton(text: string, onTap: () => void): Button {
        const button = new Button();
        button.text = text;
        button.width = 100;
        button.height = 50;
        button.marginTop = 25;
        button.borderRadius = 25;
        button.backgroundColor = '#51abf1';
        button.color = '#FFFFFF';
        button.horizontalAlignment = 'left';
        button.on(Button.tapEvent, onTap);
        return button;
    }
 
   
    // private updateServiceWithData(): void {
    //     let updateCount = 0;
    //     const totalUpdates = this._questionnaireIdFields.length;
    //             // alert(`User Reply: ${this._payment}`);
    //             // alert(`User Reply: ${this._doc}`);
    //     for (let i = 0; i < totalUpdates; i++) {
    //         const questionnaireId = this._questionnaireIdFields[i].text;
    //         let userReply;
    //         const replyControl = this._replyFields[i];
    //         if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
    //             // alert("RQASTRINGListOfChoices detected");
    //             userReply = this._payment;
    //         } else if (this._itemTypes[i] === 'RQABOOLEAN') {
    //             // alert("RQABOOLEAN detected");
    //             userReply = this._doc;
    //         } else if (this._itemTypes[i] === 'RQASTRING') {
    //             // alert("in")
    //             // alert(`${this._userReplies}`)
    //             userReply =  this._userReplies
    //             // alert("RQASTRING detected");
    //             // this.userReply = this._userReplies;
    //             // if (Object.keys(this._userReplies).length === 0) {
    //             //     // Handle the case where no reply was given, setting it to null or default value
    //             //     this.userReply = null; // or '' if you want an empty string instead
    //             // } else if (this._userReplies === '') {
    //             //     // User interacted with the field but gave an empty response
    //             //     this.userReply = ''; // Keep it as empty string (intentional blank answer)
    //             // } else {
    //             //     this.userReply = this._userReplies;
    //             // }
    //             // alert(`User Reply: ${this._userReplies}`);
    //         }
    //                             // alert(`User Reply: ${JSON.stringify(this.userReply)}`);

    //         if (userReply != null ) {
    //         try {
    //                 // alert(`User Reply: ${JSON.stringify(this.userReply)}`);

    //             const readLink = `/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
    //             // alert(`ReadLink: ${readLink}`);

    //             this._clientAPI.executeAction({
    //                 'Name': "/quickbid/Actions/capoff/Questionnaire_reply_table/Questionnaire_reply_table_UpdateEntity.action",
    //                 'Properties': {
    //                     'Target': {
    //                         'EntitySet': 'Questionnaire_reply_table',
    //                         'ReadLink': readLink
    //                     },
    //                     'Properties': {
    //                         'doc_id': this._docId,
    //                         'invitationId': this._invitationId,
    //                         'questionnaire_id': questionnaireId,
    //                         'user_reply': userReply
    //                     }
    //                 }
    //             }).then(() => {
    //                 // alert("Entity updated successfully.");
    //             }).catch((error) => {
    //                 console.error("Error during update: ", error);
    //                 alert(`Error updating entity: ${JSON.stringify(error.message)}`);
    //             });
    //         }
    //       catch (error) {
    //             console.error("Exception in updateServiceWithData: ", error);
    //             alert(`Unexpected error: ${error.message}`);
    //         }
    //         }
    //     }
    // }
    private updateServiceWithData(): void {
        let updateCount = 0;
        const totalUpdates = this._questionnaireIdFields.length;
    
        const updatePromises = this._questionnaireIdFields.map((questionnaireIdField, i) => {
            const questionnaireId = questionnaireIdField.text;
            let userReply;
    
            const replyControl = this._replyFields[i];
            if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
                userReply = this._payment;
            } else if (this._itemTypes[i] === 'RQABOOLEAN') {
                userReply = this._doc;
            } else if (this._itemTypes[i] === 'RQASTRING') {
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
                    alert(`Error updating questionnaire ID ${questionnaireId}: ${error.message}`);
                });
            }
    
            // Return a resolved promise if no user reply is provided
            return Promise.resolve();
        });
    
        // Execute the actions after all updates
        Promise.all(updatePromises).then(() => {
            // Now execute the UploadOffline action after all updates are complete
            return this._clientAPI.executeAction({
                'Name': "/quickbid/Actions/capoff/Service/UploadOffline.action"
            });
        }).then(() => {
            // alert("All updates are done, and the UploadOffline action has been executed.");
        }).catch((error) => {
            console.error("Error during the UploadOffline action: ", error);
            // alert(`Error during the UploadOffline action: ${error.message}`);
            if (error.message && error.message.includes("Failed to establish a socket connection to the server")) {
                // alert("Currently Offline: Any changes you make will be saved locally and synced once you reconnect to the internet.");
            } else {
                alert(`Error during the UploadOffline action: ${error.message}`);
            }
        });
    }
    
    private async fetchAndPopulateData(clientAPI): Promise<void> {
        try {
            this._docId = this.context.binding.doc_id;
            this._invitationId = this.context.binding.invitationId;
    
            const servicePath = "/quickbid/Services/capoff.service";
            const entitySet1 = "Questionnaire_table";
            const entitySet2 = "Questionnaire_reply_table";
    
            // Define query options
            const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
            // Fetch data using clientAPI.read method for both entity sets
            const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
            const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);
    
            // Check if results are valid
            if (result1 && result1.length && result2 && result2.length) {
                // Create a map of replies by questionnaire_id
                const repliesMap = result2.reduce((acc, reply) => {
                    acc[reply.questionnaire_id] = reply.user_reply;
                    return acc;
                }, {} as { [key: string]: string });
    
                // Iterate over result1 to populate UI components
                result1.forEach((item, index) => {
                    if (item && item.type !== "RQAATTACH") {
                        // Add Questionnaire ID Field
                        const qusIdField = new TextField();
                        qusIdField.hint = 'Questionnaire ID';
                        qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
                        qusIdField.visibility = 'collapsed';
                        this._mainStackLayout.addChild(qusIdField);
                        this._questionnaireIdFields.push(qusIdField); // Correctly add to array
    
                        // Add Description Label
                        const descriptionLabel = new Label();
                        descriptionLabel.fontSize = 18;
                        descriptionLabel.horizontalAlignment = 'left';
                        descriptionLabel.marginBottom = 10;
                        descriptionLabel.marginTop = 30;
                        descriptionLabel.text = item.description || 'No description available';
                        this._mainStackLayout.addChild(descriptionLabel);
                        this._descriptionLabels.push(descriptionLabel);
    
                        this._itemTypes.push(item.type); // Ensure the item type is pushed in order
    
                        // Populate reply field based on item type
                        if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
                            const radioGroupLayout = new StackLayout();
                            if (item.type === 'RQASTRINGListOfChoices') {
                                this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
                            } else if (item.type === 'RQABOOLEAN') {
                                this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
                            }
                            this._mainStackLayout.addChild(radioGroupLayout);
                            this._replyFields.push(radioGroupLayout); // Ensure reply fields are added in the correct order
                        } else if (item.type === "RQASTRING") {
                            const replyField = new TextView();
                            replyField.hint = `User Reply ${index + 1}`;
                            replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply
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
                            this._replyFields.push(replyField); // Add to reply fields
// Handle text change event
                            replyField.on('textChange', (args) => {
                                const textView = args.object as TextView;
                                this._userReplies = textView.text;
                                this._replyFields.push(textView.text);

                                if (textView.ios) {
                                    const fixedWidth = textView.ios.frame.size.width;
                                    const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
                                    textView.height = newSize.height + 10;
                                } else if (textView.android) {
                                    textView.height = 'auto';
                                    textView.requestLayout();
                                }
                            });
                            // Configure Android-specific behavior
                            if (replyField.android) {
                                replyField.on('loaded', () => {
                                    replyField.android.setMinLines(1);
                                    replyField.android.setMaxLines(5);
                                });
                            }
                        }
                        // Toggle visibility on description label tap
                        descriptionLabel.on(GestureTypes.tap, () => {
                            try{
                            const replyField = this._replyFields[index];
                            if (replyField.visibility === 'collapse') {
                                replyField.visibility = 'visible';
                                descriptionLabel.text = `${item.description} ( Ans )`;
                            } else {
                                replyField.visibility = 'collapse';
                                descriptionLabel.text = `${item.description} ( ans )`;
                            }
                        }catch(error){
                            alert(`${error.message}`)
                        }
                        });
                    }
                });
            } else {
                throw new Error('No data found or invalid response');
            }
        } catch (error) {
            console.error('Error fetching data from service:', error);
            alert(`Failed to fetch data: ${error.message}`);
        }
    }
    private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any, clientAPI): void {
        const servicePath = "/quickbid/Services/capoff.service";
        const entitySet = "Dropdown";
        const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;
    
        // Using clientAPI to fetch radio options
        clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
            // alert(JSON.stringify(response))
            if (response && response.length) {
                response.forEach((option, optionIndex) => {
                    const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
                    const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', isSelected);
    
                    radioGroupLayout.addChild(radioButtonLayout);
    
                    // If it's the first radio button, add a corresponding text field
                    if (index === 0 && optionIndex === 0) {
                        const textBox = new TextField();
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
            } else {
                throw new Error('Invalid radio options response format');
            }
        }).catch(error => {
            console.error('Error fetching radio options:', error);
            alert(console.error)
            // this.displayError(`Failed to fetch radio options: ${error.message}`);
        });
    }
    
    private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
        const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', repliesMap[item.questionnaire_id] === 'Yes');
        const noRadioButton = this.createRadioButton('No', index, 'boolean', repliesMap[item.questionnaire_id] === 'No');

        radioGroupLayout.addChild(yesRadioButton);
        radioGroupLayout.addChild(noRadioButton);
    }
    private createRadioButton(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
        const radioButtonLayout = new StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';
        const radioIndicator = new Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;
        const radioLabel = new Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;
        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);
        radioButtonLayout.on(GestureTypes.tap, () => {
            const parentLayout = radioButtonLayout.parent as StackLayout;
            parentLayout.eachChild((child) => {
                if (child instanceof StackLayout) {
                    const indicator = child.getChildAt(0) as Label;
                    indicator.borderColor = 'black';
                    indicator.backgroundColor = 'white';
                }
                return true;
            });
            radioIndicator.borderColor = '#51abf1';
            radioIndicator.backgroundColor = '#51abf1';

            this._doc = optionText
        });
        return radioButtonLayout;
    }
    private createRadioButton1(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
        const radioButtonLayout = new StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';
        const radioIndicator = new Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;
        const radioLabel = new Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;
        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);
        radioButtonLayout.on(GestureTypes.tap, () => {
            const parentLayout = radioButtonLayout.parent as StackLayout;
            parentLayout.eachChild((child) => {
                if (child instanceof StackLayout) {
                    const indicator = child.getChildAt(0) as Label;
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