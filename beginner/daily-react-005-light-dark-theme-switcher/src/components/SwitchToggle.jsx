
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const SwitchToggle = ({ isLightMode, onClick }) => {
    return (
        <div className="switch-container">
            <div className="switch">
                <CiLight className={`switch-light ${isLightMode ? "active" : ""}`} onClick={onClick} />
                <MdDarkMode className={`switch-dark ${!isLightMode ? "active" : ""}`} onClick={onClick} />
            </div>
        </div>
    )
}

export default SwitchToggle