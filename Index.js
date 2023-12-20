class moldeHeroi {
    constructor(nome, idade, heroi){
        this.nome = nome;
        this.idade = idade;
        this.heroi = heroi;
    }
}

let novoHeroi = new moldeHeroi("Mateus", 24, "Mago");
var ataque = ""

if (novoHeroi.heroi == "Guerreiro") {
    ataque = "espada"
    console.log(`O ${novoHeroi.heroi} atacou usando ${ataque}`)
}
else if (novoHeroi.heroi == "Mago") {
    ataque = "magia"
    console.log(`O ${novoHeroi.heroi} atacou usando ${ataque}`)
}
else if (novoHeroi.heroi == "Monge") {
    ataque = "artes marciais"
    console.log(`O ${novoHeroi.heroi} atacou usando ${ataque}`)
}
else if (novoHeroi.heroi == "Ninja") {
    ataque = "shuriken"
    console.log(`O ${novoHeroi.heroi} atacou usando ${ataque}`)
}
else {
    console.log("digite o nome do herói com primeira letra maiúscula, lembre-se que os heróis disponíveis são: Guerreiro, Mago, Monge e Ninja. ")
}






