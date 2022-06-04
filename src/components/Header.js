import Saldos from './Saldos'

const Header = (
    {
        saldoInicial, setSaldoInicial,
        saldoFinal, calcularSaldoFinal
    }
) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://getbootstrap.com/">
                        <img
                            alt="logo"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            width="70"
                            height="70"
                            className='p-2'
                        />
                        <h4 className="d-inline-block align-center">Control de Gastos</h4>
                    </a>
                    <Saldos

                        saldoInicial={saldoInicial}
                        setSaldoInicial={setSaldoInicial}
                        saldoFinal={saldoFinal}
                        calcularSaldoFinal={calcularSaldoFinal}
                    />
                </div>
            </nav>
        </>
    )
}

export default Header