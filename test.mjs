// const core = require('@actions/core');
import { getData } from './getData.mjs';
// import { drawChart } from './drawChart';

async function run() {
  try {
    
    const data = await getData();
    console.log(data);
    
  } catch (error) {
    
  }
}

run();
