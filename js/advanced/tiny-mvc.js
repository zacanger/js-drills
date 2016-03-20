// write an MVC framework.
// yes, you read that correctly.
// write your own MVC framework.

var tinyMVC = {}

tinyMVC.Model = function(){this._observers = []}

tinyMVC.Model.prototype.observe = function(observer){
  this._observers.push(observer)
}

tinyMVC.Model.prototype.unobserve = function(observer){
  for(var i = 0, ilen = this._observers.length; i < ilen; i++){
    if(this._observers[i] === observer){
      this._observers.splice(i, 1)
      return
    }
  }
}

tinyMVC.Model.prototype.notify = function(data){
  var observers = this._observers.slice(0)
  for(var i = 0, ilen = observers.length; i < ilen; i++){
    observers[i].update(data)
  }
}

tinyMVC.View = function(){this._subViews = []}

tinyMVC.View.prototype.update = function(){}

tinyMVC.View.prototype.getModel = function(){
  return this._model
}

tinyMVC.View.prototype.setModel = function(model){
  this._setModelAndController(model, this._controller)
}

tinyMVC.View.prototype.getDefaultController = function(){
  return new tinyMVC.Controller()
}

tinyMVC.View.prototype.getController = function(){
  if(!this._controller){
    this.setController(this.getDefaultController())
  }
  return this._controller
}

tinyMVC.View.prototype.setController = function(controller){
  this._setModelAndController(this._model, controller)
}

tinyMVC.View.prototype._setModelAndController = function(model, controller){
  if(this._model !== model){
    if(this._model){
      this._model.unobserve(this)
    }
    if(model){
      model.observe(this)
    }
    this._model = model
  }
  if(controller){
    controller.setView(this)
    controller.setModel(model)
  }
  this._controller = controller
}

tinyMVC.View.prototype.getSubViews = function(){
  return this._subViews.slice(0)
}

tinyMVC.View.prototype.addSubView = function(subView){
  var previousSuperView = subView.getSuperView()
  if(previousSuperView){
    previousSuperView.removeSubView(subView)
  }
  this._subViews.push(subView)
  subView.setSuperView(this)
}

tinyMVC.View.prototype.removeSubView = function(subView){
  for(var i = 0, ilen = this._subViews.length; i < ilen; i++){
    if(this._subViews[i] === subView){
      this._subViews[i].setSuperView(null)
      this._subViews.splice(i, 1)
      return
    }
  }
}

tinyMVC.View.prototype.setSuperView = function(superView){
  this._superView = superView
}

tinyMVC.View.prototype.getSuperView = function(){
  return this._superView
}

tinyMVC.View.prototype.destroy = function(){
  if(this._model){
    this._model.unobserve(this)
  }
  for(var i = 0, ilen = this._subViews.length; i < ilen; i++){
    this._subViews[i].destroy()
  }
}

tinyMVC.Controller = function(){}

tinyMVC.Controller.prototype.getModel = function(){
  return this._model
}

tinyMVC.Controller.prototype.setModel = function(model){
  this._model = model
}

tinyMVC.Controller.prototype.getView = function(){
  return this._view
}

tinyMVC.Controller.prototype.setView = function(view){
  this._view = view
}

