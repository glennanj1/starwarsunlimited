// components/CardComponent.js
// components/CardComponent.js
function CardComponent({ card, onIncrement, onDecrement, count, onCheck, isChecked }) {
    return (
        <div className="flex items-center justify-start gap-4 w-full max-w-4xl">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onCheck}
                className="w-6 h-6"
            />
            <div className="flex-grow bg-cover bg-center h-24 p-4" style={{ backgroundImage: `url(${card.FrontArt})` }}>
                {/* Optional: Place for card name or other info inside the image */}
                <h1 className="text-center text-2xl font-bold font-star-wars text-shadow">
                    {card.Name}
                </h1>


            </div>
            <div className="flex items-center">
                <button onClick={onDecrement} className="bg-black bg-opacity-70 text-white p-1 mx-1">-</button>
                <span className="text-white bg-black bg-opacity-70 p-1 mx-2">{count}</span>
                <button onClick={onIncrement} className="bg-black bg-opacity-70 text-white p-1 mx-1">+</button>
            </div>
        </div>
    );
}

export default CardComponent;
