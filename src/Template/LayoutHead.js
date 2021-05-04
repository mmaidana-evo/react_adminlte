import "./Layout.css";
import logo from '../logo.svg';

function LayoutHead(){
    return(
        <>
        <div className="headerStyle">
            <div className="columnLeft">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="columnRight tblPadre">
                <div className="tblHijo">
                    Desarrollo en React .JS
                    <br></br>
                    T.P. Modulo N°3
                </div>              
            </div>
        </div>
        </>
    )
}

export default LayoutHead;