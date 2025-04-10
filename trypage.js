function toggleForm() {
    const modalBackground = document.getElementById('modalBackground');
    modalBackground.style.display = modalBackground.style.display === 'none' || modalBackground.style.display === '' ? 'flex' : 'none';
}

function drawChart() {
    const chartCanvas = document.getElementById('chartCanvas');
    const ctx = chartCanvas.getContext('2d');

    chartCanvas.width = 400;
    chartCanvas.height = 400;

    if (window.myChart) {
        window.myChart.destroy();
    }
    

    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert("Please enter a valid total amount");
        return;
    }

    const expenses = {
        transportation: parseFloat(document.getElementById('transportation').value) || 0,
        food: parseFloat(document.getElementById('food').value) || 0,
        education: parseFloat(document.getElementById('education').value) || 0,
        entertainment: parseFloat(document.getElementById('entertainment').value) || 0
    };

    const totalExpenses = expenses.transportation + expenses.food + expenses.education + expenses.entertainment;
    if (totalExpenses > totalAmount) {
        alert("Total expenses cannot exceed the total amount");
        return;
    }

    const calculatePercentages = (total, expenses) => {
        const percentages = {};
        for (let category in expenses) {
            percentages[category] = ((expenses[category] / total) * 100).toFixed(2);
        }
        return percentages;
    };

    const result = calculatePercentages(totalAmount, expenses);
    const remainingAmount = totalAmount - totalExpenses;
    result.remaining = ((remainingAmount / totalAmount) * 100).toFixed(2);

    const data = {
        labels: ['Transportation', 'Food', 'Education', 'Entertainment', 'Remaining'],
        datasets: [{
            label: 'Expense Distribution',
            data: [result.transportation, result.food, result.education, result.entertainment, result.remaining],
            backgroundColor: ['#FF6B6B', '#FFD93D', '#4ECDC4', '#1A535C', '#A9A9A9'],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false 
                },
                title: {
                    display: true,
                }
            }
        }
    };

    chartCanvas.style.display = 'block';
    window.myChart = new Chart(ctx, config);

    toggleForm();
}
