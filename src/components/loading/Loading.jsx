import Loader from "react-loader-spinner";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader">
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      </div>
    </div>
  );
};

export default Loading;
