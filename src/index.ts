import "preact/debug";
import { render } from "preact";
import { html } from "htm/preact";
import { AacKey } from "./AacKey";
import blissLogo from "./assets/bliss.svg";
import Keyboards from "./data/Keyboards.json";
import "./index.scss";

const bmwKeyboard = Keyboards.bmw;

function App() {
  return html`
  <div>
    <a href="https://www.blissymbolics.org/" target="_blank">
      <img src=${blissLogo} alt="Bliss logo" height="160" width="160" />
    </a>
    <h1>AAC Keyboard Playground </h1>
    <div class="keyboard" style="grid-template-columns: repeat(${bmwKeyboard.columns}, 1fr); grid-template-rows: repeat(${bmwKeyboard.rows}, 1fr)">
    ${Object.entries(bmwKeyboard.cells).map(([key, value]) =>html`
      <${AacKey}
        id=${key}
        label=${value.label}
        backgroundColor=${value.backgroundColor}
        rowStart=${value.rowStart}
        rowSpan=${value.rowSpan}
        columnStart=${value.columnStart}
        columnSpan=${value.columnSpan}
      />`)}
    </div>
  </div>
`;
}

render(html`<${App} />`, document.getElementById("app"));
