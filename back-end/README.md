# Manipulação dos Dados em C#/.NET

A parte de back-end deste projeto tem como objetivo manipular dados de usuários em uma aplicação desenvolvida em C#/.NET, especificamente com o SDK 6. Utiliza-se o ASP.NET para mapear as rotas das requisições do cliente e interagir com o banco de dados local. Utilizando os princípios de uma API Restful, este projeto adota métodos HTTP para realizar operações como criação, leitura, atualização e exclusão (CRUD) de usuários.

## Instalação

Para instalar as dependências necessárias, utilize os seguintes comandos:

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.14 
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 6.0.14 
dotnet add package Swashbuckle.AspNetCore --version 6.5.0
dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 6.14.049 
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.14 
```

## Configuração do Banco de Dados

O banco de dados utilizado é em memória. A tabela é construída durante a inicialização do aplicativo usando o método `OnModelCreating` na classe `AppDbContext`.

```csharp
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);
    
    builder.Entity<User>().ToTable("User");
    builder.Entity<User>().HasKey(u => u.Id);
    builder.Entity<User>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Entity<User>().Property(u => u.Name).IsRequired().HasMaxLength(30);
    builder.Entity<User>().Property(u => u.Email).IsRequired().HasMaxLength(50);
    builder.Entity<User>().Property(u => u.CEP).IsRequired();
    builder.Entity<User>().Property(u => u.PublicPlace).HasMaxLength(30);
    builder.Entity<User>().Property(u => u.Neighborhood).HasMaxLength(30);
    builder.Entity<User>().Property(u => u.Uf).HasMaxLength(2);
}
```

## Execução do Projeto

Para executar o projeto, siga estas etapas:

1. Configure o arquivo `Program.cs` para adicionar o contexto do banco de dados, a interface e a classe de serviço (`IUserService` e `UserService`).
2. Execute o comando `dotnet run`.

Após a compilação, a URL do servidor local será exibida (geralmente em `https://localhost:<port>`). A documentação da API está disponível em Swagger: `https://localhost:<port>/swagger` ou `https://localhost:<port>/swagger/index.html`.

## Estrutura do Projeto

- **Contexto**: O `AppDbContext` é responsável pela comunicação com o banco de dados e pelo mapeamento das entidades.
- **Controladores**: A classe `UserController` define os endpoints da API e gerencia as requisições HTTP relacionadas aos usuários.
- **Modelos**: A classe `User` representa a entidade de usuário e seus atributos.
- **Serviços**: A interface `IUserService` e a classe `UserService` encapsulam a lógica de negócios relacionada aos usuários, como criação, leitura, atualização e exclusão de usuários.

## Endpoints da API

- `GET /api/user`: Recupera todos os usuários.
- `GET /api/user/{id}`: Recupera um usuário específico pelo ID.
- `POST /api/user`: Cria um novo usuário.
- `PUT /api/user/{id}`: Atualiza um usuário existente.
- `DELETE /api/user/{id}`: Deleta um usuário existente.