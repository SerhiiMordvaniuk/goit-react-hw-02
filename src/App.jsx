import './App.css'
import Description from './components/Title/Description';
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback';
import { useEffect, useState } from 'react';

function App() {

  const [feedbacks, setFeedback] = useState(() => {
    const localFeedbacks = window.localStorage.getItem("feedbacks")

    if (localFeedbacks !== null) {
      return JSON.parse(localFeedbacks)
    }
    return { good: 0, neutral: 0, bad: 0 }
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;


  const updateFeedback = (feedbackType) => {
  
    setFeedback({
      ...feedbacks,
    [feedbackType]: feedbacks [feedbackType] + 1
    })
    console.log(feedbacks);
    console.log(JSON.stringify(feedbacks));
    
    
  }

  const clearFeedback  = ( ) => {
    setFeedback({ ...feedbacks, neutral: 0, good: 0, bad: 0 })
  }

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
  })

  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        totalFeedback={totalFeedback}
        clear={clearFeedback}
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
