import React, { useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import './styles/header.css';
import './styles/nav.css';
import './styles/secc1.css';
import './styles/secc2.css';
import './styles/secc3.css';
import './styles/secc4.css';
import './styles/secc5.css';


function App() {
  /** MOSTRAR DIV DE CADA SECCIÓN --------------------------------------------------*/
  const [stateInfoA, setStateInfoA] = useState("divNoMostrar");
  const [stateInfoB, setStateInfoB] = useState("divNoMostrar");
  const [stateInfoC, setStateInfoC] = useState("divNoMostrar");
  const [stateInfoC1, setStateInfoC1] = useState("divNoMostrar");   /** Div marco izquierdo */
  const [stateInfoC2, setStateInfoC2] = useState("divNoMostrar");   /** Div marco derecho general*/
  const [stateInfoC3, setStateInfoC3] = useState("divNoMostrar");   /** Div marco derecho Pregunta*/
  const [stateInfoC4, setStateInfoC4] = useState("divNoMostrar");   /** Div marco derecho Respuesta correcta*/
  const [stateInfoD, setStateInfoD] = useState("divNoMostrar");
  const [stateInfoD1, setStateInfoD1] = useState("divNoMostrar");
  const [stateInfoD2, setStateInfoD2] = useState("divNoMostrar");
  const [stateInfoE, setStateInfoE] = useState("divNoMostrar");
  const [stateInfoE1, setStateInfoE1] = useState("divNoMostrar");
  const [stateInfoE2, setStateInfoE2] = useState("divNoMostrar");
  const [stateInfoE3, setStateInfoE3] = useState("divNoMostrar");
  const [stateInfoE4, setStateInfoE4] = useState("divNoMostrar");
  const [stateInfoE5, setStateInfoE5] = useState("divNoMostrar");
  const [stateInfoF1, setStateInfoF1] = useState("divNoMostrar");
  const [stateInfoF2, setStateInfoF2] = useState("divNoMostrar");
  const [stateInfoF3, setStateInfoF3] = useState("divNoMostrar");
  const [stateInfoF4, setStateInfoF4] = useState("divNoMostrar");
  const [stateInfoF5, setStateInfoF5] = useState("divNoMostrar");
  const [stateInfoF, setStateInfoF] = useState("divNoMostrar");
  const [stateInfoG, setStateInfoG] = useState("divNoMostrar");
  const [stateInfoH, setStateInfoH] = useState("divNoMostrar");
  const [stateInfoI, setStateInfoI] = useState("divNoMostrar");
  const [stateInfoJ, setStateInfoJ] = useState("divNoMostrar");
  const [stateInfoK, setStateInfoK] = useState("divNoMostrar");
  
  const onDisplay = function () {
    var test =document.querySelectorAll('button[name=menu]');
    for(var i=0; i<test.length; i++) {
      test[i].addEventListener("click", function() {
        const stateGeneral = this.id;  
        console.log("El id del botón es "+ stateGeneral);

        if (stateGeneral === "displayA") {
          if (stateInfoA==="divNoMostrar") { setStateInfoA("divMostrarCuadro"); }
          else { setStateInfoA("divNoMostrar"); }
        } else if (stateGeneral === "displayB"){
          if (stateInfoB==="divNoMostrar"){ setStateInfoB("divMostrarCuadro"); } 
          else { setStateInfoB("divNoMostrar"); }
        } else if (stateGeneral === "displayC") {
          if (stateInfoC==="divNoMostrar"){ setStateInfoC("divMostrarCuadro"); } 
          else { setStateInfoC("divNoMostrar"); }
        } else if (stateGeneral === "displayD") {
          if (stateInfoD==="divNoMostrar"){ setStateInfoD("divMostrarCuadro"); } 
          else { setStateInfoD("divNoMostrar"); }
        } else if (stateGeneral === "displayE") {
          if (stateInfoE==="divNoMostrar"){ setStateInfoE("divMostrarCuadro"); } 
          else { setStateInfoE("divNoMostrar"); }
        } else if (stateGeneral === "displayF") {
          if (stateInfoF==="divNoMostrar"){ setStateInfoF("divMostrarCuadro"); } 
          else { setStateInfoF("divNoMostrar"); }
        } else if (stateGeneral === "displayG") {
          if (stateInfoG==="divNoMostrar"){ setStateInfoG("divMostrarCuadro"); }
          else { setStateInfoG("divNoMostrar"); }
        } else if (stateGeneral === "displayH") {
          if (stateInfoH ==="divNoMostrar"){ setStateInfoH("divMostrarCuadro"); } 
          else { setStateInfoH("divNoMostrar"); }
        } else if (stateGeneral === "displayI") {
          if (stateInfoI==="divNoMostrar"){ setStateInfoI("divMostrarCuadro"); } 
          else { setStateInfoI("divNoMostrar"); }
        } else if (stateGeneral === "displayJ") {
          if (stateInfoJ==="divNoMostrar"){ setStateInfoJ("divMostrarCuadro"); } 
          else { setStateInfoJ("divNoMostrar");}
        } else if (stateGeneral === "displayK") {
          if (stateInfoK==="divNoMostrar"){ setStateInfoK("divMostrarCuadro");} 
          else { setStateInfoK("divNoMostrar"); }
        }
      }); 
    }
  } 

  // Funciones respectivos a los botones dentro de cada sección-------------------------------------------------------------
  const onDisplayC1 = () => {   
    if (stateInfoC1==="divNoMostrar") { setStateInfoC1("divMostrarGral"); }   /** Habilita cuadro izquierdo */
    else { setStateInfoC1("divNoMostrar"); }  /** Deshabilita cuadro izquierdo */
  } 
  const onDisplayC2 = () =>{   
    if (stateInfoC1==="divMostrarGral" && stateInfoC2==="divNoMostrar"){    /** Verifica si marco izquierdo se muestra en pantalla  */
      setStateInfoC2();     /** Habilita cuadro derecho general */
      setStateInfoC3();     /** Habilita cuadro derecho pregunta */
      /** setStateInfoC4 se habilita con la función answerQue()*/
    } else {
      setStateInfoC2("divNoMostrar");  
      setStateInfoC4("divNoMostrar");   /** Se deshabilita setStateInfoC4 porque en answerQue() se habilita */
    }
  } 
  const onDisplayD1 = () =>{   
    if (stateInfoD1==="divNoMostrar") { setStateInfoD1("divMostrarGral"); }  /** Habilita cuadro izquierdo */
    else { setStateInfoD1("divNoMostrar"); }   /** Deshabilita cuadro izquierdo */
  } 
  const onDisplayD2 = () =>{   
    if (stateInfoD2==="divNoMostrar" && stateInfoD1==="divMostrarGral"){ setStateInfoD2(); }   /** Habilita cuadro derecho */
    else { setStateInfoD2("divNoMostrar"); }   /** Deshabilita cuadro derecho */
  } 
  
  const onDisplayE1 = () => {   
    if (stateInfoE1==="divNoMostrar") { setStateInfoE1("divMostrarGral"); }   /** Habilita cuadro izquierdo */
    else { 
      setStateInfoE1("divNoMostrar");  /** Deshabilita cuadro izquierdo */
      setStateInfoE3("divNoMostrar");
    }
  } 
  const onDisplayE2 = () =>{   
    if (stateInfoE1==="divMostrarGral" && stateInfoE3==="divNoMostrar"){    /** Verifica si marco izquierdo se muestra en pantalla  */
    setStateInfoE2("divMostrarGral");     /** Habilita cuadro derecho general */
    /** setStateInfoC4 se habilita con la función answerQue()*/
  } else {
    setStateInfoE2("divNoMostrar");       
  }
} 
  const onDisplayE3 = () =>{   
    if (stateInfoE4==="divNoMostrar"){
      setStateInfoE4("divMostrarGral");
    } else{
      setStateInfoE4("divNoMostrar");
    }
  } 
  const onDisplayF1 = () => {   
    if (stateInfoF1==="divNoMostrar") { setStateInfoF1("divMostrarGral"); }   /** Habilita cuadro izquierdo */
    else { 
      setStateInfoF1("divNoMostrar");  /** Deshabilita cuadro izquierdo */
      setStateInfoF3("divNoMostrar");
    }
  } 
  const onDisplayF2 = () =>{   
    if (stateInfoF1==="divMostrarGral" && stateInfoF3==="divNoMostrar"){    /** Verifica si marco izquierdo se muestra en pantalla  */
    setStateInfoF2("divMostrarGral");     /** Habilita cuadro derecho general */
    /** setStateInfoC4 se habilita con la función answerQue()*/
  } else {
    setStateInfoF2("divNoMostrar");       
  }
} 
  const onDisplayF3 = () =>{   
    if (stateInfoF4==="divNoMostrar"){
      setStateInfoF4("divMostrarGral");
    } else{
      setStateInfoF4("divNoMostrar");
    }
  } 
  // PREGUNTAS: -----------------------------------------------------------------------------------------
  const answerQue = () =>{
    if (document.querySelector('input[name=answer]:checked').value === "1"){     /** Verifica validez de la respuesta */    
      let labelId = document.querySelector('input[name=answer]:checked').id;

      if (labelId === "labelAnswerC"){
        setStateInfoC3("divNoMostrar");     /** Oculta marco derecho pregunta */
        setStateInfoC4("divMostrarGral");    /** Habilita marco derecho respuesta correcta */
      } else if (labelId === "labelAnswerE"){
        setStateInfoE2("divNoMostrar");     /** Oculta marco derecho pregunta */
        setStateInfoE3("divMostrarGral");    /** Habilita marco derecho respuesta correcta */
        
      } else if (labelId === "labelAnswerE1"){
       setStateInfoE5("divMostrarGral");    /** Habilita marco derecho respuesta correcta */
      }  else if (labelId === "labelAnswerF"){
        setStateInfoF2("divNoMostrar");     /** Oculta marco derecho pregunta */
        setStateInfoF3("divMostrarGral");    /** Habilita marco derecho respuesta correcta */
        
      } else if (labelId === "labelAnswerF1"){
       setStateInfoF5("divMostrarGral");    /** Habilita marco derecho respuesta correcta */
      }                       
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
                <iframe className="videoOne widthVideo" src="https://www.youtube.com/embed/WlQNLSKwM5Q" title="¿Qué es la Robotica? Para que sirve y cuales son sus disciplinas?!?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                     
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
                      <p className='widthDivTextB textSeccTwoA'>Por siglos, el ser humano ha construido máquinas que imitan partes del cuerpo humano. Los antiguos egipcios unieron brazos mecánicos a las estatuas de sus dioses; los griegos construyeron estatuas que operaban con sistemas hidráulicos, los cuales eran utilizados para fascinar a los adoradores de los templos.<br></br><br></br>El inicio de la robótica actual puede fijarse en la industria textil del siglo XVIII, cuando Joseph Jacquard inventa en 1801 una máquina textil programable mediante tarjetas perforadas. Luego, la Revolución Industrial impulsó el desarrollo de estos agentes mecánicos. Además de esto, durante los siglos XVII y XVIII en Europa fueron construidos muñecos mecánicos muy ingeniosos que tenían algunas características de robots. Jacques de Vauncansos construyó varios músicos de tamaño humano a mediados del siglo XVIII.En 1805, Henri Maillardert construyó una muñeca mecánica que era capaz de hacer dibujos.<br></br><br></br>La palabra robot se utilizó por primera vez en 1920 en una obra llamada "Los Robots Universales de Rossum", escrita por el dramaturgo checo Karel Capek. Su trama trataba sobre un hombre que fabricó un robot y luego este último mata al hombre. La palabra checa 'Robota' significa servidumbre o trabajado forzado, y cuando se tradujo al ingles se convirtió en el término robot.<br></br><br></br>Son varios los factores que intervienen para que se desarrollaran los primeros robots en la década de los 50's. La investigación en inteligencia artificial desarrolló maneras de emular el procesamiento de información humana con computadoras electrónicas e inventó una variedad de mecanismos para probar sus teorías.<br></br><br></br><span className='tabulacion'>    * </span>Las primeras patentes aparecieron en 1946 con los muy primitivos robots para traslado de maquinaria de Devol.<br></br><br></br><span className='tabulacion'>    * </span>En 1954, Devol diseña el primer robot programable.<br></br><br></br><span className='tabulacion'>    * </span>En 1960 se introdujo el primer robot "Unimate'', basada en la transferencia de artículos.<br></br><br></br><span className='tabulacion'>    * </span>En 1961 Un robot Unimate se instaló en la Ford Motors Company para atender una máquina de fundición de troquel.<br></br><br></br><span className='tabulacion'>    * </span>En 1966 Trallfa, una firma noruega, construyó e instaló un robot de pintura por pulverización.<br></br><br></br><span className='tabulacion'>    * </span>En 1971 El "Standford Arm'', un pequeño brazo de robot de accionamiento eléctrico, se desarrolló en la Standford University.<br></br><br></br><span className='tabulacion'>    * </span>En 1978 Se introdujo el robot PUMA para tareas de montaje por Unimation, basándose en diseños obtenidos en un estudio de la General Motors.<br></br><br></br>En la actualidad, la robótica se debate entre modelos sumamente ambiciosos, como es el caso del IT, diseñado para expresar emociones, el COG, tambien conocido como el robot de cuatro sentidos, el famoso SOUJOURNER o el LUNAR ROVER, vehículo de turismo con control remotos, y otros mucho mas específicos como el CYPHER, un helicóptero robot de uso militar, el guardia de trafico japonés ANZEN TARO o los robots mascotas de Sony.</p>        
                    </div>
                  </div>
                </div>                                
                <iframe className="videoOne widthVideo" src="https://www.youtube.com/embed/4Q3vfQKaCQI" title="HISTORIA DE LA ROBÓTICA 🤖 | Los datos más ASOMBROSOS" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                     
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
                <div className='mostrarButtons'>  
                  <div className='divButtonGral justifyButton3'>
                    <button className='buttonAccessDiv' onClick={onDisplayC1}>1</button>
                  </div>
                  <aside className='divButtonGral justifyButton3'>
                    <button className='buttonAccessDiv buttonAccessDiv2' onClick={onDisplayC2}>2</button>
                  </aside>
                </div>
                <div className={stateInfoC1}>      {/** Tutulo de la sección */}
                  <div className='cuadroGral positionCuadroGral3'>
                    <div className='cuadroIn'>
                      <div className='divCuadroGral'>
                        <p className='textCuadrosGral'>La robótica es una disciplina que se ocupa del diseño, operación, manufacturación, estudio y aplicación de autómatas o robots. Para ello, combina la ingeniería mecánica, ingeniería eléctrica, ingeniería electrónica, ingeniería biomédica y las ciencias de la computación, así como otras disciplinas.</p>
                      </div> 
                    </div>
                    <aside className={stateInfoC2}>
                      <div className={stateInfoC3}>
                        <div className='cuadroIn'>
                          <div className='divCuadroGral textCuadrosGral'>
                            <h1 className="container textCuadrosGral" htmlFor='answer'>La robótica tiene en consideración:</h1>
                              <label className="container textCuadrosGral">La ingeniería mecánica, ingeniería de alimentos, ingeniería electrónica, y se encarga del control, operación, y estudio de robots.
                                <input id='labelAnswerC' type="radio" name="answer" value="2"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosGral">La ingeniería eléctrica, ingeniería electrónica y las ciencias de la computación, y se encarga del diseño, operación y aplicación de robots.
                                <input id='labelAnswerC' type="radio" name="answer" value="1"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosGral">Todas las anteriores.
                                <input id='labelAnswerC' type="radio" name="answer" value="3"></input>
                                <span className="checkmark"></span>
                              </label>
                              <label className="container textCuadrosGral">Ninguna de las anteriores.
                                <input id='labelAnswerC' type="radio" name="answer" value="4"></input>
                                <span className="checkmark"></span>
                              </label>  
                              <aside className='divbuttonAnswer'>
                                <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                              </aside>
                          </div> 
                        </div>
                      </div>
                      <div className={stateInfoC4}>
                        <div className='cuadroIn'>
                          <div className='divCuadroGral'>
                            <p className='textCuadrosGral'>La robótica representa la cumbre en la trayectoria de desarrollo tecnológico, es decir, del diseño de herramientas. Su cometido es construir una herramienta que pueda desempeñar muchas de las labores que actualmente desempeña el ser humano, de manera más eficiente y rápida, o en condiciones y ambientes que al ser humano le serían inaccesibles.</p>
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
                <div className='mostrarButtons'>  
                  <div className='divButtonGral justifyButton4'>
                    <button className='buttonAccessDiv' onClick={onDisplayD1}>1</button>
                  </div>
                  <aside className='divButtonGral justifyButton4'>
                    <button className='buttonAccessDiv buttonAccessDiv2' onClick={onDisplayD2}>2</button>
                  </aside>
                </div>
                <div className={stateInfoD1}>
                  <div className='cuadroGral positionCuadroGral4'>
                    <div className='cuadroIn'>
                      <div className='divCuadroGral'>
                        <p className='textCuadrosGral'>Por definición un robot es una máquina automática programable capaz de realizar determinadas operaciones de manera autónoma y sustituir a los seres humanos en algunas tareas</p>
                      </div> 
                    </div>
                    <aside className={stateInfoD2}>
                      <div className='cuadroIn'>
                        <div className='divCuadroGral divCuadroGral2'>
                          <p className='textCuadrosGral'>Como curiosidad, el término “robot” se popularizó por la obra R.U.R (Robots Universales Rossum) de Karel Čapek en 1920. En la traducción al inglés de la obra teatral, la palabra checa “robota”, que significa trabajos forzados o trabajador, fue traducida al inglés como robot.</p>
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
                <div className='mostrarButtons5'>
                  <div className='cuadro5A justify5A'>
                    <button className='buttonAccessDiv' onClick={onDisplayE1}>1</button>
                  </div>
                  <div className={stateInfoE1}>
                    <div className='cuadroIn5A justify5A'>
                      <div className='divCuadroGral'>
                        <p className='textCuadrosGral'>Del mismo modo que los seres vivos se guían por los sentidos, los robots utilizan los sensores. Su función es la de recabar información del entorno, por ejemplo, darse cuenta de si hemos girado la pantalla de un smartphone.Detectan magnitudes físicas o químicas.</p>
                      </div> 
                    </div>
                  </div>
                  <div className='cuadro5A justify5B'>
                    <button className='buttonAccessDiv' onClick={onDisplayE2}>2</button>
                    <div className={stateInfoE2}>
                      <div className='cuadroIn paddingA'>
                        <div className='divCuadroGral textCuadrosGral'>
                          <h1 className="container textCuadrosGral" htmlFor='answer'>Si los sensores en los robots actuan igual que los sentidos en los seres humanos, ¿es correcto afirmar que un robot con ayuda de sus sensores puede esquivar obstáculos?:</h1>
                            <label className="container textCuadrosGral">True.
                              <input id='labelAnswerE' type="radio" name="answer" value="1"></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="container textCuadrosGral">False.
                              <input id='labelAnswerE' type="radio" name="answer" value="2"></input>
                              <span className="checkmark"></span>
                            </label>                                 
                            <aside className='divbuttonAnswer'>
                              <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                            </aside>
                        </div> 
                      </div>
                    </div>
                    <div className={stateInfoE3}>
                      <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/K_JYeWux0VQ" title="Actuadores en robótica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
                    </div>
                  </div>
                  <div className='cuadro5A justify5B'>
                    <button className='buttonAccessDiv' onClick={onDisplayE3}>3</button>
                    <div className={stateInfoE4}>
                      <div className='cuadroIn paddingA'>
                        <div className='divCuadroGral textCuadrosGral'>
                          <h1 className="container textCuadrosGral" htmlFor='answer'>Algunos ejemplos de actuadores en robótica son:</h1>
                            <label className="container textCuadrosGral">Motores, Servomotores y bujias.
                              <input id='labelAnswerE1' type="radio" name="answer" value="2"></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="container textCuadrosGral">Motores, Servomotores y pantallas.
                              <input id='labelAnswerE1' type="radio" name="answer" value="1"></input>
                              <span className="checkmark"></span>
                            </label>                                 
                            <aside className='divbuttonAnswer'>
                              <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                            </aside>
                        </div> 
                        <div className={stateInfoE5}>
                          <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/2SHQTUvvVuM" title="Sistemas de control - Robótica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>

                </div>
                <div>

                </div>





                {/* <div className='mostrarButtons5'>  
                  <aside className='cuadro5A justifyButton5A'>
                    <button className='buttonAccessDiv buttonAccessDiv2' onClick={onDisplayE4}>3</button>
                  </aside>
                  <div className='cuadro5A'>
                    <button className='buttonAccessDiv' onClick={onDisplayE2}>2</button>
                  </div>
                  <aside className='cuadro5A justifyButton5B'>
                    <button className='buttonAccessDiv buttonAccessDiv2' onClick={onDisplayE3}>4</button>
                  </aside>
                  <div className='cuadro5A'>
                    <button className='buttonAccessDiv' onClick={onDisplayE1}>1</button>
                  </div>
                  <div className='button5C'>
                    <button className='buttonAccessDiv' onClick={onDisplayE5}>5</button>
                  </div>
                </div>


                <div className={stateInfoE2}>
                  <div className='cuadroIn'>
                    <div className='divCuadroGral textCuadrosGral'>
                      <h1 className="container textCuadrosGral" htmlFor='answer'>Si los sensores en los robots actuan igual que los sentidos en los seres humanos, ¿es correcto afirmar que un robot con ayuda de sus sensores puede esquivar obstáculos?:</h1>
                        <label className="container textCuadrosGral">True.
                          <input id='labelAnswerE' type="radio" name="answer" value="1"></input>
                          <span className="checkmark"></span>
                        </label>
                        <label className="container textCuadrosGral">False.
                          <input id='labelAnswerE' type="radio" name="answer" value="2"></input>
                          <span className="checkmark"></span>
                        </label>                                 
                        <aside className='divbuttonAnswer'>
                          <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                        </aside>
                    </div> 
                  </div>
                </div>
                <div className={stateInfoE3}>
                  <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/K_JYeWux0VQ" title="Actuadores en robótica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
                </div>
                <div className='mostrarButtons5'>  
                  <div className='divButtonGral5'>
                  </div>
                </div>
                <div className={stateInfoE1}>
                  <div className='cuadroGral5'>
                    <div className='divCuadroGral paddCuadro5'>
                      <h1 className='textCuadrosGral'>Sensores</h1>
                      <p className='textCuadrosGral'>Del mismo modo que los seres vivos se guían por los sentidos, los robots utilizan los sensores. Su función es la de recabar información del entorno, por ejemplo, darse cuenta de si hemos girado la pantalla de un smartphone.Detectan magnitudes físicas o químicas.</p>
                    </div> 
                  </div>
                </div> 
                <div className='mostrarButtons'>  
                </div> */}
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
                <div className='mostrarButtons5'>
                  <div className='cuadro5A justify5A'>
                    <button className='buttonAccessDiv' onClick={onDisplayF1}>1</button>
                  </div>
                  <div className={stateInfoF1}>
                    <div className='cuadroIn5A justify5A'>
                      <div className='divCuadroGral'>
                        <p className='textCuadrosGral'>Actualmente existen diversos tipos de robots para responder a necesidades cada vez más específicas. El mundo de la robótica avanza a pasos agigantados, por lo que es probable que veamos el avance, cada vez más acelerado, de esta industria.</p>
                      </div> 
                    </div>
                  </div>
                  <div className='cuadro5A justify5B'>
                    <button className='buttonAccessDiv' onClick={onDisplayF2}>2</button>
                    <div className={stateInfoF2}>
                      <div className='cuadroIn paddingA'>
                        <div className='divCuadroGral textCuadrosGral'>
                          <h1 className="container textCuadrosGral" htmlFor='answer'>¿El mundo de la robótica avanza a pasos agigantados?:</h1>
                            <label className="container textCuadrosGral">True.
                              <input id='labelAnswerF' type="radio" name="answer" value="1"></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="container textCuadrosGral">False.
                              <input id='labelAnswerF' type="radio" name="answer" value="2"></input>
                              <span className="checkmark"></span>
                            </label>                                 
                            <aside className='divbuttonAnswer'>
                              <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                            </aside>
                        </div> 
                      </div>
                    </div>
                    <div className={stateInfoF3}>
                      <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/f2SMNKuw0AM" title="Clasificación de los robots" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
                    </div>
                  </div>
                  <div className='cuadro5A justify5B'>
                    <button className='buttonAccessDiv' onClick={onDisplayF3}>3</button>
                    <div className={stateInfoF4}>
                      <div className='cuadroIn paddingA'>
                        <div className='divCuadroGral textCuadrosGral'>
                          <h1 className="container textCuadrosGral" htmlFor='answer'>Los robots zoomórficos son:</h1>
                            <label className="container textCuadrosGral">Comunes en los almacenes o industrias para llevar materiales.
                              <input id='labelAnswerF1' type="radio" name="answer" value="2"></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="container textCuadrosGral">Inspirados en seres vivos y se ven en juguetes o haciendo misiones en el espacio.
                              <input id='labelAnswerF1' type="radio" name="answer" value="1"></input>
                              <span className="checkmark"></span>
                            </label>                                 
                            <aside className='divbuttonAnswer'>
                              <button className='buttonAnswer' onClick={answerQue}>Responder</button>                        
                            </aside>
                        </div> 
                        <div className={stateInfoF5}>
                          <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/2SHQTUvvVuM" title="Sistemas de control - Robótica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className={stateInfoG}>
                <iframe className="videoOne widthVideo5" src="https://www.youtube.com/embed/9JnvfEMWZs4" title="Como Hacer Un Robot Casero En 3 Minutos | Súper Fácil" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>                                           
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