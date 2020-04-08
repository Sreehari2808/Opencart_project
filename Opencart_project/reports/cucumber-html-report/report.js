$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testcases.feature");
formatter.feature({
  "line": 2,
  "name": "Opencart website",
  "description": "This is to validate the opencart website",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@opencart"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "to validate the register functionality",
  "description": "",
  "id": "opencart-website;to-validate-the-register-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "launch the Browser  and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "url is enterd",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on myaccount and register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter \u003cuserfname\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \u003cuserlname\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter \u003cuseremail\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter \u003ctelenumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter \u003cpass\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter \u003cconfirm\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "complete the registration",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition_Register.launch_the_Browser_and_enter_the_url()"
});
formatter.result({
  "duration": 16927448900,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.url_is_enterd()"
});
formatter.result({
  "duration": 1180183700,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.click_on_myaccount_and_register()"
});
formatter.result({
  "duration": 12977818600,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_userfname()"
});
formatter.result({
  "duration": 791633400,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_userlname()"
});
formatter.result({
  "duration": 437047200,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_useremail()"
});
formatter.result({
  "duration": 794735700,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_telenumber()"
});
formatter.result({
  "duration": 455031800,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_pass()"
});
formatter.result({
  "duration": 711528000,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.enter_confirm()"
});
formatter.result({
  "duration": 474652500,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Register.complete_the_registration()"
});
