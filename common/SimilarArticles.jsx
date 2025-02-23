import React from "react";

const SimilarArticles = () => {
    const articles = [
        "A Guide to Sexual Assault Charges And Their...",
        "Why You Need to Hire a Criminal Lawyer...",
        "Experienced Domestic Violence Lawyer Toronto",
        "Experienced Domestic Assault Lawyers – All Your Legal...",
        "Bail Variations in Domestic Assault & Other Criminal..."
    ];

    return (
        <div className="bg-gray-100 p-5 rounded-lg ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Similar Articles</h2>
            <div className="grid gap-4 ">
                {articles.map((article, index) => (
                    <a key={index} href="#" className="block py-3 ">
                        {article}
                    </a>
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-2">
                <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">1</button>
                <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">2</button>
                <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">3</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Next »</button>
            </div>
        </div>
    );
};

export default SimilarArticles;
