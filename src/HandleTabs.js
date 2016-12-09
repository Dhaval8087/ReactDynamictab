var React=require('react');
var ReactDom=require('react-dom');
import TabPanel, { TabStrip } from 'react-tab-panel'


var HandleTabs=React.createClass({

 render:function()
 {
     var Tabs=this.props.Tabs;
     //(index) => console.log(index)
     return(
         
          <TabPanel  closeable   onCloseTab={this.props.closePanel} onActivate={this.props.activePanel} activeIndex={this.props.actIndex}>
            {
                Object.keys(Tabs).map(function(tab){
                    console.log(Tabs[tab]);
                    return(
                      <div  tabTitle={Tabs[tab].Title}>
                          <h1>{Tabs[tab].content}</h1>
                      </div>
                    )
                })
            }
            </TabPanel>
         
     )
 }
});
module.exports=HandleTabs;