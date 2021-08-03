import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../../../services/universities.service';

@Component({
  selector: 'app-add-universities',
  templateUrl: './add-universities.component.html',
  styleUrls: ['./add-universities.component.scss']
})
export class AddUniversitiesComponent implements OnInit {
  form;
  optoins;
  successEmitter: any;
  options = {
    "hooks": {
      "beforeSubmit": function(submission, callback) {
        console.log('before submit');
        callback(null, submission)
      }
    }
  }



  constructor(
    private universitiesService: UniversitiesService
  ) { }

  ngOnInit(): void {
    this.form = {
      "components":[
        {
          "input":true,
          "tableView":true,
          "inputType":"text",
          "inputMask":"",
          "label":"Enter University Name",
          "key":"name",
          "placeholder":"Enter University Name",
          "prefix":"",
          "suffix":"",
          "multiple":false,
          "defaultValue":"",
          "protected":false,
          "unique":false,
          "persistent":true,
          "validate":{
            "required":true,
            "minLength":"",
            "maxLength":"",
            "pattern":"",
            "custom":"",
            "customPrivate":false
          },
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "type":"textfield",
          "$$hashKey":"object:18",
          "autofocus":false,
          "hidden":false,
          "clearOnHide":true,
          "spellcheck":true,
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "properties":{

          }
        },
        {
          "autofocus":false,
          "input":true,
          "tableView":true,
          "inputType":"number",
          "label":"Enter ChildOf",
          "key":"childOf",
          "placeholder":"Enter ChildOf",
          "prefix":"",
          "suffix":"",
          "defaultValue":"",
          "protected":false,
          "persistent":true,
          "hidden":false,
          "clearOnHide":true,
          "validate":{
            "required":true,
            "min":"",
            "max":"",
            "step":"any",
            "integer":"",
            "multiple":"",
            "custom":""
          },
          "type":"number",
          "labelPosition":"top",
          "tags":[

          ],
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "properties":{

          },
          "$$hashKey":"object:2814"
        },
        {
          "input":true,
          "tableView":true,
          "inputType":"text",
          "inputMask":"",
          "label":"Enter City",
          "key":"city",
          "placeholder":"Enter City",
          "prefix":"",
          "suffix":"",
          "multiple":false,
          "defaultValue":"",
          "protected":false,
          "unique":false,
          "persistent":true,
          "validate":{
            "required":true,
            "minLength":"",
            "maxLength":"",
            "pattern":"",
            "custom":"",
            "customPrivate":false
          },
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "type":"textfield",
          "autofocus":false,
          "hidden":false,
          "clearOnHide":true,
          "spellcheck":true,
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "properties":{

          },
          "hideLabel":false,
          "$$hashKey":"object:710"
        },
        {
          "input":true,
          "tableView":true,
          "inputType":"text",
          "inputMask":"",
          "label":"Enter StateId",
          "key":"stateId",
          "placeholder":"Enter StateId",
          "prefix":"",
          "suffix":"",
          "multiple":false,
          "defaultValue":"",
          "protected":false,
          "unique":false,
          "persistent":true,
          "validate":{
            "required":true,
            "minLength":"",
            "maxLength":"",
            "pattern":"",
            "custom":"",
            "customPrivate":false
          },
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "type":"textfield",
          "autofocus":false,
          "hidden":false,
          "clearOnHide":true,
          "spellcheck":true,
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "properties":{

          },
          "hideLabel":false,
          "$$hashKey":"object:876"
        },
        {
          "input":true,
          "tableView":true,
          "inputType":"text",
          "inputMask":"",
          "label":"Enter CountryId",
          "key":"countryId",
          "placeholder":"Enter CountryId",
          "prefix":"",
          "suffix":"",
          "multiple":false,
          "defaultValue":"",
          "protected":false,
          "unique":false,
          "persistent":true,
          "validate":{
            "required":true,
            "minLength":"",
            "maxLength":"",
            "pattern":"",
            "custom":"",
            "customPrivate":false
          },
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "type":"textfield",
          "autofocus":false,
          "hidden":false,
          "clearOnHide":true,
          "spellcheck":true,
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "properties":{

          },
          "hideLabel":false,
          "$$hashKey":"object:1049"
        },
        {
          "input":true,
          "tableView":true,
          "label":"Enter Overview",
          "key":"overview",
          "placeholder":"Enter Overview",
          "prefix":"",
          "suffix":"",
          "rows":3,
          "multiple":false,
          "defaultValue":"",
          "protected":false,
          "persistent":true,
          "validate":{
            "required":true,
            "minLength":"",
            "maxLength":"",
            "pattern":"",
            "custom":""
          },
          "type":"textarea",
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "autofocus":false,
          "hidden":false,
          "wysiwyg":false,
          "clearOnHide":true,
          "spellcheck":true,
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "properties":{

          },
          "$$hashKey":"object:2883"
        },
        {
          "autofocus":false,
          "input":true,
          "tableView":true,
          "inputType":"number",
          "label":"Enter Global Rank",
          "key":"globalRank",
          "placeholder":"Enter Global Rank",
          "prefix":"",
          "suffix":"",
          "defaultValue":"",
          "protected":false,
          "persistent":true,
          "hidden":false,
          "clearOnHide":true,
          "validate":{
            "required":true,
            "min":"",
            "max":"",
            "step":"any",
            "integer":"",
            "multiple":"",
            "custom":""
          },
          "type":"number",
          "$$hashKey":"object:2061",
          "labelPosition":"top",
          "tags":[

          ],
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "properties":{

          }
        },
        {
          "autofocus":false,
          "input":true,
          "inputType":"checkbox",
          "tableView":true,
          "label":"Is IELTS Accepted",
          "dataGridLabel":false,
          "key":"ieltsAccepted",
          "defaultValue":false,
          "protected":false,
          "persistent":true,
          "hidden":false,
          "name":"",
          "value":"",
          "clearOnHide":true,
          "validate":{
            "required":true
          },
          "type":"checkbox",
          "labelPosition":"right",
          "$$hashKey":"object:2954",
          "hideLabel":false,
          "tags":[

          ],
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "properties":{

          }
        },
        {
          "autofocus":false,
          "input":true,
          "tableView":true,
          "inputType":"email",
          "label":"Enter University Email",
          "key":"uniEmail",
          "placeholder":"Enter University Email",
          "prefix":"",
          "suffix":"",
          "defaultValue":"",
          "protected":false,
          "unique":true,
          "persistent":true,
          "hidden":false,
          "clearOnHide":true,
          "kickbox":{
            "enabled":true
          },
          "type":"email",
          "$$hashKey":"object:3182",
          "labelPosition":"top",
          "inputFormat":"plain",
          "tags":[

          ],
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "properties":{

          },
          "validate":{
            "required":true
          }
        },
        {
          "type":"button",
          "theme":"primary",
          "disableOnInvalid":true,
          "action":"submit",
          "block":false,
          "rightIcon":"",
          "leftIcon":"",
          "size":"md",
          "key":"submit",
          "tableView":false,
          "label":"Submit",
          "input":true,
          "$$hashKey":"object:22",
          "autofocus":false,
          "tags":[

          ],
          "conditional":{
            "show":"",
            "when":null,
            "eq":""
          },
          "properties":{

          }
        }
      ],
      "display":"form",
      "page":0
    }

    this.options ={
      "hooks": {
        "beforeSubmit": function(submission, callback) {
            console.log(submission);
            // Do something asynchronously.
            setTimeout(function() {
              // Callback with a possibly manipulated submission.
              callback(null, submission);
            }, 1000);
        }
      }
    }
  }

  onSubmit(submission: any) {
    delete submission.data.submit
    this.universitiesService.addUniversity(submission.data).subscribe((res) => {
      console.log(res);
      console.log(submission);
      this.ngOnInit();
    })

  }

}
