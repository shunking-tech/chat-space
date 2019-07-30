require 'rails_helper'

RSpec.describe Message, type: :model do
  before do 
    @message = build(:message)
  end

  describe 'バリデーション' do
    it 'メッセージがあれば、OK' do
      expect(@message.content.valid?).to eq(true)
    end
  end
end