import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'List Mobil',
      act: 0,
      index: '',
      datas: []     //data kita
    }
  } 

  componentDidMount(){            //agar fokus ke dalam name field
    this.refs.name.focus();
  }

  Submit = (e) =>{              //fungsi submit
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;             //variabel ini untuk menerima value dari form
    let name = this.refs.name.value;
    let tMobil = this.refs.tMobil.value;

    if(this.state.act === 0) {          //new
      let data = {                      //variabel ini untuk menahan value
        name, tMobil
      }
      datas.push(data);
    }else{                            //update data
      let index = this.state.index;
      datas[index].name = name;
      datas[index].tMobil = tMobil;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();         //untuk reset state form
    this.refs.name.focus();
  }

  delete = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);               //untuk menghapus data di dalam objek
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();         
    this.refs.name.focus();
  }

  edit = (i) => {
    let data = this.state.datas[i];           //menggunakan indeks parameter untuk opbjeknya
    this.refs.name.value = data.name;         //untuk update value dari form field
    this.refs.tMobil.value = data.tMobil;

    this.setState({
      act: 1,
      index: i
    })

    this.refs.name.focus();
  }

  render() {
    let datas = this.state.datas;         //instalasi data
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Merk Mobil" className="formField" />
          <input type="text" ref="tMobil" placeholder="Type Mobil" className="formField" />
          <button onClick={(e)=>this.Submit(e)} className="Button">Tambah </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.tMobil}
              <button onClick={()=>this.delete(i)} className="button">Delete</button>
              <button onClick={()=>this.edit(i)} className="button">Edit</button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}
  
export default App;
