# Boas vindas ao repositório do projeto App de Delivery

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Termos de acordo

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary>
    <strong>👨‍💻 O que deverá ser desenvolvido</strong>
  </summary><br>

  Esse será o seu projeto mais completo até agora! Nessa aplicação, seu grupo será responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻

  O projeto não é só codar, mas também é trabalhar em equipe, aprender e se divertir muito!

  **Neste projeto, seu grupo deve desenvolver um app de delivery para uma distribuidora de bebidas. Veja abaixo o contexto da entrega que deve ser feita:**

  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

  Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

  Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo precisa:

- Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

  Sua equipe, que já possui uma boa experiência com desenvolvimento, em pouco tempo apresentou um [protótipo](#construção-do-front-end) e um [Diagrama de ER](./assets/readme/erdr.png) conforme imagem:

  ![Diagrama de ER](./assets/readme/erdr.png)

  A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

  **A proposta encantou, mas dona Tereza quer ver o negócio em ação! Ela está disposta a pagar por um MVP do projeto e vocês fecharam o negócio com um prazo combinado para entrega.**

  Agora é mãos à obra! Vamos começar?

</details>

# Orientações
<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

  **Observação:** nesse projeto, utilizamos o gerenciador de processos `pm2`. Caso você queira entender melhor o que são gerenciadores de processos Node, dê uma conferida [nesse link](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/c2647acd-7619-4c8a-a7d8-13b452281c35/lesson/99c92a3a-8b45-4428-8ed6-c1c8a7ffdeac).

  **São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`**:

- `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
  - *uso (na raiz do projeto): `npm start`*

- `stop`: Para e deleta as aplicações rodando no `pm2`;
  - *uso (na raiz do projeto): `npm stop`*

- `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);
  - *uso (na raiz do projeto): `npm run dev`*

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
  - *uso (na raiz do projeto): `npm run dev:prestart`*

- `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;
  - *uso (na raiz do projeto): `npm run db:reset`*

- `db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
  - *uso (na raiz do projeto): `npm run db:reset:debug`*

- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
  - *uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`*

- `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`);
  - *uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`*;

- `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`. Esse teste deve abrir uma janela mostrando o comportamento das páginas;
  - *uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`*;

- `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`). Esse teste devolve um output em texto com o resultado de todos os testes. Os `logs` são gerados em `./__tests__/reports`.
  - *uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`*;

</details>

<details>
  <summary>
    <strong>🏦 Banco de dados e Sequelize</strong>
  </summary><br>

## Banco de dados

  Para o banco de dados, utilizaremos o ORM `Sequelize`, que fará interface com o `MySQL`. Para isso, atente-se às seguintes orientações:

- Utilize para referência de criação de `migrations` e `seeders` o arquivo `./db.example.sql`;
- O [Diagrama de ER](./assets/readme/erdr.png) também pode ajudar a "visualizar" o banco de dados;
- Respeite a estrutura do banco de dados, ou seja, sua implementação **não deve** adicionar ou remover tabelas, campos ou relacionamentos e sua API deve estar preparada para aproveitar essa estrutura por completo.

## Sequelize

  ⚠️ **A configuração do sequelize pode ser considerado o requisito zero do projeto**, dado que a maior parte dos testes dependem da estrutura de alguma tabela para realização de testes, **portanto, deve ser feita primeiro**.

  ⚠️ Antes de iniciar o projeto, garanta que o Sequelize roda corretamente no `./back-end` (pela raiz do projeto, o comando `npm run db:reset` será de grande ajuda, pois serve para restaurar o banco de dados `-dev`). O avaliador vai executar funções do sequelize para garantir a estrutura do banco de dados.

  O projeto já provê uma estrutura inicializada do ORM (em `./back-end/src/database`). Aqui, é necessário que você desenvolva as **migrations** e **seeders** corretamente, seguindo o modelo em `./db.example.sql` (esse arquivo serve como referência, e não tem qualquer influência sobre a aplicação ou avaliação).

  ⚠️ O avaliador usará valores `default` no arquivo `./back-end/src/database/config/config.js`, que já vem no projeto caso nada seja definido. Portanto, tome cuidado na hora de fazer qualquer alteração nesse arquivo, pois é através dele que o avaliador utilizará as referências do banco de dados correto para cada situação (desenvolvimento e testes).

- Esse projeto fornece por padrão o arquivo `.sequelizerc` em `.back-end` para configurações do padrão de pastas no Sequelize.

- **Opcionalmente no desenvolvimento local, você pode alterar o valor `EVAL_ALWAYS_RESTORE_DEV_DB` do arquivo `.env` em `./back-end` para `false`**, o que persistirá os dados dos testes locais durante os mesmos. Essa opção pode gerar implicações para a performance e confiabilidade do teste local, já que o avaliador pode se comportar mal caso haja uma quantidade grande de registros para avaliar. Caso ocorra algum problema, utilize o comando `npm run db:reset` ou `npm run db:reset:debug` (para encontrar erros) pela raiz do projeto para restaurar o banco, ou altere de volta a opção `EVAL_ALWAYS_RESTORE_DEV_DB` para `true`.

</details>

<details>
  <summary>
    <strong>👷 Estruturação do projeto</strong>
  </summary><br>

  Para facilitar o entendimento, podemos dividir a aplicação em **4 fluxos principais**, **uma validação de status entre cliente e pessoa vendedora** e **cobertura de testes (`front-end` e `back-end`)**:

- **Fluxo Comum** que compreende:
  - (1) Tela de Login (`01login.test`);
  - (2) Tela de Registro (`02register.test`).

- **Fluxo do Cliente** que compreende: :
  - (3) Tela de Produtos (`03customer_products.test`);
  - (4) Tela de Checkout (`04customer_checkout.test`);
  - (5) Tela de Pedidos (`05customer_orders.test`);
  - (6) Tela de Detalhes do Pedido (`06customer_order_details.test`).

- **Fluxo da Pessoa Vendedora** que compreende:
  - (7) Tela de Pedidos (`07seller_orders.test`);
  - (8) Tela de Detalhes/Controle do Pedido (`08seller_order_details.test`).

- **Validação do Status do Pedido** que compreende:
  - (9) Teste de status (`09customer_seller_status_sync.test`);

- **Fluxo da Pessoa Administradora** que compreende:
  - (10) Tela de gerenciamento de usuários (`11admin_manage_users.test`).

- **Testes da aplicação** que compreende:
  - (11) Testes de cobertura (`12coverage_tests.test`).

- ⚠️ **Importante** ⚠️: a tela de login deve ser capaz de direcionar para a tela principal de cada pessoa usuária, sendo as páginas:
  - Do cliente: `/customer/products`,
  - Da pessoa vendedora:  `/seller/orders`,
  - Da pessoa administradora: `/admin/manage`

</details>

<details>
  <summary>
    <strong>🎨 Construção do Front-end e Componentização</strong>
  </summary><br>

## Construção do Front-end

- Utilize o arquivo [`prototype.fig`](./prototype.fig) contido na raiz do projeto para se guiar na construção do front-end. Se trata de um arquivo do Figma que contém um layout base e os data-testids de cada elemento.

  ⚠️**Importante**: para visualizar o protótipo, é necessário fazer login no [Figma](https://www.figma.com/) e importar o arquivo. Os data-testids estão dispostos nos balões. Caso queira ocultá-los para visualizar o protótipo de forma limpa, você pode esconder a camada `data-testids` clicando no ícone de "olho" ao lado do nome dela. Em caso de dúvidas, confira as imagens abaixo:

  ![Importar aquivo](figma-import.png)

  ![Esconder camada](figma-hide-layer.png)

- Para servir arquivos estáticos como imagens no back-end, utilize o seguinte path:`./back-end/public`;
- ⚠️**Importante**: nosso banco de imagens pode ser [baixado aqui](./assets/images.zip);

## Componentização

  O nosso **protótipo** possui um conjunto de **componentes base**. Isso é proposital e sugere que é fundamental que vocês componentizem o front-end de maneira que seja possível fazer o maior reaproveitamento possível de cada estrutura.

  É bom lembrar que **um front-end em React com pouca componentização gera muita manutenção no tempo e atrasa a entrega**. Aqui, é aconselhável pensar utilizando um [modelo atômico](https://brasil.uxdesign.cc/atomic-design-redesenhando-os-entreg%C3%A1veis-de-designers-e-desenvolvedores-da8886c7258d) de desenvolvimento.

</details>

# Requisitos

## `Fluxo Comum`

O Fluxo comum deve garantir que seja possível **fazer login** e **registrar** no sistema.

>⚠️ **Nesse projeto existe o arquivo `back-end/jwt.evaluation.key` que deverá ser lido e usado como o `secret` para realizar a criptografia de _tokens_, dispensando assim, a necessidade de criar uma variável de ambiente para isso.**

---

### `01login.test`

Todos os testes desse arquivo:

- Verificarão se o banco de dados contém as pessoas usuárias padrão (conforme referência em `db.example.sql`);
- Farão a navegação para a página principal em `localhost:3000/login`.

---

#### 1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador

**Observações técnicas**

- Aqui deve-se garantir que a aplicação possui acesso a uma rota `/login`;
- A rota padrão (`/`) deve fazer redirecionamento para rota `/login`.

---

#### 2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Login`](#construção-do-front-end);

---

#### 3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar dados de login **mal formatados** são:
  - Email incompleto, fora de um padrão comum como: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

---

#### 4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados inexistentes no banco de dados

**Observações técnicas**

- Sua página deve ser capaz de alertar a pessoa usuária de que aquele login é inválido após sua tentativa, já que apesar de formatado corretamente, os dados não existem no banco de dados.

---

#### 5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados

**Observações técnicas**

Sua página deve ser capaz de utilizar os dados do cliente previstos em `db.example.sql`:

- Note que, a senha armazenada no banco é uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5), cuja tradução também está comentada no arquivo;
- Sua API deve ser capaz de traduzir uma senha comum para uma `hash md5`, comparando-a e validando-a com a do banco de dados;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options), para conversão de valores para `md5`.

---

### `02register.test`

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/login`;
- Farão a navegação para a página de registro através do `Botão de registro`;

---

#### 6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login

**Observações técnicas**

- Aqui deve-se garantir que a aplicação possui acesso a uma rota `/register`;
- Também deve ser possível acessar a tela de registro clicando no botão de cadastro via tela de `login`.

---

#### 7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Cadastro`](#construção-do-front-end);

---

#### 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar os dados mal formatados são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

---

#### 9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:

- Note que a senha deve ser armazenada no banco como uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5). A tradução deve ocorrer na API;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options), para conversão de valores para `md5`.

---

#### 10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

**Observações técnicas**

- Sua página deve impedir o cadastro de pessoas com o mesmo Nome ou E-mail.

---

## `Fluxo do Cliente`

O fluxo do cliente deve garantir que seja possível **navegar e escolher produtos**, **adicionar produtos ao carrinho**, **fazer checkout (gerar uma nova venda)**, **consultar pedidos** e **acessar detalhes do mesmo**.

---

### `03customer_products.test`

Todos os testes desse arquivo:

- Farão o fluxo de login com o cliente "Zé Birita" (o login é sempre validado nos testes);
- Esse fluxo deve dar acesso a uma página padrão de produtos em `localhost:3000/customer/products`;
- Verificarão no banco de dados, se consta a lista de produtos padrão, conforme a tabela `products` do modelo em `db.example.sql`.

---

#### 11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar -, que servirá também para demais telas das pessoas usuárias

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Produtos`](#construção-do-front-end);

---

#### 12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Produtos`](#construção-do-front-end);
- Deve-se construir um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`.
- Os `data-testid` desses itens devem terminar com o id de cada produto, exemplo:
  - `customer_products__element-card-price-1`; `customer_products__element-card-price-2`; ...; `customer_products__element-card-price-11`.

---

#### 13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage

**Observações técnicas**

- **Após o login (e durante a navegação), deve-se manter os dados da pessoa usuária no `localStorage`, conforme o modelo:**

```js script
{
  name: "Nome Da Pessoa Usuária",
  email: "email@dominio.com",
  role: "customer",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6FyaWEiLCJlbWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.s5cmiyY16yViCXkHuzWekxkMeYBi75eT8uJnSbfadNE"
}
```

- **Sua página também deve ser capaz de deslogar a pessoa usuária que não possuir um `token` válido no `localStorage`**
  - Note que aqui, é necessário que sua API seja capaz de gerar um `token` [`JWT`](https://jwt.io/), com base na chave em `./back-end/jwt.evaluation.key` após um login válido.
  - Também será validado se esses dados são descartados ao logout.

---

#### 14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos

**Observações técnicas**

- Há um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`;
- Os dados desses produtos devem condizer com os dados do banco de dados;
- Nesse requisito, deve-se garantir que as imagens dos produtos estejam disponíveis para acesso direto via rota estática na sua API.

---

#### 15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios

**Observações técnicas**

- **Cada card deve possibilitar a adição, remoção ou definição manual da quantidade de itens de cada produto**
  - Esses itens devem compor um "carrinho de compras", que deve ser persistente no fluxo do cliente até o momento do checkout (quando o carrinho se torna uma venda concretizada);

👀**De olho nas dicas:**

- Considere utilizar o `localStorage` como forma de armazenar uma entidade `carrinho`;
- Considere a utilização de um contexto específico para acessar e manipular esses dados (tirando essa competência dos componentes filho). Esse contexto não deve ser geral, ou seja, não deve ser acessado por outras páginas fora do escopo do cliente.
- Para facilitar o processo, considere o carrinho como um 'modelo' de uma entidade banco de dados, mas programado no front-end (por ser temporário). Esses dados não devem persistir ao logout.
- O valor total do pedido é a soma dos resultados das quantidades de cada item, multiplicada pelo preço unitário dos mesmos.

---

#### 16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados

**Observações técnicas**

- Sua página deve garantir que alterações no carrinho também mudem o valor total da venda:
 👀**De olho na dica:** tire proveito do **contexto específico** mencionado anteriormente para realizar a lógica e fornecer o resultado do cálculo.

---

### `04customer_checkout.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão validar o valor total dos produtos adicionados na tela de produtos;
- Vão navegar para a tela de checkout através do botão do carrinho de compras;
- O endereço da página deve ser `localhost:3000/customer/checkout`.

---

#### 17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Checkout`](#construção-do-front-end);
- A quantidade de itens no checkout deve corresponder à quantidade de itens no recorte aleatório de produtos utilizados no teste;
- Aqui, a referência de identificação dos campos das linhas da tabela deve ser o índice (`index`) da matriz (`array`) dos produtos no carrinho de compras. Por exemplo:
  - `element-order-table-name-0`; `element-order-table-name-1`; ...; `element-order-table-name-x`.

---

#### 18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total

**Observações técnicas**

- Os dados propostos no recorte aleatório de produtos (itens e preço total) no teste devem condizer com os dados contidos no carrinho durante o checkout.

---

#### 19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho

**Observações técnicas**

- O cliente deve ser capaz de remover itens do carrinho pela tela de checkout, alterando o valor total da venda.

---

#### 20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido após a finalização do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: o que deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front, onde o `id` é retornado da requisição da venda;
- Ao final do pedido (ao clicar no 'Botão de finalização do pedido'), a tela de checkout deve disparar uma requisição para a API, inserindo a venda e retornando o `id` da mesma, para utilização no redirecionamento.

---

#### 21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em sales_products, ao finalizar o pedido

**Observações técnicas**

**Os status de um pedido podem ser:**
      - `Pendente`;
      - `Preparando`;
      - `Em Trânsito`;
      - `Entregue`.

- O "status" padrão de cada pedido deve ser `Pendente`;

- Deve-se garantir que a requisição para API se encarregue de criar uma venda, e na mesma requisição, relacionar essa venda com os produtos do carrinho:
  - Aqui possuímos uma relação de `N:N` (muitos para muitos) onde se relacionam as tabelas: `sales` < 1:N > `sales_products` < N:1 > `products`.

- Os testes farão a inserção da venda via checkout e após isso farão a validação desses dados no banco de dados.

- Atente-se que, no [protótipo](#construção-do-front-end), a tela `Cliente / Detalhes do Pedido` possui a data do pedido:
  - A data deve ser inserida automaticamente durante o processo de inserção da venda após o checkout;
  - O banco de dados está configurado para o [`fuso horário Zulu (Z)`](https://pt.wikipedia.org/wiki/Fuso_hor%C3%A1rio#Meridianos) (`timezone: 'Z'` em `./back-end/database/config/config.js`), que é alinhado com o `UTC+0`;
    - Saiba mais sobre o [`UTC` (Tempo universal coordenado)](https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado);
    - Isso é necessário para evitar conflitos de horário na hora da leitura e escrita da informação no banco de dados.
  - É possível utilizar bibliotecas externas para manipulação de datas como o [`Moment.js`](https://momentjs.com/), ou mesmo utilizar o objeto [`Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) para normatizar horários na hora da leitura ou escrita no formato `UTC`.
 👀**De olho na dica:** é possível utilizar o Sequelize para definir um valor padrão para um campo durante a criação do seu modelo. Valores padrão podem incluir a [data atual](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html).

---

### `05customer_orders.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido;
- Vão acessar a `HomePage` do usuário, navegando para a tela de login (que deve fazer o redirecionamento). Lembrando que, ao acessar a tela de login com um usuário já logado, deve-se fazer o direcionamento para a página padrão do mesmo;
- Vão navegar para a tela de produtos através do menu de navegação (saindo da tela de detalhes do pedido);
- Vão navegar para a tela de pedidos do cliente através do menu de navegação;
- Vão coletar os dados de vendas da tabela `sales` referentes ao usuário (id `3`);
- O endereço da página deve ser `localhost:3000/customer/orders`.

---

#### 22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Meus Pedidos`](#construção-do-front-end);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco. Por exemplo:
  - `customer_products__element-order-date-1`; `customer_products__element-order-date-2`; ...; `customer_products__element-order-date-x`.

---

#### 23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

---

#### 24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: o que deve estar garantido é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos;

---

### `06customer_order_details.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, o que deve redirecionar para tela de detalhes daquele pedido;
- O endereço da página deve ser `localhost:3000/customer/orders/<idVenda>`.

---

#### 25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Detalhes do Pedido`](#construção-do-front-end);

---

#### 26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

---

## `Fluxo da Pessoa Vendedora`

O fluxo da pessoa vendedora deve garantir que é possível listar pedidos relacionados àquela pessoa vendedora e manipular o status desses pedidos.

---

### `07seller_orders.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão fazer o logout do sistema;
- Vão fazer o login com a vendedora "Fulana Pereira" utilizando o e-mail `fulana@deliveryapp.com` e senha `fulana@123`;
- Vão coletar os dados de vendas da tabela `sales` referentes ao usuário (id `2`);
- A página padrão esperada para pessoa vendedora é `localhost:3000/seller/orders`.

---

#### 27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Pedidos`](#construção-do-front-end);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco. Por exemplo:
  - `seller_orders__element-order-date-1`; `seller_orders__element-order-date-2`; ...; `seller_orders__element-order-date-x`.

---

#### 28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

---

#### 29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: oque deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/seller/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos.

---

### `08seller_order_details.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão fazer o logout do sistema;
- Vão fazer o login com a vendedora "Fulana Pereira" utilizando o e-mail `fulana@deliveryapp.com` e senha `fulana@123`;
- Vão clicar no card referente à venda realizada para ter acesso à tela de detalhes do mesmo.

---

#### 30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Detalhes do Pedido`](#construção-do-front-end);

---

#### 31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

---

## `Validação do Status do Pedido`

A validação de status consiste em uma série de testes que devem assegurar que os status do pedido sejam alterados e refletidos para clientes e pessoas vendedoras.

---

#### 32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido

**Observações técnicas**

- Os status de um pedido podem ser:
  - `Pendente` - **Valor padrão** na criação do pedido;
  - `Preparando` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Em Trânsito` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Entregue` - Status que **pode ser alterado pelo cliente**.

- Esse requisito vai avaliar se as alterações do status do pedido na tela da pessoa vendedora são persistentes ao clicar em: `Botão de marcar para 'preparo'`, `Botão de marcar para 'saiu para entrega'`:
  - O `Botão de marcar para 'preparo'` deve estar habilitado caso o status do pedido esteja como `Pendente`. Esse botão deve alterar o status do pedido para `Preparando`;
  - O `Botão de marcar para 'preparo'` deve estar desabilitado caso o status do pedido esteja como `Preparando`, `Em Trânsito` ou `Entregue`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar habilitado caso o status do pedido esteja como `Preparando`. Esse botão deve alterar o status do pedido para `Em Trânsito`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Em Trânsito` ou `Entregue`;

---

### `09customer_seller_status_sync.test`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão gerar outro contexto de navegação (anônimo) para utilizar no fluxo da pessoa vendedora;
- Vão fazer o login (no novo contexto) com a vendedora "Fulana Pereira";
- Vão clicar no card referente à venda realizada para ter acesso à tela de detalhes do mesmo.

---

#### 33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e ao **atualizar as páginas**, esse status **esteja refletido na tela de detalhes do pedido do cliente**.

---

#### 34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas

**Observações técnicas**

**Sua aplicação deve garantir que seja possível fazer a alteração no status do pedido pela pessoa vendedora**, e ao atualizar as páginas, esse status esteja refletido no mesmo item listado na tela de pedido do cliente. Isso deve ocorrer em dois cenários:

- Dado o fluxo de criação de um pedido pelo cliente, acessando após isso a tela de lista de pedidos do mesmo;
- Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);

---

#### 35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

**Observações técnicas**

**Sua aplicação deve garantir que seja possível fazer a alteração no status do pedido pelo cliente**, e ao atualizar as páginas, esse status esteja refletido no mesmo item listado na tela de pedido da pessoa vendedora. Isso deve ocorrer em dois cenários:

- Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
- Dado o acesso aos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Dada a alteração de status do pedido da pessoa vendedora (colocando o pedido "Em trânsito");
- Dado o acesso da lista de pedidos pela pessoa vendedora em paralelo (não há logout no processo);

- Esse requisito também validará a interação com: `Botão de marcar como 'entregue'`:
  - O `Botão de marcar como 'entregue'` deve estar habilitado caso o status do pedido esteja como `Em Trânsito`. Esse botão deve alterar o status do pedido para `Entregue`;
  - O `Botão de marcar como 'entregue'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Preparando` ou `Entregue`;

---

## `Fluxo da Pessoa Administradora`

O fluxo da pessoa administradora deve possibilitar o cadastro de clientes e pessoas vendedoras, tal como a remoção dos mesmos.

---

### `10admin_manage_users.test`

Todos os testes desse arquivo devem:

- Fazer login utilizando dados da pessoa administradora;
  - email `adm@deliveryapp.com` e senha `--adm2@21!!--`.
- Ter a seguinte página esperada pelo avaliador: `localhost:3000/admin/manage`.

---

#### 36 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Adm. / Gerenciamento`](#construção-do-front-end);
  - Em um primeiro momento, não serão considerados os itens da tabela de usuários. Foque aqui em consolidar o formulário de cadastro.

---

#### 37 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro

**Observações técnicas**

- Assim como no formulário de registro aqui também serão validados os campos para registro;
- Aqui, os critérios para considerar os dados mal formatados são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`;
  - Não definir o cargo (`role`):
   👀**De olho na dica**: o `select` do cargo (`role`) pode ter um valor default.

---

#### 38 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:

- Note que, a senha deve ser armazenada no banco como uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5). A tradução **deve ocorrer na API**;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) para conversão de valores para `md5`;

Aqui, **a rota de cadastro deve ser diferente da rota de cadastro comum**, pois também é possível definir a categoria de usuário aqui (`role`);

- Essa é uma rota específica para pessoa administradora, portanto a mesma rota na API deve considerar um token válido e referente ao usuário de categoria `administrator`;

---

#### 39 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes

**Observações técnicas**

Sua página deve impedir o cadastro de pessoas com o mesmo Nome ou E-mail.

---

#### 40 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas

**Observações técnicas**

- Aqui, é necessário que a página também retorne os dados atualizados das pessoas usuárias cadastradas (não incluindo pessoas administradoras):
  👀**De olho na dica**: é possível utilizar um contexto específico que contemple o formulário e a tabela de usuários;

---

#### 41 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

**Observações técnicas**

- A pessoa administradora deve ser capaz de remover pessoas usuárias através da tabela.
  - Na API, **essa é uma rota protegida e exclusiva da pessoa administradora**, portanto deve considerar um token válido e referente ao usuário de categoria `administrator`;

---

## `Cobertura de Testes`

A cobertura de testes deve garantir que, tanto no `front-end` quanto no `back-end`, os sistemas foram testados e possuem componentes e/ou funções estáveis e à prova de erros.

> ⚠️ Lembrando que fica a critério de cada grupo ou indivíduo escolher o tipo de teste a ser implementado, tanto _testes unitários_ quanto _testes de integração_ são aceitos, inclusive os dois de forma complementar.

---

### `11coverage_tests.test`

Antes de todos os testes, esse arquivo deve rodar, em ambas aplicações, o comando `test:coverage:json`.

- Tanto no `front-end` quanto no `back-end`, esse comando deve gerar um arquivo de cobertura (`coverage`) específico para cada;
- Serão coletados dos arquivos, os dados:
  - `pct` - porcentagem total da cobertura;
  - `skipped` - se algum teste foi pulado com `.only` ou `.skip`;
  - `covered` - quantas linhas foram cobertas no teste.

#### 42 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `30%` da aplicação com `75` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

---

#### 43 - (`Bônus`) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `60%` da aplicação com `150` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

---

#### 44 - (`Bônus`) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `90%` da aplicação com `225` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

---
