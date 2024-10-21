import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import CenterBar from "./CenterBar";
import "./Styles/Index.css";


export default function Studio() {
  return (
    <div className="Clipify-Main-Container">
      <div className="Clipify-Container">
        <LeftBar />
        <CenterBar/>
        <RightBar />
      </div>
    </div>
  );
}

