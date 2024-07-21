"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let router = useRouter();

  async function handleSingUp(e: any) {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      router.push("/auth/Login");
    } else {
      alert("failed to signup");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSingUp}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>SignUp</button>
      </form>

      <h6 className=" font-normal">
        Already signed up? <Link href="/auth/Login">Go to login</Link>
      </h6>
    </div>
  );
}

export default SingUp;
