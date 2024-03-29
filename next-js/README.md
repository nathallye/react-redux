# Next.js

É a versão framework do React, o React é a biblioteca JavaScript mais popular para aplicação front-end do mundo e o Next.js acrescenta ao React uma estrutura, e uma série de funcionalidades.
Framework trás essa ideia de trazer uma estrutura pré-pronta para que possamos personalizar e apartir daí começar a desenvolver nossas aplicações.

## Criando um projeto com Nest.js

- Dentro da pasta do projeto, vamos rodar o comando(mais recomendado atualmente usar o npx):

```
npx create-next-app fundamentos
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-next-app:** Dependência para criar um projeto.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd fundamentos
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
yarn dev ou npm run dev
```

## Configurações do projeto

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
.next
node_modules
pages
public
styles
```

Vamos **criar uma pasta src na raiz do projeto**.
E **mover as pastas pages e styles para dentro de src**

- Agora, vamos parar a aplicação

```
ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
yarn dev ou npm run dev
```

- Outra coisa, que podemos nos atentar é que dentro da pasta _pages_ temos dois arquivos:

```
_app.js
index.js
```

- Eles são arquivos javascript só que dentro deles temos códigos _jsx(javascript com react)_, desse modo, podemos mudar a extensão desses arquivos para que o vscode consiga lidar melhor com eles.

## Estrutura de pastas

- No momento vamos ressaltar 3 pastas que o next.js cria no nosso projeto:

```
public
pages
styles
```

- Sabemos que qualquer aplicação web se baseia em trẽs tecnologias: HTML, CSS e JavaScript. 
Dentro da pasta _styles_ temos os arquivos de _CSS_. E podemos notar que temos dois padrões de nomenclatura, um padrão que é simplesmente o _nome-do-arquivo.css_ que é utilizado para modificar a aplicação como um todo, de forma global(ex.: _globals.css_) e o outro padrão que é _nome-do-arquivo.module.css_ que é o CSS escopado/modularizado esse CSS vai impactar componentes especificos(ex.: _Home.module.css_).

- Já na pasta _public_ vamos ter os arquivos de imagem, fonte, video, gif. Dentro desse diretório, podemos criar subpastas, ex.: imagens, fonts... e esses arquivos serão servidos de forma estática para a aplicação.

- Como viemos do React, vamos sentir falta da página _index.html_ que vem por padrão, e se precisarmos personalizar o index, existem outras formas de fazer... assunto para outro momento.

- Na pasta _pages_ será a pasta que vamos acabar trabalhando a maior parte do tempo... dentro dela, temos o arquivo _index.jsx_ e esse arquivo está sendo carregado no localhost:3000 e temos também uma subpasta chamada _api_ e dentro dela temos o arquivo chamado _hello.js_ e se abrirmos a página localhost:3000/api/hello vamos ver os dados dessa página. Ou seja, o next.js é um framework fullstack, ele vai dar a parte do front como também vai permitir a criação da API dentro dele.

## Primeiro componente & rotas

- Primeiramente vamos excluir o arquivo _index.jsx_ que se encontra dentro do diretório _src/pages_ para aprendermos a criar ele do zero e entendermos como funciona a criação de componentes dentro do next.js.

- No novo arquivo _index.jsx_ vamos criar uma função chamada _Inicio_ e ela vai retornar/_return_ a string _"Início"_:

``` JSX
function Inicio() {
  return "Início"
}
```

- Nesse momento, não vamos conseguir ver essa informação/retorno _"Início"_ na tela, pois foi gerado o seguinte problema: _The default export is not a React Component in page: "/"_, ou seja, ele tentou acessar um componente, mais esse componente precisa ser exportado. 
Portanto, vamos voltar na função, e antes dela colocar a palavra _export_, mas isso também não será suficiente, pois precisamos exportar por padrão então devemos colocar _export default_, desse modo o retorno do componente funcional irá aparecer na tela:

``` JSX
export default function Inicio() {
  return "Início"
}
```

- Antes de prosseguirmos vale resaltar, se criarmos novos arquivos dentro da pasta _pages_, por exemplo um arquivo chamado _teste.jsx_ que vai receber um componente funcional igual ao que criarmos para _index.jsx_ cujo o retorno vai ser a string _"Teste"_:

``` JSX
export default function Teste() { // é importante exportar por padrão, para que ele consiga ler e executar esse função
  return "Teste"
}
```

- Só o fato de criarmos um novo arquivo dentro da pasta _pages_ faz com que tenhamos acesso a url localhost:3000/nome-arquivo, nesse caso a url _localhost:3000/teste_, e ela vai mostrar o conteúdo desse arquivo _teste.jsx_.
Então, a primeira coisa que devemos lembrar e entender... que o Next.js é um framework  que foca bastante em não precisarmos configurar as coisas, ou seja, vamos usar uma série de convenções e essas convenções vão nos ajudar no desenvolvimento da aplicação. E uma convenção é o fato que se criarmos um arquivo dentro da pasta _pages_, automáticamente temos acesso ao conteúdo desse arquivo em uma url seguindo o mesmo caminho de pastas desse arquivo.


## Conhecendo o JSX

É uma extensão de sintaxe para JavaScript. É recomendado usar JSX com o React. 
JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript. Nada mais é que código JavaScript com "cara" de HTML.

- Dentro do Next.js para utilizarmos o JSX não é necessário realizar o import do React no arquivo. Podemos usá-lo diretamente assim:

``` JSX
export default function Inicio() {
  return (
    <div>
      <h1>Fundamentos de Next.js & React</h1>
      <h2>Vamos estudar esse framework!</h2>
    </div>
  )
}
```

## Integração JavaScript/JSX

Como acessar o JavaScript puro dentro de um trecho JSX?
Sim, usando um par de chaves {}. Quando usamos par de chaves significa que dentro podemos usar código JavaScript. Exemplo:

```JSX
export default function Jsx() {
  const a = 2
  const b = 3
  const subtitulo = <h2>Teste</h2>
  
  return (
    <div>
      <h1>JSX é um conceito central</h1>
      {subtitulo} {/* acessando o trecho JSX da constante subtitulo */}
      <h3>{a * b}</h3> {/* vai ser feito a multiplicação e o resultado vai ser renderizado em tela */}
    </div>
  )
}
```

## CSS Global

O CSS global da nossa aplicação fica dentro da pasta _styles_ no arquivo _globals.css_ e esse arquivo está sendo referênciado dentro do arquivo _app.jsx que fica dentro da pasta pages:

``` JSX
import '../styles/globals.css' // referẽncia ao arquivo CSS global da aplicação

function MyApp({ Component, pageProps }) { // função que renderiza as páginas da aplicação
  return <Component {...pageProps} />
}

export default MyApp

```

- No arquivo _globals.css_ podemos mudar o _background-color_ para um tom de cinza e a cor da fonte/_color_ para um tom de branco, desse modo deixando a leitura mais agradável... e essas alterações vão refletir nos outros componentes também:

``` CSS globals.css
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  padding: 0;
  margin: 0;

  background-color: #222;
  color: #eee;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
```

- Podemos criar também outra folha de estilo para a aplicação, exemplo _app.css_ e inserir essas novas personalizações dentro desse arquivo, tirando do _globals_:

``` CSS app.css
html,
body {
  background-color: #222;
  color: #eee;
}
```

- E para que essas propriedades sejam aplicadas globalmente na nossa aplicação, vamos referênciar esse arquivo _app.css_ dentro do arquivo que renderiza as páginas da aplicação(_app.js):

``` JSX
// Local para importar css globais(podemos ter mais de um)
import '../styles/globals.css'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## CSS Modularizado

- Podemos excluir o arquivo _Home.module.css_, pois não iremos usar ele nessa aplicação.

- Vamos criar um novo componente no diretorio _src/pages_ chamado _estiloso.jsx_. Esse componente vai ser um componente funcional:

``` JSX
export default function Estiloso() {
  return (
    <div>
      <h1>Componente para teste de CSS Modularizado</h1>
    </div>
  )
}
```

- Agora vamos aplicar estido a esse componente. 
Podemos criar o arquivo CSS desse componente dentro da pasta _styles_ com o nome _Estiloso.module.css_ e desse arquivo podemos criar as classes CSS que acharmos necessário. Vamos criar uma classe com o nome _roxo_ que vai conter a propriedade _background-color_ com um tom de roxo e a _color_ de fonte um tom de branco:

``` CSS
.roxo {
  background-color: #542481;
  color: #fff;
}
```

- Em seguida, vamos importar essa folha de estilo dentro do componente que ela pertence(_estiloso.jsx_). Dentro de _estiloso.jsx_ vamos referênciar esse arquivo CSS(_Estiloso.module.css_) como _styles_:

``` JSX
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
  return (
    <div>
      <h1>Componente para teste de CSS Modularizado</h1>
    </div>
  )
}
```

- Agora, podemos aplicar a classe CSS _roxo_ dentro do componente(na _div_) com a propriedade _className_ do jsx... mas para acessarmos esse estilo modularizado dentro do componente temos que referênciar dentro de um par de chaves/{} _referencia-arquivo-css.class-name_, nesse caso fica assim _styles.roxo_:

``` JSX
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <h1>Componente para teste de CSS Modularizado</h1>
    </div>
  )
}
```

## Usando Componente

- Dentro de _src_ vamos criar uma pasta chamada _components_ e dentro dela vamos criar um componente chamado _Cabecalho.jsx_ e vamos defini-lo como um componente funcional:

``` JSX
export default function Cabecalho() {
  return (
    <header>
      <h1>Fundamentos de Next.js & React</h1>
    </header>
  )
}
```

- E vamos usar esse componente dentro de uma página. Para isso, vamos criar um arquivo chamado _exemplo.jsx_ dentro de _src/pages_. E nesse arquivo, vamos criar um componente funcional e exportar por padrão, e nele vamos importar e retornar a intância jsx do componente _Cabecalho_:

```JSX
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (
    <Cabecalho />
  )
}
```

## Propriedade de Componentes

- Agora, vamos entender como passar para um compentente uma propriedade, a fim de personalizarmos ele.
Primeiramente, em _exemplo.jsx_ vamos duplicar a referência ao componente _Cabeçalho_ a fim de reaproveitarmos esse componente, mas vale resaltar que devemos envolve-los por um elemento(se não irá ocorrer um erro), pode ser uma _div_, _table_ ou pelo proprio _React.Fragment_ que foi feito para agrupar uma lista de componentes filhos sem adicionar nós extras ao DOM:

``` JSX
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (
    <div>
      <Cabecalho />
      <Cabecalho />
    </div>
  )
}
```

- Vamos supor que queremos passar o título/h1 desse componente _Cabecalho_ de forma personalizada... então dentro dele vamos receber um parâmetro chamado _props_. E podemos notar através do _console_ que _props_ é um objeto vazio:

``` JSX
export default function Cabecalho(props) {
  console.log(props)
  return (
    <header>
      <h1>Fundamentos de Next.js e React</h1>
    </header>
  )
}
```

- E se no componente _exemplo.jsx_ dentro da referência ao componente _Cabecalho_ passarmos uma propriedade chamada _titulo_ com o texto que queremos como titulo para eles: 

``` JavaScript
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (
    <div>
      <Cabecalho titulo="Título 1"/>
      <Cabecalho titulo="Título 2"/>
    </div>
  )
}
```

- Podemos notar através do _console_ que o objeto _props_ contém essas informações de _titulo_ e podemos recupera-las atraves acessando o atributo que queremos recuperar de dentro do objeto props(_props.titulo_):

``` JSX
export default function Cabecalho(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}
```

## Navegação entre Componentes 

- Vamos entender uma funcionalidade do Next.js para navegação entre componentes via _Link_. Vamos no arquivo _index.js_ e vamos excluir o que tem dentro da _div_ e vamos importar o _Link_ de dentro do _next/link_:

``` JSX
import Link from "next/link"

export default function Inicio() {
  return (

  )
}
```

- E com isso, vamos criar um _Link_ e dentro desse link vamos definir o atributo obrigatório _href_ que nada mais é do que o caminho para acessar o link que queremos(link do componente que foi criado pelo next) e dentro do _Link_ vamos definir o nome dele(nome do componente):

``` JSX
import Link from "next/link"

export default function Inicio() {
  return (
      <Link href="/estiloso">
        Estiloso
      </Link>
  )
}
```

- E dentro desse componente _Estiloso_ podemos criar um _Link_ para voltar para o _index_. Vamos importar _Link_ de _next/link_ e criar o link para o _/_ com o nome _Voltar_:

``` JSX
import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <Link href="/">Voltar</Link>

      <h1>Componente para teste de CSS Modularizado</h1>
    </div>
  )
}
```

## Componente Layout

- Dentro de _src/components_ vamos criar um componente que vai representar o layout da página, ele irá se chamar _Layout_. Dentro desse arquivo vamos criar um componente funcional:

``` JSX
export default function Layout(props) {
  return (
    <div>
      
    </div>
  )
}
```

- Em seguida, vamos importar o _Link_ do _next/link_ e vamos definir um link que irá voltar para o home da nossa aplicação:

``` JSX
import Link from "next/link"

export default function Layout(props) {
  return (
    <div>
      <Link href="/">Voltar</Link>

    </div>
  )
}
```

- E depois vamos passar um conteúdo para esse componente Layout... como assim? Queremos pegar o conteúdo de outro componente e renderizar na tela. Por exemplo, vamos importar o componente _Layout_ que contém o link de voltar para o home dentro do componente _Estiloso_ e vamos envolver o conteúdo desse componente _Estiloso_ com o componente _Layout_ que importamos, para ele ter sem precisarmos criar manualmente o botão/link de voltar para o home:

``` JSX
import Layout from "../components/Layout"
import styles from "../styles/Estiloso.module.css"

export default function Estiloso() {
  return (
    <Layout>
      <div className={styles.roxo}>
        <h1>Componente para teste de CSS Modularizado</h1>
      </div>
    </Layout>
  )
}
```

- Só que, se acessarmos a url do componente _Estiloso_ vamos notar que só está sendo renderizado o que está no componente _Layout_, ou seja, o link voltar. Isso ocorre, pois é necessário informar dentro do componente _Layout_ que desejamos renderizar o conteúdo que foi passado dentro dele através dos componentes filhos(props.children):

``` JSX
import Link from "next/link"

export default function Layout(props) {
  return (
    <div>
      <Link href="/">Voltar</Link>
      {props.children}
    </div>
  )
}
```

- Vamos criar uma folha de estilo para layout dentro de _src/styles_ com o nome _Layout.module.css_ e vamos referênciar esse arquivo como _styles_ dentro do seu componente:

``` JSX
import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div>
      <Link href="/">Voltar</Link>
      {props.children}
    </div>
  )
}
```

- Desse modo, podemos criar uma classe e referênciar ela como _styles.nome-classe_, que nesse caso o nome da classe será layout:

``` JSX
import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <Link href="/">Voltar</Link>
      {props.children}
    </div>
  )
}
```

- E podemos selecionar essa classe no arquivo _Layout.module.css_ e aplicar algumas propriedades de estilo:

``` CSS Layout.module.css
.layout {
  
}
```

- Dentro dela vamos aplicar uma altura/_height_ de _100vh_ para que o componente ocupe todo o espaço disponível, além disso, vamos definir o _display_ como _flex_ e alterar o _flex-direction_ para _column_:

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100vh;
}
```

- Feito isso, vamos voltar no arquivo do componente _Layout_ e vamos dividir o componente em duas partes, uma que vai conter o cabeçalho com os links e outra parte que vai conter o conteúdo, ambas as partes terão suas próprias classes CSS:

``` JSX
import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}
```

- Em seguida, e essa classe _cabecalho_ que criamos para o cabeçalho vamos selecionar ela dentro da folha de estilo e iremos aplicar um _background-color_ e mudar o _display_ para _flex_ e o _justify-content_ como _flex-end_ para alinhar o texto do cabeçalho todo para a direita, e um _padding_ no eixo y(vertical) de _10px_ e no eixo x(horizontal) de _20px_:

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100vh;
}

.cabecalho {
  display: flex;
  justify-content: flex-end;

  padding: 10px 20px;

  background-color: #777;
}
```

- E um ponto importânte sobre o componente _Link_ que gera os links(que se encontra dentro do _Layout_) é que por trás dos panos é gerado um link/tag _a_ automáticamente, então podemos usar essa tag _a_ para aplicarmos estilo CSS nele... e vamos aplicar um _background-color_ e aplicar um _padding_ no eixo y(vertical) de _5px_ e no eixo x(horizontal) de _12px_, além disso, definir uma _border-radius_ de _5px_:

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100vh;
}

.cabecalho {
  display: flex;
  justify-content: flex-end;

  padding: 10px 20px;

  background-color: #777;
}

.cabecalho a {
  background-color: coral;

  padding: 5px 12px;
  border-radius: 5px;
}
```

- Em seguida, vamos usar a classe _conteudo_ que criamos para o conteúdo, iremos aplicar um _padding_ de _25px_ em todas as direções:

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.cabecalho {
  display: flex;
  justify-content: flex-end;

  padding: 10px 20px;

  background-color: #777;
}

.cabecalho a {
  background-color: coral;

  padding: 5px 12px;
  border-radius: 5px;
}

.conteudo {
  padding: 25px;
}
```

- Vamos voltar para o arquivo _Layout.jsx_ e vamos inserir um texto/titulo no cabeçalho, e vamos receber ele via _props_ e se não for passado nenhum parâmetro para esse _titulo_ por padrão vai ser inserido no _h1_ o texto "Mais um exemplo":

``` JSX
import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{props.titulo ?? "Mais um exemplo"}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}
```

- E dentro do arquivo do componente _Estiloso_ vamos passar via _props_ o titilo através do componente _Layout_(componente pai):

``` JSX
import Layout from "../components/Layout"
import styles from "../styles/Estiloso.module.css"

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={styles.roxo}>
        <h1>Componente para teste de CSS Modularizado</h1>
      </div>
    </Layout>
  )
}
```

- E na folha de estilho de _Layout_ onde tem a class _cabecalho_ e _h1_ vamos zerar a _margin_ e o tamanho da fonte _font-size_ vai ser _1.4rem_:

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.cabecalho {
  display: flex;
  justify-content: flex-end;

  padding: 10px 20px;

  background-color: #777;
}

.cabecalho h1 {
  margin: 0;

  font-size: 1.4rem;
}

.cabecalho a {
  background-color: coral;

  padding: 5px 12px;
  border-radius: 5px;
}

.conteudo {
  padding: 25px;
}
```

- E vamos alterar o _justify-content_ do _cabecalho_ para _space-between_, desse modo ele vai organizar os elementos um mais a esquerda(h1) e outro mais a direita(Link):

``` CSS Layout.module.css
.layout {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.cabecalho {
  display: flex;
  justify-content: space-between;

  padding: 10px 20px;

  background-color: #777;
}

.cabecalho h1 {
  margin: 0;

  font-size: 1.4rem;
}

.cabecalho a {
  background-color: coral;

  padding: 5px 12px;
  border-radius: 5px;
}

.conteudo {
  padding: 25px;
}
```

## Componente Navegador

- Temos os nossos Link dentro do _index_, só que queremos aplicar estilo nele, o ideial é que a gente o coloque dentro de um componente, para isso vamos criar um componente chamado _Navegador_ dentro de _src/components_, e esse componente será um componente funcional:

``` JSX
export default function Navegador(props) {
  return (
    
  )
}
```

- E vamos encapsular dentro desse componente o _Link_ que temos dentro de _index.jsx_:

``` JSX
import Link from "next/link"

export default function Navegador(props) {
  return (
      <Link href="/estiloso">
        Estiloso
      </Link>
  )
}
```

- E dentro do arquivo _index.jsx_ ao invés de chamar diretamente o _Link_ vamos chamar esse componente _Navegador_ que contém os links:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div>
      <Navegador />
    </div>
  )
}
```

- Agora, iremos trabalhar com as propriedades e aprimeira coisa que vamos modificar é que agora vamos receber o _href_ via _props_ através do atributo _destino_, bem como o texto desse link via o atributo _texto_:

``` JSX
import Link from "next/link"

export default function Navegador(props) {
  return (
      <Link href={props.destino}>
        {props.texto}
      </Link>
  )
}
```

- E vamos passar tanto o _href_ quanto o _texto_ do link via props onde estamos renderizado esse componente _Navegador_(no arquivo _index_):

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div>
      <Navegador destino="/estiloso" texto="Estiloso"/>
    </div>
  )
}
```

- Em seguida, vamos criar uma folha de estilo para o componente _Navegador_ dentro de _src/styles_ chamado _Navegador.module.css_. E vamos referênciar esse arquivo CSS dentro de _Navegador.jsx_ como _styles_:

``` JSX
import Link from "next/link"

import styles from "../styles/Navegador.module.css"

export default function Navegador(props) {
  return (
      <Link href={props.destino}>
        {props.texto}
      </Link>
  )
}
```

- Agora temos a possibilidade de definir algumas classes. Vamos inserir uma _div_ dentro do _Link_ para aplicarmos uma classe chamada _navegador_(styles.navegador):

``` JSX
import Link from "next/link"

import styles from "../styles/Navegador.module.css"

export default function Navegador(props) {
  return (
      <Link href={props.destino}>
        <div className={styles.navegador}>
          {props.texto}
        </div>
      </Link>
  )
}
```

- E vamos usar essa classe _navegador_ dentro da folha de estilo _Navegador.module.css_. E vamos aplicar um _background-color_ e um _padding_ de _30px_ em todas as direções:

``` CSS Navegador.module.css
.navegador {
  background-color: blueviolet;

  padding: 30px;
}
```

- E no arquivo _index.css_ vamos definir alguns estilos interno dentro da propria propriedade _style_. 
Assim vamos mudar o _display_ para _"flex"_, e definir uma altura/_height_ de _100vh_ e o _justifyContent_(não pode ter iffen dentro do arquivo JS) vamos mudar para _"center"_ , o _alingItems_ para _"center"_ também, além disso, vamos informar que queremos permitir quebra de linha com a propriedade _flexWrap_ como _"wrap"_:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX"/>
    </div>
  )
}
```

- E vamos voltar dentro da folha de estilo do _Navegador_ e definir uma _margin_ de _10px_ para que os links não fiquem grudados. Além disso, podemos definir um _border-radius_ de _8px_ para que o link tenha uma borda arredondada, além disso para quando passar o cursor do mouse sobre os links fique claro que se trata de um link/algo clicável, vamos inserir a propriedade _cursor_ com o valor _pointer_:

``` CSS Navegador.module.css
.navegador {
  background-color: blueviolet;

  margin: 10px;
  padding: 30px;
  border-radius: 8px;

  cursor: pointer;
}
```

- E a última coisa que vamos alterar no estilo é... ao invés de passarmos a cor do _background-color_ diretamente, podemos voltar no componente Navegador e aplicar um estilo/_style_ de forma dinâmica, caso ele receba a cor via props/_props.cor_ ele vai usar a que ele recebe, caso contrário ele vai usar a cor padrão definida:

``` JSX
import Link from "next/link"

import styles from "../styles/Navegador.module.css"

export default function Navegador(props) {
  return (
      <Link href={props.destino}>
        <div className={styles.navegador} style={{
          backgroundColor: props.cor ?? "blueviolet"
        }}>
          {props.texto}
        </div>
      </Link>
  )
}
```

- Agora, se voltarmos no arquivo _index_ podemos além de passar o _href_ e o _texto_ via props para o destino, podemos também passar a _cor_ para o background:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
    </div>
  )
}
```

- Para finalizar, vamos envolver com o componente _Layout_(assim como fizemos com o componente estiloso) todos os outros componentes(jsx, exemplo) que estão sendo renderizados através do Link:

``` JSX
import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (
    <Layout titulo="Usando Componente">
      <Cabecalho titulo="Título 1"/>
      <Cabecalho titulo="Título 2"/>
    </Layout>
  )
}
```

``` JSX
import Layout from "../components/Layout"

export default function Jsx() {
  const a = 2
  const b = 3
  const subtitulo = <h2>Teste</h2>
  
  return (
    <Layout titulo="Entendo o JSX">
      <h1>JSX é um conceito central</h1>
      {subtitulo} {/* acessando o trecho JSX da constante subtitulo */}
      <h3>{a * b}</h3> {/* vai ser feito a multiplicação e o resultado vai ser renderizado em tela */}
    </Layout>
  )
}
```

## Navegação Simples

- Uma coisa que podemos fazer é criar uma pasta dentro de _src/pages_ chamada _navegacao_ por exemplo, e dentro dela criar um arquivo _index.jsx_ com um componente funcional chamado _Navegacao_:

``` JSX
import Layout from "../../components/Layout"

export default function Navegacao() {
  return (
    <Layout titulo="Exemplo de Navegação #01">
      <h1>Navegação #01</h1>
    </Layout>
  )
}
```

- E quando formos  referênciar a url desse componente dentro de _src/pages/index.jsx_ em um novo componente _Navegador_ podemos acessar diretamente através de _/navegacao_, não sendo necessário acessar por _navegacao/index_, pois só o _"/"_ acessa diretamente o index, como fazemos com a home/_index_ principal da nossa aplicação:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/> {/*como se destino fosse assim: destino="/navegacao/index"*/}
    </div>
  )
}
```

## Navegação Dinâmica/Por id

- A navegação dinâmica é últil quando queremos acessar por exemplo um cliente por código. Para entendermos melhor, vamos criar dentro de _src/pages_ uma pasta chamada _cliente_ e dentro dela vamos criar um arquivo _[código].jsx_(o par de chaves é para deixar a url desse código dinâmica e o valor dentro do par de chaves vai ser o nome do parâmetro que ele vai receber). Em seguida, dentro dele vamos criar um componente funcional:

``` JSX
export default function ClientePorCodigo(props) {
  return (
    
  )
}
```

- Dentro desse componente vamos importar o componente _Layout_ e referenciar passando o atributo _titulo_ para ele:

``` JSX
import Layout from "../components/Layout"

export default function ClientePorCodigo(props) {
  return (
    <Layout titulo="Navegação dinâmica">

    </Layout>
  )
}
```

- E dentro dele vamos criar um _span_ para exibir o código desse cliente:

``` JSX
import Layout from "../components/Layout"

export default function ClientePorCodigo(props) {
  return (
    <Layout titulo="Navegação dinâmica">
      <span>Código = ?????</span>
    </Layout>
  )
}
```

- E no arquivo _index.jsx_ vamos duplicar o componente _Navegador_ e referenciar a url desse novo componente como _/cliente/1, o _1_ será o código do cliente:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/> 
      <Navegador destino="/cliente/1" texto="Navegação #02" cor="pink"/> 
    </div>
  )
}
```

- E como podemos acessar esse valor, esse código do cliente que está sendo enviado pela rota? Vamos importar o hook _useRouter_ de dentro do _nex/router_ e ele irá nos ajudar a ter acesso ao valor. Vamos criar uma constante chamada _router_ e ela irá receber o _useRouter()_:

``` JSX
import Layout from "../../components/Layout"

import { useRouter } from "next/router"

export default function ClientePorCodigo(props) {
  const router = useRouter()
  
  return (
    <Layout titulo="Navegação dinâmica">
      <span>Código = ?????</span>
    </Layout>
  )
}
```

- Se olharmos no console o que essa instância _router_ está retornando, podemos notar que está retornando um objeto e que o código está dentro do _query_ no atributo _codigo_, desse modo podemos acessar o valor do _codigo_ assim _router.query.codigo_:

``` JSX
import Layout from "../../components/Layout"

import { useRouter } from "next/router"

export default function ClientePorCodigo(props) {
  const router = useRouter()
  console.log(router)
  
  return (
    <Layout titulo="Navegação dinâmica">
      <span>Código = {router.query.codigo}</span>
    </Layout>
  )
}
```

## Componente com Estado

- Para entendermos melhor, vamos criar um componente chamdo _estado.jsx_ dentro de _src/pages_ e esse componente vai ser um componente funcional:

``` JSX
import Layout from "../components/Layout"

export default function Estado(props) {
  return (
    <Layout titulo="Componente com Estado">
      
    </Layout>
  )
}
```

- E em seguida, no arquivo _index_ da aplicação vamos criar mais um componente _Navegador_ o qual vai receber no atributo _destino_ a url _/estado_:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/> 
      <Navegador destino="/cliente/1" texto="Navegação #02" cor="hotpink"/> 
      <Navegador destino="/estado" texto="Componente com Estado" cor="coral"/> 
    </div>
  )
}
```

- Agora, vamos aprendender a definir um componente com estado interno... 
Vamos usar o hook _useState_ e para isso vamos importar o hook _useState_ do React. Agora conseguimos criar estado dentro do nosso componente, mas ao invés de simplesmente criarmos uma variável colocando o valor dela, vamos chamar o _useState_ e passar o valor inicial:

``` JSX
import { useState } from "react"

import Layout from "../components/Layout"

export default function Estado(props) {

  const state = useState(0)

  return (
    <Layout titulo="Componente com Estado">

    </Layout>
  )
}
```

- Só que essa função vai retornar um array com duas possições, a primeira possição vai ser o _valor inicial_ e a segunda posição vai ser uma _função que vai ser usada para alterar esse valor_. Como bem sabemos podemos usar atribuição via desestruturação (destructuring assignment). Ex.: const [a, b] = [1, 2], fica assim, a=1 e b=2. Desse modo, vamos usar o destructuring para receber os dois valores do array que _useState_ retorna:

``` JSX
import { useState } from "react"

import Layout from "../components/Layout"

export default function Estado(props) {

  const [state, setState] = useState(0)

  return (
    <Layout titulo="Componente com Estado">

    </Layout>
  )
}
```

- E para usarmos a função(_setState_) que altera o valor de _state_... vamos criar uma função _incrementar_ e essa função vai chamar a função _setState_ que vai pegar valor atual(_state_) + 1:

``` JSX
import { useState } from "react"

import Layout from "../components/Layout"

export default function Estado(props) {

  const [state, setState] = useState(0)

  function incrementar() {
    setState(state + 1)
  }

  return (
    <Layout titulo="Componente com Estado">

    </Layout>
  )
}
```

- Agora, para visualizarmos a alteração acontecendo... vamos criar uma _div_ e vamos interpolar o valor de _state_:

``` JSX
import { useState } from "react"

import Layout from "../components/Layout"

export default function Estado(props) {

  const [state, setState] = useState(0)

  function incrementar() {
    setState(state + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{state}</div>
    </Layout>
  )
}
```

- Em seguida, vamos criar um _button_ o qual vai chamar o evento _onClick_ quando ele for acionado. E esse evendo _onClick_ irá chamar chamar a função de _incrementar_:

``` JSX
import { useState } from "react"

import Layout from "../components/Layout"

export default function Estado(props) {

  const [state, setState] = useState(0)

  function incrementar() {
    setState(state + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{state}</div>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}
```

## Usando API #01

A priori vamos trabalhar com o arquivo _hello.js_ que encontramos dentro de _src/pages/api_. 
E uma coisa que vamos mexer nesse arquivo, é retornar uma informação _metodo_ que é exatamente o _método http_ que foi utilizado para fazer a requisição. Essa é uma das farmas dentro da API que conseguimos a partir de uma única URL tratar diferentes tipos de requisições(GET, POST, PUT...):

``` JS
export default function handler(req, res) {
  res.status(200).json({ 
    metodo: req.method,
    name: 'John Doe' 
  })
}
```

- Agora, vamos criar dentro de _pages/api_ uma pasta chamada clientes/_clients_ e dentro dela um arquivo chamado _index.js_;

- Dentro desse arquivo que criamos no passo anterior, vamos criar uma funcão _handle_ que vai receber como parãmetro a requisiçaõ/_req_ e a resposta/_res_ e vamos exportá-la por padrão/_export default_:

``` JS
export default function handler(req, res) {
  
}
```

- Normalmente vamos precisar ao menos usar a _res_ para retornar algo para quem fez a requisição, vamos retornar a resposta com o status code 200 (_res.json(200)_ e vamos usar o _.send()_ no final para que essa mensagem seja enviada:

``` JS
export default function handler(req, res) {
  res.status(200).send()
}
```

- Também podemos retornar um JSON com os dados do cliente(_res.status(200).json({})_):

``` JS
export default function handler(req, res) {
  res.status(200).json({
    id: 3,
    nome: 'Nathallye',
    age: 23
  })
}
```

- Podemos também usar estruturas condicionais para verificar qual o método e retornar de acordo com o que foi solicitado na requisição:

``` JS
export default function handler(req, res) {
  if(req.method === 'GET') {
    handleGet(req, res) // caso o metodo seja igual a GET será chamada a função handleGET passando os parâmetros de requisição/req e resposta/res
  } 
}

function handleGet(re, res) { // nesse caso colocamos o retorno da requição GET em uma função própria
  res.status(200).json({
    id: 3,
    nome: 'Nathallye',
    age: 23
  })
}
```

- E caso o método solicitado não esteja definido vamos retornar o status code 405(url não suportada):

``` JS
export default function handler(req, res) {
  if(req.method === 'GET') {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(re, res) {
  res.status(200).json({
    id: 3,
    nome: 'Nathallye',
    age: 23
  })
}
```

## Usando API #02

- Para obtermos informações a partir da query(parâmetros passados na url) podemos criar um arquivo dentro de _src/pages/api/clients_ com url dinâmica chamado _[codigo].js_ os _[]_ garantem que a url vai ser dinâmica.
E dentro desse arquivo vamos definir uma função, do mesmo modo que já definimos anteriormente:

``` JS
export default function handler(req, res) {
  res.status(200).json({

  })
}
```

- Como vamos receber um código dinâmicamente, podemos retornar nesse json o _codigo_ que vamos receber a partir requisição de dentro da query/_req.query.codigo_:

``` JS
export default function handler(req, res) {
  // exemplo de requisição: GET Http://localhost:3000/api/clients/1
  res.status(200).json({
    codigo: req.query.codigo // retorno: {"codigo": "1"}
  })
}
```

## Integração do Font-end com API

- Para isso, vamos criar um arquivo chamado _integracao.jsx_ dentro do diretório _src/pages_;

- Dentro desse arquivo vamos criar um componente funcional chamdo _Integracao_, seguindo o mesmo padrão que já vimos/criamos anteriormente:

``` JSX
import Layout from "../components/Layout"

export default function Integracao() {
  return (
    <Layout>

    </Layout>
  )
}
```

- E dentro desse componente, vamos acessar as informações que estão no Back-end(API), nesse caso só é um objeto, mas poderia ser um array de objetos.
E para obtermos essas informações do back-end iremos trabalhar com assíncronismo... poderiamos instalar a biblioteca _axel_ que é um cliente http que é o muito utilizado, mas nesse caso vamos utilizar o proprio _fetch_ para obter essas informações:

``` JSX
import Layout from "../components/Layout"

export default function Integracao() {

  fetch('')

  return (
    <Layout>

    </Layout>
  )
}
```

- A url que precisamos para obter o _cliente 1_ é essa _http://localhost:3000/api/clients/1_, e vamos colocar dentro do _fetch_ e isso vai retornar uma promisse, de tal forma se fizermos _.then()_ vamos ter uma resposta _.then(res)_ e assim podemos chamar a resposta e pegar o json dessa resposta _.then(res => resp.json())_ que é uma promisse:

``` JSX
import Layout from "../components/Layout"

export default function Integracao() {

  fetch('http://localhost:3000/api/clients/1')
    .then(resp => resp.json())

  return (
    <Layout>

    </Layout>
  )
}
```

- E no segundo _.then_ vamos ter acesso aos _dados_ e podemos mostrar esses _dados_ através do console.log. E tudo isso que está nesse _fetch_ vai acontecer de forma assíncrona:

``` JSX
import Layout from "../components/Layout"

export default function Integracao() {

  fetch('http://localhost:3000/api/clients/1')
    .then(resp => resp.json())
    .then(dados => console.log(dados))

  return (
    <Layout>

    </Layout>
  )
}
```

- Agora, dentro de _src/pages/index.jsx_ e vamos criar um link para conseguirmos acessa esse componente _integracao_:

``` JSX
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/> 
      <Navegador destino="/cliente/1" texto="Navegação #02" cor="hotpink"/> 
      <Navegador destino="/estado" texto="Componente com Estado" cor="coral"/> 
      <Navegador destino="/integracao" texto="Integração com API" cor="lightSteelBlue"/> 
    </div>
  )
}
```

- E vamos criar uma tabela/_ul_ e itens/_li_ para inserir as informações:

``` JSX
import Layout from "../components/Layout"

export default function Integracao() {

  fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => console.log(dados))

  return (
    <Layout titulo="Integração com API">
      <ul>
        <li>Código: </li>
        <li>Nome: </li>
        <li>E-mail: </li>
      </ul>
    </Layout>
  )
}
```

- Para ter essas informações definidas na nossa aplicação vamos precisar criar um estado o qual vai receber um objeto vazio _[client, setClient] = useState({})_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [client, setClient] = useState({})

  fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => console.log(dados))

  return (
    <Layout titulo="Integração com API">
      <ul>
        <li>Código: </li>
        <li>Nome: </li>
        <li>E-mail: </li>
      </ul>
    </Layout>
  )
}
```

- E vamos chamar o _setClient_ quando uma requisição for feita passando os _dados_ recebidos que são justamente os dados dos clientes que recebemos na requisição:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [client, setClient] = useState({})

  fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))

  return (
    <Layout titulo="Integração com API">
      <ul>
        <li>Código: </li>
        <li>Nome: </li>
        <li>E-mail: </li>
      </ul>
    </Layout>
  )
}
```

- E para chamarmos esse _fetch_ a partir do click de um botão vamos colocar ele dentro de uma função a qual se chamará _getClient_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }
  
  return (
    <Layout titulo="Integração com API">
      <ul>
        <li>Código: </li>
        <li>Nome: </li>
        <li>E-mail: </li>
      </ul>
    </Layout>
  )
}
```

- E vamos criar um _input_ do tipo _number_ e um _button_ que vai receber o evento de _onClick_ o qual quando capturar o click do usuário no botão vai chamar a função _getClient_ e quando esse cliente for obtido essa função vai chamar _setClient_ passando os _dados_ e irá alterar o estado do objeto _cliente_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input type="number" />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: </li>
        <li>Nome: </li>
        <li>E-mail: </li>
      </ul>
    </Layout>
  )
}
```

- Agora, vamos interpolar na tabela as informações do _client_ que iremos obter através das requisições:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input type="number" />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

- Por hora, se clicarmos no "Obter Cliente" ele só irá trazer as informações do nosso cliente com o código 1, que especificações no _fetch_. 
Como fazemos para que inserindo um código no _input_ seja retornado as informações do cliente com esse determinado código? Basicamente, vamos precisar criar um outro estado para guardarmos esse informação do _codigo_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [codigo, setCodigo] = useState(1)
  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input type="number" />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

- E vamos associar _codigo_ ao valor do _input_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input type="number" value={code}/>
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

- E para conseguirmos alterar o valor de _codigo_ vamos inserir o evento _onChange_ para quando houver uma mudança ele vai pegar o próprio evento/_e_ e obter o valor a partir de _e.target.value_ e passar para o _setCodigo_ para alterar o estado do objeto _codigo_:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  function getClient() {
    fetch("http://localhost:3000/api/clients/1")
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input 
          type="number" 
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

- Agora que temos o valor do código, podemos usar uma template string para considerar o uso no código na chamada da API:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  function getClient() {
    fetch(`http://localhost:3000/api/clients/${code}`)
    .then(resp => resp.json())
    .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input 
          type="number" 
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

- Outra possibilidade que temos é tratar a função como _async_, e com isso vamos escrever o código um pouco diferente.
Vamos ter uma constante resposta/_resp_ que recebe o _await_ chamando o _fetch_ que recebe a url da requisição, o _await_ significa que ele tem que esperar e somente quando ele finalizar essa chamada ele passa para a próxima linha. 
E a próxima linha, teremos uma constante _dados_ que recebe _await_ retornando a resposta em json _resp.json_, e somente quando _dados_ estiver pronto essa ele passa para a próxima linha, e por fim, irá chamar o _setCliente_ passando os _dados_ obtidos:

``` JSX
import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  async function getClient() {
    const resp = await fetch(`http://localhost:3000/api/clients/${code}`)
    const dados = await resp.json()
    setClient(dados)

    // fetch(`http://localhost:3000/api/clients/${code}`)
    // .then(resp => resp.json())
    // .then(dados => setClient(dados))
  }

  return (
    <Layout titulo="Integração com API">
      <div>
        <input 
          type="number" 
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button onClick={getClient}>Obter Cliente</button>
      </div>

      <ul>
        <li>Código: {client.codigo}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  )
}
```

## Modelos de Pré-renderização

Documentação: https://nextjs.org/docs/basic-features/pages.

Na documentação do Next.js em recuros básicos, encontramos informações do que ele chama de _pre-rendering_ e ele informa que por padrão o Next.js pré-renderiza cada uma das páginas da aplicação. E ele trabalha com duas formas de pré-renderizações, que são renderizações que acontecem do lado do servido e isso gera um impacto de desempenho muito grande.

- Conteúdo gerado do lado do cliente:

Nessa imagem temos o lado do cliente/_C_ e o lado do servidor/_S_, quando temos o conteúdo gerado do lado do cliente básicamente o que vai acontecer é que do lado do cliente vai ser feita uma requisição para o servidor, o servidor vai retornar uma página HTML. E dentro dessa página HTML vai ter um código JavaScript e esse código _JS_ será responsável por gerar todo o conteúdo dinâmicamente dentro do browser do usuário. Esse é o cenário que precisamos ter apenas uma única página HMTL, pois estamos trabalhando com aplicação _SPA_(Single Page Application/ Aplicativo de página única):

![image](images/SPA.jpeg)

Esse modelo também é suportado pelo Next.js, mas não cai em nenhum desses dois cenários que ele chama de _pre-rendering_.

- Conteúdo gerado do lado do servidor:

Nessa imagem da mesma forma que no anterior, temos o lado do cliente/_C_ e o lado do servidor/_S_, e teremos uma requisição e uma resposta para essa requisição. E essa requisição e essa resposta vai depender do tipo de conteúdo que vamos gerar, o que reflete no tipo de _pre-rendering_:

![image](images/SSG1.jpeg)

Vamos trabalhar na primeira opção que é Geração de Conteúdo Estática/_Static Generation_, que inclusive é a recomendada... Nesse cenário, durante o momento que rodarmos o comando `npm run build` ele vai gerar a aplicação para produção, e ele vai informar que aconteceu um _Warning_ e dentro de _Navegador.jsx_ temos que passar a referência _passHref_ que ele vai passar isso para dentro de um link, colocando essa propriedade ele já não vai mais gerar a advertência e dessa forma vamos gerar novamente o build com o comando `npm run build` e nesse modendo que ele está gerando o build é que ele vai gerar o conteúdo estático, e básicamente o que ele vai gerar é um arquivo HTML e esse conteúdo será servido de forma estática e será reusado a cada requisição.
Basicamente o que acontece, é que do lado do servidor foi gerado uma página HTML de forma estática e sempre que o cliente fizer uma requisição ele vai devolver esse arquivo pronto. Nesse cenário estamos trabalhando com aplicação _SSG_(Static Site Generator/ Geração de Site Estático):

![image](images/SSG2.jpeg)


## CRUD usando o Next.js

- Projeto disponível no repositório: https://github.com/nathallyet/next-crud
