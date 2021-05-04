import "./Layout.css";
import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';

function Layout(){
    return(
        <>
        <div className="App">
            <header className="App-header">
                <div className="headerStyle">
                    <div className="columnLeft">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="columnRight tblPadre">
                        <div className="tblHijo">
                            Desarrollo en React .JS
                            <br></br>
                            T.P. Modulo N°2
                        </div>              
                    </div>
                </div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/other">Other</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="formStyle">
                    <fieldset>
                        <legend><span class="balloon">!</span> Titulo</legend>
                        <main>Contenido</main>
                    </fieldset>
                </div>
            </header>
        </div>
        </>
    )
}

export default Layout;