import Announcement from "./Announcement.jsx";

const MyAnnouncements = () => {

    return(
        <div className='flex w-full flex-wrap gap-[2rem]'>
            <Announcement/>
            <Announcement/>
            <Announcement/>
        </div>
    )
}
export default MyAnnouncements;