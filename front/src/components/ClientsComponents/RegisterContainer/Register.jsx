import React from 'react';
import { Link } from 'react-router-dom';

export default ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <div className="col-md-12">
                <h1 className="text-center mt-3">Registrate</h1>
                <hr />
            </div>

            {/* <!-- ACA EMPIEZA LA COLUMNA IZQUIERDA DE LA PANTALLA (FOTOS)--> */}
            <div className="row">
                <div className="col-md-9 banner-sec">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src="https://s2.eestatic.com/2018/04/23/corazon/famosos/Belen_Esteban_Menendez-David_Bisbal-Pelayo_Diaz-Maria_Lapiedra-Famosos_301982131_74980857_1024x576.jpg" alt="First slide" width="1024px" height="675px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="banner-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ACA TERMINA LA COLUMNA IZQUIERDA DE LA PANTALLA (FOTOS)-->
    <!-- ACA EMPIEZA LA COLUMNA DERECHA DE LA PANTALLA (FORM)--> */}
                <div className="col login-sec">


                    <form className="login-form clearfix" onSubmit={handleSubmit}>
                    <div className="form-group">
                            <label>Nombre</label>
                            <input id="name" type="username" className="form-control" name="name" onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label>Domicilio</label>
                            <input id="address" type="username" className="form-control" name="address" onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input id="email" type="username" className="form-control" name="email"  onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input id="password" type="password" className="form-control" name="password" onChange={handleChange} />

                        </div>
                       
                        <button type="submit" className="btn btn-success float-right">Ingresar</button>
                    </form>

                    {/* <div className="text-danger font-weight-bold">
                    <ul>

                    </ul>
                </div> */}
                    <div className="etc-login-form clearfix mt-2">
                        <div className="text-center"><p>Ya tenes cuenta? <br /><Link to={`/login`} >Ingresa acá</Link></p></div>
                    </div>

                    {/* <!-- PARA IMPRIMIR LOS ERRORES --> */}

                </div>
                {/* <!-- ACA TERMINA LA COLUMNA DERECHA DE LA PANTALLA (FORM)--> */}
            </div>
        </div >
    );
}