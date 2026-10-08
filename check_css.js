const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf8');

let inString = false;
let strChar = '';
let inComment = false;

for (let i = 0; i < css.length; i++) {
  const c = css[i];
  const next = css[i+1];
  
  if (inComment) {
    if (c === '*' && next === '/') {
      inComment = false;
      i++;
    }
  } else if (inString) {
    if (c === strChar && css[i-1] !== '\\') {
      inString = false;
    }
  } else {
    if (c === '/' && next === '*') {
      inComment = true;
      i++;
    } else if (c === '"' || c === "'") {
      inString = true;
      strChar = c;
    }
  }
}
console.log('Unclosed comment?', inComment);
console.log('Unclosed string?', inString);

