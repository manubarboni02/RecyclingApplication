import PageHeader from "../components/PageHeader.tsx";
import LoginForm from "../components/LoginForm.tsx";
import RegisterForm from "../components/RegisterForm.tsx";
import {Atom, Leaf} from "lucide-react";
function AuthenticationTitle(){
    return <div>
        Welcome to my&nbsp;
        <span className="inline-flex text-cyan-600">React<Atom/></span>
        &nbsp;and&nbsp;
        <span className="inline-flex text-green-600">SpringBoot<Leaf/></span>
        &nbsp;application
    </div>
}

export default function AuthenticationPage(){
    return <div className="bg-cover bg-no-repeat bg-login h-screen">
        <PageHeader username={"ionut"} title={<AuthenticationTitle/>}/>
        {window.location.pathname.match("/login") && <LoginForm/>}
        {window.location.pathname.match("/register") && <RegisterForm/>}
    </div>;
}