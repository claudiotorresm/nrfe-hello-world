requirejs.config(
{
	baseUrl: 'bower_components',
	paths:
	{
		Mustache: 'mustache.js/mustache',
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
requirejs(['nrfe','jquery/dist/jquery','Mustache','json!../flows.json', 'json!nrfe-widgets/widgetlist.json'],
	function(nrfe, $, Mustache, definition, widgetlist)
	{
		document.addEventListener(
			'deviceready',
			function()
			{
				console.log('device ready - now loading the show..');
				var generator = new nrfe(widgetlist, function()
				{
					generator.render(definition, document.getElementById("content"));
				});
			},
			false);
	});