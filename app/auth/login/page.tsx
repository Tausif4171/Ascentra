"use client";
import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name, email);

  function Login(e: any) {
    e.preventDefault();
    console.log("form submit");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={Login}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <button>Login</button>
      </form>

      <h6 className=" font-normal">
        Don’t have an account? <Link href="/auth/SignUp">Sign up</Link>
      </h6>
    </div>
  );
}

export default Login;
