// import logo from "./logo.svg";
import "./App.css";
import Lane from "./lane/Lane";

import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// {
//   issue_id: "xxxxx",
//   title: "title",
//   assignee: 'xxxx',
//   start_date: "xxxxx",
//   end_date: "xxxxx",
//   tags: "tags",
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: [
        {
          issue_id: "" + this.uniqueId,
          title: "Improve accuracy of voice-to-text model",
          assignee: "Angga",
          start_date: "2021-09-28",
          end_date: "2021-09-29",
          tags: "research",
        },
        {
          issue_id: "asdadwadszxczczxc",
          title: "Create API to load user info from database",
          assignee: "Benny",
          start_date: "2021-09-28",
          end_date: "2021-09-30",
          tags: "backend",
        },
      ],
      todo: [
        {
          issue_id: "sadasdsawwwq",
          title: "2 factor authentication to make private",
          assignee: "Charlie",
          start_date: "2021-09-28",
          end_date: "2021-09-29",
          tags: "design",
        },
        {
          issue_id: "asdasdsada",
          title: "Create API to load user info",
          assignee: "Angga",
          start_date: "2021-09-28",
          end_date: "2021-09-29",
          tags: "backend",
        },
      ],
      done: [
        {
          issue_id: "asdadsadas",
          title: "Improve accuracy of text-voice model",
          assignee: "Angga",
          start_date: "2021-09-28",
          end_date: "2021-09-29",
          tags: "research",
        },
      ],
      showmodal: false,
      arrayname: "",
    };
  }
  uniqueId = () => {
    return Math.random() * Math.floor(Math.random() * Date.now());
  };

  setShowModal = (val) => {
    this.setState({ showmodal: !this.state.showmodal, arrayname: val });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const input_data = [
      {
        issue_id: String(this.uniqueId()),
        title: event.target.title.value,
        assignee: event.target.assignee.value,
        start_date: event.target.start_date.value,
        end_date: event.target.end_date.value,
        tags: event.target.tags.value,
      },
    ];
    const temp = this.state[this.state.arrayname];
    this.setState({
      [this.state.arrayname]: temp.concat(input_data),
    });
    this.setShowModal();
  };

  handleOnDragEnd = (params) => {
    if (!params.destination) return;
    const items = this.state;
    const [reorderedItm] = items[params.source.droppableId].splice(
      params.source.index,
      1
    );
    items[params.destination.droppableId].splice(
      params.destination.index,
      0,
      reorderedItm
    );
    this.setState(items);
  };
  render() {
    return (
      <div className="App">
        {this.state.showmodal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">New Task</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.setShowModal()}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={this.handleSubmit}>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="title"
                        >
                          Title
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="title"
                          type="text"
                          placeholder="title"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="tags"
                        >
                          Tags
                        </label>
                        <select
                          name="tags"
                          className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
                          id="grid-state"
                        >
                          <option value="research">RESEARCH</option>
                          <option value="backend">BACKEND</option>
                          <option value="design">DESIGN</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="assignee"
                        >
                          Assignee
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="assignee"
                          type="text"
                          placeholder="assignee"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="start_date"
                        >
                          Start Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="start_date"
                          type="date"
                          placeholder="Start Date"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="end_date"
                        >
                          End Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="end_date"
                          type="date"
                          placeholder="End Date"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Submit
                        </button>
                        <button
                          onClick={() => this.setShowModal()}
                          className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-blue-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.setShowModal(false)}
                    >
                      Close
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className="my-5 p-5 flex justify-between">
          <h1 className="text-gray-700 text-3xl font-black">Kanban</h1>
          <span className="px-4 py-1 bg-gray-100 rounded-full">70 Members</span>
        </div>
        <div className="flex justify-center">
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <div className="p-4 lg:w-1/3 w-1/3">
              <Lane
                title="Backlog"
                id="backlog"
                data={this.state.backlog}
                clickmodal={this.setShowModal}
              />
            </div>
            <div className="p-4 lg:w-1/3 w-1/3">
              <Lane
                title="To Do"
                id="todo"
                data={this.state.todo}
                clickmodal={this.setShowModal}
              />
            </div>
            <div className="p-4 lg:w-1/3 w-1/3">
              <Lane
                title="Done"
                id="done"
                data={this.state.done}
                clickmodal={this.setShowModal}
              />
            </div>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;
