// Deps
import React from 'react';
// Components
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../00-Components/Logo/Logo';
import HorMultiSelect from '../../00-Components/HorMultiSelect/HorMultiSelect';
import CountComponent from '../../00-Components/CountComponent/CountComponent';
import HorDonutGraph from '../../00-Components/HorDonutGraph/DonutGraph';
import HorCalendar from '../../00-Components/HorCalendar/HorCalendar';
// Hooks
// Actions
import { addToCountAction, substractFromCountAction } from '../../02-Actions/countActions';

const getCountfromStore = (store:any) => store.count;

const mockList = [
  {
    label: 'Burger 🍔', type: 'junk', value: 'burger', disabled: true,
  },
  { label: 'Lobster 🦞', type: 'seafood', value: 'lobster' },
  { label: 'Potatoes 🍟', type: 'junk', value: 'potatoes' },
  { label: 'Milk 🥛', type: 'drink', value: 'milk' },
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

const MainPage = ():JSX.Element => {
  const count = useSelector(getCountfromStore);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="hor-capsule">
        <Logo size="40" className="hor-logo" />
        <h1>
          Hor Project Boostrap V
          <sub>2</sub>
        </h1>
        <h2>Sub-Title</h2>
        <h3>Header</h3>
        <h4>Sub-Header</h4>
        <p>
          Hello this Website is a bootstrap for future projects to be created,
          this text is just a test to see how text behaves with its styles arranged
        </p>
        <CountComponent
          value={count}
          addFunction={() => dispatch(addToCountAction(1))}
          substractFunction={() => dispatch(substractFromCountAction(1))}
        />
        <div style={{ width: "450px" }}>
          <HorDonutGraph
            colors={donutMock.colors}
            values={donutMock.values}
            icons={donutMock.icons}
            initialOffset={20}
          />
        </div>
        <div>
          <HorCalendar/>
        </div>
        <form className="hor-form">
          <HorMultiSelect label="Desired Food" list={mockList} />
          <button className="rounded" type="submit" onClick={(e) => { e.preventDefault(); }}>send</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
