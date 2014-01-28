
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Rashid', content: 'He is the man around town & cool' });
};