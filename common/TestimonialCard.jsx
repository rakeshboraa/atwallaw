import { Star } from "lucide-react";

export default function TestimonialCard() {
    return (
        <div className="max-w-md p-6 gap-4 flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Exceptional Legal Support</h2>
            <p className="mt-2 text-gray-600">
                Amazing lawyer, got my matter withdrawn. Always answered all my calls. Highly recommended.
            </p>
            <div className="flex justify-between items-center">
                <p className="mt-4 font-semibold text-gray-700">- J. S.</p>
                <div className='flex'>
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                </div>
            </div>
        </div>
    );
}
