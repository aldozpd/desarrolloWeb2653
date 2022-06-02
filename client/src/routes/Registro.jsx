
export default function Registro() {
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
                    <p className="tex">Registrate para hacer denuncias</p>
                    <p>Nombre</p>
                    <input className='form-control' type="text" name="nombre" placeholder="Nombres"></input>
                    <p>Apellidos</p>
                    <input className='form-control' type="text" name="apellidos" placeholder="Apellido paterno y materno"></input>
                    <p>Numero de cuenta</p>
                    <input className='form-control' type="number" name="numerodecuenta" placeholder="Numero de cuenta sin guiones"></input>
                    <p>Elija una contraseña segura. </p>
                    <input type="password" placeholder="Utilizar puro numero"></input>
                    <p for="si, no">Soy: Alumno <input type="radio" id="alumno" name="resp_soy" value="ALUMNO"/> Profesor <input type="radio" id="profesor" name="resp_soy" value="PROFESOR"/> </p>
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