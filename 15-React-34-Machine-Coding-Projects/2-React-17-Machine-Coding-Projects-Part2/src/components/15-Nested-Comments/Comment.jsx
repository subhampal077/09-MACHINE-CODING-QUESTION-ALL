import React, { useState } from "react";

const Comment = ({ item, handleAddReply }) => {
  const [reply, setReply] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        marginBlock: "18px",
        textAlign: "start",
        marginInline: "auto",
        wordWrap: "break-word",
      }}
    >
      <li>{item?.comment}</li>

      {!showReplyBox ? (
        <button onClick={() => setShowReplyBox(true)}>Reply</button>
      ) : (
        <div>
          <textarea
            rows={2}
            cols={35}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              if (reply.trim()) {
                handleAddReply(item.id, reply);

                setShowReplyBox(false);
                setReply("");
              }
            }}
          >
            Submit
          </button>{" "}
          &nbsp;
          <button
            onClick={() => {
              setShowReplyBox(false);
              setReply("");
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {item?.children?.length > 0 && (
        <ul>
          {item.children.map((item) => (
            <Comment
              key={item.id}
              item={item}
              handleAddReply={handleAddReply}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comment;
