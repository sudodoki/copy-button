'use strict';
require('document-register-element');
var copy = require('copy-to-clipboard');
var CopyButtonPrototype = Object.create(HTMLButtonElement.prototype);

function handleCopyClick() {
  if (this.hasAttribute('target-text')) {
    return copy(this.getAttribute('target-text'));
  }
  if (this.hasAttribute('target-element')) {
    var toCopyEl = document.querySelector(this.getAttribute('target-element'));
    return copy(toCopyEl.value || toCopyEl.textContent || '');
  }
}

CopyButtonPrototype.createdCallback = function() {
  var button = document.createElement('button');
  if (this.childNodes.length) {
    var node;
    while (node = this.firstChild) {
      button.appendChild(node);
    }
  } else {
    button.textContent = 'Click to copy to clipboard';
  }
  this.appendChild(button);
  this.addEventListener('click', handleCopyClick);
};

var CopyButton = document.registerElement('copy-button', {
  prototype: CopyButtonPrototype,
});
