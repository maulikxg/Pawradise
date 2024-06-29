import axios from "axios";

export const getData = async (path) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${path}`,
      {
        withCredentials: true,
      }
    );

    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error.response?.data, status: error.response?.status };
  }
};

export const postData = async (path, body) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true,
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    console.log(responseData.status);
    return { data: responseData };
  } catch (error) {
    return { data: error.response?.data, status: error.response?.status };
  }
};
