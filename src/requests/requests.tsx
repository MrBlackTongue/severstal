import {message} from "antd";

const URL = 'https://httpbin.org/'

export async function getRequest() {
  try {
    const res = await fetch(URL + 'get');
    if (!res.ok) {
      console.error(res.statusText);
      return Promise.reject();
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export function postRequest() {
  try {
    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(''),
    };
    fetch(URL + 'post', config)
      .then((response) => {
        if (response.ok) {
          return message.success('Запись добавлена');
        } else {
          console.error(response.statusText);
          return message.error('Ошибка при добавлении записи');
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRequest() {
  try {
    const response = await fetch(URL + `delete`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.success) {
      return message.success('Запись удалена');
    } else {
      console.error(response.statusText);
      // return message.error('Ошибка при удалении записи');
    }
  } catch (err) {
    console.error(err);
  }
}