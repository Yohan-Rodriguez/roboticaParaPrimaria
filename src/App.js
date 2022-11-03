import React, { useState } from 'react';
import './App.css';
import './styles/header.css';
import './styles/nav.css';
import './styles/seccOne.css';
import './styles/seccTwo.css';

function App() {
  const [stateInfoA, setStateInfoA] = useState("divMostrar");
  const [stateInfoB, setStateInfoB] = useState("divMostrar");
  
  const onDisplayA = () => {
    if (stateInfoA==="divMostrar"){
      setStateInfoA("divMostrarA");
      console.log(stateInfoA);
    } else{
      setStateInfoA("divMostrar");
      console.log(stateInfoA);
    }
  }
  const onDisplayB = () =>{   
    if (stateInfoB==="divMostrar"){
      setStateInfoB("divMostrarB");
      console.log(stateInfoB);
    } else{
      setStateInfoB("divMostrar");
      console.log(stateInfoB);
    }
  } 

  return (
    <div className="divmain">
      <div className='divHeader'>
        <header className="header">
          <h1 className="textHeader">Robótica para primaria: concepto, historia y programación.</h1>        
        </header>
      </div>
      <div className='divButtonNav'>
        <button className='buttonNav' onClick={onDisplayA}><a href="#inicio">Inicio</a></button>
        <button className='buttonNav'><a href="#concepto">Concepto de la robótica</a></button>
        <button className='buttonNav'onClick={onDisplayB}><a href="#historia">Historia</a></button>
        <button className='buttonNav'><a href="#objetivos">Objetivos</a></button>
        <button className='buttonNav'><a href="#elementos">Elementos</a></button>
        <button className='buttonNav'><a href="#tipos">Tipos de movimientos</a></button>
        <button className='buttonNav'><a href="#robot">Robot casero</a></button>
        <button className='buttonNav'><a href="#programacion">Introducción a la programación</a></button>
        <button className='buttonNav'><a href="#bloques-codigo">Bloques Vs Código</a></button>
        <button className='buttonNav'><a href="#programacion-codigo">Programación por código</a></button>
        <button className='buttonNav'><a href="#programacion-robot">Programación y robots</a></button>
        {/* <button className='buttonNav'>Fin</button> */}
      </div>
      <body>
        <section className='containerSecc' id="inicio">
          <div>
            <div className="asideButton">
              <aside>
                <button className='buttonMostrar' onClick={onDisplayA}>V</button>
              </aside>
            </div>
            <div className="divSecc">
              <h4 className='textDiv'>Inicio</h4><br></br>
            </div>
          </div>  
          <div className={stateInfoA}>
            <div className='divSeccOneB'>
              <h1 className='tittleSeccOneA'>¿Por qué? y ¿para qué?</h1>  
              <aside>
                <p className='textSeccOneB'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
              </aside>
            </div>
            <div className='divSeccOneA'>
              <h1 className='tittleSeccOneA'>Presentación del sofware</h1>  
              <p className='textSeccOneA'>Robótica para estudiantes de primaria es un proyecto enfocado a la inmersión y fortalecimiento en conocimientos tecnológicos en edades tempranas de estudiantes de instituciones de educación públicas y/o privadas, especificamente en el ambito de la robótica, tocando temas que abordan la fundamentación y saberes básicos de está área, la historia, progreso y aportes a través del tiempo de la robótica a la sociedad; un vistazo amigable al paradigma de la programación, conceptos básicos e intemedios de está; elementos y movimientos aplicables en robots, de fácil entendimiento y abstracción que pueden ser estudiados para diseñar y obtener prototipos que cumplan una función específica.</p>
            </div>
            <div className="videoOne" >
              <video src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" width="640" height="480" controls>
              Your browser does not support the video tag.
              </video>
            </div>
        </div> 
        </section>

        <section className='containerSecc' id="historia">
          <div>
            <div className="asideButton">
              <aside>
                <button className='buttonMostrar' onClick={onDisplayB}>V</button>
              </aside>
            </div>
            <div className="divSecc">
              <h4 className='textDiv'>Historia de la robótica</h4><br></br>
            </div>
          </div>  
          <div className={stateInfoB}>
            <div className='divSeccTwoA'>            
              <p className='textSeccTwoA'>Por siglos, el ser humano ha construido máquinas que imitan partes del cuerpo humano. Los antiguos egipcios unieron brazos mecánicos a las estatuas de sus dioses; los griegos construyeron estatuas que operaban con sistemas hidráulicos, los cuales eran utilizados para fascinar a los adoradores de los templos.<br></br><br></br>El inicio de la robótica actual puede fijarse en la industria textil del siglo XVIII, cuando Joseph Jacquard inventa en 1801 una máquina textil programable mediante tarjetas perforadas. Luego, la Revolución Industrial impulsó el desarrollo de estos agentes mecánicos. Además de esto, durante los siglos XVII y XVIII en Europa fueron construidos muñecos mecánicos muy ingeniosos que tenían algunas características de robots. Jacques de Vauncansos construyó varios músicos de tamaño humano a mediados del siglo XVIII.En 1805, Henri Maillardert construyó una muñeca mecánica que era capaz de hacer dibujos.<br></br><br></br>La palabra robot se utilizó por primera vez en 1920 en una obra llamada "Los Robots Universales de Rossum", escrita por el dramaturgo checo Karel Capek. Su trama trataba sobre un hombre que fabricó un robot y luego este último mata al hombre. La palabra checa 'Robota' significa servidumbre o trabajado forzado, y cuando se tradujo al ingles se convirtió en el término robot.<br></br><br></br>Luego, Isaac Asimov comenzó en 1939 a contribuir con varias relaciones referidas a robots y a él se le atribuye el acuñamiento del término Robótica y con el surgen las denomidas "Tres Leyes de Robótica" que son las siguientes:<br></br><br></br><span className='tabulacion'>    * </span>Un robot no puede actuar contra un ser humano o, mediante la inacción, que un ser humano sufra daños.<br></br><br></br><span className='tabulacion'>    * </span>Un robot debe de obedecer las ordenes dadas por los seres humanos, salvo que estén en conflictos con la primera ley.<br></br><br></br><span className='tabulacion'>    * </span>Un robot debe proteger su propia existencia, a no ser que esté en conflicto con las dos primeras leyes.<br></br><br></br>Son varios los factores que intervienen para que se desarrollaran los primeros robots en la década de los 50's. La investigación en inteligencia artificial desarrolló maneras de emular el procesamiento de información humana con computadoras electrónicas e inventó una variedad de mecanismos para probar sus teorías.<br></br><br></br><span className='tabulacion'>    * </span>Las primeras patentes aparecieron en 1946 con los muy primitivos robots para traslado de maquinaria de Devol.<br></br><br></br><span className='tabulacion'>    * </span>En 1954, Devol diseña el primer robot programable.<br></br><br></br><span className='tabulacion'>    * </span>En 1960 se introdujo el primer robot "Unimate'', basada en la transferencia de artículos.<br></br><br></br><span className='tabulacion'>    * </span>En 1961 Un robot Unimate se instaló en la Ford Motors Company para atender una máquina de fundición de troquel.<br></br><br></br><span className='tabulacion'>    * </span>En 1966 Trallfa, una firma noruega, construyó e instaló un robot de pintura por pulverización.<br></br><br></br><span className='tabulacion'>    * </span>En 1971 El "Standford Arm'', un pequeño brazo de robot de accionamiento eléctrico, se desarrolló en la Standford University.<br></br><br></br><span className='tabulacion'>    * </span>En 1978 Se introdujo el robot PUMA para tareas de montaje por Unimation, basándose en diseños obtenidos en un estudio de la General Motors.<br></br><br></br>Actualmente, el concepto de robótica ha evolucionado hacia los sistemas móviles autónomos, que son aquellos que son capaces de desenvolverse por sí mismos en entornos desconocidos y parcialmente cambiantes sin necesidad de supervisión.<br></br><br></br>En los setenta, la NASA inicio un programa de cooperación con el Jet Propulsión Laboratory para desarrollar plataformas capaces de explorar terrenos hostiles.<br></br><br></br>En la actualidad, la robótica se debate entre modelos sumamente ambiciosos, como es el caso del IT, diseñado para expresar emociones, el COG, tambien conocido como el robot de cuatro sentidos, el famoso SOUJOURNER o el LUNAR ROVER, vehículo de turismo con control remotos, y otros mucho mas específicos como el CYPHER, un helicóptero robot de uso militar, el guardia de trafico japonés ANZEN TARO o los robots mascotas de Sony.<br></br><br></br>En general la historia de la robótica la podemos clasificar en cinco generaciones :las dos primeras, ya alcanzadas en los ochenta, incluían la gestión de tareas repetitivas con autonomía muy limitada. La tercera generación incluiría visión artificial, en lo cual se ha avanzado mucho en los ochenta y noventas. La cuarta incluye movilidad avanzada en exteriores e interiores y la quinta entraría en el dominio de la inteligencia artificial en lo cual se esta trabajando actualmente.</p>            
            </div>
            <div className="divSeccTwoB">
              <aside>
                {/* <div class="images-container">
                  <div class="container-enlarge">
                    <img src="https://imgv2-1-f.scribdassets.com/img/document/167169025/original/610c6ae3b3/1662412553?v=1" alt="Lineal del tiempo de la robótica"></img>
                    <span><img src="https://imgv2-1-f.scribdassets.com/img/document/167169025/original/610c6ae3b3/1662412553?v=1"></img></span>
                  </div>
                </div> */}
              </aside>
            </div>
            <div className='videoTwo'>
              <video src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" alt="Historia de la robótica" width="560" height="380" controls>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>        
      </body>
      <footer>
        <p>Author: Yohan M. Rodríguez Garzón<br></br>
        <a href="ymrodriguezg.5@gmail.com">ymrodriguezg.5@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;