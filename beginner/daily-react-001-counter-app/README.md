# Counter

**The challenge:**
Build a simple counter with a display of a number and two buttons: Increment and Decrement.


## Additional Steps

- Prevent the counter from going below zero (done)

- Add a maximum value limit (done)

- Refactor the UI into reusable Button and Display components (still to do)


## Approach

Although this is a simple challenge, it’s a great exercise to reinforce the use of one of React’s most fundamental hooks — useState.

I started by building a functional version of the counter, then iteratively improved the code by:

- Simplifying conditional logic in the handler functions

- Adding minimum (0) and maximum value limits

- Disabling the buttons when thresholds are reached

This helped refine both the logic and structure of the component.


## Final thoughts

While basic, this project effectively demonstrates core React concepts like state management and event handling.
Counters like this are commonly used in real-world applications — for example, adjusting item quantities in an e-commerce cart.

This version works well as a foundation, but there’s room for further improvements, such as:

- Creating dedicated Button and Display components

- Adding unit tests

- Enhancing accessibility and styling
