const App = () => {
    return (
        <div>
            <Person name = "BirukZewdie" age = {28} hobbies={["Swimming", "Travel", "playing games", "watching movies"]}/>
            <Person name = "clara" age = {16} hobbies={["Gym workout", "Cooking", "Zoo", "Shopping"]}/>
            <Person name = "Linda" age = {18} hobbies={["Museum", "Running", "Playing tennis", "Hunting"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));