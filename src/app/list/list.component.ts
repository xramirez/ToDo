import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todo:string = "";
  name: string;
  list: { todo: string, completed: boolean, show:boolean }[] = [{ todo: 'Walk the dogs', completed: false, show: true}];
  constructor() {
    this.name = 'Xavi'
  }

  ngOnInit(): void {
  }

  addItem(todo: string) {
    this.list.push({ todo, completed: false, show: true})
  }

  select(index: number) {
    console.log(this.list[index])
    if(this.list[index].completed){
      this.list.splice(index, 1);
    }
    else{
      this.list[index].completed = true;
    }
  }

  edit(index:number, newValue?:string){
    this.list[index].show = !this.list[index].show;

    if(this.list[index].show){
      this.list[index].todo = newValue!;
      this.list[index].completed = false;
    }
  }
}
