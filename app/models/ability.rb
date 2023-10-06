# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    if user.role == "adm"
      can :manage, :all
    elsif user.role == "att"
      can :create, Visitor
      can :create, Visit
      can [:read, :update], User, id: user.id
    elsif user.role == "emp"
      can [:read, :update], Visitor #, unit_id: #user.unit_id
      can [:read], Visit #, unit_id: #user.unit_id
      # can :notify_visit, Visit, user_id: #user.id
    end
    # Define abilities for the user here. For example:
    #
    #   return unless user.present?
    #   can :read, :all
    #   return unless user.admin?
    #   can :manage, :all
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, published: true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/blob/develop/docs/define_check_abilities.md
  end
end
