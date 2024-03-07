
# Interface do Usuário em Angular

Este projeto Frontend foi desenvolvido em Angular e tem como objetivo fornecer uma interface para cadastro de usuários.

## Instruções de Instalação

Para executar o projeto Frontend, é necessário possuir o Node.js instalado na máquina. Em seguida, instale o Angular CLI globalmente utilizando o seguinte comando:

```
npm install -g @angular/cli
```

Após a instalação do Angular CLI, navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

```
npm install
```

## Execução do Projeto

Para iniciar o servidor de desenvolvimento e executar o projeto Angular, utilize o seguinte comando:

```
ng serve
```

O projeto estará disponível em `http://localhost:<port>/`.

## Componentes

O projeto possui uma estrutura de componentes. Destacam-se os seguintes componentes:

- `UserFormComponent`: Responsável pelo formulário de cadastro e edição de usuários.
- `TableComponent`: Exibe uma tabela com a lista de usuários cadastrados.

## Serviços e Integrações

O projeto consome uma API externa para obtenção de informações de CEP. Utilizando o serviço `UserService`, as requisições para o backend são gerenciadas, enquanto o `SharedService` facilita a comunicação entre os diferentes componentes da aplicação.

### Acessando o webservice de CEP

Para acessar o webservice de CEP, é necessário fornecer um CEP válido no formato de 8 dígitos, seguido pelo tipo de retorno desejado (json ou xml). Por exemplo:

```
https://viacep.com.br/ws/<CEP>/json/
```

### Validação do CEP

Antes de acessar o webservice, é importante validar o formato do CEP para garantir que possui 8 dígitos. Caso contrário, o código de retorno da consulta será um 400 (Bad Request). Além disso, ao consultar um CEP válido, porém inexistente, o retorno conterá um valor de "erro" igual a "true".

Para mais detalhes sobre os formatos de retorno e exemplos de acesso ao webservice, consulte a documentação oficial em [viacep.com.br](https://viacep.com.br/).