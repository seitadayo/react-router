import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメーターは{id}desu</p>
      <p>クエリパラメーターは{query.get("name")}desu</p>
    </div>
  );
};
