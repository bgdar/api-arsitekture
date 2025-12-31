
import { log } from "console";

 interface TaskType  {
  judul : string ,
  description : string; 
  create_at : Date;
  update_at : Date;

}


export default class CrudeProvider {


  // route handle 
  public readData(tasks : TaskType[]) {

    tasks.forEach(v => {
      log(v)
    });
    
  }
  public updateData(newtask : TaskType  ) {
    // this.tasks = [..data]

  }


}

