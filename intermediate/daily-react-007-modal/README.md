# Modal

**The challenge:**
Build a modal that opens and closes via state.


## Core Concepts:

- Conditional rendering with state.
- Composability (children inside modal).
- Handling click events to close modals.

## Additional Steps

- Animate modal entry/exit.
- Add overlay click-to-close.
- Use portals to render modal outside the main DOM tree.


## Approach

Today's challenge uses State management, event handlers, but builds in to a very widely used element in Web development, Modals.
First I built the basic logic to handle the modal.

- useState hook: cleanly manages isModalOpen state.
- Conditional rendering: displays the modal only when true.
- Click handler: toggles modal visibility efficiently.
- Backdrop click-to-close: already implements the "light dismiss" behavior.

Next steps:

- separate the elements and create a Modal component
- separate the logic and update it following React's best practices
- handle the Escape key to close the Modal
- use createPortal() to render the Modal outside the DOM element

## Final thoughts

A great challenge for reinforcing state management, prop handling, custom components, and a learning step to create Modals using best practices'.
Using createPortal() and understanding it and how the elements render was a great learning step.

