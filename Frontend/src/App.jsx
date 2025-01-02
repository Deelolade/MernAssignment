import { useState } from "react";

const App = () => {
    const [users, setUsers] = useState([])
    const GetUsers = async () => {
        try {
            const apilink = await fetch("http://localhost:5000/api/get-users");
            const response = await apilink.json();
            setUsers(response)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (

        <div>
            {users.map((user) => (
                <div key={user._id}>
                    {/* <p>ID: {user._id}</p> */}
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
            ))}
            <button onClick={GetUsers}>click</button>

        </div>
    )
}

export default App
