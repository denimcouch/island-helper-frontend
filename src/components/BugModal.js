import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function BugModal({ bug }) {
  const [open, setOpen] = React.useState(false);
  console.log("available", bug)
  

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  // const mapMonths = (array) => {
  //   let monthsArray = array.map((num) => months[num]);
  //   return `${monthsArray[0]} - ${monthsArray.slice(-1)}`;
  // };

  const capitalizeWords = (string) => {
    let array = string.split(" ");
    return array
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="section acnh-label-menu four wide column">
          <h4 className="acnh-text">{capitalizeWords(bug.name)}</h4>
          <img src={bug.image_cute} alt={`${bug.name}'s icon`} />
        </div>
      }
    >
      <Modal.Header>{capitalizeWords(bug.name)}</Modal.Header>
      <Modal.Content image>
        <Image size="massive" src={bug.image} wrapped />
        <Modal.Description>
          <Header>{`"${bug.catch_phrase}"`}</Header>
          <p>{`"${bug.description}" - Blathers`}</p>
          <p>Rarity: {bug.availability[0].rarity} </p>
          <p>
            Time Available: {bug.availability[0].isAllDay ? "All Day" : bug.availability[0].time}{" "}
          </p>
          <p>
            Months Available:{" "}
            {bug.availability[0].isAllYear ? (
              "All Year"
            ) : (
              <ul>
                <li>
                  Northern Hemisphere:{" "}
                  {bug.availability[0].monthNorthern}
                </li>
                <li>
                  Southern Hemisphere:{" "}
                  {bug.availability[0].monthSouthern}
                </li>
              </ul>
            )}
          </p>
          <p>
            Price: {bug.price} bells / {bug.price_flick} bells (Flick){" "}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Add to Island"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default BugModal;
