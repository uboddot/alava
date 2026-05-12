import { LogoSlice } from "./LogoSlice";
import './Logo.css';
export { Logo };



function Logo() {

    const dataDummy = [1,2,3,4,5,6];
    const degree = 360/dataDummy.length;
    
    
    return (
        <div className="logo">
            {dataDummy.map((_, i) => (
                <LogoSlice key={i} degree={degree} offsetDegree={i * degree} />
            ))}
        </div>
    )
}
