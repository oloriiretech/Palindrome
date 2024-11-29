const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", palindrome)


function palindrome() {
    result.style.display = "block";
    result.classList.remove("hidden");
    if (textInput.value == "") {
        alert("Please input a value")
    } else { 
        result.style.color = "black"
        result.innerHTML = checkIfPalindrome(textInput.value)
        ? `<strong>${textInput.value}</strong> is a palindrome`
        : `<strong>${textInput.value}</strong> is not a palindrome`
    }
}

function checkIfPalindrome(content) {
    // removes non-alphanumeric characters.
    content = content.replace(/[\W_]/g,'').toLowerCase()
        let left = 0;
        let right = content.length - 1;
        while (left < right) {
            if (content[left] !== content[right]) {
                return false;
            }
            left++;
            right--;
        }
    return true;
}