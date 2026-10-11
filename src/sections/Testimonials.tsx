import TestimonialsCard from "@/components/ui/TestimonialsElement/TestimonialsCard";
import TestimonialsHeading from "@/components/ui/TestimonialsElement/TestimonialsHeading";


export default function Testimonials() {

    const data = [
        {
            content:
                "This has been the best experience I’ve had over many hackthons. The time management,evaluation process, sponsor support,overall program coordination, were exceptionally well planned.eEverything from accommodation to a proper execution. It’s rare to see such well organized management, and the effort truly showed. Huge appreciation to the organizing team for doing such a crazy job.",
            name: "Mohit Nippanikar",
            collegeName: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
        },
        {
            content:
                "InNerve was honestly such a fun and memorable experience! The mentors were super supportive, and the judges were genuinely interested in understanding our projects and ideas. From the great food and endless coffee to the comfortable, friendly vibe, everything made the hackathon so enjoyable. Learned a lot, had loads of fun, and winning 1st Runner-Up made it even more special!",
            name: "Manasvi Mittal",
            collegeName: "Indira Gandhi Delhi Technical University for Women",
        },

        {
            content:
                " Innerve X was an unforgettable journey of innovation and teamwork! The competitive yet thrilling atmosphere pushed us to think creatively and build complex web solutions from scratch, helping us clinch the 2nd Runner-Up title. We enjoyed every minute of the coding sprints and the collaborative vibe. It’s an exceptional platform for developers to challenge their limits. Can't wait for the next one!",
            name: "Vivek Negi",
            collegeName: "Army Institute of Technology",
        },
    ];

    return (
        <div className="relative bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-18 md:py-24 lg:py-32 ">
            <div className="relative font-angrybirds leading-[100%] mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center flex justify-center items-center">
                <TestimonialsHeading />
            </div>
            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-12 flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center items-stretch">
                {data.map((testimonial, index) => (
                    <TestimonialsCard
                        key={index}
                        content={testimonial.content}
                        name={testimonial.name}
                        collegeName={testimonial.collegeName}
                    />
                ))}
            </div>
        </div>
    );
}