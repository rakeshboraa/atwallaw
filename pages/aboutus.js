import GlowingButton from "@/common/ButtonCommon";
import Description from "@/common/Description";
import GoogleReview from "@/common/GoogleReview";
import HeroImage from "@/common/HeroImage";
import StatsSection from "@/common/StatsSection";
import SubTitle from "@/common/SubTitle";
import TitleCommon from "@/common/Title";
import Testimonial from "@/components/Testimonial";

export default function aboutus() {
  return (
    <div className=" text-black">
      <div className=" px-6  pt-10 flex  ">
        <div className='flex flex-col gap-8 flex-1 pb-11 justify-center'>
          <TitleCommon titleText="About Me" />
          <SubTitle subtitle="Dedicated to defending your rights." />
          <Description descriptionText="Charged with a crime? Speak to Antar Kahlon today. You get more than legal representation; you gain a partner who’s invested in your defence & your peace of mind." />
          <GoogleReview />
          <div className="flex gap-9 w-[90%]">
            <GlowingButton text="Case Results" variant="outline" onClick={() => console.log("Case Results clicked")} />
            <GlowingButton text="Get in Touch" variant="filled" onClick={() => console.log("Get in Touch clicked")} />
          </div>
        </div>
        <HeroImage />
      </div>
      <StatsSection />
      <div className='flex flex-col gap-10  my-20'>
        <TitleCommon titleText="My Story" />
        <SubTitle subtitle="Journey Through Legal Education" />
        <Description
          descriptionText={
            <div className='flex flex-col gap-6'>
              <p>Antar Kahlon graduated from the University of Guelph with an honours degree in Bachelors of Science in Criminal Justice. He completed his Jurist Doctor at Windsor University. During law school, he gained valuable experience in client advocacy through working for Windsor’s Community Legal Aid. During the summer of his first year, Antar worked as a judicial clerk with the Honorable Ronald Lowe at the 35th District Court in Plymouth, Michigan. Antar also served as an editor of Windsor’s Journal of Legal and Social Issues.</p>
              <p>Today, armed with a comprehensive education and a fervent dedication to my craft, Antar Kahlon stands ready to advocate tirelessly for all his clients. The journey, marked by invaluable experiences and unwavering determination, has shaped Antar Kahlon into the passionate and empathetic lawyer he is today.</p>
            </div>
          } />
      </div>
      <div className='flex flex-col gap-10  my-20 w-[60%]'>
        <TitleCommon titleText="Professional Affiliations" />
        <SubTitle subtitle="Advocacy Group Memberships" />
        <Description
          descriptionText={
            <div className='flex flex-col gap-6'>
              <p>Explore the breadth of Kahlon Law’s Experience through our memberships in prestigious legal organizations. These affiliations reflect our ongoing commitment to excellence, current knowledge, and specialized training in criminal law — all to serve you better.</p>
            </div>
          } />
      </div>


      <div className="mb-20">
        <div className="flex w-full gap-6 justify-between items-center">
          {[
            {
              logo: "https://kahlonlaw.com/wp-content/uploads//2024/03/Logo.svg",
              title: "Law Society of Ontario",
            },
            {
              logo: "https://kahlonlaw.com/wp-content/uploads//2024/03/CLA-Logo-White-1024x408-1.svg",
              title: "Criminal Lawyers'Association",
            },
            {
              logo: "https://kahlonlaw.com/wp-content/uploads/2024/03/Screenshot-2024-03-26-144500.png",
              title: "Law Society of Ontario",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 w-2/4 h-[400px] bg-[#191F29] justify-center items-center shadow-md p-4 rounded-lg hover:scale-105 transition-transform"
            >
              <img src={item.logo} alt={`Logo ${index + 1}`} className="h-16" />
              <h1 className="text-[30px] text-center  w-[50%] font-extrabold text-white">{item.title}</h1>
            </div>
          ))}
        </div>

      </div>
      <div className='flex flex-col gap-10  my-20'>
        <TitleCommon titleText="About Kahlon Law" />
        <SubTitle subtitle="My Commitment to Legal Excellence" />
        <Description
          descriptionText={
            <div className='flex flex-col gap-6'>
              <p>After graduating, Antar articled with an influential criminal and quasi-criminal litigation firm in Toronto and once called to the Bar joined the firm as an associate. Shortly thereafter, he started his own practice to provide a personalized and cost-efficient service to his clients.</p>
              <p>Antar has a strong record of success when contesting matters in court and is fiercely dedicated to achieving the best results. Antar is passionate about protecting the rights of each accused person and committed to providing a vigorous defense for his clients. Kahlon Law is built on strong core values such as client service, legal excellence and cost-efficient legal solutions.</p>
              <p>The firm strives to ensure you receive the highest quality legal representation while keeping you in mind. We offer complete transparency by keeping you informed through each step of the proceedings and are readily available to answer your questions and concerns.</p>
            </div>
          } />
      </div>
      <Testimonial />
    </div>
  );
}
