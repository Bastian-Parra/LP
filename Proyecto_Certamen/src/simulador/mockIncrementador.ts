import { MotorTuring } from './MotorTuring';
import { MaquinaTuring, Transicion } from '../types/types';

const transiciones = new Map<string, Transicion>();

// primero vamos al extremo derecho para encontrar el blanco
transiciones.set('q0,0', { escribe: '0', mueve: 'R', estadoDestino: 'q0' });
transiciones.set('q0,1', { escribe: '1', mueve: 'R', estadoDestino: 'q0' });
transiciones.set('q0,_', { escribe: '_', mueve: 'L', estadoDestino: 'q_add' });

transiciones.set('q_add,1', { escribe: '0', mueve: 'L', estadoDestino: 'q_add' }); // 1+1=0, llevo 1
transiciones.set('q_add,0', { escribe: '1', mueve: 'L', estadoDestino: 'q_rewind' }); // 0+1=1, termino reserva
transiciones.set('q_add,_', { escribe: '1', mueve: 'L', estadoDestino: 'q_rewind' }); // desborde (ej. 11 + 1 = 100)

// volvemos al inicio de la cinta
transiciones.set('q_rewind,0', { escribe: '0', mueve: 'L', estadoDestino: 'q_rewind' });
transiciones.set('q_rewind,1', { escribe: '1', mueve: 'L', estadoDestino: 'q_rewind' });
transiciones.set('q_rewind,_', { escribe: '_', mueve: 'R', estadoDestino: 'qF' });

const maquinaIncrementador: MaquinaTuring = {
    estadoInicial: 'q0',
    estadosFinales: new Set(['qF']),
    transiciones: transiciones,
    cinta: ['1', '0', '1', '1', '_'], // como prueba de funcionamiento, con 1011 (11 en decimal). debería dar 1100 (12)
    posicionCabezal: 0,
    simboloBlanco: '_'
};

const motor = new MotorTuring(maquinaIncrementador);
motor.simular();