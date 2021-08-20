import { useLocation, useHistory } from "react-router-dom";

export const Page1DtailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  console.log(state);
  const onClickBack = () => history.push("/page1");
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
