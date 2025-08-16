/*
  DOM Selector:
  document.getElementById('title')
  document.getElementById('title').id
  document.getElementById('title').class
  document.getElementById('title').className
  document.getElementById('title').getAttribute('id')
  document.getElementById('title').setAttribute('class', 'test')


  Inner:
  const title = document.getElementById('title')
  title.style.backgroundColor = 'green'
  title.style.padding = '15px'
  title.style.borderRadius = '5px'


  Difference btw innerText and textContent:
  title.innerText
  'DOM learning on Chai aur code'
  title.textContent
  'DOM learning on Chai aur codeTest Text'

  
  // Gives the html aswell
  title.innerHTML
  'DOM learning on Chai aur code<span style="display: none;">Test Text</span>'


  document.getElementsByClassName('heading')
  document.querySelector('h1')
  <h1 id=​"title" class=​"heading">​…​</h1>​
   // Gives the first h2 from all h2s
  document.querySelector('h2')
  <h2>​Lorem ipsum dolor sit.​</h2>​

  document.querySelector('#title')
  document.querySelector('.heading')
  document.querySelector('input[type="password"]')
  document.querySelector('p:first-child')


  document.querySelector("ul");
  const ulist = document.querySelector("ul");
  ulist.querySelector("li");
  const list = ulist.querySelector("li");
  list.style.backgroundColor = "purple"
  list.style.padding = "20px";


  •	NodeList: Array-like object of DOM nodes. Can be live or static, has limited methods (forEach, item), and isn’t a true array.
	•	Array: Full JavaScript data structure with rich methods (map, filter, reduce, etc.), always static, can store any type of data.
	•	Key difference: NodeList is mainly for DOM elements with fewer features, while Array is a powerful, general-purpose collection.
	•	Conversion: Use Array.from() or [...nodelist] to turn a NodeList into an Array.
*/