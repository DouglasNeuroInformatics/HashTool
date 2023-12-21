import { sha512 } from 'hash-wasm';

import './style.css';

const input = document.getElementById('input-text') as HTMLInputElement;
const output = document.getElementById('output-text') as HTMLInputElement;

input?.addEventListener('input', (event) => {
  const value = (event.target as HTMLInputElement).value;
  if (!value) {
    output.value = '';
  } else {
    sha512(value).then((result) => {
      output.value = result;
    });
  }
});
