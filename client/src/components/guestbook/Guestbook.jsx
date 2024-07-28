// src/components/Guestbook.jsx
import React, { useState, useEffect } from "react";
import { auth, db, signInWithGoogle, signInWithGithub, logout } from "../../firebase";
import { ref, onValue, push, serverTimestamp } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./SignIn";

const Guestbook = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribeAuth = onAuthStateChanged(auth, setUser);

    // Listen for real-time updates to the "messages" collection
    const messagesRef = ref(db, "messages");
    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setMessages(messagesArray.reverse()); // Reverse to show newest messages first
    });

    // Cleanup listeners on component unmount
    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const handleMessageSend = async () => {
    if (newMessage.trim()) {
      const messagesRef = ref(db, "messages");
      await push(messagesRef, {
        text: newMessage,
        author: user.displayName,
        createdAt: serverTimestamp(),
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <button onClick={logout}>Logout</button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Leave a message"
          />
          <button onClick={handleMessageSend}>Send</button>
          <div>
            {messages.map((msg) => (
              <div key={msg.id}>
                <p><strong>{msg.author}</strong>: {msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signInWithGithub}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default Guestbook;


    /* {user ? (
        <div>
          <button onClick={logout}>Logout</button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Leave a message"
          />
          <button onClick={handleMessageSend}>Send</button>
          <div>
            {messages.map((msg) => (
              <div key={msg.id}>
                <p><strong>{msg.author}</strong>: {msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signInWithGithub}>Sign in with GitHub</button>
        </div>
      )} */
