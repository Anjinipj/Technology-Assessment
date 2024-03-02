const apiCalls = {
  async getMostPopularArticles() {
    const apiKey = process.env.REACT_APP_NYTIMMES_API_KEY;
    console.log("apiKey", apiKey);
    const res = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`
    );
    return await res.json();
  },
};

export default apiCalls;
