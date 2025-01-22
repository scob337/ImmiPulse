document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'question'
    const questions = document.querySelectorAll('.question');

    // Add a click event listener to each question element
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // The next sibling element which contains the answer
            const icon = question.querySelector('.toggle-icon'); // The icon element within the question
            const isActive = question.getAttribute('data-active') === 'true'; // Check if the question is currently active

            // Toggle the data-active attribute
            question.setAttribute('data-active', !isActive);

            // Toggle the visibility of the answer
            if (isActive) {
                // If active, hide the answer
                answer.classList.add('hidden');
                answer.classList.remove('opacity-100');
                answer.classList.add('opacity-0');
                question.classList.remove('bg-custom-blue');
                icon.textContent = '+';
            } else {
                // If not active, show the answer
                answer.classList.remove('hidden');
                setTimeout(() => {
                    answer.classList.remove('opacity-0');
                    answer.classList.add('opacity-100');
                }, 10);
                question.classList.add('bg-custom-blue');
                icon.textContent = '–';
            }
        });
    });
});