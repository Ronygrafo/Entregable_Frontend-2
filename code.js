/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  let nombrePersona = prompt("👤 Tecléame aquí tu nombre:");

/*   VALIDAR Y CALCULAR LA EDAD */
  const fechaHoy = new Date();
  let anioHoy = fechaHoy.getFullYear();

  let anioNacimiento;
  do {
    anioNacimiento = prompt("¿En qué año naciste? 🎂 - escribe el año completo");
    console.log(anioNacimiento.length);
  } while (!anioValido());
  function anioValido() {
    if (anioNacimiento === null || anioNacimiento === "" || isNaN(anioNacimiento) || anioNacimiento.length != 4 || anioNacimiento < 1900 || anioNacimiento >= anioHoy ) {
      alert("⛔️ Error,\n - Año de nacimiento inválido. \n - Vuelva a ingresarlo");
      return false;
    }
      return true;
  }
  
  let calcularEdad = () => anioHoy-(parseInt(anioNacimiento));

/*   CAPTURAR ULTIMOS DATOS */
  let ciudadPersona = prompt("📍 Y de dónde sos???");
  let interesJs = confirm("Lo más importante...\n🏁 TE INTERESA JS?");
  let mensajeJs = interesJs ? "¡Obvio! 😎" : "😕 no...";

/*   ASIGNAR DATOS A OBJETO */
  datosPersona.nombre = nombrePersona;
  datosPersona.edad = calcularEdad();
  datosPersona.ciudad = ciudadPersona;
  datosPersona.interesPorJs = mensajeJs;

  console.log(datosPersona);

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreTarjeta = document.getElementById("nombre")
  const edadTarjeta = document.getElementById("edad")
  const ciudadTarjeta = document.getElementById("ciudad")
  const interesaTarjeta = document.getElementById("javascript")

  nombreTarjeta.innerText = datosPersona.nombre;
  edadTarjeta.innerText = datosPersona.edad;
  ciudadTarjeta.innerText = datosPersona.ciudad;
  interesaTarjeta.innerText = datosPersona.interesPorJs;

}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

