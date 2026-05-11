export {Schnitz};

function Schnitz() {
    return (
        <svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Background --> */}
            <rect width="100%" height="100%" fill="white"/>

            {/* <!-- Center point --> */}
            <circle cx="150" cy="160" r="3" fill="black"/>

            {/* <!-- Two lines forming a 30° angle --> */}
            <line x1="150" y1="160" x2="150" y2="60"
                    stroke="#E76F51" stroke-width="4"/>

            <line x1="150" y1="160" x2="236.6" y2="110"
                    stroke="#E76F51" stroke-width="4"/>

            {/* <!-- Arc connecting the lines --> */}
            <path d="
                    M 150 110
                    A 50 50 0 0 1 193.3 135
                "
                fill="none"
                stroke="#F4A261"
                stroke-width="4"/>
        </svg>
    )
};