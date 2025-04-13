import { useState } from "react";
import { Link } from "react-router";
import like from "./assets/heart.png";
import cmnt from "./assets/cmnt.png";
import Comment from "./Comment";
import { defaultImage } from "./constant";

const Card = (props) => {
  const {
    author,
    source,
    category,
    country,
    description,
    image,
    language,
    title,
  } = props.props;
  let [count, setCount] = useState(0);
  let [comments, setComments] = useState([]);
  let [commentCount, setCommentCount] = useState(0);
  let [commentVisible, setCommentVisible] = useState(false);

  const setCounter = () => {
    setCount(++count);
  };

  const addComment = () => {
    setCommentVisible(true);
  };

  const handleCommentSubmit = (newComment) => {
    setCommentCount(commentCount + 1);
    setComments([...comments, newComment]);
    setCommentVisible(false);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
      <img
          src={image ? image : defaultImage}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{title}</h2>
        <p>{description}</p>
        <div className="m-0 card-actions flex justify-between items-center">
          <Link to={`/describe/${source}`} className="btn btn-primary">
            View Details
          </Link>
          <div>
            <img
              src={like}
              className="h-6 cursor-pointer relative hover:z-20"
              onClick={setCounter}
            />
            <span>{count}</span>
          </div>
          <div>
            <img
              src={cmnt}
              className="h-6 cursor-pointer relative hover:z-20"
              onClick={addComment}
              alt="comment"
            />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
      <Comment
        visible={commentVisible}
        onCommentSubmit={handleCommentSubmit}
        comments={comments}
      />
    </div>
  );
};

export default Card;
