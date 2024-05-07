import React from "react"
import { useReducer } from "react"
// Defining the initial state & reducer

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1
    case "sub":
      return state - 1
    case "reset":
      return 0
    default:
      throw new Error("unexpected error")
  }
}

export default function UseReducer() {
  //Initilaing UserReduser Hook
  const [count, despatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => despatch("add")}>add</button>
      <button onClick={() => despatch("sub")}>Sub</button>
      <button onClick={() => despatch("reset")}>reset</button>
    </div>
  )
}
