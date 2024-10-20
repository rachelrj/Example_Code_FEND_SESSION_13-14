const flavor = "strawberry";

const topping = "sprinkles";

const vessel = "wafer cone";

if (
  (flavor === "chocolate" || flavor === "vanilla") &&
  (topping = "sprinkles" || topping === "peanuts") &&
  (vessel === "sugar cone" || vessel === "wafer cone")
) {
  console.log("Great Choice");
} else {
  console.log("Please try again");
}
