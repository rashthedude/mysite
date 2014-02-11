
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Rashid\s Sphere', content: 'Rashid A. Omar is a back-end & mobile developer,', content2: "lives currently in London, UK."});
};