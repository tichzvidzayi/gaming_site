import React from "react";
import Button from "./ui/Button";

const GamePreview: React.FC = () => {
  return (
    <section className="bg-purple-900 text-white py-10 mt-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="text-center mb-10">
          <h1 className="text-white font-ondo font-extrabold text-4xl leading-tight tracking-widest text-center">
            CHOOSE YOUR <br></br>
            <span className="text-purple-500">FAVORITE</span> GAMES
          </h1>
          <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
            Offer sneak peeks and previews of upcoming games, including
          </p>
          <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
            trailers, screenshots, and information about release.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        {/* Left Image */}
        <div className="w-1/4">
          <img
            src="guy.png"
            alt="guy Image"
            className="rounded-md object-cover"
          />
        </div>

        {/* Center Sneak Peek */}
        <div className="w-1/2 p-4 rounded-lg text-center relative">
          <div className="relative mb-10">
            <img
              src={"doggo.png"}
              alt="Sneak Peeks"
              className="rounded-md object-cover mx-auto"
            />
            <img
              src={"logo.png"}
              alt="Game Header"
              className="w-1/12 absolute top-4 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-700 py-2 px-6 text-sm font-bold rounded-full text-white shadow-lg">
            SNEAK PEEKS
          </h2>
        </div>

        {/* Right Image */}
        <div className="w-1/4">
          <img
            src="girl.png"
            alt="Right Image"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      {/* Button Section */}
      <div className="text-center mt-10 space-x-4">
        <Button btnStyle="fill" btnText="VIEW ALL" />
        <Button btnStyle="outline" btnText="PLAY NOW" />
      </div>
    </section>
  );
};

export default GamePreview;
