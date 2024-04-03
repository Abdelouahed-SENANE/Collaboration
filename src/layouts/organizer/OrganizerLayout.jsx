
import OrganizerHeader from "../../components/organizer/OrganizerHeader.jsx";
import VueChoice from "../../components/organizer/VueChoice.jsx";
import {useState} from "react";
import Content from "../../components/organizer/Content.jsx";

const OrganizerLayout = () => {
    const [vue,setVue] = useState('announcements');

    function setApplicationsAsMainVue(){
        setVue('applications');
    }
    function setAnnouncementsAsMainVue(){
        setVue('announcements');
    }
    function setCreateAnnouncementAsMainVue(){
        setVue('create');
    }

    return(
        <>
            <OrganizerHeader/>
            <VueChoice setApplicationsAsMainVue={setApplicationsAsMainVue} setAnnouncementsAsMainVue={setAnnouncementsAsMainVue} setCreateAnnouncementAsMainVue={setCreateAnnouncementAsMainVue} activeView={vue}/>
            <Content activeVue={vue}/>
        </>
    )
}

export default OrganizerLayout;