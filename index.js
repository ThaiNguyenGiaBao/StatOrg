const core = require('@actions/core');


async function run() {
  try {
    const myInput = core.getInput('myInput');
    console.log(`Input received: ${myInput}`);

    // // Get data
    // const data = await getData(myInput);

    // // Draw chart
    // const chartPath = await drawChart(data);

    // Set the output
    core.setOutput('myOutput', "Hello World");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
