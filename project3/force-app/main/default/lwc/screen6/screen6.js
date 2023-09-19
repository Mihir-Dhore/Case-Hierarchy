import { LightningElement, track } from 'lwc';
import wpicons from '@salesforce/resourceUrl/wpicon';
import arrowicon from '@salesforce/resourceUrl/upwardArrow';
import cancelimg from '@salesforce/resourceUrl/cancel';

export default class Screen6 extends LightningElement {

    wpicon = wpicons;
    upwardArrow = arrowicon;
    cancel = cancelimg;

    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'Budget', value: 'inProgress' },
            { label: 'Low Budget', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }


    @track isRejected = false;
    handleRejectClick()
    {
         this.isRejected = true;

    }
//pop-up
    @track isInterested = false;
    handleInterestClick()
    {
        this.isInterested = true;
    }
    handleCancelcall() {
        // Close the modal or perform any other cancel action here
        // For example, you can set isRejected to false to hide the modal
        this.isInterested = false;
    }

    
    //cancel option
    handleCancel() {
        // Close the modal or perform any other cancel action here
        // For example, you can set isRejected to false to hide the modal
        this.isRejected = false;
    }


    // Sort by
    @track showSortByList = false;
    selectedSortBy = '';
    
    sortByOptions = [
        { label: 'Option 1', value: 'option1' }, 
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' },
        { label: 'Option 6', value: 'option6' },
        { label: 'Option 7', value: 'option7' },
        { label: 'Option 8', value: 'option8' },
        { label: 'Option 9', value: 'option9' },
        { label: 'Option 10', value: 'option10' },


    
    ];

 
    handleuparrow()
    {
        this.showSortByList = !this.showSortByList;

    }
    handleSortByChange(event) {
        this.selectedSortBy = event.detail.value;
        // Handle the selected sorting option here
    }
    //cancel option
    handleCancell() {
        // Close the modal or perform any other cancel action here
        // For example, you can set isRejected to false to hide the modal
        this.showSortByList = false;
    }

    
    // <!--  for time in Boxes-->
    @track timeoxex = true;
      @track hours = '';
    @track minutes = '';
    @track amPm = 'AM';
     handleHoursChange(event) {
        this.hours = event.target.value;
    }
    handleMinutesChange(event) {
        this.minutes = event.target.value;
    }
    handleAmPmChange(event) {
        this.amPm = event.target.value;
    }
}