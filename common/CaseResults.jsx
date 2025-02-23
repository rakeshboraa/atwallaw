import { VenusAndMars } from "lucide-react";

const cases = [
    {
        title: "R v. P, T",
        charges: "Sexual Assault and Sexual Interference",
        result:
            "Acquitted at trial. A successful pre-trial application was brought to produce the counselling records of the complainant. At trial, complainant’s evidence was challenged, including statements contained in the third-party records, highlighting issues with her reliability and credibility. Our client also testified, and the court found his testimony credible and gave it weight in their decision. The court subsequently acquitted him of all charges.",
    },
    {
        title: "R. v. S, H",
        charges: "Sexual Assault X2 and Assault",
        result:
            "Withdrawal of All Charges. A client, unhappy with their former lawyer, engaged our services. Our firm conducted a thorough review of the case and uncovered key issues, including a motive that undermined the prosecution’s case. The comprehensive analysis led to the successful withdrawal of all charges against the client, not only preventing a three-year jail sentence but also the risk of deportation.",
    },
    {
        title: "R. v. C, B",
        charges: "Sexual Assault and Sexual Interference",
        result:
            "Withdrawal of All Charges Following 11(b) Application. In a complex case involving charges of sexual assault and sexual interference, counsel filed an 11(b) application seeking a stay due to unreasonable delay in the trial process. As a direct result, the Crown made the decision to withdraw all charges, saving the client from a criminal record or jail sentence.",
    },
];

export default function CaseResults() {
    
    return (
        <div className=" my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((caseItem, index) => (
                    <div
                        key={index}
                        className="border-2  border-[#0F4C85]  rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[40pc]"
                    >
                        <div className="w-[50px] h-[50px] my-4 rounded-lg flex justify-center items-center">
                            <VenusAndMars className="h-[50px] w-[50px]" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{caseItem.title}</h2>
                        <p className="text-2xl mb-2">
                            <span className="font-semibold">Charges:</span> {caseItem.charges}
                        </p>
                        <div className="text-2xl scrollbar-hidden leading-relaxed flex-grow overflow-y-auto scrollbar-none h-[150px] pr-2">
                            <span className="font-semibold">Results:</span> {caseItem.result}
                        </div>
                        <div className="mt-6 w-full">
                            <button className="w-full px-4 py-2 bg-[#0F4C85] border text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-all duration-300">
                                Case Result &gt;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
