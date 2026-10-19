let livros = ["A Bolça Amarela","Gente Pobre","Dom Casmurro","A Moreninha","Cinza e Osso"];
let pesquisa = prompt("Digite o livro a ser encontrado: ");
let resultado = livros.indexOf("Dom Casmurro");

if (resultado === -1) {
  alert("O livro não foi encontrado.");
} else {
  alert(`Livro encontrado na posição ${resultado}.`);
}