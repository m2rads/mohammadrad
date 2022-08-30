import DisplayLottie from "../containers/DisplayLottie";
import pokeyNotFound from "../assets/pokeyNotFound.json";

function PageNotFound() {
  return (
    <div
      style={{ margin: "0 auto", width: "70%", marginTop: "1em" }}
      className="noteFound"
    >
      <DisplayLottie lottie={pokeyNotFound} />
    </div>
  );
}

export default PageNotFound;
