let jogos = [
"Minecraft",
"The Sims",
"Roblox",
"Terraria",
"Stardew Valley"
];
let jogo = prompt("Digite seu jogo: ");

if (jogos.includes("Minecraft")) {
    alert("O jogo está na lista!");
} else {
    alert("O jogo não foi encontrado na lista.");
}