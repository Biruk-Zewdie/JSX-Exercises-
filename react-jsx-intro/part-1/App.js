const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name = "Biruk Zewdie"/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))