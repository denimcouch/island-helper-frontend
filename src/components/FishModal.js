import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function FishModal(props) {
  const [open, setOpen] = React.useState(false);

  const { fish, manageFish } = props

  const handleClick = () => {
    manageFish(fish)
    setOpen(false)
  }

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
          <h4 className="acnh-text">{capitalizeWords(fish.name)}</h4>
          <img src={fish.image_cute} alt={`${fish.name}'s icon`} />
        </div>
      }
    >
      <Modal.Header>{capitalizeWords(fish.name)}</Modal.Header>
      <Modal.Content image>
        <Image size="massive" src={fish.image} wrapped />
        <Modal.Description>
          <Header>{`"${fish.catch_phrase}"`}</Header>
          <p>{`"${fish.description}" - Blathers`}</p>
          <p>Rarity: {fish.availability[0].rarity} </p>
          <p>
            Time Available: {fish.availability[0].isAllDay ? "All Day" : fish.availability[0].time}{" "}
          </p>
          <p>
            Months Available:{" "}
            {fish.availability[0].isAllYear ? (
              "All Year"
            ) : (
              <ul>
                <li>
                  Northern Hemisphere:{" "}
                  {fish.availability[0].monthNorthern}
                </li>
                <li>
                  Southern Hemisphere:{" "}
                  {fish.availability[0].monthSouthern}
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
          content={props.page ? "Remove from Island" : "Add to Island"}
          labelPosition="right"
          icon="checkmark"
          onClick={() => handleClick()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default FishModal;
