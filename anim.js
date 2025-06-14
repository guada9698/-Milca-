// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú tienes todo lo que busco", time: 1 },
  { text: "Conocerte para mí es todo un gusto", time: 2 },
  { text: "Tienes algo en particular, algo que te hace más", time: 3 },
  { text: "Algo que no entiendo, que no me para de enamorar", time:  7 },

  { text: "Tú sabes bien quién eres, la que me mancha de labial", time: 11 },
  { text: "La que se duerme sin despedir y sin avisar", time: 13 },
  { text: "La que le encanta molestar y fregar", time: 17 },
  { text: "La más bella del lugar", time: 20 },

  { text: "Y me llevas lentamente a imaginar", time: 25 },
  { text: "A una vida donde tú puedas estar", time: 32 },
  { text: "Y me llevas lentamente a imaginar", time: 38 },
  { text: "A una vida donde te pueda cuidar", time: 44 },

  { text: "Yo sé que te he dicho mil veces", time: 50 },
  { text: "Que nadie te va a querer, como yo lo voy a hacer", time: 52 },
  { text: "Que tú pones buena suerte en mi viernes 13", time: 53 },
  { text: "Que tengo tu nombre tatuado en mi piel", time: 55 },
  { text: "Que ya te extraño, aunque te haya visto ayer", time: 58 },

  { text: "Sostente fuerte, yo siento lo mismo que tú sientes", time: 61 },
  { text: "Miradas que no mienten, sonrisas que muestran dientes", time: 63 },
  { text: "Contigo todo es más que suficiente", time: 66 },
  { text: "No ocupo de alguien más, solo a ti presente", time: 70 },

  { text: "Y me llevas lentamente a imaginar", time: 75 },
  { text: "A una vida donde tú puedas estar", time: 82 },
  { text: "Y me llevas lentamente a imaginar", time: 88 },
  { text: "A una vida donde te pueda cuidar", time: 94 },

  { text: "Porque si no es contigo, no es con nadie más", time: 98 },
  { text: "Es algo que tú nunca, nunca entenderás", time: 101 },
  { text: "Con alguien más, yo no me puedo conformar", time: 104 },
  { text: "Sabiendo que alguien va a tomar mi lugar", time: 107 },

  { text: "Nadie te verá, como yo te voy a ver", time: 109 },
  { text: "Quiero cumplir las cosas que acordamos en hacer", time: 111 },
  { text: "Y si la vida me da a escoger", time: 113 },
  { text: "Te escojo a ti, otra vez", time: 117 },

  { text: "Y me llevas lentamente a imaginar", time: 145 },
  { text: "A una vida donde tú puedas estar", time: 152 },
  { text: "Y me llevas lentamente a imaginar", time: 158 },
  { text: "A una vida donde te pueda cuidar", time: 162 },
  { text: "❤️Te amo Milca❤️", time: 167 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);