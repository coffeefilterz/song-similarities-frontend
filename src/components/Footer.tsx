type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className}>
      <h1>Footer stuff</h1>
    </footer>
  );
};

export default Footer;
