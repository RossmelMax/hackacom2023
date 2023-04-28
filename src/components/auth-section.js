import { useState } from "react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import UserTypeSelection from "./user-type-selection";

const AuthSection = (props) => {
    const [hasAccount, setHasAccount] = useState(true);
    const [credentials, setCredetentials] = useState(
        {
            userType: 0
        }
    );

    const handleFormSwap = () => {
        setHasAccount(!hasAccount);
        setCredetentials({ userType: 0 });
    };

    const handleUserTypeChange = (userType) => {
        setCredetentials({ userType });
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <UserTypeSelection onUserTypeChange={ handleUserTypeChange } userType={ credentials.userType }></UserTypeSelection>
            {
                hasAccount ? (<LoginForm onSwap={ handleFormSwap }></LoginForm>) : (<SignupForm onSwap={ handleFormSwap }></SignupForm>)
            }
        </div>
    )
}

export default AuthSection;