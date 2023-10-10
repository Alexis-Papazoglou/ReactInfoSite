import "./mainContent.css"


function MainContent(props){
    return (
        <section className="main-content">
            <div className={props.mode ? "content-list" : "content-list light"}>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created bu Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </section>

    )
}

export default MainContent