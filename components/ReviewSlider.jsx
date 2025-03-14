import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const ReviewSlider = ({ items }) => {
    const sliderRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [itemWidth, setItemWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                const isMobileView = window.innerWidth < 640;
                const itemsToShow = isMobileView ? 1 : window.innerWidth < 1024 ? 2 : 3;
                
                setIsMobile(isMobileView);
                setItemWidth(containerWidth / itemsToShow);
                
                // Reset scroll position when screen size changes
                sliderRef.current.scrollLeft = 0;
                updateButtonVisibility();
            }
        };
        
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const updateButtonVisibility = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
            
            sliderRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });

            setTimeout(updateButtonVisibility, 300);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener("scroll", updateButtonVisibility);
            return () => slider.removeEventListener("scroll", updateButtonVisibility);
        }
    }, []);

    return (
        <div className="relative w-full max-w-[1120px] mx-auto px-4 sm:px-0">
            {!showLeftButton || (
                <button
                    className="absolute -left-6 sm:-left-12 top-1/2 z-10 -translate-y-1/2 rounded-full p-2"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={32} />
                </button>
            )}

            <div className="overflow-hidden">
                <motion.div
                    ref={sliderRef}
                    className={`flex space-x-4 sm:space-x-5 text-white overflow-x-auto scrollbar-hidden w-full ${isMobile ? "justify-center" : ""}`}
                    style={{
                        scrollSnapType: "x mandatory",
                        paddingLeft: isMobile ? "calc(50% - " + (itemWidth/2) + "px)" : "0",
                        paddingRight: isMobile ? "calc(50% - " + (itemWidth/2) + "px)" : "0"
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 gap-3 flex flex-col rounded-lg bg-[#0F4C85] p-4 shadow-md scroll-snap-align-start"
                            style={{ 
                                minWidth: itemWidth, 
                                maxWidth: itemWidth,
                                scrollSnapAlign: "center"
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12">
                                        <img src="/pro1.png" alt="" className="rounded-full" />
                                    </div>
                                    <span className="text-[12px]">2024-10-19</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 relative top-3">
                                        <img src="/Glogo.png" alt="" className="rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <p className="text-[14px]">
                                I recently had the privilege to work with Mr. 
                                Kahlon and he absolutely lives up to his reputation.
                                He handled my case...
                            </p>
                            <div className="w-full justify-end flex">
                                <span className="underline-offset-2 cursor-pointer underline font-bold text-[16px]">Read more</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {!showRightButton || (
                <button
                    className="absolute -right-4 sm:-right-12 top-1/2 z-10 -translate-y-1/2 rounded-full"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={32} />
                </button>
            )}
        </div>
    );
};

export default ReviewSlider;