import { database } from "./firebase";
import { ref, set } from "firebase/database";

const feedback = document.querySelector("#feedback");
const submitBtn = document.querySelector("#submitFeedback");

submitBtn.addEventListener("click", () => {
  const now = new Date();

  const feedbackText = JSON.stringify(feedback.value);

  try {
    storeFeedback(now, feedbackText);
  } catch (error) {
    console.error(error);
  }

  feedback.value = ''
});

function storeFeedback(now, data) {
  set(ref(database, "feedback/" + now), {
    time: now,
    feedback: data,
  });
}