import s from './Feedback.module.css'


const Feedback = ({ good, neutral, bad, totalFeedback }) => {
    

    return (
        <>
            <p className={s.feedback}>{ !totalFeedback ? `No feedback yet` : `` }</p>
            {totalFeedback > 0 && (
                <ul className={s.list}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: { totalFeedback}</li>
                    <li>Positive: { Math.round((good / totalFeedback) * 100)}% </li>
                </ul>
            )}
        </>
    )
}


export default Feedback


