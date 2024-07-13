export abstract class Personagem {
    private _nome: string
    private _vida: number
    private _ataque: number


    constructor(nome: string, vida: number, ataque: number) {
        this._nome = nome
        this._vida = vida
        this._ataque = ataque
    }


    getNome(): string {
        return this._nome
    }


    setNome(valor: string): void {
        this._nome = valor
    }

    getVida(): number {
        return this._vida
    }


    setVida(valor: number): void {
        this._vida = valor
    }

    getAtaque(): number {
        return this._ataque
    }


    setAtaque(valor: number): void {
        this._vida = valor
    }


    atacar(): void {
        console.log(`${this._nome} está atacando: seu ataque da ${this._ataque} de dano`)
    }

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max + 1);
    }

    atacarPersonagem(personagem: Personagem, jogar: number): void {
        this.getRandomInt(jogar)

        if (this.getRandomInt(jogar) == 3) {
            console.log('VOCÊ CONSEGUIU O ATAQUE ESPECIAL!!')
            let dano = personagem._vida - this._ataque
            personagem.setVida(dano)

            if (personagem._vida <= 0) {
                console.log(`${personagem._nome} MORREU`)
            }
        }
        else { 
            let dano = personagem._vida - this._ataque
            personagem.setVida(dano)
            if (personagem._vida <= 0) {
                console.log(`${personagem._nome} MORREU`)
            }
            else {
                console.log(`${personagem._nome} perdeu ${this._ataque} de hp`)
                console.log(`a vida do ${personagem._nome} é de ${personagem._vida} hp`)
            }
        }

    }


}

















