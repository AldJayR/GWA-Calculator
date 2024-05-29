const grades = document.querySelectorAll(".grade-select");
const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");
const units = [3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 2.00];
let calculatedUnits = [];

const sum = grades => grades.reduce((acc, el) => acc + el, 0);

const calculateGradeSum = values => sum(values);

const validateInput = values => {
    const gradeSum = sum(values);

    if (gradeSum < 7) {
        alert("Invalid grade total. Please double check your options");
        return false;
    }

    return true;
}

const calculateUnits = values => {
    calculatedUnits = [];
    for (let i = 0; i < values.length; i++) {
        let computedUnit = values[i] * units[i];
        calculatedUnits.push(computedUnit);
    }

    const sumOfUnits = sum(calculatedUnits);
    return sumOfUnits;
}

const calculateGWA = values => {
    const unitSum = calculateUnits(values);
    const totalNumberOfUnits = sum(units);


    return unitSum / totalNumberOfUnits;
}


submitBtn.addEventListener("click", () => {
    const values = Array.from(grades).map(select => parseFloat(select.value) || 0);

    if (!validateInput(values)) {
        return;
    }

    const GWA = calculateGWA(values);

    resultText.innerHTML = `Your GWA is: <strong>${GWA.toFixed(2)}</strong>`;

    
})
