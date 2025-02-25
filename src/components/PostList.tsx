import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1",
    category: "History",
    comments: 20,
    description:
      "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer.",
    title: "The Beginning of the End of the World",
    userName: "Jessica",
  },
  {
    id: "2",
    category: "Science",
    comments: 15,
    description:
      "Exploring the vastness of the universe, scientists have discovered new galaxies that challenge our understanding of space and time.",
    title: "The Wonders of the Universe",
    userName: "Michael",
  },
  {
    id: "3",
    category: "Technology",
    comments: 30,
    description:
      "Artificial Intelligence is shaping the future in ways we never imagined, from healthcare to autonomous vehicles.",
    title: "The Rise of AI",
    userName: "Sophia",
  },
  // เพิ่มโพสต์อื่นๆ ได้ตามต้องการ
];
const isLogin = false;

const PostList = () => {
  return (
    <div className="flex flex-col container mx-auto rounded-2xl bg-white ">
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          {/* Post Component */}
          <Post
            id={post.id}
            category={post.category}
            comments={post.comments}
            description={post.description}
            title={post.title}
            userName={post.userName}
            isLogin={isLogin}
          />
          {/* Divider: แสดงเฉพาะถ้าไม่ใช่โพสต์สุดท้าย */}
          {index !== posts.length - 1 && (
            <div className="border-b-2 border-gray-100"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostList;
