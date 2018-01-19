import { token } from './auth'

export function all() {
  return fetch('/employees')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(employee) {
  return fetch('/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    },
    body: JSON.stringify(employee)
  })
  .then(res => {
    console.log(`response from backend: ${JSON.stringify(res)}`);
    res.json()
  })
  .catch(error => {
    console.log(`response from backend error: ${error}`);
  })
}
