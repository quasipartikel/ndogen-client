//-----------------------------------------------------------------------------
// ListItem
//-----------------------------------------------------------------------------

var ListItem = function (node) {
  DocNode.call(this, node);
};

ListItem.prototype = Object.extend(DocNode);

ListItem.prototype.render = function () {
  var str = "<li>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });    
  }
  return str+"</li>";
};