
import React, { useState } from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import SubscribeModal from './SubscribeModal';

const Reviews = () => {
  const { reviews } = config;
  const [firstItem, secondItem] = reviews.items;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {reviews.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-xl text-gray-800 font-bold`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-xl text-gray-800 font-bold`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-2xl font-bold">
            Sign up now to join the growing community of student-athletes and mindfulness coaches on Mindful Performance!
          </p>
          <div className="flex justify-center mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 mb-6"
          >
            Sign me up for the waitlist
          </button>
        </div>
        </div>
        
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Reviews;
