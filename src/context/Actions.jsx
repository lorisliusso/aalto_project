import axios from 'axios'

const AALTO_URL = "https://jsonplaceholder.typicode.com/todos"

export const searchTodos = async () => {

  const response = await axios.get(AALTO_URL);
  return response.data;

}





