import "./navbar.css"
function Navbar(props){
    return(
        <section className={props.mode ? "nav": "nav light" }>
            <div className="title-logo">
                <img width="50px"src="https://www.cdnlogo.com/logos/r/85/react.svg" alt="" />
                <h1>React Facts</h1>
            </div>
            <div className= {props.mode ? "toggler" : "toggler light-toggler"}>
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggle}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </section>
    )
}

export default Navbar