//library
import { setLogVerbosity, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Image
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';
import { Colors } from '../../../styles/colors';
import { FAMILY, SIZE } from '../../../styles/font';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { Spaces } from '../../../styles/space';
import { selectUserData } from 'selector/user';
import { pushScreenOnHistoryScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import Outbox from './Outbox';
import { Icons } from 'constant/icons';
import { FormActionLoadHistoryData } from 'store/form';
import { formSelectorHistoryData } from 'selector/form';
import { Icon } from 'react-native-elements';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  // const historyData = useSelector(formSelectorHistoryData);

  //hardcode
  const historyData = [
    {
      "__typename": "FillupForm",
      "id": "599",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 09:07:02",
      "updated_at": "2022-10-31 09:07:02",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[4,3,6]",
          "created_at": "2022-10-31 09:07:02",
          "field_id": "1238",
          "fillup_form_id": "599",
          "id": "1130",
          "updated_at": "2022-10-31 09:07:40",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 09:07:02",
          "field_id": "1239",
          "fillup_form_id": "599",
          "id": "1131",
          "updated_at": "2022-10-31 09:07:40",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 09:07:02",
          "field_id": "1240",
          "fillup_form_id": "599",
          "id": "1132",
          "updated_at": "2022-10-31 09:07:40",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 09:07:02",
          "field_id": "1241",
          "fillup_form_id": "599",
          "id": "1133",
          "updated_at": "2022-10-31 09:07:40",
          "field": {
            "__typename": "Field",
            "id": "1241",
            "form_id": "606",
            "component_id": "133",
            "uuid": "58a7c63a-c0d7-4df8-9604-3f5a856e4ca4",
            "sort_order": 3,
            "created_at": "2022-10-31 04:35:29",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7068",
                "property_id": "210",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "d3c7c492-30bd-49b0-9474-b5d626d18fb2",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7069",
                "property_id": "215",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "bc945f08-964d-4c8c-bbef-3c8f80ed28a8",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7065",
                "property_id": "214",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "1c31caca-2bf3-4224-bbaf-bee94a8440ae",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7066",
                "property_id": "213",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "2e528c28-8dd2-4264-a52a-625f2fd7b3f3",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7067",
                "property_id": "212",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "61850435-ff5a-4bed-b6b0-cd992fa2ae23",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Worktype"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "598",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 08:41:58",
      "updated_at": "2022-10-31 08:41:58",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[2,1]",
          "created_at": "2022-10-31 08:41:58",
          "field_id": "1238",
          "fillup_form_id": "598",
          "id": "1126",
          "updated_at": "2022-10-31 08:41:58",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 08:41:58",
          "field_id": "1239",
          "fillup_form_id": "598",
          "id": "1127",
          "updated_at": "2022-10-31 08:41:58",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 08:41:58",
          "field_id": "1240",
          "fillup_form_id": "598",
          "id": "1128",
          "updated_at": "2022-10-31 08:41:58",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 08:41:58",
          "field_id": "1241",
          "fillup_form_id": "598",
          "id": "1129",
          "updated_at": "2022-10-31 08:41:58",
          "field": {
            "__typename": "Field",
            "id": "1241",
            "form_id": "606",
            "component_id": "133",
            "uuid": "58a7c63a-c0d7-4df8-9604-3f5a856e4ca4",
            "sort_order": 3,
            "created_at": "2022-10-31 04:35:29",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7068",
                "property_id": "210",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "d3c7c492-30bd-49b0-9474-b5d626d18fb2",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7069",
                "property_id": "215",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "bc945f08-964d-4c8c-bbef-3c8f80ed28a8",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7065",
                "property_id": "214",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "1c31caca-2bf3-4224-bbaf-bee94a8440ae",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7066",
                "property_id": "213",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "2e528c28-8dd2-4264-a52a-625f2fd7b3f3",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7067",
                "property_id": "212",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "61850435-ff5a-4bed-b6b0-cd992fa2ae23",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Worktype"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "597",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 07:53:16",
      "updated_at": "2022-10-31 07:53:16",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[1,2]",
          "created_at": "2022-10-31 07:53:16",
          "field_id": "1238",
          "fillup_form_id": "597",
          "id": "1122",
          "updated_at": "2022-10-31 07:53:16",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 07:53:16",
          "field_id": "1239",
          "fillup_form_id": "597",
          "id": "1123",
          "updated_at": "2022-10-31 07:53:16",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 07:53:16",
          "field_id": "1240",
          "fillup_form_id": "597",
          "id": "1124",
          "updated_at": "2022-10-31 07:53:16",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 07:53:16",
          "field_id": "1241",
          "fillup_form_id": "597",
          "id": "1125",
          "updated_at": "2022-10-31 07:53:16",
          "field": {
            "__typename": "Field",
            "id": "1241",
            "form_id": "606",
            "component_id": "133",
            "uuid": "58a7c63a-c0d7-4df8-9604-3f5a856e4ca4",
            "sort_order": 3,
            "created_at": "2022-10-31 04:35:29",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7068",
                "property_id": "210",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "d3c7c492-30bd-49b0-9474-b5d626d18fb2",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7069",
                "property_id": "215",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "bc945f08-964d-4c8c-bbef-3c8f80ed28a8",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7065",
                "property_id": "214",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "1c31caca-2bf3-4224-bbaf-bee94a8440ae",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7066",
                "property_id": "213",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "2e528c28-8dd2-4264-a52a-625f2fd7b3f3",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7067",
                "property_id": "212",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "61850435-ff5a-4bed-b6b0-cd992fa2ae23",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Worktype"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "596",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 04:58:13",
      "updated_at": "2022-10-31 04:58:13",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:58:13",
          "field_id": "1238",
          "fillup_form_id": "596",
          "id": "1118",
          "updated_at": "2022-10-31 04:58:13",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:58:13",
          "field_id": "1239",
          "fillup_form_id": "596",
          "id": "1119",
          "updated_at": "2022-10-31 04:58:13",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:58:13",
          "field_id": "1240",
          "fillup_form_id": "596",
          "id": "1120",
          "updated_at": "2022-10-31 04:58:13",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 04:58:13",
          "field_id": "1241",
          "fillup_form_id": "596",
          "id": "1121",
          "updated_at": "2022-10-31 04:58:13",
          "field": {
            "__typename": "Field",
            "id": "1241",
            "form_id": "606",
            "component_id": "133",
            "uuid": "58a7c63a-c0d7-4df8-9604-3f5a856e4ca4",
            "sort_order": 3,
            "created_at": "2022-10-31 04:35:29",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7068",
                "property_id": "210",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "d3c7c492-30bd-49b0-9474-b5d626d18fb2",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7069",
                "property_id": "215",
                "updated_at": "2022-10-31 04:35:29",
                "uuid": "bc945f08-964d-4c8c-bbef-3c8f80ed28a8",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7065",
                "property_id": "214",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "1c31caca-2bf3-4224-bbaf-bee94a8440ae",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7066",
                "property_id": "213",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "2e528c28-8dd2-4264-a52a-625f2fd7b3f3",
                "value": "worktype2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 04:35:29",
                "field_id": "1241",
                "id": "7067",
                "property_id": "212",
                "updated_at": "2022-10-31 04:35:40",
                "uuid": "61850435-ff5a-4bed-b6b0-cd992fa2ae23",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Worktype"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "595",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 04:23:59",
      "updated_at": "2022-10-31 08:06:36",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[12,14]",
          "created_at": "2022-10-31 04:23:59",
          "field_id": "1238",
          "fillup_form_id": "595",
          "id": "1115",
          "updated_at": "2022-10-31 08:06:36",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[]",
          "created_at": "2022-10-31 04:23:59",
          "field_id": "1239",
          "fillup_form_id": "595",
          "id": "1116",
          "updated_at": "2022-10-31 08:06:36",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[]",
          "created_at": "2022-10-31 04:23:59",
          "field_id": "1240",
          "fillup_form_id": "595",
          "id": "1117",
          "updated_at": "2022-10-31 08:06:36",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "594",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":2.9848216,\"lng\":101.4717083}",
      "status": 1,
      "created_at": "2022-10-31 04:19:07",
      "updated_at": "2022-10-31 04:19:07",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:19:07",
          "field_id": "1238",
          "fillup_form_id": "594",
          "id": "1112",
          "updated_at": "2022-10-31 04:19:07",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:19:07",
          "field_id": "1239",
          "fillup_form_id": "594",
          "id": "1113",
          "updated_at": "2022-10-31 04:19:07",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 04:19:07",
          "field_id": "1240",
          "fillup_form_id": "594",
          "id": "1114",
          "updated_at": "2022-10-31 04:19:07",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "593",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":2.9848192,\"lng\":101.4717306}",
      "status": 1,
      "created_at": "2022-10-31 04:14:03",
      "updated_at": "2022-10-31 04:14:03",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:14:03",
          "field_id": "1238",
          "fillup_form_id": "593",
          "id": "1109",
          "updated_at": "2022-10-31 04:14:03",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 04:14:03",
          "field_id": "1239",
          "fillup_form_id": "593",
          "id": "1110",
          "updated_at": "2022-10-31 04:14:03",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[1]",
          "created_at": "2022-10-31 04:14:03",
          "field_id": "1240",
          "fillup_form_id": "593",
          "id": "1111",
          "updated_at": "2022-10-31 04:14:03",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "592",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":2.9847946,\"lng\":101.4717728}",
      "status": 1,
      "created_at": "2022-10-31 03:28:54",
      "updated_at": "2022-10-31 03:28:54",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 03:28:54",
          "field_id": "1238",
          "fillup_form_id": "592",
          "id": "1106",
          "updated_at": "2022-10-31 03:28:54",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 03:28:54",
          "field_id": "1239",
          "fillup_form_id": "592",
          "id": "1107",
          "updated_at": "2022-10-31 03:28:54",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[1]",
          "created_at": "2022-10-31 03:28:54",
          "field_id": "1240",
          "fillup_form_id": "592",
          "id": "1108",
          "updated_at": "2022-10-31 03:28:54",
          "field": {
            "__typename": "Field",
            "id": "1240",
            "form_id": "606",
            "component_id": "129",
            "uuid": "ff4a8c35-1a88-4e19-a8fe-42a75523ff37",
            "sort_order": 2,
            "created_at": "2022-10-31 03:11:25",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7063",
                "property_id": "210",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "75d85587-2bb3-4343-8244-9f56da4dea9e",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7064",
                "property_id": "215",
                "updated_at": "2022-10-31 03:11:25",
                "uuid": "23b1bccf-1262-4e37-a8f9-23506e34a4ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7062",
                "property_id": "212",
                "updated_at": "2022-10-31 03:11:30",
                "uuid": "aaf63184-0158-4a95-befd-4278b04862eb",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7060",
                "property_id": "214",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "07caa34e-8789-4771-a407-d78334423d5f",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 03:11:25",
                "field_id": "1240",
                "id": "7061",
                "property_id": "213",
                "updated_at": "2022-10-31 03:24:38",
                "uuid": "665bcfb8-1d52-4e32-9a1d-28348bd37de6",
                "value": "project2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Project"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "591",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":2.9848342,\"lng\":101.471723}",
      "status": 1,
      "created_at": "2022-10-31 03:00:40",
      "updated_at": "2022-10-31 03:00:40",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[1,2]",
          "created_at": "2022-10-31 03:00:40",
          "field_id": "1238",
          "fillup_form_id": "591",
          "id": "1104",
          "updated_at": "2022-10-31 03:00:40",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 03:00:40",
          "field_id": "1239",
          "fillup_form_id": "591",
          "id": "1105",
          "updated_at": "2022-10-31 03:00:40",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "590",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 02:16:37",
      "updated_at": "2022-10-31 02:16:37",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 02:16:37",
          "field_id": "1238",
          "fillup_form_id": "590",
          "id": "1102",
          "updated_at": "2022-10-31 02:16:37",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[0]",
          "created_at": "2022-10-31 02:16:37",
          "field_id": "1239",
          "fillup_form_id": "590",
          "id": "1103",
          "updated_at": "2022-10-31 02:16:37",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "589",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-31 01:58:22",
      "updated_at": "2022-10-31 01:58:22",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-31 01:58:22",
          "field_id": "1238",
          "fillup_form_id": "589",
          "id": "1100",
          "updated_at": "2022-10-31 01:58:22",
          "field": {
            "__typename": "Field",
            "id": "1238",
            "form_id": "606",
            "component_id": "124",
            "uuid": "5630e7d4-7db2-43d8-9d45-b83dd48ccd36",
            "sort_order": 0,
            "created_at": "2022-10-31 01:55:22",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7053",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "a73e900d-97f6-4f5f-a3f1-4f7a085d08b9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7054",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:22",
                "uuid": "83f69370-8583-43ea-b321-f777a941bbbd",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7050",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "e601ec8d-367f-4d01-85f6-d9149d43cea7",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7051",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "4d76812f-7938-44f0-9324-94df619bd1ef",
                "value": "contact2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:22",
                "field_id": "1238",
                "id": "7052",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:32",
                "uuid": "0867cbee-949a-498d-b824-7d1384b2d8f9",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Contact"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "[1]",
          "created_at": "2022-10-31 01:58:22",
          "field_id": "1239",
          "fillup_form_id": "589",
          "id": "1101",
          "updated_at": "2022-10-31 01:58:22",
          "field": {
            "__typename": "Field",
            "id": "1239",
            "form_id": "606",
            "component_id": "127",
            "uuid": "8a00abc6-55f8-4c6e-9fc1-0ed6b5618160",
            "sort_order": 1,
            "created_at": "2022-10-31 01:55:37",
            "updated_at": "2022-10-31 04:35:40",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7058",
                "property_id": "210",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "563d45ac-91a6-4e56-96a6-cb5e7a253065",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7059",
                "property_id": "215",
                "updated_at": "2022-10-31 01:55:37",
                "uuid": "595c2701-bedb-4131-9372-991702ac95b5",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7055",
                "property_id": "214",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "b6288860-b322-4b8e-ba75-710885fa46e7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7056",
                "property_id": "213",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "a24db8af-4c59-47ba-9367-f30c643dd6c7",
                "value": "company2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-31 01:55:37",
                "field_id": "1239",
                "id": "7057",
                "property_id": "212",
                "updated_at": "2022-10-31 01:55:44",
                "uuid": "5d982ccd-de51-4490-abb4-f1ba113060b2",
                "value": "false",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Company"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "588",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-28 08:07:39",
      "updated_at": "2022-10-28 08:07:39",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[1]",
          "created_at": "2022-10-28 08:07:39",
          "field_id": "1213",
          "fillup_form_id": "588",
          "id": "1095",
          "updated_at": "2022-10-28 08:07:39",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[]",
          "created_at": "2022-10-28 08:07:39",
          "field_id": "1214",
          "fillup_form_id": "588",
          "id": "1096",
          "updated_at": "2022-10-28 08:07:39",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[8,7]",
          "created_at": "2022-10-28 08:07:39",
          "field_id": "1223",
          "fillup_form_id": "588",
          "id": "1097",
          "updated_at": "2022-10-28 08:07:39",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 08:07:39",
          "field_id": "1233",
          "fillup_form_id": "588",
          "id": "1098",
          "updated_at": "2022-10-28 08:07:39",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"2022-10-28\"",
          "created_at": "2022-10-28 08:07:39",
          "field_id": "1236",
          "fillup_form_id": "588",
          "id": "1099",
          "updated_at": "2022-10-28 08:07:39",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "587",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-28 06:17:09",
      "updated_at": "2022-10-28 06:17:09",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 06:17:09",
          "field_id": "1213",
          "fillup_form_id": "587",
          "id": "1090",
          "updated_at": "2022-10-28 06:17:09",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 06:17:09",
          "field_id": "1214",
          "fillup_form_id": "587",
          "id": "1091",
          "updated_at": "2022-10-28 06:17:09",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[6,7]",
          "created_at": "2022-10-28 06:17:09",
          "field_id": "1223",
          "fillup_form_id": "587",
          "id": "1092",
          "updated_at": "2022-10-28 06:17:09",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 06:17:09",
          "field_id": "1233",
          "fillup_form_id": "587",
          "id": "1093",
          "updated_at": "2022-10-28 06:17:09",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"2022-4-27\"",
          "created_at": "2022-10-28 06:17:09",
          "field_id": "1236",
          "fillup_form_id": "587",
          "id": "1094",
          "updated_at": "2022-10-28 06:18:18",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "586",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-28 04:29:52",
      "updated_at": "2022-10-28 04:29:52",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "[6,7]",
          "created_at": "2022-10-28 04:29:52",
          "field_id": "1223",
          "fillup_form_id": "586",
          "id": "1088",
          "updated_at": "2022-10-28 04:29:52",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:29:52",
          "field_id": "1233",
          "fillup_form_id": "586",
          "id": "1089",
          "updated_at": "2022-10-28 04:29:52",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:29:52",
          "field_id": "1213",
          "fillup_form_id": "586",
          "id": "1086",
          "updated_at": "2022-10-28 04:29:52",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:29:52",
          "field_id": "1214",
          "fillup_form_id": "586",
          "id": "1087",
          "updated_at": "2022-10-28 04:29:52",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "585",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":37.785834,\"lng\":-122.406417}",
      "status": 1,
      "created_at": "2022-10-28 04:28:35",
      "updated_at": "2022-10-28 04:28:35",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:28:35",
          "field_id": "1213",
          "fillup_form_id": "585",
          "id": "1082",
          "updated_at": "2022-10-28 04:28:35",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:28:35",
          "field_id": "1214",
          "fillup_form_id": "585",
          "id": "1083",
          "updated_at": "2022-10-28 04:28:35",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[1,2]",
          "created_at": "2022-10-28 04:28:35",
          "field_id": "1223",
          "fillup_form_id": "585",
          "id": "1084",
          "updated_at": "2022-10-28 04:28:35",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 04:28:35",
          "field_id": "1233",
          "fillup_form_id": "585",
          "id": "1085",
          "updated_at": "2022-10-28 04:28:35",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "584",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "{\"lat\":2.9848074,\"lng\":101.4717709}",
      "status": 1,
      "created_at": "2022-10-28 02:41:41",
      "updated_at": "2022-10-28 02:41:41",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 02:41:41",
          "field_id": "1213",
          "fillup_form_id": "584",
          "id": "1078",
          "updated_at": "2022-10-28 02:41:41",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 02:41:41",
          "field_id": "1214",
          "fillup_form_id": "584",
          "id": "1079",
          "updated_at": "2022-10-28 02:41:41",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[3,5]",
          "created_at": "2022-10-28 02:41:41",
          "field_id": "1223",
          "fillup_form_id": "584",
          "id": "1080",
          "updated_at": "2022-10-28 02:41:41",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "",
          "created_at": "2022-10-28 02:41:41",
          "field_id": "1233",
          "fillup_form_id": "584",
          "id": "1081",
          "updated_at": "2022-10-28 02:41:41",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "583",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "606",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-26 02:25:47",
      "updated_at": "2022-10-26 02:25:47",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "606",
        "uuid": "943334c9-8b21-4d9b-8cbb-4b840c9c1ba8",
        "name": "Teoh Dynamic Form",
        "description": "Teoh Dynamic Form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-26 02:25:47",
          "field_id": "1198",
          "fillup_form_id": "583",
          "id": "1074",
          "updated_at": "2022-10-26 02:25:47",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-26 02:25:47",
          "field_id": "1201",
          "fillup_form_id": "583",
          "id": "1075",
          "updated_at": "2022-10-26 02:25:47",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-26 02:25:47",
          "field_id": "1213",
          "fillup_form_id": "583",
          "id": "1076",
          "updated_at": "2022-10-26 02:25:47",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-26 02:25:47",
          "field_id": "1214",
          "fillup_form_id": "583",
          "id": "1077",
          "updated_at": "2022-10-26 02:25:47",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "581",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "585",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-14 06:43:37",
      "updated_at": "2022-10-14 06:43:37",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "585",
        "uuid": "ff08a634-334a-4560-98db-0267a2cedd50",
        "name": "test form -earl",
        "description": "test form -earl"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"asda\"",
          "created_at": "2022-10-14 06:43:37",
          "field_id": "1177",
          "fillup_form_id": "581",
          "id": "1072",
          "updated_at": "2022-10-14 06:43:37",
          "field": {
            "__typename": "Field",
            "id": "1177",
            "form_id": "585",
            "component_id": "101",
            "uuid": "ca89929f-9cf1-4746-a051-71f4a891dcfb",
            "sort_order": 0,
            "created_at": "2022-10-14 06:43:10",
            "updated_at": "2022-10-14 06:43:23",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6727",
                "property_id": "214",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "4f9ce6bf-a32c-4149-8518-19c1e3e24849",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6728",
                "property_id": "213",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "52d111cd-4136-4b5e-9854-7cb19e7639a0",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6729",
                "property_id": "201",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "1341a38a-a399-441b-a570-93c233acad7b",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6730",
                "property_id": "212",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "e12ccad5-24b1-43eb-b923-1967ca333158",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6731",
                "property_id": "210",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "f57c3592-f4df-4b85-86de-ea66a5a115f7",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 06:43:10",
                "field_id": "1177",
                "id": "6732",
                "property_id": "215",
                "updated_at": "2022-10-14 06:43:10",
                "uuid": "823cd5e0-9664-4888-b057-5863e52c2794",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "580",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "584",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-14 02:27:22",
      "updated_at": "2022-10-14 02:27:22",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "584",
        "uuid": "6a3f4d16-bafb-49d9-b715-6b8b6e4af64b",
        "name": "test form earl sig",
        "description": "test form earl sig"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-14 02:27:22",
          "field_id": "1176",
          "fillup_form_id": "580",
          "id": "1071",
          "updated_at": "2022-10-14 02:27:22",
          "field": {
            "__typename": "Field",
            "id": "1176",
            "form_id": "584",
            "component_id": "109",
            "uuid": "0f198565-6890-4b6a-b19a-c0f5c89ae4b9",
            "sort_order": 0,
            "created_at": "2022-10-14 02:25:29",
            "updated_at": "2022-10-14 02:25:54",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6722",
                "property_id": "214",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "79422b78-1071-414d-9767-263fea838ec7",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6723",
                "property_id": "213",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "fd1c9a21-5583-4b16-91e8-d0c226344dea",
                "value": "Label1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6724",
                "property_id": "212",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "04a9255b-11ea-4b01-bc90-50cd08ae8785",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6725",
                "property_id": "210",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "a05d64ad-3f9d-4164-bc1a-da4f7261d1bd",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6726",
                "property_id": "215",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "cbdbb49a-8c00-4e4a-87c5-56bca328236f",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Signature"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "579",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "584",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-14 02:26:16",
      "updated_at": "2022-10-14 02:26:16",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "584",
        "uuid": "6a3f4d16-bafb-49d9-b715-6b8b6e4af64b",
        "name": "test form earl sig",
        "description": "test form earl sig"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-14 02:26:16",
          "field_id": "1176",
          "fillup_form_id": "579",
          "id": "1070",
          "updated_at": "2022-10-14 02:26:16",
          "field": {
            "__typename": "Field",
            "id": "1176",
            "form_id": "584",
            "component_id": "109",
            "uuid": "0f198565-6890-4b6a-b19a-c0f5c89ae4b9",
            "sort_order": 0,
            "created_at": "2022-10-14 02:25:29",
            "updated_at": "2022-10-14 02:25:54",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6722",
                "property_id": "214",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "79422b78-1071-414d-9767-263fea838ec7",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6723",
                "property_id": "213",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "fd1c9a21-5583-4b16-91e8-d0c226344dea",
                "value": "Label1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6724",
                "property_id": "212",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "04a9255b-11ea-4b01-bc90-50cd08ae8785",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6725",
                "property_id": "210",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "a05d64ad-3f9d-4164-bc1a-da4f7261d1bd",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:25:29",
                "field_id": "1176",
                "id": "6726",
                "property_id": "215",
                "updated_at": "2022-10-14 02:25:29",
                "uuid": "cbdbb49a-8c00-4e4a-87c5-56bca328236f",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Signature"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "578",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "583",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-14 02:19:00",
      "updated_at": "2022-10-14 02:19:00",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "583",
        "uuid": "cf214374-acc0-49fd-b608-00ac1290c951",
        "name": "form test -earl",
        "description": "form test -earl"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"rereer\"",
          "created_at": "2022-10-14 02:19:00",
          "field_id": "1174",
          "fillup_form_id": "578",
          "id": "1068",
          "updated_at": "2022-10-14 02:19:00",
          "field": {
            "__typename": "Field",
            "id": "1174",
            "form_id": "583",
            "component_id": "101",
            "uuid": "a17be0ef-c38d-4a61-954e-2e3d99eb30aa",
            "sort_order": 0,
            "created_at": "2022-10-11 06:12:53",
            "updated_at": "2022-10-14 02:15:00",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6711",
                "property_id": "214",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "ab77cfe3-59ae-4bc0-a257-5ea185d44b9e",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6712",
                "property_id": "213",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "68f1d87c-079b-4d09-9a20-c776dabc9dca",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6713",
                "property_id": "201",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "6dd796b7-c0c9-4a9c-bf65-0cce8e11a2c6",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6714",
                "property_id": "212",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "1f0524dc-19d1-4cfd-96fe-1391d20dea2a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6715",
                "property_id": "210",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "2b3382d5-c934-44f6-959e-4d9d5790ef7f",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6716",
                "property_id": "215",
                "updated_at": "2022-10-14 02:15:00",
                "uuid": "370e3e14-ed30-4416-9aea-76614e21b8c3",
                "value": "rereer",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-14 02:19:00",
          "field_id": "1175",
          "fillup_form_id": "578",
          "id": "1069",
          "updated_at": "2022-10-14 02:19:00",
          "field": {
            "__typename": "Field",
            "id": "1175",
            "form_id": "583",
            "component_id": "109",
            "uuid": "541c5e9b-323f-4a03-8bc2-a318a9e078f7",
            "sort_order": 1,
            "created_at": "2022-10-14 02:14:34",
            "updated_at": "2022-10-14 02:15:00",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6717",
                "property_id": "214",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "e2ad1635-4ebe-470c-90b4-9052e3b3ee42",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6718",
                "property_id": "213",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "3dedf5d8-a7b1-4b42-8b0d-c1ccb2a0c827",
                "value": "Label2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6719",
                "property_id": "212",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "9f739bfe-9190-404e-922c-2eb2518acb79",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6720",
                "property_id": "210",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "7ec0121e-794c-49cc-8a0d-a645ff52ec1b",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6721",
                "property_id": "215",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "adb9a400-ac96-4662-bf0d-d474f3fa3d56",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Signature"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "577",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "583",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-14 02:16:07",
      "updated_at": "2022-10-14 02:16:07",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "583",
        "uuid": "cf214374-acc0-49fd-b608-00ac1290c951",
        "name": "form test -earl",
        "description": "form test -earl"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"rereer\"",
          "created_at": "2022-10-14 02:16:07",
          "field_id": "1174",
          "fillup_form_id": "577",
          "id": "1066",
          "updated_at": "2022-10-14 02:16:07",
          "field": {
            "__typename": "Field",
            "id": "1174",
            "form_id": "583",
            "component_id": "101",
            "uuid": "a17be0ef-c38d-4a61-954e-2e3d99eb30aa",
            "sort_order": 0,
            "created_at": "2022-10-11 06:12:53",
            "updated_at": "2022-10-14 02:15:00",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6711",
                "property_id": "214",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "ab77cfe3-59ae-4bc0-a257-5ea185d44b9e",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6712",
                "property_id": "213",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "68f1d87c-079b-4d09-9a20-c776dabc9dca",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6713",
                "property_id": "201",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "6dd796b7-c0c9-4a9c-bf65-0cce8e11a2c6",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6714",
                "property_id": "212",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "1f0524dc-19d1-4cfd-96fe-1391d20dea2a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6715",
                "property_id": "210",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "2b3382d5-c934-44f6-959e-4d9d5790ef7f",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6716",
                "property_id": "215",
                "updated_at": "2022-10-14 02:15:00",
                "uuid": "370e3e14-ed30-4416-9aea-76614e21b8c3",
                "value": "rereer",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "\"\"",
          "created_at": "2022-10-14 02:16:07",
          "field_id": "1175",
          "fillup_form_id": "577",
          "id": "1067",
          "updated_at": "2022-10-14 02:16:07",
          "field": {
            "__typename": "Field",
            "id": "1175",
            "form_id": "583",
            "component_id": "109",
            "uuid": "541c5e9b-323f-4a03-8bc2-a318a9e078f7",
            "sort_order": 1,
            "created_at": "2022-10-14 02:14:34",
            "updated_at": "2022-10-14 02:15:00",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6717",
                "property_id": "214",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "e2ad1635-4ebe-470c-90b4-9052e3b3ee42",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6718",
                "property_id": "213",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "3dedf5d8-a7b1-4b42-8b0d-c1ccb2a0c827",
                "value": "Label2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6719",
                "property_id": "212",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "9f739bfe-9190-404e-922c-2eb2518acb79",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6720",
                "property_id": "210",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "7ec0121e-794c-49cc-8a0d-a645ff52ec1b",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-14 02:14:34",
                "field_id": "1175",
                "id": "6721",
                "property_id": "215",
                "updated_at": "2022-10-14 02:14:34",
                "uuid": "adb9a400-ac96-4662-bf0d-d474f3fa3d56",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Signature"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "576",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "583",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": null,
      "approved_by": null,
      "geo": "-",
      "status": 0,
      "created_at": "2022-10-11 06:13:13",
      "updated_at": "2022-10-11 06:13:13",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "583",
        "uuid": "cf214374-acc0-49fd-b608-00ac1290c951",
        "name": "form test -earl",
        "description": "form test -earl"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "\"test\"",
          "created_at": "2022-10-11 06:13:13",
          "field_id": "1174",
          "fillup_form_id": "576",
          "id": "1065",
          "updated_at": "2022-10-11 06:13:13",
          "field": {
            "__typename": "Field",
            "id": "1174",
            "form_id": "583",
            "component_id": "101",
            "uuid": "a17be0ef-c38d-4a61-954e-2e3d99eb30aa",
            "sort_order": 0,
            "created_at": "2022-10-11 06:12:53",
            "updated_at": "2022-10-14 02:15:00",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6711",
                "property_id": "214",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "ab77cfe3-59ae-4bc0-a257-5ea185d44b9e",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6712",
                "property_id": "213",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "68f1d87c-079b-4d09-9a20-c776dabc9dca",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6713",
                "property_id": "201",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "6dd796b7-c0c9-4a9c-bf65-0cce8e11a2c6",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6714",
                "property_id": "212",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "1f0524dc-19d1-4cfd-96fe-1391d20dea2a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6715",
                "property_id": "210",
                "updated_at": "2022-10-11 06:12:53",
                "uuid": "2b3382d5-c934-44f6-959e-4d9d5790ef7f",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-10-11 06:12:53",
                "field_id": "1174",
                "id": "6716",
                "property_id": "215",
                "updated_at": "2022-10-14 02:15:00",
                "uuid": "370e3e14-ed30-4416-9aea-76614e21b8c3",
                "value": "rereer",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "575",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-10-01 03:54:02",
      "updated_at": "2022-10-01 03:54:02",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "3LV3bzi8mR3HAWiDL4g52wpTk1huOUULl1PoYgIH.png",
          "created_at": "2022-10-01 03:54:02",
          "field_id": "1051",
          "fillup_form_id": "575",
          "id": "1064",
          "updated_at": "2022-10-01 03:54:02",
          "field": {
            "__typename": "Field",
            "id": "1051",
            "form_id": "504",
            "component_id": "109",
            "uuid": "91b3cc37-f7ff-4790-a65a-7126c41b3703",
            "sort_order": 1,
            "created_at": "2022-09-30 09:56:57",
            "updated_at": "2022-09-30 09:56:57",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-30 09:56:57",
                "field_id": "1051",
                "id": "6002",
                "property_id": "214",
                "updated_at": "2022-09-30 09:56:57",
                "uuid": "510dfd82-395f-492c-a72b-bab6d388ac3c",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-30 09:56:57",
                "field_id": "1051",
                "id": "6003",
                "property_id": "213",
                "updated_at": "2022-09-30 09:56:57",
                "uuid": "f45e090f-25b7-4b05-86b5-c7d283963a8c",
                "value": "Label2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-30 09:56:57",
                "field_id": "1051",
                "id": "6004",
                "property_id": "212",
                "updated_at": "2022-09-30 09:56:57",
                "uuid": "c410304a-9eb8-41d4-98d1-53cf78c56dcb",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-30 09:56:57",
                "field_id": "1051",
                "id": "6005",
                "property_id": "210",
                "updated_at": "2022-09-30 09:56:57",
                "uuid": "74aad428-81e0-4523-806e-3da945d7b822",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-30 09:56:57",
                "field_id": "1051",
                "id": "6006",
                "property_id": "215",
                "updated_at": "2022-09-30 09:56:57",
                "uuid": "713addf4-8c55-4423-bae2-5886f1461a28",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Signature"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "569",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 09:12:15",
      "updated_at": "2022-09-28 09:12:38",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "55555",
          "created_at": "2022-09-28 09:12:15",
          "field_id": "796",
          "fillup_form_id": "569",
          "id": "938",
          "updated_at": "2022-09-28 09:12:29",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "568",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 09:02:20",
      "updated_at": "2022-09-28 09:02:20",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "333333",
          "created_at": "2022-09-28 09:02:20",
          "field_id": "796",
          "fillup_form_id": "568",
          "id": "937",
          "updated_at": "2022-09-28 09:02:20",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "567",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 08:21:16",
      "updated_at": "2022-09-28 08:21:16",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "1111",
          "created_at": "2022-09-28 08:21:16",
          "field_id": "796",
          "fillup_form_id": "567",
          "id": "936",
          "updated_at": "2022-09-28 08:21:16",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "566",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 08:18:51",
      "updated_at": "2022-09-28 08:18:51",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "11111",
          "created_at": "2022-09-28 08:18:51",
          "field_id": "792",
          "fillup_form_id": "566",
          "id": "934",
          "updated_at": "2022-09-28 08:18:51",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "2222",
          "created_at": "2022-09-28 08:18:51",
          "field_id": "794",
          "fillup_form_id": "566",
          "id": "935",
          "updated_at": "2022-09-28 08:18:51",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "565",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 08:17:56",
      "updated_at": "2022-09-28 08:17:56",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "1111",
          "created_at": "2022-09-28 08:17:56",
          "field_id": "792",
          "fillup_form_id": "565",
          "id": "932",
          "updated_at": "2022-09-28 08:17:56",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "2222",
          "created_at": "2022-09-28 08:17:56",
          "field_id": "793",
          "fillup_form_id": "565",
          "id": "933",
          "updated_at": "2022-09-28 08:17:56",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "564",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 08:16:11",
      "updated_at": "2022-09-28 08:16:11",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "22222",
          "created_at": "2022-09-28 08:16:11",
          "field_id": "791",
          "fillup_form_id": "564",
          "id": "931",
          "updated_at": "2022-09-28 08:16:11",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "563",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 08:14:35",
      "updated_at": "2022-09-28 08:14:35",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "1111",
          "created_at": "2022-09-28 08:14:35",
          "field_id": "790",
          "fillup_form_id": "563",
          "id": "930",
          "updated_at": "2022-09-28 08:14:35",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "562",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "116",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 04:18:56",
      "updated_at": "2022-09-28 04:18:56",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "116",
        "uuid": "67492369-1c55-45ac-9eb7-483698d11c8f",
        "name": "New form dfadfad fadsfd f - test adfter merge of template",
        "description": "New form dfad fadfadsf"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "https://api-staging.sanspaper.com/storage/public/photo-uploads/BZlQBMaFIu4fuLy4T9nCaF71tjrgTfL5l5Hl4MeC.jpg",
          "created_at": "2022-09-28 04:18:56",
          "field_id": "462",
          "fillup_form_id": "562",
          "id": "927",
          "updated_at": "2022-09-28 04:18:56",
          "field": {
            "__typename": "Field",
            "id": "462",
            "form_id": "116",
            "component_id": "125",
            "uuid": "933e711d-9953-4fe7-a84b-db483670628a",
            "sort_order": 0,
            "created_at": "2022-09-26 08:15:13",
            "updated_at": "2022-09-26 08:15:13",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2573",
                "property_id": "214",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "c697d546-42b3-4ddc-8e92-1032e450494b",
                "value": "Name-3",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2574",
                "property_id": "213",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "202888a7-ad11-495f-9454-3c6159b61bb9",
                "value": "Label 3",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2575",
                "property_id": "207",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "b1b5d5c6-a844-4722-ac1b-606b02ac9006",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "207",
                  "description": "ImageSource"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2576",
                "property_id": "212",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "2a99ef1e-9f47-4c3d-be75-ced1b68eb7b5",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2577",
                "property_id": "210",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "2ed8cd95-6d65-436c-a111-bc025c9ffe5f",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 08:15:13",
                "field_id": "462",
                "id": "2578",
                "property_id": "215",
                "updated_at": "2022-09-26 08:15:13",
                "uuid": "35c5c955-06fc-4d49-93d1-971d8e340f1d",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Photo"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "111122",
          "created_at": "2022-09-28 04:18:56",
          "field_id": "454",
          "fillup_form_id": "562",
          "id": "928",
          "updated_at": "2022-09-28 04:18:56",
          "field": {
            "__typename": "Field",
            "id": "454",
            "form_id": "116",
            "component_id": "101",
            "uuid": "a028fb12-40ad-46ae-ba97-296279949769",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:21",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2526",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "5de29b7f-5c12-4180-a38c-cba9d4fc543f",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2527",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "1b2a4563-7c2c-425c-ab97-24d96b2ad83e",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2528",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "fa2835cc-2aba-4553-9a16-812f3c8dc8ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2529",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "9218ffd1-75da-4a01-aa2a-753bc9ef98a9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2530",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "0cb2defc-7b74-4518-b984-fc6e5b136376",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2531",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "c8b58a5e-3f10-4e2f-92bb-b4811a4dd487",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "2222",
          "created_at": "2022-09-28 04:18:56",
          "field_id": "455",
          "fillup_form_id": "562",
          "id": "929",
          "updated_at": "2022-09-28 04:18:56",
          "field": {
            "__typename": "Field",
            "id": "455",
            "form_id": "116",
            "component_id": "101",
            "uuid": "d99b0bd5-6403-4024-9731-c8e6276a20be",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:23",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2532",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "8cec9c59-51a4-4fd1-8a15-4eedfe36fe05",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2533",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "f98ac0ec-fc09-4117-ae55-3e8e3289f423",
                "value": "Label 2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2534",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "63bc7aee-0122-4cf5-beff-2c724243027c",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2535",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "d1382b4e-53af-4c19-b382-b665d86e536a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2536",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "dafd2da1-7eb6-47e9-990c-bcf0512cbb0c",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2537",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "52200262-34f4-49a0-85c3-9ac7d61603db",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "561",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "504",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-28 04:16:50",
      "updated_at": "2022-09-28 04:16:50",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "504",
        "uuid": "99e4fc1e-0b5e-43e3-8a8d-5b2659f98c33",
        "name": "Teoh Form 0928",
        "description": "New form"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "11111",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "767",
          "fillup_form_id": "561",
          "id": "918",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "3",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "768",
          "fillup_form_id": "561",
          "id": "919",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "your@email.com",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "769",
          "fillup_form_id": "561",
          "id": "920",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "Googlee",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "770",
          "fillup_form_id": "561",
          "id": "921",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "3333",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "771",
          "fillup_form_id": "561",
          "id": "922",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "4444",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "772",
          "fillup_form_id": "561",
          "id": "923",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "https://api-staging.sanspaper.com/storage/public/photo-uploads/Y9nnKVRw6DR5ud5R7Yu3UEl3yljpIlTFlAooGqHG.jpg",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "775",
          "fillup_form_id": "561",
          "id": "924",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "5555",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "765",
          "fillup_form_id": "561",
          "id": "925",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "6666",
          "created_at": "2022-09-28 04:16:50",
          "field_id": "766",
          "fillup_form_id": "561",
          "id": "926",
          "updated_at": "2022-09-28 04:16:50",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "557",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "116",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-26 07:52:05",
      "updated_at": "2022-09-26 07:52:05",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "116",
        "uuid": "67492369-1c55-45ac-9eb7-483698d11c8f",
        "name": "New form dfadfad fadsfd f - test adfter merge of template",
        "description": "New form dfad fadfadsf"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "Label3",
          "created_at": "2022-09-26 07:52:05",
          "field_id": "458",
          "fillup_form_id": "557",
          "id": "878",
          "updated_at": "2022-09-26 07:52:05",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "Header",
          "created_at": "2022-09-26 07:52:05",
          "field_id": "459",
          "fillup_form_id": "557",
          "id": "879",
          "updated_at": "2022-09-26 07:52:05",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "4444",
          "created_at": "2022-09-26 07:52:05",
          "field_id": "454",
          "fillup_form_id": "557",
          "id": "880",
          "updated_at": "2022-09-26 07:52:05",
          "field": {
            "__typename": "Field",
            "id": "454",
            "form_id": "116",
            "component_id": "101",
            "uuid": "a028fb12-40ad-46ae-ba97-296279949769",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:21",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2526",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "5de29b7f-5c12-4180-a38c-cba9d4fc543f",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2527",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "1b2a4563-7c2c-425c-ab97-24d96b2ad83e",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2528",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "fa2835cc-2aba-4553-9a16-812f3c8dc8ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2529",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "9218ffd1-75da-4a01-aa2a-753bc9ef98a9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2530",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "0cb2defc-7b74-4518-b984-fc6e5b136376",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2531",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "c8b58a5e-3f10-4e2f-92bb-b4811a4dd487",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "5555",
          "created_at": "2022-09-26 07:52:05",
          "field_id": "455",
          "fillup_form_id": "557",
          "id": "881",
          "updated_at": "2022-09-26 07:52:05",
          "field": {
            "__typename": "Field",
            "id": "455",
            "form_id": "116",
            "component_id": "101",
            "uuid": "d99b0bd5-6403-4024-9731-c8e6276a20be",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:23",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2532",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "8cec9c59-51a4-4fd1-8a15-4eedfe36fe05",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2533",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "f98ac0ec-fc09-4117-ae55-3e8e3289f423",
                "value": "Label 2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2534",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "63bc7aee-0122-4cf5-beff-2c724243027c",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2535",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "d1382b4e-53af-4c19-b382-b665d86e536a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2536",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "dafd2da1-7eb6-47e9-990c-bcf0512cbb0c",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2537",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "52200262-34f4-49a0-85c3-9ac7d61603db",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "556",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "116",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-26 07:41:15",
      "updated_at": "2022-09-26 07:41:15",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "116",
        "uuid": "67492369-1c55-45ac-9eb7-483698d11c8f",
        "name": "New form dfadfad fadsfd f - test adfter merge of template",
        "description": "New form dfad fadfadsf"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "Label3",
          "created_at": "2022-09-26 07:41:15",
          "field_id": "458",
          "fillup_form_id": "556",
          "id": "875",
          "updated_at": "2022-09-26 07:41:15",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "2222",
          "created_at": "2022-09-26 07:41:15",
          "field_id": "454",
          "fillup_form_id": "556",
          "id": "876",
          "updated_at": "2022-09-26 07:41:15",
          "field": {
            "__typename": "Field",
            "id": "454",
            "form_id": "116",
            "component_id": "101",
            "uuid": "a028fb12-40ad-46ae-ba97-296279949769",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:21",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2526",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "5de29b7f-5c12-4180-a38c-cba9d4fc543f",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2527",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "1b2a4563-7c2c-425c-ab97-24d96b2ad83e",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2528",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "fa2835cc-2aba-4553-9a16-812f3c8dc8ff",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2529",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "9218ffd1-75da-4a01-aa2a-753bc9ef98a9",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2530",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "0cb2defc-7b74-4518-b984-fc6e5b136376",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:21",
                "field_id": "454",
                "id": "2531",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:21",
                "uuid": "c8b58a5e-3f10-4e2f-92bb-b4811a4dd487",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        },
        {
          "__typename": "FillupFormField",
          "answer": "3333",
          "created_at": "2022-09-26 07:41:15",
          "field_id": "455",
          "fillup_form_id": "556",
          "id": "877",
          "updated_at": "2022-09-26 07:41:15",
          "field": {
            "__typename": "Field",
            "id": "455",
            "form_id": "116",
            "component_id": "101",
            "uuid": "d99b0bd5-6403-4024-9731-c8e6276a20be",
            "sort_order": 0,
            "created_at": "2022-09-26 06:04:23",
            "updated_at": "2022-09-26 06:06:14",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2532",
                "property_id": "214",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "8cec9c59-51a4-4fd1-8a15-4eedfe36fe05",
                "value": "Name-2",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2533",
                "property_id": "213",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "f98ac0ec-fc09-4117-ae55-3e8e3289f423",
                "value": "Label 2",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2534",
                "property_id": "201",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "63bc7aee-0122-4cf5-beff-2c724243027c",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "201",
                  "description": "Text"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2535",
                "property_id": "212",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "d1382b4e-53af-4c19-b382-b665d86e536a",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2536",
                "property_id": "210",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "dafd2da1-7eb6-47e9-990c-bcf0512cbb0c",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-26 06:04:23",
                "field_id": "455",
                "id": "2537",
                "property_id": "215",
                "updated_at": "2022-09-26 06:04:23",
                "uuid": "52200262-34f4-49a0-85c3-9ac7d61603db",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Textbox"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "550",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-23 02:08:05",
      "updated_at": "2022-09-23 02:08:05",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "https://api-staging.sanspaper.com/storage/public/photo-uploads/ZZP3Qg4RvIKriJkdNTu4bFvLhCTJcoEHpwqSFLGg.jpg",
          "created_at": "2022-09-23 02:08:05",
          "field_id": "402",
          "fillup_form_id": "550",
          "id": "854",
          "updated_at": "2022-09-23 02:10:08",
          "field": {
            "__typename": "Field",
            "id": "402",
            "form_id": "44",
            "component_id": "125",
            "uuid": "bab3d7cb-142e-4713-9a1c-d3a11811de90",
            "sort_order": 0,
            "created_at": "2022-09-21 07:07:31",
            "updated_at": "2022-09-21 07:07:31",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2229",
                "property_id": "214",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "b8746d1f-f585-41e2-b9c1-07a26106974c",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2230",
                "property_id": "213",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "db49b6b2-2359-4960-ab37-0181c913b64d",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2231",
                "property_id": "207",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "1ad7e075-517b-4323-9c81-1c2cc3f4271e",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "207",
                  "description": "ImageSource"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2232",
                "property_id": "212",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "3cee94cf-f77e-4811-89b5-f744efd5bc76",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2233",
                "property_id": "210",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "398188af-d039-4487-b898-7be673b1bc47",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2234",
                "property_id": "215",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "4bb0df57-1890-43dc-b321-796b2680507a",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Photo"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "549",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-22 02:16:47",
      "updated_at": "2022-09-22 02:16:47",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "https://api-staging.sanspaper.com/storage/public/photo-uploads/tKVtQtsuTBpJ1157d5ROM3Q6Afx0vXCozOl3kcDL.jpg",
          "created_at": "2022-09-22 02:16:47",
          "field_id": "402",
          "fillup_form_id": "549",
          "id": "853",
          "updated_at": "2022-09-22 02:16:47",
          "field": {
            "__typename": "Field",
            "id": "402",
            "form_id": "44",
            "component_id": "125",
            "uuid": "bab3d7cb-142e-4713-9a1c-d3a11811de90",
            "sort_order": 0,
            "created_at": "2022-09-21 07:07:31",
            "updated_at": "2022-09-21 07:07:31",
            "fieldProperties": [
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2229",
                "property_id": "214",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "b8746d1f-f585-41e2-b9c1-07a26106974c",
                "value": "Name-1",
                "property": {
                  "__typename": "Property",
                  "id": "214",
                  "description": "Name"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2230",
                "property_id": "213",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "db49b6b2-2359-4960-ab37-0181c913b64d",
                "value": "Label 1",
                "property": {
                  "__typename": "Property",
                  "id": "213",
                  "description": "Label"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2231",
                "property_id": "207",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "1ad7e075-517b-4323-9c81-1c2cc3f4271e",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "207",
                  "description": "ImageSource"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2232",
                "property_id": "212",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "3cee94cf-f77e-4811-89b5-f744efd5bc76",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "212",
                  "description": "Required"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2233",
                "property_id": "210",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "398188af-d039-4487-b898-7be673b1bc47",
                "value": "true",
                "property": {
                  "__typename": "Property",
                  "id": "210",
                  "description": "Visible"
                }
              },
              {
                "__typename": "FieldProperty",
                "created_at": "2022-09-21 07:07:31",
                "field_id": "402",
                "id": "2234",
                "property_id": "215",
                "updated_at": "2022-09-21 07:07:31",
                "uuid": "4bb0df57-1890-43dc-b321-796b2680507a",
                "value": "",
                "property": {
                  "__typename": "Property",
                  "id": "215",
                  "description": "Data"
                }
              }
            ],
            "component": {
              "__typename": "Component",
              "description": "Photo"
            }
          }
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "548",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:21:07",
      "updated_at": "2022-09-21 03:21:07",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "44444",
          "created_at": "2022-09-21 03:21:07",
          "field_id": "387",
          "fillup_form_id": "548",
          "id": "851",
          "updated_at": "2022-09-21 03:21:07",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "94258731-ac04-4392-9b46-556e244054d1",
          "created_at": "2022-09-21 03:21:07",
          "field_id": "388",
          "fillup_form_id": "548",
          "id": "852",
          "updated_at": "2022-09-21 03:21:07",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "547",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:17:14",
      "updated_at": "2022-09-21 03:17:14",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "33333",
          "created_at": "2022-09-21 03:17:14",
          "field_id": "387",
          "fillup_form_id": "547",
          "id": "849",
          "updated_at": "2022-09-21 03:17:14",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 03:17:14",
          "field_id": "388",
          "fillup_form_id": "547",
          "id": "850",
          "updated_at": "2022-09-21 03:17:14",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "546",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:16:34",
      "updated_at": "2022-09-21 03:16:34",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "22222",
          "created_at": "2022-09-21 03:16:34",
          "field_id": "387",
          "fillup_form_id": "546",
          "id": "847",
          "updated_at": "2022-09-21 03:16:52",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 03:16:34",
          "field_id": "388",
          "fillup_form_id": "546",
          "id": "848",
          "updated_at": "2022-09-21 03:16:52",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "545",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:10:19",
      "updated_at": "2022-09-21 03:10:19",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "999999",
          "created_at": "2022-09-21 03:10:19",
          "field_id": "387",
          "fillup_form_id": "545",
          "id": "845",
          "updated_at": "2022-09-21 03:10:19",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "94258731-ac04-4392-9b46-556e244054d1",
          "created_at": "2022-09-21 03:10:19",
          "field_id": "388",
          "fillup_form_id": "545",
          "id": "846",
          "updated_at": "2022-09-21 03:10:19",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "544",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:09:15",
      "updated_at": "2022-09-21 03:09:15",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "88888",
          "created_at": "2022-09-21 03:09:15",
          "field_id": "387",
          "fillup_form_id": "544",
          "id": "843",
          "updated_at": "2022-09-21 03:09:57",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 03:09:15",
          "field_id": "388",
          "fillup_form_id": "544",
          "id": "844",
          "updated_at": "2022-09-21 03:09:15",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "543",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:08:40",
      "updated_at": "2022-09-21 03:08:40",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "6666",
          "created_at": "2022-09-21 03:08:40",
          "field_id": "387",
          "fillup_form_id": "543",
          "id": "841",
          "updated_at": "2022-09-21 03:08:58",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "94258731-ac04-4392-9b46-556e244054d1",
          "created_at": "2022-09-21 03:08:40",
          "field_id": "388",
          "fillup_form_id": "543",
          "id": "842",
          "updated_at": "2022-09-21 03:08:40",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "542",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:05:12",
      "updated_at": "2022-09-21 03:05:12",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "44444",
          "created_at": "2022-09-21 03:05:12",
          "field_id": "387",
          "fillup_form_id": "542",
          "id": "839",
          "updated_at": "2022-09-21 03:05:12",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 03:05:12",
          "field_id": "388",
          "fillup_form_id": "542",
          "id": "840",
          "updated_at": "2022-09-21 03:05:12",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "541",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 03:04:10",
      "updated_at": "2022-09-21 03:04:10",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "33333",
          "created_at": "2022-09-21 03:04:10",
          "field_id": "387",
          "fillup_form_id": "541",
          "id": "837",
          "updated_at": "2022-09-21 03:04:45",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 03:04:10",
          "field_id": "388",
          "fillup_form_id": "541",
          "id": "838",
          "updated_at": "2022-09-21 03:04:10",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "540",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 02:52:30",
      "updated_at": "2022-09-21 02:52:30",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "11111",
          "created_at": "2022-09-21 02:52:30",
          "field_id": "387",
          "fillup_form_id": "540",
          "id": "835",
          "updated_at": "2022-09-21 02:52:30",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 02:52:30",
          "field_id": "388",
          "fillup_form_id": "540",
          "id": "836",
          "updated_at": "2022-09-21 02:52:30",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "539",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 02:46:45",
      "updated_at": "2022-09-21 02:46:45",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "44444",
          "created_at": "2022-09-21 02:46:45",
          "field_id": "387",
          "fillup_form_id": "539",
          "id": "833",
          "updated_at": "2022-09-21 02:46:45",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-21 02:46:45",
          "field_id": "388",
          "fillup_form_id": "539",
          "id": "834",
          "updated_at": "2022-09-21 02:46:45",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "538",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 02:41:50",
      "updated_at": "2022-09-21 02:41:50",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "3333",
          "created_at": "2022-09-21 02:41:50",
          "field_id": "387",
          "fillup_form_id": "538",
          "id": "831",
          "updated_at": "2022-09-21 02:41:50",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "94258731-ac04-4392-9b46-556e244054d1",
          "created_at": "2022-09-21 02:41:50",
          "field_id": "388",
          "fillup_form_id": "538",
          "id": "832",
          "updated_at": "2022-09-21 02:41:50",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "537",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 1,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-21 02:39:40",
      "updated_at": "2022-09-21 02:39:40",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "2222",
          "created_at": "2022-09-21 02:39:40",
          "field_id": "387",
          "fillup_form_id": "537",
          "id": "829",
          "updated_at": "2022-09-21 02:41:22",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "94258731-ac04-4392-9b46-556e244054d1",
          "created_at": "2022-09-21 02:39:40",
          "field_id": "388",
          "fillup_form_id": "537",
          "id": "830",
          "updated_at": "2022-09-21 02:41:22",
          "field": null
        }
      ]
    },
    {
      "__typename": "FillupForm",
      "id": "536",
      "user_id": "6",
      "admin_id": "6",
      "form_id": "44",
      "is_readonly": 1,
      "is_approved": 0,
      "is_draft": 0,
      "approved_by": null,
      "geo": "-",
      "status": 1,
      "created_at": "2022-09-20 08:57:11",
      "updated_at": "2022-09-20 08:57:27",
      "user": {
        "__typename": "User",
        "id": "6",
        "name": "Developer",
        "email": "developers@sanspaper.com"
      },
      "form": {
        "__typename": "Form",
        "id": "44",
        "uuid": "3f3737f3-12dc-4c16-bafd-b471ecb0ef68",
        "name": "Test Form - Sans Paper",
        "description": "Test form by jackie"
      },
      "fillup_form_fields": [
        {
          "__typename": "FillupFormField",
          "answer": "{\"id\":2,\"uuid\":\"a8915066-7f65-4252-8a34-59ec24ebe254\",\"description\":\"Option 2\"}",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "390",
          "fillup_form_id": "536",
          "id": "821",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "{\"timeFormat\":\"16:57 pm\",\"dateFormat\":\"2022-9-20\"}",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "391",
          "fillup_form_id": "536",
          "id": "822",
          "updated_at": "2022-09-20 08:57:27",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "1111",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "387",
          "fillup_form_id": "536",
          "id": "823",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "55b667fd-7d91-4634-875f-54b9a6f780ee",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "388",
          "fillup_form_id": "536",
          "id": "824",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "[\"{\\\"id\\\":1,\\\"uuid\\\":\\\"94fa206e-8882-4257-97ee-d83a3e18101b\\\",\\\"description\\\":\\\"Option 1\\\"}\",\"{\\\"id\\\":2,\\\"uuid\\\":\\\"5193f374-9b5e-45de-9639-35252bb6e6c4\\\",\\\"description\\\":\\\"Option 2\\\"}\"]",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "389",
          "fillup_form_id": "536",
          "id": "825",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "9mIAAQiNTMgFLBXhcWCT3ZIoznNohC9khY27qtgK.png",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "392",
          "fillup_form_id": "536",
          "id": "826",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "https://api-staging.sanspaper.com/storage/public/photo-uploads/jWbzBSKUnyfXbaoTQTtTUsXSS06ppNqfO6acnitA.jpg",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "393",
          "fillup_form_id": "536",
          "id": "827",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        },
        {
          "__typename": "FillupFormField",
          "answer": "true",
          "created_at": "2022-09-20 08:57:11",
          "field_id": "394",
          "fillup_form_id": "536",
          "id": "828",
          "updated_at": "2022-09-20 08:57:11",
          "field": null
        }
      ]
    }
  ];

  const userData = useSelector(selectUserData);

  const [selected, setSelected] = useState(0);
  const [historyForms, setHistoryForms] = useState([]);
  
  //get user Id
  let getUserId;

  if (userData) {
    getUserId = userData.id;
  }

  const { loading, error, data, refetch } = useQuery(GET_HISTORY_FORMS, {
    variables: {
      userId: getUserId,
    },
  });

  const onPressItem = async (formData: any) => {

    switch (formData.is_draft) {
      case 0:
        pushScreenOnHistoryScreen({
          componentId: Screens.FILLEDUP_FORM_FIELDS_SCREEN,
          passProps: { formData },
        });
        break;

      case 1:
        pushScreenOnHistoryScreen({
          componentId: Screens.DRAFT_FORM_FIELDS_SCREEN,
          passProps: { formData },
        });
        break;

      default:
        break;
    }

  };


  useEffect(() => {
    let result = [];

    dispatch(FormActionLoadHistoryData(data?.fillupForms?.data));
  }, [data]);

  useEffect(() => {
    setHistoryForms(historyData);
  }, [historyData]);

  const renderHistory = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.itemContainer}>
        <View style={styles.titleView}>
          <Text style={styles.itemLabel}>{item.form.name} (ID: {item.id})</Text>
          <Text style={styles.itemDescription}>{item.form.description}</Text>
          <Text style={styles.itemSubmitted}>Submitted on {item.created_at.slice(0, -3)}</Text>
          <Text style={styles.itemDescription}>Updated on {item.updated_at.slice(0, -3)}</Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.statusLabel}>{item.is_draft == 0 ? 'Submitted' : 'Draft'}</Text>
          <Icon name="navigate-next" color={Colors.Black} />
        </View>

      </TouchableOpacity>
    );
  };

  const compareName = (a, b) => {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.is_draft;
    const name2 = b.is_draft;

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  const filterData = value => {
    let result = [];

    //filter data
    if (value == 0 || value == 1) {
      data?.fillupForms?.data.map((item: any, key: number) => {

        if (item.is_draft == value) {
          result.push(item)
        }

      })

      setHistoryForms(result);

    } else {
      //show all datas
      setHistoryForms(data?.fillupForms?.data);
    }

  }

  const sortAscDesc = value => {
    let theData = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    if (value == 'asc') {
      //sort by id asc
      theData.sort((a, b) => (a.id > b.id) ? 1 : -1)

      setHistoryForms(theData)

    } else {
      //sort by id desc
      theData.sort((a, b) => (a.id > b.id) ? -1 : 1)

      setHistoryForms(theData)
    }

    return data;
  }

  const sortDate = value => {
    let theData = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    if (value == 0) {
      //sort by created date from newest to oldest
      theData.sort((a, b) => (a.created_at > b.created_at) ? -1 : 1)

      setHistoryForms(theData)

    } else {
      //sort by updated date from newest to oldest
      theData.sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1)

      setHistoryForms(theData)
    }

    return data;
  }

  const searchData = value => {
    let theData = [];
    let searchResult = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    theData.map((item: any, key: number) => {
      let position = item.form.name.toLowerCase().search(value);

      if (position > -1) {
        searchResult.push(item)
      }

      setHistoryForms(searchResult)
    })

    return data;

  }

  return (
    <View style={styles.container}>
      <Outbox
        passData={filterData}
        passDataSort={sortDate}
        passDataAscDesc={sortAscDesc}
        searchData={searchData}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FORM HISTORY</Text>
        <Text style={styles.subText}>Recent</Text>
      </View>

      {
        (historyForms && historyForms.length == 0) &&
        <View style={styles.photoContainer}>
          <Image
            source={Icons.HISTORY_EMPTY_ICON}
            resizeMode="contain"
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerText}>You have no form here yet.</Text>
          </View>
        </View>
      }

      <View style={{ paddingTop: 15, flex: 1 }}>
        <KeyboardAwareFlatList
          keyExtractor={item => item.id}
          data={historyForms}
          initialNumToRender={500}
          showsVerticalScrollIndicator={false}
          renderItem={renderHistory}
          removeClippedSubviews={false}
          extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}
          enableOnAndroid={true}
          enableResetScrollToCoords={false}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={false}
          //     onRefresh={refetch}
          //   />
          // }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: Colors.DirtyWhite
  },

  formContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    // padding: Spaces.Small,
  },

  btnContainer: {
    borderRadius: 5,
    borderColor: Colors.AltRed,
  },
  btnText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    color: Colors.AltRed,
  },
  headerContainer: {
    marginHorizontal: 10,
    paddingTop: 20
  },
  headerText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    color: Colors.DarkGray,
  },
  subText: {
    fontFamily: FAMILY.QUICKSAND_BOLD,
    fontSize: SIZE.LARGE,
    color: Colors.Gray,
  },
  titleView: {
    flex: 1,
  },
  title: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.REGULAR,
    letterSpacing: 0.2,
    color: Colors.DarkGray,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    marginBottom: Spaces.SuperSuperSmall,
    paddingHorizontal: Spaces.Small,
    paddingVertical: Spaces.Small,
  },
  itemLabel: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: 15,
    flex: 1,
  },
  itemDescription: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    flex: 1,
  },
  itemSubmitted: {
    color: Colors.DarkRed,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    flex: 1,
  },
  logo: {
    // marginTop: 250
    // width: '50%',
    // height: 150,
    // marginBottom: 20,
  },
  photoContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusLabel: {
    // color: Colors.DarkRed,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    // paddingBottom: 5
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight: 10,
  },
});

export default HistoryScreen;
