import React from 'react'
import Part from "./Part";

const Content = ({parts}) => parts.map(it => <Part part={it}/>)

export default Content