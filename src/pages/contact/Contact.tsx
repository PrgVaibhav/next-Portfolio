import { MessageSquareShare } from "lucide-react";
import { Button, SmallHeader, Toast } from "../../components";

export const Contact = () => {
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
            <form className="flex flex-col gap-4 sm:gap-[1.8vh]">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[1.8vh] w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Your name?"
                    className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your email?"
                    className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Your message"
                  className="bg-[#363736] p-3 sm:p-[.6vw] rounded-lg sm:rounded-[.4vw] outline-none text-[#b5b5b5] placeholder-[#b5b5b5] border border-[#363736] hover:border-[#b5b5b5] focus:border-[#b5b5b5] focus:ring-[#b5b5b5] focus:ring-1 w-full text-sm sm:text-[clamp(.9rem,1vw,2rem)]"
                  rows={6}
                ></textarea>
              </div>
              <div>
                <Button
                  cn="bg-[#363736] w-full px-3 py-4 sm:px-[.6vw] sm:py-[.8vw] flex items-center justify-center text-[#ddd]"
                  leftIcon={<MessageSquareShare size={15} />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <Toast message="finally done" />
    </>
  );
};
