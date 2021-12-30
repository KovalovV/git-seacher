const Footer = () => {
    const footerYear = new Date().getFullYear();

    return (
        <footer className='footer p-10 bg-gray-700 footer-center'>
            <div>
                {footerYear} Vitala Kovalov
            </div>
        </footer>
    );
};

export default Footer;