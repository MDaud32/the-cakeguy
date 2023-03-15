import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { ToastContainer, toast } from "react-toastify";
import { BsFillSendCheckFill } from "react-icons/bs";
import Image from "next/image";
import contact from "../public/contact.png";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  console.log(errors.name);
  const [status, setStatus] = useState();
  console.log(status);
  const onSub = async (d) => {
    setStatus("");
    console.log(d);
    let name = d.name;
    let email = d.email;
    let subject = d.subject;
    let message = d.message;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    reset();
    const data = await response.json();
    console.log(data);
    setStatus(data.statusCode);
    if (data.statusCode === 200) {
      return toast.success("message sent successfully");
    }
    if (data.statusCode === 500) {
      return toast.error("message sending failed");
    }
  };
  return (
    <div className="md:w-[73%] lg:w-[96] 2xl:w-[800px] 2xl:ml-72 ml-auto sm:px-8 lg:px-12 mt-8 flex flex-col md:flex-row">
      <div className="md:mr-8 w-[80%] md:w-[30%] space-y-3 mx-auto md:mx-0">
        <Image src={contact} alt="contact" className="w-64 mx-auto" />
        <p className="text-[12px] font-semibold text-center ">
          Let&apos;s chat! Feel free to contact me. ✉
        </p>
        <p className="text-[12px] text-center">
          If you have any questions regarding my work, my process, want to
          commission me for a painting, or just want to chat, you are welcome to
          contact me!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSub)}
        className=" flex justify-center flex-col px-3">
        <h1 className={"text-2xl mb-2 font-bold italic text-[#95AB60]"}>
          Get in touch!
        </h1>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "⚠ name is required",
            minLength: {
              value: 3,
              message: "⚠ name should be at least 3 chars long",
            },
          })}
          className="bg-transparent border md:w-96 py-2 rounded-md tracking-wider px-3 text-gray-700 placeholder:text-gray-600 border-gray-400  leading-tight focus:outline-none focus:shadow-outline"
        />
        <p className={" mt-2 mb-4 text-sm italics pl-2"}>
          <ErrorMessage errors={errors} name={"name"}>
            {({ messages }) => {
              console.log(messages);
              return (
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              );
            }}
          </ErrorMessage>
        </p>
        <input
          id="email"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "⚠ email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "⚠ please enter a valid email address",
            },
          })}
          className="bg-transparent border md:w-96 py-2 rounded-md tracking-wider px-3 text-gray-700 placeholder:text-gray-600 border-gray-400  leading-tight focus:outline-none focus:shadow-outline"
        />
        <p className={" mt-2 mb-4 text-sm italics pl-2"}>
          <ErrorMessage errors={errors} name={"email"}>
            {({ messages }) => {
              console.log(messages);
              return (
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              );
            }}
          </ErrorMessage>
        </p>

        <input
          id="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: "⚠ subject is required" })}
          className="bg-transparent border md:w-96 py-2 rounded-md tracking-wider px-3 text-gray-700 placeholder:text-gray-600 border-gray-400  leading-tight focus:outline-none focus:shadow-outline"
        />
        <p className={" mt-2 mb-4 text-sm italics pl-2"}>
          <ErrorMessage errors={errors} name={"subject"}>
            {({ messages }) => {
              return (
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              );
            }}
          </ErrorMessage>
        </p>

        <textarea
          id="message"
          placeholder="Message"
          {...register("message", {
            required: "⚠ message can not be empty",
            minLength: {
              value: 10,
              message: "⚠ message should at least be 10 characters long",
            },
          })}
          className="bg-transparent border md:w-96 rounded-md tracking-wider px-3 text-gray-700 placeholder:text-gray-600 border-gray-400  leading-tight focus:outline-none focus:shadow-outline"
          rows="6"
        />
        <p className={" mt-2 mb-4 text-sm italics pl-2"}>
          <ErrorMessage errors={errors} name={"message"}>
            {({ messages }) => {
              console.log(messages);
              return (
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              );
            }}
          </ErrorMessage>
        </p>
        <div className="flex flex-col md:flex-row gap-2 mb-4 md:mb-0">
          {isSubmitting ? (
            <button
              type="submit"
              disabled={true}
              className="bg-[#95AB60] disabled:bg-red-700 w-3/4 md:w-1/2 hover:bg-[#76874e] text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto">
              Sending
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#95AB60] flex justify-center w-3/4 md:w-1/2 items-center gap-3 hover:bg-[#76874e] text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto">
              send
              <BsFillSendCheckFill className={"mt-1"} />
            </button>
          )}
          <button
            onClick={() => reset()}
            className="bg-[#95AB60] flex justify-center w-3/4 md:w-1/2 items-center gap-3 hover:bg-[#76874e] text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto">
            Reset
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
