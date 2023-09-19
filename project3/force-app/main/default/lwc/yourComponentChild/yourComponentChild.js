// YourComponentChild.js
import { LightningElement, api } from 'lwc';

export default class YourComponentChild extends LightningElement {
    @api cases;

    handleChildButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;
        this.dispatchEvent(new CustomEvent('buttonclick', { detail: selectedCaseId }));
    }

    handleChildCancelButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;
        this.dispatchEvent(new CustomEvent('cancelbuttonclick', { detail: selectedCaseId }));
    }

    navigateToCaseRecord(event) {
        const recordId = event.currentTarget.dataset.recordId;
        this.dispatchEvent(new CustomEvent('navigatetocaserecord', { detail: recordId }));
    }
}
