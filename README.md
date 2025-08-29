1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

getElementById: Only used in a single DOM element. Only can have an unique name (id).

getElementsByClassName: Can be used in various DOM element. Same name can be useed as class name in different variable.

querySelector: It is used for selecting the first element in the DOM for matching the specific selector.

querySelectorAll: It is used for selecting all the elements in the DOM for matching the specific selector.


2. How do you create and insert a new element into the DOM?

Answer:

document.createElement()
append()


3. What is Event Bubbling and how does it work?

Answer:

When a button got clicked that event doesn't stop in that element. It runs in child element then goes up to the parent element step by step. And this whole process is called event bubbling.

<div id='parent'>
  DOM doma DOM DOM!
  <button id='child'>Click</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', function() {
    console.log('parent clicked')
  });

  document.getElementById('child').addEventListener('click', function() {
    console.log('child clicked')
  });
</script>


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: 

When only parent event listner used in DOM it is called event delegation.

It is useful because it very efficient to use, simplified the Code , it can be handled dynamically.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

preventDefault(): It prevents the form submission when button got clicked. Stops the browser's default behavior.

stopPropagation(): It prevents the event from reaching the parent element. Stops the click event from propagating to parent element.
