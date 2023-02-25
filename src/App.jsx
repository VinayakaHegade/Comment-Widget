import TopCommentsBox from "./components/CommentsBox/TopCommentsBox/TopCommentsBox";
import CommentsScroll from "./components/CommentsScroll/CommentsScroll";
import "./index.css";

function App() {
  return (
    <div className="ColHolder">
      <h1>Comments</h1>
      <TopCommentsBox autoFocus={false} />
      <CommentsScroll />
    </div>
  );
}

export default App;
