import { BsFillPersonFill, BsFillBuildingsFill } from 'react-icons/bs';

const UserTypeSelection = (props) => {
    const selectedStyle = "bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    const notSelectedStyle = "text-black shadow-sm hover:border hover:border-indigo-600";

    return (
        <div className="flex justify-center">
            <button
                onClick={ () => props.onUserTypeChange(0) }
                type="submit"
                className={`flex flex-col w-1/4 justify-center rounded-l-full ${props.userType === 0 ? selectedStyle : notSelectedStyle}`}
            >
                <BsFillPersonFill className='text-xl w-full' />
                <span className='w-full'>Usuario</span>
            </button>
            <button
                onClick={ () => props.onUserTypeChange(1) }
                type="submit"
                className={`flex flex-col w-1/4 justify-center rounded-r-full ${props.userType === 1 ? selectedStyle : notSelectedStyle}`}
            >
                <BsFillBuildingsFill className='text-xl w-full' />
                <span className='w-full'>Organizacion</span>
            </button>
        </div>
    )
}

export default UserTypeSelection;