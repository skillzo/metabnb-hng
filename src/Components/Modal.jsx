import React from "react";
import { useAuth } from "../authContext";
import Meta from "../Asset/meta.png";
import WalletConnect from "../Asset/walletConnect.png";

function Modal() {
  const { isClicked, setIsClicked } = useAuth();

  return (
    <div>
      {isClicked && (
        <div className="">
          <div
            className="fixed top-0  bg-[#00000066] w-screen h-screen"
            onClick={() => {
              setIsClicked(false);
            }}
          ></div>

          <div className="absolute bg-white w-11/12 md:w-2/5 h-3/7 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded-3xl">
            <div className="flex justify-between">
              <h2 className="font-bold text-[1.4em] mb-12">Connect Wallet</h2>
              <svg
                onClick={() => {
                  setIsClicked(false);
                }}
                className="z-50 cursor-pointer w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div>
              <p>Choose your Preferred Wallet: </p>
            </div>

            <div className="flex justify-between my-4 items-center bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#CFD8DC]">
              <div className="flex items-center gap-8">
                <div>
                  <img src={Meta} alt=""></img>
                </div>
                <h2 className="font-bold">MetaMask</h2>
              </div>

              <div>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between my-4 items-center bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#CFD8DC]">
              <div className="flex items-center gap-8">
                <div>
                  <img src={WalletConnect} alt=""></img>
                </div>
                <h2 className="font-bold">WalletConnect</h2>
              </div>

              <div>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
