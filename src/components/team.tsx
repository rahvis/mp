import React from 'react';
import config from '../config/index.json';
import Divider from './Divider';

const Team = () => {
  const { team } = config;

  // Check if team and team.items are defined
  if (!team || !team.items) {
    return <div>Error: Team data is not available.</div>;
  }

  const [firstItem] = team.items;

  return (
    <section className="bg-background py-8" id="product">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {team.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="text-center my-12">
          <h3 className="text-xl text-gray-800 font-bold">
            {firstItem?.title}
          </h3>
        </div>
        <div className="flex justify-center my-12">
          <img className="h-auto max-w-full" src={firstItem?.img} alt={firstItem?.title} />
        </div>
      </div>
    </section>
  );
};

export default Team;
