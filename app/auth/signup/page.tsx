"use client";
import Link from "next/link";
import React, { useState } from "react";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SingUp(e: any) {
    e.preventDefault();
    console.log("form submit");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={SingUp}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Login</button>
      </form>

      <h6 className=" font-normal">
        Already signed up? <Link href="/auth/Login">Go to login</Link>
      </h6>
    </div>
  );
}

export default SingUp;
