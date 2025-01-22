// Select all steps, buttons, and indicators
const steps = document.querySelectorAll('.step');
const nextStepBtn = document.getElementById("nextStep");
const backStepBtn = document.getElementById("backStep");
const stepIndicators = document.querySelectorAll('.step-indicator div');
const stepText = document.getElementById("stepText");
let currentStep = 0;

// Define the step descriptions
const stepTexts = [
    "First up, let’s get to know you!",
    "Hi Mark! Complete our 4-step process. Find out the best visa for you.",
];

// Function to show a specific step
function showStep(step) {
    // Toggle active class for steps
    steps.forEach((stepElement, index) => {
        stepElement.classList.toggle('active', index === step);
    });

    // Update step indicators and text
    if (step < steps.length) {
        stepIndicators.forEach((indicator, index) => {
            if (index % 2 === 0) { // Step indicator
                indicator.classList.toggle('step-indicator-current', index / 2 == step);
                indicator.classList.toggle('step-indicator-completed', index / 2 <= step);
            } else { // Separator
                indicator.classList.toggle('step-indicator-completed', Math.floor(index / 2) < step);
            }
        });
        stepText.textContent = stepTexts[step];
    } else {
        // All steps completed
        stepIndicators.forEach((indicator, index) => {
            if (index % 2 === 0) { // Step indicator
                indicator.classList.add('step-indicator-completed');
                indicator.classList.remove('step-indicator-current');
            } else { // Separator
                indicator.classList.add('step-indicator-completed');
            }
        });
    }

    // Toggle visibility of the Back button
    backStepBtn.style.display = step > 0 ? 'inline-block' : 'none';
}

// Function to validate the current step
function validateStep(step) {
    let isValid = true;
    const inputs = steps[step].querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('border-red-500', 'outline-red-500');
        } else {
            input.classList.remove('border-red-500', 'outline-red-500');
        }
    });

    const errorMessage = document.getElementById(`error-step-${step + 1}`);
    errorMessage.style.display = isValid ? 'none' : 'block';

    return isValid;
}

// Function to remove error styles when the user inputs data
function removeErrorStyles(event) {
    event.target.classList.remove('border-red-500', 'outline-red-500');
}

// Event listener for the Next button
nextStepBtn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
        currentStep++;
        if (currentStep < steps.length) {
            showStep(currentStep);
        } else {
            showStep(currentStep); // Update indicators for the last step
            document.getElementById("multiStepForm").style.display = 'none';
            document.getElementById("thankYouMessage").style.display = 'block';
        }
    }
});

// Event listener for the Back button
backStepBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// Enable/disable custom input field based on checkbox
document.getElementById('customOption').addEventListener('change', function () {
    document.getElementById('customInput').disabled = !this.checked;
});

// Toggle additional fields based on choice selection
document.getElementsByName('choices').forEach(choice => {
    choice.addEventListener('change', function () {
        document.getElementById('additionalFields').classList.toggle('hidden', this.value !== 'choice2');
    });
});

// Toggle dropdown list visibility
const button = document.getElementById('dropdownButton');
const dropdownList = document.getElementById('dropdownList');
button.addEventListener('click', () => {
    dropdownList.classList.toggle('hidden');
});

// Add event listeners to remove error styles on input change
steps.forEach(step => {
    const inputs = step.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('input', removeErrorStyles);
    });
});

// Initialize the first step
showStep(currentStep);