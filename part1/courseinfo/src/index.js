import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  let suma = 0
  props.ejercicios.forEach(value => {
    suma=suma+value.exercises
  });
  return (
    <p>Number of exercises {suma}</p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name:'Fundamentals of React',
    exercises: 10,
  },{
    name:'Using props to pass data',
    exercises: 7
  }, {
    name:'State of a component',
    exercises: 14,
  }]
  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total ejercicios={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))