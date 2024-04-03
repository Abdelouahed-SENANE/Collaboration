

const CreateAnnouncement = () => {
    return(
        <form className='w-full flex flex-col gap-[1.25rem] items-center justify-center py-[2rem]'>
            <div className="w-[40%]">
                <input type="text"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                       placeholder="Phone"/>
            </div>
            <div className="w-[40%]">
                <input type="text"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                       placeholder="Description"/>
            </div>
            <div className="w-[40%]">
                <input type="datetime-local"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                       placeholder="Description"/>
            </div>
            <div className="w-[40%]">
                <input type="text"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                           placeholder="Location"/>
            </div>
            <div className="w-[40%]">
                <input type="text"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                           placeholder="Type"/>
            </div>
            <div className="w-[40%]">
                <input type="text"
                       className="w-full h-12 px-4 py-1 rounded-md border border-third text-gray focus:outline-none"
                           placeholder="Required Skills"/>
            </div>
            <button className='px-[0.5rem] py-[0.4rem] rounded-lg w-[25%] bg-pink text-white font-medium mt-[1rem]'>Submit</button>

        </form>
    )
}

export default CreateAnnouncement;