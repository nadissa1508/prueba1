function FooterDetail({title, links}) {
  return (
    <div className="footer-detail">
        <h3>{title}</h3> 
        <div className="footer-links">
            {links.map((link, index) => (
                <a key={index} href={link.url} className="footer-link">
                    {link.text}
                </a>
            ))}
        </div>
    </div>
    );
}

export default FooterDetail;