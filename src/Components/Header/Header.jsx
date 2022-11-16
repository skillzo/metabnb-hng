import React from "react";
import Wrapper from "../UI/Wrapper";
import Logo from "../../Asset/GroupmetaLogo.png";
import { Link } from "react-router-dom";

import { useAuth } from "../../authContext";

function Header() {
  const { setIsClicked, showMenu, setShowMenu } = useAuth();

  return (
    <header>
      <Wrapper>
        <div className="py-6 border-b-2 border-[#A02279] md:border-none flex justify-between items-center mb-12">
          <Link to="/" className="w-1/2 md:w-1/4">
            <img src={Logo} alt="" />
          </Link>

          <nav className="w-2/5 md:flex justify-around hidden ">
            <Link to="/">Home</Link>
            <Link to="/places-to-stay">Place to Stay</Link>
            <Link to="/">NFTs</Link>
            <Link to="/">Community</Link>
          </nav>

          <div className="w-1/4 text-right hidden md:block">
            <Link
              className="bg-[#A02279] px-4 py-2 rounded-lg text-white"
              onClick={() => {
                setIsClicked(true);
              }}
            >
              Connect Wallet
            </Link>
          </div>

          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setShowMenu(true);
              }}
              fill="#A02279"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 stroke-[#A02279]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {showMenu && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#fff]">
              <nav className="p-5">
                <div
                  className="cursor-pointer inline border"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <svg
                    className="z-50 cursor-pointer w-8 h-8  stroke-[#A02279]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#A02279"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-12 items-center my-[4em] transition-all">
                  <Link
                    className="text-[1.2em] my-2 font-bold"
                    to="/"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-[1.2em] my-2 font-bold"
                    to="/places-to-stay"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Place to Stay
                  </Link>
                  <Link
                    className="text-[1.2em] my-2 font-bold"
                    to="/"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    NFTs
                  </Link>
                  <Link
                    className="text-[1.2em] my-2 font-bold "
                    to="/"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Community
                  </Link>

                  <Link
                    className="text-[1.2em] my-2 font-bold bg-[#A02279] px-4 py-2 rounded-lg text-white"
                    onClick={() => {
                      setShowMenu(false);
                      setIsClicked(true);
                    }}
                  >
                    Connect Wallet
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
