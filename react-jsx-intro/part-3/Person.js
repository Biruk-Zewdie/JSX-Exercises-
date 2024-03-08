const Person = ({ name, age, hobbies }) => {
    // let reply;
    const eligibility = age >= 18 ? "please go vote!" : "you must be 18";
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    const hobbiesList = hobbies.map(hobbie => <li>{hobbie}</li>)

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>Name: {displayName}</h3>
            <h3>Age: {age}</h3>
            <h3>Eligibility: {eligibility}</h3>
            <h4>Hobbies of {displayName}</h4>
            <ol>{hobbiesList}</ol>
            <hr/>

        </div>
    )

}