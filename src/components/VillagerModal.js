import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function VillagerModal(props) {
  const [open, setOpen] = React.useState(false);

  const { villager, manageTown } = props

  const handleClick = () => {
    manageTown(villager)
    setOpen(false)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="section acnh-label-menu four wide column">
          <h4 className="acnh-text">{villager.name}</h4>
          <img src={villager.icon} alt={`${villager.name}'s icon`} />
        </div>
      }
    >
      <Modal.Header style={{background:`${villager.bubble_color}`, color:`${villager.text_color}`}}  >{`${villager.name} the ${villager.species}`}</Modal.Header>
      <Modal.Content style={{background:`${villager.bubble_color}`, color:`${villager.text_color}`}}  image>
        <Image size="medium" src={villager.image} wrapped />
        <Modal.Description>
          <Header style={{background:`${villager.bubble_color}`, color:`${villager.text_color}`}}>{`"${villager.saying}" - ${villager.name}`}</Header>
          <p>Gender: {villager.gender} </p>
          <p>Birthday: {villager.birthday_string} </p>
          <p>Personality: {villager.personality} </p>
          <p>Hobby: {villager.hobby} </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{background:`${villager.bubble_color}`, color:`${villager.text_color}`}}>
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

export default VillagerModal;
