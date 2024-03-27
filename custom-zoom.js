const urlParams = new URLSearchParams(window.location.search);
const zoomLevel = urlParams.get('zoom');
if (zoomLevel) {
    document.body.style.zoom = zoomLevel + '%'
}