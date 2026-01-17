import React, { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nav = useNavigate();
  // get the API URL
  const API_URL =
    import.meta.env.VITE_API_URL || "https://jossi-backend.onrender.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // error handle state
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [serverErr, setServerErr] = useState("");

  // on submit handler function
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // clear the previous message
    setServerErr("");
    setSuccess("");
    setNameErr("");
    setEmailErr("");
    setMessageErr("");

    let flag = true;
    // name validation
    if (!name) {
      setNameErr("Please enter your name");
      flag = false;
    } else {
      setNameErr("");
    }

    // email validation
    if (!email) {
      setEmailErr("Please first enter the email");
      flag = false;
    } else if (!email.includes("@")) {
      setEmailErr("Invalid email address");
      flag = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        setEmailErr("Invalid email format");
        flag = false;
      } else {
        setEmailErr("");
      }
    }

    // message validation
    if (!message) {
      setMessageErr("Please write at least 5 characters");
      flag = false;
    } else {
      setMessageErr("");
    }
    if (!flag) {
      return;
    }

    // form data
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    setLoading(true);
    try {
      // add time out
      const controller = new AbortController();
      const timeOut = setTimeout(() => controller.abort(), 30000);
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeOut);
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || `HTTP Error ${response.status}`);
      }
      setSuccess("✅ Message sent successfully!");
      setServerErr("");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess("");

        // Add fade-out transition class
        document.body.classList.add(
          "opacity-0",
          "transition-opacity",
          "duration-[1500ms]",
          "ease-in-out",
        );

        // Navigate after transition
        setTimeout(() => {
          nav("/");

          // Remove classes and fade in
          setTimeout(() => {
            document.body.classList.remove("opacity-0");

            // Scroll to home
            const homeSection = document.getElementById("home");
            if (homeSection) {
              homeSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 50);
        }, 1200); // Match duration-500 (0.5s)
      }, 2000);
    } catch (error) {
      setServerErr("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-[70%] mx-auto">
      <div className="mb-20 ">
        <h1 className="text-5xl font-bold text-emerald-300 text-center mb-8 ">
          Contact Me
        </h1>
        <form
          action=""
          method="post"
          onSubmit={submitHandler}
          className="flex flex-col gap-2 w-[75%]  m-auto relative bg-black/40 p-4 rounded-[20px] shadow-[0_0_20px_#06b6d4]"
        >
          <div className="flex flex-col gap-2">
            {serverErr ? (
              <span className="text-[var(--error-color)] text-end">
                {serverErr}
              </span>
            ) : (
              <span className="text-green text-end">{success}</span>
            )}
            <label
              htmlFor="name"
              className="text-[var(--subtitle-button)] font-bold text-2xl"
            >
              Name
            </label>
            <input
              placeholder="Enter Your Name"
              className="bg-white/80 h-[2.5rem] rounded-[10px] px-4 text-black font-semibold border-2 border-transparent
            focus:border-3
    focus:border-[var(--subtitle-button)]
    focus:outline-none
"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameErr && (
              <div className="text-[var(--error-color)] text-end">
                {nameErr}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[var(--subtitle-button)] font-bold text-2xl"
            >
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              className="bg-white/80 h-[2.5rem] rounded-[10px] px-4 text-black font-semibold  border-transparent
            focus:border-3
    focus:border-[var(--subtitle-button)]
    focus:outline-none"
              type="email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && (
              <div className="text-[var(--error-color)] text-end">
                {emailErr}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[var(--subtitle-button)] font-bold text-2xl"
            >
              Message
            </label>
            <textarea
              placeholder="Write your idea here!"
              className="bg-white/80 py-3 min-h-[2rem] max-h-[8rem] rounded-[10px] px-4 text-black font-semibold border-transparent
            focus:border-3
    focus:border-[var(--subtitle-button)]
    focus:outline-none"
              name=""
              id=""
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageErr && (
              <div className="text-[var(--error-color)] text-end">
                {messageErr}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-[var(--subtitle-button)] w-[150px] p-1.5 rounded-full items-center mb-5 mt-3 mx-auto cursor-pointer items-center hover:shadow-[0_0_20px_#06b6d4] font-bold "
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <FaCircleNotch size={20} color="var(--color-hover)" />
                Please Wait...
              </span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
