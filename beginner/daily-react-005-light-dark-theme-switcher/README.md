# Light Dark Switch

**The challenge:**
Build a toggle that switches between light and dark UI themes.


## Core Concepts:

- Conditional rendering with theme-based classNames or CSS variables.
- Managing global theme state with useState (or Context for scalability).
- Applying theme-based global styles in React.

## Additional Steps

- Persist theme preference in localStorage.
- Create a custom hook (useTheme) to encapsulate logic and simplify usage.
- Add animation or transition effects for smoother theme switching.


## Approach

This challenge built upon the logic of the Toggle Button (Day 2), but applied it globally for theming.
I started with a simple light/dark toggle controlled via state, then extended it by:

- Persisting the selected theme using localStorage for consistency across sessions.
- Extracting theme logic into a custom hook (useTheme) for cleaner and reusable code.
- Enhancing the UX with animated transitions during theme changes.


## Final thoughts

A great challenge for reinforcing state management, prop handling, custom components, custom hooks, and localStorage persistence.
It also introduced the importance of creating scalable theme logic — something that can be reused in larger projects.

