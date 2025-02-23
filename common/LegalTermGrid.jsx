export default function LegalTermsGrid() {
    const terms = [
        "Assault", "Bail Hearing", "Mischief", "Drug", "Fraud", "Theft", "Gun Offences",
        "Uttering Threat", "Youth Offences", "Impaired Driving", "Domestic Assault",
        "Aggravated Assault", "Sexual Assault", "Sexual Interference", "Criminal Harassment",
        "Assault-Bodily Harm", "Assault with Weapon"
    ];

    return (
        <div className="my-10">
            <div className="flex flex-wrap gap-4 ">
                {terms.map((term, index) => (
                    <div
                        key={index}
                        className="bg-[#0F4C85] text-white px-4 py-2 rounded-lg shadow-md  text-lg font-semibold whitespace-nowrap"
                    >
                        {term}
                    </div>
                ))}
            </div>
        </div>
    );
}