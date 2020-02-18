const _ = require('lodash');
const fs = require('fs');
const { docs: toc } = require('./sidebars.temp.js')
const dest = require('./sdkSidebar.json')

const formatCategory = (category) => {
  return {
    type: "category",
    label: category,
    items: _.map(_.uniq(toc[category]), (x) => `comit-sdk/${x}`)
  };
}

let sidebar = _.map(_.keys(toc), formatCategory);
sidebar.unshift("comit-sdk/about");

const jsonContent = JSON.stringify(sidebar, null, 2);
fs.writeFile("sdkSidebar.json", jsonContent, 'utf8', function (err) {
  if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
  }
  console.log("JSON file has been saved.");
});
