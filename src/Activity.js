var React=require('react');
var ReactDom=require('react-dom');

var Activity=React.createClass({
 render:function()
 {
     var activity=this.props.ActivityData.Tabs;
     var current=this;
     var Boxes= Object.keys(activity).map(function(act){
             
                return(
                       <button className="btn" id={activity[act].ID} onClick={current.props.handleClick} name={activity[act].Title}>
                            {activity[act].Name}
                       </button>
                )
            });
     return (
      <div>
        {
           Boxes
        }
      </div>
     )
 }
});
module.exports=Activity;