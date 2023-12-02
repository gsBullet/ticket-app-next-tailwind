import TicketForm from "@/app/(components)/TicketForm";
const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Connection/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("failed to get ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const TicketPage = async ({ params }) => {
  const editTicket = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (editTicket) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    // console.log(updateTicketData);
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData}/>;
};

export default TicketPage;
