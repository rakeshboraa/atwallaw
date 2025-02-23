import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const ReviewSlider = ({ items }) => {
    const sliderRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [itemWidth, setItemWidth] = useState(0);

    // Calculate item width dynamically
    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                setItemWidth(containerWidth / 3); // Ensure exactly 3 items are visible
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Function to check scroll position
    const updateButtonVisibility = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth; // Scroll by full width (3 items)
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
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
        <div className="relative w-full max-w-[1120px] mx-auto">
           
            {showLeftButton && (
                <button
                    className="absolute -left-12 lef top-1/2 z-10 -translate-y-1/2 rounded-full  p-2 shadow-md "
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={44} />
                </button>
            )}

            {/* Slider */}
            <motion.div
                ref={sliderRef}
                className="flex space-x-5 text-white overflow-hidden no-scrollbar w-full"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 gap-3 flex flex-col rounded-lg bg-[#0F4C85] p-4 shadow-md"
                        style={{ minWidth: itemWidth, maxWidth: itemWidth }}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12">
                                    <img src="/pro1.png" alt="" className="rounded-full" />
                                </div>
                                <span className="text-[12px]">2024-10-19</span>
                            </div>
                            <div className="flex  justify-center items-center">
                                <div className="w-12 h-12 relative top-3">
                                    <img src="/Glogo.png" alt="" className="rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" stroke="none" />
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

            {/* Right Button */}
            {showRightButton && (
                <button
                    className="absolute -right-12 top-1/2 z-10 -translate-y-1/2 rounded-full  p-2  "
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={44} />
                </button>
            )}
        </div>
    );
};

export default ReviewSlider;
