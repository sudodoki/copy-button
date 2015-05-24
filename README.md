# `<copy-button></copy-button>`

A web-component that is not relying on Flash to copy stuff into the clipboard. Experience may vary, based on browser support, with downgrading to using [prompt](http://stackoverflow.com/a/6055620/1976857).

# Installation

## NPM
`npm i --save copy-button`
after which you're good to use copy-button &
- require it from your main file
- add 'node_modules/copy-button/bundled.min.js' as script in your html

## CDN
You can also use it from [wzrd.in CDN](https://wzrd.in/standalone/copy-button@latest) and drop
`<script src='https://wzrd.in/standalone/copy-button@latest'></script>` into your html

# Usage

After having script ran, you're good to use `<copy-button></copy-button>` in your markup.

## Inner content
If you're not specifying inner content, it would default to 'Click to copy to clipboard', otherwise provided content would be inserted into the button. Can use icons here, etc. See [example](https://sudodoki.github.io/copy-button/example#using-custom-markup)

## target-text
If you specify `target-text` attribute on button, provided value will be copied to clipboard. [Example](https://sudodoki.github.io/copy-button/example#basic-target-text)

## target-element
If you specify `target-element` attribute on button, value or text of provided DOM node will be copied to clipboard (it will be retrieved using `document.getElementById` if value will be specified as `#specifiedID` or [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#Browser_compatibility) in other cases). See [examples](https://sudodoki.github.io/copy-button/example#copying-content-of-div)

# Under the hood

Built on top of [document.registerElement polyfill](https://github.com/WebReflection/document-register-element) & [copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)