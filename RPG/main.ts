
import {Arqueiro} from './arqueiro'
import {Guerreiro} from './guerreiro'
import {Mago} from './mago'

function main():void{
const p1 = new Arqueiro('tavares', 40, 40)
const p2 = new Guerreiro('Arthur', 40, 20)
const p3 = new Mago('souto', 100, 20)

p2.atacarPersonagem(p3, 4)
p3.atacarPersonagem(p2, 4)


}


main()
