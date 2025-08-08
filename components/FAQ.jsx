'use client'

import { useState } from 'react'

const faqData = [
  {
    id: '1',
    question: "What are the park's opening hours?",
    answer: "We're open every day from 9:00 AM to 9:00 PM, including weekends and holidays. Special timings may apply for events or night experiences."
  },
  {
    id: '2',
    question: "Do I need to book tickets in advance?",
    answer: "While walk-in tickets are available, we highly recommend booking in advance to guarantee entry, especially during peak seasons and weekends."
  },
  {
    id: '3',
    question: "Is the park family-friendly?",
    answer: "Experium Park is designed for visitors of all ages. We have dedicated areas for children, family-friendly attractions, and activities suitable for everyone."
  },
  {
    id: '4',
    question: "Are there guided tours available?",
    answer: "Yes, we offer guided tours led by our experienced naturalists and park experts. Tours are available in multiple languages and can be booked at the entrance or online."
  },
  {
    id: '5',
    question: "Are food and beverages available inside?",
    answer: "Yes, we have several dining options including restaurants, cafes, and snack bars throughout the park. We offer both local and international cuisine."
  },
  {
    id: '6',
    question: "Can I host private events or parties at Experium?",
    answer: "We offer comprehensive event hosting services including birthday parties, corporate events, and special celebrations. Our event team can customize packages to meet your needs."
  },
  {
    id: '7',
    question: "Are professional photoshoots allowed?",
    answer: "Professional photography requires prior permission and a special permit. Please contact our management team at least 48 hours in advance."
  },
  {
    id: '8',
    question: "Is the park accessible for differently-abled visitors?",
    answer: "Yes, Experium Park is fully accessible with wheelchair-friendly pathways, accessible restrooms, and special assistance available."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set(['1']))

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const ChevronIcon = ({ isOpen }) => (
    <svg
      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )

  return (
    <div className='bg-cream'>
    <div className="w-full max-w-4xl mx-auto px-4     py-8 md:py-12 lg:py-16 ">
      {/* Main Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-tight">
          Everything You Need to Know Before You Visit
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3 md:space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="w-full">
            {/* Question Box */}
            <div
              className={`border border-[#52525266] rounded-2xl  cursor-pointer transition-all bg-cream duration-200 hover:border-gray-400 ${
                openItems.has(item.id) ? 'border-gray-400' : ''
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5">
                <span className="text-sm sm:text-lg text-[#525252] font-normal pr-4 flex-1">
                  {item.question}
                </span>
                <ChevronIcon isOpen={openItems.has(item.id)} />
              </div>

              {/* Answer */}
              {openItems.has(item.id) && (
                <div className="px-4 md:px-6 pb-4 md:pb-5 border-t border-none">
                  <p className="text-sm sm:text-lg  text-[#525252] leading-relaxed ">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
