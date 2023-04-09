import { Fragment, useEffect, useState, useMemo } from "react";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import SameDayCount from "./SameDayCount";
import PeopleList from "./components/List/PeopleList";

function App() {
  const [isCleared, seteIsCleared] = useState(false);

  const DUMMY_LIST = useMemo(
    () => [
      {
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
        name: "Ethan Mitchell",
        age: 32,
        id: "e1",
      },
      {
        img: "https://randomuser.me/api/portraits/med/men/78.jpg",
        name: "Benjamin Harris",
        age: 28,
        id: "e2",
      },
      {
        img: "https://randomuser.me/api/portraits/med/men/60.jpg",
        name: "Lucas Jackson",
        age: 20,
        id: "e3",
      },
      {
        img: "https://randomuser.me/api/portraits/med/men/4.jpg",
        name: "Samuel Thompson",
        age: 30,
        id: "e4",
      },
      {
        img: "https://randomuser.me/api/portraits/med/men/10.jpg",
        name: "Alexander Brown",
        age: 25,
        id: "e5",
      },
    ],
    []
  );

  const [personsNumber, setPersonNumber] = useState(DUMMY_LIST.length);

  useEffect(() => {
    setPersonNumber(DUMMY_LIST.length);
  }, [DUMMY_LIST]);

  const clearHandler = () => {
    seteIsCleared(true);
    setPersonNumber(0);
  };

  return (
    <Fragment>
      <Card>
        <SameDayCount count={personsNumber} />
        {!isCleared && <PeopleList persons={DUMMY_LIST} />}
        <Button onClear={clearHandler}></Button>
      </Card>
    </Fragment>
  );
}

export default App;
