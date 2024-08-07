// src/components/Guestbook.jsx
import React, { useState, useEffect,useRef } from "react";
import {
  auth,
  db,
  logout,
} from "../../firebase";
import { ref, onValue, push,serverTimestamp } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./SignIn";
import MessageInput from "./MessageInput";
import Message from "./Message";
import { HiOutlineLogout } from "react-icons/hi";

const Guestbook = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // Listen for real-time updates to the "messages" collection
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setMessages(messagesArray); // No need to reverse
    });

    // Cleanup listeners on component unmount
    return () => {
      unsubscribeAuth();
    };
  }, []);

  const handleSendMessage = async (messageText) => {
    if (user && messageText.trim()) {
      const newMessage = {
        text: messageText,
        author: user.displayName,
        email: user.email, // Save the user's email
        photoURL: user.photoURL, // Save the user's profile picture URL
        createdAt: serverTimestamp(),
      };
      const messagesRef = ref(db, "messages");
      await push(messagesRef, newMessage);
    }
  };
  return (
    <div className=" my-5 ">
      <div className=" space-y-6 h-[22rem] overflow-y-scroll px-2" style={{overflowY: 'scroll' }}>
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
        <div ref={messagesEndRef} />
        </div>
      {user ? (
        <div className="my-2">
          <MessageInput onSendMessage={handleSendMessage} />
          <SignOut name={user.displayName} email={user.email} />
        </div>
      ) : (
        <div className=" my-2">
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Guestbook;

const SignOut = ({ name, email }) => {
  return (
    <div className=" block sm:flex flex-row gap-2 text-base sm:text-lg mt-2">
      <p className=" text-neutral-500 dark:text-neutral-600">
        Signed in as <span className=" font-medium">{name}</span>
        {` (${email}) .`}
      </p>
      <button
        className=" text-red-600 flex flex-row items-center justify-center gap-1 sm:gap-2"
        onClick={logout}
      >
        <HiOutlineLogout />
        <p>Sign Out</p>
      </button>
    </div>
  );
};


