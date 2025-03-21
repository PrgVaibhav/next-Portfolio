import { MessageSquareShare } from "lucide-react";
import { Button, SmallHeader, Toast } from "../../components";
import { useRef, useState, FormEvent, ChangeEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // New loading state
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Allow any valid email
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError("Please fill all the fields");
      return;
    }

    if (!isEmailValid) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true); // Show loading indicator

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICEID!,
          import.meta.env.VITE_EMAILJS_TEMPLATEID!,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            setSent(true);
            setError("");
            setIsLoading(false); // Hide loading indicator after success
            setName("");
            setEmail("");
            setMessage("");
          },
          () => {
            setError("Failed to send message. Please try again.");
            setIsLoading(false); // Hide loading indicator on error
          }
        );
    }
  };

  useEffect(() => {
    if (sent || error) {
      setTimeout(() => {
        setSent(false);
        setError("");
      }, 5000);
    }
  }, [sent, error]);

  return (
    <>
      <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh] relative">
        <SmallHeader
          primaryTitle="Hire Me"
          secondaryTitle="Available for work"
        />
        <section className="flex flex-col gap-4 sm:gap-[1.4vh]">
          <div className="flex flex-col gap-2 sm:gap-[1vh]">
            <h1 className="text-lg sm:text-[clamp(1rem,1.4vw,3rem)] font-bold">
              Have an Idea? Let’s Make It Happen!
            </h1>
            <p className="text-sm sm:text-[clamp(.9rem,1vw,2rem)] leading-relaxed text-[#b5b5b5]">
              Have a project in mind or need help with web development and UI
              design? Whether it’s a new idea, a collaboration, or just a tech
              discussion, I’d love to hear from you. Let’s create beautiful,
              high-performing applications together. Reach out, and let’s make
              it happen!
            </p>
          </div>
          <div className="p-3 sm:p-[1vw]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 sm:gap-[1.8vh]"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[1.8vh] w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Your name?"
                    className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your email?"
                    className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                    value={email}
                    name="email"
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Your message"
                  className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                  rows={6}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <Button
                  type="submit"
                  cn="bg-[#363736] w-full px-3 py-4 sm:px-[.6vw] sm:py-[.8vw] flex items-center justify-center text-[#ddd]"
                  leftIcon={<MessageSquareShare size={15} />}
                  isLoading={isLoading} // Pass loading state
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <Toast
        message={sent ? "Message sent!" : error}
        error={!!error}
        success={sent}
      />
    </>
  );
};
