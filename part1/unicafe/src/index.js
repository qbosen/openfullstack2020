import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => (<button onClick={handler}>{text}</button>)
const Statistic = ({key, value}) => (<span>{key} {value}<br/></span>)


const Statistics = ({statistics}) => {
    if (statistics.find(it => it.key === 'all').value === 0)
        return (<div>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </div>)
    return (
        <div>
            <h1>statistics</h1>
            {statistics.map(Statistic)}
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all * 100).toString() + " %"

    const statistics = [
        {key: 'good', value: good},
        {key: 'neutral', value: neutral},
        {key: 'bad', value: bad},
        {key: 'all', value: all},
        {key: 'average', value: average},
        {key: 'positive', value: positive}
    ]
    return (
        <div>
            <h1>give feedback</h1>
            <Button handler={() => setGood(good + 1)} text="good"/>
            <Button handler={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button handler={() => setBad(bad + 1)} text="bad"/>

            <Statistics statistics={statistics}/>

        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)