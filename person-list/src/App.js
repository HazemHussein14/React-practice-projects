import { Fragment } from "react";
import ListPerson from "./components/ListPerson/ListPerson";

function App() {
  const persons = [
    {
      img: `https://randomuser.me/api/portraits/thumb/men/22.jpg`,
      name: "James",
      job: "Developer",
    },
    {
      img: `https://randomuser.me/api/portraits/thumb/men/45.jpg`,
      name: "John",
      job: "Designer",
    },
    {
      img: `https://randomuser.me/api/portraits/thumb/men/65.jpg`,
      name: "Mark",
      job: "Artist",
    },
  ];

  return (
    <Fragment>
      <ListPerson info={persons[0]} />
      <ListPerson info={persons[1]} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum massa in convallis.
      </ListPerson>
      <ListPerson info={persons[2]} />
    </Fragment>
  );
}

export default App;
