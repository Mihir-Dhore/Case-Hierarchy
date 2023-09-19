// YourComponent.js
import { LightningElement, wire, track } from 'lwc';
import getCaseData from '@salesforce/apex/CaseHierarchyController.getCaseData';
import getChildCases from '@salesforce/apex/CaseHierarchyController.getChildCases'; // Adjust the import to match your Apex class.
import { NavigationMixin } from 'lightning/navigation';

export default class YourComponent extends NavigationMixin(LightningElement) {
    @track cases;

    @wire(getCaseData)
    wiredCases({ error, data }) {
        if (data) {
            this.cases = data.map((myCase) => ({
                ...myCase,
                showChildDataTemplate: false,
                childCases: [], // Initialize an empty array for child cases.
            }));
        } else if (error) {
            console.error('Error fetching cases:', error);
        }
    }

    handleButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;

        // Toggle the "showChildDataTemplate" property for the selected Case to true
        this.cases = this.cases.map((myCase) => ({
            ...myCase,
            showChildDataTemplate: myCase.Id === selectedCaseId ? true : false,
        }));

        if (this.cases.find((myCase) => myCase.Id === selectedCaseId).showChildDataTemplate) {
            // Fetch child cases when expanding the parent case.
            getChildCases({ parentId: selectedCaseId })
                .then((result) => {
                    this.cases = this.cases.map((myCase) => ({
                        ...myCase,
                        childCases: myCase.Id === selectedCaseId ? result : myCase.childCases,
                    }));
                })
                .catch((error) => {
                    console.error('Error fetching child cases:', error);
                });
        }
    }

    handleCancelButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;

        // Set the "showChildDataTemplate" property for the selected Case to false
        this.cases = this.cases.map((myCase) => ({
            ...myCase,
            showChildDataTemplate: myCase.Id === selectedCaseId ? false : myCase.showChildDataTemplate,
        }));
    }

    // For Child Buttons
    handleChildButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;

        // Toggle the "showChildDataTemplate" property for the selected Child Case to true
        this.cases = this.cases.map((myCase) => ({
            ...myCase,
            showChildDataTemplate: myCase.Id === selectedCaseId ? true : myCase.showChildDataTemplate,
        }));

        if (this.cases.find((myCase) => myCase.Id === selectedCaseId).showChildDataTemplate) {
            // Fetch child cases when expanding the child case.
            this.cases = this.cases.map((myCase) => ({
                ...myCase,
                childCases: myCase.Id === selectedCaseId ? [] : myCase.childCases, // Clear any previous child cases.
            }));

            getChildCases({ parentId: selectedCaseId })
                .then((result) => {
                    this.cases = this.cases.map((myCase) => ({
                        ...myCase,
                        childCases: myCase.Id === selectedCaseId ? result : myCase.childCases,
                    }));
                })
                .catch((error) => {
                    console.error('Error fetching child cases:', error);
                });
        }
    }

    handleChildCancelButtonClick(event) {
        const selectedCaseId = event.currentTarget.dataset.recordId;

        // Set the "showChildDataTemplate" property for the selected Child Case to false
        this.cases = this.cases.map((myCase) => ({
            ...myCase,
            showChildDataTemplate: myCase.Id === selectedCaseId ? false : myCase.showChildDataTemplate,
        }));
    }

    navigateToCaseRecord(event) {
        const recordId = event.currentTarget.dataset.recordId;

        // Navigate to the Case Record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                objectApiName: 'Case',
                actionName: 'view',
            },
        });
    }
}

