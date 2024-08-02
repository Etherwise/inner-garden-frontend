import crypto from 'crypto';
import toast from 'react-hot-toast';

const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);

/**
 * Encrypts a text using AES-256-CBC encryption algorithm.
 *
 * @param {string} text - The text to encrypt.
 * @returns {string} The encrypted text.
 */
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from("0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef", 'hex'), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

/**
 * Logs in a user by sending a POST request to the login endpoint.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @param {object} router - The Next.js router object.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API or an error object.
 */
async function loginUser(email, password, router) {
  const hashedPassword = encrypt(password);
  const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/userlogin`;

  // Payload containing the email and encrypted password
  const payload = {
    email: email,
    password: hashedPassword,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Parse the JSON response
    const jsonResponse = await response.json();

    if (response.ok) {
      localStorage.setItem('UserToken', jsonResponse.token);
      localStorage.setItem('UserId', jsonResponse.jsonResponse?._id);
      localStorage.setItem('uniqueID', jsonResponse.jsonResponse?.uniqueId);
      localStorage.setItem('profileBuildStatus', jsonResponse.jsonResponse?.profileBuildStatus);

      toast.success('Login successful!');

      const destination = jsonResponse.jsonResponse?.profileBuildStatus === false ? '/about' : '/';
      router.push(destination);
    } else {
      // If response is not ok, throw an error with the response JSON
      console.log(response)
    }

    return jsonResponse;
  } catch (error) {
    console.error('Error logging in user:', error);
    return { error: error.message || 'An error occurred' };
  }
}

export default loginUser;
