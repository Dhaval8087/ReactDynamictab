var React = require('react');
var ReactDom = require('react-dom');
var Activity = require('./Activity');
var data = require('../data');
var HandleTabs = require('./HandleTabs');
var Tabs = [];
var activeIndex = 0;

Array.prototype.checkDuplicate = function (argu1, obj) {
    var isDuplicate = false;

    for (var i = 0; i < this.length; i++) {

        console.log("Argu");
        console.log(this[i][argu1])
        console.log("tabid");
        console.log(obj);
        if (this[i][argu1] == obj) {
            isDuplicate = true;
            break;
        }
    }
    console.log(isDuplicate);
    return isDuplicate;
}


var App = React.createClass({
    handleClick: function (event) {
        var id = event.target.id;
        activeIndex = id - 1;
        var Title = event.target.name;
        if (Tabs.checkDuplicate('ID', id) === false) {
            Tabs.push(data.Tabs[activeIndex]);
        }

        this.setState({});
    },
    closePanel: function (event) {
        Tabs.splice(event, 1)
        if (event !== 0) {
            activeIndex = event - 1;
        }
       
        this.setState({});

    },
    activePanel: function (index) {
        activeIndex = index;
        this.setState({});
    },

    render: function () {

        var jsonPretty = JSON.stringify(data, null, '\t');
        return (
            <div>
                <div>
                    <h3>To generate the tab please click on below mentioned buttons </h3>
                </div>
                <br />
                <Activity ActivityData={data} handleClick={this.handleClick} />

                <br />
                <br />
                <HandleTabs Tabs={Tabs} closePanel={this.closePanel} actIndex={activeIndex} activePanel={this.activePanel} />
                <h2>JSON Data used in file : </h2>
                <br />
                <pre>
                    {jsonPretty}
                </pre>
            </div>
        )
    }
});
module.exports = App;