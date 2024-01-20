// async function searchMedicine() {
//     const searchQuery = document.getElementById("searchQuery").value;
  
//     try {
//       const response = await fetch(`/search?query=${encodeURIComponent(searchQuery)}`);
//       const data = await response.json();
  
//       displayResults(data);
//     } catch (error) {
//       console.error('Произошла ошибка:', error);
//     }
//   }
  
//   function displayResults(results) {
//     const resultsContainer = document.getElementById("results");
//     resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты
  
//     if (results.length > 0) {
//       results.forEach(result => {
//         const resultElement = document.createElement("p");
//         resultElement.textContent = result;
//         resultsContainer.appendChild(resultElement);
//       });
//     } else {
//       const noResultsElement = document.createElement("p");
//       noResultsElement.textContent = "Лекарство не найдено.";
//       resultsContainer.appendChild(noResultsElement);
//     }
//   }
  