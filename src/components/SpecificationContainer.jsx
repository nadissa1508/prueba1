function SpecificationContainer({ title, elements }) {
  return (
    <div className="specification-container">
      <h1>{title}</h1>
      <ul className="specification-list">
        {elements.map((element, index) => (
          <li key={index} className="specification-item">
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecificationContainer;