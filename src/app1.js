import './App.css';
import Trial from'./Trial';

function App() {
    const [App, setApp] = useState();
  return (
    <input
      value={App}
      onChange={(e) => {
        setApp(e.target.value);
        console.log(App);
      }}
    />
  );
}

export default App;
