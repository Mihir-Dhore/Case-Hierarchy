import { LightningElement, track } from 'lwc';

export default class MultiSearchBars extends LightningElement {
    @track developer1Options = [
        { id: 'option1', label: ' supertech' },
        { id: 'option2', label: ' Hightech' },
          { id: 'option3', label: ' Bio Tech' },
        { id: 'option4', label: ' Lowtect' },
     ] ;

    @track developer2Options = [
        { id: 'option5', label: ' Shilpa Arcadia' },
        { id: 'option6', label: ' Falcon' },
        { id: 'option7', label: ' TechHub' },
        { id: 'option8', label: ' Webapp' },
    ];

    @track developer3Options = [
        { id: 'option9', label: ' Maharashtra' },
        { id: 'option10', label: ' Gujrat' },
        { id: 'option11', label: ' Punjab' },
        { id: 'option12', label: ' UP' },
    ];

    @track developer4Options = [
        { id: 'option13', label: ' Sector 1' },
        { id: 'option14', label: ' Sector 2' },
        { id: 'option15', label: ' Sector 3' },
        { id: 'option16', label: ' Sector 4' },
    ];

    // Developer 1
    @track filteredOptions1 = [];
    @track selectedOptions1 = [];
    @track isOptionsListOpen1 = false;

    handleSearch1(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredOptions1 = this.developer1Options.filter(option =>
            option.label.toLowerCase().includes(searchTerm)
        );
        this.isOptionsListOpen1 = true;
    }

    handleCheckboxChange1(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer1Options.find(option => option.id === optionId);

        if (event.target.checked) {
            this.selectedOptions1 = [...this.selectedOptions1, selectedOption];
            this.filteredOptions1 = this.filteredOptions1.filter(
                option => option.id !== optionId
            );
        } else {
            this.selectedOptions1 = this.selectedOptions1.filter(
                option => option.id !== optionId
            );
            this.filteredOptions1.push(selectedOption);
        }

        this.isOptionsListOpen1 = false;
    }

    removeSelectedOption1(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer1Options.find(option => option.id === optionId);
        this.selectedOptions1 = this.selectedOptions1.filter(
            option => option.id !== optionId
        );
        this.filteredOptions1.push(selectedOption);
    }

    // Developer 2
    @track filteredOptions2 = [];
    @track selectedOptions2 = [];
    @track isOptionsListOpen2 = false;

    handleSearch2(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredOptions2 = this.developer2Options.filter(option =>
            option.label.toLowerCase().includes(searchTerm)
        );
        this.isOptionsListOpen2 = true;
    }

    handleCheckboxChange2(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer2Options.find(option => option.id === optionId);

        if (event.target.checked) {
            this.selectedOptions2 = [...this.selectedOptions2, selectedOption];
            this.filteredOptions2 = this.filteredOptions2.filter(
                option => option.id !== optionId
            );
        } else {
            this.selectedOptions2 = this.selectedOptions2.filter(
                option => option.id !== optionId
            );
            this.filteredOptions2.push(selectedOption);
        }

        this.isOptionsListOpen2 = false;
    }

    removeSelectedOption2(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer2Options.find(option => option.id === optionId);
        this.selectedOptions2 = this.selectedOptions2.filter(
            option => option.id !== optionId
        );
        this.filteredOptions2.push(selectedOption);
    }

    // Developer 3 - Similar methods as Developer 1 and 2

    @track filteredOptions3 = [];
    @track selectedOptions3 = [];
    @track isOptionsListOpen3 = false;

    handleSearch3(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredOptions3 = this.developer3Options.filter(option =>
            option.label.toLowerCase().includes(searchTerm)
        );
        this.isOptionsListOpen3 = true;
    }

    handleCheckboxChange3(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer3Options.find(option => option.id === optionId);

        if (event.target.checked) {
            this.selectedOptions3 = [...this.selectedOptions3, selectedOption];
            this.filteredOptions3 = this.filteredOptions3.filter(
                option => option.id !== optionId
            );
        } else {
            this.selectedOptions3 = this.selectedOptions3.filter(
                option => option.id !== optionId
            );
            this.filteredOptions3.push(selectedOption);
        }

        this.isOptionsListOpen3 = false;
    }

    removeSelectedOption3(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer3Options.find(option => option.id === optionId);
        this.selectedOptions3 = this.selectedOptions3.filter(
            option => option.id !== optionId
        );
        this.filteredOptions3.push(selectedOption);
    }

    // Developer 4 - Similar methods as Developer 1 and 2

    @track filteredOptions4 = [];
    @track selectedOptions4 = [];
    @track isOptionsListOpen4 = false;

    handleSearch4(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredOptions4 = this.developer4Options.filter(option =>
            option.label.toLowerCase().includes(searchTerm)
        );
        this.isOptionsListOpen4 = true;
    }

    handleCheckboxChange4(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer4Options.find(option => option.id === optionId);

        if (event.target.checked) {
            this.selectedOptions4 = [...this.selectedOptions4, selectedOption];
            this.filteredOptions4 = this.filteredOptions4.filter(
                option => option.id !== optionId
            );
        } else {
            this.selectedOptions4 = this.selectedOptions4.filter(
                option => option.id !== optionId
            );
            this.filteredOptions4.push(selectedOption);
        }

        this.isOptionsListOpen4 = false;
    }

    removeSelectedOption4(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.developer4Options.find(option => option.id === optionId);
        this.selectedOptions4 = this.selectedOptions4.filter(
            option => option.id !== optionId
        );
        this.filteredOptions4.push(selectedOption);
    }


}
