import {KeyRound, PenLine} from "lucide-react";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

export default function LoginForm() {
    const navigate = useNavigate();
    const navigateToRegister = () => {
        // 👇️ navigate to /
        navigate('/register');
    };
    const navigateToMainpage= () => {
        // 👇️ navigate to /
        navigate('/mainpage');
    };
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleLoginClick= async (event:React.FormEvent)=>{
        event.preventDefault();
        const user={username,password}
        console.log(user);
        try {
            const response = await fetch("http://localhost:8081/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem("token", token);
                console.log(token);
                navigateToMainpage();
            } else if (response.status === 400) {
                // Handle registration failure
                console.log("Log in failed");
                // Redirect to the registration page with a query parameter
                // For example, using react-router-dom:
                // history.push("/register?notAdded=true");
            } else {
                console.log("Unexpected response:", response.status);
            }
        } catch (error) {
            console.error("Error during signing up:", error);
        }
    }
    return (

        <div
            className="flex flex-1 flex-col bg-gray-800 w-1/3 h-3/4 mx-auto my-16 opacity-75 hover:opacity-100 rounded-lg">
            <div className="flex  text-gray-100 text-8xl font-semibold my-5 mx-auto">Login</div>
            <form className="flex flex-col text-xl">
                <input type={"email"} placeholder={"E-mail"}  value={username} onChange={(event) => setUsername(event.target.value)}
                       className="mx-14 hover:mx-10 mt-44 h-14 p-5 rounded-l-full transition-all rounded-r-full outline-none"/>
                <input type={"password"} placeholder={"Password"} value={password} onChange={(event) => setPassword(event.target.value)}
                       className="mx-14 hover:mx-10 mt-14 h-14 p-5 rounded-l-full transition-all rounded-r-full outline-none"/>
                <div className="inline-flex my-16 justify-between mx-14">
                    <button
                        className="inline-flex rounded-l-full rounded-r-full bg-green-600 transition-all hover:bg-green-500 py-3 px-16 hover:px-24 font-semibold"
                    onClick={navigateToRegister}>
                        <PenLine/>&nbsp; Register
                    </button>
                    <button
                        className="inline-flex rounded-l-full rounded-r-full bg-cyan-600 transition-all hover:bg-cyan-500 py-3 px-16 hover:px-24 font-semibold"
                    onClick={handleLoginClick}>Login &nbsp;
                        <KeyRound/></button>
                </div>
            </form>
        </div>)
}