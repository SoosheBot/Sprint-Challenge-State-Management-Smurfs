1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Self-Study/Essay Questions

1) What problem does the context API help solve?

--Context API helps solve the problem of PROP DRILLING -- which is what happens where you need to get state from the top of your react tree to the bottom and you need to pass props through every component and their mother, even if said components and mother do not need them. Also, it's better than the older Context API, which was unstable and had issues re: context changes.

// ----- //

2) In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

--Actions: Object with the type and payload properties that perform ....actions. Type is a string that tells you what the action is that needs to happen. Payload is the data that does the actioning. Then it all gets neatly sent off to the reducer, which then knows how to update state.

--Reducer: A function that takes in an action and updates the state accordingly.

--Store: The object that brings actions and reducers together. Store holds and allows access to state. The store is known as a single source of truth in a redux application because it is the only way you can change your data in the UI -- which then dispatch redux actions which change state within redux reducer.

// --- //

3) What is the difference between Application state and Component state? When would be a good time to use one over the other?

--The difference between Application state and Component state is that Component state is local and Application state is global. You use one over the other based on whether you want the updates to happen within a component ONLY, or globally.

// --- //

4) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

--Along with it being the sound my head made from repeatedly crashing onto the table this week, redux-thunk is a middleware that allows you to call the action creators that return functions instead of objects. So instead of writing the object yourself, you call the function, which returns the object!

Specifically, redux-thunk changes the action creators by looking at every action passing through the system, and if it is a function--it calls it.

// --- //

 5) What is your favorite state management system you've learned and this sprint? Please explain why!

--I wouldn't say I have a favorite yet? I'm OK with component state because it is kinda grassroots and on-the-ground, and (like every Chicagoan who's lived through the aldermanic and mayoral races) I know that making changes at the local level of government leads to bigger changes at the state and national levels, sooooooooo I guess I'll go with component state!