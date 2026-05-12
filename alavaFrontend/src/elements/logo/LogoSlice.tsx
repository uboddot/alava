import './Logo.css';

export {LogoSlice};

function LogoSlice({degree = 30, offsetDegree = 0}: Readonly<{degree?: number, offsetDegree?: number}>) {
    const centerX = 150;
    const centerY = 160;
    const radius = 100;
    const baseStartDegree = 90;

    // `degree` controls slice size; `offsetDegree` rotates where the slice starts.
    const normalizedDegree = Math.max(0, Math.min(359.999, degree));
    const normalizedOffset = ((offsetDegree % 360) + 360) % 360;

    const startAngle = (baseStartDegree - normalizedOffset) * Math.PI / 180;
    const endAngle = (baseStartDegree - normalizedOffset - normalizedDegree) * Math.PI / 180;

    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY - radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY - radius * Math.sin(endAngle);

    const largeArcFlag = normalizedDegree > 180 ? 1 : 0;

    return (
        <div className="logoSlice">
            <svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Background --> */}
                <rect width="100%" height="100%" fill="transparent"/>

                    {/* <!-- Two lines where the slice starts at `offsetDegree` and spans `degree` --> */}
                    <line x1={centerX} y1={centerY} x2={startX} y2={startY}
                        stroke="#000000" strokeWidth="2"/>

                <line x1={centerX} y1={centerY} x2={endX} y2={endY}
                        stroke="#000000" strokeWidth="2"/>

                {/* <!-- Filled interior area between the two lines --> */}
                    <path d={`M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                    fill="#F4A261"
                    fillOpacity="0.3"/>

                {/* <!-- Arc connecting the lines --> */}
                    <path d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"/>

            </svg>
        </div>
    )
};