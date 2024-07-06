// event listener waits for the HTML document to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", (event) => {
  const input = document.querySelector("#fruit");
  const suggestions = document.querySelector(".suggestions ul");

  // an array containing a list of fruit names
  const fruit = [
    "Apple",
    "Apricot",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Honeyberry",
    "Huckleberry",
    "Jabuticaba",
    "Jackfruit",
    "Jambul",
    "Juniper berry",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Longan",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Marionberry",
    "Melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Miracle fruit",
    "Mulberry",
    "Nectarine",
    "Nance",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Plantain",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Salmonberry",
    "Rambutan",
    "Redcurrant",
    "Salak",
    "Satsuma",
    "Soursop",
    "Star fruit",
    "Strawberry",
    "Tamarillo",
    "Tamarind",
    "Yuzu",
  ];
  // Function to filter fruits based on user input
  function search(str) {
    // converts lower or uppercase to lowercase in search bar
    const lowerStr = str.toLowerCase();
    // filters through the fruit array and includes only those fruit names that contain the user input string
    return fruit.filter((f) => f.toLowerCase().includes(lowerStr));
  }
  // Function to handle input keyup events
  function searchHandler(e) {
    //passes an event object 'e' as an argument. this object contains information about the event, including the target element where the event occured
    const inputVal = e.target.value; //'e.target' refers to the element that triggered the event. In this case, it is the input field with the ID 'fruit.
    //^  'e.target.value' gets the current value of the input field
    //^  'const inputVal' stores this value in the variable 'inputVal'
    const results = search(inputVal); //'search(inputVal)' calls the 'search' function, passing 'inputVal' as an argument
    // ^ the 'search' function returns an array of results that match the users input
    // ^ 'const results' stores this array in the variable 'results'
    showSuggestions(results, inputVal); // calls the 'showSuggestions' function, passing 'results' and 'inputVal' as arguments
  }
  // Function to display suggestions in the dropdown
  function showSuggestions(results, inputVal) {
    // Clear any previous suggestions from the suggestions list
    suggestions.innerHTML = "";
    // Check if there are any results and if the input value is not an empty string
    if (results.length > 0 && inputVal !== "") {
      // Iterate over each item in the results array
      results.forEach((item) => {
        // Create a new list item (li) element
        const li = document.createElement("li");
        // Set the text content of the list item to the current fruit name
        li.textContent = item;
        // Append the list item to the suggestions list
        suggestions.appendChild(li);
      });
    }
  }
  // Function to handle click events on suggestions
  function useSuggestion(e) {
    // Check if the clicked element is a list item (LI)
    if (e.target.tagName === "LI") {
      // Set the input fields value to the text content of the clicked list item
      input.value = e.target.textContent;
      // Clear the suggestions list
      suggestions.innerHTML = "";
    }
  }
  // add an eventlistener to the input field to handle keyup events
  input.addEventListener("keyup", searchHandler);
  // add an event listener to the suggestions list to handle click events
  suggestions.addEventListener("click", useSuggestion);
});
