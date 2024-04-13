// Criação de Arrays

// 1. Usando colchetes []
const carros = [
    { nome: "Corolla", ano: 2023 },
    { nome: "Creta", ano: 2024 },
    { nome: "Fox", ano: 2015 }
];

// 2. Usando a classe global Array
const listaDeNumeros = new Array(1, 2, 3, 4, 5);
const tambemListaNumeros = Array.of(1, 2, 3, 4);

// Interagindo com Arrays

// [].map() - Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
const nomesCarros = carros.map((carro) => carro.nome);

// [].filter() - Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
const somenteCarrosNovosDe2024 = carros.filter((carro) => carro.ano >= 2024);

// [].forEach() - Executa uma função fornecida uma vez para cada elemento do array.
carros.forEach((carro) => {
    console.log(carro.nome);
});

// [].flat() - Cria um novo array com todos elementos dos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.
const arrayDeArray = [carros, [{ nome: "Chronos", ano: 2021 }]];
const somenteOsItemsDosArraysDoArray = arrayDeArray.flat();

// [].some() - Testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida.
const temAlgumCarroNoAnoDe2024 = carros.some((carro) => carro.ano === 2024);

// [].every() - Testa se todos os elementos no array passam no teste implementado pela função fornecida.
const somenteTemCarroNovo = carros.every((carro) => carro.ano === 2024);
