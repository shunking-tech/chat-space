class GroupsController < ApplicationController

  def new
    @group = Group.new
    # @users = User.all
    @group.users << current_user
  end

  def create
    
  end

  def edit
    @group = Group.find(1)
  end

  def update

  end

  private

  def user_params
    params.require(:group).permit(:name, {:user_ids => []})
  end

end
