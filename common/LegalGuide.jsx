function LegalGuide({ title, description, onReadMore }) {
    return (
        <div className="py-6 border-b-2 mt-5 text-white shadow-lg ">
            <h1 className="text-2xl font-bold">
                {title}
            </h1>
            <p className="mt-4 ">
                {description}
            </p>
            <button
                className="mt-4  py-2  text-white rounded-lg "
                onClick={onReadMore}
            >
                Read More
            </button>
        </div>
    );
}

export default LegalGuide;
