import React, {Component} from "react"

class TaskItem extends Component {
  render(){
    var {item, id} = this.props
    return (
                <tr>
                    <td>{id +1 }</td>
                    <td>{item.name}</td>
                    <td className="text-center">
                        <span className={item.status === true ? "label label-success" : "label label-danger"}>
                                    {item.status === false ? "unActive" : "Active"}
                                </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="icon icon-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="icon icon-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
    );
  }
  }
  

export default TaskItem;
