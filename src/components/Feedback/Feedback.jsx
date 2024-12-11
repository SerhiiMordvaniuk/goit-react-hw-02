import s from './Feedback.module.css'


const Feedback = ({ good, neutral, bad, totalFeedback }) => {
    

    return (
        <>
            <div>{ !totalFeedback ? `No feedback yet` : `` }</div>
            {totalFeedback > 0 && (
                <ul className={s.list}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: { totalFeedback}</li>
                    <li>{ Math.round((good / totalFeedback) * 100)}% </li>
                </ul>
            )}
        </>
    )
}


export default Feedback


