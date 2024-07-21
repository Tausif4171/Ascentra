"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: any) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res) {
      router.push("/auth/SignUp");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={handleLogin}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Login</button>
      </form>

      <h6 className=" font-normal">
        Don’t have an account? <Link href="/auth/SignUp">Sign up</Link>
      </h6>
    </div>
  );
}

export default Login;
