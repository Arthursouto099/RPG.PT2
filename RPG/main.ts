
import {Arqueiro} from './arqueiro'
import {Guerreiro} from './guerreiro'
import {Mago} from './mago'
import {Boss} from './Boss'

function main():void{
const p1 = new Arqueiro('Legolas', 100, 20)
const p2 = new Guerreiro('Leonidas', 100, 20)
const p3 = new Mago('Mago Negro', 100, 20)
const b1 = new Boss('gigante', 100, 40)

p3.atacarPersonagem(b1)
b1.atacarPersonagem(p3)
p1.atacarPersonagem(b1)
b1.atacarPersonagem(p1)
p2.atacarPersonagem(b1)
b1.atacarPersonagem(p2)






}


main()
