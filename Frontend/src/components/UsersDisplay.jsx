import { useState } from "react";
import { Link } from "react-router-dom";

const UsersDisplay = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const GetUsers = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
            const apilink = await fetch("http://localhost:5000/api/get-users");
            const response = await apilink.json();
            setUsers(response)
        }
        catch (err) {
            console.log(err)
            setIsError(true)
        }
        finally {
            setIsLoading(false)
        }
    }
    return (

        <div className="h-auto  py-4 flex items-center  " >
            <div className="border-2 border-slate-900 w-[30%] mx-auto p-5 rounded-2xl ">
                <h1 className="text-center text-black text-5xl font-extrabold">See All Members</h1>
                {users.length > 0 ? users.map((user) => (
                    <div key={user._id} className="mx-auto text-black w-[50%]">
                        <strong className="text-left text-xl underline">Member's Details</strong>
                        <p>Name: <strong>{user.username}</strong></p>
                        <p>Email:  <strong>{user.email}</strong></p>
                        <p>PhoneNumber: <strong>{user.phone}</strong></p>
                        <p>Age: <strong>{user.age}</strong></p>

                    </div>
                ))
                    : <div className="flex items-center justify-center min-h-52">
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>}
                <div className="text-center flex justify-between w-52 mx-auto my-3">
                    <button onClick={GetUsers} className="btn btn-primary hover:text-white">display all </button>
                    <button onClick={() => setUsers([])} className="btn btn-error hover:text-white">Cancel all</button>
                </div>
                <div className="flex justify-center">
                    <Link to="/form" className="btn btn-wide text-center  hover:text-white" >Create new user</Link>
                </div>
            </div>
        </div>
    )
}


export default UsersDisplay
