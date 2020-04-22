const container = document.querySelector("#App")

/*
Test With Pure Javascript

const App = document.createElement("h2")
App.innerHTML = "Contador com JS"

container.appendChild(App)
*/

//React:

//const App = React.createElement("h2", null, "Contador com React")

function App(props) {
    //const Title = React.createElement("h2", null, props.title)
    //const Contador = React.createElement("h3", null, 0)

    //return React.createElement("div", { className: props.className }, [Title, Contador])

    const [contagem, setContagem] = React.useState(0)

    function increment() {
        //setContagem((anterior) => { return anterior + 1 })
        setContagem( anterior => anterior + 1 )
    }

    function decrement() {
        //setContagem((anterior) => { return anterior - 1 })
        setContagem( anterior => anterior - 1 )
    }

    //Trabalhando com JSX:

    return (<div className="contador">
                <h2>{props.title}</h2>
                <h3>{contagem}</h3> 
                <div>
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                </div>
            </div> )
}

ReactDOM.render(
    //React.createElement(App, { title: "Contador novo" }, null)
    <App title="Contador"></App>
    , container)