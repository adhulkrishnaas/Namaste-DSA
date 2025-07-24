function isEligibleToVote(age) {
  if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible for vote.");
  }
}

isEligibleToVote(18);
isEligibleToVote(16);
isEligibleToVote(26);
