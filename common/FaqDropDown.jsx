import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What is your refund policy?",
        answer: "You can request a refund within 30 days of purchase.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support via email and chat.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial for all new users.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial for all new users.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial for all new users.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial for all new users.",
    },
   
];



const FaqDropDown = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" my-20 space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b  border-gray-300">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center py-3 text-lg font-medium   focus:outline-none"
                    >
                        {faq.question}
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 " />
                        ) : (
                            <ChevronDown className="w-5 h-5 " />
                        )}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaqDropDown