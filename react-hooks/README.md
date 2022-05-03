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

- Mas não podemos apenas chamar a função que altera o valor do number(_setFatorial_) e passar a função callback _calcFatorial_ dentro dela, isso vai gerar multiplas alterações de estado e renderizações, ocasionando um loop infinido. 
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

Retorna um objeto mutável com a propriedade .current! Ou seja, temos um objeto que tem dentro dele uma propriedade chamada _current_(atual) e dentro do valor da propriedade current temos o estado.

- Para entendermos melhor como isso funciona, vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseRef_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseRef = (props) => {
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
    </div>
  )
}

export default UseRef;
```

-  Visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props. 
E o primeiro objetivo vai ser criar uma _div_ com a className _center_ e dentro dessa div vamos criar um _input_ com a className _input_ e o _value_ desse input vamos vincular ao estado da constante _value1_(vamos criar usando o useState e inicializar o valor como uma string vazia("")):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="text" className="input" value={value1}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- E vamos usar o evento _onChange_ para alterar o estado do componente. Ele recebe como parâmetro um evento(e) e quando esse evento for chamado vamos chamar a função que usamos para alterar o estado(_setValue1_), e passar a estrada do teclado(_e.target.value_), desse modo as alterações vão refletir na interface:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- E agora, o que vamos fazer agora dentro desse componente? Queremos controlar a quantidade de vezes que esse componente ele é rendezirado. Então, para visualizarmos melhor isso, vamos criar um _span_ com a className _text_ que vai conter o texto "Valor: " e outro _span_ com a className _text_ o qual vamos interpolar o _value1_. Esses dois _span's_ vamos incluir dentro de uma div para ficarem na mesma linha/_row_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text red">{value1}</span>
        </div>

        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- O _useRef_, resumidamente ele vai retornar um objeto, e ele sempre vai retornar a mesma referência, ou seja, quando temos um objeto em js e atribuímos o valor desse objeto para uma variável e depois pegamos essa variável e atribuímos para outra variável, chamamos isso, de passagem por referência, por isso o nome do hook é _useRef_, justamente porque esse hook vai retornar a referência de um objeto, de tal forma que sempre vai retornar a mesma referência e conseguimos ter um estado dentro desse objeto a partir do atributo _current_.
E agora, queremos gerar um contador, que mostre a quantidade de vezes que o componente foi renderizado/o valor foi alterado. Vamos criar uma constante _count_ e vamos chamar o hook _useRef_ que vai retornar um objeto, que vai conter o valor inicial que vamos passar(ele vai se encontrar dentro do atributo .current). O valor inicial vai ser _0_:

``` JavaScript
import React, { useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const count = useRef(0);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1}</span>
        </div>

        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- O como fazemos agora para ter acesso ao valor de _count_? Primeiramente, vamos criar um elemento _span_ com as classes _text_ e _red_ e interpolar o valor de count. Ao invés de chamarmos diretamente _count_ vamos chamar _count.current_, desse modo, conseguimos acessar o valor que está armazenado dentro desse objeto já que _count_ é a referência do objeto e sempre que o componente for renderizado novamente vamos sempre ter acesso ao mesmo objeto/a mesma referência: 

``` JavaScript
import React, { useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const count = useRef(0);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- E como conseguimos alterar o valor do _count_ para que saibamos quantas vezes esse componente foi renderizado? Uma das diferenças em relação ao _useRef_ e o _useState_ é que quando o _ref_ é alterado não há a necessidade de renderizar novamente o componente, ou seja, podemos alterar o valor do atributo _current_ e isso não vai causar uma nova renderização do componente.
Daí o fato que conseguimos chamar diretamente o _count.current_ e alterar o seu valor incrementando +1(não vai ocasionar um loop infinito de renderizações), assim:

``` JavaScript
import React, { useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const count = useRef(0);

  count.current += 1;

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

- Mas, ele está chamando em todas as renderizações, independente se o _value1_ foi alterado ou não. 
Como queremos que o valor de _current_ seja alterado apenas quando o _value1_ for alterado, a forma mais correta de fazer isso é colocando dentro de um _useEffect_ e sempre que houver uma alteração no _value1_ o efeito colateral vai ser incrementar +1 em _count.current_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const count = useRef(0);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
  }, [value1])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>
    </div>
  )
}

export default UseRef;
```

## useRef #02

- A priori, visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props.
Em seguida, vamos criar uma _div_ com a class _center_, e dentro dela inserir um novo _input_ vinculando o _value_ desse input ao estado da constante _value2_(vamos criar usando o useState e inicializar o valor como uma string vazia("")). 
E vamos usar o evento _onChange_ para alterar o estado do componente. Sabemos que, ele como parâmetro um evento(e) e quando esse evento for chamado vamos chamar a função que usamos para alterar o estado(_setValue2_), e passar a estrada do teclado(_e.target.value_), desse modo as alterações vão refletir na interface:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
  }, [value1])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Podemos notar que quando digitamos no input vinculado ao _value2_ não gera nenhum efeito no contador/_count_. Para que esse efeito colateral seja gerado, vamos colocar o _value2_ na _DependencyList_ do _useEffect_, que irá chamar a função callback sempre que esses elementos da _lista de dependência_ forem alterados:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
  }, [value1, value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Existe uma forma de usarmos o _useRef_ para conseguimos pegar um determinado elemento do html. Existe uma propriedade chamada _ref_ e podemos apontar para dentro de um objeto que representa uma referência. 
Para isso, primeiramente vamos cria dois novos objetos por referência(_myInput1_ e _myInput2_) que irão receber valores iniciais _null_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
  }, [value1, value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Em seguida, vamos pegar essas referências que criamos e aplicar no atributo _ref_ dos elementos _input_. 
Uma vez que temos o atributo _ref_ no _input_ e dentro desse _ref_ interpolado passamos um objeto que tem o _.current_, automáticamente o react vai colocar uma referência para esse _input_ dentro do atributo _current_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; // ou count.current ++;
  }, [value1, value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Agora, vamos separar o _useEffect_ em duas partes, um _useEffect_ vai ser especifico para a alteração do _value1_ e outro especifico para o _value2_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; 
  }, [value1])

  useEffect(function() {
    count.current += 1; 
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- E agora, sempre que o _value1_ for alterado vamos querer que o cursor mude para o _input2_ e vise-versa. Para isso, dentro da função callback do _useEffect_ que tem como _DependencyList_ o _value1_(ou seja, quando o _value1_ for alterado a function callback é acionada e executa o seu bloco de código) vamos inserir o _myInput2.current_ e chamar o método _.focus_ para fazer essa troca do curso para o input2, o mesmo vai ser feito de forma contraria na função callback do _useEffect_ que tem como _DependencyList_ o _value2_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Agora, vamos criar uma função _merge_ para fazer a junção do que for sendo digitado na ordem da digitação e exibir no _span_. A function vai receber dois parâmetros string1/_s1_ e string2/_s2_, e vai retornar a conversão da string _s1_ em um _array de letras_ com o _operador spred_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function(s1, s2) {
  return [...s1]
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- E nesse array, vamos utilizar o método _.map_. Vamos passar para o método _map_ uma função e essa função vai receber a letra que vamos chamar de elemento/_e_ e o índice/_i_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function(s1, s2) {
  return [...s1].map(function(e, i) {
    
  })
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Inicialmente, essa função do map vai retornar o elemento _e_ concatenado com um traço _-_. Ou seja, vamos transformar as letras da string _s1_ em letras e + um "-" entre cada letra. 
No final, tudo isso vai retornar um array, por isso, para transformar de volta para uma string vamos usar o método _.join_ e passar uma string vazia("") como parâmetro.
E para ser exibido em tela, no _span_ vamos trocar _value1_ pela chamada da function _merge_ e passar os parâmetros para _s1_, _s2_ os _value1_ e _value2_:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function(s1, s2) {
  return [...s1].map(function(e, i) {
    return `${e}-`;
  }).join("")
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Só que, não queremos interpolar o elemento/_e_ de _s1_ com um traço/_-_ e sim com a letra da outra string(_s2_). 
Como podemos pegar a letra da outra string(_s2_)? Podemos acessar as letras de s2 a partir do seu índice:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function(s1, s2) {
  return [...s1].map(function(e, i) {
    return `${e}${s2[i]}`;
  }).join("")
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

- Mas ainda falta realizarmos o tratamento para que quando for acessado um índice que não contém letra, não retorne "undefined" e sim uma string vazia:

``` JavaScript
import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function(s1, s2) {
  return [...s1].map(function(e, i) {
    return `${e}${s2[i] || ""}`;
  }).join("")
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function() {
    count.current += 1; //ou count.current ++;
    myInput2.current.focus();
  }, [value1])

  useEffect(function() {
    count.current += 1; 
    myInput1.current.focus();
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input type="text" className="input" 
          ref={myInput1}
          value={value1} onChange={e => setValue1(e.target.value)}/>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2}
          value={value2} onChange={e => setValue2(e.target.value)}/>
      </div>

    </div>
  )
}

export default UseRef;
```

## useMemo

Retorna um valor memorizado! Como se fosse um "cache".

- Para entendermos melhor como isso funciona, vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseMemo_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseMemo = (props) => {
  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />
    </div>
  )
}

export default UseMemo;
```

-  Visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props. 
E o primeiro objetivo vai ser criar uma _div_ com a className _center_;
E dentro dessa div vamos criar 3 _input_ com do type _number_ com a className _input_ e o _value_ desses inputs vamos vincular ao estado das constantes _n1_, _n2_ e _n3_(vamos criar usando o useState e inicializar o valor zerado(0));
E vamos usar o evento _onChange_ para alterar o estado dos componentes. Ele recebe como parâmetro um evento(e) e quando esse evento for chamado vamos chamar as suas respectivas funções que usamos para alterar o estado(_setN1_, _setN2_ e _serN3_), e passar a estrada do teclado(_e.target.value_), desse modo as alterações vão refletir na interface:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="number" className="input" 
          value={n1} onChange={e => setN1(parseInt(e.target.value))} /> {/*parseInt para termos certeza que irá retornar um valor interiro*/}
        <input type="number" className="input" 
          value={n2} onChange={e => setN2(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n3} onChange={e => setN3(parseInt(e.target.value))} />  
      </div>
    </div>
  )
}

export default UseMemo;
```

- Vamos supor que criamos uma functiom soma/_sum_ que vai receber dois valores(_a_ e _b_) e essa function inicialmente vai retornar o valor de _a + b_;
Em seguida, vamos criar o resultado/_result_, a const _result_ vai receber a função _sum_ que recebe como parâmentro os valores _n1 e n2_;
Por fim, abaixos dos _input_ vamos criar um _span_ com a class _text_ e interpolar o valor da variável _result_(resultado da soma de n1 e n2):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(a, b) {
  return a +b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = sum(n1, n2);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="number" className="input" 
          value={n1} onChange={e => setN1(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n2} onChange={e => setN2(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n3} onChange={e => setN3(parseInt(e.target.value))} />  
        <span className="text">{result}</span>
      </div>
    </div>
  )
}

export default UseMemo;
```

- Agora, vamos supor que essa function soma/_sum_ seja um cálculo mais complexo e ela vai demorar uma certa quantidade de tempo para ser executada;
Para simularmos isso, vamos criar uma const _future_/futuro e ela vai receber a data atual/_Date.now()_(retorna um valor em milisegundos) e vamos acrescentar _2000 milisegundos_, ou seja, 2 segundos;
A partir de um _while_ a data atual/_Date.now()_ vai esperar enquanto ele for menor que/_<_ a data futura que armazenamos em _future_. Basicamente esse código vai ocasionar uma espera de 2s até retornar/_return_ a soma de _a + b_(poi future está 2s a frente da data atual):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(a, b) {
  const future = Date.now() + 2000;
  while(Date.now() < future) {} // espera 2s
  return a +b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = sum(n1, n2);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="number" className="input" 
          value={n1} onChange={e => setN1(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n2} onChange={e => setN2(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n3} onChange={e => setN3(parseInt(e.target.value))} />  
        <span className="text">{result}</span>
      </div>
    </div>
  )
}

export default UseMemo;
```

- Podemos notar que mesmo o terceiro input não tendo nada haver com a aperação ele está esperando 2s para executar. 
Existem duas formas diferentes de resolvermos esse problema. 
A primeira forma é usando o _useEffet_ com o _useState_, como já vimos anteriormente. Podemos mudar a constante _result_ para um estado/_state_ inicializando zerado. E usar o _useEffect_ para chamar a function callback do useEffect sempre que o _n1_ ou _n2_ forem modificados(Lista de depedências), e dentro da função vamos chamar o _setResult_ para alterar seu estado com a function _sum_, que calcula _n1 + n2_:

``` JavaScript
import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(a, b) {
  const future = Date.now() + 2000;
  while(Date.now() < future) {} // espera 2s
  return a +b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const [result, setResult] = useState(0); 

  useEffect(function() {
    setResult(sum(n1, n2));
  }, [n1, n2])

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="number" className="input" 
          value={n1} onChange={e => setN1(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n2} onChange={e => setN2(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n3} onChange={e => setN3(parseInt(e.target.value))} />  
        <span className="text">{result}</span>
      </div>
    </div>
  )
}

export default UseMemo;
```

- A segunda forma de resolver esse problema é usando o _useMemo_. Basicamente o que vamos fazer é, na constante _result_ chamar o _useMemo_, passar par useMemo uma function e dentro dessa função vamos chamar a function _sum_ e realizar a soma de _n1_ e _n2_, só que essa função só vai ser chamada quando _n1_ ou _n2_ forem modificados(lista de dependência/_DEnpendencyList_): 

``` JavaScript
import React, { useEffect, useMemo, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(a, b) {
  const future = Date.now() + 2000;
  while(Date.now() < future) {} // espera 2s
  return a +b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  // const result = useMemo(function() {
  //   sum(n1, n2)
  // }, [n1, n2])
  // Simplificando com arrow function...
  const result = useMemo(() => sum(n1, n2), [n1, n2])

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <input type="number" className="input" 
          value={n1} onChange={e => setN1(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n2} onChange={e => setN2(parseInt(e.target.value))} />
        <input type="number" className="input" 
          value={n3} onChange={e => setN3(parseInt(e.target.value))} />  
        <span className="text">{result}</span>
      </div>
    </div>
  )
}

export default UseMemo;
```

## useCallback

Retorna uma função memoizada! Como se fosse um "cache".
Tem um uso mais específico.

- Para entendermos melhor como isso funciona, vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseCallback_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseCallback = (props) => {
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
    </div>
  )
}

export default UseCallback;
```

- E vamos criar um contador bem simples.
Primeiramente, vamos criar um array com os valores _count_ e _setCount_ que recebe a função _useState_ e vamos passar como parâmetro para essa função o _valor inicial_ que _count_ vai receber e a função _setCount_ vai poder alterar. Basicamente esse é o "Olá mundo!" do useState, que é um contador, portanto, o valor inicial vai ser _0_;
Visando uma melhor organização dos exercícios, vamos importar e referenciar o componente _SectionTitle_ e vamos passar o title via props;
Para visualizarmos o valor da _variável count_, primeiramente vamos criar uma _div_ com o className _center_(para aplicar as propriedades CSS já criadas no arquivo index.css);
Em seguida, dentro da _div_ vamos criar um elemento _span_ com o className _text_ e dentro do _span_ vamos interpolar o valor para apontar _count_;
Agora vamos criar os botões para incrementar +6, +12 e +18. Vamos criar três elementos _button_ com o className _btn_;
Podemos notar que os ficaram um embaixo do outro, isso ocorre porque a classe _center_ que está aplicada na div, tem o _display flex_ e o _flex-direction column_. Para mudar esse comportamento, para o alinhamento em _row_ vamos envolver os botões com uma _div_:

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="#Exercício"/>
      <div className="center">
        <span className="text">{count}</span>
        
        <div>
          <buttom className="btn">+6</buttom>
          <buttom className="btn">+12</buttom>
          <buttom className="btn">+18</buttom>
        </div>
      </div>
    </div>
  )
}

export default UseCallback;
```


- Agora, vamos criar uma function _inc_ ela irá receber um parâmetro _delta_ e irá chamar a função _setCount_ (que altera o valor de count) e vai pegar o valor atual _count_ e soma ao valor _delta_ recebido;
Nos _button_ vamos adicionar o evento _onClick_ e criar uma arrow function, para quando essa função for chamada ela irá chamar a função _inc_ e passar o valor para _delta_: 

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  function inc(delta) {
    setCount(count + delta);
  }

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="#Exercício"/>
      <div className="center">
        <span className="text">{count}</span>
        <br />

        <div>
          <buttom className="btn" onClick={() => inc(6)}>+6</buttom>
          <buttom className="btn" onClick={() => inc(12)}>+12</buttom>
          <buttom className="btn" onClick={() => inc(18)}>+18</buttom>
        </div>
      </div>
    </div>
  )
}

export default UseCallback;
```

- Vamos supor que queiramos pegar esse treço de código onde estão os _button_ e colocar em outro componente chamado _UseCallbackButtons_. E nele vamos receber a função _inc_ através de props(já que ela vem do componente pai - UseCallback):

``` JavaScript
import React from "react";

const UseCallbackButtons = (props) => {
  return (
    <div>
      <buttom className="btn" onClick={() => props.inc(6)}>+6</buttom>
      <buttom className="btn" onClick={() => props.inc(12)}>+12</buttom>
      <buttom className="btn" onClick={() => props.inc(18)}>+18</buttom>
    </div>
  )
}

export default UseCallbackButtons;
```

- E no componente pai _UseCallback_ vamos importar e referênciar esse componente _UseCallbackButtons_. Em seguida, vamos passar a função _inc_ dentro da propriedade _inc_(que temos dentro do componente filho):

``` JavaScript
import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "../examples/UseCallbackButtons"

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  function inc(delta) {
    setCount(count + delta);
  }

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="#Exercício"/>
      <div className="center">
        <span className="text">{count}</span>
        <br />

        <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  )
}

export default UseCallback;
```

- Existe a possibilidade dentro do React através de um cara chamado _React.memo_ de criar um componente cacheado. Por exemplo, se usarmos o _React.memo_ no nosso componente filho _UseCallbackButtons_ ele só vai renderizar esse componente se as _props_ forem alteradas(nesse caso aqui, seja passada uma nova função):

``` JavaScript
import React from "react";

const UseCallbackButtons = (props) => {
  console.log("render...")

  return (
    <div>
      <buttom className="btn" onClick={() => props.inc(6)}>+6</buttom>
      <buttom className="btn" onClick={() => props.inc(12)}>+12</buttom>
      <buttom className="btn" onClick={() => props.inc(18)}>+18</buttom>
    </div>
  )
}

export default React.memo(UseCallbackButtons);
```

Mas se olharmos no _console.log_ quantas vezes esse componente é renderizado, podemos notar que sempre que clicarmos nos buttons de incrementar, esse componente é renderizado novamente. Isso ocorre porque sempre estamos passando via _props_ uma função diferente... como assim? Estamos passando uma função diferente, pois sempre que o componente é renderizado novamente a função _inc_ é criada novamente, e é aqui que entra o hook _useCallback_.
Basicamente, nesse hook _useCallback_ vamos passar uma function que é examente essa função de incremento/_inc_ só que precisamos garantir quem é a dependência dessa função, o que precisa mudar para que essa função seja chamada... uma vez que temos o _count_ como dependência e ele fica modificando o tempo todo, podemos chamar a função _setCount_ e passar para ela uma função callback e essa função vai receber mais atual de _count_ o _curr_ e ao ínves de usarmos o proprio _count_ como dependência podemos usar o _setCount_, tendo em vista que ele não muda, portanto componente será renderizado uma única vez e a função será criada uma única vez:

``` JavaScript
import React, { useCallback, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "../examples/UseCallbackButtons"

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(function (delta) {
    setCount(curr => curr + delta)
  }, [setCount])

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="#Exercício"/>
      <div className="center">
        <span className="text">{count}</span>
        <br />

        <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  )
}

export default UseCallback;
```

## Entendendo Context API

Imagine a seguinte situação,  que você tem a necessidade de trocar informação entre esse um componente e outro que estão bem distânte na árvore de componentes... Como é que a gente poderia fazer para haver comunicação entre esses dois componentes? Existe um processo de comunicação direto e um processo de comunicação direta... mas essa informação vai ser passada por diversos componentes até que chegue nos componentes que queremos, sem que haja necessidade. 
Podemos estabeler a comunicação entre esses dois componentes se a gente criar por exemplo um,a estrutura para armazenar informação, que esteja fora envolvendo toda a aplicação. Então eventualmente vamos ter um componente antes do componente raiz. E dentro desse componente vamos ter um determinado contexto, ou seja dados para que consigamos compartilhar entre os componentes. Esse contexto de alguma forma for acessível dentro desse componente. 
E essa ideia dE termos um contexto(digamos assim), temos um conjunto de informações e essas informações estarem de uma forma mais fácil acessível para cada elemento que precisar trabalhar com ela, é exatamente de ter uma API pra trabalhar com esses dados de contexto, termos algo externo a árvore de componente e conseguimos ler informações desse contexte e poder alterar.
Não está diretamente relacionado com os hooks, mas é usado juntamente com os hook.

## useContext

Aceita um objeto de contexto e retorna o valor atual do contexto!

- Para entendermos melhor, em src vamos criar uma pasta chamada _data_. Nela iremos inserir os dados do contexto, e esses dados tem que estar fora dos componentes para depois eles sejam passados a partir de um provedor e assim conseguiremos acessar esses dados em qualquer componente da aplicação. 
Dentro dessa pasta _data_ vamos criar por enquanto um arquivo chamado _DataContext.js_. Depois iremos criar um componente que dentro dele iremos colocar um contexto, por hora, vamos criar esse contexto "solto".

- Dentro do arquivo _DataContext_ vamos importar o _React_ e criar uma constante _data_ que vai receber um objeto com os dados, também iremos exportar/_export_ essa constante:

``` JavaScript
import React from "react";

export const data = {
  number: 123,
  text: "Context API..."
}
```

- Em seguida, vamos criar uma constante chamada _DataContext_ e criar um contexto a partir de _React.creatContext_ e vamos passar os dados/_data_ para esse contexto inicial, e depois iremos exportar por padrão/_export default_ essa constante:

``` JavaScript
import React from "react";

export const data = {
  number: 123,
  text: "Context API..."
}

const DataContext = React.createContext(data);

export default DataContext;
```

- E agora, como fazemos para usar esse _DataContext_? Vamos usar esse contexto em um ponto que conseguiremos usar em toda nossa aplicação, ou seja, no componete raiz da nossa aplicação, que nesse caso é o componente _App_.
Onde estamos usando esse componente _App_? Dentro do arquivo _index.js_. Dentro dele temos o componente _App_ como sendo o primeiro componente carregado na nossa aplicação, como podemos ver abaixo:

``` JavaScript
import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import App from "./views/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
```

- A partir do momento que esse componente for carregado, termos todos os outros componentes sendo carregados também. Podemos colocar o _DataContext_ tanto aqui dentro de _index.js_ quando dentro de próprio _App.jsx_. Nesse caso, colocaremos dentro do _index.js_.
Primeiramente, vamos importar o _DataContext_ e referenciar esse componente a partir de um provedor(_DataContext.provider_) e envolver toda nossa aplicação com esse context, ou seja, envolver o componente _App_ com o componente _DataContext.provider_:

``` JavaScript
import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import App from "./views/App";
import DataContext from "./data/DataContext";

ReactDOM.render(
  <DataContext.Provider>
    <App />
  </DataContext.Provider>,
  document.getElementById("root")
)
```

- Existe um parâmetro chamaDO _value_ e essa parâmetro precisa ser inicializado com os dados que queremos passar para todos os componentes, que nesse caso está dentro do arquivo _DataContext.js_ na constante chamada _data_.
Vamos importar _data_ e passar ele como atributo para _value_:

``` JavaScript
import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import App from "./views/App";
import DataContext, { data } from "./data/DataContext"; // importando { data } assim, pois exportamos ele sem usar o default


ReactDOM.render(
  <DataContext.Provider value={data}>
    <App />
  </DataContext.Provider>,
  document.getElementById("root")
)
```

- Como conseguimos acessar os dados que foram passados a partir do context API? Vamos fazer o seguinte, vamos no diretório src/views/examples e no arquivo do hook _UseContext_ vamos usar esse contexto. 
Primeiramente, vamos importar o objeto de contexto/_DataContext_ e vamos passar ele como parâmetro para o _useContext_, sso significa que estamos recebendo o contexto atual. Vamos armazenar esse contexto na const _context_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
    </div>
  )
}

export default UseContext;
```

- O que temos dentro do contexto/_context_? Passamos para a aplicação o _value_ e dentro dele os dados/_data_, dentro desse objeto _data_ temos um _number_ e um _texto_. Então o nosso contexto é um objeto que tem número e texto. E como podemos acessar eles? Através de _context.nome-propriedade_. 
Para visualizarmos isso, vamos criar uma _div_ com a class _center_ e dentro dela um _span_ com a class _text_, nele vamos interpolar o valor de _context.text_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.text}</span>
      </div>
    </div>
  )
}

export default UseContext;
```

- E como poderiamos modificar esse valor? Primeiramente, é necessário cautela, pois vai ser alterado o contexto inteiro. 
Vamos fazer algumas alterações antes de tudo, vamos remover o _DataContext.Provider_ do _index.js_ e passar para dentro do _App.jsx_, assim poderemos criar estado/_state_ e passar eventualmente uma function que vai aterar o estado. 
Dessa forma o _App.js_ vai voltar a ficar assim:

``` JavaScript
import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import App from "./views/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
```

- E o componente _App_ ficará assim:

``` JavaScript
import "./App.css";
import React from "react";
import { BrowserRouter as Router } from  "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import DataContext, { data } from "../data/DataContext";

const App = props => {
  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  )
}

export default App;
```

- Uma coisa que podemos fazer ao invés de passarmos diretamente o _data_ para o _value_, podemos passar o _data_ e mais outro valor por exemplo. 
Então vamos criar o estado _state_ e _setState_ e valor inicializar o valor de _state_ usando o _useState_ passando o _data_, ou seja, vamos inicializar um estado dentro do componente _App_ a partir do objeto _data_ que criamos dentro de _DataContext.js_:

``` JavaScript
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from  "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import DataContext, { data } from "../data/DataContext";

const App = props => {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  )
}

export default App;
```

- Diferente do que fizemos anteriormente, onde inicializamos o estado com um número ou uma string, estamos inicializando com um objeto. Cuidado! Pois se tivermos um objeto dentro de _state_ e chamarmos a função _setState_ e passarmos um número, ele vai substituir o objeto pelo número. Entao, se temos um objeto no estado e queremos que continue lá, temos que setar um objeto no estado.
Então dentro de _value_ vamos passar um objeto {} que vai contém _state_ e _setState_. Observação, o primeiro par de chaves{} é o que o react usa para interpolar um valor e o par de chaves{} de dentro são para delimitar um objeto javascript, é como se tivéssemos escrevido _{state: state, setState: setState}_, basicamente estamos criando um objeto que vai "representar o estado", só que como estamos usando os mesmos nomes da chave e valor, podemos simplificar assim _{state, setState}_:

``` JavaScript
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from  "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import DataContext, { data } from "../data/DataContext";

const App = props => {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{state, setState}}> {/* OU {state: state, setState: setState} */}
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  )
}

export default App;
```

- Podemos notar que mudou o valor do nosso contexto, agora o contexto tem um objeto com dois atributos... se formos no navegador, vamos ver que o app não está mais exibindo o valor de _text_, pois ele não está encontrando esse valor.
Para resolver isso, vamos voltar no componente _UseContext_ e vamos alterar o acesso ao valor _text_, pois uma vez que temos o _context_ vamos acessar o _text_ de dentro do atributo _state_ já que agora é dentro _state_ que estão os dados do nosso contexto, ficando assim _context.state.text_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
      </div>
    </div>
  )
}

export default UseContext;
```

- Como agora temos _context.setState_, podemos usar o _setState_ para alterar os dados. Por exemplo, vamos criar uma function para alterar o _number_, ela vai se chamar _addNumber_(a qual irá incrementar ou decrementar 1 em number):

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber() {
    
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
      </div>
    </div>
  )
}

export default UseContext;
```

- Essa função vai receber um determinado valor/_delta_ e irá chamar o _context.setState_. Lembrando que, ele vai setar um objeto e queremos que ele continue pegando o _context.state_ e usando cada um dos atributo, para isso vamos usar o operador spred/_..._ e só alterar o valor do atributo _number_, a partir do _delta_ que foi passado como parâmetro:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
      </div>
    </div>
  )
}

export default UseContext;
```

- Para visualizarmos essa alteração, vamos criar uma _div_ e dentro dela dois _button_ com a class _btn_ para incrementar +1 e decrementar -1:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn">-1</button>
          <button className="btn">+1</button>
        </div>
      </div>
    </div>
  )
}

export default UseContext;
```

- Agora, vamos adicionar o evento _onClick_ e criar uma arrow function, para quando essa função for chamada(clicarem no botão) ela irá chamar a função _addNumber_ e enviar o parâmetro _delta_ que foi passado para ela, que vai pegar o number atual do estado(_context.state.number_) -/+ 1(_delta_):

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>
    </div>
  )
}

export default UseContext;
```

## useContext

Vamos repetir tudo que vimos anteriormente, mas de uma forma mais organizada/encapsulada. Na primeira solução, criamos um _Provider_ e passamos para a aplicação inteira o estado/_state_ e a função que vai alterar o estado inteiro da aplicação(_setState_)... Isso é uma grande responsabilidade para compartilhar com tada a aplicação. Essa forma anterior tem baixo nível de encapsulamento. 

- Primeiramente no diretório src/data vamos criar um arquivo chamado _Store.jsx_, esse componente vai ser um componente "não visual", ele vai conter um estado interno que vai controlar o estado da aplicação. Futuramente, podemos usar o _useReducer_ para ter mais flexibilidade no gerenciamento do estado da aplicação.

- Nesse arquivo _Store.jsx_, vamos criar um componente funcional simples:

``` JavaScript
import React from "react";

const Store = props => {
  return (
    <div></div>
  )
}

export default Store;
```

- Vamos usar esse componente _Store_ para envolver toda a aplicação(inclusive o Provider), esse componente será responsável por criar o _Provider_ tudo certinho. Em _App.jsx_ importar _Store_ e envolver toda a aplicação com esse componente:

``` JavaScript
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from  "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = props => {
  const [state, setState] = useState(data);

  return (
    <Store>
      <DataContext.Provider value={{state, setState}}> 
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  )
}

export default App;
```

- Só que podemos notar que a nossa aplicação não está sendo renderizada, então como fazermos para mostrar na tela a aplicação? Indo no componente _Store_ e colocando _{props.children}_ dentro da _div_ para mostrar os elementos filhos desse componente:

``` JavaScript
import React from "react";

const Store = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Store;
```

- Agora, vamos criar os dados e o contexto. 
Para criar os dados, vamos criar uma const chamada _initialState_(fora do componente), ou seja, estado inicial da aplicação. Ela vai receber um objeto que vai conter _number_ e _text_;
Em seguida, vamos criar o contexto a partir de _React.creatContext_ usando o estado inicial(_initialState_)... e vamos chamar esse contexto de _AppContext_, imaginando que toda a aplicação vai ter um único estado, e também vamos exportar esse contexto _AppContext_ para que o contexto fique acessível em toda a aplicação:

``` JavaScript
import React from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Store;
```

- Com o _AppContext_ podemos criar o _AppContext.Provider_ e envolver toda a aplicação dentro do _Provider_(dispensando a _div_):

``` JavaScript
import React from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  return (
    <AppContext.Provider>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- Já que temos o estado inicial/_initialState_, vamos criar uma const(dentro do componente) que vai ser um array de duas posições, a primeira será _state_ que vai receber através do _useState_ o seu valor inicial(que nesse caso será o estado inicial/_inicialState_), e a segunda posição vai ser a função _setState_ que vai poder alterar o valor de _state_:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- Não vamos passar na propriedade _value_ do _Provider_ diretamente o _{state, setState}_, vamos passar as funções prontas, uma para alterar o _number_ e outra para alterar o _text_.
Primeiramente, passar para o _value_ um objeto que vai conter um _number_ que vai pegar do _state_ o valor do atributo _number_ que esta nele e um _text_ que vai pegar do _state_ o valor do o atributo _text_ dele:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- Agora, vamos criar uma função que vai se chamar _updateState_ e essa função vai receber dois parâmetros, a chave/_key_ ou seja o _nome do atributo_ e o novo valor/_value_:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- O que vamos fazer para alterar o _state_ dentro dessa função _updateState_? Vamos chamar o _setState_, lembrando que ele é um objeto, então vamos ter que criar um objeto {}. 
Como fazemos para replicar o estado atual? Basta pegar o estado atual/_state_ e usar o operador spred/_..._, assim temos todo o objeto que representa o _state_ clonado, em seguida podemos alterar apenas o atributo que foi passado via params(_key_ e _value_) para essa função:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- E no _value_ do _Provider_ ao invés de passarmos diretamente a função _updateState_, vamos criar uma função(arrow) _setNumber_ e essa função vai receber um novo número/_n_ e irá chamar a função _updateState_ passando como atributo para _key_ a chave _number_ e para o _value_ o _n_ que recebemos na função _setNumber_:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: n => updateState("number", n)
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- E vamos replicar essa ação para a função _setText_:

``` JavaScript
import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: n => updateState("number", n),
      setText: t => updateState("text", t)
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store;
```

- Então, esse é o objeto que estamos compartilhando a partir do _Provider_ através do _value_, encapsulado dentro do componente _Store_, então como a aplicação/_componente App_ já está envolvida pelo _Store_ já conseguimos usar esse estado. 
Dentro do componente _useContext_ vamos usar esse contexto... antes disso, vamos criar uma _div_ com a class _center_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        
      </div>

    </div>
  )
}

export default UseContext;
```

- E dentro dessa _div_ vamos acessar esse estado.
Vamos criar uma constante e vamos acessar primeiramente o _number_ e o _setNumber_ e usar o _useContext_ para pegar esses valores de dentro do contexto _AppContext_(valores passados pela propriedade _value_ do _Provider_):

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

  const context = useContext(DataContext); 
  // podemos também desconstruir esse objeto DataContext, acessando state e setState, assim...
  // const { state, setState } = useContext(DataContext); 

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  const { number, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        {/*Podendo acessar diretamente, assim...*/}
        {/*<span className="text">{state.text}</span>*/}
        <span className="text">{context.state.number}</span>
        {/*<span className="text">{state.number}</span>*/}
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        
      </div>

    </div>
  )
}

export default UseContext;
```

- E vamos interpolar esse valor de _number_ dentro de um _span_ com a class _text_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  const { number, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{number}</span>
      </div>

    </div>
  )
}

export default UseContext;
```

- E para alterar _number_, vamos criar uma _div_ e dentro dela um _button_ com a class _btn_ para decrementar -1. 
Esse _button_ vai ter um evento _onClick_ e quando clicarmos no botão ele vai chamar através de uma arrow function o _setNumber_ que vai enviar para o novo valor/_value_ o _number - 1_: 

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  const { number, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{number}</span>
        <div>
          <button className="btn" 
          onClick={() => setNumber(number - 1)}>
          -1
          </button>
        </div>
      </div>

    </div>
  )
}

export default UseContext;
```

- O mesmo vamos fazer para o _button_ que irá incrementar +1 ao _number_:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  const { number, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{number}</span>
        <div>
          <button className="btn" 
          onClick={() => setNumber(number - 1)}>
          -1
          </button>
          <button className="btn" 
          onClick={() => setNumber(number + 1)}>
          +1
          </button>
        </div>
      </div>

    </div>
  )
}

export default UseContext;
```

- Podemos também importar o _text_ e exibir ele em tela:

``` JavaScript
import React, { useContext } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    })
  }

  const { number, text, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" 
          onClick={() => setNumber(number - 1)}>
          -1
          </button>
          <button className="btn" 
          onClick={() => setNumber(number + 1)}>
          +1
          </button>
        </div>
      </div>

    </div>
  )
}

export default UseContext;
```

## useReducer

Uma outra forma de ter estado em componentes funcionais!

- Para entendermos melhor como isso funciona, vamos no diretório src/views/examples e abrir o arquivo referênte ao componente _UseReducer_. Temos um componente funcional seguindo o mesmo padrão que já vimos anteriormente:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const UseReducer = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- Primeiramente, vamos criar um estado inicial/_initialState_... esquecendo um pouco context API, esse exemplo vai ser sem nenhum relação com a parte de contexto, voltaremos a trabalhar dentro de um único componente.
O _initialState_ vai ter alguns atributos... carrinho de compras/_cart_, produtos em destaque/_product_, usuário/_user_ e _number_, o foco por hora vai ser no _number_:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco...
  number: 0
}

const UseReducer = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- Em seguida, vamos criar um function chamada _reducer_ e essa função vai receber dois parâmetros, o primeiro parâmetro é o estado atual/_state_(ultima versão disponível do estado) e o segunda vai ser uma ação/_action_, basicamente a partir de uma ação/_action_ gerada vamos saber como vai ser alterado o estado da aplicação/_state_ para a nova versão, e toda _action_ tem um tipo/nome e a partir desse tipo da ação/_action_ vamos saber como vamos alterar o estado/_state_:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {

}

const UseReducer = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- Nessa função, vamos inserir um _switch_ que vai ser "encima" de _action.type_, toda ação/_action_ tem ao menos o atributo tipo/_type_, que é ele quem vai dizer o que vai ser feito nessa _action_.
Vamos supor que teremos um _case_ que o tipo da ação/_action.type_ seja adicionar 2 ao number/_add2ToNumber_, se acontecer essa ação/se cair nesse case, vamos retornar/_return_ um novo objeto/_{}_ que vai representar o estado, vamos clonar o estado atual/_state_ com o operador spreed e em seguida vamos criar um novo atributo _number_ que vai ser exatamente o _state.number + 2_ já que essa ação o objetivo dela é adicionar/somar 2 ao number:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
  }
}

const UseReducer = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- E também vamos colocar o caso _default_, caso seja passado uma ação que não foi mapeada, vai ser retornado o estado/_state_ atual:

``` JavaScript
import React from "react";

import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- Afinal, qual o objetivo da função _reducer_? Pegar o estado atual, que é o objeto _initialState_ e para cada ação o estado vai evoluir alterando algum atributo, conforme as ações mapeadas.
Agora, como vamos criar o _useReducer_? Primeiro, vamos criar o estado/_state_ e uma função _exec_ e vamos chamar o _useReducer_ e passar como parâmetro a function _reducer_ e o estado inicial/_initialState_... precisamos passar para o _useReducer_ a função que vai evoluir o estado e o estado inicial/_inicialState_:

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
    </div>
  )
}

export default UseReducer;
```

- Para entendermos como funciona a mudança de estado, vamos exibir o valor de _number_ do objeto _state_(pois o estado/_state_ foi inicializado com o que tem dentro do objeto _initialState_). 
Primeiramente, vamos criar uma _div_ com a class _center_ e dentro dela um _span_ e nele vamos interpolar o valor de _state.number_:

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <span className="text">{state.number}</span>
      </div>
    
    </div>
  )
}

export default UseReducer;
```

- Temos uma função chamada _exec_, como vamos disparar uma ação para chamar a função _reducer_ e automáticamente ele evoluir o estado de acordo com o _type_ da _action_? Primeiramente, vamos criar uma _div_, e dentro dela vamos inserir um _button_ com a class _btn_ para incrementar +2 no atributo _number_ de _state_. Nesse _button_ vamos inserir o evento _onClick_ e nele vamos passar uma arrow function que vai chamar a função _exec_ e nela vamos passar como parâmetro um objeto com o atributo _type_(pois _action_ é um objeto que contém o atributo _type_) e esse _type_ vai ser a ação que criamos para adicionar 2 ao number _add2ToNumber_. 
O que está acontecendo aqui? No momento que o usuário clicar no botão/_button_ ele vai disparar/_exec_ uma ação/_action_. Só _exec_ não está chamando diretamente a função _reducer_, o _exec_ recebe o objeto _action_, vai executar essa ação que internamente vai chamar a função _reducer_ e essa função vai retornar a nova versão do estado/_state_ especificamente nesse atributo _number_:

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" 
            onClick={() => exec({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>
    
    </div>
  )
}

export default UseReducer;
```

- Vamos supor que queremos criar um novo case chamado _login_... login vai retornar o estado atual e alterar somente o atributo _user_ e nele vamos adicionar um objeto com os dados do usuário:

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: "Nathallye", email: "nathallyet@gmail.com" } }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" 
            onClick={() => exec({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>
    
    </div>
  )
}

export default UseReducer;
```

- Assim, sempre que tiver uma _action_ chamada _login_ ele vai lá e adiciona um usuário para o atributo _user_ que inicialmente começa nulo/_null_.
Então, qual o próximo passo? Vamos inserir um lógica com operador ternário, se _state.user_ estiver setado, ou seja, diferente de nulo/_null_ ele vai mostrar em tela um _span_ com a class _text_ interpolado com o _name_ que está dentro desse objeto _state_ no atributo _user_(_state.user.name_)... caso contrário, vai ser exibido em tela um _span_ com o texto "Sem usuário":

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: "Nathallye", email: "nathallyet@gmail.com" } }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        {state.user ? 
          <span className="text">{state.user.name}</span>
          : <span className="text">Sem usuário</span> 
        }
        
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" 
            onClick={() => exec({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>
    
    </div>
  )
}

export default UseReducer;
```

- Antes de continuarmos, vamos mudar o nome da função _exec_ para _dispatch_ que é o termo usado normalmente.
E para executar isso, vamos criar um novo _button_ com a class _btn_ chamado _login_ e a partir do evento _onClick_ vamos chamar a função _dispatch_ que vai receber uma _action_ com o _type: "login"_:

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: "Nathallye", email: "nathallyet@gmail.com" } }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        {state.user ? 
          <span className="text">{state.user.name}</span>
          : <span className="text">Sem usuário</span> 
        }

        <span className="text">{state.number}</span>
        <div>
          <button className="btn"
            onClick={() => dispatch({ type: "login" })}>Login</button>
          <button className="btn" 
            onClick={() => dispatch({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>
    
    </div>
  )
}

export default UseReducer;
```

- E se não quisermos ter o _name_ fixo, quesermos passar isso para a função? Para isso, vamos fazer o seguinte... dentro da ação/_action_ podemos passar um segundo atributo, que pode ser o _name_ e vamos acessar esse atributo de dentro do objeto _action_ usando _action.name_(podemos fazer o mesmo para o email se quisermos):

``` JavaScript
import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.name, email: "nathallyet@gmail.com" } }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        {state.user ? 
          <span className="text">{state.user.name}</span>
          : <span className="text">Sem usuário</span> 
        }

        <span className="text">{state.number}</span>
        <div>
          <button className="btn"
            onClick={() => dispatch({ type: "login", name: "Nathallye Tabaresu" })}>Login</button> {/*Normalmente é usado o termo payload*/}
          <button className="btn" 
            onClick={() => dispatch({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>
    
    </div>
  )
}

export default UseReducer;
```