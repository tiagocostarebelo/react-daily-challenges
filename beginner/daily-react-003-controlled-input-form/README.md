# Controlled Input form 

**The challenge:**
Implement a simple form that updates live as the user types (e.g., name and email) and displays submitted data.

## Core Concepts:

- Controlled components (form fields synced with state).
- Handling form submission.
- State reset and validation basics.

## Additional Steps

- Add basic validation messages.
- Combine multiple inputs into a formData object.
- Display submitted data in a styled preview.


## Approach

This challenge focuses again on state management, but this time with form data and controlled components.

I began by creating the input fields and the form container, setting up individual state variables for each input and handling onChange inline.
It worked - but the code was not DRY.

To improve readability:

- I combined the name and email fields into a single formData state object
- Created a handleChange function to update state dynamically and handle basic validation
- Added a handleSubmit function to capture and store the submitted data in a new submittedData state variable
- Updated the JSX to reflect the new structure and render the submitted data



## Final thoughts

This challenge made me dig deeper into React 19's documentation on form and inputs.
It helped clarify how controlled components work, and how they differ from uncontrolled components - a core concept in handling user input effectively in React.

