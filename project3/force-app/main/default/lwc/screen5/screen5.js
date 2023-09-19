import { LightningElement,track } from 'lwc';

export default class Screen5 extends LightningElement {

    @track selectedDateTime;

    get formattedDate() {
        if (this.selectedDateTime) {
            // Extract the date part from the datetime string
            return this.selectedDateTime.split('T')[0];
        }
        return '';
    }

    handleDateChange(event) {
        this.selectedDateTime = event.target.value;
    }
}