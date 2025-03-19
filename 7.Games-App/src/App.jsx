import "./App.css";
import Header from "./Header";
import { games } from "./Data";
import Game from "./components/Game";
import "./css/Game.css";

function App() {
  return (
    <div>
      <Header />

      <div className="game-main">
        {games?.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
