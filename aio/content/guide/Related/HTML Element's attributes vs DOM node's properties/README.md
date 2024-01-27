# How to run locally?
* Open 'index.html' in your browser

# HTML element's attributes
* Defined / HTML element
* Initialize DOM property -- 'input' --
  * Open the browser's devtools and check the console's logs 

# DOM node's properties
* HTML code — is parsed by the browser to ⟶ DOM nodes
  * Open the browser's devtools, Elements. That's the DOM
* They are named as properties
  * Open the browser's devtools, Elements, right panel you can see 'Properties'
* Dynamically change -- 'input' --
  * Change the value of the input
  * Open the browser's devtools and run in the console
    * ```const inputElementTwo = document.getElementById('myInput'); console.log(inputElementTwo.value);```

# NO relation 1to1 between HTML element's attributes < — > DOM node's properties
* some of them have got -- 'type', 'value', 'id', 'aria-level' --
  * Open the browser's devtools, Elements
  * You can see `type`, `value`, `id` and `aria-level`
* HTML attributes — which don't have associated — DOM properties -- 'aria-describedby' --
  * Open the browser's devtools, Elements
  * You can check that
    * in 'Properties' panel, you don't find `aria-describedby`
    * in browser's console
      * `const h1 = document.getElementById('main-heading');` and you don't find `h1.ariaDescribedby`, but you can find `h1.ariaLevel`
* DOM properties — which don't have associated — HTML attributes -- 'textContent' --
  * Open the browser's devtools
  * Check in the console that you see 'textContent as attribute:  null'