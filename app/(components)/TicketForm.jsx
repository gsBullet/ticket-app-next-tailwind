"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  // console.log(ticket);
  const editTicket = ticket._id === "new" ? false : true;
  const router = useRouter();

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (editTicket) {
      const response = await fetch(`/api/Connection/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!response.ok) {
        throw new Error("Filded to update Ticket.");
      }
     
    }
    else{
      const response = await fetch("/api/Connection", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!response.ok) {
        throw new Error("Ticket is not created?");
      }
      
    }
    router.refresh();
    router.push("/");
  };

  const startTicketData = {
    title: "",
    description: "",
    priority: "",
    progress: "",
    status: "",
    category: "",
  };

  if (editTicket) {
    startTicketData["title"] = ticket.title;
    startTicketData["description"] = ticket.description;
    startTicketData["category"] = ticket.category;
    startTicketData["priority"] = ticket.priority;
    startTicketData["progress"] = ticket.progress;
    startTicketData["status"] = ticket.status;
  }

  const [formData, setformData] = useState(startTicketData);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={submitHandler}
        action=""
        method="POST"
        className="flex flex-col gap-3 w-1/2 "
      >
        <h2>{editTicket ? "update Your Ticket" : "create your Ticket"}</h2>
        <label>Title</label>
        <input
          onChange={inputHandler}
          id="title"
          name="title"
          type="text"
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          onChange={inputHandler}
          id="description"
          name="description"
          required={true}
          value={formData.description}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={inputHandler}
        >
          <option value="">select</option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={inputHandler}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={inputHandler}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={inputHandler}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={inputHandler}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={inputHandler}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>

        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={inputHandler}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={inputHandler}
          value={formData.status}
        >
          <option value="Not Started">Not Started</option>
          <option value="Started">Started</option>
          <option value="End">End</option>
        </select>
        <input type="submit" className="btn max-w-xs" value={editTicket ? "update  Ticket" : "create Ticket"} />
      </form>
    </div>
  );
};

export default TicketForm;
