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
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [errors, setErrors] = useState({ email: false, message: false });

  const validate = () => {
    const newErrors = { email: false, message: false };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = true;
    }

    if (!message.trim()) {
      newErrors.message = true;
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!validate()) {
      setStatus("idle");
      return;
    }

    setErrors({ email: false, message: false });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, company, message }),
      });

      if (res.ok) {
        toast.success(messages.contactSuccess);
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setStatus("idle");
      } else {
        setStatus("idle");
        toast.error(messages.contactError);
      }
    } catch (error) {
      setStatus("idle");
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(messages.contactError);
      }
    }
  };

  return (
    <div className="h-full flex flex-col justify-evenly gap-2 ultra:gap-4">
      <div className="ml-1 mb-2">
        <AnimatedText id={language} className="text-sm text-text opacity-70">
          {messages.contact}
        </AnimatedText>
        <AnimatedText
          id={language}
          ariaLabelledBy="contact-me"
          as="h2"
          className="mt-2 text-3xl md:text-4xl text-text font-serif"
        >
          {messages.contact2()}
        </AnimatedText>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
      >
        {/* First Name */}
        <input
          type="text"
          id="firstName"
          name="firstName"
          aria-label={messages.contactName}
          autoComplete="given-name"
          placeholder={messages.contactName}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          maxLength={20}
          className="p-4 rounded-lg h-10 ultra:h-13 bg-neutral/15 dark:bg-neutral/70 text-sm ultra:text-base focus:outline-none focus:ring focus:bg-neutral/20 dark:focus:bg-neutral/65 focus:ring-text/40 focus:placeholder:opacity-60 dark:focus:ring-text/15 text-text shadow-inner border border-white/30 dark:border-white/10 transition-all w-full placeholder-text/50"
        />

        {/* Last Name */}
        <input
          type="text"
          id="lastName"
          name="lastName"
          aria-label={messages.contactName2}
          autoComplete="family-name"
          placeholder={messages.contactName2}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          maxLength={20}
          className="p-4 rounded-lg h-10 ultra:h-13 bg-neutral/15 dark:bg-neutral/70 text-sm ultra:text-base focus:outline-none focus:ring focus:bg-neutral/20 dark:focus:bg-neutral/65 focus:ring-text/40 focus:placeholder:opacity-60 dark:focus:ring-text/15 text-text shadow-inner border border-white/30 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Email Address */}
        <input
          type="email"
          id="email"
          name="email"
          aria-label={messages.contactMail}
          autoComplete="email"
          placeholder={
            errors.email ? messages.contactErrorEmail : messages.contactMail
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={50}
          className={`p-4 rounded-lg h-10 ultra:h-13 bg-neutral/15 dark:bg-neutral/70 text-sm ultra:text-base focus:outline-none focus:ring focus:bg-neutral/20 dark:focus:bg-neutral/65 focus:ring-text/40 focus:placeholder:opacity-60 dark:focus:ring-text/15 text-text shadow-inner transition w-full ${
            errors.email && !/\S+@\S+\.\S+/.test(email)
              ? "border-2 border-red-600/50 animate-pulse placeholder-red-600 dark:border-red-400-50 dark:placeholder-red-400 dark:border-red-400/50"
              : "border border-white/30 dark:border-white/10 placeholder-text/50"
          }   `}
        />

        {/* Company Name */}
        <input
          type="text"
          id="company"
          name="company"
          aria-label={messages.contactCompany}
          autoComplete="organization"
          placeholder={messages.contactCompany}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          maxLength={50}
          className="p-4 rounded-lg h-10 ultra:h-13 bg-neutral/15 dark:bg-neutral/70 text-sm ultra:text-base focus:outline-none focus:ring focus:bg-neutral/20 dark:focus:bg-neutral/65 focus:ring-text/40 focus:placeholder:opacity-60 dark:focus:ring-text/15 text-text shadow-inner border border-white/30 dark:border-white/10 transition w-full placeholder-text/50"
        />

        {/* Message */}
        <textarea
          id="message"
          name="message"
          aria-label={messages.contactMsg}
          autoComplete="off"
          placeholder={
            errors.message ? messages.contactErrorMsg : messages.contactMsg
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={5000}
          className={`sm:col-span-2 p-4 rounded-lg bg-neutral/15 dark:bg-neutral/70 text-sm ultra:text-base focus:outline-none focus:ring focus:bg-neutral/20 dark:focus:bg-neutral/65 focus:ring-text/40 dark:focus:ring-text/15 focus:placeholder:opacity-60 text-text resize-none h-30 ultra:h-40 shadow-inner transition w-full ${
            errors.message && !message.trim()
              ? "border-2 border-red-600/50 animate-pulse placeholder-red-600 dark:border-red-400-50 dark:placeholder-red-400 dark:border-red-400/50"
              : "border border-white/30 dark:border-white/10 placeholder-text/50"
          }   `}
        />

        {/* Submit Button */}
        <button
          type="submit"
          id="submit"
          name="submit"
          className="sm:col-span-2 bg-white/35 dark:bg-secondary/20  text-text rounded-lg p-2 ultra:p-3.5 mt-2 hover:shadow-md hover:bg-neutral hover:text-primary dark:hover:text-text transition font-semibold w-full cursor-pointer select-none focus:outline-none focus:ring focus:ring-text dark:focus:ring-text"
          disabled={status === "loading"}
        >
          <AnimatedText id={language}>
            {status === "loading"
              ? messages.contactLoading
              : messages.contactSnd}
          </AnimatedText>
        </button>
      </form>
    </div>
  );
};
