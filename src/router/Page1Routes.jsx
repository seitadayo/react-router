import { Page1 } from "../page1";
import { Page1DtailA } from "../Page1DetailA";
import { Page1DtailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DtailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DtailB />
  }
];
