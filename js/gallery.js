const imageUrls = [
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',

    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif',
    '../images/bitcoin.gif'
  ];
  
  const gallery = document.getElementById('gallery');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const img = document.createElement('img');
    img.src = imageUrls[i];
    img.alt = `Image ${i + 1}`;
    img.style.margin = '10px';
    img.style.width = '200px';
  
    const imgDesc = document.createElement('p'); // Use a <p> tag
    imgDesc.textContent = `Image ${i + 1} description`; // Add text content
    imgDesc.style.textAlign = 'center';
    imgDesc.style.marginTop = '5px';
  
    const wrapper = document.createElement('div');
    wrapper.classList.add('gallery-item'); // Add valid class
    wrapper.style.display = 'inline-block'; // Make sure it stays in a row
    wrapper.style.textAlign = 'center';     // Center image and text
  
    wrapper.appendChild(img);
    wrapper.appendChild(imgDesc);
    gallery.appendChild(wrapper);
  }
  