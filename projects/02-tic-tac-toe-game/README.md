<div align="center">

<img alt="Curso de React js desde cero y con proyectos" src="https://miro.medium.com/v2/resize:fit:700/1*7CVFy__9kKAjU0Hzu2uB6g.png" width="500" />

# Proyecto 02: Uso de _useState_ y _useEffect_ en un aplicativo web de entretenimiento⚛️

</div>


Se crearon componentes, dinámicos y reactivos usando conceptos básicos de React como _useState_, _fragments_, _props_, _render_ y una propiedad local llamada _localStorage_ con el fin de guardar el tablero y turno del jugador. Dando paso a la creación del famoso juego de Tic Tac Toe. Adicionalmente tocamos los siguientes puntos importantes:
- Llama a useState en el nivel superior de tu componente para declarar una variable de estado. initialState: El valor que deseas que tenga el estado inicialmente. Puede ser un valor de cualquier tipo, pero hay un comportamiento especial para las funciones. Este argumento se ignora después del renderizado inicial. useState devuelve un array con exactamente dos valores:
    - El estado actual. Durante el primer renderizado, coincidirá con el initialState que hayas pasado.
    - La función set que te permite actualizar el estado a un valor diferente y desencadenar un nuevo renderizado.
- La propiedad de sólo lectura localStorage te permite acceder al objeto local Storage; los datos persisten almacenados entre de las diferentes sesiones de navegación. localStorage es similar a sessionStorage (en-US). La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.


## 📷 Pantallazos

### 01. Pantallazo del juego hecho por mí

<img alt="Proyecto 01: Creación de componentes" src="https://i.postimg.cc/B6wTXfV8/Captura-de-pantalla-2023-10-26-140112.png">

### 02. Pantallazo del juego guardando la información en LocalStorage

<img alt="Proyecto 01: Creación de componentes" src="https://i.postimg.cc/4y7zc2DW/Captura-de-pantalla-2023-10-26-140309.png">

### 03. Pantallazo del código documentado

<img alt="Proyecto 01: Creación de componentes" src="https://i.postimg.cc/zDgp2p2n/code.png">