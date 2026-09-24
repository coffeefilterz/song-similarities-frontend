import uglyLogo from "@/assets/logos/ugly-logo.png";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <img src={uglyLogo} width="150" alt="Ugly Logo" />
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
    </header>
  );
};

export default Header;
