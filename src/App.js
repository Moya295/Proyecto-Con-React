import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1 className='header'>Esto es lo que dicen nuestros alumnos egresados sobre el TecNM en Celaya:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          carrera='Ing. en Sistemas Computacionales'
          testimonio='El TecNM en Celaya me proporcionó una sólida base en programación y desarrollo de software. Gracias a la formación que recibí, pude integrarme rápidamente al mercado laboral y ahora trabajo en una de las principales empresas de tecnología de Singapur. Además, el ambiente estudiantil y las oportunidades de crecimiento personal hicieron de mi experiencia universitaria algo inolvidable.'/>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          carrera='Lic. en Administración'
          testimonio='Estudiar en el TecNM en Celaya fue una de las mejores decisiones de mi vida. La licenciatura en Administración me brindó las habilidades necesarias para liderar equipos y gestionar proyectos con éxito. Los profesores siempre estuvieron disponibles para orientarnos y las prácticas profesionales me permitieron aplicar lo aprendido en situaciones reales. Hoy en día, dirijo mi propia empresa y estoy muy agradecida por la educación que recibí.'/>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          carrera='Ing. Industrial'
          testimonio='La carrera de Ingeniería Industrial en el TecNM en Celaya superó mis expectativas. Desde el primer día, los profesores nos alentaron a pensar de manera crítica y a resolver problemas de forma innovadora. Las instalaciones y los recursos disponibles para los estudiantes fueron excelentes, y pude participar en varios proyectos que me prepararon para los desafíos del mundo laboral. Actualmente, trabajo en una empresa líder en manufactura y aplico diariamente los conocimientos adquiridos durante mi formación.'/>
      </div>
    </div>
  );
}

export default App;
