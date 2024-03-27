import React, { useState } from 'react';
import Image from 'next/image';
import defualtImage from './defult.jpg';

function UserPageHeader() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isWatchListSubscribed, setIsWatchListSubscribed] = useState(false);

  const handleOptionsClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleFollowAllClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleFollowWatchListClick = () => {
    setIsWatchListSubscribed(!isWatchListSubscribed);
  };

  return (
    <>
    <div className=" w-full bg-white p-4 pt-8 flex items-start justify-between h-full">
      {/* User Information */}
      <div className="flex items-center ">
        <div className=" border-solid border-2 border-gray-300 rounded-full overflow-hidden h-16 w-16 bg-gray-300">
          <Image
              src={0/* in place of 0 put user image */ || defualtImage}
              alt="User Profile"
              className="h-full w-full object-cover rounded-full"
              width={64}
              height={64}
          />
        </div>
          <div className="ml-4">
            <p className="font-bold text-lm">User Name</p>
            <p className="text-xs text-gray-500">User Description</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <button
            className={`h-8 rounded-full bg-${isSubscribed ? 'mold' : 'white'} text-${isSubscribed ? 'white' : 'mold'} px-4 py-1.5 border mr-2 text-xs flex items-center`}
            onClick={handleFollowAllClick}
          >
            {isSubscribed ? 'Unfollow All' : 'Follow All'}
          </button>
          <button
            className={`h-8 rounded-full bg-${isWatchListSubscribed ? 'mold' : 'white'} text-${isWatchListSubscribed ? 'white' : 'mold'} px-4 py-1.5 border mr-2 text-xs flex items-center`}
            onClick={handleFollowWatchListClick}
          >
            {isWatchListSubscribed ? 'Unfollow WatchList' : 'Follow WatchList'}
          </button>
          <button className="h-8 rounded-full bg-mold text-white px-4 py-1.5 border mr-2 text-xs flex items-center">Send Message</button>

        {/* Options Button */}
        <div className="relative inline-block text-left">
          <button onClick={handleOptionsClick} className="text-gray-700 ml-2">
              {/* Replace the default menu icon with the provided SVG */}
              <svg fill="#000000" height="20px" width="20px" viewBox="0 0 32.055 32.055" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>
                </g>
              </svg>
          </button>

          {/* Options Dropdown */}
          {isOptionsOpen && (
            <div
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1
             ring-black ring-opacity-5 drop-mnu
             ${isOptionsOpen ? 'open show dark transition-opacity duration-500 ease-in-out' : 'opacity-0'}`}
          >
              <div className="py-1">
                <button className="block px-4 py-2 text-sm text-gray-700">Mute</button>
                <button className="block px-4 py-2 text-sm text-gray-700">Block</button>
                <button className="block px-4 py-2 text-sm text-gray-700">Report</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="pb-2  bg-white mb-2 text-right pr-4">
      <p className="text-xs text-gray-400 ">Member since: {new Date().toLocaleDateString()}</p>
    </div>
    </>
    );
}

export default UserPageHeader;
