import './App.css';

import React from 'react';

const Header = (props) => {
  return (
    <Header>
      <h1>{props.name}'s Kitchen</h1>
    </Header>
  );
};

const Main = (props) => {
  return (
    <section>
      <p>We serve the most {props.adjectif} food around</p>
      <ul>
        {props.dishes.map((dish) => {
          <li key={dish.id}>{dish.title}</li>
        })}
      </ul>
    </section>
  );
};

const Footer = (props) => {
  return (
    <section>
      <p>Copyright {props.year}</p>
    </section>
  );
};

const dishes = ['Macaroni and cheese', 'Salmon', 'Tofu with vegetables'];

const dishesObjs = dishes.map((dish, i) => ({id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name={'Ridwan'} />
      <Main adjectif={'amazing'} dishes={dishesObjs} />
      <Footer year={new Date().getFullYear} />
    </div>
  );
}

export default App;
