// As we are using React, which is a JavaScript library, there will be instances when we need to perform asynchronous operations.
// However, we might wonder how to perform asynchronous tasks using the useEffect hook. Let's take a deeper look.

// An async function is a function declared with the async keyword and allows us to use
// the await keyword to pause the execution of the function until a particular promise is resolved.

// UseEffect doesn't support async functions as its parameter directly.
// This is because useEffect expects its parameter function to return a cleanup function or nothing at all.
// However, async functions always return a promise, which leads to a warning or error.

// bad approach

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [state, setState] = useState("Initial State");

  // A mock async function
  const asyncFunc = async () => {
    return Promise.resolve("Updated state");
  };

  useEffect(async () => {
    let result = await asyncFunc();
    setState(result);
  }, []);

  return <div>{state}</div>;
}

// In the above example, the async function asyncFunc returns a promise, but this causes issues when used directly inside useEffect.

// good approach

import React, { useState, useEffect } from "react";

function MyComponent1() {
  const [state, setState] = useState("Initial State");

  // Mock async function
  const asyncFunc = async () => {
    return Promise.resolve("Updated state");
  };

  useEffect(() => {
    const callAsyncFunc = async () => {
      let val = await asyncFunc();
      setState(val);
    };

    callAsyncFunc();
  }, []);

  return <div>{state}</div>;
}

export default MyComponent;

// In the updated code, callAsyncFunc is defined inside useEffect, and then we immediately invoke it.
//  This respects the rules of useEffect while allowing us to handle promises or asynchronous operations correctly.
