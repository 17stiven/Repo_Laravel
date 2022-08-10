 asignaturas = [{ asignatura: "Bases de datos", horas: 4 },
  { asignatura: "Inteligencia Artificial", horas: 3 },
  { asignatura: "Programacion de dispositivos", horas: 4 },
  { asignatura: "Analisis de algoritmos", horas: 2 },
  { asignatura: "Circuitos", horas: 3 }
];
listarAsignaturas()
function listarAsignaturas(){
    var lista=document.getElementById('listado');
    
    for(var b of asignaturas){
        var li=document.createElement('li').appendChild(document.createTextNode(b.asignatura+" "+b.horas))
        lista.appendChild(li);
    }
}
Obtenerasignaturas(6);

function Obtenerasignaturas(horas) {
  let asignatura1;
  let asignatura2;
  let m = 0;
  let horasDisponibles = 0;
  for (let b of asignaturas) {
    if (b.horas < m) {
      continue;
    } else {
      m = b.horas;
      asignatura1 = b.asignatura;
      horasDisponibles = horas - b.horas;
    }
  }
  m = 0;

  for (let c of asignaturas) {
    if (
      c.horas < m ||
      c.asignatura === asignatura1 ||
      horasDisponibles < c.horas
    ) {
      continue;
    } else {
      m = c.horas;
      asignatura2 = c.asignatura;
    }
  }
  var rec=document.getElementById('recomendaciones')
  
  rec.appendChild(document.createTextNode("Recomendado"))
  rec.appendChild(document.createTextNode(asignatura1))
  rec.appendChild(document.createTextNode(asignatura2))

}
var btn=document.getElementById('btn');

btn.addEventListener('click',(e) => {
   // e.preventDefault();
    numeroHoras=document.getElementById('formulario').value
    Obtenerasignaturas(parseInt(numeroHoras))
})