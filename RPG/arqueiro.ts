import {Personagem} from "./personagem";

export class Arqueiro extends Personagem {

    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque)
    }

    ataquePreciso(): void {
        console.log(`${this.getNome()} causou ${this.getAtaque() * 5} de dano critico`) 
    }

}

