# React 

React é um framework single page application(aplicação de única página).

## Craindo o primeiro projeto React

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app fundamentos-react
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

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

