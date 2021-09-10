import "./Card.css";
import moment from "moment";

// {
//   issue_id: "xxxxx",
//   title: "title",
//   assignee: 'xxxx',
//   start_date: "xxxxx",
//   end_date: "xxxxx",
//   tags: "tags",
// }

const Card = (props) => {
  const { provided, innerRef } = props;

  function dateInterval(start, finish) {
    const a = moment(start, "YYYY-M-D");
    const b = moment(finish, "YYYY-M-D");
    var diffDays = b.diff(a, "days");
    return diffDays;
  }

  function checkTags(tags) {
    if (tags === "design") {
      return "tags-blue";
    } else if (tags === "backend") {
      return "tags-red";
    } else if (tags === "research") {
      return "tags-yellow";
    } else {
      return "tags-green";
    }
  }

  return (
    <div
      className="card"
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      <div className="p-4">
        <h3 className="text-lg font-bold">
          <a className="stretched-link" href="#" title="Card 1">
            {props.data.title}
          </a>
        </h3>
        <div className="flex justify-between my-3">
          <div className="flex gap-2">
            <div className="px-2 text-gray-500 bg-green-300 rounded-full">
              {String(props.data.assignee).charAt(0).toUpperCase()}
            </div>
            <div className={checkTags(props.data.tags)}>
              {String(props.data.tags).toUpperCase()}
            </div>
          </div>
          <div>
            <p className="text-gray-500 font-medium">
              {dateInterval(props.data.start_date, props.data.end_date)} days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
