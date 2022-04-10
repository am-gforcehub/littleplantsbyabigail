var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

var myDropdown = document.getElementsByClassName('.dropdown-toggle')
myDropdown.addEventListener('show.dropdown', function () {

})




