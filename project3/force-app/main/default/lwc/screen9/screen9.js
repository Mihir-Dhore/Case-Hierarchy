import { LightningElement, track } from 'lwc';
import carimage from '@salesforce/resourceUrl/carimageee';

export default class screen9 extends LightningElement {
    @track carimageee = carimage;
    handleredcolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(0deg)';
    }
    handlebluecolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(240deg)';
    }
    handlelimegreencolor()
    {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(120deg)';

    }
    handlepinkcolor()
    {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(330deg)';

    }
    handlepinkcolor()
    {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(330deg)';

    }
    handleturquoisecolor()
    {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(180deg)';

    }
 
 }
