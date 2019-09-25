# README

## 機能一覧
  - ユーザー登録・ログイン・ログアウト・修正
  - 複数ユーザーでのチャット機能
  - チャットメッセージ送信時の非同期通信
  - チャットメッセージの自動更新

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|

### Association
- has_many :groups through: :members
- has_many :messages
- has_many : members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through: :members
- has_many :messages
- has_many : members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
