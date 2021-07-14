import { LightningElement } from 'lwc';
export default class ProgressIndicatorBasic extends LightningElement {
    type = "path"

      handleClick(event) {
        const buttonLabel= event.target.label;
        if (this.type !== buttonLabel) {
          this.type = buttonLabel
        }
    }
}