import ReactDOM from 'react-dom'

const Header = (props) => (<h1>{props.course.name}</h1>)
const Part = (props) => (<p>{props.name} {props.exercises}</p>)
const Content = (props) => props.parts.map(Part)
const Total = (props) => {
    let sum = 0
    props.exercises.forEach(it => sum += it)
    return (<p>Number of exercises {sum}</p>)
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
            <Total exercises={course.parts.map(it => it.exercises)}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))