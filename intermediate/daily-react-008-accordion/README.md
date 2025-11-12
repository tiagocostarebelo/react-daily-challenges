# Accordion

**The challenge:**
Build a collapsible accordion with multiple sections that expand/collapse on click.


## Core Concepts:

- Managing multiple open/closed states.
- Mapping arrays and rendering conditionally.
- Prop drilling or using custom hooks for shared control logic.

## Additional Steps

- Allow only one section open at a time.
  This requires restructuring the state logic: lifting state and handleClick to the parent, passing down props, and updating the click handler to track which section is active.
  I experimented with this approach but decided to keep the current version, where multiple sections can be open simultaneously.


## Approach

This was an enjoyable challenge that helped me revisit a UI pattern I used to struggle with — the accordion.
What often felt tricky to handle in vanilla JavaScript turned out to be much more intuitive in React thanks to its state-driven approach.

I began by setting up a simple static layout and styling it lightly to visualize the structure. Then I created a small test object with title and content fields (accordionData) to confirm data flow and rendering worked as expected.

Next, I introduced component state with useState to handle each section’s open/closed status, using a handleClick function and conditional rendering to toggle visibility.

Once that logic worked correctly, I extracted the accordion into its own component and expanded the mock data into an array of objects, updating the mapping and state logic accordingly. The final steps involved refactoring for clarity, cleaning up redundant code, and testing multiple interaction scenarios.

Overall, the process showed how React’s declarative nature simplifies UI state patterns that can otherwise get messy with DOM manipulation.

## Final thoughts

A solid exercise in state management and component structure.
It reinforced key concepts like:

- Handling component-level state and updates.
- Understanding when to lift state up (for controlling one open section).
- Prop drilling and destructuring for clean, readable code.
- Conditional rendering for dynamic UI behavior.

This challenge was a good reminder that what feels complex in vanilla JavaScript becomes much cleaner in React when you think in terms of data flow and state, not the DOM.

