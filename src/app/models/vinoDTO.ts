export class Vino {
    nombre: string
    pvp: number

    constructor(nombre: string = '', pvp = 0) {
        this.nombre = nombre
        this.pvp = pvp
    }
}