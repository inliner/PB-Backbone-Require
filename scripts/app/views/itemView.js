define( ['backbone'], function (Backbone) {

    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        className: 'single-item',
        template: _.template('<td><input type="checkbox"></td><td><%= name %></td><td><%= phoneNumber %></td><td><a href="/#people/<%= id %>"class="details">Click for details</a></td>'),

        events: {
            'click .details': 'showItem'
        },
        
        render: function(){

            this.$el.html(this.template(this.model.attributes));
            this.$el.attr('data-itemid', this.model.id);

            return this.$el;
        },

        showItem: function () {
            Backbone.history.navigate('people/' + this.model.id, { trigger: true });
        }

    });

    return ItemView;
});