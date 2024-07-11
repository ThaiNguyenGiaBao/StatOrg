// const core = require('@actions/core');
import core from '@actions/core';
import { getData } from './getData.mjs';
// import { drawChart } from './drawChart';

async function run() {
  try {
    const myInput = core.getInput('myInput');
    console.log(`Input received: ${myInput}`);

    // Get data
    const data = await getData();
    console.log(data);
    // Draw chart
    await drawChart(data);

    // Set the output
    core.setOutput('myOutput', "Hello World");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
