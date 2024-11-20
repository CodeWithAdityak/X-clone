function autosize() {
    // Get all textareas with the class 'autosize'
    let textareas = document.querySelectorAll('.autosize');

    textareas.forEach(function(textarea) {
        // Set initial rows to 1
        textarea.setAttribute('rows', 1);

        // Resize the textarea based on its content
        resize(textarea);

        // Attach the input event handler to resize on input
        textarea.addEventListener('input', function() {
            resize(textarea);
        });
    });

    function resize(textarea) {
        // Temporarily set height to auto to calculate scrollHeight
        textarea.style.height = 'auto';
        // Set height to scrollHeight to fit content
        textarea.style.height = textarea.scrollHeight + 'px';
    }
}

// Initialize autosize function on page load
document.addEventListener('DOMContentLoaded', function() {
    autosize();
});