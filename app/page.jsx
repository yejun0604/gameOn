"use client";
import Hero from "./hero/page";
import Search from "./search/page";
import GameList from "./gameList/page";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // Ensure this import path is correct
import { useEffect, useState } from "react";
import Post from "./post/page";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const newPosts = []; // Array to hold fetched posts
      const uniqueIds = new Set(); // Set to track unique IDs

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        const postId = doc.id; // Get the document ID
        // Only add if the ID hasn't been seen
        if (!uniqueIds.has(postId)) {
          uniqueIds.add(postId); // Track this ID
          newPosts.push(postData); // Collect unique post data
        }
      });

      setPosts(newPosts); // Update state once with all unique posts
    };

    getPost(); // Call the async function
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
      <Hero />
      <Search />
      <GameList />
      {posts.length > 0 ? <Post posts={posts} /> : null} {/* Render Post only if there are posts */}
    </div>
  );
};

export default Home;
