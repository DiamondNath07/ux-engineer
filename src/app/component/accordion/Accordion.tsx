'use client';
import React, { useState } from 'react';
import ArrowRight from '../../../../public/customIcon/ArrowRight';
import ArrowDown from '../../../../public/customIcon/ArrowDown';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What is your design process?',
      answer:
        'My design process typically includes four main stages: research, design, prototyping, and testing. During the research stage, I gather insights about the users and their needs. In the design stage, I create wireframes and visual designs to address those needs. The prototyping stage involves building interactive models for testing. Finally, in the testing stage, I gather user feedback to refine the design',
    },
    {
      question: 'what tools and software do you use for software design',
      answer:
        'For software design, I use a variety of tools to ensure efficiency and precision. I rely on Figma and Adobe XD for creating wireframes, mockups, and interactive prototypes. Git and GitHub are essential for version control, while Slack and Microsoft Teams facilitate team communication and coordination. I maintain design documentation and project guidelines using Confluence and Notion, and I track progress and manage tasks with Jira and Trello. These tools collectively help streamline the design process and enhance collaboration across teams.',
    },
    {
      question: 'How do you approach solving complex design challenges?',
      answer:
        'When faced with complex design challenges, I start by thoroughly understanding the problem through research and user feedback. I break down the challenge into smaller, manageable parts and explore different solutions through brainstorming and sketching. Collaboration with cross-functional teams is key, as it brings diverse perspectives and insights. I then create prototypes to test ideas, iterating based on user feedback and technical feasibility. My goal is always to find a balance between user needs, business goals, and technical constraints, ensuring the final design is both effective and scalable.',
    },
  ];

  return (
    <div className="w-[80%] mt-[5%] text-[#717171] text-xl">
      {questions.map((item, index) => (
        <div key={index} className="mt-2 py-[2%] bg-white">
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? <ArrowDown /> : <ArrowRight />}</span>
          </div>
          {openIndex === index && (
            <div
              className="text-base "
              style={{ padding: '10px', backgroundColor: '#fff' }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
