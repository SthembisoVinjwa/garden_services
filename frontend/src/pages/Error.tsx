import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="errorWrapper">
      <div className="errorContent">
        <h1>Error 404: Page not found</h1>
        <button
          className="mainButton secondaryButton"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
