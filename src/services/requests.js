// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const API_HOST = process.env.REACT_APP_API_HOST;

export async function login(email, password) {
  try {
    const signInResponse = await fetch(`${API_HOST}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    });
    const data = await signInResponse.json();
    return { data, status: signInResponse.status };
  } catch (error) {
    return { data: { error }, status: 404 };
  }
}

export async function verifyUser() {
  try {
    const response = await fetch(`${process.env.API_HOST}/verify_user`, {
      credentials: 'include',
    });
    if (response.status === 200) {
      const data = await response.json();
      return { data, status: 200 };
    }
    return { status: 401 };
  } catch (err) {
    return { status: 400 };
  }
}
