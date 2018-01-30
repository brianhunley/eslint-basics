// example React code
import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <p>test</p>;
ReactDOM.render(jsx, document.getElementById('app'));

// example Promise
const work = new Promise((resolve, reject) => {
  resolve('Some data');
});

work.then((data) => {
  console.log(data);
});

// example javascript object
const bar = 10;
const foo = bar + 20;
const obj = {
  name: 'Brian',
  age: 53,
};
document.write(foo, obj);
