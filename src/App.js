import logo from "./img/logok.png";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" title = "logo do canal" />
        <p>
        FUTEBA
        </p>
        <p>
        VEJA AQUI AO VIVO E PRIMEIRO!!
        </p>
      </header>
      <div>
          <div className = "BR">
            <p>
            Campeonato Brasileiro Serie A de 2023:
            </p>
              

            <div className = "topicos">
              <button className="rodada">
              <p>
              Proxima rodada
              </p> 
              </button>
            </div>
            <button className="tabela">
              <p>
              Tabela atualizada de classificação
              </p> 
              </button>
              <button className="gols">
              <p>
              Gols
              </p> 
              </button>
          </div>
        </div>
    </div>
  );
}

export default App;
