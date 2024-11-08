"use client";
import React from "react";

export const sports = [
  {
    id: 1,
    name: "Cricket",
    image: "/assets/CricketBall.png",
  },
  {
    id: 2,
    name: "Tennis",
    image: "/assets/Tennis.png",
  },
  {
    id: 3,
    name: "PingPong",
    image: "/assets/PingPong.png",
  },
  {
    id: 4,
    name: "Soccer",
    image: "/assets/SoccerBall.png",
  },
  {
    id: 5,
    name: "Badminton",
    image: "/assets/Badminton.png",
  },
  {
    id: 6,
    name: "Trekking",
    image: "/assets/Trekking.png",
  },
  {
    id: 7,
    name: "Other Games",
    image: "/assets/Puzzle.png",
  },
];

const GameList = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4">
      {sports.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={item.image}
            width={45}
            height={45}
            className="hover:animate-bounce transition-all duration-150"
          />
          <h2 className="text-[14px] text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameList;
