import { toast } from 'react-toastify';

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) {
        message = 'Something went wrong';
      } else {
        message = error.response.message;
      }
      console.log(message);

      toast(message);

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
