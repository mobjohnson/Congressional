class SearchItemsController < ApplicationController

  before_action :set_search_item, only: [:show, :update, :destroy]

  def index
    render json: SearchItem.all, status: 200
  end

  def show
    render json: @search_item.to_json, status: 200
  end

  def create
    @search_item = SearchItem.new(search_item_params)
    render json: @search_item.to_json, status: 200 if @search_item.save
  end

  def update
    render json: @search_item.to_json, status: 200 if @search_item.update(search_item_params)
  end

  def destroy
    render json: @search_item.to_json if @search_item.destroy
  end

  private

  def set_search_item
    @search_item = SearchItem.find(params[:id])
  end

  def search_item_params
    params.require(:search_item).permit(:state1, :state2, :phrase, :results1, :results2)
  end
end