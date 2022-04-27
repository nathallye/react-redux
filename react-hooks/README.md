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

- Vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseState_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

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

Permite executar efeitos colaterais em componentes funcionais!

- Para entendermos melhor como isso funciona, vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseEffect_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseEffect = (props) => {
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
    </div>
  )
}

export default UseEffect;
```

- A ideia vai ser criarmos um input do tipo number, para que a gente possa vincular esse número ao estado do nosso componente. Vamos usar o _useState_ com o valor inicial 1 e as variável que vai receber o valor inicial vai se chamar _number_ e a variável que vai receber a função que vai alterar o valor do number vai se chamar _setNumber_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
    </div>
  )
}

export default UseEffect;
```

- Visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      
    </div>
  )
}

export default UseEffect;
```

- Em seguida, vamos criar um elemento _input_ do type _number_ com o className _input_(para aplicar as propriedades CSS já criadas no arquivo index.css). E no atributo _value_ do input vamos apontar para o valor que está na constante _number_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <input type="number" className="input" value={number} />
    </div>
  )
}

export default UseEffect;
```

- Podemos notar que no navegador o input está exibindo o _valor inicial de number_. Mas como é um _componente controlado_ não conseguimos alterar o valor do input. O que ele chama de verdade absoluta são os dados, ou seja, o estado do componente não mudou, não foi chamada em nenhum momento a função _setNumber_ para mudar o dado. 
Resumindo, não conseguimos mudar o estado de um componente diretamente a partir da interface, primeiro temos que mudar o estado, para quando esse estado mudar aí sim conseguimos refletir essa mudança na interface gráfica.
O caminho é unidirecional, o estado muda e altera a interface gráfica. A interface gráfica não altera o estado(isso acontece indiretamente a partir dos eventos).
Link documentação: https://pt-br.reactjs.org/docs/forms.html.

- Então, nesse caso, como conseguimos alterar o valor do input?
Podemos mudar ele pegando o evento _onChange_, esse evento vai ser chamado toda vez que digitarmos. O _onChange_ recebe como parâmetro um evento(e) e quando esse evento for chamado vamos chamar a função que usamos para alterar o estado(_setNumber_), e passar a estrada do teclado(_e.target.value_), desse modo as alterações vão refletir na interface:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
    </div>
  )
}

export default UseEffect;
```

- A outra parte que vamos fazer é exibir o valor fatorial do número inserido através do input. Ou seja, isso é efeito colateral, ao alterar o input, automáticamente vai ser feito um cálculo que vai alterar o resultado do fatorial desse number.
Primeiramente, vamos criar outro estado que vamos chamar de _factorial_ que vai receber o valor inicial igual a 1(já que o number também inicia como 1 e o fatorial de 1 é 1) e a sua função vai se chamar _setFactorial_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      <span className="text">{number}</span>
    </div>
  )
}

export default UseEffect;
```

- Vamos inserir um elemento _span_ com a classe _text_(para aplicar as propriedades CSS já criadas no arquivo index.css) com o label _"Fatorial:"_ e em seguida outro _span_ com as classes _text_ e _red_ e vamos interpolar nesse span o valor de _factorial_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <span className="text">Fatorial: </span>
      <span className="text red">{factorial}</span>

      <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
    </div>
  )
}

export default UseEffect;
```

- Só que queremos que esses dois valores do _span_ fiquem um do lado do outro, para isso, vamos envolve-los com uma _div_, dessa forma esses elementos vão ser colocados em linha/row:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div>
        <span className="text">Fatorial: </span>
        <span className="text red">{factorial}</span>
      </div>
      <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
    </div>
  )
}

export default UseEffect;
```

- Agora vamos criar uma função para calcular o valor do fatorial. Essa function vai se chamar _calcFatorial_ e essa função vai receber como parâmetro um número _n_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- O primeiro teste que vamos fazer é para garantir que não vai ser calculado o fatorial de número negativo, pois não existe. Então, vamos colocar uma condicional, se/_if_ o número/_n_ for menor/_<_ que _0_ vamos retornar _-1_(esse valor vai ser tratado dentro da interface):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  if(n < 0) return -1;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- O próximo teste vai ser se/_if_ o número/_n_ seja igual a _0_. Por definição o seu fatorial será igual a _1_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  if(n < 0) return -1;
  if(n === 0) return 1;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- E se o número passar por esses dois testes anteriores, podemos calcular o fatorial de forma correta. Vamos retornar a chamada recurssiva da própria função _calcFatorial_ e vamos passar como parâmetro _(n-1)_ e multiplicar pelo valor de _n_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  if(n < 0) return -1;
  if(n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- Mas não podemos apenas chamar a função que altera o valor do number(_setFatorial_) e passar a função callback _calcFatorial_ dentro dela, isso vai gerar multiplas alterações de estado e renderização, ocasionando um loop infinido. 
Para solucionar isso, vamos usar o hook _useEffect_, esse hook recebe dois parâmetros, o primeiro vai ser o que ele chama de _EffectCallback_, que nada mais é que uma função que será chamada quando ele for gerar esse "efeito colateral" e o segundo parâmetro(opcional) é a lista de dependências que ele chama de _DependencyList_:

``` JavaScript
import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  if(n < 0) return -1;
  if(n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  // setFatorial(calcFatorial(number));
  useEffect(function() { // function callback, que será chamada sempre que o number(number é o "DependencyList" - segundo parametro passado para a função) modificar
    setFactorial(calcFactorial(number)); // EffectCallback
  }, [number]) // DependencyList

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- Para que os calculos sejam feitos corretamente, vamos converter o valor que estamos recebendo como parâmetro na function _calFactorial_ para um valor inteiro usando o _parseInt_:

``` JavaSCript
import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if(n < 0) return -1;
  if(n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  // setFatorial(calcFatorial(number));
  useEffect(function() {
    setFactorial(calcFactorial(number));
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      
    </div>
  )
}

export default UseEffect;
```

- Podemos fazer uma condicional para exibir na interface "Fatorial: Não existe" quando o número for negativo. Usando um operador ternário, se fatorial for igual(===) a _-1_ então(?) exibir "Não existe" senão(:) exibir o próprio valor de _factorial_:

``` JavaScript
import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if(n < 0) return -1;
  if(n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  const [value, setValue] = useState(0);

  // setFatorial(calcFatorial(number));
  useEffect(function() {
    setFactorial(calcFactorial(number));
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial === -1 ? "Não existe" : factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseEffect;
```

## useRef #01

Retorna um objeto mutável com a propriedade .current!


