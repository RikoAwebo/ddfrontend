export class Barco {
  id: number;
  nombre: string;
  tipo: string;
  capacidad: number;

  constructor(id: number, nombre: string, tipo: string, capacidad: number) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.capacidad = capacidad;
  }

  navegar(): string {
    return `${this.nombre} está navegando 🚢`;
  }
}
