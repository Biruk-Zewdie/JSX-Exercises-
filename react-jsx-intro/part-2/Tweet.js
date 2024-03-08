const Tweet = ({ username, name, date, message }) => {
    return (
        <div>
            <div class="tweet-header">
                <h4>
                    {name}
                    <span class = "username" >{username}</span>
                    <span class = "date">{date}</span>
                </h4>
            </div>
            <div>
                <p>{message}</p>
            </div>
            <hr/>
        </div>
    )
}