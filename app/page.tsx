import TicketCard from "./(components)/TicketCard";

const getTask = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Task', { cache: 'no-store' });
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.error("Failed to fetch tasks:", error);
    return { task: [] };
  }
}


export default async function Home() {
  const { task } = await getTask();
  console.log({ task });

  return (
    <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  m-10">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
}
