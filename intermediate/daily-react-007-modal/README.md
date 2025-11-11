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


## Final thoughts

A great challenge for reinforcing state management, prop handling, custom components, custom hooks, and localStorage persistence.
It also introduced the importance of creating scalable theme logic — something that can be reused in larger projects.

