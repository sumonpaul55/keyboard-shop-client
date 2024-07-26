// src/components/FAQ.tsx
import React from 'react';
import { Collapse } from 'antd';
import faqData, { FAQItem } from './faqData';
import Section from '../../layouts/Section';
import faqimage from "../../assets/faq.png"
const { Panel } = Collapse;

const Faq: React.FC = () => {
    return (
        <Section>
            <h1 className='mb-10 font-bold text-center text-lg md:text-2xl lg:text-3xl'>Frequently Ask Questions</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <div className="p-4">
                    <Collapse accordion>
                        {faqData.map((item: FAQItem, index: number) => (
                            <Panel header={item.question} key={index} style={{ fontSize: "17px" }}>
                                <p className='p-2'>{item.answer}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
                <div className='rounded-md'>
                    <img className='w-full md:w-1/2 mx-auto' src={faqimage} />
                </div>
            </div>
        </Section>
    );
};

export default Faq;
