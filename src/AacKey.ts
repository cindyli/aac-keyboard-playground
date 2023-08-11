import { Attributes, Component } from "preact";
import { html } from "htm/preact";
import { IAacKey } from "./types";

export class AacKey extends Component<IAacKey, {}> {
    constructor(props: IAacKey) {
        super(props);
    }

    onClick() {
        alert("clicked");
    }
    
    render() {
        return html`
        <button id=${this.props.id} 
            style="
                background-color: ${this.props.backgroundColor};
                grid-column: ${this.props.columnStart} / span ${this.props.columnSpan};
                grid-row: ${this.props.rowStart} / span ${this.props.rowSpan};
            "
            onClick=${this.onClick}
        >
            ${this.props.label}
        </button>`;
	}
}
