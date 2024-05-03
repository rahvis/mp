import React from 'react';

import config from '../config/index.json';

const About = () => {
  const {about } = config;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-10 py-5"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-5">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-14 h-0">
         
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 448 512"
    fill="currentColor" // For the fill color, it will take the current color.
    className="hover:text-primary" // Add any classes you like for the hover effect.
  >
    <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2c63.7 0 115.2-51.5 115.2-115.1S287.8 141 224.1 141zm0 190.3c-41.5 0-75.2-33.7-75.2-75.2 0-41.5 33.7-75.2 75.2-75.2 41.5 0 75.2 33.7 75.2 75.2 0 41.5-33.7 75.2-75.2 75.2zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-35.7-93.1-25.8-25.8-57.4-34-93.1-35.7-36.7-2.1-147.2-2.1-183.9 0-35.7 1.7-67.3 9.9-93.1 35.7-25.8 25.8-34 57.4-35.7 93.1-2.1 36.7-2.1 147.2 0 183.9 1.7 35.7 9.9 67.3 35.7 93.1 25.8 25.8 57.4 34 93.1 35.7 36.7 2.1 147.2 2.1 183.9 0 35.7-1.7 67.3-9.9 93.1-35.7 25.8-25.8 34-57.4 35.7-93.1 2.1-36.7 2.1-147.2 0-183.9zm-48.6 221c-7.8 19.7-22.9 35-42.6 42.6-29.5 11.7-99.5 9-132.9 9s-103.4 2.7-132.9-9c-19.7-7.8-35-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.9s-2.7-103.4 9-132.9c7.8-19.7 22.9-35 42.6-42.6 29.5-11.7 99.5-9 132.9-9s103.4-2.7 132.9 9c19.7 7.8 35 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.9s2.7 103.4-9 132.9z"/>
  </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} {' '}
            <a href="" rel="nofollow">
              Mindful Performance
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
