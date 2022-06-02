import './App.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
    <>
      <nav className="navbar  header">
        <div className="container-fluid ">
      
          <img src='https://th.bing.com/th/id/R.6aa268311ceca03cf31daa7ba807e4af?rik=3800crokkLKV1A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-IX6cXMT-_1I%2fT0fLEUWHhJI%2fAAAAAAAAACs%2fU14G2CAZLJE%2fs1600%2fFesa.jpg&ehk=1hkY13N4NAcrhrubVDx8GsGzVGUb%2bTrwelisNo3eQYU%3d&risl=&pid=ImgRaw&r=0' alt="" width="110" height="102" className="d-inline-block align-text-top"/>
          <h1>UNAM FACULTAD DE ESTUDIOS SUPERIORES ACATLAN</h1>
          <Link className='button' to="/login">Login</Link> 
      
        </div>
      </nav>
      <div className='color'>
        <div className="container sangria">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 ">
              <h2 className='orient'>DENUNCIAS DE VIOLENCIA DE GENERO FES ACATLAN</h2>
            </div>
    
          </div>
          <div className="row center">
    
            <div className="col-12 orient "><h4>¿Que es Violencia?</h4></div>
    
            <div className="col-12 orient">La violencia, es toda conducta o amenaza que se realiza de manera consiente y que causa daño físico, 
              psicológico, sexual o económico. </div>
            <div className="col-12 orient"><h4>¿Que es violencia de genero?</h4></div>
            <div className="col-12 orient">Se conoce como violencia de género al maltrato que ejerce un sexo hacia el otro, que puede 
              ser de hombre hacia la mujer o viceversa. </div>
            <div className="col-12 orient"><h4>Tipos de violencia.</h4></div>
            <div className="col-12 orient"><h5>-Violencia Física:</h5>Golpes, empujones, patadas, pellizcos y mordidas, son algunos de los daños que puede generar este tipo de violencia, en la que también se llegan a usar armas u objetos, con el propósito de causar daños en la víctima.</div>
            <div className="col-12 orient"><h5>-Violencia Psicológica:</h5> Abandono, celos, insultos, humillaciones, marginación, indiferencia, desamor, infidelidad, comparaciones destructivas, rechazo y amenazas, son actos que dañan el equilibrio emocional de quien los sufre.</div>
            <div className="col-12 orient"><h5>-Violencia Económica:</h5> Se refiere a las limitaciones de dinero o posesiones que llevan a la dependencia y control sobre la persona afectada. Se presenta tanto en el hogar como en centros de trabajo.</div>
            <div className="col-12 orient"><h5>-Violencia Sexual: </h5>Se conoce como violencia sexual, al acto en el que alguien degrada o daña el cuerpo de otra persona, sin tomar en cuenta sus deseos o ideas, dañando su integridad física o mental, y ejerce poder para convertirla en un objeto sexual.</div>
            <div className="col-12 orient"><h4>¿Que hacer en caso de presentar un caso de violencia en la escuela?</h4></div>
            <div className="col-12 orient">Entrar en la plataforma Violencia De Genero UNAM Fes Acatlan y realizar un formulario para hacerle saber a las autoridades lo que esta sucediendo y asi acabar con tu problema</div>
            
            
            < Link className='button-denuncia' to="/formulario">Hacer Una Denuncia</Link>
            
          </div>
        </div>
      </div>
      <nav className="navbar  footer">
        <div className="container-fluid ">
          <p></p>
          <p>Creadores del sitio web: 
          Aldo Oaxaca Zepeda y 
          Angel Axel Sanchez Sanchez
          </p>
          <img src='https://th.bing.com/th/id/R.b21ff1828387240396be011d0de3bc19?rik=GGo4jbBTm9d1rw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_RSkGwuzKjpw%2fTJ_Mm68r7tI%2fAAAAAAAAAAY%2fYOPnV4VEuFY%2fs320%2fMAC.bmp&ehk=GwY2a1IZozmZu2VEgO3qmWnKK0ABzf%2f47NDK67lXksY%3d&risl=&pid=ImgRaw&r=0' alt="" width="110" height="102" className="d-inline-block align-text-top"/>
        </div>
      </nav>
    </>
    </div>
  );
}