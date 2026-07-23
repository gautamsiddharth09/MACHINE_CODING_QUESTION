import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setLike((prev) => prev - 1);
    } else {
      setLike((prev) => prev + 1);
    }

    setLiked((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="img-div">
        <img
          src="https://images.news18.com/ibnlive/uploads/2025/09/sonam-wangchuk-2025-09-49287cb0fa01af2b88c4bc7033269e66-16x9.jpg"
          alt="Sonam Wangchuk"
        />

        <div className="item">
          <button
            onClick={handleClick}
            className={liked ? "liked-btn" : ""}
          >
            {liked ? "❤️" : "🤍"} {liked ? "Liked" : "Like"} ({like})
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;