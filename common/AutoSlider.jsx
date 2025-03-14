import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, VenusAndMars } from "lucide-react";

const AutoSlider = ({ items }) => {
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const totalSlides = items.length;
    const totalClones = 3;

    const extendedItems = [...items, ...items.slice(0, totalClones)];

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                const itemsToShow = window.innerWidth < 650 ? 1 : window.innerWidth < 1024 ? 2 : 3;
                setVisibleItems(itemsToShow);
                const calculatedWidth = containerWidth / itemsToShow;
                // Subtract padding/margin to ensure items fit properly
                const adjustedWidth = calculatedWidth - (itemsToShow > 1 ? 24 : 0);
                setItemWidth(adjustedWidth > 100 ? adjustedWidth : 100); 
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const startAutoScroll = () => {
        // Clear any existing interval first to avoid multiple intervals
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
            // Check if ref is still valid
            if (sliderRef.current) {
                sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });

                setTimeout(() => {
                    // Add another null check here to prevent the error
                    if (sliderRef.current && sliderRef.current.scrollLeft >= itemWidth * totalSlides) {
                        sliderRef.current.scrollTo({ left: 0, behavior: "instant" });
                    }
                }, 500);
            }
        }, 3000);
    };

    useEffect(() => {
        if (itemWidth > 0) {
            startAutoScroll();
        }
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [itemWidth]);

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
    
    const handleMouseLeave = () => startAutoScroll();

    const handlePrev = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
        }
        
        startAutoScroll();
    };

    const handleNext = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
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
            <div className="flex justify-center w-full">
                <motion.div
                    ref={sliderRef}
                    className="flex overflow-hidden no-scrollbar w-full px-4"
                    style={{
                        margin: '0 auto',
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {extendedItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 border-2 border-[#0F4C85] rounded-lg p-4 shadow-md mx-3"
                            style={{ 
                                minWidth: itemWidth, 
                                maxWidth: itemWidth,
                                scrollSnapAlign: 'center'
                            }}
                        >
                            <div className="flex justify-between p-3 items-center">
                                <div className="flex flex-col gap-5">
                                    <div className="bg-white shadow-lg border-[#0F4C85] border-2 items-center flex justify-center w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] p-4 rounded-full">
                                        <VenusAndMars className='h-8 sm:h-11 w-8 sm:w-11 text-[#0F4C85]' />
                                    </div>
                                    <h3 className="text-lg sm:text-2xl">Aggravated Assault</h3>
                                    <span className="text-md sm:text-lg underline underline-offset-2 text-[#0F4C85] cursor-pointer">View Details</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-[-60px] sm:bottom-[-80px] left-1/2 -translate-x-1/2 flex space-x-4">
                <button
                    onClick={handlePrev}
                    className="bg-gray-900 text-white p-2 sm:p-3 rounded-full shadow-md"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-gray-900 text-white p-2 sm:p-3 rounded-full shadow-md"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default AutoSlider;