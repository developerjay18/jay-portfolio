import React from 'react';
import {
  WhatsappIcon,
  InstaIcon,
  LinkedinIcon,
  GmailIcon,
  GithubIcon,
} from '../../assets';
import { Link } from 'react-router-dom';

function Footer() {
  const socialIcons = [
    {
      slug: 'https://wa.me/+916351468706',
      ImgURL: WhatsappIcon,
    },
    {
      slug: 'https://github.com/developerjay18',
      ImgURL: GithubIcon,
    },
    {
      slug: 'https://www.instagram.com/jayrai.web/',
      ImgURL: InstaIcon,
    },
    {
      slug: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=raijay2003.com',
      ImgURL: GmailIcon,
    },
    {
      slug: 'https://www.linkedin.com/in/jayrai2003',
      ImgURL: LinkedinIcon,
    },
  ];

  return (
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-footer-section text-whitePrimary flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
      {/* left section */}
      <div className="left-up">
        <div className="logo heading uppercase font-semibold text-3xl md:text-4xl text-whiteSecondary z-20">
          jayrai
        </div>
      </div>
      {/* right section */}
      <div className="right-down w-full lg:w-1/2 flex flex-col gap-10 ">
        <div className="flex flex-col gap-7 ">
          <div className="social-icons flex gap-6 justify-center lg:justify-end items-center ">
            {socialIcons.map((social) => (
              <Link
                to={social.slug}
                className="w-[10%] lg:w-[7%] z-10 tap-transp"
                key={social.slug}
              >
                <div className="cursor-pointer w-full">
                  <img
                    src={social.ImgURL}
                    alt="social-media-icon"
                    className=" hover:shadow-lg hover:shadow-gradientPurple rounded-xl w-full"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="copyright flex justify-center lg:justify-end capitalize font-inter text-lightGrey">
            copyright &copy; 2023. All Rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
