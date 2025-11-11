# ToDo

**The challenge:**
Build a functional todo list allowing adding, marking complete, and deleting tasks.


## Core Concepts:

- Array state management (useState).
- MConditional rendering based on task completion.
- AHandling lists with keys and event handlers.

## Additional Steps

- Add filters (All, Active, Completed).
- Persist data to localStorage.
- Introduce context or reducer for state management.


## Approach

This challenge brought together several concepts from previous exercises — handling inputs, toggling states, conditional rendering, and managing arrays.

I began by setting up a state array to hold task objects, each containing id, text, and completed properties. Adding a task involved updating the array immutably using the spread operator.
Toggling completion status required mapping through the list and inverting the completed flag of the matching task. Deletion was handled with filter() to remove the selected task by id.

Once the core logic was stable, I implemented conditional styling to visually differentiate completed tasks and explored filtering logic to display subsets of the list.

This exercise helped reinforce React’s one-way data flow and the importance of writing pure functions when updating state.

## Final thoughts

A well-rounded challenge that consolidated many fundamental React concepts.
It reminded me that managing array state updates effectively is key to writing predictable UI logic.
Most importantly, I learned to keep state logic simple and readable instead of over-engineering early — a mindset that’s crucial for scaling React apps confidently.

