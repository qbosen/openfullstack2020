import ReactDOM from 'react-dom'

const Header = (props) => (<h1>{props.course}</h1>)
const Content = (props) => {
    let func = (prop) => <p>{prop.part} {prop.exercises}</p>
    return props.contents.map(func)
}
const Total = (props) => {
    let sum = 0
    props.exercises.forEach(it => sum += it)
    return (<p>Number of exercises {sum}</p>)
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const contents = [
        {
            part: part1,
            exercises: exercises1
        },
        {
            part: part2,
            exercises: exercises2
        },
        {
            part: part3,
            exercises: exercises3
        }
    ]
    const exercises = [exercises1, exercises2, exercises3]

    return (
        <div>
            <Header course={course}/>
            <Content contents={contents}/>
            <Total exercises={exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))