import { getData } from "./getData.mjs";
import { drawChart } from "./drawChart.mjs";
import fs from "fs";


async function run() {
  try {
    fs.readFile("data.json", "utf8", async (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      //console.log("File data:", jsonString);
      let data = JSON.parse(jsonString);
    //console.log(data);
        await drawChart(data);
    });
    
  } catch (error) {
    console.log(error);
  }
}

run();


// test.mjs

