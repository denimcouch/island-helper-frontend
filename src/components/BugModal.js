import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function BugModal({ bug }) {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="section acnh-label-menu four wide column">
          <h4 className="acnh-text">{bug.name}</h4>
          <img src={bug.image_cute} alt={`${bug.name}'s icon`} />
        </div>
      }
    >
      <Modal.Header>{bug.name}</Modal.Header>
      <Modal.Content image>
        <Image size="larger" src={bug.image} wrapped />
        <Modal.Description>
          <Header>{`"${bug.catch_phrase}"`}</Header>
          <p>{`"${bug.description}" - Blathers`}</p>
    <p>Rarity: </p>
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
