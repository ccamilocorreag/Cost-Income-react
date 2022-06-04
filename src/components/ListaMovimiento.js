import React from 'react'
import ItemMovimiento from './ItemMovimiento'

function ListaMovimiento({ listMovimientos, deleteMovimiento, setEditMovimiento, filter }) {

    return (
        <>
            <div className='mt-3'>
                {(filter.optionFilter !== "Todos" && filter.text !== ""
                    ? listMovimientos.filter((item) => item.nombre.includes(filter.text) && item.tipoMovimiento === filter.optionFilter)
                    : filter.optionFilter !== "Todos" && filter.text === ""
                        ? listMovimientos.filter((item) => item.tipoMovimiento === filter.optionFilter)
                        : filter.optionFilter === "Todos" && filter.text !== ""
                            ? listMovimientos.filter((item) => item.nombre.includes(filter.text))
                            : listMovimientos).map((movimiento) => (
                                <ItemMovimiento
                                    key={movimiento.id}
                                    movimiento={movimiento}
                                    setEditMovimiento={setEditMovimiento}
                                    deleteMovimiento={deleteMovimiento}
                                />
                            ))}
            </div>
        </>
    )
}

export default ListaMovimiento