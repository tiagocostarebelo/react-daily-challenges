# Tabs Navigation

**The challenge:**
Implement a tabbed interface with multiple panels and active tab highlighting.


## Core Concepts:

- Conditional rendering with index-based state.
- Mapping components dynamically.
- Component composition for Tabs and TabPanel.

## Additional Steps

- Add keyboard navigation for accessibility.


## Approach

This challenge was a solid exercise in coordinating component structure with state-driven UI updates. I started by outlining the basic layout: a container for tab buttons and a separate area for the content panel. From there, I introduced state to track the currently active tab, using its index to determine both which button is highlighted and which panel should be displayed.

Once the foundational logic was working, I mapped the tab labels and content dynamically, reducing repetition and allowing the UI to scale with additional tabs. After confirming the rendering worked correctly, I refined the component structure by separating <Tabs> and <TabPanel> to keep the logic modular and easier to reason about.

Along the way, I tested different states manually — switching tabs, adding new items to the data array, and verifying the conditional rendering behaved predictably. The main takeaway was reinforcing how React’s declarative pattern makes state–UI coordination much simpler than traditional DOM manipulation.


## Final thoughts

A great challenge for practicing index-based state management and structuring UI through reusable components. It reinforced the importance of clean component composition and mapping data structures directly into rendered elements. This pattern is very common in real-world React apps — menus, navigation, step-by-step flows — so getting comfortable with it is valuable.

There’s also room for progressive enhancements, especially around accessibility (keyboard controls, ARIA roles), which would elevate the component from functional to production-ready.

