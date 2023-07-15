const PageContent = (props) => {
  return (
    <div className=" content-center">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default PageContent;
