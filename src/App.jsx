import './App.css'
import Description from './components/Title/Description';
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

function App() {

  const [feedbacks, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;


  const updateFeedback = (feedbackType) => {

    setFeedback({
      ...feedbacks,
    [feedbackType]: feedbacks [feedbackType] + 1
    })
  }


  const clear  = ( ) => {
    setFeedback({...feedbacks, neutral: 0, good:0, bad:0})
  }


  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        totalFeedback={totalFeedback}
        clear={clear}
      />
      <Feedback
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        totalFeedback={totalFeedback}
      />
    </>
  )
}

export default App
