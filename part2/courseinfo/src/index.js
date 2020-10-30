import ReactDOM from 'react-dom'

const Header = (props) => (<h1>{props.course.name}</h1>)
const Part = (props) => (<p>{props.name} {props.exercises}</p>)
const Content = (props) => props.parts.map(Part)
const Total = (props) => {
    let sum = 0
    props.exercises.forEach(it => sum += it)
    return (<p>Number of exercises {sum}</p>)
}

const Course = ({course}) => (
    <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total exercises={course.parts.map(it => it.exercises)}/>
    </div>
)

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>

}

ReactDOM.render(<App/>, document.getElementById('root'))