import { Link } from "react-router-dom";
import '../Login.css';

export default function Login() {
    return (
      <main>
        <>
    <nav className="navbar  header">
        
        <div className="container-fluid ">
      
          <img src='https://th.bing.com/th/id/R.6aa268311ceca03cf31daa7ba807e4af?rik=3800crokkLKV1A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-IX6cXMT-_1I%2fT0fLEUWHhJI%2fAAAAAAAAACs%2fU14G2CAZLJE%2fs1600%2fFesa.jpg&ehk=1hkY13N4NAcrhrubVDx8GsGzVGUb%2bTrwelisNo3eQYU%3d&risl=&pid=ImgRaw&r=0' alt="" width="110" height="102" className="d-inline-block align-text-top"/>
          <h1>UNAM FACULTAD DE ESTUDIOS SUPERIORES ACATLAN</h1>
          <button className="button" ></button>
      
        </div>
      </nav>
    <div className='pagelog'>
          <form className='form'>
            <p>Usuario</p>
            <input type="text" name="user" placeholder="Usuario"></input>
            <p>Password</p>
            <input type="password" name="password" placeholder="Pasword"></input>
            <p>.</p>
            <input type="submit" value="ingresar"></input>
            <p></p>
            <Link className="button-registro" to="/registro">Registrate</Link> 
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