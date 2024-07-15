# Crie um objeto chamado animal com as seguintes propriedades e valores:
    porte = grande
    especie = cachorro
    raca = golden


# Crie um objeto curso que receba as propriedades: nome, período, professora.
Em seguida, escolha qual propriedade você queira acessar.*/

# Crie uma lista com os seguintes itens:
Sabonete de Argila, Shampoo sólido, Máscara Capilar.
Em seguida, no console.log(),
mostre a quantidade de itens que contém
na lista criada.

# Dado uma lista: Adicione na última posição o nome Beatriz. Em seguida, mostre no console.lo
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]




# Crie um objeto curso que receba as propriedades: nome, período, professora.
# Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */



# Dado um array de objetos. 
# Acesse a propriedade do objeto do terceiro item*/

const tarefas = [{
    passear: false,
    afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
      "Descansar"],
    reuniao: {
      faculdade: "Segunda-feira",
      amigos: "Sexta-feira"
    },
  },
  ];
 



# Dado uma lista de produtos ecologicos, utilizando o FOR, filtre quais produtos ainda estão disponíveis. */

let produtosEcologicos = [
    { nome: 'Copo de bambu', disponivel: true },
    { nome: 'Sacola retornável', disponivel: false },
    { nome: 'Escova de dentes de bambu', disponivel: true },
    { nome: 'Canudos de metal', disponivel: true },
    { nome: 'Frasco de vidro para armazenamento', disponivel: false }
];

# Dado uma lista de carros disponíveis, armazene somente o preço e nome do carro em uma nova lista e retorne somente esses valores. Utilizando o FOR,  */
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

# Temos uma lista com alguns Estados e cidades do Brasil, obtenha somente as cidades de São Paulo no resultado final. Utilizando o FOR.*/

let estadosCidades= [ { estado: "São Paulo", cidades: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"] }, { estado: "Rio de Janeiro", cidades: ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"] }, { estado: "Minas Gerais", cidades: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"] } ];

#  Lista de carros disponíveis para locação
let carrosDisponiveis = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

# Lista de clientes com informações sobre a locação let clientes = [ { nome: "João", dias: 3, modelo: "Toyota Corolla" }, { nome: "Maria", dias: 5, modelo: "Ford Focus" }, { nome: "Carlos", dias: 2, modelo: "Volkswagen Gol" } ];

# Calcule o preço total da locação para cada cliente de acordo com o modelo escolhido utilizando o FOR


# Portugol: 
Para cada cliente na lista de clientes:

Para cada cliente na lista de clientes, vamos fazer o seguinte:
Obter o cliente atual:

Atribuímos o cliente atual a uma variável chamada cliente.
Definir o preço total da locação como nulo:

Inicializamos uma variável chamada precoTotalLocacao com o valor nulo. Esta variável será usada para armazenar o preço total da locação para o cliente atual.
Para cada carro na lista de carros disponíveis:

Para cada carro na lista de carros disponíveis, vamos fazer o seguinte:
Obter o carro atual:

Atribuímos o carro atual a uma variável chamada carro.
Verificar se o modelo do carro corresponde ao modelo escolhido pelo cliente:

Verificamos se o modelo do carro é igual ao modelo escolhido pelo cliente.
Se o modelo corresponder:

Se o modelo do carro corresponder ao modelo escolhido pelo cliente, vamos fazer o seguinte:
Calcular o preço total da locação:

Calculamos o preço total da locação multiplicando o preço do dia do carro pelo número de dias escolhidos pelo cliente.Armazenamos este valor na variável precoTotalLocacao.
Exibir o preço total da locação:

Exibimos o preço total da locação para o cliente atual, incluindo o nome do cliente.
Sair do loop de carros:

Como encontramos o carro correspondente ao cliente, não precisamos continuar procurando. Saímos do loop de carros.
Fim do loop de clientes:

Quando terminarmos de processar todos os clientes, nosso algoritmo estará completo.
*


