
import {Arqueiro} from './arqueiro'
import {Guerreiro} from './guerreiro'
import {Mago} from './mago'

function main():void{
const p1 = new Arqueiro('Legolas', 40, 20)
const p2 = new Guerreiro('Leonidas', 40, 20)
const p3 = new Mago('Mago Negro', 40, 20)

p1.atacarPersonagem(p3)
console.log("--------------------------------")
p3.atacarPersonagem(p1)


}


main()
