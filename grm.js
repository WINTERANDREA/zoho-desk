var popup = document.querySelector(".popup")
    function apriPopup() {

      popup.classList.remove("hide")
    }

// ZOHO WIDGET - APRI TICKET
  function fillWidgetValue(){
    $('#feedbNameTxtField').val("Nome Dinamico (campo nascosto)").addClass("hide")
    $('#feedbEmailTxtField').val("Email Dinamica (campo nascosto)").addClass("hide")
    popup.classList.add("hide")
  }


  // ZOHO ASAP - FAQ
  window.ZohoHCAsapReady = function (o) { if (window.ZohoHCAsap__asyncalls = window.ZohoHCAsap__asyncalls || [], window.ZohoHCAsapReadyStatus) { o && window.ZohoHCAsap__asyncalls.push(o); for (var a = window.ZohoHCAsap__asyncalls, s = 0; s < a.length; s++) { var n = a[s]; n && n() } window.ZohoHCAsap__asyncalls = null } else o && window.ZohoHCAsap__asyncalls.push(o) };
var apriFAQ = function () { ZohoHCAsap.Action("open");  popup.classList.add("hide") }
window.ZohoHCAsapSettings = {
    hideLauncherIcon: true}

