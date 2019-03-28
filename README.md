## Fox PetShop

Projeto criado com base em um exercício acadêmico pretendendo produzir uma solução baseada em banco de dados, a partir de um caso fictício que busca ilustrar um problema real.

Utilizando boas práticas para criar e manter banco de dados relacionais.

### Exercício:

> Nesse contexto, o modelo de dados abaixo refere-se a uma loja fictícia de pet shop que atende clientes e seus pets, paracompra de produtos ou prestação de serviços. O banco de dados mantém o inventário de Produtos, fornece informações sobre produtos e serviços ofertados, registra as compras de produtos e serviços efetuados, bem como mantém registro de clientes, seus animais de estimação e funcionários. Para criar o banco de dados, serão necessários as seguintes regras de negócio:

>    * O banco de dados armazena informações sobre os clientes da loja. Para cada cliente, as informações armazenadas são: nome, cpf, data de nascimento, sexo, endereço, telefone e e-mail. Ademais, cada cliente possui um ou vários animais de estimação, cujas informações necessárias são: nome do pet, espécie, raça, sexo, e data de nascimento do pet (se o cliente souber).

>    * É preciso saber quais são os produtos que a loja comercializa, tendo-se as seguintes informações: código de barras, nome, marca, tipo, fornecedor, valor de compra, valor de venda e quantidade em estoque.

>    * Em relação aos serviços, deve-se manter: descrição dos serviços fornecidos pela loja, valor e tempo de duração média.

>    * Para fornecedores, é preciso manter: razão social, nome fantasia, cnpj, endereço, telefone e e-mail.

>    * As informações dos funcionários necessárias são: nome, cargo, cpf, endereço, telefone e e-mail. Cada funcionário deve possuir sua própria credencial de acesso ao sistema.

>    * Um cliente pode comprar vários produtos ou solicitar vários serviços para seu pet.

>    * Um funcionário pode realizar vários serviços; um serviço é realizado por apenas um funcionário.

>    * Um pet pode ser atendido em diversos serviços; um serviço é prestado à apenas um pet.

>    * O banco de dados deve manter informações de cada venda de produto ou serviço, a saber: o cliente que está solicitando o produto ou serviço, o funcionário que está atendendo o cliente, os produtos ou serviços comprados, a data e a hora da compra dos produtos ou serviços e o valor total da compra. Cada venda de produto ou serviço corresponde a um único cliente e a um único funcionário, mas podem conter vários produtos ou serviços comprados.

### Deployment

*Add additional notes about how to deploy this on a live system*

### Built With

* [React JS](https://reactjs.org/)
* [create-react-app](https://github.com/facebook/create-react-app)
* [material/ui](https://material-ui.com/)
* [reactstrap](https://reactstrap.github.io/)

### Autor

* **Hiwoshu** - *Initial work* - [Hiwoshu](https://github.com/hiwoshu)

### Licença

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
