"use client";

import { useState, type FormEvent } from "react";
import { Mail, Download, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";
import { GithubIcon, LinkedinIcon } from "./icons";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t } = useLocale();
  const { profile, contact } = t;

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = contact.requiredError;
    if (!values.email.trim()) next.email = contact.requiredError;
    else if (!EMAIL_RE.test(values.email)) next.email = contact.emailError;
    if (!values.message.trim()) next.message = contact.requiredError;
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (
    key: keyof typeof values,
    label: string,
    placeholder: string,
    type: string = "text"
  ) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={key} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {key === "message" ? (
        <textarea
          id={key}
          rows={4}
          value={values[key]}
          onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
          placeholder={placeholder}
          className="rounded-xl border border-input bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 ease-out placeholder:text-muted-foreground focus:border-primary"
        />
      ) : (
        <input
          id={key}
          type={type}
          value={values[key]}
          onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
          placeholder={placeholder}
          className="rounded-xl border border-input bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 ease-out placeholder:text-muted-foreground focus:border-primary"
        />
      )}
      {errors[key] && (
        <span role="alert" className="flex items-center gap-1 text-xs" style={{ color: "var(--destructive)" }}>
          <AlertCircle size={12} aria-hidden />
          {errors[key]}
        </span>
      )}
    </div>
  );

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <Glass className="grid gap-10 rounded-2xl p-8 sm:grid-cols-2 sm:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{contact.heading}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{contact.subheading}</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex cursor-pointer items-center gap-2 text-foreground transition-colors duration-200 ease-out hover:text-primary"
              >
                <Mail size={16} aria-hidden />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 text-foreground transition-colors duration-200 ease-out hover:text-primary"
              >
                <GithubIcon size={16} aria-hidden />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 text-foreground transition-colors duration-200 ease-out hover:text-primary"
              >
                <LinkedinIcon size={16} aria-hidden />
                LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:brightness-110 active:scale-[0.98]"
              >
                <Download size={16} aria-hidden />
                {t.nav.resume}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {field("name", contact.nameLabel, contact.namePlaceholder)}
            {field("email", contact.emailLabel, contact.emailPlaceholder, "email")}
            {field("message", contact.messageLabel, contact.messagePlaceholder)}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden />
                  {contact.sending}
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden />
                  {contact.submit}
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "var(--primary)" }}>
                  <CheckCircle2 size={16} aria-hidden />
                  {contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "var(--destructive)" }}>
                  <AlertCircle size={16} aria-hidden />
                  {contact.error}
                </p>
              )}
            </div>
          </form>
        </Glass>
      </Reveal>
    </section>
  );
}
