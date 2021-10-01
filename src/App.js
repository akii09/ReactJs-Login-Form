import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className=" ">
      <main>
        <div className="container-full">
          <section>
            <Form />
            <Sidebar />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
