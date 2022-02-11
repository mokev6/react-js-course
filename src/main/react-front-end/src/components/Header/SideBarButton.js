import { useState } from "react";

function SideBarButton() {

    const [toggleSideBar, setToggleSideBar] = useState(false);

    const toggleSideBarHandler = () => {
        const className = 'toggle-sidebar';
        if (toggleSideBar) {
            document.body.classList.remove(className);
            setToggleSideBar(false);
        } else {
            document.body.classList.add(className);
            setToggleSideBar(true);
        }
    }

    return (
        <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSideBarHandler} />
    );
}

export default SideBarButton;