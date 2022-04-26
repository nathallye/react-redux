# React Hooks

É uma adição que foi feita a partir do react 16.8 que faz com que a gente consiga trabalhar com componentes funcionais de uma forma mais completa. 

## Projeto base

### Criação do projeto

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app hooks
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd hooks
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

- E vamos excluir a pasta src criada do nosso projeto, e colar a que o instrutor do curso disponibilizou, já que essa aula é foca em Hooks.

## useState #01

- Vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseState_. Temos um componente funcional seguibndo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  return (
    <div className="UseState">
      <PageTitle // componte PageTitle recebe dois parâmetros via props: title e subtitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseState;
```

- A primeira coisa que vamos fazer, vai ser criar um estado dentro de um componente funcional. Antes dos hooks não tinhamos essa possibilidade. 
Vamos criar uma _constante x_ que recebe a função _useState_ e vamos passar como parâmetro para essa função o _valor inicial_. Vamos criar o que é basicamente o "Olá mundo!" do useState, que é um contador, portanto, o valor inicial vai ser _0_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  const x = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseState;
```

- Só que, na verdade o useState retorna um array com dois valores. O primeiro valor é referênte ao valor inicial do estado, e o segundo valor é referente a uma função que vai alterar o valor/estado do objeto em questão.
Como bem sabemos, podemos usar atribuição via desestruturação (destructuring assignment). Ex.: const [a, b] = [1, 2], fica assim, a=1 e b=2. 
Desse modo, vamos usar o destructuring para receber os dois valores do array que _useState_ retorna:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseState;
```

- Visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Para visualizarmos o valor da _variável count_, primeiramente vamos criar uma _div_ com o className _center_(para aplicar as propriedades CSS já criadas no arquivo index.css):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Em seguida, dentro da _div_ vamos criar um elemento _span_ com o className _text_(para aplicar as propriedades CSS já criadas no arquivo index.css) e dentro do _span_ vamos interpolar o valor para apontar _count_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span> {/* vai ser exibido o valor 0 */}
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Agora vamos criar os botões para incrementar +1 e decrementar -1. Vamos criar dois elementos _button_ com o className _btn_(para aplicar as propriedades CSS já criadas no arquivo index.css):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <button className="btn">-1</button>
        <button className="btn">+1</button>
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Podemos notar que os ficaram um embaixo do outro, isso ocorre porque a classe _center_ que está aplicada na div tem o _display flex_ e o _flex-direction column_. Para mudar esse comportamento, para o alinhamento em _row_ vamos envolver os botões com uma _div_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn">-1</button>
          <button className="btn">+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Agora, vamos adicionar o evento _onClick_ e criar uma arrow function, para quando essa função for chamada ela irá chamar a função _setCount_, que vai pegar o contador atual +/- 1:

``` JavaSCript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

## useState #02

- Agora, na parte dois do nosso exercício vamos alterar o valor/estado do elemento via input. Vamos criar um estado, dessa vez _useState_ vai receber uma string vazia, ou seja, o valor inicial de _name_ vai ser essa string vazia:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
    </div>
  )
}

export default UseState;
```

- Em seguida, vamos criar um elemento _input_ com o className _input_(para aplicar as propriedades CSS já criadas no arquivo index.css):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input type="text" className="input" />

    </div>
  )
}

export default UseState;
```

- E agora, como fazer para vincular o valor desse input? No atributo _value_ do input vamos apontar para o valor que está na constante _name_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("teste");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input type="text" className="input" value={name}/>

    </div>
  )
}

export default UseState;
```

- Podemos notar que no navegador o input está exibindo o _valor inicial de name_. Mas como é um _componente controlado_ não conseguimos alterar o valor do input. O que ele chama de verdade absoluta são os dados, ou seja, o estado do componente não mudou, não foi chamada em nenhum momento a função _setName_ para mudar o dado. 
Resumindo, não conseguimos mudar o estado de um componente diretamente a partir da interface, primeiro temos que mudar o estado, para quando esse estado mudar aí sim conseguimos refletir essa mudança na interface gráfica.
O caminho é unidirecional, o estado muda e altera a interface gráfica. A interface gráfica não altera o estado(isso acontece indiretamente a partir dos eventos).
Link documentação: https://pt-br.reactjs.org/docs/forms.html.

- Então, nesse caso, como conseguimos alterar o valor do input?
Podemos mudar ele pegando o evento _onChange_, esse evento vai ser chamado toda vez que digitarmos:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("teste");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input type="text" className="input" 
        value={name} onChange={}
      />

    </div>
  )
}

export default UseState;
```

- O _onChange_ recebe como parâmetro um evento(e) e quando esse evento for chamado, a priori vamos acessar o _target.value_ do evento(e) e exibir no console:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("teste");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input type="text" className="input" 
        value={name} onChange={e => console.log(e.target.value)} // O target.value nada mais é do é a propriedade value de algum elemento DOM, neste caso significa o texto inserido na entrada de pesquisa.
      />

    </div>
  )
}

export default UseState;
```

- Mas o que estamos escrevendo ainda não reflete na mudança de estado do name. Para isso, vamos chamar a função que usamos para alterar o estado, _setName_, e passar a estrada do teclado(_e.target.value_), desse modo as alterações vão refletir na interface:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("teste");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input type="text" className="input" 
        value={name} onChange={e => setName(e.target.value)}
      />

    </div>
  )
}

export default UseState;
```

## useEffect


