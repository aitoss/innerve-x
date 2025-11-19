'use client';
import React, { useState, useEffect } from "react";
import Galaxy from "@/components/ui/TracksElements/Glaxy";
// import Pink_Board from "../assets/Faq_board.png";

type CategoryType = "GENERAL" | "REGISTRATION" | "STAY & TRAVEL" | "EXPENSES";

interface FAQ {
    question: string;
    answer: any;
}

type FAQsData = Record<CategoryType, FAQ[]>;

export default function FaqSection() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>("GENERAL");
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const categories: CategoryType[] = ["GENERAL", "REGISTRATION", "STAY & TRAVEL", "EXPENSES"];
    const faqsData: FAQsData = {
        GENERAL: [
            {
                question: "What are the highlights of Innerve 10?",
                answer:
                    "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants. We also conduct seminars and interactions with industry experts.",
            },
            {
                question: "What are the different phases of the hackathon?",
                answer:
                    "Phase 1, the Idea Submission Round, will be conducted online, while Phase 2, the Building Round, will take place offline at the AIT Campus.",
            },
            {
                question: "Who is eligible to participate?",
                answer:
                    "Innerve 10 welcomes participants passionate about coding with keen interest in problem-solving.",
            },
            {
                question: "What kind of prizes can participants expect?",
                answer:
                    "Prizes include cash rewards, goodies, certificates, and special surprises for the winners.",
            },
        ],
        REGISTRATION: [
            {
                question: "How do I apply for Innerve 10",
                answer:
                    "Our registration forms are out. Kindly refer to the filling instructions available on the website.",
            },
            {
                question: "Is there a registration fee for Innerve?",
                answer: "There is no registration fee. It's open for all.",
            },
            {
                question: "Is there a minimum or maximum size for the team?",
                answer: "Yes, 2-4 participants are allowed per team.",
            },
            {
                question: "What are the dates of Phase 1 & 2?",
                answer: `Idea Pitching: 15th Dec - 15th Jan & 24hrs Hackathon: 30th -31st Jan`,
            },
        ],
        "STAY & TRAVEL": [
            {
                question: "Where can participants find accommodation during Innerve 10?",
                answer: "Lodging is available at the AIT Campus itself.",
            },
            // {
            //     question: "How do I book accommodation?",
            //     answer:
            //         "We will be providing accomodation for participants on our own, there will be no hassle from your side. All finalists will be provided with lodging.",
            // },
            {
                question: "How to reach the venue?",
                answer:
                    "Please contact the OSS Club, our team will be available to assist you with the location and travel details.",
            },
            {
                question: "What to bring during in-person reporting at the venue?",
                answer:
                    "Carry your documents and devices. Stay on the lookout for further updates.",
            },
        ],
        EXPENSES: [
            {
                question: "What expenses does Innerve 10 cover for participants?",
                answer:
                    "Innerve 10 covers the registration fees for all participants, ensuring a seamless experience for attendees.",
            },
            {
                question: "Are travel-related expenses reimbursable for participants?",
                answer:
                    "The OSS Club will not cover  travel expenses for participants.",
            },
            {
                question: "Is there any additional cost for mess and lodgings?",
                answer: "There will be no additional expenses.",
            },
        ],
    };

    useEffect(() => {
        setOpenQuestion(null);
    }, [selectedCategory]);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="relative  w-screen bg-black h-fit py-20 text-white">
            <div className="absolute inset-0 z-0 w-full/2 pointer-events-none">
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={false}
                    density={3}
                    glowIntensity={0.2}
                    saturation={0}
                    hueShift={240}
                />
            </div>
            <div className="relative mb-10 z-10 text-center py-6">
                <h1 className="text-[4rem] bg-center md:text-5xl lg:text-8xl font-bold font-angrybirds animate-fade-in transition-all duration-300">
                    FAQs
                </h1>
                <p className="text-gray-300 px-10 mt-5 text-[1rem] md:text-[2rem] font-angrybirds">
                    Quick answers to questions you may have
                </p>
            </div>
            <div className="relative flex max-md:flex-col  z-10 justify-between items-center px-3 md:px-10 " >
                <div className=" w-full  md:w-1/3 " >
                    <div className="flex flex-col items-center gap-y-6 w-full" >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className="md:w-full w-7/10 cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95"
                                style={{ width: 'full', paddingLeft: 11, paddingRight: 11, paddingTop: 10, paddingBottom: 10, background: 'linear-gradient(0deg, #DB7200 49%, #EDAA4A 50%, #FFE394 100%)', boxShadow: '0px 1.650254726409912px 0px #FBBB31 inset', overflow: 'hidden', borderRadius: 47.86, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#FCCC31', boxShadow: '0px -2.0628185272216797px 0px #F8DC47 inset', overflow: 'hidden', borderRadius: 35.29, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', color: 'white', fontWeight: '400', wordWrap: 'break-word', textShadow: '0px 3px 0px rgba(0, 0, 0, 1.00)' }} className="text-stroke-black md:text-4xl text-lg ">{category}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex  w-full  flex-col md:flex-row h-full ">
                    <div className="w-full md:px-20 mx-auto p-4">
                        <div className="space-y-4">
                            {faqsData[selectedCategory].map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b  border-gray-600 pb-4 transition-all duration-300 font-sans hover:border-[#FCCC31]"
                                >
                                    <div
                                        className="flex justify-between items-center cursor-pointer transition-all duration-300 hover:text-[#FCCC31]"
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <span className="md:text-[32px] md:mb-6 md:mt-6 text-left text-[1rem] font-semibold font-tthoves">
                                            {faq.question}
                                        </span>
                                        <span className={`text-2xl transform transition-transform duration-600 ${openQuestion === index ? "rotate-180" : "rotate-0"}`}>
                                            {openQuestion === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-600 transform ${openQuestion === index ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                                        <div className="mt-2 text-left md:text-[1.5rem] text-gray-300 transition-opacity duration-300">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


