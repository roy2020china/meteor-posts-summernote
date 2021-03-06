Template.postsIndex.rendered = function() {
};

Template.postsIndex.helpers({
});

Template.postsIndex.events ({
  'click .delete-post': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("您确定？")) {
      Posts.remove(item._id);
      console.log("已删除")
    }
  }
});

// Outputs e.g. 2 hours ago
// UI.registerHelper('showTimeAgo', function(date) {
//   return !date ? "" : moment(date).fromNow();
// });

// Outputs August 30th 2014, 5:33:46 pm
// UI.registerHelper('showPrettyTimestamp', function(date) {
//   return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
// });

UI.registerHelper('showPrettyTimestamp', function(date) {
  return !date ? "" : moment(date).format("YYYY-MM-DD");
});



