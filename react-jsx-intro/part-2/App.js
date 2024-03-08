const App = () => {
    return (
        <div>
        <Tweet 
        name= "Mr. tweet" 
        username = "@elonMusk" 
        date = "12:41 PM - 11 Mar 2024" 
        message = "Changed my name to Mr. Tweet, now twitter won't let me change it back again 🤣🤣🤣" />

        <Tweet 
        name = "Melvina Jackson"
        username = "@Melvina_J"
        date = "10:23 AM - 12 Dec 2023"
        message = "I can neither confirm nor deny that this is my first tweet."
        />

        <Tweet 
        name = "Donald J. Trump"
        username = "@realDonaldTrump" 
        date = "02:53 PM - 16 Nov 2016"
        message = "Such an important and beautiful evening! The forgotten man and woman will never be forgotten again."/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))