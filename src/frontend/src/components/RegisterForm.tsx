import {useNavigate} from "react-router-dom";
import {Power, SendHorizonal} from "lucide-react";
import React, {useState} from "react";

export default function RegisterForm(){
    const navigate = useNavigate();
    const navigateToLogin = () => {
        // 👇️ navigate to /
        navigate('/login');
    };
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [address,setAddress] = useState('')
    const handleRegisterClick = async (event:React.FormEvent) => {
        event.preventDefault();
        const user = { username, password, firstname, lastname, address };
        console.log(user);

        try {
            const response = await fetch("http://localhost:8081/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log("User added successfully");
                navigateToLogin();
            } else if (response.status === 400) {
                // Handle registration failure
                console.log("User not added");
                // Redirect to the registration page with a query parameter
                // For example, using react-router-dom:
                // history.push("/register?notAdded=true");
            } else {
                console.log("Unexpected response:", response.status);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return ( <div
        className="flex flex-1 flex-col bg-gray-800 w-1/3 h-3/4 mx-auto my-16 opacity-75 hover:opacity-100 rounded-lg">
        <div className="flex  text-gray-100 text-8xl font-semibold my-5 mx-auto">Register</div>
        <form className="flex flex-col text-xl">
            <input type={"email"} placeholder={"E-mail"} value={username} onChange={(event) => setUsername(event.target.value)}
                   className="mx-24 hover:mx-12 mt-8 h-14 p-4 rounded-l-full transition-all rounded-r-full outline-none"/>
            <input type={"password"} placeholder={"Password"} value={password} onChange={(event) => setPassword(event.target.value)}
                   className="mx-24 hover:mx-12 mt-8 h-14 p-4 rounded-l-full transition-all rounded-r-full outline-none"/>
            <input type={"text"} placeholder={"First Name"} value={firstname} onChange={(event) => setFirstname(event.target.value)}
                   className="mx-24 hover:mx-12 mt-8 h-14 p-4 rounded-l-full transition-all rounded-r-full outline-none"/>
            <input type={"text"} placeholder={"Last Name"} value={lastname} onChange={(event) => setLastname(event.target.value)}
                   className="mx-24 hover:mx-12 mt-8 h-14 p-4 rounded-l-full transition-all rounded-r-full outline-none"/>
            <input type={"text"} placeholder={"Adress"} value={address} onChange={(event) => setAddress(event.target.value)}
                   className="mx-24 hover:mx-12 mt-8 h-14 p-4 rounded-l-full transition-all rounded-r-full outline-none"/>
            <div className="inline-flex my-10 justify-between mx-16">
                <button
                    className="inline-flex rounded-l-full rounded-r-full bg-green-600 transition-all hover:bg-green-500 py-3 px-10 hover:px-14 font-semibold"
                    onClick={navigateToLogin}>
                    <Power/>&nbsp; Back to Login
                </button>
                <button
                    className="inline-flex rounded-l-full rounded-r-full bg-cyan-600 transition-all hover:bg-cyan-500 py-3 px-16 hover:px-20 font-semibold"
                    onClick={handleRegisterClick}>
                    Submit &nbsp; <SendHorizonal/>
                </button>
            </div>
        </form>
    </div>)
}