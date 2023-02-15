const URL = 'https://api.github.com/users/';

export async function FetchApi(username: string) {
  const respose = await fetch(URL + username);
  const data = await respose.json();
  return data;
}

export async function FetchRepositories(endPoint: string) {
  const respose = await fetch(endPoint);
  const data = await respose.json();
  return data;
}