import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();
  function addMeetupHandler(meetUpData) {
    fetch(
      "https://react-getting-started-7cb02-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: { "Content-Type": "application/json" }
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <div>
      New Meetups Page
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
