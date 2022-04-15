# React 

React é um framework single page application(aplicação de única página).

## Criando o primeiro projeto React

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app fundamentos-react
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
create-react-app fundamentos-react
                 [nome-aplicação]
```

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd fundamentos-react
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start
```

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
node_modules
public
src
```

Vamos **excluir todos os arquivos da pasta src**.
Com isso, nossa aplicação vai parar, pois ele está procurando um arquivo index.js e esse arquivo não existe mais.
Vamos **recriar o arquivo index.js** vazio.

- Agora, vamos parar a aplicação

```
ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
npm start
```

## Exibindo uma string na tela

Precisamos que o index.js interaja com uma biblioteca chamada React DOM - Document Object Model(Modelo de Objeto de Documentos) é que exatamente a extrutura da nossa página.
- Para isso vamos importar o React DOM no nosso arquivo index.js:

``` JavaScript
import ReactDOM from "react-dom";
      [nome_variavel] [nome_módulo]
```

A partir do React DOM vamos renderizar "algo" na tela. Então vamos chamá-lo junto ao método render. Esse método recebe dois parâmetros, o primeiro é o que queremos renderizar na tela e o segundo é o elemento o qual queremos inserir esse conteúdo.

``` JavaScript
const elDivBody = document.getElementById("root");
ReactDOM.render("Olá React!", elDivBody);
```

## Conhecendo o JSX

É uma extensão de sintaxe para JavaScript. É recomendado usar JSX com o React para descrever como a UI deveria parecer. 
JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.
Nada mais é que código JavaScript com "cara" de HTML.

- Para utilizarmos o JSX é necessário realizar o import do React no arquivo:

```
import React from 'react'
```

- Podemos agora, alterar o código da exibição da string, e envolvelá dinamicamente com uma div, usando código JavaScript com o JSX:

``` JavaScript
const elDivBody = document.getElementById("root");
ReactDOM.render(<div>Olá React!</div>, elDivBody);
```

Outras possibilidades:

``` JavaScript
const elDivBody = document.getElementById("root");
const tag = <strong>Olá React!</strong>

ReactDOM.render(
  <div>
    { tag }
  </div>,
  elDivBody
);
```

## Carregando CSS

Na **pasta src, vamos criar o arquivo index.css**.

- Vamos importar(import relative) esse arquivo dentro de index.js:

``` JavaScript
import "./index.css"; // não atribuimos um nome a esse import, pois não vamos acessar nada(nenhum componente) desse arquivo, só queremos que nossa aplicação seja capaz de carregá-lo
```

## Primeiro componente

- Vamos criar uma pasta dentro de **src**, chamada **components**.
Dentro de **components** vamos criar uma pasta **basics**, para deixá-los bem organizados.

- Dentro da pasta **basics** vamos criar o primeiro arquivo, chamado **First.js**. Por padrão, todos os componentes são criados com a **primeira letra maiúscula**.

- No componente First.js, vamos criar uma função que não recebe nenhum parâmetro de entrada e retorna uma string:

``` JavaScript
function Primeiro() {
  return "Primeiro Componente";
}
```

- Precisamos que essa função fique disponível fora desse arquivo, para isso vamos exportar ela:

``` JavaScript
export default function Primeiro() {
  return "Primeiro Componente";
}
```

- No arquivo index.js vamos importar essa Função:

``` JavaScript
import Primeiro from "./components/basics/First";
```

- E referenciar esse componente para que ele seja renderizado na tela:

``` JavaScript
const elDivBody = document.getElementById("root");

ReactDOM.render(
  <div>
    <Primeiro/> // renderizando componente
  </div>,
  elDivBody
);
```

- Usando JSX dentro do componete. 
Primeiro, é necessário que seja feita a importação do React dentro do componente para o JSX seja interpretado:

``` JavaScript
import React from "react";

export default function Primeiro() {
  return (
    <div>
      <h2>Primeiro componente com JSX</h2>
    </div>
  );
}
```

Esses componentes são os chamados Componentes Funcionais, que são componentes baseados em função.
Também existe os componentes baseados em classe.

## Componente com propriedade

- Dentro da pasta **basics** vamos criar um componente chamado **WithParams(com parâmetros)** com a extensão jsx. Não há nenhuma diferença em ser .js ou .jsx para o React, serve apenas para a IDE ajudar a completar o código jsx.

- Vamos mudar a extensão do componente First para .jsx também, para padronizar.

- No componente WithParams vamos criar uma função com alguns elementos(mas antes vamos importar o React para evitar erros):

``` JavaScript
import React from "react";

export default function ComParametros() {
  return (
    <div>
      <h2>titulo</h2>
      <h3>subtitulo</h3>
    </div>
  );
}
```

Nota-se que o retorno dessa função/componente espera receber o titulo e o subtitulo como parâmetro. 

- Para isso, nossa função vai receber esses parâmetros, que por padrão no React são chamados de **props**: 

``` JavaScript
import React from "react";

export default function ComParametros(props) {
  return (
    <div>
      <h2>{ props.titulo }</h2>
      <h3>{ props.subtitulo }</h3> // chaves "{}" para interpretar o código, não somente renderizar
    </div>
  );
}
```

**Obs.:** Props são apenas leitura. Não conseguimos alterar uma propriedade. Se for necessário algum tratamento antes da renderização, podemos colocar em uma constante.

- E no arquivo index.js vamos importar, renderizar esse componente e passar as props:

``` JavaScript
import ComParametros from "./components/basics/WithParams";

const elDivBody = document.getElementById("root");

ReactDOM.render(
  <div>
    <ComParametros
      titulo="Curso React"
      subtitulo="Aula Fundamentos do React"/>
  </div>,
  elDivBody
);
```

Se dermos o console.log em props, podemos notar que estamos recebemos um objeto, portando para acessar a propriedade é necessário utilizar props.[nome_propriedade]:

``` JavaScript
console.log(props);

// Retorno =>
{titulo: 'Curso React', subtitulo: 'Aula Fundamentos do React'}
```

## React Fragment

Quando não envolvemos o código JSX com algum elemento é retornado o segunte erro: Adjacent JSX elements must be wrapped in an enclosing tag(Elementos JSX adjacentes devem ser agrupados em uma tag delimitadora).

- Como exemplo dentro de components/basics vamos criar um componente chamado Fragment:

``` JavaScript
import React from "react";

export default function Fragmento(props) {
  return (
    <div>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </div>
  );
}
```

Podemos notar que o conteúdo JSX está sendo delimitado por um elemento do tipo div. 

- Caso não queiramos que esse elemento seja colocado dentro de div, podemos usar o React Fragment:

``` JavaScript
import React from "react";

export default function Fragmento(props) {
  return (
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
  );
}
```

- Ou sua sintaxe reduzida:

``` JavaScript
import React from "react";

export default function Fragmento(props) {
  return (
    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </>
  );
}
```

Com a sintaxe reduzida, só não é possível utilizar atributos extras.

## Componente App

- Na pasta **src** vamos criar um componente chamado **App** que vai **representar a nossa aplicação**.

- Vamos usar esse componente para enxugar os códigos JSX de index.js(vamos trazer junto todos os imports):

``` JavaScript
import React from "react";

import Primeiro from "./components/basics/First";
import ComParametros from "./components/basics/WithParams";
import Fragmento from "./components/basics/Fragment";

export default function App(props) {
  return (
    <div>
      <Primeiro/>
      <ComParametros
        titulo="Situação do aluno:"
        aluno="João"
        nota={9.2}
      />
      <ComParametros
        titulo="Situação da aluna:"
        aluno="Maria"
        nota={5.8}
      />
      <Fragmento/>
    </div>
  );
}
```

- No arquivo index.js, vamos importar e renderizar App:

``` JavaScript
import App from "./App";

const elDivBody = document.getElementById("root");

ReactDOM.render(
  <App/>,
  elDivBody
);
```

A partir de agora não vamos mais mexer em index.js, vamos utilizar dessa referência a App.jsx.

- Forma mais reduzida de declarar funções é usando **arrow function**:

``` JavaScript
export default (props) => {
  return (
    <div>
      <Primeiro/>
      <ComParametros
        titulo="Situação do aluno:"
        aluno="João"
        nota={9.2}
      />
      <ComParametros
        titulo="Situação da aluna:"
        aluno="Maria"
        nota={5.8}
      />
      <Fragmento/>
    </div>
  );
}
```

- Quando a função tem apenas **um parâmetro**, podemos **tirar os parênteses**:

``` JavaScript
export default props => {
  return (
    <div>
      <Primeiro/>
      <ComParametros
        titulo="Situação do aluno:"
        aluno="João"
        nota={9.2}
      />
      <ComParametros
        titulo="Situação da aluna:"
        aluno="Maria"
        nota={5.8}
      />
      <Fragmento/>
    </div>
  );
}
```

- Quando a função não tem **nenhum parâmetro**, podemos **usar apenas os parênteses vazio ()**:

``` JavaScript
export default () => {
  return (
    <div>
      <Primeiro/>
      <ComParametros
        titulo="Situação do aluno:"
        aluno="João"
        nota={9.2}
      />
      <ComParametros
        titulo="Situação da aluna:"
        aluno="Maria"
        nota={5.8}
      />
      <Fragmento/>
    </div>
  );
}
```

- Quando a função tem apenas **um parâmetro** e não vamos usá-la, podemos **usar apenas o _**:

``` JavaScript
export default _ => {
  return (
    <div>
      <Primeiro/>
      <ComParametros
        titulo="Situação do aluno:"
        aluno="João"
        nota={9.2}
      />
      <ComParametros
        titulo="Situação da aluna:"
        aluno="Maria"
        nota={5.8}
      />
      <Fragmento/>
    </div>
  );
}
```

- Podemos tirar o corpo da arrow function e de forma implicita tudo que está dentro da função vai ser retornado, portanto, não é necessário utilizar a palavra reservada return:

``` JavaScript
export default () => (
  <div>
    <Primeiro/>
    <ComParametros
      titulo="Situação do aluno:"
      aluno="João"
      nota={9.2}
    />
    <ComParametros
      titulo="Situação da aluna:"
      aluno="Maria"
      nota={5.8}
    />
    <Fragmento/>
  </div>
);
```

## Class com JSX

Diferente do html que para atribuir uma classe css para um elemento especificamos class="", no jsx como "class" é uma palavra reservada do JavaScript, usa-se className="".

``` JavaScript
export default function Card(props) {
  return (
    <div className="Card">
      <div>{props.titulo}</div>
      <div>Conteúdo</div>
    </div>
  );
}
```

## Componente com filho

Quando quisermos referênciar um componente dentro de outro, vamos usar props.children, para resgatar os filhos que são passados dentro de determinado componente(componentes passados dentro do corpo de outro componente). 

- No código abaixo o componente Card tem o componente filho Primeiro dentro dele:

``` JavaScript
export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <Card titulo="Exemplo de Card">
        <Primeiro/>
      </Card>
  )
```

Importante resaltar que quando estamos trabalhando com componentes filhos, devemos fechar a tag do componente pai da forma completa. 

- E para recuperar os filhos de dentro de Card e renderizar seus conteúdos, vamos utilizar o props.children dentro do arquivo do componente Card (Card.jsx):

``` JavaScript
import "./Card.css";
import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
```

- Agora temos um componente Familia que recebe em seu escopo o Componente MembroFamilia:

``` JavaScript
import React from "react";
import MembroFamilia from "./FamilyMember";

export default function Familia(props) {
  
  return (
    <div>
      <MembroFamilia nome="Nathallye" sobrenome="Bacelar" />
      <MembroFamilia nome="Paulo" sobrenome="Bacelar" />
      <MembroFamilia nome="Maria" sobrenome="Bacelar" />
    </div>
  );
}
```

``` JavaScript
import React from "react";

export default function MembroFamilia(props) {
  
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
}
```

- Nota-se que estamos passando o sobrenome para todos os elementos, mas isso não é necessário, pois todos tem o mesmo sobrenome por serem parte da mesma familia. Uma saída seria passar esse parâmetro do componente Pai, ou seja, na renderização do componente Família(em App.jsx).

``` JavaScript
// [...]
import Familia from "./components/basics/Family";

  // [...]
    <div>
      // [...]

      <Card titulo="#05 - Componente com Filhos" color="#86BAAB">
        <Familia sobrenome="Ferraz"/>
      </Card>

    </div>
```

- Mas isso não vai funcionar ainda, pois o parâmetro do componente pai não é passado automáticamente para o componente filho. A forma mais simples de fazer funcionar é resgatar essa propriede que está sendo enviada pelo componente pai(props.sobrenome) no componente filho:

``` JavaScript
import React from "react";
import MembroFamilia from "./FamilyMember";

export default function Familia(props) {
  
  return (
    <div>
      <MembroFamilia nome="Nathallye" sobrenome={props.sobrenome} />
      <MembroFamilia nome="Paulo" sobrenome={props.sobrenome} />
      <MembroFamilia nome="Maria" sobrenome={props.sobrenome} />
    </div>
  );
}
```

- Outra forma que temos como fazer isso é usando o operador spred para pegar todas as propriedade passadas para esse componente filho:

``` JavaScript
import React from "react";
import MembroFamilia from "./FamilyMember";

export default function Familia(props) {
  
  return (
    <div>
      <MembroFamilia nome="Nathallye" {...props} />
      <MembroFamilia nome="Paulo" {...props} />
      <MembroFamilia nome="Maria" {...props} />
    </div>
  );
}
```

E se quisermos passar os componentes filhos de forma literal na renderização do componente Pai?

- Nesse caso dentro do nosso arquivo principal, App.jsx:

``` JavaScript
// [...]
import Familia from "./components/basics/Family";
import MembroFamilia from "./components/basics/FamilyMember"

  // [...]
  
    <div>
      // [...]

      <Card titulo="#05 - Componente com Filhos" color="#86BAAB">
        <Familia sobrenome="Ferraz">
          <MembroFamilia nome="Nathallye" sobrenome={props.sobrenome} />
        </Familia>
      </Card>

    </div>
```

- E apenas referenciar os filhos dentro do arquivo do Componente pai(Familia.jsx) a partir de props.children:

``` JavaScript
import React from "react";

export default function Familia(props) {
  
  return (
    <div>
      {props.children}
    </div>
  );
}
```

Quando salvarmos, isso vai gerar um problema, pois não temos props em nenhum local. Não estamos recebendo props e não temos como pegar as propriedades que estão sendo passadas no componente pai(que nesse caso é sobrenome) para o componente filho (sobrenome={props.sobrenome}), não é assim que funciona.

- Para o componente filho receber as props do componente pai, é necessário que dentro do arquivo do componente Pai seja implementando algumas alterações. Sabemos que dentro de chaves "{}" podemos inserir código javascript e acessar seus métodos, assim também podemos acessar os métodos do react("React."). Existe um método chamado choneElement, ele vai clonar um elemento("React.cloneElement()"), e dentro dele vamos passar o elemento props.children(que nada mais é que as propriedades do elemento filho).

``` JavaScript
import React from "react";

export default function Familia(props) {
  return (
    <div>
      {React.cloneElement(props.children)}
    </div>
  );
}
```

- Para o cloneElement além de passarmos o elemento, podemoos passar como segundo parâmetro as props(para clonar as propriedade):

``` JavaScript
import React from "react";
//import React, { cloneElement } from "react"; quando usamos o import assim não precisamos expecificar o React antes do método(React.cloneElement)

export default function Familia(props) {
  return (
    <div>
      {React.cloneElement(props.children, props)} 
    </div>
  );
}
```

Mas isso vale somente quando temos apenas um componente filho, quando há mais de um ocorre um erro.

- Podemos contornar esse erro, usando o map:

``` JavaScript
import React, { cloneElement } from "react";

export default function Familia(props) {

  return (
    <div>
      {
        React.Children.map(props.children, (child) => { // recebemos a lista de todos os filhos epara cada filho vamos chamar a função que recebe cada um dos filhos
          return cloneElement(child, props); // e essa função retorna para cada item o clone do elemetro filho(nomes) e passa as propriedades que foi enviada pelo elemento pai(sobrenome) para o elemento clonado
        })
      }
    </div>
  );
}
```

- Como o props.childer e um objeto que contem todos as propriedades que são passadas aos filhos, podemos usar o método map diretamente nele, simplificando o código:

``` JavaScript
import React, { cloneElement } from "react";

export default function Familia(props) {
  
  return (
    <div>
      {
        props.children.map((child) => { 
          return cloneElement(child, props); 
        })
      }
    </div>
  );
}
```

## Renderização condicional

- Vamos criar um componente para renderizar um número e mostrar se ele é ímpar ou par:

``` JavaScript
import React from "react";

export default function ParOuImpar(props) {
  return (
    <div>
      <span>Par</span>
      <span>Ímpar</span>
    </div>
  )
}
```

- E dentro do arquivo principal de renderização(App.jsx) vamos renderizar esse componente e passar um número como propriedade:

``` JavaScript
// [...]
import ParOuImpar from "./components/conditional/EvenOrOdd";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#08 - Renderização condicional" color="#006400">
          <ParOuImpar numero={20}/>
      </Card>

    </div>
```

Até agora, não há nenhuma lógica que faça esse número ser renderizado como ímpar ou par.

- Para isso, vamos criar uma constante para saber se o número é par:

``` JavaScript
import React from "react";

export default function ParOuImpar(props) {
  const isPar = props.numero % 2 === 0;

  return (
    <div>
      <span>Par</span>
      <span>Ímpar</span>
    </div>
  )
}
```

- E vamos usar essa variável dentro de um par de chaves para ser interpretado como código javascript e dentro vamos criar uma operação ternária((?)se caso for par vai ser renderizado <span>Par</span> (:)senão vai ser renderizado <span>Ímpar</span>):

``` JavaScript
import React from "react";

export default function ParOuImpar(props) {
  const isPar = props.numero % 2 === 0;

  return (
    <div>
      { isPar ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  )
}
```

- Também é possível criarmos um componente e a partir desse componente conseguimos renderizar um trecho de jsx ou não. Para exemplificar, vamos criar um  componente chamado If.

- Esse componente funcional vai receber como propriedade um expressão(verdadeira ou falsa), caso seja verdadeira vai retornar o seu corpo, ou seja, os filhos desse componente:

``` JavaScript
export default function If(props) {
  if(props.test) {
    return props.children
  } else {
    return false
  }
}
```

- Vamos testar criando um outro componente UsuarioInfo. 
Dentro desse componente funcional, vamos retornar uma div com as informações do usuário:

``` JavaScript
import React from "react";

export default function UsuarioInfo(props) {
  return (
    <div>
      Seja bem vindo <strong>{ props.usuario.nome }</strong>!
    </div>
  );
}
```

Vamos passar o usuário, e uma vez passado o usuário vamos mostrar de forma condicional. Caso não tenha um usuário, vamos retornar um outro trecho de código.

- No arquivo de renderização principal(App.jsx), vamos importar esse componente e inserir esse componente dentro de um card, e passar como propriedade um objeto que representa usuario:

``` JavaScript
// [...]
import UsuarioInfo from "./components/conditional/UserInfo";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#08 - Renderização condicional" color="#006400">
          <ParOuImpar numero={20}/>
          <UsuarioInfo usuario={{ nome: 'Fernando' }}/> {/*o primeiro par de chaves"{}" é para ter um trecho que vai ser interpretado com javascript; se queremos criar um objeto de forma literal temos que colocar um outro par de chaves, dentro.*/}
      </Card>

    </div>
```

- Para evitar erros, podemos colocar props.usuario dentro de uma constante e passar um valor padrão caso não seja passado nada:

``` JavaScript
import React from "react";

export default function UsuarioInfo(props) {
  const usuario = props.usuario || {}

  return (
    <div>
      Seja bem vindo <strong>{ usuario.nome }</strong>!
    </div>
  );
}
```

- Agora, podemos importar o componente funcional If que vai receber como propriedade um expressão. 
E vamos inserir esse componente If e colocar a mesagem para o usuário dentro do corpo dele. 
Dentro das chaves, vamos inserir a expressão que vai verificar se o usuário está setado && se o nome do usuário é válido(diferente de null/vazio):

``` JavaScript
import React from "react";
import If from "./If";

export default function UsuarioInfo(props) {
  const usuario = props.usuario || {}

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{ usuario.nome }</strong>!
      </If>
    </div>
  );
}
```

- Podemos também criar um outro trecho que vai validar o contrário e retornar outro trecho de código... se não tiver usuário(!usuario) OU(||) o nome do usuário não for válido(!usuario.nome):

``` JavaScript
import React from "react";
import If from "./If";

export default function UsuarioInfo(props) {
  const usuario = props.usuario || {}

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{ usuario.nome }</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Fulano</strong>!
      </If>
    </div>
  );
}
```

## Comunição Direta

A nossa aplicação em React é uma árvore de componentes. Podemos quebrar nossa aplicação em multiplos componentes sempre visando o reuso a organização. E dentro dessa árvore de componentes é muito comum que tenhamos uma comunição direta e indireta.

Para exemplificarmos melhor dentro da pasta componentes vamos criar uma pasta chamada comunicacao e dentro dela vamos criar os componentes DiretaPai e DiretaFilho.

- No componente DiretaFilho queremos receber um texto dentro de props(porps.texto), um número(props.numero) e um valor booleano(props.bool). Resumindo, vamos esperar receber esses três valores a partir do componente pai:

``` JavaScript
import React from "react";

export default function DiretaFilho(props) {
  return (
    <div>
      <div>{props.texto}</div>
      <div>{props.numero}</div>
      <div>{props.bool}</div>
    </div>
  );
}
```

- Como funciona a comunicação de um componente pai, para um componente filho?
É passarmos **via props(propriedades)** aquilo que queremos passar do pai para o filho. Ate porquê há uma relação direta, pois dentro do pai normalmente temos uma referência para o componente filho(import do componente filho, de tal forma que conseguimos passar as props para o filho):

``` JavaScript
import React from "react";
import DiretaFilho from "./DirectChild";

export default function DiretaFilho(props) {
  return (
    <div>
      <DiretaFilho text="Filho 1" numero={20} bool={true}/>
    </div>
  );
}
```

- De tal forma que podemos voltar no DiretaFilho e tratar esse valor booleano(bool) com operadores ternários. Se for true renderiza "verdadeiro" senão renderiza "falso":

``` JavaScript
import React from "react";

export default function DiretaFilho(props) {
  return (
    <div>
      <div>Texto: {props.texto}</div>
      <div>Número: {props.numero}</div>
      <div>Booleano: {props.bool ? "Verdadeiro" : "Falso"}</div>
    </div>
  );
}
```

- Dessa forma, podemos inserir esse componente no arquivo de renderização principal(App.jsx):

``` JavaScript
// [...]
import DiretaPai from "./components/communication/DirectFather"

  // [...]
  
    <div>
      // [...]

      <Card titulo="#09 - Comunicação Direta" color="#C2A886">
        <DiretaPai/>
      </Card>

    </div>
```
Resumindo:
Isso é uma comunicação direta, temos uma referência para um componente filho, e conseguimos no momento que criamos a instância do componente, passar as propriedades do pai para o filho.
A questão da **comunicação direta**... comunicação sugere troca de dados, e a troca de dados do componente pai para o componente filho é passarmos **via propriedades(props)** o que queremos passar do pai para o filho.

## Comunicação Indireta

Quando precisamos passar informações do componente filho para o componente pai.
O componente filho não tem uma referência direta com o componente pai, então não temo como via propriedades(porps) intânciar um componente pai(senão o pai passaria a ser filho e o filho passaria a ser pai).

Para exemplificarmos melhor dentro da comunicacao vamos criar os componentes IndiretaPai e IndiretaFilho.

- Vamos inserir dentro dos Componetes a extrutura básica de um Componente funcional. Lembrando que o componente IndiretaPai leva a referência do componente filho:

``` JavaScript
import React from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {
  return (
    <div>
      Pai
      <IndiretaFilho/>
    </div>
  );
}
```

``` JavaScript
import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      Filho
    </div>
  );
}
```

- E vamos importar esse componente no nosso arquivo principal(App.js):

``` JavaScript
// [...]
import IndiretaPai from "./components/communication/IndirectFather";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#10 - Comunicação Indireta" color="#4F4537">
        <IndiretaPai/>
      </Card>

    </div>
```

- Vamos supor que no componente filho temos um botão, e quando clicarmos nele as informações vão ser enviadas para o componente pai:

``` JavaScript
import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button>Fornecer Informações</button>
    </div>
  );
}
```

Mas de fato como é feito a comunicação do sentido do filho enviar dados para o pai, já que o filho não tem nenhum tipo de comunicação direta com o pai, diferente do pai que tem o componente filho(dentro dele).
Fazemos isso com uma **função via props**, ou seja, **passamos uma função do pai para o filho e quando o filho chamar essa função**(acontece um evento), **temos como passar informações para o pai**.

- Vamos criar uma função com o nome fornecerInformacoes e ela vai receber 3 atributos(texto, numero e um booleano) e vai mostrar no console esses atributos:

``` JavaScript
import React from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {
  function fornecerInformacoes(texto, numero, bool) {
    console.log(texto, numero, bool)
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho/>
    </div>
  );
}
```

- Como vamos conseguir passar essa função para o filho?
Via props. Vamos ter a propriedade _quandoClicar_ vai ser chamada a função _fornecerInformações_: 

``` JavaScript
import React from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {
  function fornecerInformacoes(texto, numero, bool) {
    console.log(texto, numero, bool)
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
    </div>
  );
}
```

- O que significa que dentro do filho vamos ter dentro de props esse atributo _quandoClicar_ e podemos chamá-la através de _props.quandoClicar_. NO botão vamos rastrear o evento de click com o método _onClick_ e dentro vamos receber uma função anônima que recebe um evento(e) e dentro dessa função anônima vamos chamar a **função quandoClicar via props** e passar como parâmetro dessa função os dados para o componente pai:

``` JavaScript
import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button>Fornecer Informações</button>
    </div>
  );
}
```

Podemos passar essas informações a partir do método que foi passado como propriedade do pai para o filho, invocamos o método e conseguimos passar as informações para o pai. Essa é a comunicação indireta, o pai passa para o filho uma função callback(será chamada de volta em algum momento) e na chamada da função  podemos retornar as propriedades para o pai.

## Componente com Estado

A partir do React 16.8 é possível ter estado em componentes funcionais.

- Temos aqui o caso anterior que o componente pai passou uma função via props para o componente filho, e o componente filho a partir de um evento(nesse caso foi o cick do botão) chama a função e passou informações para o componente pai. E agora, como conseguimos mudar esses valores no componente pai, ou seja, não basta criarmos variáveis e mandarmos  esses valores que foram passadas para o componente pai, como no exemplo abaixo, temos que manter estado:

``` JavaScript
import React from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {
  let nome = '?';
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(texto, numero, bool) {
    nome = texto;
    idade = numero;
    nerd = bool;
    
    console.log(texto, numero, bool)
  }

  return (
    <div>
      <div>
        <div>Nome: {nome}</div>
        <div>Idade: {idade}</div>
        <div>Nerd: {nerd ? "Verdadeiro" : "Falso"}</div>
      </div>

      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
    </div>
  );
}
```

- Para isso vamos importar o hook useState do React:

``` JavaScript
import React, { useState } from "react";
```

- A partir do useState conseguimos criar estado dentro do nosso componente. Então ao invés de criarmos uma variável simplesmente colocando o valor dela:

``` JavaScript
  let nome = '?';
```

- Vamos chamar o _useState_ e passar o valor inicial:

``` JavaScript
  let nome = useState('?');
```

- Só que essa função vai retornar um array com duas possições, a primeira possição vai ser o valor e a segunda posição vai ser uma função que vai ser usada para alterar esse valor.
Como bem sabemos podemos usar atribuição via desestruturação (destructuring assignment). Ex.: const [a, b] = [1, 2], fica assim, a=1 e b=2. 
Desse modo, vamos usar o destructuring para receber os dois valores do array que _useState_ retorna:

``` JavaScript
  let [nome, setNome] = useState('?'); //nome: é o próprio valor que inicializamos a variável; setNome: função que vamos utilizar para alterar o nome.
```

- E podemos aplicar a mesma atribuição para as demais variáveis:

``` JavaScript
import React, {useState} from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {
  
  let [nome, setNome] = useState('?');
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  //[...]
  );
}
```

- E podemos alterar as variáveis que recebem os atributos da função _fornecerInformacoes_ para a função set das mesmas, e passar como parâmetro o valor:

``` JavaScript
import React, {useState} from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {

  let [nome, setNome] = useState('?'); //nome: é o próprio valor que inicializamos a variável; setNome: função que vamos utilizar para alterar o nome.
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(texto, numero, bool) {
    setNome(texto);
    setIdade(numero);
    setNerd(bool);
    
    console.log(texto, numero, bool)
  }

  return (
    <div>
      <div>
        <div>Nome: {nome}</div>
        <div>Idade: {idade}</div>
        <div>Nerd: {nerd ? "Verdadeiro" : "Falso"}</div>
      </div>

      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
    </div>
  );
}
```

Nota-se que inicializamos os valores de nome, idade, nerd, pois não tinhamos as informações que foram passadas pelo componente filho. 
A partir do evento inicialização da função _fornerInformacoes_(evento de click do botão) recebemos os valores de texto, numero e bool e passamos como respectivos parâmetros das funções set de cada variável de estado.

## Componente Controlado

Os elementos de formulário HTML funcionam de maneira um pouco diferente de outros elementos DOM no React, porque os elementos de formulário mantêm naturalmente algum estado interno. Por exemplo, este formulário em HTML puro aceita um único nome:

``` HTML
<form>
  <label>
    Nome:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
</form>
```

Esse formulário tem o comportamento padrão do HTML de navegar para uma nova página quando o usuário enviar o formulário. Se você quer esse comportamento no React, ele simplesmente funciona. Mas na maioria dos casos, é conveniente ter uma função JavaScript que manipula o envio de um formulário e tem acesso aos dados que o usuário digitou nos inputs. O modo padrão de fazer isso é com uma técnica chamada “componentes controlados” (controlled components).

Para entendermos melhor como funciona um componente controlado, dentro da pasta componentes vamos criar uma pasta chamada formulario e dentro dela vamos criar um componente chamado Input.jsx.

- Vamos inserir dentro do Componete a extrutura básica de um Componente funcional:

``` JavaScript
import React from "react";

export default function Input(props) {
  
  return (
    <div>
      Input
    </div>
  );
}
```

- Em seguida, vamos importar esse componente dentro do arquivo de renderização principal(App.jsx):

``` JavaScript
// [...]
import Input from "./components/form/Input";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#11 - Componente Controlado" color="#FE3D56">
        <Input/>
      </Card>
    </div>
```

- No componente Input vamos definir uma variável com estato. Vamos importar o _useState_ do React e criar uma variável com o destructuring, sendo que a primeira posição vai receber o valor inicial e a segunda posição vai receber a função _set_ para alterar a variável:

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  return (
    <div>
      Input
    </div>
  );
}
```

- Vamos definir um elemento input com o _atributo value_ que recebe a variável _valor_:

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  return (
    <div>
      <input value={valor} />
    </div>
  );
}
```

De tal forma que podemos notar no navegador o componente Input com o valor inicial. Mas como é um componente controlado não conseguimos alterar o valor do input. O que ele chava de verdade absoluta são os dados, ou seja, o estado do componente não mudou, não foi chamada em nenhum momento a função _setValor_ para mudar o dado. Resumindo, não conseguimos mudar o estado de um componente diretamente a partir da interface, primeiro temos que mudar o estado, para quando esse estado mudar aí sim conseguimos refletir essa mudança na interface gráfica.
O caminho é unidirecional, o estado muda e altera a interface gráfica. A interface gráfica não altera o estado(isso acontece indiretamente a partir dos eventos).

- Então, nesse caso, como conseguimos alterar o valor do input?
Podemos mudar ele pegando o evento _onChange_, esse evento vai ser chamado toda vez que digitarmos:

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  return (
    <div>
      <input value={valor} onChange={}/>
    </div>
  );
}
```

- Podemos atribuir uma função a ele, e essa função vai receber como parâmetro o evento. Então, vamos criar uma função _quandoMudar_ e ela vai receber um evento "e"(sempre que dispararmos um evento associado ao input ele vai chamar o console.log):

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    console.log(e);
  }

  return (
    <div>
      <input value={valor} onChange={quandoMudar}/>
    </div>
  );
}
```

- Se quisermos acessar mais especificamente o _e.target.value_ vai mostrar o valor novo que foi gerado a partir do evento:

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    console.log(e.target.value); //target = alvo; value = valor.
  }

  return (
    <div>
      <input value={valor} onChange={quandoMudar}/>
    </div>
  );
}
```

- Ele mostra o que está sendo digitado mas ainda não altera o estado. Para alterar o estado dentro da função _quandoMudar_ vamos chamar a função _setValor_ e ela vai receber como valor o que estamos recebemos como resposta do evento(e.target.value):

``` JavaScript
import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    setValor(e.target.value);
    // console.log(e.target.value); //target = alvo; value = valor.
  }

  return (
    <div>
      <input value={valor} onChange={quandoMudar}/>
    </div>
  );
}
```

Aí sim o _setValor_ vai ser modificado e vai refletir no _valor_ e vai ser renderizado no input.

- Podemos também ter componentes somente de leitura, desse modo, ele não vai precisar do _onChange_:

``` JavaScript
<input value={valor} readOnly />
```

## Componente baseado em Classe

Classe, nada mais é que uma forma diferente de escreve função.

Para entendermos melhor como funciona um componente controlado, dentro da pasta componentes vamos criar uma pasta chamada contador e dentro dela vamos criar um componente chamado Contador.jsx.

- Vamos inserir dentro do Componete a extrutura básica de um Componente baseado em Classe. Vale ressaltar que a função render é obrigatória vai renderizar algo na tela:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  render() {
    return (
      <div>
        <h2>Contador</h2>
      </div>
    );
  }
}

export default Contador;
```

- E vamos inserir esse componente dentro do nosso arquivo App.jsx:

``` JavaScript
// [...]
import Contador from "./components/counter/Counter";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#12 - Componente de Classe - Contador" color="#670513">
        <Contador/>
      </Card>
    </div>
```

- E como definimos estado dentro de um componente baseado em classe?
Podemos definir o _state_ como propriedade e essa propriedade pode ser definida como um objeto(no caso da função também podemos ter um objeto, usando o useState e atribuir um objeto dentro dele). Aqui no caso temos um único estado que é o _state_ acessando-o a partir da classe, e dentro dele vamos colocar todos os atributos necessários do nosso contador. 
Inicialmente, o state vai ter um _numero_ e ele vai inicializar com _0_:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: 0
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
      </div>
    );
  }
}

export default Contador;
```

- Vamos passar para esse componente um valor inicial para o contador, então em App.jsx no componente Contador vamos passar um atributo _númeroINicial_:

``` JavaScript
// [...]
import Contador from "./components/counter/Counter";

  // [...]
  
    <div>
      // [...]

      <Card titulo="#12 - Componente de Classe - Contador" color="#670513">
        <Contador numeroInicial={10}/>
      </Card>
    </div>
```

- E agora, como podemos pegar essa propriedade que foi passada para o nosso componente baseado em classe?
Podemos acessar ele a partir de props, só que não diretamente props, vamos usar o _this.props_, ou seja, as propriedades que pertecem a instância dessa classe(this aponta para a instância/objeto atual):

``` JavaScript
<p>Valor Inicial: { this.props.numeroInicial }</p>
```

- Utilizando dessa lógica, vamos inicializar o _state_ com o valor passado via props:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
      </div>
    );
  }
}

export default Contador;
```

- Próximo passo, vamos criar uma função que vai incrementar o valor do contador. 
O que vamos fazer dentro dessa função?
Vamos alterar o valor de _numero_ ou seja, alterar _state_. Assim como, no _useState_ temos uma função que altera o estado, aqui dentro da classe também vamos ter uma função para alterar o estado, e o nome dela é _setState_. 
Então, temos que chamar essa função _setState_ dentro da função incremento para conseguirmos alterar o valor.
Dentro da função _setState_ vamos passar um novo objeto para _state_(já que ele é um objeto), e nesse objeto vamos passar o atributo que queremos alterar:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial
  }

  inc() {
    this.setState({
      numero: this.state.numero + 1 // vamos pegar o estado atual e acrescentar + 1 
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>{ this.state.numero }</p>
      </div>
    );
  }
}

export default Contador;
```

- Vamos utilizar um botão e dentro dele o evento de onClick e quando ele for acionado vai chamar a função de incrementar. Para evitar um erro do _this_ não apontar para a instância correta, vamos utilizar na função de incremento uma arrow function:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + 1 // vamos pegar o estado atual e acrescentar + 1 
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        {/* <p>Valor Inicial: { this.props.numeroInicial }</p> */}
        <h3>{ this.state.numero }</h3>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

export default Contador;
```

- E vamos seguir a mesma lógica para criar uma função de decremento:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial 
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + 1 // vamos pegar o estado atual e acrescentar + 1 
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - 1 // vamos pegar o estado atual e subtrair - 1 
    });
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{ this.state.numero }</h3>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Contador;
```

- Outra implementação importante a ser feita no nosso contato é a quantidade que queremos incrementar ou decrementar(além de somente 1), que nada mais que o passo.
Como podemos fazer isso?
Criando uma nova propriedade dentro de _state_ chamada passo:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, // se o numero inicial não for fornecido vai ser 0
    passo: this.props.passoInicial || 5 // se o passo inicial não for fornecido vai igual a 5
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + 1 // vamos pegar o estado atual e acrescentar + 1
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - 1 // vamos pegar o estado atual e subtrair - 1 
    });
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        {/* <p>Valor Inicial: { this.props.numeroInicial }</p> */}
        <h3>{ this.state.numero }</h3>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Contador;
```

- E vamos usar esse atributo passo para incrementar e decrementar de acordo com o valor passado:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo 
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo 
    });
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{ this.state.numero }</h3>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

export default Contador;
```

- Vamos criar também uma outra parte do template para definirmos um input e apartir desse input vai ser feita a alteração do passo:

``` JavaScript
import React, { Component } from "react";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo 
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo 
    });
  }

  setPasso = (e) => { 
    this.setState({
      passo: +e.target.value 
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{ this.state.numero }</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
            type="number" 
            value={this.state.passo} 
            id="passoInput"
            onChange={this.setPasso} 
          />
        </div>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

export default Contador;
```

Agora vamos dicidir esse nosso componente em 3, para deixar o código mais organizado. Primeiro componente vai ser o Display(a parte que mostra a contagem do valor), o segundo vai ser o formulário do passo e o terceiro vai ser os botões.
Mas vamos continuar mantendo o estado do componente dentro de Contador(componente pai).

- Vamos iniciar criando o componente Display.jsx e ele será um componente funcional:

``` JavaSCript
import React from "react";

export default function Display(props) {
  return (
    <div>
      
    </div>
  );
}
```

- E vamos seguir essa mesma extrutura para criar os componentes PassoFomulário e Botoes.

- Dentro do contador o display representa apenas o trecho de código que está dentro do h3, que nada mais é que a variável de estado(state) e como essa variável recebe um objeto com seus atributos, vamos acessar o numero dela:

``` JavaScript
<h3>{ this.state.numero }</h3>
```

- Vamos remover esse trecho de código de Contador e colocar no componente Display. 
Mas como _não estamos mais trabalhando com função baseada em classe_, vamos receber essa propriedade _numero_ através de _props_:

``` JavaScript
import React from "react";

export default function Display(props) {
  return (
    
    <h3>{ props.numeroDisplay }</h3>
  
  );
}
```

- E vamos importar o componente Display dentro do seu componente pai Contador. E vamos inserir no local do display o componente Display e passar o número para o componente filho:

``` JavaScript
// [...]
import Display from "./Display";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  // [...]

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numeroDisplay={this.state.numero}/> {/*O componente pai passa via this.state o numero por ser um componente baseado em classe, e o componente filho recebe via props*/}
        
        // [...]
      </div>
    );
  }
}

export default Contador;
```

- Antes de fazer a parte do PassoForm que é mais complexa, vamos migrar os botões do componente Contador para o componente filho Botoes:

``` JavaScript
import React from "react";

export default function Botoes(props) {
  return (
    <div>
      <button onClick={props.decrementar}>-</button>
      <button onClick={props.incrementar}>+</button>
    </div>  
  );
}
```

- Agora, no Contador vamos importar o seu filho Botoes e inserir a referência desse componente onde os botoes ficavam:

``` JavaScript
// [...]
import Botoes from "./Buttons";

class Contador extends Component {
  
  // [...]

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo 
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo 
    });
  }

  // [...]

  render() {
    return (
      <div className="Contador">
        // [...]
        
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
            type="number" 
            value={this.state.passo} 
            id="passoInput"
            onChange={this.setPasso} 
          />
        </div>
        
        <Botoes />
      </div>
    );
  }
}

export default Contador;
```

- Só que não passamos nada como parâmetro, então quando clicarmos não vai acontecer nada. Então, vamos passar como prarâmetro as funções inc e dec:

``` JavaScript
// [...]
import Botoes from "./Buttons";

class Contador extends Component {
  
  // [...]

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo 
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo 
    });
  }

  // [...]

  render() {
    return (
      <div className="Contador">
        // [...]
        
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
            type="number" 
            value={this.state.passo} 
            id="passoInput"
            onChange={this.setPasso} 
          />
        </div>
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
```

- Dessa forma o componente filho Botoes já consegue receber via props essas funções, acessando as propriedades incrementar e decrementar.

- Agora, vamos fazer a parte do componente PassoForm. Esse vai ser um pouco mais complicado, pois nele precisamos tanto passar informação quando receber(notificando o componente do que acabou de acontecer no passo).
Primeiro, vamos pegar a trecho de código do formulário e migrar do Contador para o PassoForm:

``` JavaScript
import React from "react";

export default function PassoForm(props) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input 
        type="number" 
        value={props.passoForm} 
        id="passoInput"
        onChange={props.setPassoForm} 
      />
    </div>
  );
}
```

- E vamos importar o PassoForm dentro do Contador e criar a referência onde ficava o formulário:

``` JavaScript
// [...]
import PassoForm from "./StepForm";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  // [...]

  setPasso = (e) => { 
    this.setState({
      passo: +e.target.value 
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numeroDisplay={this.state.numero}/> 
        
        <PassoForm/>
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
```

- Agora, vamos passar como parâmetro para o PassoForm o que queremos como passo inicial:

``` JavaScript
// [...]
import PassoForm from "./StepForm";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  // [...]

  setPasso = (e) => { 
    this.setState({
      passo: +e.target.value 
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numeroDisplay={this.state.numero}/> 
        
        <PassoForm passoForm={this.state.passo}/> {/* aqui temos uma comunicação direta: estamos passando via props os dados de um componente pai para o filho */}
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
```

- Agora, vamos precisar de uma comunicação indireta, onde o componente filho PassoForm vai passar para o componente pai Contador o dado que precisa ser alterado.
Nesse caso, já não vamos mais receber o evento dentro de _setPasso_, vamos receber o _novoPasso_ para deixarmos encapsulado esse evento dentro do componete _PassoForm_, e passarmos o número corredo do passo para alterar a variável de estado _passo_:

``` JavaScript
// [...]
import PassoForm from "./StepForm";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  // [...]

  setPasso = (novoPasso) => { 
    this.setState({
      passo: novoPasso 
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numeroDisplay={this.state.numero}/> 
        
        <PassoForm passoForm={this.state.passo}/>
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
```

- Esse elemento já vai esperar que a propriedade _setPassoForm_ do componente _PassoForm_ receba via props a função setPasso:

``` JavaScript
// [...]
import PassoForm from "./StepForm";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, 
    passo: this.props.passoInicial || 5 
  }

  // [...]

  setPasso = (novoPasso) => { 
    this.setState({
      passo: novoPasso 
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numeroDisplay={this.state.numero}/> 
        
        <PassoForm passoForm={this.state.passo} setPassoForm={this.setPasso}/>
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
```

- Então agora no PassoForm o evento onChange vai esperar _props.setPasso_, mas não podemos chamar direto, senão vai ser passado um evento, mas não queremos isso, já queremos passar o novo número, então vamos receber o evento e dentro dele vamos chamar _props.setPasso_ passando o _evento.target.value_:

``` JavaScript
import React from "react";

export default function PassoForm(props) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input 
        type="number" 
        value={props.passoForm} 
        id="passoInput"
        onChange={e => props.setPassoForm(+e.target.value)} // "+" na frente para converter para int
      />
    </div>
  );
}
```

- Podemos notar que na comunicação indireta, temos o componente pai enviando via props uma função para o componente filho, de tal forma que quando o evento acontece _(onChange={e => props.setPassoForm(+e.target.value)})_ o componente filho, manda de volta a informação do novoPasso que precisa ser alterado no estado (que é exatamente o que se encontra dentro de _e.target.value_[o atributo novoPasso que é recebido na função setPasso]).


## Projeto calculadora

### Criando o projeto

```
create-react-app calculadora
                 [nome-aplicação]
```

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd calculadora
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start
```

### Criando o Componente Calculator

A priori, vamos uma pasta dentro de src chamada **main** e dentro dela vamos criar o arquivo Calculator.jsx e seu arquivo css.

- Esse componente Calculator vai ser baseado em classes. Vamos criar a extrutura base desse componente, importar o seu arquivo css e criar uma classe para esse elemento:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        
      </div>
    )
  }
}
```

- No arquivo css vamos chamar essa classe que criamos chamada calculator, e vamos inserir a altura, largura e uma borda para essa calculadora tendo como base a calculadora de um macbook:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
}
```

- Vamos tratar os estouros do conteúdo com a propriedade overflow:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden; /*overflow: propriedade especifica se o conteúdo deve ser recortado ou adicionado barras de rolagem quando o conteúdo de um elemento for muito grande para caber na área especificada; hidden- O estouro é cortado e o restante do conteúdo ficará invisível*/
}
```

- E para visualizar o espaço ocupado em tela pela calculadora, vamos inserir um backgroud temporário:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden; /*overflow: propriedade especifica se o conteúdo deve ser recortado ou adicionado barras de rolagem quando o conteúdo de um elemento for muito grande para caber na área especificada; hidden- O estouro é cortado e o restante do conteúdo ficará invisível*/

  background-color: red; /*temporário*/
}
```

- Agora, vamos abrir o arquivo _index.js_ do projeto calculadora, e dentro dele vamos remover o componente App que não vamos usá-lo nesse projeto e vamos importar o componente Calculator e referência-lo:

``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

- E salvando o arquivo já podemos visualizar nosso componente sendo renderizado em tela, mas ele não está centralizado.

- Para resolver a posição do componente Calculator em tela, vamos fazer umas alterações no arquivo _index.css_(ele já está importado dentro do arquivo index.js):

``` CSS
body {
  display: flex;
  justify-content: center; /*para centralizar no eixo horizontal*/
  align-items: center; /*para centralizar no eixo vertical*/

  height: 100vh; /*vai ocupar a altura inteira da tela*/
}
```

- E quando inserirmos texto, também queremos que eles fiquem centralizados, portanto vamos utilizar a propriedade text-aling:

``` CSS
body {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  text-align: center;
  color: #fff; /*alterar a cor da fonte*/
}
```

- E também, vamos aplicar um gradiente no fundo da tela:

``` CSS
body {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  text-align: center;
  color: #fff;
  
  background: linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153));
}
```

- Para a fonte ficar mais parecida com a calculadora modelo, vamos importar a fonte Roboto e aplicar ela em todos os elementos:

``` CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');

* {
  font-family: 'Roboto Mono', monospace;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  text-align: center;
  color: #fff;
  
  background: linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153));
}
```

- E por fim, vamos voltar no arquivo _index.js_ e adicionar um título(h1) para a nossa calculadora. Lembrando que se não envolvermos os elementos adjacente com uma div ou com o React.Fragment, vai ocorrer um erro.

``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

### Criando o Componente Button

A priori, vamos uma pasta dentro de src chamada **components** e dentro dela vamos criar o arquivo Button.jsx e seu arquivo css.

- Esse componente Button vai ser baseado em funções. Vamos criar a extrutura base desse componente, importar o seu arquivo css e criar uma classe para esse elemento:

``` JavaScript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button className="button">
      0 {/*A priori vamos colocar um número qualquer no botão para apenas visualizarmos em tela*/}
    </button>
  )
}
```

- Agora dentro do componente principal Calculator vamos importar o componente Button e referência-lo:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}
```

- Tendo referênciado alguns botões, vamos aplicar o estilo para ficar o mais próximo possível do nosso modelo. A priori, dentro da pseudo classe _:root_ vamos criar umas variáveis de CSS para simplificar nosso código:

``` CSS
:root { /*para criar variáveis css*/
  --background-button: #f0f0f0;
  --border-button: solid 1px #888;
}
```

- E vamos utilizar essas variáveis a partir da função _var_ nas bordas e no background dos botões:

``` CSS
.button {
  border: none; /*para remover bordas existentes*/
  border-right: var(--border-button);
  border-bottom: var(--border-button);

  background-color: var(--background-button);
}
```

- Além disso, vamos alterar o tamanho da fonte e remover o outline azul que aparece quando passamos o cursor sobre o botão:

``` CSS
.button {
  font-size: 1.4rem;

  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);

  background-color: var(--background-button);

  outline: none; /*para remover o outline azul quando passamos o cursor sobre o button*/
}
```

- Voltando no componente Button, vamos receber uma propriedade label, para receber o elemento/label do botão:

``` JavaScript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button className="button">
      {props.label}
    </button>
  )
}
```

- E no componente Calculator vamos passar o label via props:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Agora, vamos usar o CSS grid para organizar os botões. Dentro de _Calculator.css_, primeiro vamos remover o background red. Em seguida, vamos ativar o _display: grid_, para tornar o elemento um grid container(por padrão organiza os elementos dentro em coluna):

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden; /*overflow: propriedade especifica se o conteúdo deve ser recortado ou adicionado barras de rolagem quando o conteúdo de um elemento for muito grande para caber na área especificada; hidden- O estouro é cortado e o restante do conteúdo ficará invisível*/
 
  display: grid; /*coloca os elementos um embaixo do outro usando o mesmo tamanho para todos os elementos*/
}
```

- Podemos usar a propriedade _grid-template-columns_ para determinar o número de colunas da nossa calculadora e organizá-la:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden;
 
  display: grid; 
  grid-template-columns: repeat(4, 25%); /*vamos ter 4 colunas, cada uma ocupando 25%; repeat age como um multiplicador, ou seja, ele aplica 4 vezes 25% nas colunas*/
}
```

- No inicio da calculadora temos o display e em seguida, abaixo, cada uma das 5 linhas vão ocupar um tamanho fixo. Vamos usar a propriedade _grid-template-rows_ para definir o tamanho dessas linhas:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden; 
 
  display: grid; 
  grid-template-columns: repeat(4, 25%); 
  grid-template-rows: 48px 48px 48px 48px 48px; /*48px para cada uma das 5 linhas dessa grid*/
}
```

### Criando o Componente Display

A priori, dentro da pasta **components** vamos criar o arquivo Display.jsx e seu arquivo css.

- Esse componente Display vai ser baseado em funções. Vamos criar a extrutura base desse componente, importar o seu arquivo css e criar uma classe para esse elemento:

``` JavaScript
import React from "react";
import "./Display.css"

export default function Display(props) {
  return (
    <div className="display">
      
    </div>
  )
}
```

- Esse componente Display vai receber uma propriedade que vai ser o valor exibido:

``` JavaScript
import React from "react";
import "./Display.css"

export default function Display(props) {
  return (
    <div className="display">
      {props.value}
    </div>
  )
}
```

- Agora dentro do componente principal Calculator vamos importar o componente Button e referência-lo:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";
import Display from "../componets/Display";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- A priori, vamos inserir um valor meramente ilustrativo para visualizarmos em tela:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";
import Display from "../componets/Display";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display value={100}/>


        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Agora indo no arquivo _Calculator.css_ antes das 5 linhas fixas dos botões vamos inserir uma linha que vai representar o display:

``` CSS
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;

  overflow: hidden; 
 
  display: grid; 
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px; /*a primeira linha vai ser 1fr(um fragmento) que vai pegar o restante do tamanho disponivel em tela e 48px para cada uma das 5 linhas restante dessa grid*/
}
```

- Vamos melhorar o display indo no arquivo _Display.css_. Primeiramente, vamos usar a propriedade _grid-column_ para dá um span, para informar quantas colunas da grid o display vai ocupar, nesse caso, vão ser 4:

``` CSS
.display {
  grid-column: span 4; /*span 4: o span para informa quantas colunas da grid esse elemento vai ocupar, nesse caso vai ser 4*/
}
```

- Vamos definir uma cor de fundo(cor preto com uma transparência):

``` CSS
.display {
  grid-column: span 4;

  background-color: #0004;
}
```

- Embora o Display seja um elemento da grid, podemos aplicar o flexbox nele(apenas os elementos dentro do display vão receber essa propriedade):

``` CSS
.display {
  grid-column: span 4; 

  display: flex;

  background-color: #0004;
}
```

- Podemos aplicar o _justify-content_ para o elemento ficar a direita e centralizar o conteúdo com o _align-items_:

``` CSS
.display {
  grid-column: span 4; 

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #0004;
}
```

- E adicionar um espaçamento para tirar o elemento mais da borda:

``` CSS
.display {
  grid-column: span 4; 

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  background-color: #0004;
}
```

- Por fim, vamos ajustar o tamanho da fonte, para que o valor do display fique maior em relação aos botões:

``` CSS
.display {
  font-size: 2.1rem; /*REM - é calculado em cima do valor da TAG Body, Html ou Navegador; EM - já utiliza no cálculo o valor do elemento pai, criando uma hierarquia no cálculo, tornando mais complexo o uso.*/

  grid-column: span 4; 

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  background-color: #0004;
}
```

### Retonando no Componente Button - Retoques

- Primeiramente, no arquivo _Button.css_ vamos adicionar a pseudo classe active para quando clicarmos no botão ele mudar de cor:

``` CSS
:root { /*para criar variáveis css*/
  --background-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4rem;

  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);

  background-color: var(--background-button);

  outline: none;
}

.button:active { /*para o botão ficar mais escuro ao clicar*/
  background-color: #ccc;
}
```

- Agora, vamos criar classes para adicionarmos depois nos elementos button de acordo com o número de colunas que devem ocupar:

``` CSS
:root { /*para criar variáveis css*/
  --background-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4rem;

  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);

  background-color: var(--background-button);

  outline: none;
}

.button:active { /*para o botão ficar mais escuro ao clicar*/
  background-color: #ccc;
}

.button.double { /*vamos aplicar essa propriedade em botões que devem ocupar duas posições*/
  grid-column: span 2;
}

.button.triple { /*vamos aplicar essa propriedade em botões que devem ocupar três posições*/
  grid-column: span 3;
}
```

- Também vamos criar uma classe para adicionarmos nos elementos button quando for um operador, pois esse botões tem a cor de fundo e do texto diferente dos demais:

```CSS
:root { /*para criar variáveis css*/
  --background-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4rem;

  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);

  background-color: var(--background-button);

  outline: none;
}

.button:active { /*para o botão ficar mais escuro ao clicar*/
  background-color: #ccc;
}

.button.double { /*vamos aplicar essa propriedade em botões que devem ocupar duas posições*/
  grid-column: span 2;
}

.button.triple { /*vamos aplicar essa propriedade em botões que devem ocupar três posições*/
  grid-column: span 3;
}

.button.operation { /*vamos aplicar essa propriedade em botões de operações*/
  background-color: #fa8231;
  color: #fff;
}

.button.operation:active {
  background-color: #fa8231cc;
}
```

- Agora vamos fazer com essas classes sejam aplicadas dentro dos botões de acordo com as propriedades forem passadas. No componente Button, no lugar da _className="button"_ vamos definir uma expressão e ela delimitada por batik, ou seja, temos uma template string:

``` JavaScript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button className={` 
      
    `}>
      {props.label}
    </button>
  )
}
```

- Vamos colocar logo a classe _button_, sabemos que ela sempre vai ser aplicada, independente de qualquer outra propriedade enviada:

``` JavaScript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button className={` 
      button
    `}>
      {props.label}
    </button>
  )
}
```

- Já _double_, _triple_, _operation_ vão precisar de porps para serem aplicadas ou não. Portanto, vamos adicionar um operador ternário, pois se a props double/triple/operation estiver definido "?" a classe double/triple/operation vai ser aplicada, senão ":" vai ficar vazio:

``` JavaScript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    // dentro de uma tamplate string(javascript puro) temos que usar o "$" e chaves{} para interpolar uma variálvel
    <button className={` 
      button
      ${props.double ? 'double' : ''} 
      ${props.triple ? 'triple' : ''}
      ${props.operation ? 'operation' : ''} 
    `}> 
      {props.label}
    </button>
  )
}
```

- Antes de usarmos essas classes dentro do componente Calculator vai ter uma questão importante. No botão temos o evento do click, e quando clicarmos no botão quermos que o conteúdo/label do botão seja retornado, então para isso vamos adicionar o _onClick_ que vai disparar uma arrow function que recebe o evento, e vai chamar, _props.click()_, ou seja, esperamos receber via props do button uma propriedade chamada _click_ que vai _conter uma função dentro dela_:

``` JavaSCript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button onClick={e => props.click()} className={` 
      button
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      ${props.operation ? 'operation' : ''} 
    `}>
      {props.label}
    </button>
  )
}
```

- Só que essa função ao invés de receber o evento, vai receber diretamente o _props.label_, ou seja, o _conteúdo do elemento_, e ele será passado para a função _click_:

``` JavaSCript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button onClick={e => props.click(props.label)} className={` 
      button
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      ${props.operation ? 'operation' : ''} 
    `}>
      {props.label}
    </button>
  )
}
```

- Devemos ter cuidado para verificarmos se de fato essa propriedade está presente, portanto podemos colocar uma condicional, para primeiro verificarmos se a propriedade _click_ está presente e depois chamar a função _click()_:

``` JavaSCript
import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    <button onClick={e => props.click && props.click(props.label)} className={` 
      button
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      ${props.operation ? 'operation' : ''} 
    `}>
      {props.label}
    </button>
  )
}
```

- Agora, voltando no componente Calculator vamos criar 3 funções: uma vai ser chamada para zerar a calculadora(pelo botão AC), outra função vai ser responsável por adicionar um digito(quando clicarmos nos botões numerais e o ponto) e a última vai ser responsável por setar a operação.

- Vamos criar efetivamente a função que vai ser responsável por zerar a calculadora, ela vai se chamar _clearMemory()_. A priori, só vamos inserir um console.log para verficarmos no console se a função está sendo chamada:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";
import Display from "../componets/Display";

export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  render() {
    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- A segunda função, responsável por setar a operação vai se chamar _setOperation_ e vai receber como parâmetro a operação. E a priori, vamos colocar para ela apenas retornar no console a _operation_ recebida:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation)
  } 

  render() {
    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Por fim, a próxima função vai ser responsável por adicionar um digito e ela vai se chamar _addDigit_ e vai receber como parâmetro um digito _n_. E a priori, vamos colocar para ela apenas retornar no console o digito recebido:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation)
  }
  
  addDigit(n) {
    console.log(n);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Então, para que click do button seja chamada essas funções vamos usar arrow function. E vamos colocar essas arrow function dentro diretamente do render, pois vamos usar elas em vários botões.
Primeiramente, vamos criar uma constante chamada _addDigit_ que vai receber uma arrow function que vai receber um _n_ e invoca _this.addDigit_(esse this de fato, dentro do render representa o objeto atual, então estamos chamando a função _addDigit_) passando esse _n_:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    const addDigit = n => this.addDigit(n); // criamos uma função arrow com o mesmo nome, essa função vai garantir que o this seja chamado corretamente

    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Vamos fazer o mesmo para a função _setOperation_:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {
    
    const setOperation = op => this.setOperation(operation);
    const addDigit = n => this.addDigit(n);
    
    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- Já a function _clearMemory_ como vamos chamá-la apenas uma vez no button AC, vamos colocá-la diretamente:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);

    return (
      <div className="calculator">
        <Display value={100}/>

        <Button label="AC" click={() => this.clearMemory()}/> {/*O evento click recebe uma arrow function apontando para this.clearMemory*/}
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}
```

- O próximo passo é nas label que são uma operação, vamos chamar o evento click e chamar a constante _setOperation_ que recebeu uma arrow funcion que aponta para a função principal _this.setOperation_. Como já criamos a constante com arrow function podemos chamar a constante diretamente:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);

    return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" click={() => this.clearMemory()} /> 
        <Button label="/" click={setOperation} />
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*" click={setOperation} />
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-" click={setOperation} />
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+" click={setOperation} />
        <Button label="0"/>
        <Button label="."/>
        <Button label="=" click={setOperation} />
      </div>
    )
  }
}
```

- Agora podemos fazer o mesmo nas label que são um digito, vamos chamar o evento click e chamar a constante _addDigit_ que recebeu uma arrow funcion que aponta para a função principal _this.addDigit_. Como já criamos a constante com arrow function podemos chamar a constante diretamente:

``` JavaScript
export default class Calculator extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);

    return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" click={() => this.clearMemory()} /> 
        <Button label="/" click={setOperation} />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" click={setOperation} />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" click={setOperation} />
        <Button label="1" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" click={setOperation} />
        <Button label="0" click={addDigit} />
        <Button label="." click={addDigit} />
        <Button label="=" click={setOperation} />
      </div>
    )
  }
}
```

- Vale resaltar que só criamos as contantes que recebem as arrow function para resolver o this chamar o objeto atual. Temos duas formas de resolver isso, da forma que fizemos acima criando a arrow function ou criando um construtor e fazer o bind uma única vez, desse modo podemos chamar o this e a function diretamente:

``` JavaScript
export default class Calculator extends Component {

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    // const addDigit = n => this.addDigit(n);
    // const setOperation = op => this.setOperation(op);

    return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" click={this.clearMemory} /> 
        <Button label="/" click={this.setOperation} />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} />
        <Button label="0" click={this.addDigit} />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} />
      </div>
    )
  }
}
```

- Para finalizar, dentro do button _AC_ vamos aplicar a propriedade _triple_(automáticamente o button vai passar a ocupar três colunas, não precisamos passar o valor, basta a propriedade). No button 0 vamos aplicar a propriedade _double_. Por fim, todos os button que representão operações vamos aplicar a props _operation_:

``` JavaScript
export default class Calculator extends Component {

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" click={this.clearMemory} triple/> 
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}
```

### Implementando a lógica da calculadora

- Criar o estado inicial para depois manipularmos. Fora da classe, vamos definir uma constante _initialState_ que vai receber as seguintes propriedades: _displayValue_ vai ser o valor a ser exibido no display da calculadora; _clearDisplay_ propriedade que vai informar se precisa ou não limpar o display, inicialmente vai começar com o valor booleano _false_; _operation_ variável que vai armazenar a operação corrente; _values_ array com dois valores, pois no momento que colocamos o valor e em seguida clica na operação, na próxima vez ele vai limpar o display e vai armazenar o segundo valor; _current_ propriedade para verificar se estamos manipulando value de indice 0 do array ou o value de indice 1, vai iniciar com o valor 0:

``` JavaScript
import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";
import Display from "../componets/Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}
export default class Calculator extends Component {

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" click={this.clearMemory} triple/> 
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}
```

- Criamos essa constante initialState, pois a função _clearMemory_ vai chamar ela e voltar o display estado inicial, além de que o _state_ vai fazer um clone desse objeto. Por isso, foi criada de forma separada para não ser alterada diretamente. 
Então, dentro da classe podemos criar a variável _state_ para startar o estado, recebendo tudo que a variável inicialState possui dentro dela:

``` JavaScript
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    return (
      // [...]
    )
  }
}
```

- Além de que, caso o _clearMemory_ seja invocado vai chamar a função _this.setState_ e atribuir os valores de _initialState_, valtando o estado para o inicio:

``` JavaScript
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    return (
      // [...]
    )
  }
}
```

- O próximo passo, é fazer com que o Display aponte para o _value_ state e não mais para um valor fixo. Portanto, vamos inserir em value o valor _this.state.displayValue_:

``` JavaScript
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    console.log(n);
  }

  render() {

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />

        <Button label="AC" click={this.clearMemory} triple/> 
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}
```

- Agora, vamos implementar condicionais na função _addDigit_. Se a calculadora receber um digito ponto "."(n === ".") e o valor que está no display(this.state.displayValue) já contém um ponto(includes(".")), significa que não podemos adicionar um segundo ponto nesse número, essa tentativa vai ser ignorada e o código vai seguir(return):

``` JavaScript
// [...]

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return
    }
  }

  render() {

    return (
      // [...]
    )
  }
}
```

