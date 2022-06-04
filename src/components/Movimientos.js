import React, { useState } from 'react'
import BarraBusqueda from './BarraBusqueda'
import ListaMovimiento from './ListaMovimiento'
import Badge from 'react-bootstrap/Badge'

const Movimientos = ({
    listMovimientos,
    setListMovimientos,
    setEditMovimiento }) => {

    const [filter, setFilter] = useState({ optionFilter: "Todos", text: "" });

    const deleteMovimiento = (movimiento) => {
        const newListMovimientos = listMovimientos.filter((item) => item.id !== movimiento.id);
        setListMovimientos(newListMovimientos);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="d-flex d-flex justify-content-between   ">
                        <span>Listado Movimientos</span>
                        <Badge bg="primary">{listMovimientos.length}</Badge>
                    </div>
                </div>
                <div className="card-body">
                    <BarraBusqueda
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <ListaMovimiento
                        listMovimientos={listMovimientos}
                        deleteMovimiento={deleteMovimiento}
                        setEditMovimiento={setEditMovimiento}
                        filter={filter}
                    />
                </div>
            </div>

        </>
    )
}

export default Movimientos