import React from "react";
import { motion } from "framer-motion";

const events = [
    { year: "2020", title: "Started Journey", description: "Began working on web development." },
    { year: "2021", title: "First Project", description: "Completed my first full-stack project." },
    { year: "2022", title: "Next.js Mastery", description: "Mastered Next.js and Tailwind CSS." },
    { year: "2023", title: "Freelance Success", description: "Worked with multiple clients worldwide." },
    { year: "2024", title: "Scaling Up", description: "Building scalable applications and SaaS projects." }
];

const TimelineEvent = ({ event, index, isLeft, isLast }) => {
    return (
        <motion.div
            className="relative flex w-full items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-6 w-6 h-6 bg-red-600 rounded-full -translate-x-1/2 z-10" />

            {/* Vertical Line for Events (Not for the Last Event) */}
            {!isLast && (
                <div className="absolute left-1/2 top-6 w-1 bg-red-600 h-full -translate-x-1/2"></div>
            )}

            <div className="flex w-full items-center">
                {/* Left Side */}
                <div className={`w-[calc(50%-40px)] ${!isLeft && "invisible"}`}>
                    <div className="bg-white shadow-lg rounded-2xl p-6 ml-auto mr-10 text-left">
                        <div className="text-xl font-semibold text-red-600">{event.year}</div>
                        <div className="text-lg font-bold mt-2">{event.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                    </div>
                </div>

                {/* Spacer for Alignment */}
                <div className="w-20 flex-shrink-0 relative" aria-hidden="true">
                    {/* Only Show Connector Line Between Events */}
                    {!isLast && (
                        <div className="absolute left-1/2 top-6 w-1 bg-gray-300 h-full -translate-x-1/2"></div>
                    )}
                </div>

                {/* Right Side */}
                <div className={`w-[calc(50%-40px)] ${isLeft && "invisible"}`}>
                    <div className="bg-white shadow-lg rounded-2xl p-6 ml-10 text-left">
                        <span className="text-xl font-semibold text-red-600">{event.year}</span>
                        <div className="text-lg font-bold mt-2">{event.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TimelineProcess = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto py-12" aria-label="Timeline">
            {/* Main Vertical Timeline Line - Stops Above the Last Dot */}
            <div
                className="absolute left-1/2 -translate-x-1/2 w-1 bg-red-600"
                style={{
                    top: "72px", // Starts below the first event
                    bottom: "calc(120px + 2rem)", // Stops above the last dot
                }}
                aria-hidden="true"
            />

            <motion.div className="flex flex-col gap-16">
                {events.map((event, index) => (
                    <TimelineEvent
                        key={event.year}
                        event={event}
                        index={index}
                        isLeft={index % 2 === 0}
                        isLast={index === events.length - 1}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default TimelineProcess;
