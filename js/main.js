const BUTTON_ADD = document.querySelector("#btn-add");
const INPUT_ADD = document.querySelector('#add');
const BUTTON_FILTER = document.querySelector('#btn-filter');
const INPUT_FILTER = document.querySelector('#filter');
const UL_ITEM = document.querySelector('#result');
BUTTON_ADD.addEventListener('click', () => {
    //display input f
    BUTTON_ADD.classList.add('active');
    INPUT_ADD.style.display = "block";
    //if input != "" add value into list
    const input_element = INPUT_ADD.value;
    if (input_element != "") {
        console.log(input_element);
        clearInput();
        displayItem(input_element);
    }
});
document.addEventListener('keyup', event => {
    const input_element = INPUT_ADD.value;
    if (event.code === "Enter") {
        clearInput();
        displayItem(input_element);
    }
});
//clear input
function clearInput() {
    INPUT_ADD.value = "";
}
//display to ul
function displayItem(value) {
    let litsValue = "";
    litsValue += `
         <li>${value}</li>
         `;
    UL_ITEM.insertAdjacentHTML('beforeend', litsValue);
}
// filter
BUTTON_FILTER.addEventListener('click', () => {
    //display input f
    BUTTON_FILTER.classList.add('active');
    INPUT_FILTER.style.display = "block";
    const input_element = INPUT_ADD.value;
    if (event.code === "Enter") {
        clearInput();
        displayItem(input_element);
        filterItem();
    }
});

function filterItem() {
    const FILTER_NOT_FOUND = -1;
    const items = document.querySelector('li');
    let filter = INPUT_FILTER.toUpperCase();
    let text;
    for (let i = 0; i < items.length; i++) {
        text = items[i].textContent || items[i].innerText;
        let isFilterMatch = text.toUpperCase().indexOf(filter) > FILTER_NOT_FOUND;
        console.log(isFilterMatch);
        if (isFilterMatch > -1) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
    document.addEventListener("keypress", filterItem);
}