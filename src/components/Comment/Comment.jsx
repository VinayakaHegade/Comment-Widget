import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import "./comment.css";
import CommentsBox from "../CommentsBox/CommentsBox";

const showReply = React.createContext();

export function useOpenReply() {
  return useContext(showReply);
}

function Reply(props) {
  const likeIcon = useRef();
  const numLikes = useRef();

  const [caretIcon, setCaretIcon] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  //Toggle when CANCEL and REPLY button are pressed
  function handleOpenReply() {
    setOpenReply((prevState) => (prevState = !prevState));
  }

  //Toggle caret up and down
  let caret = <i className="fa-solid fa-caret-down"></i>;

  function handleCaret() {
    setCaretIcon((prevState) => (prevState = !prevState));
  }

  if (caretIcon) {
    caret = <i className="fa-solid fa-caret-up"></i>;
  } else {
    caret = <i className="fa-solid fa-caret-down"></i>;
  }

  //Like message
  let toggleLike = false;
  let likes = props.likes;
  function likeComment() {
    toggleLike = !toggleLike;
    if (toggleLike) {
      likes++;
      likeIcon.current.style.color = "#4688de";
    } else {
      likes--;
      likeIcon.current.style.color = "gray";
    }
    numLikes.current.innerHTML = likes;
  }

  function deleteComment() {}

  return (
    <>
      <section className="message-container">
        <div className="message-user">{props.user}</div>
        <i className="fa-solid fa-user-circle"></i>
        <div className="message-text">{props.message}</div>
        <section className="message-icons-container">
          <i
            className="fa-solid fa-thumbs-up"
            ref={likeIcon}
            onClick={likeComment}
          ></i>
          <div className="icon-separator" ref={numLikes}>
            {props.likes}
          </div>
          <span>|</span>
          <i className="fa-solid fa-thumbs-down"></i>
          {!props.editable ? (
            <div className="secondary-btn" onClick={handleOpenReply}>
              REPLY
            </div>
          ) : (
            <div className="secondary-btn" onClick={deleteComment}>
              DELETE
            </div>
          )}
        </section>
        <showReply.Provider value={handleOpenReply}>
          {openReply && <CommentsBox autoFocus={true} />}
        </showReply.Provider>
        <section className="replies-arrow" onClick={handleCaret}>
          {caret}
          <div>View 3 replies</div>
        </section>
      </section>
    </>
  );
}

export default Reply;
