/**
 * Function to initiate a forgot password request.
 * 
 * @param {string} email - The email address of the user.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API or the error response.
 */
async function forgotPassword(email) {
    const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/forgotpassword`;
    
    // Payload containing the email
    const payload = {
        email: email
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
        console.error('Error initiating forgot password request:', error);
        return { error: error };
    }
}

// Example usage:
// forgotPassword('martin@123.com')
//     .then(response => console.log('Forgot password request successful:', response))
//     .catch(error => console.error('Forgot password request failed:', error));
