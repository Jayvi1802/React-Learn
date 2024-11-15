import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "50vh",
    width: "100%"
  };

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center mb-0'>Copyright &copy; Todolist.com</p>
    </footer>
  );
};

export default Footer;
