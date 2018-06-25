this["JST"] = this["JST"] || {};

this["JST"]["templates/homepage.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'homepage\'>\n\n\t\n</div>\n\n';

}
return __p
};

this["JST"]["templates/main.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<header></header>\n<section id="main-content"></section>\n<footer></footer>';

}
return __p
};

this["JST"]["templates/index.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html>\n\n<head>\n\t<title itemprop=\'name\'> ' +
((__t = ( title )) == null ? '' : __t) +
'</title>\n\n\t<meta charset="utf-8">\n\t<meta http-equiv=\'Content-type\' content=\'text/plain; charset=x-user-defined\' />\n\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1" />\n\t<meta name="apple-mobile-web-app-status-bar-style" content="purple-translucent">\n\t<meta name="mobile-web-app-capable" content="yes">\n\n\t<meta name=\'description\' content="' +
((__t = ( description )) == null ? '' : __t) +
'" />\n\n\t<meta name="keywords" itemprop="keywords" content="' +
((__t = ( keywords )) == null ? '' : __t) +
'" />\n\n\t<link rel=\'canonical\' href=\'\' itemprop=\'url\' />\n\n\t<link rel="icon" sizes="192x192" href="/favico.ico" data-reactid="24">\n\n\t<meta name="theme-color" content="#db1174">\n\t\n\t<!-- HTTP -->\n\t<meta name="google-site-verification" content="5onw29QzEFUh_wayOn_9EdxfzH0csFOR4OGroaIHb-k" />\n\n\t<!-- HTTPS -->\n\t<meta name="google-site-verification" content="5onw29QzEFUh_wayOn_9EdxfzH0csFOR4OGroaIHb-k" />\n\t\n\t<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n\n\t<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">\n\n\t<link rel="stylesheet" type="text/css" href="/styles/main.css">\n\t<style type="text/css">\n\t\t' +
((__t = ( pageCSS )) == null ? '' : __t) +
'\n\t</style>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( websiteSchema )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( addressSchema )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( customerCare )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( socialProfile )) == null ? '' : __t) +
'\n\t</script>\n\n\n\t<script type="text/javascript">\n\n\t\tfunction loadScript() {\n\n\t\t\t// No need of adding live reload script on live site\n\t\t\tif (location.hostname === \'www.naturalclinicmd.com\') {\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tvar lrHost = location.protocol + \'//\' + location.hostname + \':35729\';\n\t\t\tvar s = document.createElement(\'script\');\n\t\t\ts.async = true;\n\t\t\ts.setAttribute(\'src\', lrHost + \'/livereload.js\');\n\t\t\tdocument.body.appendChild(s);\n\t\t}\n\n\t\twindow.onload = loadScript;\n\t</script>\n\n\t<!-- Global site tag (gtag.js) - Google Analytics -->\n\t<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105629408-1"></script>\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() { dataLayer.push(arguments); }\n\t\tgtag(\'js\', new Date());\n\n\t\tgtag(\'config\', \'UA-105629408-1\');\n\t</script>\n\n\n\t<style type="text/css">\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t.logo-container {\n\t\t\tpadding: 100px 0 20px;\n\t\t}\n\n\t\t.overlay-modal {\n\t\t\tposition: fixed;\n\t\t\toverflow: hidden;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcolor: white;\n\t\t}\n\t</style>\n\n\t<link rel="icon" type="image/png" href="/favico.ico">\n</head>\n\n<body>\n\n\n\t<div class="content">\n\n\t</div>\n\n\t' +
((__t = ( mainContent )) == null ? '' : __t) +
'\n\n\t<header>\n\t\t<div class="header-wrapper">\n\t\t\t<div class="logo-container">\n\t\t\t\t<img src="/images/logo.png">\n\t\t\t</div>\n\n\n\t\t\t<div class="hamberger-container">\n\t\t\t\t<button class="ham-berger">\n\t\t\t\t\t<i class="fa fa-bars fa-2x" aria-hidden="true"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class="header-overlay"></div>\n\n\t\t\t<div class="header-contact">\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href="tel:727-753-8861">727-753-8861 </a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-envelope"></i>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="">\n\t\t\t\t\t\t\t<i class="fa fa-google-plus"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t\t<div class="schedule-appointment">\n\t\t\t\tFREE Consultation\n\t\t\t</div>\n\n\t\t\t<div class="menu-tab">\n\n\t\t\t\t<div class="group group-1">\n\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<a href="tel:727-753-8861">\n\t\t\t\t\t\t\t\t\tNew Port Richey : 727-753-8861\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<a href="tel:321-405-2090">\n\t\t\t\t\t\t\t\t\tRockledge : 321-405-2090\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<i class="fa fa-fax"></i>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<a href="tel:888-849-6158">\n\t\t\t\t\t\t\t\t\t888-849-6158\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<i class="fa fa-envelope"></i>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n\t\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="">\n\t\t\t\t\t\t\t\t<i class="fa fa-google-plus"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="group group-2">\n\n\t\t\t\t\t<ul class="main-menu">\n\n\n\t\t\t\t\t\t<li class="" data-id="0" data-url="/">\n\t\t\t\t\t\t\tHOME\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="active" data-id="1" data-url="">\n\t\t\t\t\t\t\tTEAM\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="team/doctors">\n\t\t\t\t\t\t\t\t\tOur Treatment Team\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="" data-id="2" data-url="">\n\t\t\t\t\t\t\tMEDICAL MARIJUANA\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="medical-cannabis/terms-types">\n\t\t\t\t\t\t\t\t\tTerms and Types\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="medical-cannabis/medical-uses">\n\t\t\t\t\t\t\t\t\tMedical Uses\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="" data-id="3" data-url="">\n\t\t\t\t\t\t\tPATIENTS AND REPRESENTATIVES\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="patients/eligibility">\n\t\t\t\t\t\t\t\t\tPatient Eligibility\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="patients/legal">\n\t\t\t\t\t\t\t\t\tLegal Representatives\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="patients/how-to-register">\n\t\t\t\t\t\t\t\t\tHow to Register\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="patients/treatment-costs">\n\t\t\t\t\t\t\t\t\tTreatment Costs\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="patients/forms">\n\t\t\t\t\t\t\t\t\tPatient Intake Forms\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="" data-id="4" data-url="">\n\t\t\t\t\t\t\tPRESCRIPTION\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="prescriptions/get-my-prescription">\n\t\t\t\t\t\t\t\t\tGetting My Prescription\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="prescriptions/filling-prescription">\n\t\t\t\t\t\t\t\t\tFilling My Prescription\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="" data-id="5" data-url="">\n\t\t\t\t\t\t\tADDITIONAL RESOURCES\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="research/info">\n\t\t\t\t\t\t\t\t\tResearch Information\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li class="sub-menu-item" data-url="research/policy-issues">\n\t\t\t\t\t\t\t\t\tPolicy Issues\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class="" data-id="6" data-url="contact-us">\n\t\t\t\t\t\t\tCONTACT US\n\t\t\t\t\t\t\t<ul class="sub-menu">\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="schedule-appointment schedule-appointment-mobile">\n\t\t\t\t\tFREE Consultation\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</header>\n\n\t<footer>\n\t\t<div class="footer-cities">\n\t\t\t<div class="footer-logo-container">\n\t\t\t\t<img src="/images/logo.png">\n\t\t\t</div>\n\t\t\t<div class="county-cities">\n\n\t\t\t\t<div class="col">\n\t\t\t\t\t<li> Pasco </li>\n\n\t\t\t\t\tMedical Marijuana in Aripeka | Medical Marijuana in Crystal Springs | Medical Marijuana in Dade City | Medical Marijuana\n\t\t\t\t\tin Holiday | Medical Marijuana in Hudson | Medical Marijuana in Lacoochee | Medical Marijuana in Land O Lakes | Medical\n\t\t\t\t\tMarijuana in New Port Richey | Medical Marijuana in Port Richey | Medical Marijuana in Saint Leo | Medical Marijuana\n\t\t\t\t\tin San Antonio | Medical Marijuana in Spring Hill | Medical Marijuana in Trilby | Medical Marijuana in Wesley Chapel\n\t\t\t\t\t| Medical Marijuana in Zephyrhills |\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col">\n\t\t\t\t\t<li> Hillsborough </li>\n\n\t\t\t\t\tMedical Marijuana in Apollo Beach | Medical Marijuana in Balm | Medical Marijuana in Brandon | Medical Marijuana in Dover\n\t\t\t\t\t| Medical Marijuana in Durant | Medical Marijuana in Gibsonton | Medical Marijuana in Lithia | Medical Marijuana in\n\t\t\t\t\tLutz | Medical Marijuana in Mango | Medical Marijuana in Odessa | Medical Marijuana in Plant City | Medical Marijuana\n\t\t\t\t\tin Riverview | Medical Marijuana in Ruskin | Medical Marijuana in Seffner | Medical Marijuana in Sun City | Medical\n\t\t\t\t\tMarijuana in Sun City Center | Medical Marijuana in Sydney | Medical Marijuana in Tampa | Medical Marijuana in Thonotosassa\n\t\t\t\t\t| Medical Marijuana in Valrico | Medical Marijuana in Wimauma |\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col">\n\t\t\t\t\t<li> Hernando </li>\n\n\t\t\t\t\tMedical Marijuana in Bayport | Medical Marijuana in Brookridge | Medical Marijuana in Brooksville* | Medical Marijuana in\n\t\t\t\t\tGarden Grove | Medical Marijuana in Hernando Beach | Medical Marijuana in High Point | Medical Marijuana in Hill and\n\t\t\t\t\tDale | Medical Marijuana in Istachatta | Medical Marijuana in Lake Lindsey | Medical Marijuana in Masaryktown | Medical\n\t\t\t\t\tMarijuana in Nobleton | Medical Marijuana in North Brooksville | Medical Marijuana in North Weeki Wachee CDP | Medical\n\t\t\t\t\tMarijuana in Pine Island | Medical Marijuana in Ridge Manor | Medical Marijuana in South Brooksville | Medical Marijuana\n\t\t\t\t\tin Spring Hill | Medical Marijuana in Spring Lake | Medical Marijuana in Timber Pines | Medical Marijuana in Weeki Wachee*\n\t\t\t\t\t| Medical Marijuana in Weeki Wachee Gardens | Medical Marijuana in Wiscon |\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col">\n\t\t\t\t\t<li> Pinellas </li>\n\n\t\t\t\t\tMedical Marijuana in Bay Pines | Medical Marijuana in Belleair Beach | Medical Marijuana in Clearwater | Medical Marijuana\n\t\t\t\t\tin Clearwater Beach | Medical Marijuana in Crystal Beach | Medical Marijuana in Dunedin | Medical Marijuana in Indian\n\t\t\t\t\tRocks Beach | Medical Marijuana in Largo | Medical Marijuana in Oldsmar | Medical Marijuana in Ozona | Medical Marijuana\n\t\t\t\t\tin Palm Harbor | Medical Marijuana in Pinellas Park | Medical Marijuana in Safety Harbor | Medical Marijuana in Saint\n\t\t\t\t\tPetersburg | Medical Marijuana in Seminole | Medical Marijuana in Tarpon Springs |\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col">\n\t\t\t\t\t<li> Brevard </li>\n\n\t\t\t\t\tMedical Marijuana in Cape Canaveral | Medical Marijuana in Cocoa | Medical Marijuana in Cocoa Beach | Medical Marijuana in\n\t\t\t\t\tGrant | Medical Marijuana in Indialantic | Medical Marijuana in Malabar | Medical Marijuana in Melbourne | Medical Marijuana\n\t\t\t\t\tin Melbourne Beach | Medical Marijuana in Merritt Island | Medical Marijuana in Mims | Medical Marijuana in Palm Bay\n\t\t\t\t\t| Medical Marijuana in Rockledge | Medical Marijuana in Satellite Beach | Medical Marijuana in Scottsmoor | Medical\n\t\t\t\t\tMarijuana in Sebastian | Medical Marijuana in Sharpes | Medical Marijuana in Titusville |\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="footer-wrapper">\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">About Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="footer-logo-container">\n\t\t\t\t\t\t<img src="/images/logo.png">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="company-text">\n\t\t\t\t\t\tNatural Clinic,MD is committed to provide proper care and guidance for medical cannabis in every step of process according\n\t\t\t\t\t\tto Florida Law\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Navigation</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t<ul>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=""></a>\n\t\t\t\t\t\t\tHome\n\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/team/doctors">\n\t\t\t\t\t\t\t\tTeam\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/medical-cannabis/terms-types">\n\t\t\t\t\t\t\t\tMedical Marijuana\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/patients/eligibility">\n\t\t\t\t\t\t\t\tPatients and Representatives\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/prescriptions/get-my-prescription"></a>\n\t\t\t\t\t\t\tPrescription\n\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/research/info">\n\t\t\t\t\t\t\t\tAdditional Resources\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="/contact-us">\n\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Address</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>New Port Richey:</b>\n\t\t\t\t\t\t\t<br> 4766 Rowan Rd\n\t\t\t\t\t\t\t<br> New Port Richey FL 34653\n\t\t\t\t\t\t\t<br> Phone :\n\t\t\t\t\t\t\t<a href="tel:727-753-8861">\n\t\t\t\t\t\t\t\t727-753-8861\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>Rockledge:</b>\n\t\t\t\t\t\t\t<br> 577 Barnes Blvd #400\n\t\t\t\t\t\t\t<br> Rockledge, FL 32955\n\t\t\t\t\t\t\t<br> Phone :\n\t\t\t\t\t\t\t<a href="tel:321-405-2090">\n\t\t\t\t\t\t\t\t321-405-2090\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tEmail :\n\t\t\t\t\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tFax :\n\t\t\t\t\t\t\t<a href="tel:888-849-6158">\n\t\t\t\t\t\t\t\t888-849-6158\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Connect Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<ul class="social-connection">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n\t\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a target="_blank" href="">\n\t\t\t\t\t\t\t\t<i class="fa fa-google-plus"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class="developer">\n\t\t\t© 2017 Natural Clinic, MD. All Rights Reserved.\n\t\t</div>\n\t\t/footer>\n\n\t\t<!-- Start content loading -->\n\t\t<script type="text/javascript" src=\'/js/vendor/requirejs/require.js\' data-main=\'/config.js\'></script>\n\t\t<script type="text/javascript" src=\'/js/main.js\'></script>\n\t\t<script type="text/javascript" src=\'/js/font-awesome.js\'></script>\n\t\t<!-- content loading end -->\n\n</body>\n\n</html>';

}
return __p
};

this["JST"]["templates/header.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="header-wrapper">\n    <div class="logo-container">\n        <img src="/images/logo.png"/>\n    </div>\n\n    <div class="header-overlay hide"></div>\n    \n    <div class="hamberger-container">\n        <button class="ham-berger"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>\n    </div>\n\n    <div class="header-contact">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> <a href="tel:(678) 481-7207">(678) 481-7207 </a></span>\n                </li>\n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n    </div>\n\n    <div class="menu-tab">\n        \n        <div class="group group-1">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> \n                        <a href="tel:(678) 481-7207">\n                            (678) 481-7207\n                        </a>    \n                    </span>\n                </li>                            \n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span>\n                        <a href="mailto:jalpa.dance.academy@gmail.com">\n                            jalpa.dance.academy@gmail.com\n                        </a> \n                    </span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                 <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n\n        <div class="group group-2">\n\n            <ul class="main-menu">\n                ';
 _.each(tabsData, function(tab, index) { ;
__p += '\n                    ';
 var className = selectedIndex === index ? "active" : "" ;
__p += '\n                        <li class="' +
((__t = (className)) == null ? '' : __t) +
'" data-id="' +
((__t = (index)) == null ? '' : __t) +
'"\n                            data-url="' +
((__t = ( tab.subMenu.length ? null : tab.url )) == null ? '' : __t) +
'">\n                            ' +
((__t = ( tab.text.toUpperCase() )) == null ? '' : __t) +
'\n                            <ul class="sub-menu">\n                                ';
 _.each(tab.subMenu, function(menu, index) { ;
__p += '\n                                    <li class="sub-menu-item" \n                                        data-url="' +
((__t = ( tab.url + "/" + menu.url)) == null ? '' : __t) +
'" >\n                                        ' +
((__t = ( menu.text )) == null ? '' : __t) +
'\n                                    </li>\n                                ';
 }); ;
__p += '\n                            </ul>\n                        </li>\n                        ';
 }); ;
__p += '\n            </ul>\n\n        </div>\n\n        <div class="schedule-appointment schedule-appointment-mobile">\n            FREE Consultation\n        </div>\n\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/footer.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div class="footer-wrapper">\n\n\t<div class="coloumn">\n\t\t<div class="col-header">About Us</div>\n\t\t<div class="content">\n\t\t\t<div class="footer-logo-container">\n\t\t\t\t<img src="/images/logo.png" />\n\t\t\t</div>\n\t\t\t<div class="company-text">\n\t\t\t\tJalpa Dance Academy was originally established in 2011 in Chicago southwest suburbs for all the dancers to find the best in them no matter what their age and experience is. \n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Navigation</div>\n\t\t<div class="content nav-links">\n\t\t\t<ul>\n\t\t\t\t';
 _.each(tabsData, function(tab, index) { ;
__p += ' \n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=' +
((__t = ( tab.firstUrl )) == null ? '' : __t) +
'>\n\t\t\t\t\t\t\t' +
((__t = ( tab.text )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t';
 }); ;
__p += '\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Address</div>\n\t\t<div class="content nav-links">\n\t\t\t<ul>\t\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\t<b>Suwanee:</b>\n\t\t\t\t\t<br/>\n\t\t\t\t\t6365 Read Road\n\t\t\t\t\t<br/>\n\t\t\t\t\tSuwanee, GA 30024\n\t\t\t\t\t<br/>\n\t\t\t\t\tPhone :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li> \n\t\t\t\t<li>\n\t\t\t\t\t<b>Buford:</b>\n\t\t\t\t\t<br/>\n\t\t\t\t\t4296 Old Suwanee Road\n\t\t\t\t\t<br/>\n\t\t\t\t\tSuite 4 Buford, GA 30518\n\t\t\t\t\t<br/>\n\t\t\t\t\tPhone :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li> \n\t\t\t\t<li>\n\t\t\t\t\tEmail :\n\t\t\t\t\t<a href="mailto:Jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t</a>\n\t\t\t\t</li>\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\tFax :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Connect Us</div>\n\t\t<div class="content">\n\t\t\t<ul class="social-connection">\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="">\n\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n</div>\n\n\n<div class="developer">\n\t\t© 2018 Jalpa Dance Academy. All Rights Reserved.\n</div>';

}
return __p
};

this["JST"]["templates/error.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-page">\n    <h1> Ohhh, You lost your way </h1>\n    <div class="home-button">\n        <a href="/">\n            Let\'s Get Back To Home\n        </a>\n    </div>\n</div>';

}
return __p
};