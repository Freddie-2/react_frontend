// services/LoginService.js

const login = async (email, password) => {
    try {
      const response = await fetch('YOUR_BACKEND_URL/admin_login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ashesi_email: email,
          passwd: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token; // Assuming the server sends a token upon successful login
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
    }
  };
  
  export { login };
  