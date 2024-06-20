document.getElementById('register-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  
    // You can now send this data to your server for processing
  });
  