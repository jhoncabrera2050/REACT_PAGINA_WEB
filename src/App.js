import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/testimonio.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
      </div>
      <Testimonio 
      nombre='Jhon Cabrera'
      pais='Peru'
      imagen='tres'
      cargo='Ingeniero de Sotfware'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      <Testimonio
      nombre='Erika ventura'
      pais='Peru'
      imagen='2'
      cargo='Ingeniero de Sotfware'
      empresa='Spotify'
      testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
      />
      <Testimonio
      nombre='Veronika'
      pais='Peru'
      imagen='uno'
      cargo='Ingeniero de Sotfware'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      />
    </div>
  );
}

export default App;
