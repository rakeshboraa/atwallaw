import React from 'react'

const Companies = () => {
    return (
        <section className="pb-20 pt-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex w-full gap-6 justify-between items-center">
                    {[
                        "https://kahlonlaw.com/wp-content/uploads//2024/03/Logo.svg",
                        "https://kahlonlaw.com/wp-content/uploads//2024/03/CLA-Logo-White-1024x408-1.svg",
                        "https://kahlonlaw.com/wp-content/uploads/2024/03/Screenshot-2024-03-26-144500.png",
                    ].map((logo, index) => (
                        <div
                            key={index}
              
                            className="flex bg-[#191F29] justify-center items-center shadow-md p-4 rounded-lg hover:scale-105 transition-transform"
                        >
                            <img src={logo} alt={`Logo ${index + 1}`} className="h-16" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Companies
