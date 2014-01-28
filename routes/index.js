
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Rashid', content: 'Rashid is a back-end coder & mobile developer' });
};