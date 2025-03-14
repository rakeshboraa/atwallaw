export default function LegalTermsGrid() {
    const terms = [
        "Assault", "Bail Hearing", "Mischief", "Drug", "Fraud", "Theft", "Gun Offences",
        "Uttering Threat", "Youth Offences", "Impaired Driving", "Domestic Assault",
        "Aggravated Assault", "Sexual Assault", "Sexual Interference", "Criminal Harassment",
        "Assault-Bodily Harm", "Assault with Weapon"
    ];

    
    return (
        <div className="my-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {terms.map((term, index) => (
                    <div
                        key={index}
                        className="bg-[#0F4C85]  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  text-white px-4 py-2 rounded-lg shadow-md  font-semibold text-center"
                    >
                        {term}
                    </div>
                ))}
            </div>
        </div>
    );
}