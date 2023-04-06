import "./ListPerson.css";

const ListPerson = (props) => {
  const { img, name, job } = props.info;
  const { children } = props;

  return (
    <div className="card">
      <img src={img} alt="person" />
      <h3>{name}</h3>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

export default ListPerson;
