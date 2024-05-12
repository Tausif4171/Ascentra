import TicketCard from "./(components)/TicketCard";

export default function Home() {
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
