"use client";
import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import PostModal from "../components/PostModal";

const Post = ({ posts }) => {
const [post, setPost] = useState('');
  
useEffect(() => {
  console.log("Posts", posts);
},[posts]);

return (
  <div>
    <PostModal post={post}/>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
      {posts.map((item) => (
        <div onClick={() => { 
          document.getElementById('my_modal_3').showModal(); 
          setPost(item);
        }}>
        <PostItem key={item.id} post={item} />
        </div>
      ))}
    </div>
    
  </div>
  );
};

export default Post;
