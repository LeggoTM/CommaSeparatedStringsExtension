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
