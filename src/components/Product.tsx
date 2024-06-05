import React, { useState } from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import SubscribeModal from './SubscribeModal';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;
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
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <h3
          className={`w-full my-2 text-2xl font-bold leading-tight text-center text-primary`}
        >
          {product.subtitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
            <br/>
            <p className={`text-gray-600`}>{firstItem?.signup}</p>
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
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
              <p className={`text-gray-600 mb-8`}>{secondItem?.signup}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 bg-light-blue py-12">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 mb-6"
        >
          Sign me up for the waitlist
        </button>
        <p className="text-center text-gray-500">
          Be among the first to join the MindfulPerformance community and enjoy exclusive benefits, including free trials and early access, when we launch!
        </p>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Product;