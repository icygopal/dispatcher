const rows = [
  {
    "_id": "6274e7ea4d11fe280acd82d7",
    "updatedAt": "2022-05-06T12:39:04.515Z",
    "createdAt": "2022-05-06T09:18:34.578Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101085",
    "distance": 0,
    "pricing": [
      {
        "customerRateId": "6274d989959a2d2a1e35f35f",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "type": "percentage",
        "perType": "fixed",
        "name": "Base Price",
        "freeMinutes": 0,
        "freeDays": 0,
        "unit": "1.00",
        "finalAmount": "1000.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "500.00",
        "dynamicPricingId": null
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 800,
    "totalAmount": 1000,
    "paidAmount": 200,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-06T12:01:31.994Z",
        "url": "https://s3-us-west-2.amazonaws.com/axle-logistics/scanner/1651838575872_3613322.pdf",
        "type": "Bill of Lading",
        "_id": "62750e1b6a4e2728036a05bb",
        "checked": true
      },
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-06T12:10:39.581Z",
        "url": "https://s3-us-west-2.amazonaws.com/axle-logistics/scanner/1651838941065_1651839028885.pdf",
        "type": "Delivery Order",
        "_id": "6275103f4d11fe280acd8353",
        "checked": true
      }
    ],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e7ea4d11fe280acd82e1",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e7ea4d11fe280acd82e0",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e7ea4d11fe280acd82df",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e7ea4d11fe280acd82de",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e7ea4d11fe280acd82dd",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-06T09:18:48.579Z",
        "_id": "6274e7f86a4e2728036a0589",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-06T03:00:00.000Z",
        "amount": 200
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "6274e7ea4d11fe280acd82d8",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "pickupTimes": [
      {
        "_id": "6274e7ea4d11fe280acd82d9",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": true,
    "__v": 0,
    "totalMiles": 0,
    "chassisSize": {
      "_id": "62458dbea57c7e115be40957",
      "name": "70-90"
    },
    "chassisSizeName": "70-90",
    "secondaryReferenceNo": "aaaaaa"
  },
  {
    "_id": "6274e3e86a4e2728036a057b",
    "updatedAt": "2022-05-06T09:01:41.233Z",
    "createdAt": "2022-05-06T09:01:28.061Z",
    "type_of_load": "ROAD",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101084",
    "distance": 0,
    "pricing": [
      {
        "customerRateId": "6274d989959a2d2a1e35f35f",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "type": "percentage",
        "perType": "fixed",
        "name": "Base Price",
        "freeMinutes": 0,
        "freeDays": 0,
        "unit": "1.00",
        "finalAmount": "1000.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "500.00"
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -300,
    "totalAmount": 0,
    "paidAmount": 300,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e3e86a4e2728036a0585",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e3e86a4e2728036a0584",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e3e86a4e2728036a0583",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e3e86a4e2728036a0582",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274e3e86a4e2728036a0581",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-06T09:01:41.232Z",
        "_id": "6274e3f56a4e2728036a0587",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-06T03:00:00.000Z",
        "amount": 300
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274e3e86a4e2728036a057c"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274e3e86a4e2728036a057d"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0
  },
  {
    "_id": "6274e2a14d11fe280acd82c8",
    "updatedAt": "2022-05-07T09:25:44.186Z",
    "createdAt": "2022-05-06T08:56:01.615Z",
    "type_of_load": "IMPORT",
    "status": "AVAILABLE",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101083",
    "distance": 0,
    "pricing": [
      {
        "customerRateId": "6274d989959a2d2a1e35f35f",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "type": "percentage",
        "perType": "fixed",
        "name": "Base Price",
        "freeMinutes": 0,
        "freeDays": 0,
        "unit": "1.00",
        "finalAmount": "1000.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "500.00"
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -200,
    "totalAmount": 0,
    "paidAmount": 200,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-07T09:24:37.823Z",
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6274e2a14d11fe280acd82d2"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-07T09:24:37.823Z",
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6274e2a14d11fe280acd82d1"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-07T09:24:37.823Z",
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6274e2a14d11fe280acd82d0"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6274e2a14d11fe280acd82cf"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "type": "RETURNCONTAINER",
        "_id": "6274e2a14d11fe280acd82ce"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-06T08:56:18.124Z",
        "_id": "6274e2b26a4e2728036a0575",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-06T03:00:00.000Z",
        "amount": 200
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274e2a14d11fe280acd82c9"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274e2a14d11fe280acd82ca"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "lastUpdatedStatusAt": "2022-05-07T09:25:44.192Z",
    "availableDate": "2022-05-07T09:25:44.184Z"
  },
  {
    "_id": "6274dbc05773062a178bc521",
    "updatedAt": "2022-05-06T08:28:17.310Z",
    "createdAt": "2022-05-06T08:26:40.151Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101082",
    "distance": 0,
    "pricing": [
      {
        "amount": "200",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "200.00",
        "unit": "1.00",
        "freeDays": 0,
        "perType": "",
        "name": "Base Price",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 200,
    "totalAmount": 200,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274dbc05773062a178bc52b",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274dbc05773062a178bc52a",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274dbc05773062a178bc529",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274dbc05773062a178bc528",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274dbc05773062a178bc527",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274dbc05773062a178bc522"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274dbc05773062a178bc523"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0
  },
  {
    "_id": "6274d9cc5773062a178bc515",
    "updatedAt": "2022-05-06T08:20:12.371Z",
    "createdAt": "2022-05-06T08:18:20.921Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101081",
    "distance": 0,
    "pricing": [
      {
        "amount": "500",
        "chargePerDay": "200",
        "chargePerMinute": 0,
        "finalAmount": "200.00",
        "unit": "1.00",
        "freeDays": 0,
        "perType": "perday",
        "name": "Fuel",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 200,
    "totalAmount": 200,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274d9cc5773062a178bc51f",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274d9cc5773062a178bc51e",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274d9cc5773062a178bc51d",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274d9cc5773062a178bc51c",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6274d9cc5773062a178bc51b",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274d9cc5773062a178bc516"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6274d9cc5773062a178bc517"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0
  },
  {
    "_id": "6273658799f10b14f81cd3d6",
    "updatedAt": "2022-05-06T12:54:48.146Z",
    "createdAt": "2022-05-05T05:49:59.010Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "621857281ce5701a3f5cf33c",
      "companyID": "dp_customer2299",
      "city": "Hettinger",
      "state": "ND",
      "country": "US",
      "zip_code": "58639",
      "mobile": "",
      "email": "dp_customer@yopmail.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 0,
      "currency": "",
      "officeHoursStart": null,
      "officeHoursEnd": null,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "doc_all": true,
      "isEmailNeedToSend": true,
      "main_contact_name": "",
      "address": {
        "zip_code": "58639",
        "country": "US",
        "state": "ND",
        "city": "Hettinger",
        "address1": "990 ND-8",
        "lng": 12,
        "lat": 12,
        "address": "990 ND-8, Hettinger, ND 58639, USA"
      },
      "company_name": "dp_customer",
      "receiverEmail": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101079",
    "distance": 0,
    "pricing": [
      {
        "amount": 0,
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "23434.00",
        "unit": "1.00",
        "freeDays": 0,
        "perType": "",
        "name": "Base Price",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "callerName": "DP_CUSTOMER",
    "callerInfo": {
      "zipcode": "58639",
      "country": "US",
      "state": "ND",
      "city": "Hettinger",
      "address": {
        "lng": 12,
        "lat": 12,
        "address": "990 ND-8, Hettinger, ND 58639, USA"
      },
      "company_name": "DP_CUSTOMER"
    },
    "shipperName": "DP_PORT/SHIPPER",
    "shipperAddress": "473 RIDGE STREET APT RD, ROSE HILL, NC 28458, USA",
    "shipperInfo": {
      "zipcode": "28458",
      "country": "US",
      "state": "NC",
      "city": "Rose Hill",
      "address": {
        "lng": 12,
        "lat": 12,
        "address": "473 Ridge Street Apt Rd, Rose Hill, NC 28458, USA"
      },
      "company_name": "DP_PORT/SHIPPER"
    },
    "consigneeName": "DP_CONSIGNEE",
    "consigneeAddress": "7300, 216 MOUNTAIN DR # 104, DESTIN, FL 32541, USA",
    "consigneeInfo": {
      "zipcode": "32541",
      "country": "US",
      "state": "FL",
      "city": "Destin",
      "address": {
        "lng": 12,
        "lat": 12,
        "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA"
      },
      "company_name": "DP_CONSIGNEE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "624c2e0974b4310dd9b1feb7",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "qw",
        "name": "long tste Carrier Access Management"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "6218578c227f261a7233a3a2",
        "companyID": "dp_consignee1463",
        "city": "Destin",
        "state": "FL",
        "country": "US",
        "zip_code": "32541",
        "mobile": "",
        "email": "z9o1imhlao1ofg4@portpro.io",
        "officeHoursStart": null,
        "officeHoursEnd": null,
        "main_contact_name": "",
        "address": {
          "lng": 12,
          "lat": 12,
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "address1": "7300",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541"
        },
        "company_name": "dp_consignee"
      }
    ],
    "shipper": [
      {
        "_id": "621857514b6a401a55b962e2",
        "companyID": "dp_portShipper3049",
        "city": "Rose Hill",
        "state": "NC",
        "country": "US",
        "zip_code": "28458",
        "mobile": "",
        "email": "8n8zf93bxh6hk41@portpro.io",
        "officeHoursStart": null,
        "officeHoursEnd": null,
        "isTIROptional": false,
        "main_contact_name": "main",
        "address": {
          "lng": 12,
          "lat": 12,
          "address": "473 Ridge Street Apt Rd, Rose Hill, NC 28458, USA",
          "address1": "473 Ridge Street Apt Rd",
          "city": "Rose Hill",
          "state": "NC",
          "country": "US",
          "zip_code": "28458"
        },
        "company_name": "dp_port/shipper"
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -2.343259887906794e+22,
    "totalAmount": 23434,
    "paidAmount": 2.343259887906794e+22,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "473 Ridge Street Apt Rd, Rose Hill, NC 28458, USA",
          "lat": 12,
          "lng": 12
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273658799f10b14f81cd3de",
        "company_name": "DP_PORT/SHIPPER",
        "zip_code": "28458",
        "country": "US",
        "state": "NC",
        "city": "Rose Hill",
        "customerId": {
          "_id": "621857514b6a401a55b962e2",
          "city": "Rose Hill",
          "state": "NC",
          "country": "US",
          "zip_code": "28458",
          "isTIROptional": false,
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": 12,
            "lat": 12,
            "address": "473 Ridge Street Apt Rd, Rose Hill, NC 28458, USA",
            "address1": "473 Ridge Street Apt Rd",
            "city": "Rose Hill",
            "state": "NC",
            "country": "US",
            "zip_code": "28458"
          },
          "company_name": "dp_port/shipper"
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "lat": 12,
          "lng": 12
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273658799f10b14f81cd3dd",
        "company_name": "DP_CONSIGNEE",
        "zip_code": "32541",
        "country": "US",
        "state": "FL",
        "city": "Destin",
        "customerId": {
          "_id": "6218578c227f261a7233a3a2",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541",
          "isTIROptional": false,
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": 12,
            "lat": 12,
            "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
            "address1": "7300",
            "city": "Destin",
            "state": "FL",
            "country": "US",
            "zip_code": "32541"
          },
          "company_name": "dp_consignee"
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273658799f10b14f81cd3dc",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-05T16:08:34.876Z",
        "_id": "6273f682959a2d2a1e35f2cb",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-17T03:00:00.000Z",
        "amount": 2.343259887906794e+22
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "6273658799f10b14f81cd3d7",
        "customerId": "6218578c227f261a7233a3a2"
      }
    ],
    "pickupTimes": [
      {
        "_id": "6273658799f10b14f81cd3d8",
        "customerId": "621857514b6a401a55b962e2"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "lastFreeDay": "2022-05-05T03:00:00.000Z",
    "chassisNo": "sdfgsdg"
  },
  {
    "_id": "627259a5f0193522074c44ba",
    "updatedAt": "2022-05-05T08:29:57.830Z",
    "createdAt": "2022-05-04T10:47:01.177Z",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "status": "AVAILABLE",
    "type_of_load": "EXPORT",
    "caller": {
      "_id": "5c8a3bb497661049c6db2ac3",
      "companyID": "NEWJERSEYTRUCKER4179",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000000",
      "email": "apex@gggg.com",
      "billingEmail": "apex@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "NEW JERSEY TRUCKER",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "address1": "301-302",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "NEW JERSEY TRUCKER",
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "temperature": "",
    "containerNo": "",
    "reference_number": "SCAL_E101078",
    "distance": 0,
    "pricing": [],
    "callerName": "NEW JERSEY TRUCKER",
    "callerInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "shipperName": "NEW JERSEY TRUCKER",
    "shipperAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "consigneeName": "YARD",
    "consigneeAddress": "400 DOREMUS AVE, NEWARK, NJ 07105, USA",
    "consigneeInfo": {
      "zipcode": "07105",
      "country": "US",
      "state": "NJ",
      "city": "Newark",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA"
      },
      "company_name": "YARD"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62380fc869f61e28cce37279",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "qwert",
        "name": "wert"
      },
      {
        "_id": "6236aa4c9d0592498ed0f132",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "knae",
        "name": "qa test"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6fe85ef5fa09fe55eafe",
        "companyID": "YARD587",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105",
        "mobile": "",
        "email": "dfhe9w5khouw2ec@portpro.io",
        "main_contact_name": "test",
        "address": {
          "lng": -74.12469879999999,
          "lat": 40.7194025,
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "address1": "400 Doremus Ave",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105"
        },
        "company_name": "YARD",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "627259a5f0193522074c44c2",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "627259a5f0193522074c44c1",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "627259a5f0193522074c44c0",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [
      {
        "createdAt": "2022-05-05T08:29:51.473Z",
        "_id": "62738aff5d68c314f1c8c1d9",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "newStatus": "AVAILABLE",
        "oldStatus": "PENDING"
      },
      {
        "createdAt": "2022-05-05T08:29:57.826Z",
        "_id": "62738b0595613a3e2784bbbc",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "newStatus": "AVAILABLE",
        "oldStatus": "AVAILABLE"
      }
    ],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "627259a5f0193522074c44bb",
        "customerId": "5e4c6fe85ef5fa09fe55eafe"
      }
    ],
    "pickupTimes": [
      {
        "_id": "627259a5f0193522074c44bc",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "availableDate": "2022-05-05T08:29:57.826Z",
    "lastUpdatedStatusAt": "2022-05-05T08:29:51.477Z"
  },
  {
    "_id": "6272587f871462220ecaef00",
    "updatedAt": "2022-05-05T08:26:44.065Z",
    "createdAt": "2022-05-04T10:42:07.651Z",
    "type_of_load": "IMPORT",
    "status": "AVAILABLE",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5c8a3bb497661049c6db2ac3",
      "companyID": "NEWJERSEYTRUCKER4179",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000000",
      "email": "apex@gggg.com",
      "billingEmail": "apex@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "NEW JERSEY TRUCKER",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "address1": "301-302",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "NEW JERSEY TRUCKER",
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101077",
    "distance": 0,
    "pricing": [],
    "callerName": "NEW JERSEY TRUCKER",
    "callerInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "shipperName": "NEW JERSEY TRUCKER",
    "shipperAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "consigneeName": "PROD TEST",
    "consigneeAddress": "5080 MCLESTER ST, ELIZABETH, NJ 07201, USA",
    "consigneeInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "PROD TEST"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62380fc869f61e28cce37279",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "qwert",
        "name": "wert"
      },
      {
        "_id": "6236aa4c9d0592498ed0f132",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "knae",
        "name": "qa test"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5f56dcbc78dd990b12846dd1",
        "companyID": "ProdTest6159",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "ubp9tzmnvwb8a3c@portpro.io",
        "main_contact_name": "ANB",
        "address": {
          "lng": -74.15911919999999,
          "lat": 40.669178,
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "address1": "5080 McLester St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "Prod Test",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": true,
    "brokerHold": true,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6272587f871462220ecaef08",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6272587f871462220ecaef07",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6272587f871462220ecaef06",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [
      {
        "createdAt": "2022-05-04T13:12:16.644Z",
        "_id": "62727bb0fbd58f40293ee3a0",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "newStatus": "AVAILABLE",
        "oldStatus": "PENDING"
      }
    ],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5f56dcbc78dd990b12846dd1",
        "_id": "6272587f871462220ecaef01"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "6272587f871462220ecaef02"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "availableDate": "2022-05-04T13:12:16.645Z",
    "lastUpdatedStatusAt": "2022-05-04T13:12:16.651Z",
    "custom": "HOLD",
    "freight": "HOLD"
  },
  {
    "_id": "62723dcf496eef22317c2ebe",
    "updatedAt": "2022-05-06T04:57:19.223Z",
    "createdAt": "2022-05-04T08:48:15.477Z",
    "reference_number": "SCAL_M101076",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "AVAILABLE",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0,
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "chassisTypeName": "TRI-AXLE",
    "chassisSizeName": "40'",
    "chassisOwnerName": "TEST QA",
    "driverName": "A_DILIPPATEL QA",
    "qbExportDates": [],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "62723dcf496eef22317c2ec3"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "62723dcf496eef22317c2ec2"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "RETURNCONTAINER",
        "_id": "62723dcf496eef22317c2ec1"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [
      {
        "createdAt": "2022-05-04T13:12:08.498Z",
        "_id": "62727ba8624070402262dbc7",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "newStatus": "AVAILABLE",
        "oldStatus": "PENDING"
      }
    ],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "deliveryToTime": "2022-05-05T03:00:00.000Z",
        "deliveryFromTime": "2022-05-05T03:00:00.000Z",
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "6270b55d15cb1333c402a4e6"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "6270b55d15cb1333c402a4e7"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "availableDate": "2022-05-04T13:12:08.499Z",
    "lastUpdatedStatusAt": "2022-05-04T13:12:08.507Z",
    "emptyOrigin": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "isTIROptional": true
    },
    "emptyOriginInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "emptyOriginName": "SMITHSON WAREHOUSE",
    "expense": [
      {
        "name": "Base Price",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "washout_container",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      },
      {
        "name": "layover",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      }
    ],
    "officeNote": "rttrhrh"
  },
  {
    "_id": "6270b55d15cb1333c402a4e5",
    "updatedAt": "2022-05-06T12:54:03.721Z",
    "createdAt": "2022-05-03T04:53:49.650Z",
    "type_of_load": "IMPORT",
    "status": "RETURNCONTAINER_DEPARTED",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101072",
    "distance": 0,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "amount": "0.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "0.00",
        "unit": 0,
        "freeDays": 0,
        "perType": "",
        "name": "Fuel"
      },
      {
        "name": "tri_axle",
        "perType": "",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "0.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "0.00"
      },
      {
        "name": "domestic_move",
        "perType": "",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "0.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "0.00"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "description": null,
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "description": null,
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": true,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6270b55d15cb1333c402a4ed",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-05-03T04:53:58.109Z",
        "arrived": "2022-05-03T04:54:04.625Z",
        "departed": "2022-05-03T04:54:04.625Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6270b55d15cb1333c402a4ec",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-05-03T04:53:58.109Z",
        "arrived": "2022-05-03T04:54:04.625Z",
        "departed": "2022-05-03T04:54:04.625Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "_id": "6270b55d15cb1333c402a4eb",
        "type": "RETURNCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-05-03T04:53:58.109Z",
        "arrived": "2022-05-03T04:54:04.625Z",
        "departed": "2022-05-03T04:54:04.625Z"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [
      {
        "status": "BILLING",
        "paidAmount": 0,
        "totalAmount": 0,
        "remainAmount": 0,
        "additionalIds": [],
        "loadIds": [],
        "qbExportDates": [],
        "sub_reference_number": "M101072_1",
        "_id": "6270d4142bbddf658fdc5b95",
        "billingDate": "2022-05-06T12:54:03.726Z",
        "pricing": [
          {
            "name": "Base Price",
            "description": "",
            "amount": 0,
            "finalAmount": "0.00",
            "freeDays": 0,
            "chargePerDay": 0,
            "freeMinutes": 0,
            "chargePerMinute": 0,
            "manualFinalAmount": 0,
            "perType": "perday"
          }
        ],
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "companyID": "qaCIRCLE9571",
          "mobile": "2000000002",
          "email": "vip@gggg.com",
          "billingEmail": "vip@gggg.com",
          "payment_terms": 0,
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "extraEmail": "",
          "isEmailNeedToSend": true
        }
      }
    ],
    "deliveryTimes": [
      {
        "deliveryToTime": "2022-05-05T03:00:00.000Z",
        "deliveryFromTime": "2022-05-05T03:00:00.000Z",
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "6270b55d15cb1333c402a4e6"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "6270b55d15cb1333c402a4e7"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "emptyOrigin": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "isTIROptional": true
    },
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-05-03T04:54:28.762Z",
    "activeIndex": 2,
    "allStatusDates": {
      "pullContainerArrived": "2022-05-03T04:54:04.625Z",
      "pullContainerDeparted": "2022-05-03T04:54:04.625Z",
      "deliverContainerArrived": "2022-05-03T04:54:04.625Z",
      "deliverContainerDeparted": "2022-05-03T04:54:04.625Z",
      "returnContainerArrived": "2022-05-03T04:54:04.625Z",
      "returnContainerDeparted": "2022-05-03T04:54:04.625Z"
    },
    "driverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "isBobtail": false,
      "isGrayPool": false,
      "_id": "6270b55d15cb1333c402a4eb",
      "type": "RETURNCONTAINER",
      "driver": "6169528898f51815805c06f3",
      "loadAssignedDate": "2022-05-03T04:53:58.109Z",
      "arrived": "2022-05-03T04:54:04.625Z",
      "departed": "2022-05-03T04:54:04.625Z"
    },
    "emptyDay": "2022-05-03T04:54:04.625Z",
    "freeReturnDate": "2022-05-03T03:00:00.000Z",
    "chassisId": "624d247120afc3f70177eefc",
    "chassisIdName": "QA0I456745",
    "chassisNo": "QA0i456745",
    "chassisOwner": {
      "_id": "61a9f196325ccb39b1ef442e",
      "company_name": "Test QA"
    },
    "chassisOwnerName": "TEST QA",
    "chassisSize": {
      "_id": "5bbc32fbe24ec65cd0a9d90f",
      "name": "40'"
    },
    "chassisSizeName": "40'",
    "chassisType": {
      "_id": "5bbc32dfe24ec65cd0a9d90d",
      "name": "Tri-Axle"
    },
    "chassisTypeName": "TRI-AXLE",
    "emptyOriginInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "emptyOriginName": "SMITHSON WAREHOUSE",
    "officeNote": "rttrhrh"
  },
  {
    "_id": "626fca6815cb1333c402a463",
    "updatedAt": "2022-05-03T05:39:33.429Z",
    "createdAt": "2022-05-02T12:11:20.336Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "619b828589283603ab8cda14",
      "companyID": "TestCompany6624",
      "city": "Milwaukee",
      "state": "WI",
      "country": "US",
      "zip_code": "53208",
      "mobile": "",
      "email": "qa07@yopmail.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 0,
      "receiverEmail": "qa07@yopmail.com",
      "currency": "",
      "officeHoursStart": null,
      "officeHoursEnd": null,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "doc_all": true,
      "isEmailNeedToSend": true,
      "main_contact_name": "Mike",
      "address": {
        "lng": -87.9808573,
        "lat": 43.0367645,
        "address": "5328 W Bluemound Rd, Milwaukee, WI 53208, USA",
        "address1": "5328 W Bluemound Rd",
        "city": "Milwaukee",
        "state": "WI",
        "country": "US",
        "zip_code": "53208"
      },
      "company_name": "Test Company"
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101069",
    "distance": 8741.94,
    "pricing": [
      {
        "type": "fixed",
        "perType": "fixed",
        "name": "Base Price",
        "freeMinutes": 0,
        "freeDays": 0,
        "unit": "1.00",
        "finalAmount": "1500.00",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": "0.00",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "callerName": "TEST COMPANY",
    "callerInfo": {
      "zipcode": "53208",
      "country": "US",
      "state": "WI",
      "city": "Milwaukee",
      "address": {
        "lng": -87.9808573,
        "lat": 43.0367645,
        "address": "5328 W Bluemound Rd, Milwaukee, WI 53208, USA"
      },
      "company_name": "TEST COMPANY"
    },
    "shipperName": "SHREE RAM ENTERPRICE",
    "shipperAddress": "SHREE RAM ENTERPRICE, MOTA VARACHHA, SURAT, GUJARAT 394101",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101"
      },
      "company_name": "SHREE RAM ENTERPRICE"
    },
    "consigneeName": "DP_CONSIGNEE",
    "consigneeAddress": "7300, 216 MOUNTAIN DR # 104, DESTIN, FL 32541, USA",
    "consigneeInfo": {
      "zipcode": "32541",
      "country": "US",
      "state": "FL",
      "city": "Destin",
      "address": {
        "lng": 12,
        "lat": 12,
        "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA"
      },
      "company_name": "DP_CONSIGNEE"
    },
    "weight": 0,
    "expense": [
      {
        "amount": "120",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": 0,
        "unit": "7.00",
        "freeDays": 0,
        "perType": "fixed",
        "name": "Fuel"
      },
      {
        "description": "ASDFBJDF",
        "name": "Chassis",
        "perType": "perhour",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "1520",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "amount": 0
      },
      {
        "name": "washout_container",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      },
      {
        "name": "layover",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "6218578c227f261a7233a3a2",
        "companyID": "dp_consignee1463",
        "city": "Destin",
        "state": "FL",
        "country": "US",
        "zip_code": "32541",
        "mobile": "",
        "email": "z9o1imhlao1ofg4@portpro.io",
        "officeHoursStart": null,
        "officeHoursEnd": null,
        "main_contact_name": "",
        "address": {
          "lng": 12,
          "lat": 12,
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "address1": "7300",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541"
        },
        "company_name": "dp_consignee"
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d6297661049c6db32e6",
        "companyID": "ShreeRamEnterprice1348",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000003",
        "email": "shreeram@gggg.com",
        "main_contact_name": "Shree ram enterprice",
        "address": {
          "lng": 72.8872173,
          "lat": 21.2450975,
          "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
          "address1": "Shree ram enterprice",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "Shree ram enterprice",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 1500,
    "totalAmount": 1500,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
          "lat": 21.2450975,
          "lng": 72.8872173
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-02T12:14:27.770Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5c8a3d6297661049c6db32e6",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8872173,
            "lat": 21.2450975,
            "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
            "address1": "Shree ram enterprice",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "Shree ram enterprice",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "SHREE RAM ENTERPRICE",
        "_id": "626fca7015cb1333c402a46d"
      },
      {
        "isVoidOut": false,
        "distance": 8741.94,
        "address": {
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "lat": 12,
          "lng": 12
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-02T12:14:27.770Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "6218578c227f261a7233a3a2",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541",
          "isTIROptional": false,
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": 12,
            "lat": 12,
            "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
            "address1": "7300",
            "city": "Destin",
            "state": "FL",
            "country": "US",
            "zip_code": "32541"
          },
          "company_name": "dp_consignee"
        },
        "city": "Destin",
        "state": "FL",
        "country": "US",
        "zip_code": "32541",
        "company_name": "DP_CONSIGNEE",
        "_id": "626fca7015cb1333c402a46c"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "lat": 12,
          "lng": 12
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-02T12:14:27.770Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "6218578c227f261a7233a3a2",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541",
          "isTIROptional": false,
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": 12,
            "lat": 12,
            "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
            "address1": "7300",
            "city": "Destin",
            "state": "FL",
            "country": "US",
            "zip_code": "32541"
          },
          "company_name": "dp_consignee"
        },
        "prevType": "DELIVERLOAD",
        "city": "Destin",
        "state": "FL",
        "country": "US",
        "zip_code": "32541",
        "company_name": "DP_CONSIGNEE",
        "_id": "626fca7015cb1333c402a46b"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
          "lat": 12,
          "lng": 12
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "6218578c227f261a7233a3a2",
          "city": "Destin",
          "state": "FL",
          "country": "US",
          "zip_code": "32541",
          "isTIROptional": false,
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": 12,
            "lat": 12,
            "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA",
            "address1": "7300",
            "city": "Destin",
            "state": "FL",
            "country": "US",
            "zip_code": "32541"
          },
          "company_name": "dp_consignee"
        },
        "prevType": "DELIVERLOAD",
        "city": "Destin",
        "state": "FL",
        "country": "US",
        "zip_code": "32541",
        "company_name": "DP_CONSIGNEE",
        "_id": "626fca7015cb1333c402a46a"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "type": "RETURNCONTAINER",
        "_id": "626fca7015cb1333c402a469"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "6218578c227f261a7233a3a2",
        "_id": "626fca6815cb1333c402a464"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d6297661049c6db32e6",
        "_id": "626fca6815cb1333c402a465"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 8741.94,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "emptyOrigin": null,
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-05-02T12:15:03.333Z",
    "activeIndex": 0,
    "driverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101"
      },
      "isBobtail": false,
      "isGrayPool": false,
      "_id": "626fca7015cb1333c402a46d",
      "company_name": "SHREE RAM ENTERPRICE",
      "zip_code": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "customerId": "5c8a3d6297661049c6db32e6",
      "type": "PULLCONTAINER",
      "driver": "6169528898f51815805c06f3",
      "loadAssignedDate": "2022-05-02T12:14:27.770Z",
      "arrived": "2022-05-02T12:14:57.830Z"
    },
    "emptyDay": null,
    "nextDriverOrderId": {
      "isVoidOut": false,
      "distance": 8741.94,
      "address": {
        "lng": 12,
        "lat": 12,
        "address": "7300, 216 Mountain Dr # 104, Destin, FL 32541, USA"
      },
      "isBobtail": false,
      "isGrayPool": false,
      "_id": "626fca7015cb1333c402a46c",
      "company_name": "DP_CONSIGNEE",
      "zip_code": "32541",
      "country": "US",
      "state": "FL",
      "city": "Destin",
      "customerId": "6218578c227f261a7233a3a2",
      "type": "DELIVERLOAD",
      "driver": "6169528898f51815805c06f3",
      "loadAssignedDate": "2022-05-02T12:14:27.770Z"
    }
  },
  {
    "_id": "626fc85b15cb1333c402a3f7",
    "updatedAt": "2022-05-03T05:41:10.236Z",
    "createdAt": "2022-05-02T12:02:35.145Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101066",
    "distance": 0.65,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "weight": 0,
    "expense": [
      {
        "name": "Base Price",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "washout_container",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      },
      {
        "name": "layover",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T05:40:44.447Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "626fc85b15cb1333c402a3ff"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T05:40:44.447Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "NEW JERSEY TRUCKER",
        "_id": "626fc85b15cb1333c402a3fe"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T05:40:44.447Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "RETURNCONTAINER",
        "_id": "626fc85b15cb1333c402a3fd"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "626fc85b15cb1333c402a3f8",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "pickupTimes": [
      {
        "_id": "626fc85b15cb1333c402a3f9",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisId": "626930168c79ba2a92bc9dc6",
    "chassisIdName": "25369815",
    "chassisNo": "25369815",
    "chassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "chassisOwnerName": "DELL CHASSIS",
    "chassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "chassisSizeName": "20-40",
    "chassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "chassisTypeName": "STANDARD",
    "containerNo": "cont6666666",
    "containerOwner": {
      "_id": "62298d955eed62771b57a3cf",
      "company_name": "hello data"
    },
    "containerOwnerName": "HELLO DATA",
    "containerSize": {
      "_id": "5bbb6355e24ec65cd0a9d8e4",
      "name": "53'"
    },
    "containerSizeName": "53'",
    "containerType": {
      "_id": "62458d4ba57c7e115be4094f",
      "name": "Dell"
    },
    "containerTypeName": "DELL",
    "genset": "Genset #",
    "temperature": "Temperature",
    "driver": {
      "_id": "6232c231d74d916ba7713e8a",
      "driver": {
        "_id": "6232c231d74d916ba7713e88",
        "mobile": "2135456489",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61c5b7c297ec2319d726a3b0"
      },
      "lastName": "team",
      "name": "Ajit"
    },
    "driverName": "AJIT TEAM",
    "equipment": {
      "_id": "61c5b7c297ec2319d726a3b0",
      "equipment_type": "TRUCK",
      "equipmentID": "123456",
      "licence_plate_number": "123"
    },
    "lastUpdatedStatusAt": "2022-05-03T05:40:44.452Z",
    "loadAssignedDate": "2022-05-03T05:40:44.447Z"
  },
  {
    "_id": "626fc80ab5116433bdd8a489",
    "updatedAt": "2022-05-03T06:02:46.479Z",
    "createdAt": "2022-05-02T12:01:14.083Z",
    "reference_number": "SCAL_M101065",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "caller": {
      "_id": "5c8a3d1797661049c6db3191",
      "companyID": "qaCIRCLE9571",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000002",
      "email": "vip@gggg.com",
      "billingEmail": "vip@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "VIP CIRCLE",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "address1": "VIP Circle",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "qa CIRCLE",
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "officeHoursEnd": null,
      "officeHoursStart": null,
      "receiverEmail": null
    },
    "callerInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "shipperInfo": {
      "company_name": "MAHER",
      "address": {
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
        "lat": 40.6806736,
        "lng": -74.1662324
      },
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zipcode": "07201"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "QA CIRCLE",
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-05-03T05:42:49.590Z",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "company_name": "MAHER",
        "_id": "6270c5635f5bbc172a3f833a"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-05-03T05:42:49.590Z",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "NEW JERSEY TRUCKER",
        "_id": "6270c5635f5bbc172a3f8339"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "prevType": "DELIVERLOAD",
        "loadAssignedDate": "2022-05-03T05:42:49.590Z",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "NEW JERSEY TRUCKER",
        "_id": "6270c5635f5bbc172a3f8338"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": true,
        "loadAssignedDate": "2022-05-03T06:02:41.114Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "NEW JERSEY TRUCKER",
        "_id": "6270c5635f5bbc172a3f8337"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "loadAssignedDate": "2022-05-03T06:02:41.115Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "RETURNCONTAINER",
        "_id": "6270c5635f5bbc172a3f8336"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "626fc7beb5116433bdd8a479",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "pickupTimes": [
      {
        "_id": "626fc7beb5116433bdd8a47a",
        "customerId": "5e4c6d801d5e56097a0e9acd"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "chassisId": "624d247120afc3f70177eefc",
    "chassisIdName": "QA0I456745",
    "chassisNo": "QA0i456745",
    "containerNo": "COPY6565656",
    "genset": "Genset #",
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-05-03T05:42:49.595Z",
    "loadAssignedDate": "2022-05-03T05:42:49.590Z",
    "emptyOrigin": null,
    "grayChassisId": "626930168c79ba2a92bc9dc6",
    "grayChassisNo": "25369815",
    "grayChassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "grayChassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "grayChassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "grayContainerNo": "dfre1234567",
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL"
  },
  {
    "_id": "626fc7cfb5116433bdd8a482",
    "updatedAt": "2022-05-03T06:05:14.487Z",
    "createdAt": "2022-05-02T12:00:15.704Z",
    "reference_number": "SCAL_M101064",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "caller": {
      "_id": "5c8a3d1797661049c6db3191",
      "companyID": "qaCIRCLE9571",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000002",
      "email": "vip@gggg.com",
      "billingEmail": "vip@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "VIP CIRCLE",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "address1": "VIP Circle",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "qa CIRCLE",
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "officeHoursEnd": null,
      "officeHoursStart": null,
      "receiverEmail": null
    },
    "callerInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "shipperInfo": {
      "company_name": "MAHER",
      "address": {
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
        "lat": 40.6806736,
        "lng": -74.1662324
      },
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zipcode": "07201"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "QA CIRCLE",
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T06:04:55.833Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "company_name": "MAHER",
        "_id": "626fc7cfb5116433bdd8a487"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T06:04:55.833Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "NEW JERSEY TRUCKER",
        "_id": "626fc7cfb5116433bdd8a486"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-05-03T06:04:55.833Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "RETURNCONTAINER",
        "_id": "626fc7cfb5116433bdd8a485"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "626fc7beb5116433bdd8a479",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "pickupTimes": [
      {
        "_id": "626fc7beb5116433bdd8a47a",
        "customerId": "5e4c6d801d5e56097a0e9acd"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "chassisId": "626930168c79ba2a92bc9dc6",
    "chassisIdName": "25369815",
    "chassisNo": "25369815",
    "chassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "chassisOwnerName": "DELL CHASSIS",
    "chassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "chassisSizeName": "20-40",
    "chassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "chassisTypeName": "STANDARD",
    "containerNo": "CONT6464644",
    "expense": [
      {
        "name": "Base Price",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "washout_container",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      },
      {
        "name": "layover",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      }
    ],
    "genset": "Genset #",
    "driver": {
      "_id": "6232c231d74d916ba7713e8a",
      "driver": {
        "_id": "6232c231d74d916ba7713e88",
        "mobile": "2135456489",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61c5b7c297ec2319d726a3b0"
      },
      "lastName": "team",
      "name": "Ajit"
    },
    "driverName": "AJIT TEAM",
    "equipment": {
      "_id": "61c5b7c297ec2319d726a3b0",
      "equipment_type": "TRUCK",
      "equipmentID": "123456",
      "licence_plate_number": "123"
    },
    "lastUpdatedStatusAt": "2022-05-03T06:04:55.838Z",
    "loadAssignedDate": "2022-05-03T06:04:55.833Z"
  },
  {
    "_id": "626fc7beb5116433bdd8a478",
    "updatedAt": "2022-05-03T07:09:09.244Z",
    "createdAt": "2022-05-02T11:59:58.906Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5c8a3d1797661049c6db3191",
      "companyID": "qaCIRCLE9571",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000002",
      "email": "vip@gggg.com",
      "billingEmail": "vip@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "VIP CIRCLE",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "address1": "VIP Circle",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "qa CIRCLE",
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "officeHoursEnd": null,
      "officeHoursStart": null,
      "receiverEmail": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101063",
    "distance": 0,
    "pricing": [],
    "callerName": "QA CIRCLE",
    "callerInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "shipperInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.1662324,
        "lat": 40.6806736,
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "MAHER"
    },
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "weight": 0,
    "expense": [
      {
        "name": "Base Price",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "washout_container",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [
      {
        "_id": "62380fc869f61e28cce37279",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "qwert",
        "name": "wert"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6270c662b01a971a9e83213e",
        "company_name": "MAHER",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6270c662b01a971a9e83213d",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6270c662b01a971a9e83213c",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "6270c662b01a971a9e83213b",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "6270c662b01a971a9e83213a",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626fc7beb5116433bdd8a479"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6d801d5e56097a0e9acd",
        "_id": "626fc7beb5116433bdd8a47a"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL"
  },
  {
    "_id": "626fc74315cb1333c402a3ec",
    "updatedAt": "2022-05-05T13:37:49.487Z",
    "createdAt": "2022-05-02T11:57:55.106Z",
    "reference_number": "SCAL_TES_M101062",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "terminal": {
      "_id": "614247be867e7f15656dda75",
      "updatedAt": "2021-11-11T18:58:55.665Z",
      "createdAt": "2021-09-15T19:21:34.402Z",
      "userId": "5c8a3aa697661049c6db257f",
      "address": {
        "address": "vsxvdfb,sdfa,dsafd234,234",
        "_id": "614247be867e7f15656dda75"
      },
      "name": "test",
      "isDeleted": false,
      "__v": 0
    },
    "temperature": "12",
    "distance": 23.64,
    "chassisPick": {
      "_id": "5e4c6fe85ef5fa09fe55eafe",
      "city": "Newark",
      "state": "NJ",
      "country": "US",
      "zip_code": "07105",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA",
        "address1": "400 Doremus Ave",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105"
      },
      "company_name": "YARD"
    },
    "emptyOrigin": {
      "_id": "5f56dcbc78dd990b12846dd1",
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zip_code": "07201",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
        "address1": "5080 McLester St",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201"
      },
      "company_name": "Prod Test",
      "isTIROptional": true
    },
    "chassisTermination": {
      "_id": "5c8a3d6297661049c6db32e6",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
        "address1": "Shree ram enterprice",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "Shree ram enterprice"
    },
    "callerPONo": "12",
    "releaseNo": "456",
    "sealNo": "120",
    "shipmentNo": "123456",
    "doNo": "123456",
    "bookingNo": "B001",
    "containerOwner": {
      "_id": "5bbc32bae24ec65cd0a9d90b",
      "company_name": "ONE"
    },
    "containerOwnerName": "ONE",
    "containerSize": {
      "_id": "5bbb6355e24ec65cd0a9d8e4",
      "name": "53'"
    },
    "containerSizeName": "53'",
    "containerType": {
      "_id": "5bbb631ee24ec65cd0a9d8e0",
      "name": "HC"
    },
    "containerTypeName": "HC",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.1662324,
        "lat": 40.6806736,
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "MAHER"
    },
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "BIG KEY WAREHOUSE"
    },
    "chassisPickInfo": {
      "company_name": "YARD",
      "address": {
        "address": "400 Doremus Ave, Newark, NJ 07105, USA",
        "lat": 40.7194025,
        "lng": -74.12469879999999
      },
      "city": "Newark",
      "state": "NJ",
      "country": "US",
      "zipcode": "07105"
    },
    "emptyOriginInfo": {
      "company_name": "PROD TEST",
      "address": {
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
        "lat": 40.669178,
        "lng": -74.15911919999999
      },
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zipcode": "07201"
    },
    "chassisTerminationInfo": {
      "company_name": "SHREE RAM ENTERPRICE",
      "address": {
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
        "lat": 21.2450975,
        "lng": 72.8872173
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "purchaseOrderNo": "123456",
    "deliveryOrderNo": "123",
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "consigneeName": "BIG KEY WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "chassisPickName": "YARD",
    "emptyOriginName": "PROD TEST",
    "chassisTerminationName": "SHREE RAM ENTERPRICE",
    "chassisTypeName": "TRI-AXLE",
    "chassisSizeName": "20-40'",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6db21d5e56097a0e9ada",
        "companyID": "BIGKEYWAREHOUSE3155",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "winners@portpro.io",
        "main_contact_name": "qw",
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "address1": "450 Grand St",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302"
        },
        "company_name": "BIG KEY WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273d323959a2d2a1e35f2ac",
        "company_name": "MAHER",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 10.53,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273d323959a2d2a1e35f2ab",
        "company_name": "BIG KEY WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6db21d5e56097a0e9ada",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA",
            "address1": "450 Grand St",
            "city": "Jersey City",
            "state": "NJ",
            "country": "US",
            "zip_code": "07302"
          },
          "company_name": "BIG KEY WAREHOUSE",
          "isTIROptional": false
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 13.11,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6273d323959a2d2a1e35f2aa",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [
      {
        "createdAt": "2022-05-05T13:37:49.486Z",
        "_id": "6273d32d959a2d2a1e35f2ae",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "newStatus": "PENDING",
        "oldStatus": "PENDING"
      }
    ],
    "isDeleted": false,
    "items": [
      {
        "palletsUnits": "",
        "pallets": 0,
        "weightUnitType": "",
        "weightKgs": 55.79,
        "weight": 123,
        "units": null,
        "pieces": 20,
        "description": "",
        "commodity": "789",
        "_id": "619617094df8501568925320"
      }
    ],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "619617094df8501568925329",
        "deliveryToTime": "2021-11-05T18:30:00.000Z",
        "deliveryFromTime": "2021-11-05T18:30:00.000Z",
        "customerId": "5e4c6d801d5e56097a0e9acd"
      }
    ],
    "pickupTimes": [
      {
        "_id": "619617094df8501568925328",
        "pickupToTime": "2021-11-04T18:30:00.000Z",
        "pickupFromTime": "2021-11-04T18:30:00.000Z",
        "customerId": "5e4c6db21d5e56097a0e9ada"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 23.64,
    "chassisNo": "sdfsf"
  },
  {
    "_id": "626fc730b5116433bdd8a471",
    "updatedAt": "2022-05-02T11:57:36.744Z",
    "createdAt": "2022-05-02T11:57:36.698Z",
    "reference_number": "SCAL_TES_M101061",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "terminal": {
      "_id": "614247be867e7f15656dda75",
      "updatedAt": "2021-11-11T18:58:55.665Z",
      "createdAt": "2021-09-15T19:21:34.402Z",
      "userId": "5c8a3aa697661049c6db257f",
      "address": {
        "address": "vsxvdfb,sdfa,dsafd234,234",
        "_id": "614247be867e7f15656dda75"
      },
      "name": "test",
      "isDeleted": false,
      "__v": 0
    },
    "temperature": "12",
    "distance": 24.26,
    "chassisPick": {
      "_id": "5e4c6fe85ef5fa09fe55eafe",
      "city": "Newark",
      "state": "NJ",
      "country": "US",
      "zip_code": "07105",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA",
        "address1": "400 Doremus Ave",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105"
      },
      "company_name": "YARD"
    },
    "emptyOrigin": {
      "_id": "5f56dcbc78dd990b12846dd1",
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zip_code": "07201",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
        "address1": "5080 McLester St",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201"
      },
      "company_name": "Prod Test",
      "isTIROptional": true
    },
    "chassisTermination": {
      "_id": "5c8a3d6297661049c6db32e6",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
        "address1": "Shree ram enterprice",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "Shree ram enterprice"
    },
    "callerPONo": "12",
    "releaseNo": "456",
    "sealNo": "120",
    "shipmentNo": "123456",
    "doNo": "123456",
    "bookingNo": "B001",
    "containerOwner": {
      "_id": "5bbc32bae24ec65cd0a9d90b",
      "company_name": "ONE"
    },
    "containerOwnerName": "ONE",
    "containerSize": {
      "_id": "5bbb6355e24ec65cd0a9d8e4",
      "name": "53'"
    },
    "containerSizeName": "53'",
    "containerType": {
      "_id": "5bbb631ee24ec65cd0a9d8e0",
      "name": "HC"
    },
    "containerTypeName": "HC",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "MAHER",
      "address": {
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
        "lat": 40.6806736,
        "lng": -74.1662324
      },
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zipcode": "07201"
    },
    "consigneeInfo": {
      "company_name": "BIG KEY WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "chassisPickInfo": {
      "zipcode": "07105",
      "country": "US",
      "state": "NJ",
      "city": "Newark",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA"
      },
      "company_name": "YARD"
    },
    "emptyOriginInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "PROD TEST"
    },
    "chassisTerminationInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101"
      },
      "company_name": "SHREE RAM ENTERPRICE"
    },
    "purchaseOrderNo": "123456",
    "deliveryOrderNo": "123",
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "consigneeName": "BIG KEY WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "chassisPickName": "YARD",
    "emptyOriginName": "PROD TEST",
    "chassisTerminationName": "SHREE RAM ENTERPRICE",
    "chassisTypeName": "TRI-AXLE",
    "chassisSizeName": "20-40'",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6db21d5e56097a0e9ada",
        "companyID": "BIGKEYWAREHOUSE3155",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "winners@portpro.io",
        "main_contact_name": "qw",
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "address1": "450 Grand St",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302"
        },
        "company_name": "BIG KEY WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626fc730b5116433bdd8a476",
        "company_name": "MAHER",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 11.15,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626fc730b5116433bdd8a475",
        "company_name": "BIG KEY WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6db21d5e56097a0e9ada",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA",
            "address1": "450 Grand St",
            "city": "Jersey City",
            "state": "NJ",
            "country": "US",
            "zip_code": "07302"
          },
          "company_name": "BIG KEY WAREHOUSE",
          "isTIROptional": false
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 13.11,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626fc730b5116433bdd8a474",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [
      {
        "palletsUnits": "",
        "pallets": 0,
        "weightUnitType": "",
        "weightKgs": 55.79,
        "weight": 123,
        "units": null,
        "pieces": 20,
        "description": "",
        "commodity": "789",
        "_id": "619617094df8501568925320"
      }
    ],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "619617094df8501568925329",
        "deliveryToTime": "2021-11-05T18:30:00.000Z",
        "deliveryFromTime": "2021-11-05T18:30:00.000Z",
        "customerId": "5e4c6d801d5e56097a0e9acd"
      }
    ],
    "pickupTimes": [
      {
        "_id": "619617094df8501568925328",
        "pickupToTime": "2021-11-04T18:30:00.000Z",
        "pickupFromTime": "2021-11-04T18:30:00.000Z",
        "customerId": "5e4c6db21d5e56097a0e9ada"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 24.26
  },
  {
    "_id": "626fc712b5116433bdd8a46a",
    "updatedAt": "2022-05-07T09:22:39.596Z",
    "createdAt": "2022-05-02T11:57:06.790Z",
    "reference_number": "SCAL_TES_M101060",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "terminal": {
      "_id": "614247be867e7f15656dda75",
      "updatedAt": "2021-11-11T18:58:55.665Z",
      "createdAt": "2021-09-15T19:21:34.402Z",
      "userId": "5c8a3aa697661049c6db257f",
      "address": {
        "address": "vsxvdfb,sdfa,dsafd234,234",
        "_id": "614247be867e7f15656dda75"
      },
      "name": "test",
      "isDeleted": false,
      "__v": 0
    },
    "temperature": "12",
    "distance": 22.08,
    "chassisPick": {
      "_id": "5e4c6fe85ef5fa09fe55eafe",
      "city": "Newark",
      "state": "NJ",
      "country": "US",
      "zip_code": "07105",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA",
        "address1": "400 Doremus Ave",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105"
      },
      "company_name": "YARD"
    },
    "emptyOrigin": {
      "_id": "5f56dcbc78dd990b12846dd1",
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zip_code": "07201",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
        "address1": "5080 McLester St",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201"
      },
      "company_name": "Prod Test",
      "isTIROptional": true
    },
    "chassisTermination": {
      "_id": "5c8a3d6297661049c6db32e6",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101",
        "address1": "Shree ram enterprice",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "Shree ram enterprice"
    },
    "callerPONo": "12",
    "releaseNo": "456",
    "sealNo": "120",
    "shipmentNo": "123456",
    "doNo": "123456",
    "bookingNo": "B001",
    "containerOwner": {
      "_id": "5bbc32bae24ec65cd0a9d90b",
      "company_name": "ONE"
    },
    "containerOwnerName": "ONE",
    "containerSize": {
      "_id": "5bbb6355e24ec65cd0a9d8e4",
      "name": "53'"
    },
    "containerSizeName": "53'",
    "containerType": {
      "_id": "5bbb631ee24ec65cd0a9d8e0",
      "name": "HC"
    },
    "containerTypeName": "HC",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "MAHER",
      "address": {
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
        "lat": 40.6806736,
        "lng": -74.1662324
      },
      "city": "Elizabeth",
      "state": "NJ",
      "country": "US",
      "zipcode": "07201"
    },
    "consigneeInfo": {
      "company_name": "BIG KEY WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "chassisPickInfo": {
      "zipcode": "07105",
      "country": "US",
      "state": "NJ",
      "city": "Newark",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA"
      },
      "company_name": "YARD"
    },
    "emptyOriginInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "PROD TEST"
    },
    "chassisTerminationInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8872173,
        "lat": 21.2450975,
        "address": "Shree ram enterprice, Mota Varachha, Surat, Gujarat 394101"
      },
      "company_name": "SHREE RAM ENTERPRICE"
    },
    "purchaseOrderNo": "123456",
    "deliveryOrderNo": "123",
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "consigneeName": "BIG KEY WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "chassisPickName": "YARD",
    "emptyOriginName": "PROD TEST",
    "chassisTerminationName": "SHREE RAM ENTERPRICE",
    "chassisTypeName": "TRI-AXLE",
    "chassisSizeName": "20-40'",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6db21d5e56097a0e9ada",
        "companyID": "BIGKEYWAREHOUSE3155",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "winners@portpro.io",
        "main_contact_name": "qw",
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "address1": "450 Grand St",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302"
        },
        "company_name": "BIG KEY WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a5feb46fa7f3ac9d390",
        "company_name": "MAHER",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 11.15,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a5feb46fa7f3ac9d38f",
        "company_name": "BIG KEY WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6db21d5e56097a0e9ada",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA",
            "address1": "450 Grand St",
            "city": "Jersey City",
            "state": "NJ",
            "country": "US",
            "zip_code": "07302"
          },
          "company_name": "BIG KEY WAREHOUSE",
          "isTIROptional": false
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 10.93,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a5feb46fa7f3ac9d38e",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [
      {
        "palletsUnits": "",
        "pallets": 0,
        "weightUnitType": "",
        "weightKgs": 55.79,
        "weight": 123,
        "units": null,
        "pieces": 20,
        "description": "",
        "commodity": "789",
        "_id": "619617094df8501568925320"
      }
    ],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "619617094df8501568925329",
        "deliveryToTime": "2021-11-05T18:30:00.000Z",
        "deliveryFromTime": "2021-11-05T18:30:00.000Z",
        "customerId": "5e4c6d801d5e56097a0e9acd"
      }
    ],
    "pickupTimes": [
      {
        "_id": "619617094df8501568925328",
        "pickupToTime": "2021-11-04T18:30:00.000Z",
        "pickupFromTime": "2021-11-04T18:30:00.000Z",
        "customerId": "5e4c6db21d5e56097a0e9ada"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 22.08
  },
  {
    "_id": "626f97b6b5116433bdd8a356",
    "updatedAt": "2022-05-07T09:22:24.747Z",
    "createdAt": "2022-05-02T08:35:02.781Z",
    "reference_number": "SCAL_M101059",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "AVAILABLE",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -300,
    "totalAmount": 0,
    "paidAmount": 300,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [
      {
        "checked": true,
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-02T10:01:41.442Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_RponG231605.xlsx",
        "type": "Bill of Lading",
        "_id": "626fac05b5116433bdd8a3df",
        "customer": null
      },
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-02T10:03:15.443Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_xk0AUX99987.pdf",
        "type": "Delivery Order",
        "_id": "626fac632bbddf658fdc596f",
        "checked": true,
        "customer": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "company_name": "SMITHSON WAREHOUSE"
        }
      },
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-02T10:18:22.254Z",
        "url": "https://s3-us-west-2.amazonaws.com/axle-logistics/scanner/1651486688541_1651486690603.pdf",
        "type": "Bill of Lading",
        "_id": "626fafeeb5116433bdd8a3f6",
        "checked": true,
        "customer": null
      },
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-05-02T10:19:01.146Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_KJGljd82827.pdf",
        "type": "Bill of Lading",
        "_id": "626fb0152bbddf658fdc5971",
        "checked": true,
        "customer": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "company_name": "SMITHSON WAREHOUSE"
        }
      }
    ],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a50169da67f3399daf4",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a50169da67f3399daf3",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a50169da67f3399daf2",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "62763a50169da67f3399daf1",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "62763a50169da67f3399daf0",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-02T10:04:51.540Z",
        "_id": "626facc315cb1333c402a38b",
        "document": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_V0FFmU87590.pdf",
        "documentType": "Check",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-01T03:00:00.000Z",
        "checkNo": "dfgf",
        "amount": 200
      },
      {
        "createdAt": "2022-05-02T10:05:34.963Z",
        "_id": "626facee15cb1333c402a38d",
        "document": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_JJB5ZS80987.png",
        "documentType": "ACH",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-04-30T03:00:00.000Z",
        "checkNo": "ddfds",
        "amount": 100
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626f979315cb1333c402a2b3"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626f979315cb1333c402a2b4"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "emptyOrigin": null,
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL",
    "lastUpdatedStatusAt": "2022-05-07T09:22:24.600Z",
    "loadAssignedDate": "2022-05-02T09:01:48.682Z",
    "availableDate": "2022-05-07T09:22:24.596Z"
  },
  {
    "_id": "626f979ab5116433bdd8a34f",
    "updatedAt": "2022-05-02T11:33:56.043Z",
    "createdAt": "2022-05-02T08:34:34.964Z",
    "reference_number": "SCAL_M101058",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979ab5116433bdd8a354",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979ab5116433bdd8a353",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979ab5116433bdd8a352",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "626f979315cb1333c402a2b3",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "pickupTimes": [
      {
        "_id": "626f979315cb1333c402a2b4",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "containerNo": "CASD1234567"
  },
  {
    "_id": "626f979315cb1333c402a2b2",
    "updatedAt": "2022-05-02T08:34:27.581Z",
    "createdAt": "2022-05-02T08:34:27.505Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101057",
    "distance": 0.65,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979315cb1333c402a2ba",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979315cb1333c402a2b9",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626f979315cb1333c402a2b8",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626f979315cb1333c402a2b3"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626f979315cb1333c402a2b4"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65
  },
  {
    "_id": "626e33f23d12f43172812075",
    "updatedAt": "2022-05-02T05:43:58.711Z",
    "createdAt": "2022-05-01T07:17:06.145Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5c8a3bb497661049c6db2ac3",
      "companyID": "NEWJERSEYTRUCKER4179",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000000",
      "email": "apex@gggg.com",
      "billingEmail": "apex@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "NEW JERSEY TRUCKER",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "address1": "301-302",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "NEW JERSEY TRUCKER",
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101052",
    "distance": 5.35,
    "pricing": [
      {
        "customerRateId": "626e2fd0c8fb6d2742a402eb",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "amount": "0.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "530.00",
        "unit": "1.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Waiting time",
        "perType": "fixed",
        "description": "customer rates data ",
        "type": "fixed"
      }
    ],
    "callerName": "NEW JERSEY TRUCKER",
    "callerInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "shipperName": "YARD",
    "shipperAddress": "400 DOREMUS AVE, NEWARK, NJ 07105, USA",
    "shipperInfo": {
      "zipcode": "07105",
      "country": "US",
      "state": "NJ",
      "city": "Newark",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA"
      },
      "company_name": "YARD"
    },
    "consigneeName": "PROD TEST",
    "consigneeAddress": "5080 MCLESTER ST, ELIZABETH, NJ 07201, USA",
    "consigneeInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "PROD TEST"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5f56dcbc78dd990b12846dd1",
        "companyID": "ProdTest6159",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "ubp9tzmnvwb8a3c@portpro.io",
        "main_contact_name": "ANB",
        "address": {
          "lng": -74.15911919999999,
          "lat": 40.669178,
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "address1": "5080 McLester St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "Prod Test",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6fe85ef5fa09fe55eafe",
        "companyID": "YARD587",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105",
        "mobile": "",
        "email": "dfhe9w5khouw2ec@portpro.io",
        "main_contact_name": "test",
        "address": {
          "lng": -74.12469879999999,
          "lat": 40.7194025,
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "address1": "400 Doremus Ave",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105"
        },
        "company_name": "YARD",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -30,
    "totalAmount": 0,
    "paidAmount": 30,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e33f23d12f4317281207f",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 5.35,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e33f23d12f4317281207e",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e33f23d12f4317281207d",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e33f23d12f4317281207c",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e33f23d12f4317281207b",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-01T07:17:24.199Z",
        "_id": "626e34041dd2a93179f80d86",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-03T03:00:00.000Z",
        "amount": 30
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5f56dcbc78dd990b12846dd1",
        "_id": "626e33f23d12f43172812076"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6fe85ef5fa09fe55eafe",
        "_id": "626e33f23d12f43172812077"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 5.35,
    "billingNote": "  vbcbfgb",
    "yardNote": "fdfdf",
    "qbExportDates": []
  },
  {
    "_id": "626e3019cf63b6273bcec17f",
    "updatedAt": "2022-05-01T07:01:09.230Z",
    "createdAt": "2022-05-01T07:00:41.857Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5c8a3bb497661049c6db2ac3",
      "companyID": "NEWJERSEYTRUCKER4179",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "mobile": "2000000000",
      "email": "apex@gggg.com",
      "billingEmail": "apex@gggg.com",
      "payment_terms": 0,
      "main_contact_name": "NEW JERSEY TRUCKER",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "address1": "301-302",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301"
      },
      "company_name": "NEW JERSEY TRUCKER",
      "extraEmail": "",
      "isEmailNeedToSend": true,
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101051",
    "distance": 5.35,
    "pricing": [
      {
        "customerRateId": "626e2fd0c8fb6d2742a402eb",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "amount": "0.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "530.00",
        "unit": "1.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Waiting time",
        "perType": "fixed",
        "description": "customer rates data ",
        "type": "fixed"
      }
    ],
    "callerName": "NEW JERSEY TRUCKER",
    "callerInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "shipperName": "YARD",
    "shipperAddress": "400 DOREMUS AVE, NEWARK, NJ 07105, USA",
    "shipperInfo": {
      "zipcode": "07105",
      "country": "US",
      "state": "NJ",
      "city": "Newark",
      "address": {
        "lng": -74.12469879999999,
        "lat": 40.7194025,
        "address": "400 Doremus Ave, Newark, NJ 07105, USA"
      },
      "company_name": "YARD"
    },
    "consigneeName": "PROD TEST",
    "consigneeAddress": "5080 MCLESTER ST, ELIZABETH, NJ 07201, USA",
    "consigneeInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.15911919999999,
        "lat": 40.669178,
        "address": "5080 McLester St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "PROD TEST"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62380fc869f61e28cce37279",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "qwert",
        "name": "wert"
      },
      {
        "_id": "6236aa4c9d0592498ed0f132",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "knae",
        "name": "qa test"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5f56dcbc78dd990b12846dd1",
        "companyID": "ProdTest6159",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "ubp9tzmnvwb8a3c@portpro.io",
        "main_contact_name": "ANB",
        "address": {
          "lng": -74.15911919999999,
          "lat": 40.669178,
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "address1": "5080 McLester St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "Prod Test",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6fe85ef5fa09fe55eafe",
        "companyID": "YARD587",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105",
        "mobile": "",
        "email": "dfhe9w5khouw2ec@portpro.io",
        "main_contact_name": "test",
        "address": {
          "lng": -74.12469879999999,
          "lat": 40.7194025,
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "address1": "400 Doremus Ave",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105"
        },
        "company_name": "YARD",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": -30,
    "totalAmount": 0,
    "paidAmount": 30,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e3019cf63b6273bcec189",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 5.35,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e3019cf63b6273bcec188",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e3019cf63b6273bcec187",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
          "lat": 40.669178,
          "lng": -74.15911919999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e3019cf63b6273bcec186",
        "company_name": "PROD TEST",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5f56dcbc78dd990b12846dd1",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.15911919999999,
            "lat": 40.669178,
            "address": "5080 McLester St, Elizabeth, NJ 07201, USA",
            "address1": "5080 McLester St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "Prod Test",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e3019cf63b6273bcec185",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-01T07:01:09.230Z",
        "_id": "626e3035cf63b6273bcec18b",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-04T03:00:00.000Z",
        "amount": 30
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5f56dcbc78dd990b12846dd1",
        "_id": "626e3019cf63b6273bcec180"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6fe85ef5fa09fe55eafe",
        "_id": "626e3019cf63b6273bcec181"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 5.35,
    "qbExportDates": []
  },
  {
    "_id": "626e1c6d3d12f43172811ff1",
    "updatedAt": "2022-05-07T09:22:46.984Z",
    "createdAt": "2022-05-01T05:36:45.096Z",
    "reference_number": "SCAL_M101050",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9911",
    "secondaryReferenceNo": "You11",
    "sealNo": "P7811",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a66169da67f3399dafa",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a66169da67f3399daf9",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62763a66169da67f3399daf8",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM11",
    "containerNo": "DEEP1234511",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6c3d12f43172811fea",
    "updatedAt": "2022-05-01T05:48:03.306Z",
    "createdAt": "2022-05-01T05:36:44.750Z",
    "reference_number": "SCAL_M101049",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9910",
    "secondaryReferenceNo": "You10",
    "sealNo": "P7810",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fef",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fee",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fed",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM10",
    "containerNo": "DEEP1234510",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6c3d12f43172811fe3",
    "updatedAt": "2022-05-01T05:47:40.007Z",
    "createdAt": "2022-05-01T05:36:44.430Z",
    "reference_number": "SCAL_M101048",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9909",
    "secondaryReferenceNo": "You09",
    "sealNo": "P7809",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fe8",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fe7",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fe6",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM09",
    "containerNo": "DEEP1234509",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6c3d12f43172811fdc",
    "updatedAt": "2022-05-01T05:47:20.487Z",
    "createdAt": "2022-05-01T05:36:44.110Z",
    "reference_number": "SCAL_M101047",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9908",
    "secondaryReferenceNo": "You08",
    "sealNo": "P7808",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fe1",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fe0",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6c3d12f43172811fdf",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM08",
    "containerNo": "DEEP1234508",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6b3d12f43172811fd5",
    "updatedAt": "2022-05-01T05:47:07.319Z",
    "createdAt": "2022-05-01T05:36:43.781Z",
    "reference_number": "SCAL_M101046",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9907",
    "secondaryReferenceNo": "You07",
    "sealNo": "P7807",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fda",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fd9",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fd8",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM07",
    "containerNo": "DEEP1234507",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6b3d12f43172811fce",
    "updatedAt": "2022-05-01T05:46:53.358Z",
    "createdAt": "2022-05-01T05:36:43.428Z",
    "reference_number": "SCAL_M101045",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9906",
    "secondaryReferenceNo": "You06",
    "sealNo": "P7806",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fd3",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fd2",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fd1",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM06",
    "containerNo": "DEEP1234506",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6b3d12f43172811fc7",
    "updatedAt": "2022-05-01T05:46:39.489Z",
    "createdAt": "2022-05-01T05:36:43.119Z",
    "reference_number": "SCAL_M101044",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9905",
    "secondaryReferenceNo": "You05",
    "sealNo": "P7805",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fcc",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fcb",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6b3d12f43172811fca",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM05",
    "containerNo": "DEEP1234505",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6a3d12f43172811fc0",
    "updatedAt": "2022-05-01T05:46:23.176Z",
    "createdAt": "2022-05-01T05:36:42.791Z",
    "reference_number": "SCAL_M101043",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9904",
    "secondaryReferenceNo": "You04",
    "sealNo": "P7804",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fc5",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fc4",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fc3",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM04",
    "containerNo": "DEEP1234504",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6a3d12f43172811fb9",
    "updatedAt": "2022-05-01T07:23:05.925Z",
    "createdAt": "2022-05-01T05:36:42.463Z",
    "reference_number": "SCAL_M101042",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9903",
    "secondaryReferenceNo": "You03",
    "sealNo": "P7803",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [
      {
        "amount": 0,
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "450.00",
        "unit": "1.00",
        "freeDays": 0,
        "perType": "",
        "name": "Base Price",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 440,
    "totalAmount": 450,
    "paidAmount": 10,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fbe",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fbd",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fbc",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [
      {
        "createdAt": "2022-05-01T07:23:05.924Z",
        "_id": "626e35593d12f431728120a3",
        "createdBy": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "paymentDate": "2022-05-05T03:00:00.000Z",
        "amount": 10
      }
    ],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM03",
    "containerNo": "DEEP1234503",
    "qbExportDates": []
  },
  {
    "_id": "626e1c6a3d12f43172811fb2",
    "updatedAt": "2022-05-01T05:45:49.466Z",
    "createdAt": "2022-05-01T05:36:42.103Z",
    "reference_number": "SCAL_M101041",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "distance": 0.65,
    "callerbillLandingNo": "YOG9902",
    "secondaryReferenceNo": "You02",
    "sealNo": "P7802",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "consigneeInfo": {
      "company_name": "NEW JERSEY TRUCKER",
      "address": {
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
        "lat": 21.2371483,
        "lng": 72.8623947
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fb7",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fb6",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1c6a3d12f43172811fb5",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626e1b4b3d12f43172811fa5"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "626e1b4b3d12f43172811fa6"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "chassisNo": "RAM02",
    "containerNo": "DEEP1234502",
    "qbExportDates": []
  },
  {
    "_id": "626e1b4b3d12f43172811fa4",
    "updatedAt": "2022-05-01T05:36:26.500Z",
    "createdAt": "2022-05-01T05:31:55.559Z",
    "type_of_load": "IMPORT",
    "status": "PENDING",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101040",
    "distance": 0.65,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1b4b3d12f43172811fac",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0.65,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1b4b3d12f43172811fab",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626e1b4b3d12f43172811faa",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "626e1b4b3d12f43172811fa5",
        "customerId": "5c8a3bb497661049c6db2ac3"
      }
    ],
    "pickupTimes": [
      {
        "_id": "626e1b4b3d12f43172811fa6",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0.65,
    "callerbillLandingNo": "YOG9901",
    "chassisNo": "RAM01",
    "containerNo": "DEEP1234501",
    "sealNo": "P7801",
    "secondaryReferenceNo": "You01",
    "qbExportDates": []
  },
  {
    "_id": "626b7d2287d51d3f2d7545ce",
    "updatedAt": "2022-04-29T05:57:56.396Z",
    "createdAt": "2022-04-29T05:52:34.262Z",
    "type_of_load": "IMPORT",
    "status": "AVAILABLE",
    "preSetOrderStatus": "PULL_DROP_DELIVER_DROP_RETURN",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101038",
    "distance": 4.28,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "MAHER",
    "shipperAddress": "1200 CORBIN ST, ELIZABETH, NJ 07201, USA",
    "shipperInfo": {
      "zipcode": "07201",
      "country": "US",
      "state": "NJ",
      "city": "Elizabeth",
      "address": {
        "lng": -74.1662324,
        "lat": 40.6806736,
        "address": "1200 Corbin St, Elizabeth, NJ 07201, USA"
      },
      "company_name": "MAHER"
    },
    "consigneeName": "NEW JERSEY TRUCKER",
    "consigneeAddress": "301-302, AMORA ARCADE, NEAR MAUNI INTERNATIONAL SCHOOL, UTTRAN, SURAT, GUJARAT",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8623947,
        "lat": 21.2371483,
        "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat"
      },
      "company_name": "NEW JERSEY TRUCKER"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3bb497661049c6db2ac3",
        "companyID": "NEWJERSEYTRUCKER4179",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000000",
        "email": "apex@gggg.com",
        "main_contact_name": "NEW JERSEY TRUCKER",
        "address": {
          "lng": 72.8623947,
          "lat": 21.2371483,
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "address1": "301-302",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "NEW JERSEY TRUCKER",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6d801d5e56097a0e9acd",
        "companyID": "MAHER8785",
        "city": "Elizabeth",
        "state": "NJ",
        "country": "US",
        "zip_code": "07201",
        "mobile": "",
        "email": "e5phwoydsgxqtnx@portpro.io",
        "main_contact_name": "rtt",
        "address": {
          "lng": -74.1662324,
          "lat": 40.6806736,
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "address1": "1200 Corbin St",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201"
        },
        "company_name": "MAHER",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
          "lat": 40.6806736,
          "lng": -74.1662324
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585f",
        "company_name": "MAHER",
        "zip_code": "07201",
        "country": "US",
        "state": "NJ",
        "city": "Elizabeth",
        "customerId": {
          "_id": "5e4c6d801d5e56097a0e9acd",
          "city": "Elizabeth",
          "state": "NJ",
          "country": "US",
          "zip_code": "07201",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.1662324,
            "lat": 40.6806736,
            "address": "1200 Corbin St, Elizabeth, NJ 07201, USA",
            "address1": "1200 Corbin St",
            "city": "Elizabeth",
            "state": "NJ",
            "country": "US",
            "zip_code": "07201"
          },
          "company_name": "MAHER",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER",
        "driver": null
      },
      {
        "isVoidOut": false,
        "distance": 4.28,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585e",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "prevType": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER",
        "driver": null
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585d",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "loadAssignedDate": "2022-04-29T05:57:51.270Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "prevType": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585c",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "loadAssignedDate": "2022-04-29T05:57:51.271Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585b",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "loadAssignedDate": "2022-04-29T05:57:51.271Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
          "lat": 21.2371483,
          "lng": 72.8623947
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b4585a",
        "company_name": "NEW JERSEY TRUCKER",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3bb497661049c6db2ac3",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8623947,
            "lat": 21.2371483,
            "address": "301-302, Amora Arcade, near Mauni International School, Uttran, Surat, Gujarat",
            "address1": "301-302",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "NEW JERSEY TRUCKER",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "626b7e64872c5c3f26b45859",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3bb497661049c6db2ac3",
        "_id": "626b7d2287d51d3f2d7545cf"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6d801d5e56097a0e9acd",
        "_id": "626b7d2287d51d3f2d7545d0"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 4.28,
    "emptyOrigin": null,
    "lastUpdatedStatusAt": "2022-04-29T05:55:38.690Z",
    "availableDate": "2022-04-29T05:55:38.685Z",
    "qbExportDates": []
  },
  {
    "_id": "626a520485d7697e3578f183",
    "updatedAt": "2022-04-29T05:42:29.264Z",
    "createdAt": "2022-04-28T08:36:20.760Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101031",
    "distance": 0,
    "pricing": [
      {
        "type": "fixed",
        "name": "Base Price",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "154.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "154.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Chassis",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "102.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "102.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "pier_congestion",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "135.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "135.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Waiting time",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "147.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "147.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Detention",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "103.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "103.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Over Weight",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "104.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "104.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "tri_axle",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "131.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "131.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "domestic_move",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "113.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "113.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "maintenance_and_repair",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "118.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "118.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "tire_rebill",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "128.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "128.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Dead Run",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "143.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "143.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "scale_load",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "124.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "124.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "attempted_to_pick_up",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "109.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "109.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Shunt",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "148.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "148.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "demur_det_fee",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "108.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "108.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "other",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "119.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "119.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "reefer",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "133.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "133.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Hazmat",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "116.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "116.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "flexi_bag_disposal",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "139.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "139.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Flatbed",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "146.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "146.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Tank",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "153.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "153.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "line_hall",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "117.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "117.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "dry_run",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "115.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "115.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Exam Site Pick Up",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "150.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "150.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "per_diem",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "120.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "120.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "container_inspection",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "111.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "111.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "transaction_fee",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "130.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "130.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "PrePull",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "106.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "106.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "pick_up_charge",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "121.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "121.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "placard_removal",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "138.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "138.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "stop_off",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "125.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "125.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "storage",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "126.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "126.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "traffic_fine",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "129.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "129.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "bonded_cargo_charge",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "110.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "110.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "bobtail_charge",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "134.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "134.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "drop_charge",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "114.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "114.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "port_congestion_fee",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "122.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "122.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "strap",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "127.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "127.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "AES Fee",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "141.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "141.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "redelivery",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "123.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "123.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Tolls",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "149.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "149.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Handling - Documentation Fee",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "140.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "140.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Tarp",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "144.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "144.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "washout_container",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "132.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "132.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "transload",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "137.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "137.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "attempted_to_drop",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "107.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "107.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Chassis Split",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "152.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "152.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "demurrage",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "112.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "112.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "pier_pass",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "151.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "151.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "hourly_pay",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "136.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "136.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Unload",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "145.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "145.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      },
      {
        "type": "fixed",
        "name": "Ocean Freight",
        "freeMinutes": 0,
        "freeDays": 0,
        "amount": "142.00",
        "description": "",
        "chargePerMinute": 0,
        "chargePerDay": 0,
        "finalAmount": "142.00",
        "chargeType": "CUSTOMER_RATES",
        "subChargeType": "PROFILE_RATES",
        "customerRateId": "6261215c792a564f114d331e",
        "unit": "0.00"
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      },
      {
        "_id": "624c2e2274b4310dd9b1feba",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "rwk",
        "name": "wew"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 6679,
    "totalAmount": 6679,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-29T05:41:51.077Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "626b7a1987d51d3f2d7545c4"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-29T05:41:51.077Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "626b7a1987d51d3f2d7545c3"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-29T05:41:51.077Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "626b7a1987d51d3f2d7545c2"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": true,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "626b7a1987d51d3f2d7545c1"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "type": "RETURNCONTAINER",
        "_id": "626b7a1987d51d3f2d7545c0"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "626a520485d7697e3578f184"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "626a520485d7697e3578f185"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL",
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-04-29T05:41:51.086Z",
    "loadAssignedDate": "2022-04-29T05:41:51.077Z",
    "qbExportDates": []
  },
  {
    "_id": "6269a80060063a6ab6f8db34",
    "updatedAt": "2022-04-28T10:45:02.529Z",
    "createdAt": "2022-04-27T20:30:56.192Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101030",
    "distance": 0,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      },
      {
        "_id": "6257d8b82dae105888d6c20a",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "Portpro",
        "name": "Test Demo"
      },
      {
        "_id": "624c2e2274b4310dd9b1feba",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "rwk",
        "name": "wew"
      },
      {
        "_id": "6233091ede4b494b0448f99e",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "test",
        "name": "Qa"
      },
      {
        "_id": "6232f084c42fa449090affc8",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "Test",
        "name": "Fmanager"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6269a80060063a6ab6f8db3e",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "PULLCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:31:39.588Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6269a80060063a6ab6f8db3d",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:31:39.588Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6269a80060063a6ab6f8db3c",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DROPCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:31:39.588Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "6269a80060063a6ab6f8db3b",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "_id": "6269a80060063a6ab6f8db3a",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "6269a80060063a6ab6f8db35"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "6269a80060063a6ab6f8db36"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-04-27T20:31:39.597Z",
    "loadAssignedDate": "2022-04-27T20:31:39.588Z",
    "emptyOrigin": null,
    "grayChassisId": "626930168c79ba2a92bc9dc6",
    "grayChassisNo": "25369815",
    "grayChassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "grayChassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "grayChassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "grayContainerNo": "ZXAZ1212121",
    "qbExportDates": []
  },
  {
    "_id": "6269a27660063a6ab6f8db1e",
    "updatedAt": "2022-04-27T20:07:53.594Z",
    "createdAt": "2022-04-27T20:07:18.666Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101029",
    "distance": 0,
    "pricing": [
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "154.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "154.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Base Price",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "102.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "102.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Chassis",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "135.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "135.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pier_congestion",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "147.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "147.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Waiting time",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "103.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "103.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Detention",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "104.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "104.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Over Weight",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "131.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "131.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "tri_axle",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "113.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "113.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "domestic_move",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "118.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "118.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "maintenance_and_repair",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "128.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "128.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "tire_rebill",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "143.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "143.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Dead Run",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "124.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "124.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "scale_load",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "109.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "109.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "attempted_to_pick_up",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "148.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "148.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Shunt",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "108.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "108.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "demur_det_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "119.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "119.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "other",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "133.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "133.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "reefer",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "116.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "116.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Hazmat",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "139.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "139.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "flexi_bag_disposal",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "146.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "146.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Flatbed",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "153.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "153.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tank",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "117.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "117.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "line_hall",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "115.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "115.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "dry_run",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "150.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "150.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Exam Site Pick Up",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "120.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "120.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "per_diem",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "111.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "111.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "container_inspection",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "130.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "130.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "transaction_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "106.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "106.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "PrePull",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "121.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "121.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pick_up_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "138.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "138.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "placard_removal",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "125.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "125.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "stop_off",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "126.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "126.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "storage",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "129.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "129.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "traffic_fine",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "110.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "110.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "bonded_cargo_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "134.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "134.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "bobtail_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "114.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "114.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "drop_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "122.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "122.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "port_congestion_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "127.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "127.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "strap",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "141.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "141.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "AES Fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "123.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "123.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "redelivery",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "149.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "149.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tolls",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "140.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "140.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Handling - Documentation Fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "144.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "144.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tarp",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "132.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "132.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "washout_container",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "137.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "137.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "transload",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "107.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "107.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "attempted_to_drop",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "152.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "152.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Chassis Split",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "112.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "112.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "demurrage",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "151.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "151.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pier_pass",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "136.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "136.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "hourly_pay",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "145.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "145.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Unload",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331e",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "142.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "142.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Ocean Freight",
        "type": "fixed"
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "SMITHSON WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 6679,
    "totalAmount": 6679,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:07:27.953Z",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6269a28560063a6ab6f8db2c"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:07:27.954Z",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6269a28560063a6ab6f8db2b"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T20:07:27.954Z",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6269a28560063a6ab6f8db2a"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": true,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6269a28560063a6ab6f8db29"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "type": "RETURNCONTAINER",
        "_id": "6269a28560063a6ab6f8db28"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6269a27660063a6ab6f8db1f"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6269a27660063a6ab6f8db20"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "emptyOrigin": null,
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-04-27T20:07:33.071Z",
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL",
    "grayChassisNo": "123er",
    "grayContainerNo": "AAAA1234567",
    "qbExportDates": []
  },
  {
    "_id": "6269531fabe64c6abdccd12c",
    "updatedAt": "2022-04-27T14:33:49.086Z",
    "createdAt": "2022-04-27T14:28:47.795Z",
    "type_of_load": "IMPORT",
    "status": "HOOKCONTAINER_ARRIVED",
    "preSetOrderStatus": "PICK_RUN_GRAY_POOL",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101028",
    "distance": 0,
    "pricing": [],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": true,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-27T14:29:00.897Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "6269532960063a6ab6f8da74",
        "arrived": "2022-04-27T14:33:15.687Z",
        "departed": "2022-04-27T14:33:15.687Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-27T14:29:00.897Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "6269532960063a6ab6f8da73",
        "arrived": "2022-04-27T14:33:15.687Z",
        "departed": "2022-04-27T14:33:15.687Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-27T14:29:00.897Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "6269532960063a6ab6f8da72",
        "arrived": "2022-04-27T14:33:15.687Z",
        "departed": "2022-04-27T14:33:15.687Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": true,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "6269532960063a6ab6f8da71",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T14:29:08.053Z",
        "arrived": "2022-04-27T14:33:15.687Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": true,
        "type": "RETURNCONTAINER",
        "_id": "6269532960063a6ab6f8da70",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "loadAssignedDate": "2022-04-27T14:29:08.053Z"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "6269531fabe64c6abdccd12d"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "6269531fabe64c6abdccd12e"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-04-27T14:33:15.706Z",
    "activeIndex": 3,
    "allStatusDates": {
      "pullContainerArrived": "2022-04-27T14:33:15.687Z",
      "pullContainerDeparted": "2022-04-27T14:33:15.687Z",
      "deliverContainerArrived": "2022-04-27T14:33:15.687Z",
      "deliverContainerDeparted": "2022-04-27T14:33:15.687Z",
      "dropContainerArrived": "2022-04-27T14:33:15.687Z",
      "dropContainerDeparted": "2022-04-27T14:33:15.687Z",
      "hookContainerArrived": "2022-04-27T14:33:15.687Z"
    },
    "driverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "isBobtail": false,
      "isGrayPool": true,
      "arrived": "2022-04-27T14:33:15.687Z",
      "loadAssignedDate": "2022-04-27T14:29:08.053Z",
      "driver": "6169528898f51815805c06f3",
      "_id": "6269532960063a6ab6f8da71",
      "company_name": "QA CIRCLE",
      "zip_code": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "prevType": "DELIVERLOAD",
      "customerId": "5c8a3d1797661049c6db3191",
      "type": "HOOKCONTAINER"
    },
    "emptyDay": null,
    "freeReturnDate": "2022-04-27T03:00:00.000Z",
    "nextDriverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "isBobtail": false,
      "isGrayPool": true,
      "loadAssignedDate": "2022-04-27T14:29:08.053Z",
      "driver": "6169528898f51815805c06f3",
      "_id": "6269532960063a6ab6f8da70",
      "type": "RETURNCONTAINER"
    },
    "grayChassisId": "626930168c79ba2a92bc9dc6",
    "grayChassisNo": "asma",
    "grayChassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "grayChassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "grayChassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "grayContainerNo": "OKOK1021021",
    "qbExportDates": []
  },
  {
    "_id": "62664055097de91d21c6504e",
    "updatedAt": "2022-04-27T11:59:57.498Z",
    "createdAt": "2022-04-25T06:31:49.793Z",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "status": "PULLCONTAINER_ARRIVED",
    "type_of_load": "IMPORT",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "temperature": "",
    "containerNo": "",
    "reference_number": "SCAL_M101023",
    "distance": 0,
    "pricing": [
      {
        "amount": "0.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "0.00",
        "unit": "0.00",
        "freeDays": 0,
        "perType": "fixed",
        "name": "bobtail_charge",
        "chargeType": "MANUALLY_CHANGED",
        "description": "Bobtail",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "shipperInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "consigneeInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "weight": 0,
    "expense": [
      {
        "name": "Base Price",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "layover",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      },
      {
        "name": "washout_container",
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "6257d8b82dae105888d6c20a",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "Portpro",
        "name": "Test Demo"
      },
      {
        "_id": "624c2e0974b4310dd9b1feb7",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "qw",
        "name": "long tste Carrier Access Management"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": true,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": true,
        "isGrayPool": false,
        "_id": "62666de20056a81a42e1043a",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "loadAssignedDate": "2022-04-25T10:16:14.335Z",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "arrived": "2022-04-25T10:18:17.142Z"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62666de20056a81a42e10439",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "loadAssignedDate": "2022-04-25T10:16:14.335Z",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        }
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62666de20056a81a42e10438",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "loadAssignedDate": "2022-04-25T10:16:14.335Z",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DROPCONTAINER",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        }
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T10:23:43.659Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "_id": "62666de20056a81a42e10437",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T10:23:43.660Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DROPCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105",
        "company_name": "YARD",
        "_id": "62667566ca57703b61741990"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "type": "HOOKCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "prevType": "DELIVERLOAD",
        "city": "Newark",
        "state": "NJ",
        "country": "US",
        "zip_code": "07105",
        "company_name": "YARD",
        "_id": "62667566ca57703b6174198f"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6266755ca93ab43b68296434",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6266755ca93ab43b68296433",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "prevType": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "HOOKCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "62666de20056a81a42e10436",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "62664055097de91d21c6504f",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "62664055097de91d21c65050",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "preSetOrderStatus": "PULL_DELIVER_DROP_RETURN",
    "lastUpdatedStatusAt": "2022-04-25T10:25:01.738Z",
    "activeIndex": 0,
    "driverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "isBobtail": true,
      "isGrayPool": false,
      "arrived": "2022-04-25T10:18:17.142Z",
      "driver": "6169528898f51815805c06f3",
      "type": "PULLCONTAINER",
      "customerId": "5e4c6dcbd1c3f36c329dd8b9",
      "loadAssignedDate": "2022-04-25T10:16:14.335Z",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "company_name": "SMITHSON WAREHOUSE",
      "_id": "62666de20056a81a42e1043a"
    },
    "emptyDay": null,
    "nextDriverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "isBobtail": false,
      "isGrayPool": false,
      "driver": "6169528898f51815805c06f3",
      "type": "DELIVERLOAD",
      "customerId": "5c8a3d1797661049c6db3191",
      "loadAssignedDate": "2022-04-25T10:16:14.335Z",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "company_name": "QA CIRCLE",
      "_id": "62666de20056a81a42e10439"
    },
    "allStatusDates": {
      "pullContainerArrived": "2022-04-25T10:18:17.142Z"
    },
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "chassisId": "626930168c79ba2a92bc9dc6",
    "chassisIdName": "25369815",
    "chassisNo": "25369815",
    "chassisOwner": {
      "_id": "62458e29a57c7e115be4095b",
      "company_name": "dell chassis"
    },
    "chassisOwnerName": "DELL CHASSIS",
    "chassisSize": {
      "_id": "5f720474525b4d3786a3d210",
      "name": "20-40"
    },
    "chassisSizeName": "20-40",
    "chassisType": {
      "_id": "5bbc32d0e24ec65cd0a9d90c",
      "name": "Standard"
    },
    "chassisTypeName": "STANDARD",
    "qbExportDates": []
  },
  {
    "_id": "62662ee99885c07cfd774e29",
    "updatedAt": "2022-04-25T06:05:12.774Z",
    "createdAt": "2022-04-25T05:17:29.772Z",
    "type_of_load": "IMPORT",
    "status": "DISPATCHED",
    "preSetOrderStatus": "",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "reference_number": "SCAL_M101022",
    "distance": 0,
    "pricing": [
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "153.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "153.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tank",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "152.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "152.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Chassis Split",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "151.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "151.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pier_pass",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "150.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "150.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Exam Site Pick Up",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "149.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "149.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tolls",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "148.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "148.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Shunt",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "147.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "147.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Waiting time",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "146.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "146.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Flatbed",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "145.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "145.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Unload",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "144.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "144.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Tarp",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "143.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "143.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Dead Run",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "142.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "142.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Ocean Freight",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "141.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "141.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "AES Fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "140.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "140.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Handling - Documentation Fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "139.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "139.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "flexi_bag_disposal",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "138.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "138.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "placard_removal",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "137.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "137.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "transload",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "136.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "136.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "hourly_pay",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "135.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "135.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pier_congestion",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "134.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "134.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "bobtail_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "133.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "133.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "reefer",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "132.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "132.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "washout_container",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "131.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "131.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "tri_axle",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "130.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "130.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "transaction_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "129.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "129.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "traffic_fine",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "128.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "128.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "tire_rebill",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "127.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "127.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "strap",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "126.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "126.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "storage",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "125.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "125.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "stop_off",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "124.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "124.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "scale_load",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "123.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "123.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "redelivery",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "122.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "122.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "port_congestion_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "121.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "121.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "pick_up_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "120.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "120.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "per_diem",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "119.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "119.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "other",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "118.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "118.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "maintenance_and_repair",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "117.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "117.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "line_hall",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "116.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "116.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Hazmat",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "115.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "115.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "dry_run",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "114.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "114.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "drop_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "113.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "113.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "domestic_move",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "112.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "112.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "demurrage",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "111.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "111.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "container_inspection",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "110.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "110.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "bonded_cargo_charge",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "109.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "109.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "attempted_to_pick_up",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "108.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "108.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "demur_det_fee",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "107.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "107.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "attempted_to_drop",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "106.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "106.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "PrePull",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "105.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "105.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Toll",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "104.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "104.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Over Weight",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "103.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "103.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Detention",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "102.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "102.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Chassis",
        "type": "fixed"
      },
      {
        "unit": "0.00",
        "customerRateId": "6261215c792a564f114d331d",
        "subChargeType": "PROFILE_RATES",
        "chargeType": "CUSTOMER_RATES",
        "finalAmount": "154.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "description": "",
        "amount": "154.00",
        "freeDays": 0,
        "freeMinutes": 0,
        "name": "Base Price",
        "type": "fixed"
      }
    ],
    "callerName": "SMITHSON WAREHOUSE",
    "callerInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE"
    },
    "shipperName": "QA CIRCLE",
    "shipperAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "shipperInfo": {
      "zipcode": "67301",
      "country": "US",
      "state": "KS",
      "city": "Independence",
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "company_name": "QA CIRCLE"
    },
    "consigneeName": "BIG KEY WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeInfo": {
      "zipcode": "07302",
      "country": "US",
      "state": "NJ",
      "city": "Jersey City",
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "BIG KEY WAREHOUSE"
    },
    "weight": 0,
    "expense": [
      {
        "finalAmount": "60.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "Base Price"
      },
      {
        "finalAmount": "123.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "layover"
      },
      {
        "finalAmount": "10.00",
        "unit": 0,
        "freeDays": 0,
        "amount": "0.00",
        "chargePerDay": 0,
        "perType": "perday",
        "name": "washout_container"
      }
    ],
    "ediDateTime": [],
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "62399d745dc91a3d890c2a0c",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "parker",
        "name": "mike"
      },
      {
        "_id": "62452a68be64534f4aa41490",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "shall",
        "name": "jacki"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6db21d5e56097a0e9ada",
        "companyID": "BIGKEYWAREHOUSE3155",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "winners@portpro.io",
        "main_contact_name": "qw",
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "address1": "450 Grand St",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302"
        },
        "company_name": "BIG KEY WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": true,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T06:05:12.771Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "62662ee99885c07cfd774e31"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T06:05:12.771Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5e4c6db21d5e56097a0e9ada",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA",
            "address1": "450 Grand St",
            "city": "Jersey City",
            "state": "NJ",
            "country": "US",
            "zip_code": "07302"
          },
          "company_name": "BIG KEY WAREHOUSE",
          "isTIROptional": false
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "BIG KEY WAREHOUSE",
        "_id": "62662ee99885c07cfd774e30"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T06:05:12.771Z",
        "driver": {
          "_id": "6232c231d74d916ba7713e8a",
          "isDeleted": false,
          "lastName": "team",
          "name": "Ajit"
        },
        "type": "RETURNCONTAINER",
        "_id": "62662ee99885c07cfd774e2f"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [
      {
        "status": "APPROVED",
        "paidAmount": 0,
        "totalAmount": 1000,
        "remainAmount": 1000,
        "additionalIds": [],
        "loadIds": [],
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "companyID": "SMITHSONWAREHOUSE5475",
          "mobile": "",
          "email": "test@test22er.com",
          "billingEmail": "",
          "extraEmail": "",
          "payment_terms": 365,
          "isEmailNeedToSend": true,
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE"
        },
        "pricing": [
          {
            "name": "Chassis",
            "description": "",
            "amount": 0,
            "finalAmount": "1000.00",
            "freeDays": 0,
            "chargePerDay": 0,
            "freeMinutes": 0,
            "chargePerMinute": 0,
            "manualFinalAmount": 0
          }
        ],
        "billingDate": "2022-04-21T03:00:00.000Z",
        "_id": "6266307f9885c07cfd774e35"
      }
    ],
    "deliveryTimes": [
      {
        "customerId": "5e4c6db21d5e56097a0e9ada",
        "_id": "62662ee99885c07cfd774e2a"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "62662ee99885c07cfd774e2b"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "totalMiles": 0,
    "driver": {
      "_id": "6232c231d74d916ba7713e8a",
      "driver": {
        "_id": "6232c231d74d916ba7713e88",
        "mobile": "2135456489",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61c5b7c297ec2319d726a3b0"
      },
      "lastName": "team",
      "name": "Ajit"
    },
    "driverName": "AJIT TEAM",
    "equipment": {
      "_id": "61c5b7c297ec2319d726a3b0",
      "equipment_type": "TRUCK",
      "equipmentID": "123456",
      "licence_plate_number": "123"
    },
    "lastUpdatedStatusAt": "2022-04-25T06:05:12.782Z",
    "loadAssignedDate": "2022-04-25T06:05:12.771Z",
    "qbExportDates": []
  },
  {
    "_id": "625f95bd9024a4779c3c511e",
    "updatedAt": "2022-04-26T04:24:09.840Z",
    "createdAt": "2022-04-20T05:10:21.601Z",
    "reference_number": "SCAL_E101018",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "AVAILABLE",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "BIG KEY WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "pricing": [
      {
        "amount": "0.00",
        "chargePerDay": 0,
        "chargePerMinute": 0,
        "finalAmount": "200.00",
        "unit": "1.00",
        "freeDays": 0,
        "perType": "",
        "name": "dell",
        "chargeType": "MANUALLY_CHANGED",
        "customerRateId": null,
        "dynamicPricingId": null
      }
    ],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "BIG KEY WAREHOUSE",
    "consigneeAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5e4c6db21d5e56097a0e9ada",
        "companyID": "BIGKEYWAREHOUSE3155",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "winners@portpro.io",
        "main_contact_name": "qw",
        "address": {
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "address1": "450 Grand St",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302"
        },
        "company_name": "BIG KEY WAREHOUSE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 200,
    "totalAmount": 200,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-04-20T05:53:46.371Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ZbupWw59171.xlsx",
        "type": "Bill of Lading",
        "_id": "625f9fea9024a4779c3c5139",
        "checked": true
      },
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-04-20T06:57:12.056Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_MhhEDs14068.xlsx",
        "type": "Quote",
        "_id": "625faec8c43f1e77a3700da0",
        "checked": true
      },
      {
        "userId": {
          "_id": "6257d8b82dae105888d6c20a",
          "lastName": "Portpro",
          "name": "Test Demo"
        },
        "date": "2022-04-20T07:07:15.395Z",
        "url": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_t20nM172858.xlsx",
        "type": "Delivery Order",
        "_id": "625fb1239024a4779c3c5194",
        "checked": true
      },
      {
        "userId": {
          "_id": "5c8a3aa697661049c6db257f",
          "lastName": "NEW JERSEY TRUCKER",
          "name": "NEW JERSEY TRUCKER"
        },
        "date": "2022-04-20T09:07:28.348Z",
        "url": "https://s3-us-west-2.amazonaws.com/axle-logistics/scanner/1650445555323_1650445574028.pdf",
        "type": "Bill of Lading",
        "_id": "625fcd50784afe08b27a23b4",
        "checked": true
      }
    ],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-22T16:48:43.623Z",
        "_id": "625f95bd9024a4779c3c5123",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-22T16:48:43.623Z",
        "_id": "625f95bd9024a4779c3c5122",
        "company_name": "BIG KEY WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6db21d5e56097a0e9ada",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA",
            "address1": "450 Grand St",
            "city": "Jersey City",
            "state": "NJ",
            "country": "US",
            "zip_code": "07302"
          },
          "company_name": "BIG KEY WAREHOUSE",
          "isTIROptional": false
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-22T16:48:43.623Z",
        "_id": "625f95bd9024a4779c3c5121",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [
      {
        "status": "UNAPPROVED",
        "paidAmount": 0,
        "totalAmount": 150,
        "remainAmount": 150,
        "additionalIds": [],
        "loadIds": [],
        "_id": "625fee5840d25b1ff2c5cafa",
        "billingDate": null,
        "pricing": [
          {
            "name": "dell",
            "description": "",
            "amount": 0,
            "finalAmount": "150.00",
            "freeDays": 0,
            "chargePerDay": 0,
            "freeMinutes": 0,
            "chargePerMinute": 0,
            "manualFinalAmount": 0
          }
        ],
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "companyID": "SMITHSONWAREHOUSE5475",
          "mobile": "",
          "email": "test@test22er.com",
          "billingEmail": "",
          "extraEmail": "",
          "payment_terms": 365,
          "isEmailNeedToSend": true,
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE"
        }
      }
    ],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5e4c6db21d5e56097a0e9ada"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "lastUpdatedStatusAt": "2022-04-26T04:24:09.844Z",
    "preSetOrderStatus": "",
    "chassisId": "624d203003173af4d598e44f",
    "chassisIdName": "QA0IUGK745",
    "expense": [
      {
        "name": "Base Price",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "60.00"
      },
      {
        "name": "layover",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "123.00"
      },
      {
        "name": "washout_container",
        "description": null,
        "perType": "perday",
        "chargePerDay": 0,
        "amount": "0.00",
        "freeDays": 0,
        "unit": 0,
        "finalAmount": "10.00"
      }
    ],
    "availableDate": "2022-04-26T04:24:09.839Z",
    "qbExportDates": []
  },
  {
    "_id": "625f95bd9024a4779c3c5117",
    "updatedAt": "2022-04-28T09:02:01.279Z",
    "createdAt": "2022-04-20T05:10:21.264Z",
    "reference_number": "SCAL_E101017",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PULLCONTAINER_ARRIVED",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [
      {
        "_id": "6257d8b82dae105888d6c20a",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "Portpro",
        "name": "Test Demo"
      },
      {
        "_id": "624c2e2274b4310dd9b1feba",
        "isDeleted": true,
        "isBlocked": false,
        "lastName": "rwk",
        "name": "wew"
      },
      {
        "_id": "6233091ede4b494b0448f99e",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "test",
        "name": "Qa"
      },
      {
        "_id": "6232f084c42fa449090affc8",
        "isDeleted": false,
        "isBlocked": false,
        "lastName": "Test",
        "name": "Fmanager"
      }
    ],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": true,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "arrived": "2022-04-25T11:04:59.271Z",
        "loadAssignedDate": "2022-04-25T11:04:53.314Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "_id": "625f95bd9024a4779c3c511c",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T11:04:53.314Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "_id": "625f95bd9024a4779c3c511b",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T11:04:53.314Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "_id": "625f95bd9024a4779c3c511a",
        "type": "RETURNCONTAINER",
        "customerId": null
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6266805959ceab262d06501b",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "loadAssignedDate": "2022-04-25T11:04:53.314Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "prevType": "RETURNCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "emptyOrigin": null,
    "lastUpdatedStatusAt": "2022-04-26T04:28:45.883Z",
    "preSetOrderStatus": "",
    "activeIndex": 0,
    "allStatusDates": {
      "pullContainerArrived": "2022-04-25T11:04:59.271Z"
    },
    "driverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "isBobtail": false,
      "isGrayPool": false,
      "type": "PULLCONTAINER",
      "customerId": "5e4c6dcbd1c3f36c329dd8b9",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "company_name": "SMITHSON WAREHOUSE",
      "_id": "625f95bd9024a4779c3c511c",
      "driver": "6169528898f51815805c06f3",
      "loadAssignedDate": "2022-04-25T11:04:53.314Z",
      "arrived": "2022-04-25T11:04:59.271Z"
    },
    "loadTime": "2022-04-26T04:23:05.721Z",
    "return": null,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "nextDriverOrderId": {
      "isVoidOut": false,
      "distance": 0,
      "address": {
        "lng": 72.8662072,
        "lat": 21.2315432,
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India"
      },
      "isBobtail": false,
      "isGrayPool": false,
      "type": "DELIVERLOAD",
      "customerId": "5c8a3d1797661049c6db3191",
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zip_code": "67301",
      "company_name": "QA CIRCLE",
      "_id": "625f95bd9024a4779c3c511b",
      "driver": "6169528898f51815805c06f3",
      "loadAssignedDate": "2022-04-25T11:04:53.314Z"
    },
    "qbExportDates": []
  },
  {
    "_id": "625f95bc9024a4779c3c5110",
    "updatedAt": "2022-04-25T11:05:34.170Z",
    "createdAt": "2022-04-20T05:10:20.946Z",
    "reference_number": "SCAL_E101016",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "DISPATCHED",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T11:05:30.321Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "PULLCONTAINER",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "company_name": "SMITHSON WAREHOUSE",
        "_id": "625f95bc9024a4779c3c5115"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T11:05:30.321Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "DELIVERLOAD",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "company_name": "QA CIRCLE",
        "_id": "625f95bc9024a4779c3c5114"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "loadAssignedDate": "2022-04-25T11:05:30.321Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "type": "RETURNCONTAINER",
        "_id": "625f95bc9024a4779c3c5113",
        "customerId": null
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "400 Doremus Ave, Newark, NJ 07105, USA",
          "lat": 40.7194025,
          "lng": -74.12469879999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "6266807e59ceab262d065025",
        "company_name": "YARD",
        "zip_code": "07105",
        "country": "US",
        "state": "NJ",
        "city": "Newark",
        "loadAssignedDate": "2022-04-25T11:05:30.321Z",
        "driver": {
          "_id": "6169528898f51815805c06f3",
          "isDeleted": false,
          "lastName": "QA",
          "name": "A_Dilippatel"
        },
        "prevType": "RETURNCONTAINER",
        "customerId": {
          "_id": "5e4c6fe85ef5fa09fe55eafe",
          "city": "Newark",
          "state": "NJ",
          "country": "US",
          "zip_code": "07105",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "lng": -74.12469879999999,
            "lat": 40.7194025,
            "address": "400 Doremus Ave, Newark, NJ 07105, USA",
            "address1": "400 Doremus Ave",
            "city": "Newark",
            "state": "NJ",
            "country": "US",
            "zip_code": "07105"
          },
          "company_name": "YARD",
          "isTIROptional": true
        },
        "type": "DROPCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "driver": {
      "_id": "6169528898f51815805c06f3",
      "driver": {
        "_id": "6169528898f51815805c06f1",
        "mobile": "2323232323",
        "country_code": "+1",
        "currentDriverLocation": {
          "coordinates": [
            0,
            0
          ],
          "type": "Point"
        },
        "truck": "61b07e98a81d145ec1edf572"
      },
      "lastName": "QA",
      "name": "A_Dilippatel"
    },
    "driverName": "A_DILIPPATEL QA",
    "emptyOrigin": null,
    "equipment": {
      "_id": "61b07e98a81d145ec1edf572",
      "equipment_type": "TRUCK",
      "equipmentID": "asda"
    },
    "lastUpdatedStatusAt": "2022-04-25T11:05:34.176Z",
    "preSetOrderStatus": "",
    "qbExportDates": []
  },
  {
    "_id": "625f95bc9024a4779c3c5109",
    "updatedAt": "2022-04-25T05:50:56.950Z",
    "createdAt": "2022-04-20T05:10:20.616Z",
    "reference_number": "SCAL_E101015",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bc9024a4779c3c510e",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bc9024a4779c3c510d",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bc9024a4779c3c510c",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  },
  {
    "_id": "625f95bc9024a4779c3c5102",
    "updatedAt": "2022-04-26T11:31:40.694Z",
    "createdAt": "2022-04-20T05:10:20.289Z",
    "reference_number": "SCAL_E101014",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00011",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "_id": "625f95bc9024a4779c3c5107",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "_id": "625f95bc9024a4779c3c5106",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "_id": "625f95bc9024a4779c3c5105",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "customerId": "5c8a3d1797661049c6db3191",
        "_id": "625e9d9b5b032e4943c30b03"
      }
    ],
    "pickupTimes": [
      {
        "customerId": "5e4c6dcbd1c3f36c329dd8b9",
        "_id": "625e9d9b5b032e4943c30b04"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  },
  {
    "_id": "625f95bb9024a4779c3c50fb",
    "updatedAt": "2022-04-25T05:50:56.950Z",
    "createdAt": "2022-04-20T05:10:19.956Z",
    "reference_number": "SCAL_E101013",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c5100",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50ff",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50fe",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  },
  {
    "_id": "625f95bb9024a4779c3c50f4",
    "updatedAt": "2022-04-25T05:50:56.950Z",
    "createdAt": "2022-04-20T05:10:19.621Z",
    "reference_number": "SCAL_E101012",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f9",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f8",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f7",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  },
  {
    "_id": "625f95bb9024a4779c3c50ed",
    "updatedAt": "2022-04-25T05:50:56.950Z",
    "createdAt": "2022-04-20T05:10:19.290Z",
    "reference_number": "SCAL_E101011",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f2",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f1",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95bb9024a4779c3c50f0",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  },
  {
    "_id": "625f95ba9024a4779c3c50e6",
    "updatedAt": "2022-04-25T05:50:56.950Z",
    "createdAt": "2022-04-20T05:10:18.963Z",
    "reference_number": "SCAL_E101010",
    "addedBy": {
      "_id": "5c8a3aa697661049c6db257f",
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER"
    },
    "type_of_load": "EXPORT",
    "status": "PENDING",
    "caller": {
      "_id": "5e4c6dcbd1c3f36c329dd8b9",
      "companyID": "SMITHSONWAREHOUSE5475",
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zip_code": "07302",
      "mobile": "",
      "email": "test@test22er.com",
      "billingEmail": "",
      "extraEmail": "",
      "payment_terms": 365,
      "isEmailNeedToSend": true,
      "main_contact_name": "as",
      "address": {
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "address1": "450 Grand St",
        "lng": -74.05453709999999,
        "lat": 40.7173673,
        "address": "450 Grand St, Jersey City, NJ 07302, USA"
      },
      "company_name": "SMITHSON WAREHOUSE",
      "receiverEmail": null,
      "currency": "",
      "doc_all": true,
      "doc_none": false,
      "doc_pod": false,
      "doc_tir": false,
      "officeHoursEnd": null,
      "officeHoursStart": null
    },
    "bookingNo": "Booking00001",
    "callerInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "shipperInfo": {
      "company_name": "SMITHSON WAREHOUSE",
      "address": {
        "address": "450 Grand St, Jersey City, NJ 07302, USA",
        "lat": 40.7173673,
        "lng": -74.05453709999999
      },
      "city": "Jersey City",
      "state": "NJ",
      "country": "US",
      "zipcode": "07302"
    },
    "consigneeInfo": {
      "company_name": "QA CIRCLE",
      "address": {
        "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
        "lat": 21.2315432,
        "lng": 72.8662072
      },
      "city": "Independence",
      "state": "KS",
      "country": "US",
      "zipcode": "67301"
    },
    "pricing": [],
    "carrier": {
      "_id": "5c8a3aa697661049c6db257f",
      "carrier": {
        "_id": "5c8a3aa397661049c6db257a",
        "USDOTNumber": "2178221",
        "mobile": 8000477510,
        "company_name": "NEW JERSEY TRUCKER",
        "homeTerminalTimezone": "America/Halifax",
        "defaultAddress": "5e4c6fe85ef5fa09fe55eafe",
        "billingEmail": "",
        "distanceMeasure": "ml"
      },
      "email": "dharmeshapex@gmail.com",
      "defaultAddressId": {
        "_id": "5c8a3aa397661049c6db257d",
        "updatedAt": "2019-03-14T11:27:31.953Z",
        "createdAt": "2019-03-14T11:27:31.953Z",
        "carrier": "5c8a3aa397661049c6db257a",
        "company_address": "111, West Hartford, Connecticut 06119, United States",
        "isDeleted": false,
        "longitude": null,
        "latitude": null,
        "__v": 0
      },
      "lastName": "NEW JERSEY TRUCKER",
      "name": "NEW JERSEY TRUCKER",
      "invoiceLogo": "https://axle-logistics.s3.amazonaws.com/production/tms/shipment_ASs19r27672.jpg"
    },
    "callerName": "SMITHSON WAREHOUSE",
    "shipperName": "SMITHSON WAREHOUSE",
    "shipperAddress": "450 GRAND ST, JERSEY CITY, NJ 07302, USA",
    "consigneeName": "QA CIRCLE",
    "consigneeAddress": "VIP CIRCLE, HIRABAG, AMROLI -, GUJARAT, INDIA",
    "isGrayPool": false,
    "assignedCSR": [],
    "isLastFreeDay": false,
    "acceptRejectCode": "Default",
    "isStatusOrderMigrated": false,
    "isEdi": false,
    "allowDriverCompletion": false,
    "isMigrated": true,
    "customerEmployee": [],
    "consignee": [
      {
        "_id": "5c8a3d1797661049c6db3191",
        "companyID": "qaCIRCLE9571",
        "city": "Independence",
        "state": "KS",
        "country": "US",
        "zip_code": "67301",
        "mobile": "2000000002",
        "email": "vip@gggg.com",
        "main_contact_name": "VIP CIRCLE",
        "address": {
          "lng": 72.8662072,
          "lat": 21.2315432,
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "address1": "VIP Circle",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301"
        },
        "company_name": "qa CIRCLE",
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "shipper": [
      {
        "_id": "5e4c6dcbd1c3f36c329dd8b9",
        "companyID": "SMITHSONWAREHOUSE5475",
        "city": "Jersey City",
        "state": "NJ",
        "country": "US",
        "zip_code": "07302",
        "mobile": "",
        "email": "test@test22er.com",
        "main_contact_name": "as",
        "address": {
          "zip_code": "07302",
          "country": "US",
          "state": "NJ",
          "city": "Jersey City",
          "address1": "450 Grand St",
          "lng": -74.05453709999999,
          "lat": 40.7173673,
          "address": "450 Grand St, Jersey City, NJ 07302, USA"
        },
        "company_name": "SMITHSON WAREHOUSE",
        "isTIROptional": true,
        "officeHoursEnd": null,
        "officeHoursStart": null
      }
    ],
    "carrierHold": false,
    "brokerHold": false,
    "overWeight": false,
    "isConfirm": false,
    "remainAmount": 0,
    "totalAmount": 0,
    "paidAmount": 0,
    "totalWeight": 0,
    "isLoadDropAtPull": false,
    "isLoadDropAtYard": false,
    "isHot": false,
    "isReadyForPickup": false,
    "isloadStartable": false,
    "radio": 0,
    "isNextContainerNeedToPickup": false,
    "isPrePullCharge": false,
    "isReUse": false,
    "isLive": false,
    "isPaymentCompleted": false,
    "documents": [],
    "driverOrder": [
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "450 Grand St, Jersey City, NJ 07302, USA",
          "lat": 40.7173673,
          "lng": -74.05453709999999
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95ba9024a4779c3c50eb",
        "company_name": "SMITHSON WAREHOUSE",
        "zip_code": "07302",
        "country": "US",
        "state": "NJ",
        "city": "Jersey City",
        "customerId": {
          "_id": "5e4c6dcbd1c3f36c329dd8b9",
          "city": "Jersey City",
          "state": "NJ",
          "country": "US",
          "zip_code": "07302",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "address": {
            "zip_code": "07302",
            "country": "US",
            "state": "NJ",
            "city": "Jersey City",
            "address1": "450 Grand St",
            "lng": -74.05453709999999,
            "lat": 40.7173673,
            "address": "450 Grand St, Jersey City, NJ 07302, USA"
          },
          "company_name": "SMITHSON WAREHOUSE",
          "isTIROptional": true
        },
        "type": "PULLCONTAINER"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "address": {
          "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
          "lat": 21.2315432,
          "lng": 72.8662072
        },
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95ba9024a4779c3c50ea",
        "company_name": "QA CIRCLE",
        "zip_code": "67301",
        "country": "US",
        "state": "KS",
        "city": "Independence",
        "customerId": {
          "_id": "5c8a3d1797661049c6db3191",
          "city": "Independence",
          "state": "KS",
          "country": "US",
          "zip_code": "67301",
          "address": {
            "lng": 72.8662072,
            "lat": 21.2315432,
            "address": "VIP Circle, Hirabag, Amroli -, Gujarat, India",
            "address1": "VIP Circle",
            "city": "Independence",
            "state": "KS",
            "country": "US",
            "zip_code": "67301"
          },
          "company_name": "qa CIRCLE",
          "geofence": {
            "polygon": [],
            "zoom": 10.91,
            "center": [
              -74.0029393,
              40.717718
            ]
          },
          "isTIROptional": true
        },
        "type": "DELIVERLOAD"
      },
      {
        "isVoidOut": false,
        "distance": 0,
        "isBobtail": false,
        "isGrayPool": false,
        "_id": "625f95ba9024a4779c3c50e9",
        "type": "RETURNCONTAINER"
      }
    ],
    "statusOrder": [],
    "expenseHistory": [],
    "paymentHistory": [],
    "statusHistory": [],
    "isDeleted": false,
    "items": [],
    "additionalPricing": [],
    "deliveryTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b03",
        "customerId": "5c8a3d1797661049c6db3191"
      }
    ],
    "pickupTimes": [
      {
        "_id": "625e9d9b5b032e4943c30b04",
        "customerId": "5e4c6dcbd1c3f36c329dd8b9"
      }
    ],
    "hot": false,
    "hazmat": false,
    "__v": 0,
    "distance": 0,
    "totalMiles": 0,
    "qbExportDates": []
  }
]

export default rows