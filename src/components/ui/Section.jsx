import { ReactNode } from "react";
const Section = ({ title, subtitle, children, className = "" }) => {
  return (
    <section className={`${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
      </div>
      {children}
    </section>
  );
};

export default Section;
