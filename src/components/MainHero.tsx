import React, { useState } from 'react';

import config from '../config/index.json';
import SubscribeModal from './SubscribeModal';

const MainHero = () => {
  const { mainHero } = config;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="space-y-4">
          <div className="rounded-md shadow">
            <button
              onClick={() => window.open(mainHero.secondaryAction.href, "_blank")}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </button>
          </div>
          <div className="rounded-md shadow">
            <button
              onClick={openModal}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </button>
          </div>
          </div>
        </div>
        <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </main>
  );
};

export default MainHero;
