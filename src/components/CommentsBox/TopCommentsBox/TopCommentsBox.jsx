import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "../commentsBox.css";

function TopCommentsBox(props) {
  const message = useRef(null);

  const [showBtn, setShowBtn] = useState(false);
  const [enableBtn, setEnableBtn] = useState(true);

  function commentFocus() {
    setShowBtn(true);
  }

  function commentStroke(event) {
    let currentMsg = event.target.value;

    if (currentMsg) {
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  }

  function sendComment(event) {
    event.preventDefault();
  }

  return (
    <form>
      <section className="comment-box">
        <input
          autoFocus={props.autoFocus}
          type="text"
          placeholder="Join the discussion..."
          ref={message}
          onFocus={commentFocus}
          onKeyUp={commentStroke}
        />

        {/* underline begins here */}
        {/* <div className="comment-line">line</div> */}
      </section>
      {showBtn && (
        <div className="btn-container">
          <button
            className="btn send-button"
            disabled={enableBtn}
            onClick={sendComment}
          >
            COMMENT
          </button>
          <button
            className="btn cancel-button"
            onClick={() => {
              setShowBtn(false);
              message.current.value = "";
            }}
          >
            CANCEL
          </button>
        </div>
      )}
    </form>
  );
}

export default TopCommentsBox;
