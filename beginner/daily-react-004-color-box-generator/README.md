# Colox Box Generator

**The challenge:**
Create a tool where users can input a color (e.g., HEX code or text) and render a box displaying that color.

## Core Concepts:

- Dynamic inline styling in React.
- HMapping user input to visual output.

## Additional Steps

- Generate random colors.
- Store color history and allow selection.
- Add copy-to-clipboard functionality.
- Include a RGB display with the HEX code converted


## Approach

This challenge built upon the concept of state management — but this time, state was directly tied to dynamic inline styles to visually render color changes in real time.

The main steps were:

- Capturing the user’s input and storing it in state.

- Applying that state value as the background color of a display box.

- Implementing a random color generator for instant inspiration.

- Converting the input HEX value to its RGB equivalent and displaying both formats together for clarity.

The result is a clean and interactive mini-tool that responds instantly to user input.


## Final thoughts

This challenge was a great exercise in connecting React state with dynamic visual output, while also handling input validation and string manipulation for color values.

It’s complete for now, but I plan to enhance it further by adding:

- Color history with selectable swatches

- Copy-to-clipboard functionality for quick use in design and development tools

Overall, it’s a simple yet satisfying way to explore how state can power dynamic styling and real-time feedback in React.

