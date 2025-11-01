"use client";

import React from "react";
// import Navbar from "../Navbar";
import FaqAccordion from "../FaqAccordion";
// import SectionHeader from "../SectionHeader";

type FaqItem = {
    ques: string;
    ans: string;
};

const faqs: FaqItem[] = [
    {
        ques: "What is CodeChef Cookoff?",
        ans: "A competitive coding event with increasing rounds of difficulty and elimination until there is an ultimate winner. It is an individual event requiring skills and problem solving competence."
    },
    {
        ques: "Is there a registration fee??",
        ans: "Yes there will be registration fee ."
    },
    {
        ques: "How can i register?",
        ans: "You can register using the vit chennai events portal"
    }
];

const FaqSection: React.FC = () => {
    return (
        <div className="pb-20 bg-black">

            <div>

                <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest  text-3xl bg-linear-to-r from-white to-gray-400 mb-20 mt-20  text-transparent bg-clip-text sm:max-md:text-center ">FAQ</h3>


                <div className="flex flex-col items-center gap-5">
                    {faqs.map((item, index) => (
                        <FaqAccordion key={index} ques={item.ques} ans={item.ans} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
