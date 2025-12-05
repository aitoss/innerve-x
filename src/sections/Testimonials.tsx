import TestimonialsCard from "@/components/ui/TestimonialsElement/TestimonialsCard";
import TestimonialsHeading from "@/components/ui/TestimonialsElement/TestimonialsHeading";


export default function Testimonials() {

    const data = [
        {
            content:
                "Innerve provided an excellent platform for innovation and self-challenge. I had the opportunity to engage with talented individuals, work on pioneering ideas, and observe diverse approaches to problem-solving. The energy and learning experiences were exceptional. I highly recommend it",
            name: "Priya Verma, Data Scientist",
            collegeName: "RVCE Bangalore",
        },
        {
            content:
                "Innerve 8 was an incredible experience! The challenges were both exciting and tough, pushing me to think creatively and outside the box. The collaborative atmosphere made problem-solving even more rewarding, and I’ve learned a ton from my teammates. Can't wait for the next one!",
            name: "Anjali Gupta, Developer",
            collegeName: "NIT Ranchi",
        },
        {
            content:
                "Participating in Innerve 9 was a transformative experience. The hackathon not only allowed me to enhance my coding skills but also provided the opportunity to work on real-world projects alongside dedicated developers. The mentorship provided was exceptional, and the event was exceptionally well-organized.",
            name: "Jaskirat Singh, UI/UX designer",
            collegeName: "Graphic Era",
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