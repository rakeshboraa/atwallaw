export default function ContactForm() {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Our Team</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="First Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Charged With</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Charged With" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="(+844) 978-8444" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="4" placeholder="Leave us a message.."></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" id="terms" />
            <label htmlFor="terms" className="text-sm text-gray-600">By clicking Submit, you’re accepting the Terms & Conditions.</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">SUBMIT</button>
        </form>
      </div>
    );
  }
  