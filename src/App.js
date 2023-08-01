import logo from "./img/LogoF.png";
import './App.css';
import MenuButton from './components/MenuButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cabecalho" >
          <div className="logo-div">
            <img src={logo} className="App-logo" alt="logo" title="logo do canal" />
          </div>
          <div className="titulo-cabecalho">
            <p className="nome-titulo">
              FUTEBA
            </p>
            <p className="nome-descricao">
              VEJA AQUI AO VIVO E PRIMEIRO!!
            </p>
          </div>
        </div>
      </header>
      <div className="conteudo">
        <div className="menu">
          <button className="menu-button">
            <p>
              Próxima rodada
            </p>
          </button>
          <button className="menu-button">
            <p>
              Tabela atualizada de classificação
            </p>
          </button>
          <button className="menu-button">
            <p>
              Gols
            </p>
          </button>
        </div>
        <div className="BR">
          <p>
            Campeonato Brasileiro Serie A de 2023:
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
