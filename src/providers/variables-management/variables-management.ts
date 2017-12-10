// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import math = require('mathjs');
/*
  Generated class for the VariablesManagementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariablesManagementProvider {

/*
  varName: varName,
  varType: "MATRIX",
  varValue: varValue,
*/
  // constructor(public http: HttpClient) {
  constructor() {    
    console.log('Hello VariablesManagementProvider Provider');
  }

  public allVar = [{
    varName: "TESTMATRIX",
    varType: "MATRIX",
    varValue: math.matrix([[1,2],[3,4]]),
  }];

  public testSet() {
    // this.allVar[0]++;
  }

  public addMatrix(varName, varValue) {
    let modifiedVarName = varName;
    if(this.get(varName)) modifiedVarName += "+";
    this.allVar.push({
      varName: modifiedVarName,
      varType: "MATRIX",
      varValue: math.matrix(varValue),
    })
    return this.allVar[this.allVar.length-1];
  }

  public createMatrix() {
    return {
      varName: "#"+this.allVar.length,
      varType: "MATRIX",
      varValue: math.matrix([[0]]),
    }
  }

  public get(varName) {
    for (let i of this.allVar) {
      if (i.varName == varName) return i;
    }
    return;
  }

  public size(matrixVar) {
    return math.size(matrixVar.varValue);
  }

  public dimension(matrixVar) {
    return math.size(matrixVar.varValue).length;
  }

  // dimensions: array that contains the target size.
  // currently only support <=2D matrix
  public resize(matrixVar, dimensions) {
    return matrixVar.varValue.resize(dimensions);
  }
}
