const CaseCard = ({ icon: Icon, title, caseRef, description, buttonText }) => {
    return (
        <div className='w-full gap-5 flex flex-col h-auto bg-[#191F29] rounded-lg p-6'>
            <Icon className='h-11 w-11 text-red-700' />
            <div className='flex justify-between font-bold text-[24px] w-full'>
                <h2>{title}</h2>
                <span>{caseRef}</span>
            </div>
            <p className='text-[18px] leading-7'>
                {description.length > 330 ? description.substring(0, 330)+"...." : description}
            </p>
            <div className='flex w-full justify-end'>
                <button className='px-5 h-[50px] rounded-lg border-solid border-2 border-[#FF000066]'>
                    {buttonText} <span>&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default CaseCard;