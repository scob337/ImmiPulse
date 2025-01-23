(function (d, w) {
    // Add click event listeners to all question elements in the FAQ section
    d.querySelectorAll('#faqs .q').forEach(q => {
        q.addEventListener('click', () => {
            // Toggle the active state of the clicked question
            const isActive = q.dataset.a === 'true';
            q.dataset.a = !isActive;

            // Get the icon element within the clicked question
            const icon = q.querySelector('.icon');
            const answer = q.nextElementSibling;

            // Change the icon and display the answer based on the active state
            if (!isActive) {
                icon.src = "./assets/icons/forQuestions/minus.svg";
                icon.alt = "Collapse";
                answer.classList.remove('hidden');
            } else {
                icon.src = "./assets/icons/forQuestions/plus.svg";
                icon.alt = "Expand";
                answer.classList.add('hidden');
            }
        });
    });
}
)(document, window);