'use client';
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { sports } from "../gameList/page";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "@/firebaseConfig";
import Notification from "./Notification.tsx"
import { useRouter } from "next/navigation";

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const [showNotification, setShowNotification] = useState(false);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setInputs((values) => ({
        ...values,
        userName: session.user?.name,
        userImage: session.user?.image,
        email: session.user?.email,
      }));
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const storageRef = ref(storage, `gameOn/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        await savePost({ ...inputs, image: url });
      } catch (error) {
        console.error("File upload error:", error);
      }
    } else {
      await savePost(inputs);
    }
  };

  const savePost = async (postData) => {
    try {
      await setDoc(doc(db, "posts", Date.now().toString()), postData);
      console.log("Post saved successfully!");
      setShowNotification(true);
      setTimeout(() => {
        router.push('./'); 
      }, 1000);
      
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        {/*title */}
        <input
          type="text"
          placeholder="Title"
          name="title" // Added name attribute
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        {/*description */}
        <textarea
          name="description"
          className="w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description Here"
        />
        {/*date */}
        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        {/*location */}
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        {/*type of sport */}
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option defaultValue disabled>
            Select Game
          </option>
          {sports.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        {/*image */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full"
        />
        {/*button */}
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 rounded-md text-white"
        >
          Submit
        </button>
      </form>
      {showNotification && <Notification />}
    </div>
  );
};

export default Form;
