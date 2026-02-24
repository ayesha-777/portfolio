import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_luscimp",    
        "template_6j4jsge",   
        form.current,
        "rm1JgK6q8hVWf952V"     
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="Contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
          <p className="text-gray-300 text-lg">
            Feel free to reach out for collaboration or a simple conversation.
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-12  max-w-lg mx-auto p-8  border border-gray-300 rounded-2xl shadow-lg">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-400 py-3 outline-none focus:border-purple-400 transition"
            />
            <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-400">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-400 py-3 outline-none focus:border-purple-400 transition"
            />
            <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-400">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-400 py-3 resize-none outline-none focus:border-purple-400 transition"
            ></textarea>
            <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-400">
              Message
            </label>
          </div>

          {/* Send Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="px-10 py-3 rounded-full border border-grey-300 text-white hover:bg-purple-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;