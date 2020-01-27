import mockRequests from "./requests.json";
console.log(mockRequests);
export const getRequestsSync = () => mockRequests;

export const getRequests = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockRequests), 500);
  });

