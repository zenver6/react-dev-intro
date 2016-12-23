import React from 'react'
import ReactDOM from 'react-dom'
import Perf from 'react-addons-perf'

// var HelloWorld = React.createClass({
//   render: function() {
//     return React.DOM.h2(null, 'Hello, ' + this.props.name + ' React');
//   }
// });

// class HelloWorld extends React.Component {
//   render() {
//     return(
//       <h2>Hello {this.props.name} React!</h2>
//     );
//   }
// }

//List 2-12
// var MultiElement = React.createClass({
//   render: function(){
//     return React.DOM.div(null,
//       React.DOM.h2(null, 'First Element'),
//       React.DOM.h2(null, 'Second Element'),
//       React.DOM.h2(null, 'Third Element')
//     );
//   }
// });

// class MultiElement extends React.Component {
//   render() {
//     return(
//       <div>
//         <h2>First Element</h2>
//         <h2>Second Element</h2>
//         <h2>Third Element</h2>
//       </div>
//     );
//   }
// }

//List2-14
// var Evaluator = React.createClass({
//
//   getInitialState: function(){
//     return {
//       expression: ''
//     }
//   },
//   reCalacValue: function(e){
//     if(e.key === 'Enter') {
//       this.setState({
//         expression: e.target.value
//       });
//     }
//   },
//   render: function(){
//     return React.DOM.div(
//       null,
//       React.DOM.input({
//         type: 'text',
//         placeholder: 'placeholder',
//         onKeyPress: this.reCalacValue
//       }),
//       React.DOM.h2(null, eval(this.state.expression))
//     );
//   }
// });

// class Evaluator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {expression: ''};
//     this.reCalacValue = this.reCalacValue.bind(this);
//   }
//
//   componentWillMount() {
//     console.log('componentWillMount: ');
//   }
//   componentDidMount() {
//     console.log('componentDidMount: ');
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log('componentWillReceiveProps: ', nextProps);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate: ', nextProps, nextState);
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log('componentWillUpdate: ', nextProps, nextState);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate: ', prevProps, prevState);
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount: ');
//   }
//
//   reCalacValue(e) {
//     if(e.key === 'Enter') {
//       this.setState({
//         expression: e.target.value
//       });
//     }
//   }
//
//   render() {
//     return(
//       <div>
//         <input type='text' onKeyPress={this.reCalacValue} placeholder='placeholder' />
//         <h2>{eval(this.state.expression)}</h2>
//       </div>
//     );
//   }
// }


//List3-9 P70
// var myAttriutes = {
//   type: 'checkbox',
//   checked: true,
//   readOnly: true,
//   disabled: true,
//   size: 8
// }
//
// class CheckBoolean extends React.Component {
//   render() {
//     return(
//       <div>
//         <p><input type="checkbox" checked />JSX Check1</p>
//         <p><input type="checkbox" checked={true} />JSX Check2</p>
//         <p><input type="checkbox" checked={false} />JSX Check3</p>
//         <p><input {...myAttriutes} />JSX Check4</p>
//       </div>
//     );
//   }
// }

//List3-17 P81
// class ColoredButton extends React.Component {
//
//   render() {
//     var defAttrs = {
//       style: {
//         color: 'orange',
//         fontFamily: 'Serif',
//         fontSize: 22
//       },
//       type: 'button',
//       disabled: false
//     }
//
//     return(
//       <button {...defAttrs} {...this.props}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

//List4-2 P104
// class TextInput extends React.Component {
//   constructor() {
//     super();
//     this.state = {dispText: '入力欄'};
//     this.handleInput = this.handleInput.bind(this);
//   }
//
//   handleInput(event) {
//     this.setState({dispText: event.target.value});
//     console.log(this.state.dispText);
//   }
//
//   render() {
//     return (
//       <div>JSX input: <input type="text" value={this.state.dispText} onChange={this.handleInput} /></div>
//     )
//   }
// }

//List4-6 P112
// class RadioButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {selection: 'first'};
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     console.log(event.target.value);
//     this.setState({selection: event.target.value});
//   }
//
//   render() {
//     return(
//       <div>どれか1つを選んでください:
//         <div>
//           <input type="radio" name="三択" value="first" checked = {this.state.selection === 'first'} onChange={this.handleChange}/>最初の選択肢
//         </div>
//         <div>
//           <input type="radio" name="三択" value="second" checked = {this.state.selection === 'second'} onChange={this.handleChange}/>次の選択肢
//         </div>
//         <div>
//           <input type="radio" name="三択" value="third" checked = {this.state.selection === 'third'} onChange={this.handleChange}/>最後の選択肢
//         </div>
//       </div>
//     )
//   }
// }

//List4-8 P118
// class CheckBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {selection: this.props.selection};
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     var selection = this.state.selection;
//     var position = selection.indexOf(event.target.value);
//     if(event.target.checked) {
//       selection.push(event.target.value);
//     }else {
//       selection.splice(position, 1);
//     }
//     this.setState({selection: selection});
//     console.log(this.state.selection);
//   }
//
//   render() {
//     return(
//       <div>いくつでも選んでください：
//         <div>
//           <input type="checkbox" value="first" checked={this.state.selection.indexOf('first') !== -1} onChange={this.handleChange} />最初の選択肢
//         </div>
//         <div>
//           <input type="checkbox" value="second" checked={this.state.selection.indexOf('second') !== -1} onChange={this.handleChange} />次の選択肢
//         </div>
//         <div>
//           <input type="checkbox" value="third" checked={this.state.selection.indexOf('third') !== -1} onChange={this.handleChange} />最後の選択肢
//         </div>
//       </div>);
//   }
// }

//List4-10 P125
// class SingleSelection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {selection: this.props.selection};
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     console.log(event.target.value);
//     this.setState({selection: event.target.value});
//   }
//
//   render() {
//     return(
//       <div>どれか一つを選んでください
//         <select onChange={this.handleChange} multiple={false} value={this.state.selection}>
//           <option value="first">最初の選択肢</option>
//           <option value="second">次の選択肢</option>
//           <option value="third">最後の選択肢</option>
//         </select>
//       </div>
//     );
//   }
// }

//List4-12 P130
// class TextArea extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {dispText: this.props.dispText};
//     this.handleInput = this.handleInput.bind(this);
//   }
//
//   handleInput(event) {
//     this.setState({dispText: event.target.value});
//     console.log(this.state.dispText);
//   }
//
//   render() {
//     return(
//       <div>何か入力してください：
//         <textarea value={this.state.dispText} onChange={this.handleInput} rows="3"/>
//       </div>
//     );
//   }
// }

//List4-13 P134
// class FormSubmit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {selection: this.props.selection};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     var selection = this.state.selection;
//     var position = selection.indexOf(event.target.value);
//     if(event.target.checked) {
//       selection.push(event.target.value);
//     } else {
//       selection.splice(position, 1);
//     }
//     this.setState({selection: selection});
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     if(this.state.selection.length < 2) return;
//     console.log('Submitting: ', this.state.selection);
//     this.setState({selection: []});
//   }
//
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         2つ以上を選んでください：
//         <div>
//           <input type="checkbox" value="first" onChange={this.handleChange} checked={this.state.selection.indexOf('first') !== -1} />
//           最初の選択肢
//         </div>
//         <div>
//           <input type="checkbox" value="second" onChange={this.handleChange} checked={this.state.selection.indexOf('second') !== -1} />
//           次の選択肢
//         </div>
//         <div>
//           <input type="checkbox" value="third" onChange={this.handleChange} checked={this.state.selection.indexOf('third') !== -1} />
//           最後の選択肢
//         </div>
//         <input type="submit" value="決定"/>
//       </form>
//     );
//   }
// }

//List4-14 P139
// var tableData = [
//     {id: 1, name: '山田太郎', area: '東京都港区', number: '8513321'},
//     {id: 2, name: 'スズキイチロウ', area: '愛知県', number: '265'},
//     {id: 3, name: '高橋次郎', area: '埼玉県', number: '590345'}
// ];
//
// class SimpleTable extends React.Component {
//
//   render() {
//     var tableBody = this.props.data.map( (person) => {
//       return (
//         <tr key={person.id}>
//           <td>{person.name}</td>
//           <td>{person.area}</td>
//           <td>{person.number}</td>
//         </tr>
//       )
//     });
//
//     return(
//       <table>
//         <thead>
//           <tr>
//             <th>名前</th>
//             <th>地域</th>
//             <th>番号</th>
//           </tr>
//         </thead>
//         <tbody>{tableBody}</tbody>
//       </table>
//     );
//   }
// }

//List4-18 P150
// var tableColumns = ['名前', '地域', '番号'];
// var tableData = [
//   {id: 1, name: '山田太郎', area: '東京都港区', number: '8513321'},
//   {id: 2, name: '鈴木次郎', area: '神奈川県横浜市', number: '6912312'},
//   {id: 3, name: '田中三郎', area: '千葉県銚子市', number: '7891279'}
// ];
//
// class ContactTable extends React.Component {
//   render() {
//     return (
//       <table>
//         {this.props.children}
//       </table>
//     );
//   }
// }
//
// ContactTable.Header = class Header extends React.Component {
//   render() {
//     var tableTitles = this.props.title.map(function(cName, i) {
//       return (
//         <th key={i}>
//           {cName}
//         </th>
//       );
//     });
//     return (
//       <thead>
//         <tr>
//           {tableTitles}
//         </tr>
//       </thead>
//     );
//   }
// }
//
// ContactTable.Body = class Body extends React.Component {
//   render() {
//     var tableRows = this.props.data.map(function(person) {
//       return (
//         <tr key={person.id}>
//           <td>{person.name}</td>
//           <td>{person.area}</td>
//           <td>{person.number}</td>
//         </tr>
//       );
//     });
//     return (
//       <tbody>
//         {tableRows}
//       </tbody>
//     );
//   }
// }
//
// class DispTable extends React.Component {
//   render() {
//     return (
//       <ContactTable className="regularTable">
//         <ContactTable.Header title={this.props.title} />
//         <ContactTable.Body data={this.props.data} />
//       </ContactTable>
//     );
//   }
// }

//List4-20 P158
var tableColumns = ['名前', '地域', '番号'];
var tableData = [
  {id: 1, name: '山田太郎', area: '東京都港区', number: '8513321'},
  {id: 2, name: '鈴木次郎', area: '神奈川県横浜市', number: '6912312'},
  {id: 3, name: '田中三郎', area: '千葉県銚子市', number: '7891279'}
];

class ContactTable extends React.Component {

  render() {
    return (
      <table>
        {this.props.children}
      </table>
    );
  }
}

ContactTable.Header = class Header extends React.Component {
  render() {
    var tableTitles = this.props.title.map(function(cName, i) {
      return (
        <th key={i}>
          {cName}
        </th>
      );
    });
    return (
      <thead>
        <tr>
          {tableTitles}
        </tr>
      </thead>
    );
  }
}

ContactTable.Body = class Body extends React.Component {
  render() {
    var tableRows = this.props.data.map(function(person) {
      return (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.area}</td>
          <td>{person.number}</td>
        </tr>
      );
    });
    return (
      <tbody>
        {tableRows}
      </tbody>
    );
  }
}

class DispTable extends React.Component {
  render() {
    return (
      <ContactTable className="regularTable">
        <ContactTable.Header title={this.props.title} />
        <ContactTable.Body data={this.props.data} />
      </ContactTable>
    );
  }
}

Perf.start();
ReactDOM.render(
  // React.createElement(HelloWorld), //js
  <DispTable title={tableColumns} data={tableData} />,
  document.getElementById('app')
);
Perf.stop();
var measurements = Perf.getLastMeasurements();
Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
