import { useLottie } from "lottie-react";
import testLottie from "../assets/testLottie.json";
import testLottie2 from "../assets/testLottie2.json";

export { TestLottie };

function TestLottie() {
    const options = {
        animationData: testLottie2,
        loop: true
    };
    const { View } = useLottie(options);

    return <>{View}</>;
}
