const dropArea = document.querySelector(".drag-area");
const button = document.querySelector("button");
const input = document.querySelector("input");
const validFileType = "text/plain";

button.onclick = () => {
  input.click();
}

input.addEventListener("change", () => {
  let fileReader = new FileReader();
  fileReader.onload = () => {
    const fileContent = fileReader.result;

    new SaveFileModifier(JSON.parse(fileContent));
  }
  fileReader.readAsText(input.files[0]);
})

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
})

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove("active");
})

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  if(file.type == validFileType) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      const fileContent = fileReader.result;

      new SaveFileModifier(JSON.parse(fileContent));
    }
    fileReader.readAsText(file);
    dropArea.classList.remove("active");
  } else {
    alert("This is not a Plaintext File!")
    dropArea.classList.remove("active");
  }
})