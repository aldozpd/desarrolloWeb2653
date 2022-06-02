import { Link } from "react-router-dom";
import '../formulario.css';

export default function Formulario() {
    return (
      <main >
         <>
      <nav className="navbar  header">
        
        <div className="container-fluid ">
      
          <img src='https://th.bing.com/th/id/R.6aa268311ceca03cf31daa7ba807e4af?rik=3800crokkLKV1A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-IX6cXMT-_1I%2fT0fLEUWHhJI%2fAAAAAAAAACs%2fU14G2CAZLJE%2fs1600%2fFesa.jpg&ehk=1hkY13N4NAcrhrubVDx8GsGzVGUb%2bTrwelisNo3eQYU%3d&risl=&pid=ImgRaw&r=0' alt="" width="110" height="102" className="d-inline-block align-text-top"/>
          <h1>UNAM FACULTAD DE ESTUDIOS SUPERIORES ACATLAN</h1>
          <button className="button" ></button>
      
        </div>
      </nav>
      <div className='fondo'>
      <form className='formulario'>
          <p className='tex'>¡Por una Universidad sin violencia!</p>
          <p>Es necesario estar registrado para poder hacer una denuncia, si no lo estas, registrste aqui. <Link to="/registro">Registrate</Link></p>
          <p for="si, no">¿Deseas que tu denuncia sea anonima? <input type="radio" id="si" name="resp" value="SI"/> Si <input type="radio" id="no" name="resp" value="NO"/> No</p>
          <p for="si, no">Sexo: <input type="radio" id="masculino" name="resp_sexo" value="MASCULINO"/> Masculino <input type="radio" id="femenino" name="resp_sexo" value="FEMENINO"/> Femenino</p>
          <p>Nombres</p>
          <input className='form-control' type="text" name="nombres" placeholder="Nombres"></input>
          <p>Apellido Paterno</p>
          <input className='form-control' type="text" name="apellidopaterno" placeholder="Apellido Paterno"></input>
          <p>Apellido Materno</p>
          <input className='form-control' type="text" name="apellidomaterno" placeholder="Apellido Materno"></input>
          <p>Numero de cuenta</p>
          <input className='form-control' type="text" name="numerodecuenta" placeholder="Solo numeros sin guiones"></input>
          <p> Carrera</p>
          <input className='form-control' type="text" name="carrera" placeholder="Carrera"></input>
          <p>Turno</p>
          <input className='form-control' type="text" name="turno" placeholder="Turno"></input>
          <p>Denunciado: Profesor <input type="radio" id="profesor" name="resp_denunciado" value="PROFESOR"/> Alumno <input type="radio" id="alumno" name="resp_denunciado" value="ALUMNO"/> otro <input type="radio" id="otro" name="resp_denunciado" value="OTRO"/></p>
          <p>¿Que fue lo que paso?</p>
          <input className='form-control' type="text" name="denuncia" placeholder="Cuentanos lo sucedido"></input>
          <p></p>
          
          <button className='guardar form-control btn btn-primary' type="submit"> Guardar</button>
          
      </form>
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
      </main>
    );
  }