import "./App.css";

import React, { use, useState } from "react";

function App() {
  const fields = {
    name: "",
    email: "",
    password: "",
    feedback: "",
  };

  const [form, setForm] = useState(fields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/createForm", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert("form sent seccessfully")

    setForm(fields);
  };

  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="fielDiv">
            <div className="label">
              <label htmlFor="name">Name</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="fielDiv">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="fielDiv">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="text"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="fielDiv">
            <div>
              <label htmlFor="feedback">Feedback</label>
            </div>
            <textarea
              name="feedback"
              id="feedback"
              value={form.feedback}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      {console.log({ form })}
    </>
  );
}

export default App;
