// Tabs functionality taken from https://codepen.io/aburkalo/pen/vYRdOBV
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

let tabNo = 0;
let contentNo = 0;

tabs.forEach((tab) => {
  tab.dataset.id = tabNo;
  tabNo++;
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.add("non-active");
    });
    this.classList.remove("non-active");
    this.classList.add("active");
    tabContent.forEach((content) => {
      content.classList.add("hidden");
      if (content.dataset.id === tab.dataset.id) {
        content.classList.remove("hidden");
      }
    });
  });
});

tabContent.forEach((content) => {
  content.dataset.id = contentNo;
  contentNo++;
});

// Copy functionality
const copyButtons = document.querySelectorAll('.copyButton');
copyButtons.forEach((copyButton) => {
  copyButton.addEventListener('click', function () {
    copyFunction(copyButton);
  })
});

function copyFunction(copyButton) {
  let copyText = document.querySelector('.tab-content:not(.hidden) textarea.formattedText');
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  copyButton.innerHTML = 'Copied!';
}

// TestSteps Conversion
const convertListButton = document.getElementById('convertList');
const listInput = document.getElementById('listInput');
const listOutput = document.getElementById('listOutput');
const listPrefixRegex = new RegExp(/(^\d+\.\s)|^/, 'gmi');
const listSuffixRegex = new RegExp(/(\.\n)|\n|\.|$/, 'gmi');
const prefixReplaceValue = '\'';
const suffixReplaceValue = '\',\n';
convertListButton.addEventListener('click', function () {
  convertFunction(listInput, listOutput, listPrefixRegex, prefixReplaceValue, suffixReplaceValue, listSuffixRegex);
});


// Nodes Conversion
const convertNodesButton = document.getElementById('convertNodes');
const nodesInput = document.getElementById('nodesInput');
const nodesOutput = document.getElementById('nodesOutput');
const nodesPrefixRegex = new RegExp(/([^,]+,[^,]+),\s/, 'gmi');
const nodesReplaceValue = '$1,\n';
convertNodesButton.addEventListener('click', function () {
  convertFunction(nodesInput, nodesOutput, nodesPrefixRegex, nodesReplaceValue);
});


// Steps Conversion
const convertStepsButton = document.getElementById('convertSteps');
const stepsInput = document.getElementById('stepsInput');
const stepsOutput = document.getElementById('stepsOutput');
const stepsPrefixRegex = new RegExp(/^/, 'gmi');
const stepsReplaceValue = '- ';
convertStepsButton.addEventListener('click', function () {
  convertFunction(stepsInput, stepsOutput, stepsPrefixRegex, stepsReplaceValue);
});

// Conversion functionality
function convertFunction(elementInput, elementOutput, prefixRegex, prefixReplaceValue, suffixReplaceValue = 'empty', suffixRegex = 'empty') {
  if (suffixRegex === 'empty') {
    let inputText = elementInput.value;
    let prefixResult = inputText.replace(prefixRegex, prefixReplaceValue);
    elementOutput.value = prefixResult;
  }
  else {
    let inputText = elementInput.value;
    let prefixResult = inputText.replace(prefixRegex, prefixReplaceValue);
    let suffixResult = prefixResult.replace(suffixRegex, suffixReplaceValue);
    elementOutput.value = suffixResult;
  }
}