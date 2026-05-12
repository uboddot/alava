import { useLottie } from "lottie-react";
import testLottie from "../assets/testLottie.json";

export { TestLottie };

function TestLottie() {
    const options = {
        animationData: testLottie,
        loop: true
    };
    const { View } = useLottie(options);

    return <>{View}</>;
}
