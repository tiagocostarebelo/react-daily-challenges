# API Fetch using useEffect

**The challenge:**
Fetch and display data from a public API using useEffect


## Core Concepts:

- Managing side effects with useEffect.
- Understanding how the dependency array affects re-renders and API calls.
- Handling async data fetching with try...catch.
- Managing loading and error states.
- Conditionally rendering UI based on fetch results.

## Additional Steps

- Introduce pagination or limit the number of results. - ToDo  
- Add a retry button for failed requests. - ToDo 
- Extract API logic into a reusable custom hook for cleaner separation (useFetch). - ToDo

## Approach

The solution focused on using useEffect to trigger the data fetch based on the input searched.

Inside the effect:

- An asynchronous function performs the fetch.
- loading and error states are updated based on the outcome.
- The response is validated and then passed into state.

This pattern helps reinforce how React schedules effects, how asynchronous logic works inside them, and why cleanup functions matter in more complex scenarios.


## Final thoughts

This challenge was a solid opportunity to understand useEffect's behavior and how the dependency array controls when effects run. It also reinforced the basics of asynchronous fetching with try...catch, proper state management, and conditional rendering (loading, errors, and data output).

