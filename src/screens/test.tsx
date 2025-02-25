"use client";
import Post from "@/components/Post";
import PostList from "@/components/PostList";
import Star from "@/components/Star";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
const test = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:order-2 bg-green-500 flex-1 p-4">
          Div <IoIosStarOutline />
          <IoIosStar className="text-golden lg:text-lg" />
          <Star />
          <Star isHightLight={true} />
        </div>

        <div className="md:order-1 bg-green-300 flex-1 p-4"></div>
      </div>
      <div className="flex flex-col container mx-auto rounded-2xl bg-white">
        <Post
          category="History"
          comments={20}
          description="The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer,"
          title="The Beginning of the End of the World"
          userName="Jessica"
        />
        <div className="border-b-4 border-indigo-500"></div>
        <Post
          category="History"
          comments={20}
          description="The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer,"
          title="The Beginning of the End of the World"
          userName="Jessica"
        />
      </div>
      <PostList />
    </>
  );
};
export default test;
