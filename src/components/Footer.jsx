import React from "react"

const Footer = (props) => {
    return (
        <footer className="footer">
            <p className="footer__credit">
                Motion Graphics by{" "}
                <a
                    href="https://www.behance.net/romaincousin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Romain Cousin
                </a>
            </p>
            <p className="footer__copy">&copy; 2022 ILALEX</p>
        </footer>
    )
}

export default Footer
