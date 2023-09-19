// screen2.js
import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi'; // Import the createRecord function
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
import LEVEL_FIELD from '@salesforce/schema/Contact.Level__c';
import getContacts from '@salesforce/apex/ContactController.getContacts'; // Import an Apex method to retrieve contacts

export default class Screen2 extends LightningElement {
        @track showSuspect = false;

        handleSuspects()
        {
            this.showSuspect = true;
            location.reload();
 
     
        }
        @track showFilter = false;
        handleFilter()
        {
            this.showFilter = !this.showFilter; // Toggle the Filter screen
     
         
        }


    @track contacts;
    @track newContact = {};
    @track showNewContactDetails = false;

    objectApiName = CONTACT_OBJECT;
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_FIELD, MOBILE_PHONE_FIELD, LEAD_SOURCE_FIELD, LEVEL_FIELD];

    // Fetch the list of contacts using an Apex method
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error('Error loading contacts:', error);
        }
    }

    handleSelect(event) {
        // Handle checkbox selection (you can implement this part as needed)
    }

    // Create a new contact record and show its details
    async handleTransfer() {
        const fields = this.fields.reduce((acc, field) => {
            acc[field.fieldApiName] = this.newContact[field.fieldApiName];
            return acc;
        }, {});
        
        // Use the createRecord function to create a new contact record
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
        try {
            const record = await createRecord(recordInput);
            this.newContact.Id = record.id;
            this.showNewContactDetails = true;

            const toastEvent = new ShowToastEvent({
                title: "Contact created",
                message: "Record ID: " + record.id,
                variant: "success"
            });
            this.dispatchEvent(toastEvent);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
    }

    // Toggle the visibility of the new contact details section
    toggleNewContactDetails() {
        this.showNewContactDetails = !this.showNewContactDetails;
    }
}
