import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoArr:{todo:string, completed:boolean}[]=[{todo:'Build To-Do List',completed:true},{todo:'Remove Item',completed:true},{todo:'Complete Item',completed:true},{todo:'Edit Item',completed:false}]
  name:string = 'Josh'
  constructor() { }

  ngOnInit(): void {
  }

  addItem(todo:string){
    this.todoArr.push({todo,completed:false})
  }

  findIndex(val:string):number{
    let item:string =val.substr(0,val.length-174);
    let rowindex:number = 0
    console.log(item)
    for(let i = 0;i < this.todoArr.length;i++){
      if(this.todoArr[i].todo === item){
        rowindex = i;
      }
    }
    return rowindex
  }
  removeItem(val:string){
    let i:number = this.findIndex(val)
    this.todoArr.splice(i,1)
    console.log(this.todoArr[i])
  }

  isCompleted(val:string){
    let i:number = this.findIndex(val)
    console.log(this.todoArr[i])
    this.todoArr[i].completed = true;
  }
}
