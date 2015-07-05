require('document-register-element');
var copy = require('copy-to-clipboard');
var CopyButtonPrototype = Object.create(HTMLButtonElement.prototype);

function handleCopyClick (e) {
  var toCopy, toCopyEl;
  if (toCopy = this.getAttribute('target-text')) {
    return copy(toCopy);
  }
  if (toCopy = this.getAttribute('target-element')) {
    toCopyEl = document.querySelector(toCopy);
    return copy(toCopyEl.value || toCopyEl.textContent || toCopyEl.innerText || '');
  }
}

CopyButtonPrototype.createdCallback = function() {
  var button = document.createElement("button");
  if (this.childNodes.length) {
    var node;
    while (node = this.firstChild) {
      button.appendChild(node);
    }
  } else {
    button.appendChild(document.createTextNode('Click to copy to clipboard'));
  }
  this.appendChild(button);
  this.onclick = handleCopyClick;
};

var CopyButton = document.registerElement('copy-button', {
  prototype: CopyButtonPrototype,
});
