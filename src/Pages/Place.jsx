import React from "react";
import Wrapper from "../Components/UI/Wrapper";

import frame1 from "../Asset/frame1.png";
import frame2 from "../Asset/frame2.png";
import frame3 from "../Asset/frame3.png";
import frame4 from "../Asset/frame4.png";
import frame5 from "../Asset/frame5.png";
import frame6 from "../Asset/frame6.png";
import frame7 from "../Asset/frame7.png";
import frame8 from "../Asset/frame8.png";
import frame9 from "../Asset/frame9.png";
import frame10 from "../Asset/frame10.png";
import frame11 from "../Asset/frame11.png";
import frame12 from "../Asset/frame12.png";
import frame13 from "../Asset/frame13.png";
import frame14 from "../Asset/frame14.png";
import frame15 from "../Asset/frame15.png";
import frame16 from "../Asset/frame16.png";
import Card from "../Components/Sections/Card";

function Place() {
  const data = [
    {
      img: frame1,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame2,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame3,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame4,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame5,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame6,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame7,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame8,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame9,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame10,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame11,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame12,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame13,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame14,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame15,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
    {
      img: frame16,
      title: "Desert King",
      cost: "1MBT Per Night",
      distance: "2345km away",
      time: "availabe for 2 weeks stay",
    },
  ];

  return (
    <div>
      <Wrapper>
        <div>
          <div className="flex justify-between flex-wrap gap-4 my-4 mt-12">
            <button>Restaurant</button>
            <button>Cottage</button>
            <button>Castle</button>
            <button>Fantast City</button>
            <button>Beach</button>
            <button>Cabins</button>
            <button>Off-Grid</button>
            <button>Farm</button>
            <button className="flex gap-4 border px-4 py-2 rounded-lg">
              <span>Location</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-8 justify-between">
            {data.map((collection) => {
              return (
                <div key={collection.img} className="">
                  <Card collection={collection} />
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Place;
