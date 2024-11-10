
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        if (name && email && message) {
          
            showPopupMessage("Thank you! Your message has been sent.");

            
            document.getElementById('contactForm').reset();
        } else {
            alert("Please fill out all fields.");
        }
    });

   
    function showPopupMessage(message) {
        const popup = document.getElementById('popupMessage');
        popup.textContent = message;
        popup.style.display = 'block';

        
        setTimeout(() => {
            popup.style.opacity = '0';
        }, 3000);

        
        setTimeout(() => {
            popup.style.display = 'none';
            popup.style.opacity = '1'; 
        }, 3500);
    }
