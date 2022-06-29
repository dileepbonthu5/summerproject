const user = {
    id: 1444,
    username: "bonthud1"
}

const Sports = (props) => {
    return (
        <div>
            <h2 className="text-center"> {user.username}'s Favourite Sports </h2>
            <ul>
                {
                   props.sports.map((sport) => 
                   <li key={sport.id}> {sport.title} </li>
                   )
                }
            </ul>
        </div>
    );
}

export default Sports;