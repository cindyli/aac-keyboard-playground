import { useCallback } from "preact/hooks";
import { html } from "htm/preact";
import { IAacKey } from "./index.d";

export function AacKey(aacKeyProps: IAacKey) {
  const onClick = useCallback(() => {
    alert("clicked");
  }, null);

  return html`
  <button id=${aacKeyProps.id} 
    style="
      background-color: ${aacKeyProps.backgroundColor};
      grid-column: ${aacKeyProps.columnStart} / span ${aacKeyProps.columnSpan};
      grid-row: ${aacKeyProps.rowStart} / span ${aacKeyProps.rowSpan};
    "
    onClick=${onClick}
  >
    ${aacKeyProps.label}
  </button>`;
}
