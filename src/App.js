import TransitionExample from "./Components/TransitionExample/TransitionExample";
import TransitionGroupExample from "./Components/TransitionGroupExample/TransitionGroupExample";
import ReactAnimationsExample from "./Components/ReactAnimationsExample/ReactAnimationsExample";
import ReactReveal from "./Components/ReactReveal/ReactReveal";
import ReactReavealTodo from "./Components/ReactReveal/ReactReavealTodo";
import ReactSpring from "./Components/ReactSpring/ReactSpring";

function App() {
  return (
    <div className="App">
     <TransitionExample/>
     <ReactSpring/>
     <ReactAnimationsExample/>
     <ReactReveal/>
     <ReactReavealTodo/>
     <TransitionGroupExample/>
    </div>
  );
}

export default App;
