"use client";

import { useState } from "react";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WaitlistModal({
  isOpen,
  onClose,
}: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit() {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = await res.json();

      if (data.success) {
  setSuccess(true);
  setMessage("🎉 You're on the Fridgenizer waitlist!");

  setName("");
  setEmail("");

  setTimeout(() => {
    onClose();
    setMessage("");
    setSuccess(false);
  }, 2000);
} else {
  setSuccess(false);
  setMessage(data.message);
}
    } catch (error) {
      setSuccess(false);
setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-3xl bg-[#141A21] p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Join Fridgenizer
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-xl bg-[#1E252E] p-4 text-white outline-none"
        />

        <input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-6 w-full rounded-xl bg-[#1E252E] p-4 text-white outline-none"
/>

{message && (
  <div
    className={`mb-4 rounded-xl p-3 text-center ${
      success
        ? "bg-green-500/20 text-green-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {message}
  </div>
)}

<button
  onClick={handleSubmit}
  disabled={loading}
  className="w-full rounded-xl bg-green-500 py-4 font-bold text-black hover:bg-green-400 disabled:opacity-50"
>
  {loading ? "Joining..." : "Join Waitlist"}
</button>

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-400 hover:text-white"
        >
          Close
        </button>

      </div>
    </div>
  );
}