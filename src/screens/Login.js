import AuthSection from "../components/auth-section";
import InfoSection from "../components/info-section";


const Login = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 scroll-smooth">
            <div className="flex justify-center">
                <InfoSection></InfoSection>
            </div>
            <div className="h-screen sticky top-0 flex justify-center bg-accent">
                <AuthSection></AuthSection>
            </div>
        </div>
    )
}

export default Login;