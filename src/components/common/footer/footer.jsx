import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer mt-auto py-3 bg-white text-center">
                <div className="container">
                    <span className="text-muted"> Copyright © <span id="year">{new Date().getFullYear()}&nbsp;</span> <Link
                        to="#" className="text-dark fw-semibold">Novaly</Link>.
                        Desarrollado por el equipo de <Link to="https://novaly.com.pe/" target='_blank'>
                            <span className="fw-semibold text-primary text-decoration-underline">Novaly</span>
                        </Link>. Todos los derechos reservados.
                    </span>
                </div>
            </footer>
        </Fragment>
    );
};
export default Footer;
