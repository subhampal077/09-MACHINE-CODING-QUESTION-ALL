import React, { useState } from "react";
import Comment from "./Comment";

const NestedComments = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "This is first comment",
      children: [
        {
          id: 2,
          comment: "This is child comment one",
          children: [],
        },
        {
          id: 3,
          comment: "This is child comment two",
          children: [],
        },
        {
          id: 4,
          comment: "This is child comment three",
          children: [],
        },
      ],
    },
  ]);

  //   console.log(comments);

  function handleAddReply(getId, getReply) {
    // console.log(getId, getReply);
    let copyComments = [...comments];

    handleAddNewComments(copyComments, getId, getReply);
    setComments(copyComments);
  }

  function handleAddNewComments(copyComments, getId, getReply) {
    for (let i = 0; i < copyComments.length; i++) {
      let singleComment = copyComments[i];
      if (singleComment.id === getId) {
        singleComment.children.unshift({
          id: new Date().getTime(),
          comment: getReply,
          children: [],
        });
      }
    }

    for (let i = 0; i < copyComments.length; i++) {
      let singleComment = copyComments[i];
      if (singleComment.children.length > 0) {
        handleAddNewComments(singleComment.children, getId, getReply);
      }
    }
  }

  return (
    <div>
      <h1>Nested Comments</h1>

      <div>
        <textarea
          rows={5}
          cols={45}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <br />
        <button
          onClick={() => {
            if (inputValue.trim()) {
              setComments((prev) => [
                {
                  id: new Date().getTime(),
                  comment: inputValue,
                  children: [],
                },
                ...prev,
              ]);
            }
            setInputValue("");
          }}
        >
          Add Comment
        </button>
      </div>

      <ul>
        {comments.map((item) => (
          <Comment key={item.id} item={item} handleAddReply={handleAddReply} />
        ))}
      </ul>
    </div>
  );
};

export default NestedComments;
