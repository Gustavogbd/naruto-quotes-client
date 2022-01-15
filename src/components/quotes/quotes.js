export const Quotes = ({ quote, speaker }) => {
    return (
        <div>
            <p>{quote}</p>
            <p>- {speaker}</p>
            <button>Quote no jutsu</button>
        </div>
    )
}