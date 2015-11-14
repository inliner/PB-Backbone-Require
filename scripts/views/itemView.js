define( ['backbone'], function (Backbone) {
	var ItemView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template('<td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
		// model: app.models.bookItem1,

		initialize: function () {
			// the same as below
			// this.listenTo(model, 'change', function)
			// var self = this;

			this.model.fetch();

			this.model.on('sync', this.onModelChange.bind(this));
			// this.model.on('change', function () {
			// 	self.onModelChange.apply(this);
			// });
		},

		onModelChange: function () {
			this.render();
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));
			return this.$el;
		}
	});

	return ItemView;
});