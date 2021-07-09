import './App.css';
import Inicio from './components/Inicio'
import {BrowserRouter, Route} from "react-router-dom"

function App() {
return (
<BrowserRouter>
 <div className="App">
    <Route path="/" exact={true} component={Inicio} />

 </div>
</BrowserRouter>
)
}

export default App;
