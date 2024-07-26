// src/faqData.ts
export interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or through the carrier's website.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "Orders can be canceled or modified within 24 hours of placing the order. Please contact our customer service team as soon as possible to make any changes.",
  },
  {
    question: "Do you offer gift wrapping services?",
    answer: "Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@keyboardshop.com or by calling 1-800-123-4567. Our support hours are Monday to Friday, 9 AM to 5 PM EST.",
  },
  {
    question: "What warranty do you offer on your products?",
    answer:
      "All of our keyboards come with a one-year warranty covering manufacturing defects. For more details, please refer to the warranty policy included with your purchase.",
  },
  {
    question: "Where can I find user manuals for your products?",
    answer:
      "User manuals are available on our website under the 'Support' section. You can also find them in the product packaging or contact us if you need a copy.",
  },
  {
    question: "Do you have a physical store location?",
    answer:
      "Currently, we operate exclusively online. However, we are working on expanding to physical locations in the future. Stay tuned for updates!",
  },
  // Add more FAQ items as needed
];

export default faqData;
