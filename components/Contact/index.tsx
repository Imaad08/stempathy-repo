"use client"
import React, { useState, FormEvent } from "react";

const Contact: React.FC = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });

    const json = JSON.stringify(object);

    setResultMessage("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
      } else {
        console.log(response);
        setResultMessage(jsonResponse.message);
      }
    } catch (error) {
      console.log(error);
      setResultMessage("Something went wrong!");
    } finally {
      form.reset();
      setTimeout(() => {
        setResultMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mt-10">
        <h2 className="text-4xl text-center underline">Our Information:</h2>
        <ul className="text-2xl italic text-center">
          <li className="py-6 mt-10">Location: San Diego, CA 92127</li>
          <li className="py-6">Email: clubstempathy@gmail.com</li>
          <li className="py-6">Instagram: @dnhs_stempathy</li>
        </ul>
      </div>

      <div className="w-full">
        <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Contact Us
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="apikey" value="05a0f660-8a77-4394-8bb8-3337dbf3b8ca" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id="botcheck" style={{ display: "none" }} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              
              <p className="text-base text-center text-gray-400" id="result">
                {resultMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
