const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-primary loader__spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export { Loader };
