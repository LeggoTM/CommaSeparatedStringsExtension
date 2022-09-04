//Tabs functionality taken from https://codepen.io/aburkalo/pen/vYRdOBV
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


// TestSteps Conversion
let convertButton = document.getElementById('convertList');
convertButton.addEventListener('click', convertFunction);


function convertFunction() {
    let inputText = document.getElementById('listInput').value;

    const prefixRegex = new RegExp(/(^\d+\.\s)|^/, 'gmi');
    const suffixRegex = new RegExp(/(\.\n)|\n|\.|$/, 'gmi');

    let prefixResult = inputText.replace(prefixRegex, '\'');
    let suffixResult = prefixResult.replace(suffixRegex, '\',\n');

    document.getElementById('stringsOutput').value = suffixResult;
}

let copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyFunction);

function copyFunction() {
    let copyText = document.getElementById('stringsOutput');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    copyButton.innerHTML = 'Copied!';
}

