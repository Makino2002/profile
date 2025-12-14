import "./Section.css";

export default function Section({ title, description, children }) {
  return (
    <section className="section">
      {(title || description) && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-description">{description}</p>}
        </div>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}
