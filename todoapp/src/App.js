import React, {Component} from "react"
import './App.css';
import TaskForm from "./components/taskform";
import Control from "./components/control";
import TaskList from "./components/tasklist";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [] // id: unique, name, status
    }
  }

  componentWillMount(){
    if(localStorage.getItem("tasks")){
     var tasks = JSON.parse(localStorage.getItem("tasks"))
     this.setState(
      {
        tasks: tasks
      }
     )
    }
  }

  onGenerateData =() => {
    
    var tasks = [
      {
        id: this.generateID(),
        name: "PHP",
        status: true
      },
      {
        id: this.generateID(),
        name: "Java",
        status: false
      },
      {
        id: this.generateID(),
        name: "Asp.net",
        status: true
      }
    ];
    // console.log(tasks);
    this.setState(
      {
        tasks: tasks
      }
    );
     localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  randome(){
    return Math.floor((1+Math.random()) * 10000).toString(16).substring(1)
  }

  generateID(){
    return this.randome()+this.randome()+this.randome()+this.randome()+this.randome()+this.randome()
  }
  render(){
    var {tasks} = this.state
    return (
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <TaskForm></TaskForm>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button type="button" className="btn btn-primary">
                      <span className="icon icon-plus mr-5"></span>Thêm Công Việc
                  </button>
                  <button type="button" className="btn btn-success" onClick={this.onGenerateData}>
                      <span className="icon icon-plus mr-5"
                     
                       ></span>Generate data
                  </button>
                  <p></p>
                  <Control></Control>
                  <p></p>
                  <div className="row mt-15">
                      <TaskList tasks={tasks}></TaskList>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  }
  

export default App;
