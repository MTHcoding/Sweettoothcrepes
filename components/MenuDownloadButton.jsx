import React from 'react';

const MenuDownloadButton = () => {
  // URL of the PNG file
  const menuImageUrl = '/assets/images/menu.png';

  // Function to handle the button click event
  const handleDownloadMenu = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = menuImageUrl;
    link.setAttribute('download', 'menu.png');

    // Append the link to the body
    document.body.appendChild(link);

    // Click the link to trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownloadMenu}>Menu</button>
  );
};

export default MenuDownloadButton;
