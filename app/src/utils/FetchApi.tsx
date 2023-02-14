const URL = 'https://api.github.com/users/';

export async function FetchApi(username: string) {
  const respose = await fetch(URL + username);
  const data = await respose.json();
  return data;
}