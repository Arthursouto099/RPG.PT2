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


    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max + 1);
    }

    abstract atacarPersonagem(personagem: Personagem): void 

}

















