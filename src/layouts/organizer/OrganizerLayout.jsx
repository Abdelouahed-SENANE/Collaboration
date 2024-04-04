import VueChoice from "../../components/organizer/VueChoice.jsx";
import { useState } from "react";
import Content from "../../components/organizer/Content.jsx";
import { useAuth } from "../../hooks/contexts/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const OrganizerLayout = () => {
    const { user } = useAuth();
    if (!user.organizer) {
        return <Navigate to={"/"} />;
    }
    const [vue, setVue] = useState("announcements");

    function setApplicationsAsMainVue() {
        setVue("applications");
    }
    function setAnnouncementsAsMainVue() {
        setVue("announcements");
    }
    function setCreateAnnouncementAsMainVue() {
        setVue("create");
    }

    return (
        <>
            <VueChoice
                setApplicationsAsMainVue={setApplicationsAsMainVue}
                setAnnouncementsAsMainVue={setAnnouncementsAsMainVue}
                setCreateAnnouncementAsMainVue={setCreateAnnouncementAsMainVue}
                activeView={vue}
            />
            <Content activeVue={vue} />
        </>
    );
};

export default OrganizerLayout;
