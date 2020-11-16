import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Score from "./components/Score";
import data from "./question.json";

function App() {
  if (!sessionStorage.getItem("score")) {
    sessionStorage.setItem("score", 0);
  } else {
    //alert(sessionStorage.getItem("score"));
  }
  return (
    <div className="App">
      {/* <Header /> */}
      <Score />
      <MainLayout data={data.questions} />
    </div>
  );
}

export default App;
