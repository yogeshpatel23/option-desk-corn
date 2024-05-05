import corn from "node-cron";

async function updateNifty() {
  try {
    fetch("http://localhost:3000/api/option/nifty", { method: "POST" });
    fetch("http://localhost:3000/api/option/banknifty", { method: "POST" });
    fetch("http://localhost:3000/api/option/finnifty", { method: "POST" });
    fetch("http://localhost:3000/api/option/midcapnifty", { method: "POST" });
  } catch (error) {
    console.log(error);
  }
  console.log(new Date().toLocaleString());
}

corn.schedule("17-59 9 * * 1-5", () => {
  updateNifty();
});

corn.schedule("* 10-14 * * 1-5", () => {
  updateNifty();
});

corn.schedule("0-30 15 * * 1-5", () => {
  updateNifty();
});

//0-30 15 * * 1-5
