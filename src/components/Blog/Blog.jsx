import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-20'>
           <h2 className='text-3xl font-bold'>Question And Answer</h2> 
           <div className='mt-10 mx-5 text-left'>
           <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. When should you use context API?
                </div>
                <div className="collapse-content">
                    <p>The Context API in React is used for managing global state that needs to be accessed by multiple components in a React application. It can be particularly useful in cases where props drilling (passing down props through several levels of components) becomes tedious and difficult to maintain.

Here are some scenarios where using the Context API in React can be beneficial:

Theme Switching: If your application has a feature to switch between different themes, then the Context API can be used to manage the state of the current theme throughout the entire application.

Authentication: If your application requires authentication and you need to keep track of whether a user is logged in or not, then the Context API can be used to manage the authentication state.

Multilingual Support: If your application supports multiple languages, then the Context API can be used to store the current language preference and make it available to all components.

Managing Cart Items: If your application has a shopping cart feature, then the Context API can be used to manage the state of the cart items, making it available to all components.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
            <div className="collapse-title text-xl font-medium">
                2. What is a custom hook? 
            </div>
            <div className="collapse-content">
                <p>In React, a custom hook is a function that starts with the prefix "use" and can contain stateful logic, reusable code, and can be shared across multiple components. Custom hooks allow you to extract component logic into reusable functions, so you can easily share it among multiple components without duplicating code.

Custom hooks are a way to create reusable functionality in React. They can be used to encapsulate stateful logic, side effects, or any other functionality that needs to be shared across multiple components. Custom hooks can also be used to abstract away complex logic and make it easier to reason about.</p>
            </div>
            </div>


                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                
                <div className="collapse-title text-xl font-medium">
                    3. What is useRef?
                </div>
                <div className="collapse-content">
                    <p>In React, useRef is a hook that allows you to create a mutable reference that can be attached to a React element. This reference persists across component re-renders and can be used to store any mutable value or DOM node, such as an input field value or the result of a DOM query.</p>
                </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    4. What is useMemo?
                </div>
                <div className="collapse-content">
                    <p>In React, useMemo is a hook that allows you to memoize a function or a value, which means that it will only be recomputed when one of its dependencies changes. This can be used to optimize the performance of a component by avoiding unnecessary computations.</p>
                </div>
            </div>
            
           </div>
        </div>
    );
};

export default Blog;