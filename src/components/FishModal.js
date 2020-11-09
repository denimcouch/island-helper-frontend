import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function FishModal({ fish }) {
  const [open, setOpen] = React.useState(false);

  const available = JSON.parse(fish.availability.replace(/=>/g, ":"));
  console.log(available["month-array-northern"]);

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

  const mapMonths = (array) => {
    let monthsArray = array.map((num) => months[num]);
    return `${monthsArray[0]} - ${monthsArray.slice(-1)}`;
  };

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
          <h4 className="acnh-text">{capitalizeWords(fish.name)}</h4>
          <img src={fish.image_cute} alt={`${fish.name}'s icon`} />
        </div>
      }
    >
      <Modal.Header>{capitalizeWords(fish.name)}</Modal.Header>
      <Modal.Content image>
        <Image size="larger" src={fish.image} wrapped />
        <Modal.Description>
          <Header>{`"${fish.catch_phrase}"`}</Header>
          <p>{`"${fish.description}" - Blathers`}</p>
          <p>Rarity: {available.rarity} </p>
          <p>
            Time Available: {available.isAllDay ? "All Day" : available.time}{" "}
          </p>
          <p>
            Months Available:{" "}
            {available.isAllYear ? (
              "All Year"
            ) : (
              <ul>
                <li>
                  Northern Hemisphere:{" "}
                  {mapMonths(available["month-array-northern"])}
                </li>
                <li>
                  Southern Hemisphere:{" "}
                  {mapMonths(available["month-array-southern"])}
                </li>
              </ul>
            )}
          </p>

          <p>
            Price: {fish.price} bells / {fish.price_cj} bells (CJ){" "}
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

export default FishModal;
