import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { value: 500, label: "Cases Handled" , suffix: "+"},
    { value: 100, label: "Positive Testimonials" , suffix: "+"},
    { value: 5, label: "Years of Experience" , suffix: "+"},
    { value: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full py-10 px-10 md:px-20 lg:px-40 gap-10">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col text-center px-4">
            <h1 className="text-5xl font-bold">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix || ""} />
            </h1>
            <p className="text-2xl">{stat.label}</p>
          </div>
          {index !== stats.length - 1 && <div className="hidden md:block h-20 w-px bg-gray-400"></div>}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
