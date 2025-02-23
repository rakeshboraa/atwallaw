export default function BrickLayout() {
    const categories = [
      "Sexual Assault",
      "Driving Offence",
      "Assault",
      "Human Trafficking",
      "Drugs",
      "Break & Enter",
      "Fraud",
      "YCJA",
      "Firearm Offences",
    ];
  
    return (
      <div className=" w-full  flex justify-center items-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-8 bg-[#0F4C85] shadow-xl rounded-xl text-xl font-bold text-white hover:text-black transition-all cursor-pointer h-20"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    );
  }
  