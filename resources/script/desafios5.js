let tarefas = [
"Estudar HTML",
"Estudar CSS",
"Praticar JavaScript",
"Estudar Laravel",
"Revisar conteúdo"
];


console.log("--- Lista de Tarefas Inicial ---");
console.log(tarefas);

tarefas.splice(1, 1); 
tarefas.splice(2, 1, "Aprender Estrutura dos códigos");

console.log("--- Lista de Tarefas Final ---");
console.log(tarefas);