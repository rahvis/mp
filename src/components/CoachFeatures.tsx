import React, { useState } from 'react';

import config from '../config/index.json';
import SubscribeModal from './SubscribeModal';

const CoachFeatures = () => {
  const { coachfeatures } = config;
  const { subtitle, description, desc2, items: featuresList } = coachfeatures;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:text-center">
          <p className="mt-5 leading-8 font-extrabold tracking-tight text-gray-700 sm:text-3xl">
            {desc2}
          </p>
        </div>

      </div>

      <div className="flex flex-col items-center mt-12 bg-light-blue py-12">
        <p className="text-center text-gray-500">
        Click the button below to sign up for the Waitlist to be among the first to know when we launch and gain exclusive access to special offers!
        </p>
        <button
          onClick={openModal}
          className="mt-4 bg-blue-500 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 mb-6"
        >
          Sign me up for the waitlist
        </button>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default CoachFeatures;
