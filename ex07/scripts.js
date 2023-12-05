function handleFileSelect(input) {
    const fileName = document.getElementById('file-name');
    if (input.files.length > 0) {
        fileName.textContent = `Arquivo selecionado: ${input.files[0].name}`;
    } else {
        fileName.textContent = '';
    }
}