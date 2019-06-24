import React from "react"
import { Link } from "react-router-dom"

export default ({ transaction }) => {
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <div className="card">
                <div className="card-body shadow-lg">
                    <h3 className="card-title">Muchas Gracias {transaction.user && transaction.user.name}</h3>
                    {/* <p className="card-text text-secondary"><b>Email: &nbsp;</b>{transaction.user.email && transaction.user.email}</p> */}
                    <p className="card-text text-secondary"><b>Confirmación enviava a : &nbsp;</b>{transaction.user && transaction.user.email}</p>
                    <p className="card-text text-secondary"><b>Direccion de entraga : &nbsp;</b>{transaction.user && transaction.user.address}</p>
                    <p className="card-text text-secondary"><b>Compra realizada : &nbsp;</b>{transaction.createdAt && transaction.createdAt.split('T')[0]}</p>
                    <p className="card-text text-secondary"><b>Estado de compra: &nbsp;</b>{transaction.status && transaction.status.name}</p>
                    <h4 className="card-text text-secondary"><b>Total : &nbsp;</b>{transaction.total}</h4>
                    <div className="text-right">
                        <Link className="btn btn-primary ml-auto" to="/">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// createdAt: "2019-06-24T19:28:42.900Z"
// id: 17
// status: {id: 1, name: "creado", createdAt: "2019-06-24T18:51:04.358Z", updatedAt: "2019-06-24T18:51:04.358Z"}
// statusId: 1
// total: 3800
// updatedAt: "2019-06-24T19:28:42.904Z"
// user: {id: 17, name: "ale", address: "ale", email: "ale@ale.com", password: "79ebee4438f93038532705c7dfb7baac90a25de9", …}
// userId: 17