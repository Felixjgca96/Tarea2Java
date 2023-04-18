const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.
console.log("a) Las pizzas que tengan un id impar.");

const idImpares = pizzas.filter((producto) => {
  return producto.id % 2 === 1;
});

idImpares.forEach((producto) => {
  console.log(` La ${producto.nombre} tiene id impar `);
});
console.log(`-------Fin de ejercicio (1)-------`);

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");

const pizzaMenorA600 = (precio) => {
  return pizzas.some((producto) => {
    return producto.precio < precio;
  })
    ? console.log(`Si, si hay pizzas con precio menor a $${precio} `)
    : console.log(`No, no hay pizzas con precio menor a $${precio} `);
};
pizzaMenorA600(600);
console.log(`-------Fin de ejercicio (2)-------`);

// c) El nombre de cada pizza con su respectivo precio.

console.log("c) El nombre de cada pizza con su respectivo precio.");

const pizzasNombrePrecio = pizzas.forEach((producto) => {
  console.log(`La ${producto.nombre}, tiene un costo de $${producto.precio}.`);
});
console.log(`-------Fin de ejercicio (3)-------`);

//  d) Todos los ingredientes de cada pizza (En cada iteración imprimir
// los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener
// que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una
// propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log(
  "d) Todos los ingredientes de cada pizza En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo."
);

const pizzasNombre = pizzas.forEach((producto) => {
  console.log(
    `La ${producto.nombre}, tiene los siguientes ingredientes: ${producto.ingredientes}.`
  );
});
console.log(`-------Fin de ejercicio (4)-------`);

// // TODAS  las respuestas deben ser USER-FRIENDLY.
// // Si (como en el punto B), la respuesta es un booleano (true o false,
// hay o no hay), no imprimir el booleano , imprimir en consola una respuesta
// que toda persona pueda entender, sepa o no de programación (Es decir, no
//   podemos imprimir un array o un objeto en consola, por ejemplo).
// // c) El nombre de cada pizza con su respectivo precio.
