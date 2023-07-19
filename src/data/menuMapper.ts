import TMenuModel from "../models/TMenuModel";
import appRoutes from "../routes/AppRoutes";

export const menuMapper :TMenuModel[]= [
    {
      "id": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
      "orderPriority": 99,
      "controllerName": "Configurations",
      "controllerCode": "MDC9020230719060750",
      "urlPath": "/Configurations",
      "displayName": "Configurations",
      "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
      "controllerDescription": "",
      "menuActions": [
        {
          "id": "1b1f2b4c-d4e1-4765-9df2-4b26b1181f89",
          "orderPriority": 7,
          "companyId": 1,
          "actionName": "Country",
          "urlPath": "/Configurations/Country",
          "displayName": "Country",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "3c481fdd-73cc-4482-a3d8-4e005f212955",
          "orderPriority": 3,
          "companyId": 1,
          "actionName": "Patients config",
          "urlPath": "/Configurations/Patients config",
          "displayName": "Patients config",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "76837b21-d5b6-43f0-a23c-d0c18fdb234f",
          "orderPriority": 10,
          "companyId": 1,
          "actionName": "Banks",
          "urlPath": "/Configurations/Banks",
          "displayName": "Banks",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "a4535f4d-60b4-41f2-89e9-519fb1fff131",
          "orderPriority": 6,
          "companyId": 1,
          "actionName": "Marital status",
          "urlPath": "/Configurations/Marital status",
          "displayName": "Marital status",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "aaaeac06-1f7c-43fa-ba84-996d0cb692b9",
          "orderPriority": 2,
          "companyId": 1,
          "actionName": "User groups",
          "urlPath": "/Configurations/User groups",
          "displayName": "User groups",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.usergroup.usergroups
        },
        {
          "id": "ac32f24d-94e7-45cc-9d88-6a79b5c32cfc",
          "orderPriority": 4,
          "companyId": 1,
          "actionName": "Company and branches",
          "urlPath": "/Configurations/Company and branches",
          "displayName": "Company and branches",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "be04eaf1-b2aa-489c-84f1-c42e46715c2f",
          "orderPriority": 5,
          "companyId": 1,
          "actionName": "Allowed Identifications",
          "urlPath": "/Configurations/Allowed Identifications",
          "displayName": "Allowed Identifications",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "be963448-3104-4463-a3a6-fa56c090f9c0",
          "orderPriority": 1,
          "companyId": 1,
          "actionName": "Salutations",
          "urlPath": "/Configurations/Salutations",
          "displayName": "Salutations",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "d5e12b02-65e7-47cb-a9e1-b8161a65c453",
          "orderPriority": 8,
          "companyId": 1,
          "actionName": "State/Province",
          "urlPath": "/Configurations/State/Province",
          "displayName": "State/Province",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        },
        {
          "id": "eb51b5b6-a87b-4a25-87e0-12f7733561a0",
          "orderPriority": 9,
          "companyId": 1,
          "actionName": "Relationships",
          "urlPath": "/Configurations/Relationships",
          "displayName": "Relationships",
          "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
          "actionDescription": null,
          "allowAnonymous": false,
          "menuControllerId": "a868f82f-31c3-49c9-b23a-c0501b4a7d1e",
          "menuModules": null
          ,"uipath": appRoutes().dashboard.country.country
        }
      ]
    },
    {
      "id": "696c38d2-b68a-4541-9ff5-fcaa030469e8",
      "orderPriority": 98,
      "controllerName": "Patients",
      "controllerCode": "MDC9120230719060750",
      "urlPath": "/Patients",
      "displayName": "Patients",
      "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
      "controllerDescription": "",
      "menuActions": []
    },
    {
      "id": "42843066-6db6-4a82-bee6-2e982394c035",
      "orderPriority": 97,
      "controllerName": "Pharmacy",
      "controllerCode": "MDC9320230719060750",
      "urlPath": "/Pharmacy",
      "displayName": "Pharmacy",
      "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
      "controllerDescription": "",
      "menuActions": []
    },
    {
      "id": "fd85d82c-a080-4429-ab22-cc39a712d2b0",
      "orderPriority": 97,
      "controllerName": "Staffs",
      "controllerCode": "MDC9220230719060750",
      "urlPath": "/Staffs",
      "displayName": "Staffs",
      "iconClass": "<span class='glyphicon glyphicon-barcode'></span>",
      "controllerDescription": "",
      "menuActions": []
    }
  ];