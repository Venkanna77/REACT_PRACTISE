import "./styles.css";
import { Tooltip } from "react-tippy";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Tooltip title="COOL">
        <button>Click Here</button>
      </Tooltip>
    </div>
  );
}
