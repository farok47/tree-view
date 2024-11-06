import { menus } from "./Sidemenu";
import Treeview from "./Treeview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Treeview menus={menus} />
      </header>
    </div>
  );
}

export default App;
