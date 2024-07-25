import {Personagem} from "./personagem"



export class Boss extends Personagem {

    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque)
    }


    ataqueTilt(personagem: Personagem) {
       let dano = personagem.getVida() - this.getAtaque() * 2
       personagem.setVida(dano)
       let regeneracao = this.getVida() + this.getAtaque() * 2
       this.setVida(regeneracao)

       console.log(`${this.getNome()} USOU "TILT"!!!! e causou  ${this.getAtaque() * 2} de dano`);
       console.log(`${this.getNome()} recuperou ${this.getAtaque() * 2} de vida`)
       console.log(`a vida do ${this.getNome()} é de ${this.getVida()} hp`);
       console.log(`a vida do ${personagem.getNome()} é de ${personagem.getVida()} hp`);
       console.log("--------------------------------")
    }




    atacarPersonagem(personagem: Personagem): void { 
        let dado = this.getRandomInt(4);
        console.log(`Você tirou ${dado} no dado e:`);
        
        if (dado == 3) {
            console.log('VOCÊ CONSEGUIU O ATAQUE ESPECIAL!!');
            this.ataqueTilt(personagem)

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

