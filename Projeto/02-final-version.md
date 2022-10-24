# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Ayron Luigi de Paiva*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  (O trabalho se refere ao sistema de gerenciamento de pedidos de um restaurante, sua principal função será a de criar pedidos e enviar para a cozinha preparar, o garçom conseguirá realizar o pedido diretamente de seu celular.)

### 1. Funcionalidades implementadas
Crud padrão para produtos(Create, read, updtate and delete), criação de pedidos, cardapio para realizar pedidos.
  
### 2. Funcionalidades previstas e não implementadas
Adicionar imagem de cada produto, sistemas de login e gerenciamento de cargos

### 3. Outras funcionalidades implementadas
Sistema de confirmação de pedidos, a cozinho consegue confirmar quando um pedido está pronto ou não, e o garçom consegue saber quais estão em preparação ou prontos.

### 4. Principais desafios e dificuldades
A principal dificuldade que tive, foi na integração do javaScript com o PHP, por se tratar de 2 linguagens que utilizão de uma sintaxe totalmente diferente, outro ponto a se pensar foi na criação do banco de dados, se o mesmo deveria possuir funções de chave estrangeira (foreign-key), que no final foi analisado que não houve tanta necessidade.

### 5. Instruções para instalação e execução
1-Instalação dos componentes necessários:

Para executarmos uma aplicação Laravel, devemos ter a váriavel de ambiente do PHP (https://www.php.net/downloads.php) devidamente instalada, referente a versão do Laravel que utilizamos, é importante tambem ter o gerenciador de pacotes composer (https://getcomposer.org/download/) instalado, o código da aplicação está no mesmo reposítorio desse arquivo.


2- Banco de dados

O laravel tem suporte para diversos bancos de dados, mas o que eu escolhi é o SQlite, pela facilidade da sua conexão com a aplicação, o passo a passo para sua utilização será descrita a seguir:

* Na pasta database crie o arquivo database.sqlite
* Após a criação do arquivo vá até a pasta .env e defina a linha da conexão do banco de dados como a seguinte DB_CONNECTION=sqlite, comente o restante das linhas com DB_.
* Com todos os passos anteriores executados, voçe será capaz de rodar os comando artisan (https://laravel-docs-pt-br.readthedocs.io/en/5.0/artisan/), entre na pasta raiz do projeto e digite o seguinte comando Php artisan migrate, para criar as tabelas automaticamente, no seu arquivo de banco de dados.

3- Execução 

Para executar a aplicação devemos iniciar o servidor, para isso entre na pasta raiz do projeto e digite o seguinte comando Php artisan serve, por padrão a aplicação executará no endereço http://127.0.0.1:8000, acesse esse endereço diretamente do seu navegador, e terá  acesso a todas as funcionalidades descritas no projeto.

### 6. Referências
Documentation Laravel - https://laravel.com/
