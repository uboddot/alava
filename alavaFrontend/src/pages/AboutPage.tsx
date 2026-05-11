import './AboutPage.css';
import {Logo} from '../elements/logo/Logo';

export {About};

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <svg
                className="about-page__title svg-draw-when-loading"
                width="935"
                height="236"
                viewBox="0 0 935 236"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Alava title artwork"
                role="img"
            >
                <path
                    className="svg-draw-when-loading"
                    pathLength="1"
                    d="M137.5 164C142 150.5 140.8 123.5 100 123.5C59.2 123.5 58 150.5 62.5 164C56 180.5 54.4 213.5 100 213.5C145.6 213.5 144 180.5 137.5 164ZM137.5 164C148.3 212 163 217 169 213.5M86.5 56.5C127.3 84.9 146.5 88 151 86M233 22C249 47.3333 278.9 121.1 270.5 213.5C271.5 197 278.9 164 300.5 164M347 2.5V22M386 155C366.5 188 339.2 242.9 386 198.5C432.8 154.1 472.5 49.3333 486.5 2.5C476.667 40.3333 469.5 128 519.5 176C569.5 224 594 161 600 123.5C597.5 144 600.3 185.3 631.5 186.5C662.7 187.7 677.5 139 681 114.5C673 134.5 663.3 176.9 688.5 186.5C720 198.5 780 152.5 849 2.5C834.167 51.3333 828.1 156.5 922.5 186.5C1016.9 216.5 348.5 230 2.5 233M413 114.5C435.167 119.5 489.3 126.5 528.5 114.5M778.5 114.5C784.667 120.5 818.5 128.9 904.5 114.5"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
            <Logo />
        </div>
    )
}