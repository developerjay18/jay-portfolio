import React, { useState } from 'react';
import { Developer } from '../../assets';
import emailjs from '@emailjs/browser';
import config from '../../config/config';

function ContactSection() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value }); // 2nd approch also available
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        config.emailjsServiceID,
        config.emailjsTemplateID,
        data,
        config.emailjsPublicID
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
  };

  return (
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-[#121212] flex justify-center items-center md:items-start text-whitePrimary gap-10 md:gap-8 flex-col md:flex-row">
      <div className="left-up w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src={Developer}
          alt="developer-illus"
          className=" pt-10 md:pt-5 w-full md:w-[80%] up-and-down-div"
        />
      </div>
      <div className="right-down w-full md:w-1/2 flex gap-8 justify-center items-center md:items-start flex-col">
        {/* heading section */}
        <h2 className="text-3xl md:text-5xl py-1 font-bold capitalize text-gradient inline-flex">
          get in touch
        </h2>

        <div className="form w-full">
          <form
            action="#"
            method="post"
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-5 flex-col md:flex-row">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="first name"
                className="capitalize p-2 py-3 glassy-div md:w-1/2 rounded-md focus:outline-none cursor-pointer focus:bg-[#474747] w-full"
                value={data.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address"
                className="w-full md:w-1/2 p-2 py-3 glassy-div rounded-md focus:outline-none cursor-pointer focus:bg-[#474747]"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="w-full glassy-div rounded-md p-2 focus:outline-none cursor-pointer focus:bg-[#474747]"
              defaultValue="Message"
              value={data.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-28 text-center p-2 capitalize br-gradient hover:shadow-lg hover:shadow-gradientPurple text-lg"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
