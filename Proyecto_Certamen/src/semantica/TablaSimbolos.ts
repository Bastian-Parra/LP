// ======================================================
// TABLA DE SIMBOLOS
// Guarda estados y simbolos declarados en la maquina.
// ======================================================

export class TablaSimbolos {

    // Estados declarados: q0, q1, qF, etc.
    private readonly estados: Set<string> = new Set();

    // Simbolos declarados en el alfabeto: 0, 1, _, etc.
    private readonly simbolos: Set<string> = new Set();


    // ======================================================
    // REGISTRAR ESTADO
    // Guarda un estado y evita identificadores repetidos.
    // ======================================================

    registrarEstado(estado: string): void {

        if (estado.trim().length === 0) {
            throw new Error(
                "Error semantico: el estado no puede estar vacio."
            );
        }

        if (this.estados.has(estado)) {
            throw new Error(
                `Error semantico: el estado '${estado}' ya fue declarado.`
            );
        }

        this.estados.add(estado);
    }


    // ======================================================
    // REGISTRAR SIMBOLO
    // Guarda un simbolo perteneciente al alfabeto.
    // ======================================================

    registrarSimbolo(simbolo: string): void {

        // El certamen pide simbolos de un solo caracter.
        if (Array.from(simbolo).length !== 1) {
            throw new Error(
                `Error semantico: '${simbolo}' no es un simbolo valido de un caracter.`
            );
        }

        if (this.simbolos.has(simbolo)) {
            throw new Error(
                `Error semantico: el simbolo '${simbolo}' ya fue declarado.`
            );
        }

        this.simbolos.add(simbolo);
    }


    // ======================================================
    // EXISTE ESTADO
    // Indica si un estado fue declarado.
    // ======================================================

    existeEstado(estado: string): boolean {
        return this.estados.has(estado);
    }


    // ======================================================
    // EXISTE SIMBOLO
    // Indica si un simbolo pertenece al alfabeto.
    // ======================================================

    existeSimbolo(simbolo: string): boolean {
        return this.simbolos.has(simbolo);
    }


    // ======================================================
    // OBTENER ESTADOS
    // Entrega una copia de los estados registrados.
    // ======================================================

    obtenerEstados(): string[] {
        return Array.from(this.estados);
    }


    // ======================================================
    // OBTENER SIMBOLOS
    // Entrega una copia del alfabeto.
    // ======================================================

    obtenerSimbolos(): string[] {
        return Array.from(this.simbolos);
    }
}