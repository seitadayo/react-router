import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>page2ページです</h1>
      <Link to="/page2/111">URL Parameter</Link>
      <br />
      <Link to="/page2/111?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
