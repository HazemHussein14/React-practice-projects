import Person from "./Person";

const PeopleList = (props) => {
  const persons = props.persons;

  return (
    <ul>
      {persons.map((person) => (
        <Person
          key={person.id}
          img={person.img}
          name={person.name}
          age={person.age}
        />
      ))}
    </ul>
  );
};

export default PeopleList;
