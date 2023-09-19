// opportunityList.js
import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/controlOppo.getOpportunities';

export default class screen8 extends LightningElement {
    opportunities;
    @wire(getOpportunities)
    
    wiredOpportunities({ error, data }) {
        if (data) {
            this.opportunities = data;
        } else if (error) {
            console.error('Error fetching opportunities:', error);
        }
    }
}
