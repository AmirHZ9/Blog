import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Send_Comment } from "../../graphql/mutation";

export default function Comment({slug}) {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    text: "",
    
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const commentHandler = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

//!   Mutation
  const [sendComment, { loading, called }] = useMutation(Send_Comment, {
    variables: {
      name: comment.name,
      email: comment.email,
      text: comment.text,
      slug
    },
  });

//? commentHandler   
  const sendCommentHandler = () => {
    if (comment.name && comment.email && comment.text) {
      sendComment();
      setComment({
        name: "",
        email: "",
        text: "",
      });
      setSuccess("comment send successfully.");
      setError("");
    } else {
      setSuccess("");
      setError("All field must be completed!");
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1200px] m-auto shadow-xl  rounded-lg p-4">
        <div>
          <p className="text-primary font-semibold">Send Comment</p>
        </div>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border w-full p-2 rounded-md my-4 outline-none"
            required
            onChange={commentHandler}
            value={comment.name}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border w-full p-2 rounded-md my-4 outline-none"
            required
            onChange={commentHandler}
            value={comment.email}
          />
          <textarea
            name="text"
            placeholder="Comment . . ."
            id=""
            cols="30"
            rows="10"
            className="border w-full p-2 rounded-md my-4 outline-none"
            required
            onChange={commentHandler}
            value={comment.text}
          ></textarea>
          {called && loading == false && (
            <p className="text-primary mb-4 font-semibold">{success}</p>
          )}
          <p className="text-red-700 mb-4 font-semibold">{error}</p>
          {loading ? (
            <button
              type="submit"
              onClick={sendCommentHandler}
              className="border border-primary rounded-md px-10 py-1 text-white bg-primary  outline-none"
            >
              Sending . . .
            </button>
          ) : (
            <button
              type="submit"
              onClick={sendCommentHandler}
              className="border border-primary rounded-md px-10 py-1 text-primary hover:bg-primary hover:text-white duration-300 outline-none"
            >
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
