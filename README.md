# Projeto Final: KImóveis - TypeORM com Relacionamentos

O projeto KImóveis consiste no desenvolvimento de uma aplicação de gerenciamento de serviços para a imobiliária Kimóveis. A aplicação permite o cadastro de imóveis, usuários interessados na aquisição de propriedades, agendamento de visitas aos imóveis e consulta de horários disponíveis.

O projeto deve ser desenvolvido em TypeScript e utilizar o TypeORM como ORM (Object-Relational Mapping) para interação com um banco de dados PostgreSQL. A serialização dos dados deve ser feita utilizando a biblioteca Zod.

A aplicação possui os seguintes endpoints:

/users: Responsável pela criação, listagem, atualização e soft delete de usuários. Não requer autenticação para criação e login, mas a listagem e atualização são restritas a administradores ou donos da conta.
/login: Gera o token de autenticação para os usuários.
/categories: Criação e listagem de categorias. Apenas administradores podem criar categorias.
/realEstate: Criação e listagem de imóveis. Apenas administradores podem criar imóveis.
/schedules: Agendamento de visitas a um imóvel e listagem de agendamentos. Apenas usuários autenticados podem agendar visitas.
As regras de validação e restrições são especificadas para cada endpoint. Por exemplo, na criação de usuários, é necessário fornecer nome, e-mail e senha, sendo que o e-mail deve ser único. Já na criação de imóveis, é necessário fornecer informações como valor, tamanho, endereço e categoria, e não podem ser cadastrados imóveis com o mesmo endereço.

Os testes automatizados são fornecidos no repositório do projeto e devem ser executados ao longo do desenvolvimento para garantir o correto funcionamento das rotas. Os arquivos de teste e configuração estão disponíveis, e é necessário configurar a conexão com o banco de dados para teste e desenvolvimento.

É recomendado iniciar o projeto criando as entidades corretamente e executar os testes para validar as criações das entidades antes de desenvolver as rotas. As entidades devem seguir as nomenclaturas especificadas no projeto.

Ao final, o projeto deve ser capaz de realizar todas as funcionalidades descritas nos endpoints, seguindo as regras de autenticação e restrições de acesso. O uso adequado do TypeORM, Zod e PostgreSQL é essencial para o bom funcionamento da aplicação.

Este resumo fornece uma visão geral do projeto KImóveis - TypeORM com Relacionamentos, destacando os principais requisitos e endpoints.

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Apenas Admnistradores                  |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Apenas Admnistradores ou dono da conta |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Apenas Admnistradores                  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /categories                | Criação de categoria                              | Apenas Admnistradores                  |
| GET    | /categories                | Lista todas as categorias                         | Qualquer usuário, não necessita token  |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Qualquer usuário, não necessita token  |
| POST   | /realEstate                | Criação de um imóvel                              | Apenas Admnistradores                  |
| GET    | /realEstate                | Lista todos os imóveis                            | Qualquer usuário, não necessita token  |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Qualquer usuário, obrigatório token    |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Apenas Admnistradores                  |

## Requisitos do Serviço

### POST - /users

-   Rota para criação de usuário com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo typeORM;
    -   **name**: string, máximo de 45 caracteres e obrigatório;
    -   **email**: string, máximo de 45 caracteres, obrigatório e único;
    -   **password**: Deverá receber uma string, mas armazenar uma hash gerada com o **bcryptjs** diretamente pela **entidade do typeORM** e máximo de 120 caracteres;
    -   **admin**: boolean e false por padrão;
    -   **createdAt**: Não deve ser passado, mas gerado pelo typeORM;
    -   **updatedAt**: Não deve ser passado, mas gerado pelo typeORM;
    -   **deletedAt**: Não deve ser passado, mas gerado pelo typeORM.
-   A rota de criação deve retornar todos os dados, com **exceção da hash** de senha;
-   Não podem ser cadastrados dois usuários com o mesmo **e-mail**;
-   A rota **não precisa de autenticação** para ser acessada.

### GET - /users

-   A rota deve retornar todos os dados dos usuários, com exceção da hash de senha;
-   A rota pode ser acessada apenas por usuários administradores.

### PATCH - /users/:id

-   A rota deve atualizar os dados do usuário;
-   Não deve ser possível atualizar os campos **id** e **admin**;
-   Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.

### DELETE - /users/:id

-   A rota deve realizar um soft delete do usuário;
-   A rota pode ser acessada apenas por administradores;
-   Não deve ser possível realizar um soft delete em um usuário já deletado.

### POST - /login

-   Rota de login recebendo **email** e **password**;
-   O login deve validar se o usuário existe e validar se a senha está correta;
-   Não deve ser possível realizar o login de um usuário marcado como deletado;
-   A rota **não precisa de autenticação** para ser acessada.

### POST - /categories

-   Rota para criação de categorias com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo **typeORM**.
    -   **name**: string, máximo de 45 caracteres, obrigatório e único
-   Não podem ser cadastradas duas categorias com o mesmo nome.
-   A rota pode ser acessada apenas por usuários administradores.

### GET - /categories

-   Rota deve listar todas as categorias.
-   A rota não precisa de autenticação para ser acessada

### GET - /categories/:id/realEstate

-   Rota deve listar todos os imóveis que pertencem a uma categoria.
-   A rota não precisa de autenticação para ser acessada.

### POST - /realEstate

-   Rota para criação de um imóvel com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo typeORM.
    -   **value**: decimal, obrigatório e 0 por padrão
        -   Quando trabalhamos com decimal, ela pode ser um number ou string, leve isso em consideração na hora de tipar e validar.
    -   **size**: inteiro e obrigatório
    -   **address**: um objeto com os seguintes dados:
        -   **street**: string, máximo de 45 caracteres e obrigatório
        -   **zipCode**: string, máximo de 8 caracteres e obrigatório
        -   **number**: string, máximo de 7 caracteres e opcional
        -   **city**: string, máximo de 20 caracteres e obrigatório
        -   **state**: string, máximo de 2 caracteres e obrigatório
    -   **categoryId**: inteiro
    -   **sold**: Não deve ser passado, mas gerado no momento da validação dos dados no formato boolean com **_default = false_**.
    -   **createdAt**: Não deve ser passado, mas gerado pelo typeORM.
    -   **updatedAt**: Não deve ser passado, mas gerado pelo typeORM.
-   Não podem ser cadastrados dois imóveis com o mesmo endereço.
-   A rota pode ser acessada apenas por administradores.

### GET - /realEstate

Rota deve listar todos os imóveis.
A rota não precisa de autenticação para ser acessada.

### POST - /schedules

-   Rota responsável pelo agendamento de uma visita a um imóvel com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo **typeORM**.
    -   **date**: string da data de agendamento da visita ao imóvel, no formato americano **AAAA-DD-MM**
    -   **hour**: string do horário de agendamento da visita ao imóvel, no formato **HH:MM**
    -   **realEstateId**: inteiro
    -   **userId**: Não deve ser passado no body da requisição e sim pego através do token do usuário.
-   Não deve ser possível agendar uma visita a um imóvel com a mesma data e hora, essa verificação deve ser implementada com **query builder**.
-   Não deve ser possível o mesmo **usuário** agendar uma visita a 2 imóveis diferentes com a mesma data e hora, essa verificação deve ser implementada com **query builder**.
-   Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00).
-   Só deve ser possível agendar uma visita durante dias úteis (segunda à sexta).
-   A rota pode ser acessada tanto por usuários comuns quanto administradores.

### GET - /schedules/realEstate/:id

-   Rota deve listar todos os agendamentos de um imóvel.
-   A rota pode ser acessada apenas por administradores.
