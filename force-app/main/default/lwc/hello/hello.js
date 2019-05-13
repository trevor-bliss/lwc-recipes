import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    greeting = 'World';

    renderedCallback() {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('>>> position: ', position);
        });
    }
}
