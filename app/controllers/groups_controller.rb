class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create

  end

  def edit
    @group = Group.find(1)
  end

  def update

  end

end
