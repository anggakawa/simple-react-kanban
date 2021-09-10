import "./Lane.css";
import React from "react";
import Card from "../card/Card";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Lane = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="lane">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium text-black">{props.title}</h3>
        <button className="btn" onClick={() => props.clickmodal(props.id)}>
          + Add Task
        </button>
      </div>
      <Droppable droppableId={props.id}>
        {(provided) => (
          <div
            className="space-y-3 lane-backlog"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.data.map((data, index) => {
              return (
                <Draggable
                  key={data.issue_id}
                  draggableId={data.issue_id}
                  index={index}
                >
                  {(provided) => (
                    <Card
                      innerRef={provided.innerRef}
                      data={data}
                      provided={provided}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Lane;
