FUENTE f1
OPERADOR op_filtro TIEMPO_SERVICIO 10
SUMIDERO s_aprobados
SUMIDERO s_rechazados

CONECTAR f1 A op_filtro
CONECTAR op_filtro A s_aprobados
CONECTAR op_filtro A s_rechazados

SIMULAR 1