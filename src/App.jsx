
const Header = (props) =>{
  console.log(props);
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props)=>{
  console.log(props);
  return (
    props.course.map((course, index)=>
      <p key={index}>
        {course.part} {course.exercises}
      </p>
    )
  
  )
}
const Total = (props)=>{
  console.log(props);
  console.log(typeof(props.course[0].exercises))
  let result = props.course.reduce((sum, courses)=>
    sum + courses.exercises, 0
  )
  return(
    <p>Number of exercises {result}</p>
  )
}

const App = () => {
  const header = 'Half Stack application development'
  const course = [
    {part:'Fundamentals of React',  exercises:10},
    {part: 'Using props to pass data', exercises:7},
    {part: 'State of a component', exercises:14 }

  ]


  return (
    <div>
      <Header header={header}/>
      <Content course ={course}/>
      <Total course={course}/>
      
    </div>
  )
}

export default App
