

const processText = () => {
    const whiteTeam = [];
    const blackTeam = [];
    const textField = document.getElementById("inputData");
    const printField = document.getElementById("outputData");

    const list = formatArray(textField.value)

    let whiteCounter = 1;
    let blackCouter = 1;

    list.forEach(item => {
        if (item.includes('*')) {
            item = blackCouter+'- '+item.replace("*"," ")
            blackTeam.push(item)
            blackCouter++
        }else{
            item = whiteCounter+'- '+item
            whiteTeam.push(item)
            whiteCounter++
        }
    });

    printField.value = 'Black Team:\n' + blackTeam.join("\n") +'\n\n\nWhite Team:\n'+whiteTeam.join("\n");
};

const formatArray = (input) => {
    return input.split("\n")
        .map(line => line.replace(/^\d+\.\s*/, ""))
        .filter(line => line.trim() !== "");
};


const copyText = () => {
    const textField = document.getElementById("outputData");
    navigator.clipboard.writeText(textField.value)
    .then(() => alert("Text copied!"))
    .catch(err => console.error("Error copying text:", err));
};

document.getElementById("copyBtn").addEventListener("click", copyText);
document.getElementById("processBtn").addEventListener("click", processText);