class GroupsController < ApplicationController

  def new
    @group = Group.new
    @users = User.all
  end

  def create
    group = Group.create(group_params)
  end

  def edit
    @group = Group.find(1)
  end

  def update

  end

  private

  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

end
