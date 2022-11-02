// Deps
import React from "react";
// Components
import Logo from "../../00-Components/Logo/Logo";
import TestTable from "../../08-Containers/TableTest";
// Hooks
// Actions
import {
  addToCountAction,
  substractFromCountAction,
} from "../../02-Actions/countActions";

const getCountfromStore = (store: any) => store.count;

const mockList = [
  {
    label: "Burger 🍔",
    type: "junk",
    value: "burger",
    disabled: true,
  },
  { label: "Lobster 🦞", type: "seafood", value: "lobster" },
  { label: "Potatoes 🍟", type: "junk", value: "potatoes" },
  { label: "Milk 🥛", type: "drink", value: "milk" },
];

const donutMock = {
  icons: ["🐰", "🦊", "🐷", "🙉"],
  colors: ["#ffb997", "#f67e7d", "#843b62", "#621940"],
  values: [
    { label: "Bunny Popularity", value: 20 },
    { label: "Fox Popularity", value: 30 },
    {
      label: "Pig Popularity",
      value: 15,
    },
    {
      label: "Monkey Popularity",
      value: 25,
    },
  ],
};

const MainPage = (): JSX.Element => {
  return (
    <div>
      <div className="hor-capsule">
        <Logo size="40" className="hor-logo" />
        <h1>
          Hor Table V<sub>2</sub>
        </h1>
        <TestTable />
      </div>
    </div>
  );
};

export default MainPage;
