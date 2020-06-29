import React from "react";
import Moment from "react-moment";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Logitem = ({
  deleteItem,
  log: { _id, priority, user, text, created },
}) => {
  const setVariant = () => {
    if (priority === "high") return "danger";
    if (priority === "moderate") return "warning";
    return "success";
  };

  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className="p-2">
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{new Date(created)}</Moment>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          className="p-1"
          onClick={() => deleteItem(_id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Logitem;
