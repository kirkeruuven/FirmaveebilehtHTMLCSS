      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: 58.349451, lng: 26.714695 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }