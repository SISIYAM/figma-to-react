import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Navbar } from "../../components/Navbar";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are customized to meet the specific needs of each sector.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement multiple layers of security including encryption, regular security audits, and compliance with international standards. Our team stays updated with the latest security protocols.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Typically, small projects take 4-6 weeks, while larger implementations may take 3-6 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide comprehensive post-implementation support and maintenance. Our support packages include regular updates, monitoring, and technical assistance.",
  },
  {
    question: "How do you handle data migration?",
    answer:
      "Our data migration process involves careful planning, testing, and execution. We ensure zero data loss and minimal downtime during the transition.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-[#0a1f44] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-xl font-semibold text-[#0a1f44]">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-[#00a676]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-[#0a1f44] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you with any additional questions
            </p>
            <Button className="bg-[#00a676] text-white rounded-[10px] px-8 py-4 text-xl">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
