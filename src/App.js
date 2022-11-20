import React, { useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import './styles/header.css';
import './styles/nav.css';
import './styles/secc1.css';
import './styles/secc2.css';
import './styles/secc3.css';
import './styles/secc4.css';
// import './styles/seccThree.css';


function App() {
  /** MOSTRAR DIV DE CADA SECCIÓN --------------------------------------------------*/
  const [stateInfoA, setStateInfoA] = useState("divMostrar");
  const [stateInfoB, setStateInfoB] = useState("divMostrar");
  const [stateInfoC, setStateInfoC] = useState("divMostrar");
  const [stateInfoC1, setStateInfoC1] = useState("divMostrar");   /** Div marco izquierdo */
  const [stateInfoC2, setStateInfoC2] = useState("divMostrar");   /** Div marco derecho general*/
  const [stateInfoC3, setStateInfoC3] = useState("divMostrar");   /** Div marco derecho Pregunta*/
  const [stateInfoC4, setStateInfoC4] = useState("divMostrar");   /** Div marco derecho Respuesta correcta*/
  const [stateInfoD, setStateInfoD] = useState("divMostrar");
  const [stateInfoD1, setStateInfoD1] = useState("divMostrar");
  const [stateInfoD2, setStateInfoD2] = useState("divMostrar");
  const [stateInfoE, setStateInfoE] = useState("divMostrar");
  const [stateInfoF, setStateInfoF] = useState("divMostrar");
  const [stateInfoG, setStateInfoG] = useState("divMostrar");
  const [stateInfoH, setStateInfoH] = useState("divMostrar");
  const [stateInfoI, setStateInfoI] = useState("divMostrar");
  const [stateInfoJ, setStateInfoJ] = useState("divMostrar");
  const [stateInfoK, setStateInfoK] = useState("divMostrar");
  // const [stateGeneral, setStateGeneral] = useState("divMostrar");
  
  const onDisplay = function () {
    var test =document.querySelectorAll('button[name=menu]');
    for(var i=0; i<test.length; i++) {
      test[i].addEventListener("click", function() {
        const stateGeneral = this.id;  
        console.log("El id del botón es "+ stateGeneral);

        if (stateGeneral === "displayA") {
          if (stateInfoA==="divMostrar") {
            setStateInfoA("divMostrarA");
            console.log(stateInfoA);
          } else {
            setStateInfoA("divMostrar");
            console.log(stateInfoA);
          }
        } else if (stateGeneral === "displayB"){
          if (stateInfoB==="divMostrar"){
            setStateInfoB("divMostrarB");
            console.log(stateInfoB);
          } else{
            setStateInfoB("divMostrar");
            console.log(stateInfoB);
          }
        } else if (stateGeneral === "displayC") {
          if (stateInfoC==="divMostrar"){
            setStateInfoC("divMostrarC");
          } else{
            setStateInfoC("divMostrar");
          }
        } else if (stateGeneral === "displayD") {
          if (stateInfoD==="divMostrar"){
            setStateInfoD("divMostrarD");
            console.log(stateInfoD);
          } else{
            setStateInfoD("divMostrar");
            console.log(stateInfoD);
          }
        } else if (stateGeneral === "displayE") {
          if (stateInfoE==="divMostrar"){
            setStateInfoE("divMostrarE");
            console.log(stateInfoE);
          } else{
            setStateInfoE("divMostrar");
            console.log(stateInfoE);
          }
        } else if (stateGeneral === "displayF") {
          if (stateInfoF==="divMostrar"){
            setStateInfoF("divMostrarF");
            console.log(stateInfoF);
          } else{
            setStateInfoF("divMostrar");
            console.log(stateInfoF);
          }
        } else if (stateGeneral === "displayG") {
          if (stateInfoG==="divMostrar"){
            setStateInfoG("divMostrarG");
            console.log(stateInfoG);
          } else{
            setStateInfoG("divMostrar");
            console.log(stateInfoG);
          }
        } else if (stateGeneral === "displayH") {
          if (stateInfoH==="divMostrar"){
            setStateInfoH("divMostrarH");
            console.log(stateInfoH);
          } else{
            setStateInfoH("divMostrar");
            console.log(stateInfoH);
          }
        } else if (stateGeneral === "displayI") {
          if (stateInfoI==="divMostrar"){
            setStateInfoI("divMostrarI");
            console.log(stateInfoI);
          } else{
            setStateInfoI("divMostrar");
            console.log(stateInfoI);
          }
        } else if (stateGeneral === "displayJ") {
          if (stateInfoJ==="divMostrar"){
            setStateInfoJ("divMostrarJ");
            console.log(stateInfoJ);
          } else{
            setStateInfoJ("divMostrar");
            console.log(stateInfoJ);
          }
        } else if (stateGeneral === "displayK") {
          if (stateInfoK==="divMostrar"){
            setStateInfoK("divMostrarK");
            console.log(stateInfoK);
          } else{
            setStateInfoK("divMostrar");
            console.log(stateInfoK);
          }
        }
      }); 
    }
  } 
  const onDisplayC1 = () =>{   
    if (stateInfoC1==="divMostrar"){
      setStateInfoC1("divMostrarC1");
    } else{
      setStateInfoC1("divMostrar");
    }
  } 
  const onDisplayC2 = () =>{   
    if (stateInfoC1==="divMostrarC1" && stateInfoC2==="divMostrar"){    /** Verifica si marco izquierdo se muestra en pantalla  */
      setStateInfoC2("divMostrarC2");     /** Habilita marco derecho general */
      setStateInfoC3("divMostrarC3");     /** Habilita marco derecho pregunta */
      setStateInfoC4("divMostrar");
      console.log("Sonríe");
    }else{
      setStateInfoC2("divMostrar");     
      setStateInfoC3("divMostrar");
      setStateInfoC4("divMostrar");
      console.log("Imbécil.")
    }
  } 
  const onDisplayD1 = () =>{   
    if (stateInfoD1==="divMostrar"){
      setStateInfoD1("divMostrarD1");
      console.log(stateInfoD1);
    } else{
      setStateInfoD1("divMostrar");
      console.log(stateInfoD1);
    }
  } 
  const onDisplayD2 = () =>{   
    if (stateInfoD2==="divMostrar" && stateInfoD1==="divMostrarD1"){
      setStateInfoD2("divMostrarD2");
      console.log(stateInfoD2);
    } else{
      setStateInfoD2("divMostrar");
      console.log(stateInfoD2);
    }
  } 
  const answerQue = () =>{
    if (document.querySelector('input[name=secc3]:checked').value === "2"){     /** Verifica validez de la respuesta */
      setStateInfoC3("divMostrar")      /** Oculta marco derecho pregunta */
      setStateInfoC4("divMostrarC4")    /** Habilita marco derecho respuesta correcta */
      console.log("1");
    }
    else{
      alert("Respuesta Incorrecta. Try again!");
    }
  }

  /* FUNCIÓN DEL MENÚ DESPLEGABLE VERTIVALMENTE When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
/**------------------------------------------------------------------------------------------------- */
  return (
    <Fragment>
      <div className='divMain'>
        <div className="divPreMain">     {/** DIV cNTENEDOR DE TODA LA PÁGINA WEB */}
          <div className='divHeader'>
            {/* HEADER -------------------------------------------------------------------------------------------*/}
            <header className="header" id="header">
              <h1 className="textHeader">Robótica para primaria: concepto, historia y programación.</h1>        
            </header>  
          </div>   
          <div className="dropdown">
            <button className="dropbtn" onClick={myFunction}>Menú</button>
            <div id="myDropdown" className="dropdown-content">
                {/** NAVEGACIÓN ---------------------------------------------------------------------------------------*/}
                <button className='dropbtn' onClick={onDisplay} id="displayA" name="menu"><a href="#inicio">Inicio</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayB" name="menu"><a href="#historia">Historia</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayC" name="menu"><a href="#concepto">Conceptos generales de la robótica</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayD" name="menu"><a href="#objetivos">Objetivos de la robótica</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayE" name="menu"><a href="#elementos">Elementos de la robótica</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayF" name="menu"><a href="#tipos">Tipos de movimientos</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayG" name="menu"><a href="#robot">Mi primer robot casero</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayH" name="menu"><a href="#programacion">Introducción a la programación</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayI" name="menu"><a href="#bloques-codigo">Programación por bloques Vs Código</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayJ" name="menu"><a href="#programacion-codigo">Programación por código</a></button>
                <button className='dropbtn' onClick={onDisplay} id="displayK" name="menu"><a href="#programacion-robot">Mi primer robot programado</a></button>
            </div>   
          </div>
          <body>
            {/** SECCIÓN UNO: INCIO --------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="inicio">            
              <div className="divSecc">   {/** Este div contiene el titulo y button "V" */}
                <div className='positionTittle'>      {/** Tutulo de la sección */}
                  <button className='textDiv' onClick={onDisplay} id="displayA" name="menu"><a href="#inicio">Inicio</a></button>
                </div>
                <div className="asideButton"> {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayA" name="menu"><a href="#inicio">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoA}>      {/** Contenido de la sección */}
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
                <iframe className="videoOne" src="https://www.youtube.com/embed/WlQNLSKwM5Q" title="¿Qué es la Robotica? Para que sirve y cuales son sus disciplinas?!?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                     
              </div> 
            </section>
            {/** SECCIOÓN DOS: HISTOTRIA ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="historia">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayB" name="menu"><a href="#historia">Historia de la robótica</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayB" name="menu"><a href="#historia">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoB}>      {/** Contenido de la sección */}
                <div className="divSeccTwoAGen">
                  <div>
                    <div className="divSeccTwoB addImg">
                      <aside>
                        <div class="images-container addImg">
                          <div class="container-enlarge addImg">                            
                            <span><img src="https://imgv2-1-f.scribdassets.com/img/document/167169025/original/610c6ae3b3/1662412553?v=1" alt="None"></img></span>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className='widthDivTextB textSeccTwoA'>Por siglos, el ser humano ha construido máquinas que imitan partes del cuerpo humano. Los antiguos egipcios unieron brazos mecánicos a las estatuas de sus dioses; los griegos construyeron estatuas que operaban con sistemas hidráulicos, los cuales eran utilizados para fascinar a los adoradores de los templos.<br></br><br></br>El inicio de la robótica actual puede fijarse en la industria textil del siglo XVIII, cuando Joseph Jacquard inventa en 1801 una máquina textil programable mediante tarjetas perforadas. Luego, la Revolución Industrial impulsó el desarrollo de estos agentes mecánicos. Además de esto, durante los siglos XVII y XVIII en Europa fueron construidos muñecos mecánicos muy ingeniosos que tenían algunas características de robots. Jacques de Vauncansos construyó varios músicos de tamaño humano a mediados del siglo XVIII.En 1805, Henri Maillardert construyó una muñeca mecánica que era capaz de hacer dibujos.<br></br><br></br>La palabra robot se utilizó por primera vez en 1920 en una obra llamada "Los Robots Universales de Rossum", escrita por el dramaturgo checo Karel Capek. Su trama trataba sobre un hombre que fabricó un robot y luego este último mata al hombre. La palabra checa 'Robota' significa servidumbre o trabajado forzado, y cuando se tradujo al ingles se convirtió en el término robot.<br></br><br></br>Son varios los factores que intervienen para que se desarrollaran los primeros robots en la década de los 50's. La investigación en inteligencia artificial desarrolló maneras de emular el procesamiento de información humana con computadoras electrónicas e inventó una variedad de mecanismos para probar sus teorías.<br></br><br></br><span className='tabulacion'>    * </span>Las primeras patentes aparecieron en 1946 con los muy primitivos robots para traslado de maquinaria de Devol.<br></br><br></br><span className='tabulacion'>    * </span>En 1954, Devol diseña el primer robot programable.<br></br><br></br><span className='tabulacion'>    * </span>En 1960 se introdujo el primer robot "Unimate'', basada en la transferencia de artículos.<br></br><br></br><span className='tabulacion'>    * </span>En 1961 Un robot Unimate se instaló en la Ford Motors Company para atender una máquina de fundición de troquel.<br></br><br></br><span className='tabulacion'>    * </span>En 1966 Trallfa, una firma noruega, construyó e instaló un robot de pintura por pulverización.<br></br><br></br><span className='tabulacion'>    * </span>En 1971 El "Standford Arm'', un pequeño brazo de robot de accionamiento eléctrico, se desarrolló en la Standford University.<br></br><br></br><span className='tabulacion'>    * </span>En 1978 Se introdujo el robot PUMA para tareas de montaje por Unimation, basándose en diseños obtenidos en un estudio de la General Motors.<br></br><br></br>En los setenta, la NASA inicio un programa de cooperación con el Jet Propulsión Laboratory para desarrollar plataformas capaces de explorar terrenos hostiles.<br></br><br></br>En la actualidad, la robótica se debate entre modelos sumamente ambiciosos, como es el caso del IT, diseñado para expresar emociones, el COG, tambien conocido como el robot de cuatro sentidos, el famoso SOUJOURNER o el LUNAR ROVER, vehículo de turismo con control remotos, y otros mucho mas específicos como el CYPHER, un helicóptero robot de uso militar, el guardia de trafico japonés ANZEN TARO o los robots mascotas de Sony.</p>        
                    </div>
                  </div>
                </div>                                
                <iframe className="videoOne" src="https://www.youtube.com/embed/4Q3vfQKaCQI" title="HISTORIA DE LA ROBÓTICA 🤖 | Los datos más ASOMBROSOS" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                     
              </div>
            </section>        
            {/** SECCIOÓN TRES:CONCEPTO SGENERALES ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="concepto">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayC" name="menu"><a href="#concepto">Conceptos generales de la robótica</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayC" name="menu"><a href="#concepto">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoC}>      {/** Contenido de la sección */}
                <div className='mostarButtonsD'>  
                  <div className='divButtonD1'>
                    <button className='c1' onClick={onDisplayC1}>1</button>
                  </div>
                  <aside className='divButtonD2'>
                    <button className='c2' onClick={onDisplayC2}>2</button>
                  </aside>
                </div>
                <div className={stateInfoC1}>      {/** Tutulo de la sección */}
                  <div className='cuadroC'>
                    <div className='cuadroC1'>
                      <div className='divSecc3B'>
                        <p className='textCuadrosSecc3'>La robótica es una disciplina que se ocupa del diseño, operación, manufacturación, estudio y aplicación de autómatas o robots. Para ello, combina la ingeniería mecánica, ingeniería eléctrica, ingeniería electrónica, ingeniería biomédica y las ciencias de la computación, así como otras disciplinas.</p>
                      </div> 
                    </div>
                    <aside className={stateInfoC2}>
                      <div className={stateInfoC3}>
                        <div className='cuadroC2'>
                          <div className='divSecc3A'>
                            <h1 className="textCuadrosSecc3" htmlFor='secc3'>La robótica tiene en consideración:</h1>
                              <label className="container textCuadrosSecc3">La ingeniería mecánica, ingeniería de alimentos, ingeniería electrónica, y se encarga del control, operación, y estudio de robots.
                                <input type="radio" name="secc3" value="1"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosSecc3">La ingeniería eléctrica, ingeniería electrónica y las ciencias de la computación, y se encarga del diseño, operación y aplicación de robots.
                                <input type="radio" name="secc3" value="2"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosSecc3">Todas las anteriores.
                                <input type="radio" name="secc3" value="3"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosSecc3">Ninguna de las anteriores.
                                <input type="radio" name="secc3" value="4"></input>
                                <span className="checkmark"></span>
                              </label>  
                              <aside className='divbuttonAnswer'>
                                <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                              </aside>
                          </div> 
                        </div>
                      </div>
                      <div className={stateInfoC4}>
                        <div className='cuadroD2'>
                          <div className='divSecc4A'>
                            <p className='textCuadrosSecc4'>La robótica representa la cumbre en la trayectoria de desarrollo tecnológico, es decir, del diseño de herramientas. Su cometido es construir una herramienta que pueda desempeñar muchas de las labores que actualmente desempeña el ser humano, de manera más eficiente y rápida, o en condiciones y ambientes que al ser humano le serían inaccesibles.</p>
                          </div> 
                        </div>
                      </div>
                    </aside> 
                  </div>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN CUATRO:OBJETIVOS GENERAL ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="objetivos">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayD" name="menu"><a href="#objetivos">Objetivos de la robótica</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayD" name="menu"><a href="#objetivos">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoD}>      {/** Tutulo de la sección */}
                <div className='mostarButtonsD'>  
                  <div className='divButtonD1'>
                    <button className='d1' onClick={onDisplayD1}>1</button>
                  </div>
                  <aside className='divButtonD2'>
                    <button className='d2' onClick={onDisplayD2}>2</button>
                  </aside>
                </div>
                <div className={stateInfoD1}>
                  <div className='cuadroC'>
                    <div className='cuadroC1'>
                      <div className='divSecc4B'>
                        <p className='textCuadrosSecc4'>Por definición un robot es una máquina automática programable capaz de realizar determinadas operaciones de manera autónoma y sustituir a los seres humanos en algunas tareas</p>
                      </div> 
                    </div>
                    <aside className={stateInfoD2}>
                      <div className='cuadroC2'>
                        <div className='divSecc4A'>
                          <p className='textCuadrosSecc4'>Como curiosidad, el término “robot” se popularizó por la obra R.U.R (Robots Universales Rossum) de Karel Čapek en 1920. En la traducción al inglés de la obra teatral, la palabra checa “robota”, que significa trabajos forzados o trabajador, fue traducida al inglés como robot.</p>
                        </div> 
                      </div>
                    </aside> 
                  </div>
                </div>
                </div>
            </section>        
            {/** SECCIOÓN CINCO: ELEMENTOS ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="elementos">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayE" name="menu"><a href="#elementos">¿Qué elementos conforman un robot?</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayE" name="menu"><a href="#elememtos">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoE}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Elementos</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN SEIS:TIPOS DE MOVIMIENTOS ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="tipos">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayF" name="menu"><a href="#tipos">Tipos de movimeintos en robots</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayF" name="menu"><a href="#tipos">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoF}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN SIETE: ROBOT CASERO ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="robot">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayG" name="menu"><a href="#robot">Mi primer robot casero</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayG" name="menu"><a href="#concepto">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoG}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN OCHO: INTRODUCCIÓN A LA PROGRAMACIÓN ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="programacion">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayH" name="menu"><a href="#programacion">Introducción a la programación</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayH" name="menu"><a href="#programacion">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoH}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN NUEVE: BLOQUES Vs CÓDIGO ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="bloques-codigo">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayI" name="menu"><a href="#bloques-codigo">Programación por bloques Vs Código</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayI" name="menu"><a href="#bloques-codigo">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoI}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN DIEZ: cONCEPTOS DE PROGRAMACIÓN POR CÓDIGO ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="programacion-codigo">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayJ" name="menu"><a href="#programacion-codigo">Programación básica por código</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayJ" name="menu"><a href="#programacion-codigo">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoJ}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
            {/** SECCIOÓN ONCE: PROGRAMANDO MI PRIMER ROBOT ------------------------------------------------------------------------------*/}
            <section className='containerSecc' id="programacion-robot">            
              <div className="divSecc">     {/** este div contiene el titulo y button "V" */}
                <div className='positionTittle'>     {/** Titulo de la sección */}                  
                  <button className='textDiv' onClick={onDisplay} id="displayK" name="menu"><a href="#programacion-robot">Mi primer robot programado</a></button>
                </div>
                <div className="asideButton">     {/** button "V" */}
                  <aside>
                    <button className='buttonMostrar' onClick={onDisplay} id="displayK" name="menu"><a href="#programacion-robot">V</a></button>
                  </aside>
                </div>
              </div>  
              <div className={stateInfoK}>      {/** Contenido de la sección */}
                <div className='containerSecc'>
                  <h1>Prueba contenido</h1>
                </div>
              </div>
            </section>        
          </body>
          {/** FOOTER ------------------------------------------------------------------------------------------------------------------ */}
          <footer>
            <div>
              <h1>Yohan Rodríguez Garzón</h1>
              <h1>ymrodriguezg.5@gmail.com</h1>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default App;