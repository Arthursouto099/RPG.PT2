import {Personagem} from "./personagem";

export class Arqueiro extends Personagem {

    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque)
    }

    ataquePreciso(personagem: Personagem): void {
        let dano = personagem.getVida() - this.getAtaque() * 5;

        personagem.setVida(dano);

        console.log(`${this.getNome()} USOU "ATAQUE PRECISO"!!!! e causou  ${this.getAtaque() * 5} de dano`);
        console.log(`a vida do ${personagem.getNome()} é de ${personagem.getVida()} hp`);
        console.log("--------------------------------")
    }

    atacarPersonagem(personagem: Personagem): void { 
        let dado = this.getRandomInt(4);
        console.log(`Você tirou ${dado} no dado e:`);
        
        if (dado == 3) {
            console.log('VOCÊ CONSEGUIU O ATAQUE ESPECIAL!!');
            this.ataquePreciso(personagem)

            if (personagem.getVida() <= 0) {
                console.log(`${personagem.getNome()} MORREU`)
            }
        }
        else {
            let dano = personagem.getVida() - this.getAtaque()
            personagem.setVida(dano)
            if (personagem.getAtaque() <= 0) {
                console.log(`${personagem.getNome()} MORREU`)
            }
            else {
                console.log(`${this.getNome()} atacou ${personagem.getNome()}`)
                console.log(`${personagem.getNome()} perdeu ${this.getAtaque()} de hp`)
                console.log(`a vida do ${personagem.getNome()} é de ${personagem.getVida()} hp`) 
                console.log("--------------------------------")
            }
        }

    }

}

