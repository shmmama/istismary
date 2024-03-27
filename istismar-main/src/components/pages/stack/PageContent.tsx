import React from "react";
import Chart from "./Chart";
import WritePost from "./WritePost";
import Post from "@/components/global/Post";
function PageContent() {
  const data = [
    {
      userImage: "/zoom.jpeg",
      contentImage: false,
      postType: "Bullish",
      FirstName: "Moudy",
      LastName: "wold",
      date: "السبت ٢٧ يناير ٤:٤٦ م",
      postContent: "$2010 asd asd f er rgf jr kutio fhoifsahf kjhui ",
      countOfLike: "8",
      countOfComment: "3",
      countOfShare: "4",
    },
    {
      userImage: "/zoom.jpeg",
      contentImage: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      postType: "Bullish",
      FirstName: "Moudy",
      LastName: "wold",
      date: "السبت ٢٧ يناير ٤:٤٦ م",
      postContent: "$2010 asd asd f er rgf jr kutio fhoifsahf kjhui ",
      countOfLike: "8",
      countOfComment: "3",
      countOfShare: "4",
    },
    {
      userImage: "/zoom.jpeg",
      contentImage: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      postType: "Bullish",
      FirstName: "Moudy",
      LastName: "wold",
      date: "السبت ٢٧ يناير ٤:٤٦ م",
      postContent: "$2010 asd asd f er rgf jr kutio fhoifsahf kjhui ",
      countOfLike: "8",
      countOfComment: "3",
      countOfShare: "4",
    },
    {
      userImage: "/zoom.jpeg",
      contentImage: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      postType: "Bullish",
      FirstName: "Moudy",
      LastName: "wold",
      date: "السبت ٢٧ يناير ٤:٤٦ م",
      postContent: "$2010 asd asd f er rgf jr kutio fhoifsahf kjhui ",
      countOfLike: "8",
      countOfComment: "3",
      countOfShare: "4",
    },
  ];
  return (
    <div className="">
      <Chart />
      <WritePost />
      <Post data={data} />
    </div>
  );
}

export default PageContent;
