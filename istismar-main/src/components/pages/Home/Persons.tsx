import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaShareAltSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import {Person} from './Employee';
import axios from 'axios';
import { DateValues } from "date-fns";

interface Person {
    id: number;
    first_name: string;
    last_name: string;
    contentPost: string;
    person: Person;
}  
const App: React.FC = () => {
    const [persons, setPerson] = useState<Person[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<Person[]>('http://127.0.0.1:8000/api/person/person/');
          console.log(response.data)
          setPerson(response.data);
        } catch (error) {
          console.error('Error fetching employees:', error);
          // Handle the error appropriately (e.g., show an error message)
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div className="bg-white py-3 mt-5">
      <div className="grid grid-cols-[15%_85%] gap-3">
        {/* Start First Section */}
        <div className="flex flex-col items-center">
          <div>
            {/* <Image
              src={data[0].userImage}
              alt="asd"
              width={60}
              height={60}
              className="rounded-full !w-16 !h-16"
            /> */}
          </div>
          <div className="w-fit mx-auto mt-2 rounded-xl bg-cusGreen text-white text-center font-semibold px-2 py-0 text-[10px]">
            {/* {data[0].postType} */}
          </div>
        </div>
        {/* End First Section */}



        {/* Start secound Section */}
        <div className="mx-5  mt-3">
          {/* Start Header */}
          <div className="flex justify-between">
            <div className="">
              <div className="text-xs !w-12 !h-12">
              {persons.length > 0 ? (
              persons.map((person) => (
                <Person
                    key={person.id}
                    first_name={person.first_name}
                    last_name={person.last_name}
                    // contentPost = {person.contentPost}
                   
                  />
                ))
              ) : (
                <p>Loading User Profile...</p>
              )}
              </div>
              <div className="text-[#878787] text-sm mt-1">
              {persons.length > 0 ? (
              persons.map((person) => (
                <div key={person.id} className="person-container"> {/* Wrap in a container div */}
                  <Person key={person.id} person={person} /> {/* Pass person object as prop */}
                  <div className="person-post mt-2"> {/* Separate div for content post */}
                    <p>{person.contentPost}</p>
                  </div>
                </div>
                // <Person
                //     key={person.id}
                //     contentPost = {person.contentPost}
                //   />
                ))
              ) : (
                <p>Loading User Profile...</p>
              )}
              </div>
            </div>
            <div className="">
              {/* <p className="text-xs text-[#ababab]">{data[0].date}</p> */}
            </div>
          </div>
          {/* End Header */}

          Start Image
          <div className="mt-2 text ">
            <div className="border-[1px] border-[#ababab] rounded-lg overflow-hidden">
              {/* <Image
                src={data[0].contentImage}
                alt="asd"
                height={300}
                width={560}
                className=""
              /> */}
            </div>
          </div>
          {/* End Image */}
        </div>
        {/* end secound Section */}
      </div>
      <hr className="w-full h-[1px] bg-[#ababab] mt-2" />
      <div className="grid grid-cols-[15%_78%] gap-7 mt-2">
        <div></div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between w-fit">
            <div className="flex items-center mx-1">
              {/* <span className="text-mold">{data[0].countOfLike}</span> */}
              <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                <AiOutlineLike className="text-xs cursor-pointer " />
              </span>
            </div>
            <div className="flex items-center mx-1">
              <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                <PiShareFat className="text-xs cursor-pointer " />
              </span>
            </div>
            <div className="flex items-center mx-1">
              {/* <span className="text-mold">{data[0].countOfLike}</span> */}
              <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:rotate-[360deg] hover:text-white ml-1 transition-all duration-500">
                <LiaShareAltSolid className="text-xs cursor-pointer " />
              </span>
            </div>
            <div className="flex items-center ">
              <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                <IoIosMore className="text-xs cursor-pointer " />
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center">
              {/* <span className="text-mold">{data[0].countOfComment}</span> */}
              <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:rotate-[360deg] hover:text-white ml-1 transition-all duration-500">
                <GoCommentDiscussion className="text-xs cursor-pointer " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
