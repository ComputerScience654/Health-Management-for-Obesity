document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = (weight / (height * height)).toFixed(2);

    document.getElementById('bmiValue').textContent = bmi;

    let message = '';
    if (bmi < 18.5) {
        message = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'You are overweight.';
    } else {
        message = 'You are obese.';
    }

    document.getElementById('bmiMessage').textContent = message;
    document.getElementById('bmiResult').style.display = 'block';
});

document.getElementById('nutritionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const calories = parseFloat(document.getElementById('calories').value);

    const protein = ((calories * 0.2) / 4).toFixed(1);
    const fat = ((calories * 0.3) / 9).toFixed(1);
    const carbs = ((calories * 0.5) / 4).toFixed(1);

    document.getElementById('protein').textContent = protein;
    document.getElementById('fat').textContent = fat;
    document.getElementById('carbs').textContent = carbs;
    document.getElementById('nutritionResult').style.display = 'block';
});