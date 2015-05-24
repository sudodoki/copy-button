require('document-register-element');
var copy = require('copy-to-clipboard');
var CopyButtonPrototype = Object.create(HTMLButtonElement.prototype);

function handleCopyClick (e) {
  var toCopy, toCopyEl;
  if (toCopy = this.getAttribute('target-text')) {
    return copy(toCopy);
  }
  if (toCopy = this.getAttribute('target-element')) {
    if (toCopy.charAt(0) === '#') {
      toCopyEl = document.getElementById(toCopy.slice(1));
    } else {
      toCopyEl = document.querySelectorAll(toCopy)[0];
    }
    return copy(toCopyEl.value || toCopyEl.innerText || toCopyEl.textContent);
  }
}

CopyButtonPrototype.createdCallback = function() {
  var button = document.createElement("button");
  if (this.childNodes.length) {
    var allNodesLength = this.childNodes.length;
    for (var i=0; i<allNodesLength; i++) {
      button.appendChild(this.childNodes[0]);
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
