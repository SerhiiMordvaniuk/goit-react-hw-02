import s from "./Options.module.css"


const Options = () => {
    return (
        <div className={s.options}>
            <button className={s.button}>Good</button>
            <button className={s.button}>Neutral</button>
            <button className={s.button}>Bad</button>
            <button className={s.button}>Reset</button>
        </div>
    )
}

export default Options