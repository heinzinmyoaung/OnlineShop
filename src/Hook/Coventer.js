const Coventer = () => {
  // const CapitalFirstWord = (title) => {
  //   const coventedWord = title.slice(0, 1).toUpperCase() + word.slice(1);
  //   return coventedWord;
  // };
  const CapitalFirstWord = (title) => {
    const coventedWord = title.replace(/\b\w/g, (l) => l.toUpperCase());
    return coventedWord;
  };
  const priceFormat = (price) => {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return USDollar.format(price);
  };
  return {
    CapitalFirstWord,
    priceFormat,
  };
};

export default Coventer;
