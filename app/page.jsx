import TicketCard from "./(components)/TicketCard";

async function getTickets() {
  const res = await fetch("http://localhost:3000/api/Connection", {
    cache: "no-store",
  });
  let data = await res.json();
  // console.log(data);
  return data;
}

async function Dashboard() {
  try {
    const { tickets } = await getTickets();

    const uniqueCategories = [
      ...new Set(tickets.map(({ category }) => category)),
    ];
    // console.log(uniqueCategories);

    return (
      <div className="p-5">
        <div>
          {tickets &&
            uniqueCategories.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets
                    .filter((ticket) => ticket.category === uniqueCategory)
                    .map((filteredTickets, _index) => (
                      <TicketCard
                        id={_index}
                        key={_index}
                        ticket={filteredTickets}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log("failed to get tickets", error);
  }
}

export default Dashboard;
