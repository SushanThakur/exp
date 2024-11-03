'use client';

import React, { FormEvent, useState } from 'react';
import Header from '../components/Header';
import Footer, { FooterLinks } from '../components/Footer';

import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

async function addDataToFirestore(name: string, email: string, message: string) {
  try {
    const d = new Date(Date.now());
    d.toString();
    const _docRef = await addDoc(collection(db, "sushant-uk-contact-form-next"), {
      email: email,
      name: name,
      message: message,
      time: d,
    });

    // console.log("Message Sent Sucessfully! ");
    return true;
  }
  catch (_error) {
    return false;
  }
}

export default function Page() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const added = await addDataToFirestore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");

      alert("Message Sent Sucessfully!! \nI will try my best to follow up in next 24hrs. :)\n");
    }
  };

  return (
    <div>
      <Header />

      <div className="section-container min-h-[80vh] mt-12">
        <section className="section">
          <h1 className='text-2xl font-semibold'>Contact Form</h1>
          <form onSubmit={handleSubmit} id='contactForm' action="#" className='flex flex-col gap-4'>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input required id='username' type="text" className="grow" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input required id='email' type="email" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label className="form-control">
              <textarea required id='message' className="textarea textarea-bordered h-24" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>

            <button className="btn w-full">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>

          </form>

          <FooterLinks />

        </section>
      </div>

      <Footer />
    </div>
  );
}