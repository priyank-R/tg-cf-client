import { Injectable, OnInit } from '@angular/core';

import * as staticData from '../../assets/config/map/static.json';

@Injectable({
  providedIn: 'root'
})
export class MapService  implements OnInit{
  staticJson;
  stateIdtoStateNameMap: Map<number, string> = new Map();
  stateNametoStateIdMap : Map<string, number> = new Map();
  AddUniversityStateObject = [];
  AddCountryObj = [];

  constructor() {
    this.staticJson = ( staticData as any ).default;
    for(let state of this.staticJson.states.rows){
      this.stateIdtoStateNameMap.set(state.stateId, state.stateName);
    }
    for(let state of this.staticJson.states.rows){
      this.stateNametoStateIdMap.set(state.stateName, state.stateId);
    }
    // for(let state of this.staticJson.states.rows){
    //   let tempObj = {}
    //   tempObj["label"] = state.stateName;
    //   tempObj["value"] = state.stateId;
    //   this.AddUniversityStateObject.push(tempObj);
    // }

    // for(let country of this.staticJson.countries){
    //   let tempObj = {}
    //   tempObj["label"] = country.countryName;
    //   tempObj["value"] = country.countryId;
    //   this.AddCountryObj.push(tempObj);
    // }
  }
  ngOnInit(): void {
  }

  // getStaticJson() {
  //   console.log(this.staticJson)
  //   // return this.staticJson;
  // }

  // getStateJson(){
  //   console.log(this.staticJson.states)
  //   console.log(typeof this.staticJson.states);
  // }

  // mapStateIdtoStateName(stateId: number) {
  //   return this.staticJson.states.rows.find(state => state.stateId === stateId).stateName;
  // }

  // printAddUniversityStateObject(){
  //   console.log(this.AddUniversityStateObject);
  // }

  // printAddCountryObj(){
  //   console.log(this.AddCountryObj);
  // }

  mapStateIdToStateName(stateId: number) {
    return this.stateIdtoStateNameMap.get(stateId);
  }

  mapStateNameToStateId(stateName: string) {
    return this.stateNametoStateIdMap.get(stateName);
  }


  mapAllIdsToNames(univeritywithBaseId){
  }

}
