const UseHttp = () => {
  const sendHttp = async (requestConfig, applyData) => {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? requestConfig.body : null,
    });
    const data = await response.json();
    applyData(data);
    console.log(data);
  };

  return {
    sendHttp,
  };
};

export default UseHttp;
