import { MarkdownWrapper, Markdown } from "submarkdownntn";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <MarkdownWrapper>
        <Markdown></Markdown>
      </MarkdownWrapper>
    </div>
  );
}

export default App;
