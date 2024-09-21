
import { useState

 } from "react";
const Header = (props) =>{
  console.log(props);
  return (
    <div>
      <h1>{props.course.header}</h1>
    </div>
  )
}

const Content = (props)=>{
  console.log("1",props.course.part);
  return (
    props.course.parts.map((part, index)=>
      <p key={index}>
        {part.part} {part.exercises}
      </p>
    )
  
  )
}
const Total = (props)=>{
  console.log(props);
  let result = props.course.parts.reduce((sum, course)=>
    sum + course.exercises, 0
  )
  return(
    <p>Number of exercises {result}</p>
  )
}
const Statistics = (props)=>{
  if (props.good + props.neutral + props.bad === 0){
     return(
      <div>
        <p>No feedback given</p>
      </div>
     )
  }
  else{
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>

        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>

        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>

        <tr>
          <td>all</td>
          <td>{props.good + props.neutral + props.bad}</td>
        </tr>

        <tr>
          <td>average</td>
          <td>{((props.good * 1) + (props.neutral * 0) + (props.bad * -1))/(props.good + props.neutral + props.bad)}</td>
        </tr>

        <tr>
          <td>positive</td>
          <td>{(props.good/(props.good + props.neutral + props.bad)) * 100} %</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
}
const DisplayMax =(props)=>{
  console.log("maxvote", props.maxVote);
  console.log("position", props.position)
  return(
    <div>
      <p>{props.anecdotes[props.position]}</p>
      <p>has {props.maxVote} votes</p>
    </div>
  )
}



const App = () => {
  // part1.3 to part1.5

  const course = {
  header:'Half Stack application development',
  parts:[
    {part:'Fundamentals of React',  exercises:10},
    {part: 'Using props to pass data', exercises:7},
    {part: 'State of a component', exercises:14 }

  ]
}

// part 1.6 to part 1.11
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const recordGood = () => setGood(good + 1)
const recordNeutral = () => setNeutral(neutral + 1)
const recordBad = () =>setBad(bad + 1)


// part 1.12 to part 1.14

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const [selected, setSelected] =useState(0)

const GenerateAnecdote = ()=> {
  const randomNumber = Math.floor(Math.random() * 8);
  setSelected(randomNumber)
}

const [votes, setVotes] = useState(Array(8).fill(0));


const CountVote = () => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}
const maxVote = Math.max(...votes);
console.log("maxVote", maxVote)
const position = votes.indexOf(maxVote);





// ;
// setSelected(randomNumber);










  return (
  // part1.3 to part1.5
    <div>
      <div>
        <Header course={course}/>
        <Content course ={course}/>
        <Total course={course}/>
        
      </div>

   
   {/* part 1.6 to part 1.11  */}
      <div>
        <h1>give feedback </h1>
       <button onClick={recordGood}>good</button>
       <button onClick={recordNeutral}>neutral</button>
       <button onClick={recordBad}>bad</button>
      </div>
   
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>

      {/* part 1.12 to part 1.14 */}
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={CountVote}>vote</button>
        <button onClick={GenerateAnecdote}>next anecdote</button>
        
      </div>

      <div>
          <h1>Anecdote with most votes</h1>
          <DisplayMax votes = {votes} maxVote={maxVote} position={position} anecdotes={anecdotes}/>
      </div>
      

    </div>
  )
}

export default App
