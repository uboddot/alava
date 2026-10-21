import './Section.css';
import type { ReactNode } from 'react';
import type { SectionId } from '../sections';

type SectionProps = {
  id: SectionId;
  title?: string;
  className?: string;
  children: ReactNode;
};

export default Section;

function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={className ? `section ${className}` : 'section'}>
      {title && <h2 className="sectionTitle">{title}</h2>}
      {children}
    </section>
  );
}
