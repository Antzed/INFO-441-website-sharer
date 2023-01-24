
async function previewUrl(){
    let url = document.getElementById("urlInput").value;
    
    let preview;

    try {
        let response = await fetch(`api/v1/urls/preview?url=${url}`);
        if (response.ok) {
            preview = await response.text();
        } else {
            preview = "Error fetching api preview="
        }
    } catch (error) {
        preview = "Frontend Error => " + error;
    }
    displayPreviews(preview)
}

function displayPreviews(previewHTML){
    document.getElementById("url_previews").innerHTML = previewHTML;
}
