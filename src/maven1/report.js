$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/maven1/Sanity.feature");
formatter.feature({
  "name": "Serve coffee",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"\u003cnumber\u003e\" coffee left in the machine",
  "keyword": "Given "
});
formatter.step({
  "name": "I have deposited \"\u003cmoney\u003e\" dollar",
  "keyword": "And "
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number",
        "money"
      ]
    },
    {
      "cells": [
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "0",
        "1"
      ]
    },
    {
      "cells": [
        "1",
        "0"
      ]
    },
    {
      "cells": [
        "2",
        "1"
      ]
    },
    {
      "cells": [
        "9",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"1\" coffee left in the machine",
  "keyword": "Given "
});
formatter.match({
  "location": "Attitude1.Machine1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have deposited \"1\" dollar",
  "keyword": "And "
});
formatter.match({
  "location": "Attitude1.Machine2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.match({
  "location": "Attitude1.Machine3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.match({
  "location": "Attitude1.Machine4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"0\" coffee left in the machine",
  "keyword": "Given "
});
formatter.match({
  "location": "Attitude1.Machine1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have deposited \"1\" dollar",
  "keyword": "And "
});
formatter.match({
  "location": "Attitude1.Machine2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.match({
  "location": "Attitude1.Machine3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.match({
  "location": "Attitude1.Machine4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"1\" coffee left in the machine",
  "keyword": "Given "
});
formatter.match({
  "location": "Attitude1.Machine1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have deposited \"0\" dollar",
  "keyword": "And "
});
formatter.match({
  "location": "Attitude1.Machine2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.match({
  "location": "Attitude1.Machine3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.match({
  "location": "Attitude1.Machine4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"2\" coffee left in the machine",
  "keyword": "Given "
});
formatter.match({
  "location": "Attitude1.Machine1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have deposited \"1\" dollar",
  "keyword": "And "
});
formatter.match({
  "location": "Attitude1.Machine2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.match({
  "location": "Attitude1.Machine3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.match({
  "location": "Attitude1.Machine4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy a coffee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "name": "there are \"9\" coffee left in the machine",
  "keyword": "Given "
});
formatter.match({
  "location": "Attitude1.Machine1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have deposited \"10\" dollar",
  "keyword": "And "
});
formatter.match({
  "location": "Attitude1.Machine2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the coffee button",
  "keyword": "When "
});
formatter.match({
  "location": "Attitude1.Machine3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be served a coffee",
  "keyword": "Then "
});
formatter.match({
  "location": "Attitude1.Machine4()"
});
formatter.result({
  "status": "passed"
});
});