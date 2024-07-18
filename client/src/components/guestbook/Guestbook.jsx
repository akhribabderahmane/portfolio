// src/components/Guestbook.jsx
import React, { useState, useEffect } from "react";
import { auth, db, signInWithGoogle, signInWithGithub, logout } from "../../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Guestbook = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, setUser);

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const handleMessageSend = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
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


// // src/components/Guestbook.jsx
// import React, { useState, useEffect } from "react";
// import { auth, db, signInWithGoogle, signInWithGithub, logout } from "../../firebase";
// import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import SignIn from "./SignIn";

// const Guestbook = () => {
//   const [user, setUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, setUser);
//     const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
//     const unsubscribeMessages = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     });

//     return () => {
//       unsubscribeAuth();
//       unsubscribeMessages();
//     };
//   }, []);

//   const handleMessageSend = async () => {
//     if (newMessage.trim()) {
//       await addDoc(collection(db, "messages"), {
//         text: newMessage,
//         author: user.displayName,
//         createdAt: new Date(),
//       });
//       setNewMessage("");
//     }
//   };

//   return (
//     <div>
//        <SignIn />
//     </div>
//   );
// };

// export default Guestbook;

    {/* {user ? (
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
      )} */}
