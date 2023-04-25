import { EventCard, Footer, Header } from "../components"

const EventPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
      <Footer />
    </div>
  );
}

export default EventPage