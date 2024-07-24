/**
 * Function to log in a user.
 * 
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API or the error response.
 */
async function loginUser(email, password) {
    const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/userlogin`;
    
    // Payload containing the email and password
    const payload = {
        email: email,
        password: password
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // Parse the JSON response
        const jsonResponse = await response.json();

        if (!response.ok) {
            // If response is not ok, throw an error with the response JSON
            throw new Error(JSON.stringify(jsonResponse));
        }

        return jsonResponse;
    } catch (error) {
        console.error('Error logging in user:', error);
        return { error: error };
    }
}

// Example usage:
// loginUser('martin@123.com', '5efec981ba92679e1ba3726faa7493df:09e03855c45401816a3ce2df1ed9f3bc')
//   .then(response => console.log('Login successful:', response))
//   .catch(error => console.error('Login failed:', error));
