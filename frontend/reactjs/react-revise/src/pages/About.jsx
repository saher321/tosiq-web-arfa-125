import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/useData.js'

const About = () => {
    const profile = useData(state => state.profile)
  return (
    <WebLayout>
        About, <a href={profile}>Facebook</a>
    </WebLayout>
  )
}

export default About