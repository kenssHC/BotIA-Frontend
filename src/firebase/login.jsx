import { Fragment, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Tab } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseapi';
import { connect } from "react-redux";
// import { LocalStorageBackup } from '../components/common/switcher/switcherdata/switcherdata';
import { LocalStorageBackup } from '../components/common/switcher/switcherdata';

import { ThemeChanger } from "../redux/action";
import logo from "../assets/img/logo.png";


const Login = ({ ThemeChanger }) => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
    });
    const { email, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const navigate = useNavigate();
    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboard`;
        navigate(path);
    };

    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); routeChange(); }).catch(err => { console.log(err); setError(err.message); });
    };
    const Login1 = () => {
        if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
            routeChange();
        }
        else {
            setError("The Auction details did not Match");
            setData({
                "email": "adminreact@gmail.com",
                "password": "1234567890",
            });
        }
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center align-items-center authentication vh-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="shadow-sm border-0 p-4">
                            <div className="text-center mb-4">
                                <img src={logo} alt="logo" style={{ height: 40 }} className="mb-4" />
                                <h4 className="fw-bold mb-2">Bienvenido de nuevo</h4>
                                <p className="text-muted mb-4">Ingresa tu usuario y contraseña para continuar</p>
                            </div>

                            <Form onSubmit={(e) => { e.preventDefault(); Login1(); }}>
                                {err && <Alert variant="danger">{err}</Alert>}

                                <Form.Group className="mb-3">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="email"
                                        placeholder="Ingresa tu correo"
                                        name="email"
                                        value={email}
                                        onChange={changeHandler}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            size="lg"
                                            type={passwordshow1 ? 'text' : 'password'}
                                            placeholder="Ingresa tu contraseña"
                                            name="password"
                                            value={password}
                                            onChange={changeHandler}
                                            required
                                        />
                                        <Button
                                            variant="outline-light"
                                            onClick={() => setpasswordshow1(!passwordshow1)}
                                        >
                                            <i className={`ri-${passwordshow1 ? 'eye-line' : 'eye-off-line'} text-dark`}></i>
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                <div className="text-end mb-3">
                                    <Link to={`${import.meta.env.BASE_URL}custompages/forgotpassword`} className="text-primary fw-normal fs-14">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>

                                <div className="d-grid">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        style={{ backgroundColor: '#5B6EF5', border: 'none' }}
                                    >
                                        Continuar
                                    </Button>
                                </div>

                                <p className="text-center text-muted fs-12 mt-4">
                                    ¿No tienes cuenta?{' '}
                                    <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="text-primary">
                                        Regístrate
                                    </Link>
                                </p>
                            </Form>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
