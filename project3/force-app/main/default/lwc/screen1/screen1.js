import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DEPT_FIELD from '@salesforce/schema/Contact.Department';
import LSOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
import LEVEL_FIELD from '@salesforce/schema/Contact.Level__c';

export default class screen1 extends LightningElement {

    @track contacts = [];

    @track showForm2 = false;
        // Expose field names as strings
    fnameField = FNAME_FIELD.fieldApiName;
    lnameField = LNAME_FIELD.fieldApiName;
    emailField = EMAIL_FIELD.fieldApiName;
    deptField = DEPT_FIELD.fieldApiName;
    lsourceField = LSOURCE_FIELD.fieldApiName;
    levelField = LEVEL_FIELD.fieldApiName;


    handleCreateSuspect() {
        const form = this.template.querySelector('lightning-record-edit-form');
        if (form) {
            form.submit();
                }
    }

    @track showForm1 = false;
    handleCancel()
    {
        this.showForm1 = false;
        this.showForm2 = true;

    }



    handleSuccess(event) {
        this.showForm2 = true;

        const newContact = event.detail.id; // Assuming that the event.detail.id contains the new contact's Id
        this.contacts = [...this.contacts, newContact];
    
        const toastEvent = new ShowToastEvent({
            title: "Contact Created Successfully!",
            message: "Contact Created",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}