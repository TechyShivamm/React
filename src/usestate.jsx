// import { useState } from "react"

// export default function StateComp() {
//   // const Click = useState("HelloWorld")

//   const [click, setClick] = useState(0)

//   // console.log(Click)

//   return (
//     <>
//       <h1>welcome to {click}</h1>
//       <button onClick={() => setClick(click + 1)}>Click ME</button>

//       <p>you've clicked {click} time</p>
//       <p>
//         the number of time you have clicked is{" "}
//         {click % 2 === 0 ? "even!" : "odd!"}
//       </p>
//       <button onClick={() => setClick((click) => click + 1)}>Click me</button>
//     </>
//   )
// }
// -------------------------

// React useState Hook Arrays

// import { useState } from "react"

// export default function StateComp() {
//   const [click, setClick] = useState([])
//   const addNumber = () => {
//     setClick([
//       ...click,
//       {
//         id: click.length,
//         value: Math.round(Math.random() * 10),
//       },
//     ])
//   }

//   return (
//     <>
//       <div>
//         <ul>
//           {click.map((item) => {
//             return <li key={item.id}>{item.value}</li>
//           })}
//         </ul>
//         <button onClick={addNumber}> click me</button>
//       </div>
//     </>
//   )
// }
// -------------------

// React useState Hook Arrays

import React, { useState } from "react"

export default function StateComp() {
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const [form, setForm] = useState({
    username: "",
    password: "",
  })
  const [submit, setSubmit] = useState(false)

  const printvalue = (e) => {
    e.preventDefault()
    setForm({
      username: data.username,
      password: data.password,
    })
    setSubmit(true)
  }

  const updateField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div>
        <form onSubmit={printvalue}>
          <label>
            UserName:
            <input
              value={data.username}
              name="username"
              onChange={updateField}
            />
          </label>

          <label>
            PassWord:
            <input
              value={data.password}
              name="password"
              type="password"
              onChange={updateField}
            />
          </label>
          <br />
          <button>submit</button>
        </form>
        <p>{submit ? form.username : null}</p>
        <p>{submit ? form.password : null}</p>
      </div>
    </>
  )
}
