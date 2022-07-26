document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // datepicker initlialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // selects initlialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initlialization
    let collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
  });