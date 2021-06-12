import React, {useContext} from 'react'
import {CarritoContext} from "../context/carritoContext"
import {useForm} from "react-hook-form"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import L from "leaflet"

function ComprarView() {

    const {carrito} = useContext(CarritoContext)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const recibirSubmit = (datos) =>{
        console.log(datos)
        //hacer una peticion demas
    }
    // para usar un icono personalizado en el mapa
    const customIcon = new L.icon({
        iconUrl:"https://img-premium.flaticon.com/png/512/1483/1483336.png?token=exp=1623532415~hmac=e576b7463c270c4f0bb7e8d402aeb61a.png",
        iconSize:[50, 50]
    })

    return (
        <div className="container mt-4">
            <h1>Realizar compra</h1>
            <p>Por favor verifique sus productos e indique los datos solicitados</p>
            <div className="row">
                {/* Carrito */}
                <div className="col-12 col-lg-6">
                    <h4>Productos del carrito</h4>
                    <ul className="list-group">
                        {carrito.map((prod, i)=>(
                            <li className="list-group-item d-flex justify-content-between" key={i}>
                                <div className="me-auto">
                                    <span className="fw-bold">{prod.nombre}</span>
                                    <small>Cantidad: {prod.cantidad}</small>
                                </div>
                                <span className="badge bg-dark rounded-pill p-3">
                                    S/ {prod.cantidad * prod.precio}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* form */}
                <div className="col-12 col-lg-6">
                    <h4>Datos del Comprador</h4>
                    <form onSubmit={handleSubmit(recibirSubmit)}>
                        <div className="mb-2">
                            <label className="form-label">
                                Nombres y Apellidos
                            </label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ej. Juan Perez" 
                            // {...register(<nombre_input>, {validaciones})}
                            {...register("nombre", {required:true})}
                            /> 
                            {/* las va a validar y me mostrara un error */}
                            {errors.nombre && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label">
                                Numero Celular
                            </label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="982066936" 
                            {...register("numero",{minLength:9})}
                            /> 
                            {errors.numero && <span className="text-danger">Logintud minima de 9 digitos</span>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label">
                                Ciudad
                            </label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ej. Lima" 
                            {...register("ciudad", {pattern:'[A-Za-z]'})}
                            /> 
                            {errors.ciudad && <span className="text-danger">No permite el uso de caracteres</span>}
                        </div>

                        <MapContainer center={[-11.789542239352159, -77.15345969345981]} zoom={17} style={{height:'400px'}}>
                            {/* TileLayer es la uente de datos que necesita LeaFLET */}
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                            
                            {/* <Marker position={[-11.789542239352159, -77.15345969345981]} > 
                                icon={CustonIcon} borrar
                                <Popup>
                                    <h5>Mi dirección es:...</h5>
                                </Popup>
                            </Marker> */}
                        </MapContainer>

                        <button type="submit" className="btn btn-dark">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ComprarView
