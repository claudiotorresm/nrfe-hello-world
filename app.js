requirejs.config(
{
	baseUrl: 'bower_components',
	paths:
	{
		mustache: 'mustache.js/mustache',
		nrfe: 'nrfe/nrfe',
		json: 'requirejs-plugins/src/json',
		text: 'requirejs-plugins/lib/text'
	},
	shim:
	{
		'jquery/dist/jquery':
		{
			exports: '$'
		}
	}
});

// Start the main app logic.
requirejs(['nrfe','jquery/dist/jquery','mustache','json!../flows.json', 'json!nrfe-widgets/widgetlist.json'],
	function(nrfe, $, mustache, definition, widgetlist)
	{
		var generator = new nrfe(widgetlist, document.getElementById("content"), function()
		{
			console.log('nrfe loaded');
			console.log(definition);
			generator.render(definition);
		});


	});