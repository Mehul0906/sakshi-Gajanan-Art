import { useState } from 'react';

function About() {
  const fullText = `At Shree Sakshi Gajanan Art, we are dedicated to crafting high-quality Ganpati Murti
that bring spirituality and joy to your home. With years of experience and a passion for art,
we ensure every piece is made with devotion and care. Our artisans use only the finest materials,
and every murti undergoes a rigorous quality check before it reaches you. Whether you’re looking for
a traditional clay idol or a modern resin piece, we have something to suit every taste and home décor.`;
  const previewText = fullText.slice(0, 180) + '…';

  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-orange-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 text-justify">
          {expanded ? fullText : previewText}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="
            bg-orange-600 text-white 
            px-6 py-2 rounded-full 
            hover:bg-white hover:text-orange-600
            border-2 border-orange-600 
             font-semibold
          " style={{transition: 'all 0.3s ease-in-out'}}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
}

export default About;
