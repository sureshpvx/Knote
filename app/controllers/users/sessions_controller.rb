# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    super do |resource|
      # This block is only executed if the user is saved successfully.
      # If the request is a turbo_stream request, we will render
      # the create.turbo_stream.erb view.
      if resource.persisted? && request.format.turbo_stream?
        # Devise sets a flash message, so we just need to render the stream.
        render :create, locals: { resource: resource }
        return # Ensure we don't redirect after rendering.
      end
    end
  end
  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
