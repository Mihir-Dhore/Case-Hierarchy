import { LightningElement, track } from 'lwc';
import naturephoto from '@salesforce/resourceUrl/NatureScreen7';
import Mihir from '@salesforce/resourceUrl/MihirPhoto';

export default class Screen7 extends LightningElement {

    
    NatureScreen7 = naturephoto;
    MihirPhoto = Mihir;

    @track progressItems = [
        { label: 'Eco-Travel', value: 75, color: '#0070d2' }, // Blue color for 75%
        { label: 'Business', value: 50, color: '#ff9900' },  // Orange color for 50%
        { label: 'Leisure', value: 25, color: '#33b359' }   // Green color for 25%
    ];

    getProgressStyle(value) {
        const circumference = 2 * Math.PI * 15.9155; // Circumference of the circle

        // Calculate stroke-dasharray based on the percentage value
        const dasharray = (value / 100) * circumference;

        // Calculate stroke-dashoffset to start from the beginning
        const dashoffset = circumference - dasharray;

        return `stroke-dasharray: ${dasharray}; stroke-dashoffset: ${dashoffset};`;

        
    }
}