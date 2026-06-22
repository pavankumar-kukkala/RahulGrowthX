"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Are the courses really taught in Telugu?",
    answer:
      "Yes! All our courses are taught entirely in Telugu with clear explanations. We also provide English subtitles for technical terms.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, certificates are provided after successful completion of eligible courses.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely. You can access courses on mobile, tablet, laptop, and desktop.",
  },
  {
    question: "What if I need help during the course?",
    answer:
      "Our support team is available to help you throughout your learning journey.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, eligible courses come with a refund policy. Terms may vary by course.",
  },
  {
    question: "How long do I have access to a course?",
    answer:
      "Most courses provide lifetime access unless mentioned otherwise.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Frequently Asked{" "}
            <span className="text-orange-500">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-xl text-black">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-orange-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-500 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}