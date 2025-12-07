
  var rows = [];
  const gallery = document.getElementById('gallery');
  
  readFileBuilding();
  
  function readFileBuilding() {
    //alert("Reading cat CSV...");
    const csvUrl = "../data/buildings.csv";
  
    fetch(csvUrl)
      .then((response) => response.text())
      .then((text) => {
        rows = text.split("\n").map((row) => row.split(","));
  
        // Now the data is ready – generate the images
        generateGallery();
      })
      .catch((error) => console.error("Error fetching the CSV file:", error));
  }
  
  function generateGallery() {
    // Example: just using first 24 entries
    for (let i = 1; i < rows.length; i++) {
      const img = document.createElement('img');
      
      // Make sure the row and column exist
      if (rows[i] && rows[i][3]) {
        img.src = rows[i][3];  // assuming column 7 has image URLs
      } else {
        img.src = '../images/placeholder.jpg'; // fallback image
      }

      img.alt = `Image ${i + 1}`;
      //img.style.margin = '10px';
        //img.style.width = '180px';
        //img.style.height = '180px';
  
      const imgDesc = document.createElement('p');
      imgDesc.textContent = rows[i][2] + "\n (" + rows[i][5] + ")"; // Example: name from column 0
      imgDesc.style.textAlign = 'center';
      imgDesc.style.marginTop = '1px';
  
      const wrapper = document.createElement('div');
      wrapper.classList.add('gallery-item');
      wrapper.style.display = 'inline-block';
      wrapper.style.textAlign = 'center';
  
      wrapper.appendChild(img);
      wrapper.appendChild(imgDesc);
      gallery.appendChild(wrapper);
    }
  }
  