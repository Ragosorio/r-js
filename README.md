# r-js
Introducing "r(js)": A Lightweight JavaScript Library

"r(js)" is a lightweight JavaScript library designed to simplify common tasks and enhance your development experience. With its concise syntax and versatile functions, "r(js)" aims to streamline your code and boost productivity. Whether you're a beginner or an experienced developer, "r(js)" provides a handy set of tools to make your coding journey smoother.

Key Features:

1. DOMContentLoaded Event Handling:
   - "r()" function allows you to execute a callback function when the DOM content has finished loading.
   - Example usage: `r(() => {...})`

2. Query Selector:
   - Select elements from the DOM using CSS selectors.
   - Example usage: `r('.class')` or `r('#id')`.

3. Automated Functions:
   - `delay(callback, delay)` function lets you delay the execution of a callback function by a specified time.
   - `random(x)` generates a random number between 1 and the provided value `x`.
   - `shuffleArray(array)` shuffles the elements of an array randomly.
   - `capitalizeString(str)` capitalizes the first letter of a string.
   - `calculateFactorial(num)` calculates the factorial of a number recursively.

4. Console Logging:
   - `log(frase)` logs a message to the console.
   - `err(err)` outputs an error message to the console.

5. CSS Manipulation:
   - `css(property, value)` modifies the CSS properties of selected elements.
   - Supports both individual property-value pairs and objects containing multiple properties.

6. Event Handling:
   - `on(event, callback)` adds an event listener to selected elements.
   - `off(event, callback)` removes an event listener from selected elements.
   - `delegate(selector, event, callback)` delegates event handling to a specific selector within the selected elements.

7. Element Manipulation:
   - `each(fn)` iterates over selected elements, providing access to the index and element.
   - `addClass(className)` adds a CSS class to selected elements.
   - `removeClass(className)` removes a CSS class from selected elements.
   - `toggleClass(className)` toggles a CSS class for selected elements.
   - `setId(id)` sets the ID attribute for selected elements.
   - `removeId()` removes the ID attribute from selected elements.
   - `attr(name, value)` sets or retrieves the value of an attribute for the first selected element.
   - `removeAttr(name)` removes an attribute from selected elements.
   - `prop(name, value)` sets or retrieves the value of a property for the first selected element.
   - `html(content)` sets or retrieves the HTML content of the first selected element.
   - `text(content)` sets or retrieves the text content of the first selected element.

8. Animation:
   - `fadeIn(duration)` fades in selected elements with a specified duration (default: 1000ms).
   - `fadeOut(duration)` fades out selected elements with a specified duration (default: 1000ms).
   - `show()` displays hidden elements.
   - `hide()` hides elements by setting their display property to "none".
   - `toggle()` toggles the visibility of elements.

9. Dimensions and Position:
   - `width()` returns the width of the first selected element.
   - `height()` returns the height of the first selected element.
   - `offset()` returns the top and left position of the first selected element relative to the document.
   - `position()` returns the top and left position of the first selected element relative to its offset parent.

10. Miscellaneous:
    - `getStyle(property)` retrieves the computed style property of the first selected element.

Please note that "r(js)" is an open-source project available on GitHub. We value your feedback, suggestions, and contributions to enhance and improve the library. Feel free to explore the documentation, try out the functions, and join our growing community of developers.

Example Usage:

```javascript
// Logging Messages
r().log("Hhhhola");
r().err("Hola");

// CSS Manipulation and Event Handling
r(() => {
  console.log("Hola");

  r("button")
    .css("background", "#09f")
    .css("border", "#fff")
    .css({
      padding: "15px",
      borderRadius: "4px",
    })
    .on("click", () => {
      r("#mensaje").fadeIn();
    })
    .removeClass(`hh`)
    .html("<p>Gogo<p>");

  // ...

});

// Attribute Manipulation and Property Access
r("p").attr("paco","Juzman");

const button = r('.btn');
button.prop('textContent', 'Haz clic aquí'); // Set the button's text content to 'Haz clic aquí'
button.prop('style.backgroundColor', 'red'); // Set the button's background color to red

// Animation, Dimensions, and Position
const box = r('.box');
box.fadeIn();
box.fadeOut();
box.show();
box.hide();
box.toggle();
const width = box.width();
const height = box.height();
const offset = box.offset();
const position = box.position();
const backgroundColor = box.getStyle('backgroundColor');

// Automated Functions
const array = [1, 2, 3, 4, 5];
console.log(r().shuffleArray(array)) // Output: [3, 2, 4, 5, 1]

const str = "hello";
const capitalizedStr = r().capitalizeString(str);
console.log(capitalizedStr); // Output: "Hello"

const num = 5;
const factorial = r().calculateFactorial(num);
console.log(factorial); // Output: 120

r().delay(() => {
  console.log("This function will execute after a delay of 2000 ms");
}, 2000);
});
```

GitHub Repository: [https://github.com/Ragosorio/r-js]

We look forward to your valuable opinions and suggestions to make "r(js)" even better. Together, let's simplify JavaScript development!
