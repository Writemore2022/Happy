import { database } from "./firebase";
import { ref, set } from "firebase/database";

const feedback = document.querySelector("#feedback");
const submitBtn = document.querySelector("#submitFeedback");

submitBtn.addEventListener("click", () => {
  const now = new Date();

  const feedbackText = JSON.stringify(feedback.value)

  storeFeedback(now, feedbackText);
  console.log(now + feedbackText);
});

function storeFeedback(now, data) {
  set(ref(database, 'feedback/' + now), {
    time: now,
    feedback: data,
  });
}
