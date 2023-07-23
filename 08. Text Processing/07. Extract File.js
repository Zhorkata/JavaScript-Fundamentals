function extractFile(input) {
    let direction = input.split('\\');
    let file = direction.pop();

    let dotIndex = file.lastIndexOf('.');
    let fileName = file.substring(0, dotIndex);
    let extension = file.substring(dotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
console.log(`----CASE----`);
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log(`----CASE----`);
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
console.log(`----CASE----`);
extractFile('C:\\Documents\\template.bak.pptx');
