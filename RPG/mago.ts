import { Personagem } from "./personagem";

export class Mago extends Personagem {

    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque)
    }

    bolaDeFogo(personagem: Personagem): void { 
        let dano = personagem.getVida() - this.getAtaque()
        personagem.setVida(dano)
    }

    atacarPersonagem(personagem: Personagem): void {//TINHA UM JOGAR COMO PARAMETRO
        let dado = this.getRandomInt(4);
        console.log(`Você tirou ${dado} no dado e:`);

        if (dado == 3) {
            console.log('VOCÊ CONSEGUIU O ATAQUE ESPECIAL!!');


            for (let i = 0; i < 3; i++) {
                this.bolaDeFogo(personagem)
                console.log(`A CHUVA DE METEORO DO ${this.getNome()} está causando ${this.getAtaque()} de dano `)
            }

            console.log(`a vida do ${personagem.getNome()} é de ${personagem.getVida()} hp`)

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
            }
        }

    }

}
