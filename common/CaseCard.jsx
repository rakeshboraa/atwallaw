const CaseCard = ({ icon: Icon, title, caseRef, description, buttonText }) => {
    return (
        <div className='w-full gap-5 flex shadow-2xl flex-col h-auto bg-white border-2 border-[#0F4C85] rounded-lg p-6 sm:p-4 md:p-5 lg:p-6'>
            <Icon className='h-11 w-11 text-[#0F4C85]' />
            <div className='flex flex-col sm:flex-row justify-between font-bold text-[20px] sm:text-[22px] md:text-[24px] w-full'>
                <h2 className='truncate'>{title}</h2>
                <span className='text-right'>{caseRef}</span>
            </div>
            <p className='text-[16px] sm:text-[18px] leading-6 sm:leading-7'>
                {description.length > 330 ? description.substring(0, 300) + "...." : description}
            </p>
            <div className='flex w-full justify-end mt-3'>
                <button className='px-4 sm:px-5 h-[45px] sm:h-[50px] rounded-lg border-solid border-2 border-[#0F4C85] hover:bg-[#0F4C85] hover:text-white transition-all duration-300'>
                    {buttonText} <span>&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default CaseCard;
