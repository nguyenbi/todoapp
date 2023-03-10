import React, {Component} from "react"
import TaskItem from "./taskitem";

class TaskList extends Component {
  render(){
    var {tasks}= this.props;
    var elementTasks = tasks.map((item, key) =>{
        return <TaskItem item={item} id={key}/>
    })
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    
                    <td>
                        <select className="form-control">
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {
                    elementTasks
                }
            </tbody>
        </table>
    </div>
    );
  }
  }
  

export default TaskList;
