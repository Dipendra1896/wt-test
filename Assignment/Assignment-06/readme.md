OBJECT:Explain event bubbling and capturing with example.




THEORY:
Event bubbling and event capturing are two ways in which events propagate through the Document Object Model (DOM) in web browsers.

Event bubbling means that an event on a child element will "bubble up" to its parent and all of its ancestors, allowing them to handle the event if they choose to do so. For example, if a button is inside a form and the button is clicked, the click event will first be handled by the button, then by the form, then by the parent of the form, and so on. This is the default behavior for most events in web browsers.

Event capturing, on the other hand, means that an event on a child element will first be handled by its parent, then by its parent's parent, and so on, before it is handled by the child element itself. This is less commonly used, but can be useful in certain situations.

In both event bubbling and event capturing, the event will eventually reach the top of the DOM tree, which is the document object. Event will be first captured by the most parent and then event will bubble down to the target element.

Conclusion:
Hence,we learn what is event bubbling and capturing and what is the difference between them.