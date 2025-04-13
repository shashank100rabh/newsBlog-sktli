import { useState } from "react";

const Comment = ({ visible, onCommentSubmit, comments }) => {
  const [commentText, setCommentText] = useState("");
  if (!visible) return null;

  const handleSubmit = () => {
    onCommentSubmit(commentText);
    setCommentText(""); // Clear input after submission
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h3>Comments:</h3>
      <textarea
        className="w-full h-20 border rounded p-2"
        placeholder="Add a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button className="btn btn-sm btn-primary mt-2" onClick={handleSubmit}>
        Submit
      </button>
      {comments.map((comment, index) => (
        <p key={index} className="mt-2 p-2 border rounded">
          {comment}
        </p>
      ))}
    </div>
  );
};

export default Comment;
