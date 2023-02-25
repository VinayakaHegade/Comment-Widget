import React from "react";
import Comment from "../Comment/Comment";
import "./commentsScroll.css"

function CommentsScroll() {
  return (
    <>
      <Comment user="Dummy User" editable={false} message="Dummy Message" likes={4} />
      <div className="bottom-bar">
        <div className="loader"></div>
      </div>
    </>
  );
}

export default CommentsScroll;
