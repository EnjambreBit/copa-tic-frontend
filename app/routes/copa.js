import Ember from "ember";

export default Ember.Route.extend({
  afterModel() {
    return this.transitionTo("app.index", { queryParams: { id: "copa" } });
  }
});