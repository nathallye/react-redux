# React Router
Biblioteaca para organizar a interface gráfica.

## Navegação com React Router

### Criação do projeto

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app navegacao
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

- Ou, podemos rodar o comando, para instalar o comando create-reatc-app globalmente na nossa máquina:

```
sudo npm install -g create-react-app
```

- E em seguida podemos usá-lo:

```
create-react-app navegacao
                 [nome-aplicação]
```

- Observação: A partir da versão 5.0.1, se você já instalou _c_reate-react-app_ globalmente via _npm install -g create-react-app_, recomendamos que você desinstale o pacote usando _npm uninstall -g create-react-app_ ou _yarn global remove create-react-app_ para garantir que npx sempre use a versão mais recente.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd navegacao
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start
```


### Instalando o pacote React Router

- Dentro da pasta do projeto, vamos rodar o comando para instalar o pacote react router:

```
sudo npm install react-router-dom
```

### Ajustes antes de começar a codar

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
node_modules
public
src
```

Vamos **excluir todos os arquivos da pasta src**.
Com isso, nossa aplicação vai parar, pois ele está procurando um arquivo index.js e esse arquivo não existe mais.

- E em seguida, vamos **recriar o arquivo index.js** com um conteúdo simples(apenas renderizar "App" no body da aplicação):

``` JavaScript
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  <h1>App</h1>,
  document.getElementById("root")
)
```

- Agora, vamos parar a aplicação

```
ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
npm start
```

### Estrutura do Projeto

- Vamos criar um conjunto de pastas para organizar nossa aplicação. 
Primeiramente, dentro de _src_ vamos criar uma pasta chamada _views_ e dentro dela o arquivo da view principal chamada _App.jsx_ e seu arquivo CSS. Em seguida, vamos criar a pasta _components_ e dentro dela a pasta _layout_.

- Dentro do arquivo _App.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional App:

``` JavaScript
import "./App.css"
import React from "react";

const App = props => {
  return (
    <div className="App">
      Componente App
    </div>
  )
}

export default App;
```

- Em seguida, dentro do arquivo _index.js_ vamos importar o componente App e referência-lo:

``` JavaScript
import ReactDOM from "react-dom";
import React from "react";
import App from "./views/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
```

- Dentro da pasta _layout_ vamos criar o componente _Menu.jsx_ e seu arquivo CSS. Dentro do arquivo _Menu.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional Menu:

``` JavaScript
import "./Menu.css"
import React from "react";

const Menu = props => {
  return (
    <aside className="Menu">
      Componente Menu
    </aside>
  )
}

export default Menu;
```

- Ainda dentro da pasta _layout_ vamos criar o componente _Content.jsx_. Dentro do arquivo _Content.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional Content:

``` JavaScript
import "./Content.css"
import React from "react";

const Content = props => {
  return (
    <main className="Content">
      Componente Content
    </main>
  )
}

export default Content;
```

- E para alguns exemplos no decorrer do curso, dentro de _views_ vamos criar uma pasta chamada _examples_. Dentro da pasta vamos criar os componentes _Home.jsx_ e _About_, com a seguinte estrutura:

``` JavaScript
import React from "react";

const Home = props => {
  return (
    <div className="Home">
      <h1>Início</h1>
      <p>Bem vindo!</p>
    </div>
  )
}

export default Home;
```

``` JavaScript
import React from "react";

const About = props => {
  return (
    <div className="About">
      <h1>Sobre</h1>
      <p>O nosso sistema foi criado...</p>
    </div>
  )
}

export default About;
```

### Aplicando estilo

- Primeiramente, no componente App, vamos referênciar os componentes Menu e Content:

``` JavaScript
import "./App.css"
import React from "react";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => {
  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  )
}

export default App;
```

- Agora, podemos começar a trabalhar com o layout da nossa aplicação. 

- Podemos criar um arquivo CSS para o _index_(e importar esse arquivo CSS dentro de _index.js_) para trabalharmos com estilos que não estão associados a nenhum componente. Por exemplo, zerar a margin do body da página:

``` CSS# React Router
Biblioteaca para organizar a interface gráfica.

## Navegação com React Router

### Criação do projeto

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app navegacao
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

- Ou, podemos rodar o comando, para instalar o comando create-reatc-app globalmente na nossa máquina:

```
sudo npm install -g create-react-app
```

- E em seguida podemos usá-lo:

```
create-react-app navegacao
                 [nome-aplicação]
```

- Observação: A partir da versão 5.0.1, se você já instalou _c_reate-react-app_ globalmente via _npm install -g create-react-app_, recomendamos que você desinstale o pacote usando _npm uninstall -g create-react-app_ ou _yarn global remove create-react-app_ para garantir que npx sempre use a versão mais recente.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd navegacao
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start
```


### Instalando o pacote React Router

- Dentro da pasta do projeto, vamos rodar o comando para instalar o pacote react router:

```
sudo npm install react-router-dom
```

### Ajustes antes de começar a codar

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
node_modules
public
src
```

Vamos **excluir todos os arquivos da pasta src**.
Com isso, nossa aplicação vai parar, pois ele está procurando um arquivo index.js e esse arquivo não existe mais.

- E em seguida, vamos **recriar o arquivo index.js** com um conteúdo simples(apenas renderizar "App" no body da aplicação):

``` JavaScript
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  <h1>App</h1>,
  document.getElementById("root")
)
```

- Agora, vamos parar a aplicação

```
ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
npm start
```

### Estrutura do Projeto

- Vamos criar um conjunto de pastas para organizar nossa aplicação. 
Primeiramente, dentro de _src_ vamos criar uma pasta chamada _views_ e dentro dela o arquivo da view principal chamada _App.jsx_ e seu arquivo CSS. Em seguida, vamos criar a pasta _components_ e dentro dela a pasta _layout_.

- Dentro do arquivo _App.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional App:

``` JavaScript
import "./App.css"
import React from "react";

const App = props => {
  return (
    <div className="App">
      Componente App
    </div>
  )
}

export default App;
```

- Em seguida, dentro do arquivo _index.js_ vamos importar o componente App e referência-lo:

``` JavaScript
import ReactDOM from "react-dom";
import React from "react";
import App from "./views/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
```

- Dentro da pasta _layout_ vamos criar o componente _Menu.jsx_ e seu arquivo CSS. Dentro do arquivo _Menu.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional Menu:

``` JavaScript
import "./Menu.css"
import React from "react";

const Menu = props => {
  return (
    <aside className="Menu">
      Componente Menu
    </aside>
  )
}

export default Menu;
```

- Ainda dentro da pasta _layout_ vamos criar o componente _Content.jsx_. Dentro do arquivo _Content.jsx_ vamos importar o react e seu arquivo CSS, e em seguida definir a extrutura inicial do componente funcional Content:

``` JavaScript
import "./Content.css"
import React from "react";

const Content = props => {
  return (
    <main className="Content">
      Componente Content
    </main>
  )
}

export default Content;
```

- E para alguns exemplos no decorrer do curso, dentro de _views_ vamos criar uma pasta chamada _examples_. Dentro da pasta vamos criar os componentes _Home.jsx_ e _About_, com a seguinte estrutura:

``` JavaScript
import React from "react";

const Home = props => {
  return (
    <div className="Home">
      <h1>Início</h1>
      <p>Bem vindo!</p>
    </div>
  )
}

export default Home;
```

``` JavaScript
import React from "react";

const About = props => {
  return (
    <div className="About">
      <h1>Sobre</h1>
      <p>O nosso sistema foi criado...</p>
    </div>
  )
}

export default About;
```

### Aplicando estilo


- Primeiramente, no componente App, vamos referênciar os componentes Menu e Content:

``` JavaScript
import "./App.css"
import React from "react";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => {
  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  )
}

export default App;
```

- Agora, podemos começar a trabalhar com o layout da nossa aplicação. 

#### index.css

- Podemos criar um arquivo CSS para o _index_(e importar esse arquivo CSS dentro de _index.js_) para trabalharmos com estilos que não estão associados a nenhum componente. Por exemplo, zerar a margin do body da página:

``` CSS
body {
  margin: 0;
}
```

#### App.css

- Dentro de _App.css_ vamos começar a aplicação de alguns propriedades. Primeiramente, vamos definir o _flex box_:

``` CSS
.App {
  display: flex;
}
```

- Em seguida, vamos definir uma altura/_height_, para esse componente ocupar a tela inteira:

``` CSS
.App {
  display: flex;

  height: 100vh;

  /* background para verificarmos melhor como a height/altura em vh funciona */
  /* background-color: blue; */ 
}
```

#### Menu.css

- Antes de alterarmos o estilo do componente Menu, dentro de _Menu.jsx_ vamos criar uma tag _nav_, dentro dessa tag uma lista não ordenada(_ul_) e dentro dessa lista vamos inserir _li_'s para os itens:

``` JavaScript
import "./Menu.css"
import React from "react";

const Menu = props => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu;
```

- Depois de criada a lista de navegação, podemos alterar o estilo do componente Menu. 
Primeiramente, vamos colocar o _display_ como _flex_. Como só temos um único componente(componente nav) não vai fazer diferença colocar o flex direction em row ou column:

``` CSS
.Menu {
  display: flex;
}
```

- Além disso, vamos inserir a propriedade _flex-basis_, ou seja, a largura. Poderiamos colocar a _width_(largura), mas o flex-basis também serve para isso:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;
}
```

- Vamos definir um _background-color_ para esse menu de navegação:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}
```

- Em seguida, vamos remover o estilo de lista(as "bolinhas" ao lado esquerdo) da _ul_ e zerar o _padding_ para "colar" a lista no lado esquerdo da dela:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu ul {
  list-style: none;

  padding: 0;
}
```

- Obs.: Alguns frameworks tem o que chamamos de "CSS escopado", o React não é o caso, pois mesmo se definirmos propriedades relacionados ao componente App dentro do arquivo CSS de Menu vai ser aplicado. Por isso, devemos ter cuidado, e especificar corretamente os componentes que queremos aplicar determinada propriedade.

- Agora, vamos colocar os list items/_li_ em _display flex_:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}
```

- E vamos mexer mais especificamente no link/_a_ que está dentro do list items/_li_. Vamos aplicar o _text-decoration_ _none_ para remover o estilo de link:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}

.Menu li a {
  text-decoration: none;
}
```

- Vamos aumentar o tamanho da fonte/_font-size_ e alterar a cor/_color_ do texto para branco:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}

.Menu li a {
  text-decoration: none;

  font-size: 1.5rem;
  color: #fff;
}
```

- Em seguida, vamos inserir um _margin-bottom_(associado ao link) para cada item ter uma margin de espaçamento entre o outro. E um _padding_ em todas as direções(associado ao link):

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}

.Menu li a {
  text-decoration: none;

  font-size: 1.5rem;
  color: #fff;

  margin-bottom: 10px;
  padding: 10px;
}
```

- Agora, para que esse elemento _a_ possa ocupar a sua linha inteira e o link funcione em toda essa área(não necessáriamente precisamos clicar sobre o nome) também, vamos aplicar o _flex 1_ no link/_a_ e no _nav_:

``` CSS
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu nav {
  flex: 1;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}

.Menu li a {
  text-decoration: none;

  font-size: 1.5rem;
  color: #fff;

  flex: 1;
  margin-bottom: 10px;
  padding: 10px;
}
```

- O último ajuste visual que vamos fazer no Menu é inserir um efeito do tipo _hover_, para quando passarmos o cursor sobre o link ele mudar de cor:

``` CSS 
.Menu {
  display: flex;
  flex-basis: 250px;

  background-color: palevioletred;
}

.Menu nav {
  flex: 1;
}

.Menu ul {
  list-style: none;

  padding: 0;
}

.Menu li {
  display: flex;
}

.Menu li a {
  text-decoration: none;

  font-size: 1.5rem;
  color: #fff;

  flex: 1;
  margin-bottom: 10px;
  padding: 10px;
}

.Menu li a:hover {
  background: #00000030;
}
```

#### Content.css

- Incialmente, vamos definir o _display flex_:

``` CSS
.Content {
  display: flex;
}
```

- E definir o _flex 1_ para que o elemento main preencha todo o espaço disponível:

``` CSS
.Content {
  display: flex;
  flex: 1;
}
```

- Em seguida, vamos colocar um _background-color_ para ser um cinza "quase" branco para a tela ficar um pouco menos brilhosa:

``` CSS
.Content {
  display: flex;
  flex: 1;

  background-color: #ece9e9;
}
```

- O componente _main_ tá "grudado" na lateral esquerda e em cima da página. Para "descrudar" todo o conteúdo do _main_, vamos aplicar um _padding_ em todas as direções:

``` CSS
.Content {
  display: flex;
  flex: 1;

  padding: 30px;

  background-color: #ece9e9;
}
```

### Navegação simples

- Vamos começar a configuração do nosso projeto para usar o React Router. 
Primeiramente, vamos importar o pacote _BrowserRouter_ do _react-router-dom_ e envolver os componentes da aplicação/_App_ com a tag _Router_(_BrowserRouter_ referenciado com _Router_):

``` JavaScript
import "./App.css"
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => {
  return (
    <div className="App">
      <Router>
        <Menu /> {/*Na documentação do React Router diz que precisamos envolver os links com a tag Router*/}
        <Content />
      </Router>
    </div>
  )
}

export default App;
```

- No componente _Content_, vamos importar importar os pacotes _Switch_ e _Route_ do _react-router-dom_ e dentro da tag _main_ onde vai ficar o conteúdo, seguindo a documentação temos que usar a tag _Switch_ e dentro dele a tag _Route_:

``` JavaScript
import "./Content.css"
import React from "react";
import { Switch, Route } from "react-router-dom";

const Content = props => {
  return (
    <main className="Content">
      <Switch>
        <Route></Route>
      </Switch>
    </main>
  )
}

export default Content;
```

- Se aprofundando na documentação, podemos notar que se usa dentro de _Route_ o atributo _path_ com a url que queremos para determinado componente e dentro da tag _Route_ vamos colocar de fato o componente que queremos renderizar quando essa url for chamada:

``` JavaScript
import "./Content.css"
import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../views/examples/About";

const Content = props => {
  return (
    <main className="Content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  )
}

export default Content;
```

- **OBS.:** No entanto, a documentação trata da versão 5 do _react-router-dom_. A partir da versão 6, o react-router-dom substituiu “Switch” por “Routes”, ocasionando o erro: _Switch' (imported as 'Switch') was not found in 'react-router-dom'_. 

- Portanto, vamos atualizar a instrução de importação e substituir “Switch” por “Routes” e o “componente” por “element”:

``` JavaScript
import "./Content.css"
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../../views/examples/About";

const Content = props => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default Content;
```

- Vamos fazer o mesmo para a rota Home:

``` JavaScript
import "./Content.css"
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../../views/examples/About";
import About from "../../views/examples/Home";

const Content = props => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  )
}

export default Content;
```

- Também seguindo a documentação, vamos substituir o elemento link/_a_ pela tag _Link_ do react-router-dom. Dentro do nosso componente que contém os links(Menu), vamos importar o pacote _Link_ do _react-router-dom_ e fazer essa substituição:

``` JavaScript
import "./Menu.css"
import React from "react";
import { Link } from "react-router-dom"

const Menu = props => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link> {/*to substitui o href*/}
            {/* <a href="/">Início</a> */}
          </li>
          <li>
            <Link to="/about">Sobre</Link>
            {/* <a href="/about">Sobre</a> */}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu;
```

- Obs.: Não precisamos criar uma classe para esse componente e substituir a referência ao elemento _a_, pois por debaixo dos panos esse componente _Link_ gera uma tag _a_.

### Navegação com parâmetro

