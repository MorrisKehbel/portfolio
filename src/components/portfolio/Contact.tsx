"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

export const Contact = () => {
  const { messages, language } = useLanguage();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, company, message }),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setStatus("idle");
        toast.error(messages.contactError as string);
      }
    } catch (error) {
      setStatus("idle");
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(messages.contactError as string);
      }
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div>
        <AnimatedText id={language} className="text-sm text-text opacity-70">
          {typeof messages.contact === "function"
            ? messages.contact()
            : messages.contact}
        </AnimatedText>
        <AnimatedText
          id={language}
          className="mt-2 text-4xl text-text font-serif"
        >
          {typeof messages.contact2 === "function"
            ? messages.contact2()
            : messages.contact2}
        </AnimatedText>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <input
          type="text"
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          placeholder={messages.contactName as string}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-3 rounded-lg bg-neutral/20 dark:bg-neutral/70 text-text shadow-inner border border-white/60 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Last Name */}
        <input
          type="text"
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          placeholder={messages.contactName2 as string}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-3 rounded-lg bg-neutral/20 dark:bg-neutral/70 text-text shadow-inner border border-white/60 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Email Address */}
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder={messages.contactMail as string}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-lg bg-neutral/20 dark:bg-neutral/70 text-text shadow-inner border border-white/60 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Company Name */}
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          placeholder={messages.contactCompany as string}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="p-3 rounded-lg bg-neutral/20 dark:bg-neutral/70 text-text shadow-inner border border-white/60 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Message */}
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          placeholder={messages.contactMsg as string}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="col-span-2 p-3 rounded-lg bg-neutral/20 dark:bg-neutral/70 text-text resize-none h-40 shadow-inner border border-white/60 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Submit Button */}
        <button
          type="submit"
          id="submit"
          name="submit"
          className="col-span-2 bg-secondary/20  text-text rounded-lg p-3 mt-2 hover:bg-secondary/40 hover:shadow-md dark:hover:bg-neutral transition font-semibold w-full cursor-pointer"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
