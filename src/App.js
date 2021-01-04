import TransitionExample from "./Components/TransitionExample/TransitionExample";
import TransitionGroupExample from "./Components/TransitionGroupExample/TransitionGroupExample";
import ReactAnimationsExample from "./Components/ReactAnimationsExample/ReactAnimationsExample";
import ReactReveal from "./Components/ReactReveal/ReactReveal";
import ReactReavealTodo from "./Components/ReactReveal/ReactReavealTodo";

function App() {
  return (
    <div className="App">
     <TransitionExample/>
     <TransitionGroupExample/>
     <ReactAnimationsExample/>
     <ReactReveal/>
     <ReactReavealTodo/>
    </div>
  );
}

export default App;
