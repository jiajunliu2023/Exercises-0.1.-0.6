
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

const App = () => {
  const course = {
  header:'Half Stack application development',
  parts:[
    {part:'Fundamentals of React',  exercises:10},
    {part: 'Using props to pass data', exercises:7},
    {part: 'State of a component', exercises:14 }

  ]
}


  return (
    <div>
      <Header course={course}/>
      <Content course ={course}/>
      <Total course={course}/>
      
    </div>
  )
}

export default App
