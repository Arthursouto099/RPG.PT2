
import {Arqueiro} from './arqueiro'
import {Guerreiro} from './guerreiro'
import {Mago} from './mago'
import {Boss} from './Boss'

function main():void{
const p1 = new Arqueiro('Legolas', 150, 20)
const p2 = new Guerreiro('Leonidas', 150, 20)
const p3 = new Mago('Mago Negro', 150, 20)
const b1 = new Boss('gigante', 200, 20)

p1.atacarPersonagem(b1)
b1.atacarPersonagem(p1)
p1.atacarPersonagem(b1)
p1.ataquePreciso(b1)




}


main()
