# Lenguajes de Programación
Este repositorio contiene el código fuente y la documentación para el **Certamen 1 (Máquina de Turing)** y el **Control 1 (Topologías Stream Processing)**, desarrollados utilizando **Un lenguaje a elegir, Flex y Bison**.

## Equipo de Desarrollo
* Bastian Parra
* Nicolás Flores
* Luca Carabelli

```text
📁 LP/
├── 📁 Certamen_1_Turing/
│   ├── Makefile
│   └── README.md           # falta establecer la estructura y nombre de archivos todavia
│
├── 📁 Control_1_Stream/
│   ├── Makefile
│   └── README.md           # falta establecer la estructura y nombre de archivos todavia
│
└── README.md
```
## Metodología de Trabajo y Reglas del Equipo
Para asegurar que todos dominemos el 100% del código, trabajaremos bajo la siguiente metodología:

#### 1. Sistema de Issues y Asignación
Todo el trabajo está dividido en Issues dentro de la pestaña "Issues" de este repositorio. Nadie debe escribir código que no esté asociado a un Issue activo y les avisaré si es necesario agregar otro issue y las asignaciones.

#### 2. Flujo de Ramas
No trabajaremos directamente sobre main. Por cada issue, crearemos una rama nueva.
* Formato de rama: funcionalidad/numero-de-issue-descripcion-corta
* Ejemplo: funcionalidad/01-maquina-turing

Comandos básicos:
```
git pull origin main
git checkout -b funcionalidad/01-maquina-turing
# ... escribir código ...
git add .
git commit -m "feat: descripcion de la caracteristica"
git push origin funcionalidad/01-maquina-turing
```
#### 3. Pull Request y Revisión cruzada
Cuando un issue esté terminado, se debe abrir un Pull Request hacia main
* El PR no puede ser fusionado por la misma persona que lo creó.
* Al menos uno distinto de nosotros debe revisar el código, entenderlo y aprobarlo. Esta es nuestra principal forma de hacer que los tres conozcamos el código y el funcionamiento para luego hacer la entrevista.

