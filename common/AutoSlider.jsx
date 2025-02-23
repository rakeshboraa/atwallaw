import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, VenusAndMars } from "lucide-react";

const AutoSlider = ({ items }) => {
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const totalSlides = items.length;
    const totalClones = 3;

    const extendedItems = [...items, ...items.slice(0, totalClones)];

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                setItemWidth(containerWidth / 3); // Show exactly 3 items at a time
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Automatic scrolling function
    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });

                setTimeout(() => {
                    if (sliderRef.current.scrollLeft >= itemWidth * totalSlides) {
                        sliderRef.current.scrollTo({ left: 0, behavior: "instant" });
                    }
                }, 500);
            }
        }, 3000);
    };

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(intervalRef.current);
    }, [itemWidth]);

    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startAutoScroll();

    // Manual Scroll Handlers
    const handlePrev = () => {
        clearInterval(intervalRef.current);
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
        }
        startAutoScroll();
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
        startAutoScroll();
    };

    return (
        <div
            className="relative w-full mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slider Container */}
            <motion.div
                ref={sliderRef}
                className="flex space-x-6 overflow-hidden no-scrollbar w-full"
            >
                {extendedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 border-2 border-[#0F4C85] rounded-lg p-4 shadow-md"
                        style={{ minWidth: itemWidth, maxWidth: itemWidth }}
                    >
                        <div className="flex justify-between p-3 items-center">
                            <div className="flex flex-col gap-5">
                                <div className="bg-white shadow-lg  border-[#0F4C85] border-2 items-center flex justify-center w-[90px] h-[90px] p-4 rounded-full">
                                    <VenusAndMars className='h-11 w-11 text-[#0F4C85]' />
                                </div>
                                <h3 className="text-2xl">Aggravated Assault</h3>
                                <span className="text-lg underline underline-offset-2 text-[#0F4C85] cursor-pointer">View Details</span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Bottom Navigation Buttons */}
            <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex space-x-4">
                <button
                    onClick={handlePrev}
                    className="bg-gray-900 text-white p-3 rounded-full shadow-md"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-gray-900 text-white p-3 rounded-full shadow-md"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default AutoSlider;
