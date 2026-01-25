import React from 'react';

const SectionWrapper = ({ children }) => {
  return (

    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center
        bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950"
    >
      {children}
    </section>

  );
};

export default SectionWrapper;
