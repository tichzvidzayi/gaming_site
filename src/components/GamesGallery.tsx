import React from "react";
import Button from "./ui/Button";

const GameGallery: React.FC = () => {
  const games = [
    {
      id: 1,
      image: "game1.png",
      title: "Core Philosophies",
      author: "Cameron Williamson",
      role: "Galex"
    },
    {
      id: 2,
      image: "game2.png",
      title: "Core Philosophies",
      author: "Dianne Russell",
      role: "Lush Vortex"
    },
    {
      id: 3,
      image: "game3.png",
      title: "Core Philosophies",
      author: "Jane Cooper",
      role: "Neon Squad"
    },
    {
      id: 4,
      image: "game4.png",
      title: "Core Philosophies",
      author: "Cody Fisher",
      role: "The Void Strike Company"
    },
    {
      id: 5,
      image: "game5.png",
      title: "Core Philosophies",
      author: "Wade Warren",
      role: "Glaxon"
    },
    {
      id: 6,
      image: "game6.png",
      title: "Core Philosophies",
      author: "Robert Fox",
      role: "Lobal"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#1f003b] to-[#3c0071] text-center py-20 px-8">
      {/* Section Header */}
      <h1 className="text-white font-extrabold text-5xl mb-12">
        WELCOME TO THE TOP
      </h1>

      {/* Game Categories */}
      <div className="flex justify-center gap-4 mb-16">
        <Button btnStyle="fill" btnText="NEWEST GAMES" />
        <Button btnStyle="outline" btnText="LATEST GAMES" />
        <Button btnStyle="outline" btnText="FIGHT GAMES" />
        <Button btnStyle="outline" btnText="SPORT GAMES" />
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#2a054e] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-white font-bold text-xl mb-3">
                {game.title}
              </h3>
              <div className="flex items-center mb-6">
                <img
                  src={`avatar${game.id}.png`}
                  alt={game.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-semibold">{game.author}</p>
                  <p className="text-purple-300 text-sm">{game.role}</p>
                </div>
              </div>
              <Button btnStyle="fill" btnText="LIVE DEMO" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGallery;
