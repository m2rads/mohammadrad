import { Player, Controls } from "@lottiefiles/react-lottie-player";

function DisplayLottie(prop: any) {
  return <Player autoplay loop src={prop.lottie}></Player>;
}

export default DisplayLottie;
