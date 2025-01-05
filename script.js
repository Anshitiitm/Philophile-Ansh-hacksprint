// Daily Activity Tracker
const activityForm = document.getElementById('activity-form');
const meditationInput = document.getElementById('meditation');
const sleepInput = document.getElementById('sleep');
const exerciseInput = document.getElementById('exercise');
const waterInput = document.getElementById('water');
const nutritionInput = document.getElementById('nutrition');
const userScoreElement = document.getElementById('user-score');
const scoreTipsElement = document.getElementById('score-tips');
const resultSection = document.getElementById('result');

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather user input
    const meditation = parseInt(meditationInput.value);
    const sleep = parseInt(sleepInput.value);
    const exercise = parseInt(exerciseInput.value);
    const water = parseFloat(waterInput.value);
    const nutrition = parseInt(nutritionInput.value);

    // Calculate score (for simplicity, the following are just examples)
    let score = 0;

    // Meditation: Add points based on time spent meditating
    score += meditation >= 20 ? 20 : meditation * 1;

    // Sleep: Ideal sleep is between 7-9 hours
    score += sleep >= 7 && sleep <= 9 ? 25 : (sleep < 7 ? 5 : 0);

    // Exercise: Ideal is 30 minutes or more per day
    score += exercise >= 30 ? 20 : exercise * 0.5;

    // Water: 2-3 liters is ideal
    score += water >= 2 && water <= 3 ? 15 : (water < 2 ? 5 : 0);

    // Nutrition: 5 or more servings of fruits/vegetables
    score += nutrition >= 5 ? 20 : nutrition * 4;

    // Display score
    userScoreElement.textContent = score;

    // Provide feedback and tips
    provideTips(score, meditation, sleep, exercise, water, nutrition);

    // Show the result section after score calculation
    resultSection.style.display = 'block';
});

// Provide tips based on score and habits
function provideTips(score, meditation, sleep, exercise, water, nutrition) {
    let tips = '';

    // Provide areas for improvement
    if (score < 50) {
        tips += '<strong>Areas to Improve:</strong><ul>';
        if (meditation < 10) tips += '<li>Try to meditate for at least 10-20 minutes daily to reduce stress.</li>';
        if (sleep < 7) tips += '<li>Try to get 7-9 hours of sleep each night for better health.</li>';
        if (exercise < 30) tips += '<li>Aim for at least 30 minutes of exercise daily to improve fitness.</li>';
        if (water < 2) tips += '<li>Drink 2-3 liters of water daily to stay hydrated.</li>';
        if (nutrition < 5) tips += '<li>Increase your intake of fruits and vegetables to 5 servings daily.</li>';
        tips += '</ul>';
    } else {
        tips = '<strong>Great job!</strong><p>You are maintaining a healthy lifestyle. Keep it up!</p>';
    }

    // Display the tips
    scoreTipsElement.innerHTML = tips;
}

// Eco Score Calculator
const ecoForm = document.getElementById('eco-form');
const recyclingInput = document.getElementById('recycling');
const energyInput = document.getElementById('energy');
const transportationInput = document.getElementById('transportation');
const waterConservationInput = document.getElementById('water-conservation');
const foodWasteInput = document.getElementById('food-waste');
const ecoScoreElement = document.getElementById('eco-score');
const ecoTipsElement = document.getElementById('eco-tips');
const ecoResultSection = document.getElementById('eco-result');

ecoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather eco-friendly inputs
    const recycling = recyclingInput.value.toLowerCase();
    const energy = energyInput.value.toLowerCase();
    const transportation = transportationInput.value.toLowerCase();
    const waterConservation = waterConservationInput.value.toLowerCase();
    const foodWaste = foodWasteInput.value.toLowerCase();

    // Calculate eco score
    let ecoScore = 0;

    // Recycling: "yes" = 20 points
    ecoScore += recycling === 'yes' ? 20 : 0;

    // Energy consumption: "low" = 30 points, "medium" = 20, "high" = 5
    if (energy === 'low') {
        ecoScore += 30;
    } else if (energy === 'medium') {
        ecoScore += 20;
    } else if (energy === 'high') {
        ecoScore += 5;
    }

    // Transportation: "bike" or "public transport" = 25 points, "car" = 5 points
    if (transportation === 'bike' || transportation === 'public transport') {
        ecoScore += 25;
    } else if (transportation === 'car') {
        ecoScore += 5;
    }

    // Water conservation: "yes" = 20 points
    ecoScore += waterConservation === 'yes' ? 20 : 0;

    // Food waste: "yes" = 20 points
    ecoScore += foodWaste === 'yes' ? 20 : 0;

    // Display Eco Score
    ecoScoreElement.textContent = ecoScore;

    // Provide feedback and tips
    provideEcoTips(ecoScore, recycling, energy, transportation, waterConservation, foodWaste);

    // Show the result section after eco score calculation
    ecoResultSection.style.display = 'block';
});

// Provide tips based on eco score and sustainable habits
function provideEcoTips(ecoScore, recycling, energy, transportation, waterConservation, foodWaste) {
    let ecoTips = '';

    // Provide areas for improvement
    if (ecoScore < 50) {
        ecoTips += '<strong>Areas to Improve:</strong><ul>';
        if (recycling !== 'yes') ecoTips += '<li>Start recycling more to reduce waste.</li>';
        if (energy === 'high') ecoTips += '<li>Try to reduce energy consumption by switching to energy-efficient appliances.</li>';
        if (transportation === 'car') ecoTips += '<li>Consider using a bike or public transport to reduce your carbon footprint.</li>';
        if (waterConservation !== 'yes') ecoTips += '<li>Start conserving water by fixing leaks and using water-efficient fixtures.</li>';
        if (foodWaste !== 'yes') ecoTips += '<li>Minimize food waste by planning meals better and storing food properly.</li>';
        ecoTips += '</ul>';
    } else {
        ecoTips = '<strong>Great job!</strong><p>You are doing excellent in adopting sustainable practices. Keep it up!</p>';
    }

    // Display the eco tips
    ecoTipsElement.innerHTML = ecoTips;
}

// Personalized Recommendations Section
const recommendationsSection = document.getElementById('recommendations-section');
const recommendationsTipsElement = document.getElementById('recommendations-tips');

function showPersonalizedRecommendations() {
    const meditation = parseInt(meditationInput.value);
    const sleep = parseInt(sleepInput.value);
    const exercise = parseInt(exerciseInput.value);
    const water = parseFloat(waterInput.value);
    const nutrition = parseInt(nutritionInput.value);
    
    let recommendations = '<strong>Personalized Sustainability Tips:</strong><ul>';

    // Personalized tips based on meditation habits
    if (meditation < 10) {
        recommendations += '<li>Consider meditating for at least 10-20 minutes daily for better focus and stress management.</li>';
    }

    // Personalized tips based on sleep habits
    if (sleep < 7) {
        recommendations += '<li>Try to aim for 7-9 hours of sleep each night for optimal health and energy.</li>';
    }

    // Personalized tips based on exercise habits
    if (exercise < 30) {
        recommendations += '<li>Try to incorporate 30 minutes of moderate exercise into your daily routine.</li>';
    }

    // Personalized tips based on water intake
    if (water < 2) {
        recommendations += '<li>Ensure you drink 2-3 liters of water daily to stay hydrated.</li>';
    }

    // Personalized tips based on nutrition habits
    if (nutrition < 5) {
        recommendations += '<li>Increase your intake of fruits and vegetables to 5 servings per day for better health.</li>';
    }

    recommendations += '</ul>';

    // Display the personalized recommendations
    recommendationsTipsElement.innerHTML = recommendations;
}

// Call the function to show personalized recommendations after user inputs are provided
activityForm.addEventListener('submit', () => {
    showPersonalizedRecommendations();
});
